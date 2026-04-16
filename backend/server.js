import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import Student, { Classroom, PracticeProblems } from './user.js';

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Student.findOne({ username });
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    
    res.status(200).json({ 
      message: 'Login successful', 
      username: user.username,
      userType: user.isTeacher ? 'teacher' : 'student',
      isTeacher: user.isTeacher
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Signup route (optional)
app.post('/api/signup', async (req, res) => {
  try {
    const { username, password, isTeacher = false } = req.body;
    const user = new Student({ username, password, isTeacher });
    await user.save();
    const userType = isTeacher ? 'teacher' : 'student';
    res.status(201).json({ message: `${userType.charAt(0).toUpperCase() + userType.slice(1)} created successfully` });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: 'Username already exists' });
    } else {
      res.status(500).json({ error: 'Failed to create user' });
    }
  }
});

// Create Classroom route
app.post('/api/classroom/create', async (req, res) => {
  try {
    const { classroomName, classroomSize, subject, description, classCode, createdBy } = req.body;
    
    // Find the teacher who is creating the classroom
    const teacher = await Student.findOne({ username: createdBy, isTeacher: true });
    if (!teacher) {
      return res.status(403).json({ error: 'Only teachers can create classrooms' });
    }

    // Check if classroom code already exists
    const existingClassroom = await Classroom.findOne({ classCode });
    if (existingClassroom) {
      return res.status(400).json({ error: 'Class code already exists. Please try again.' });
    }

    const classroom = new Classroom({
      classroomName: classroomName.trim(),
      classroomSize: parseInt(classroomSize),
      subject: subject || '',
      description: description || '',
      classCode,
      createdBy: teacher._id,
      classroomStudents: []
    });

    await classroom.save();
    
    // Populate the createdBy field for the response
    await classroom.populate('createdBy', 'username');
    
    res.status(201).json({
      ...classroom.toObject(),
      id: classroom._id,
      students: classroom.classroomStudents
    });
  } catch (err) {
    console.error('Error creating classroom:', err);
    res.status(500).json({ error: 'Failed to create classroom' });
  }
});

// Join Classroom route
app.post('/api/classroom/join', async (req, res) => {
  try {
    const { classCode, username } = req.body;
    
    // Find the student
    const student = await Student.findOne({ username, isTeacher: false });
    if (!student) {
      return res.status(403).json({ error: 'Only students can join classrooms' });
    }

    // Find the classroom by code
    const classroom = await Classroom.findOne({ classCode, isActive: true });
    if (!classroom) {
      return res.status(404).json({ error: 'Classroom not found or inactive' });
    }

    try {
      // Use the classroom method to add student
      await classroom.addStudent(student._id, student.username);
      
      res.status(200).json({ 
        message: 'Successfully joined classroom',
        classroom: {
          id: classroom._id,
          classroomName: classroom.classroomName,
          subject: classroom.subject,
          classCode: classroom.classCode
        }
      });
    } catch (addStudentError) {
      return res.status(400).json({ error: addStudentError.message });
    }
  } catch (err) {
    console.error('Error joining classroom:', err);
    res.status(500).json({ error: 'Failed to join classroom' });
  }
});

// Get teacher's classrooms
app.get('/api/classroom/teacher/:username', async (req, res) => {
  try {
    const { username } = req.params;
    
    const teacher = await Student.findOne({ username, isTeacher: true });
    if (!teacher) {
      return res.status(403).json({ error: 'Teacher not found' });
    }

    const classrooms = await Classroom.find({ createdBy: teacher._id, isActive: true })
      .populate('createdBy', 'username')
      .sort({ createdAt: -1 });

    const formattedClassrooms = classrooms.map(classroom => ({
      ...classroom.toObject(),
      id: classroom._id,
      students: classroom.classroomStudents
    }));

    res.status(200).json(formattedClassrooms);
  } catch (err) {
    console.error('Error fetching teacher classrooms:', err);
    res.status(500).json({ error: 'Failed to fetch classrooms' });
  }
});

// Get student's classrooms
app.get('/api/classroom/student/:username', async (req, res) => {
  try {
    const { username } = req.params;
    
    const student = await Student.findOne({ username, isTeacher: false });
    if (!student) {
      return res.status(403).json({ error: 'Student not found' });
    }

    const classrooms = await Classroom.find({ 
      'classroomStudents.studentId': student._id,
      isActive: true 
    })
      .populate('createdBy', 'username')
      .sort({ 'classroomStudents.joinedAt': -1 });

    const formattedClassrooms = classrooms.map(classroom => {
      const studentInfo = classroom.classroomStudents.find(
        s => s.studentId.toString() === student._id.toString()
      );
      
      return {
        ...classroom.toObject(),
        id: classroom._id,
        joinedAt: studentInfo?.joinedAt,
        teacherName: classroom.createdBy.username
      };
    });

    res.status(200).json(formattedClassrooms);
  } catch (err) {
    console.error('Error fetching student classrooms:', err);
    res.status(500).json({ error: 'Failed to fetch classrooms' });
  }
});

// Delete classroom
app.delete('/api/classroom/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;
    
    const teacher = await Student.findOne({ username, isTeacher: true });
    if (!teacher) {
      return res.status(403).json({ error: 'Only teachers can delete classrooms' });
    }

    const classroom = await Classroom.findOne({ _id: id, createdBy: teacher._id });
    if (!classroom) {
      return res.status(404).json({ error: 'Classroom not found or you do not have permission to delete it' });
    }

    await Classroom.findByIdAndUpdate(id, { isActive: false });
    
    res.status(200).json({ message: 'Classroom deleted successfully' });
  } catch (err) {
    console.error('Error deleting classroom:', err);
    res.status(500).json({ error: 'Failed to delete classroom' });
  }
});

// Practice Problems Routes

// Get all practice problems
app.get('/api/problems', async (req, res) => {
  try {
    const { difficulty, category, language } = req.query;
    let filter = { isActive: true };
    
    if (difficulty) filter.difficulty = difficulty;
    if (category) filter.category = category;
    if (language) filter.language = language;
    
    const problems = await PracticeProblems.find(filter)
      .select('-requiredAnswer') // Hide the solution from students
      .sort({ createdAt: -1 });
    
    res.status(200).json(problems);
  } catch (err) {
    console.error('Error fetching problems:', err);
    res.status(500).json({ error: 'Failed to fetch problems' });
  }
});

// Get a specific practice problem by ID
app.get('/api/problems/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const problem = await PracticeProblems.findById(id)
      .select('-requiredAnswer'); // Hide solution
    
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }
    
    res.status(200).json(problem);
  } catch (err) {
    console.error('Error fetching problem:', err);
    res.status(500).json({ error: 'Failed to fetch problem' });
  }
});

// Submit solution for a problem
app.post('/api/problems/:id/submit', async (req, res) => {
  try {
    const { id } = req.params;
    const { solution, username } = req.body;
    
    const problem = await PracticeProblems.findById(id);
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }
    
    // Simple solution check (you can make this more sophisticated)
    const isCorrect = solution.trim() === problem.requiredAnswer.trim();
    
    // Update problem statistics
    await problem.incrementSubmission(isCorrect);
    
    res.status(200).json({
      correct: isCorrect,
      message: isCorrect ? 'Correct solution!' : 'Incorrect solution. Try again!',
      testCasesPassed: isCorrect ? problem.testCases.length : 0,
      totalTestCases: problem.testCases.length
    });
  } catch (err) {
    console.error('Error submitting solution:', err);
    res.status(500).json({ error: 'Failed to submit solution' });
  }
});

// Get problem statistics (for teachers)
app.get('/api/problems/stats', async (req, res) => {
  try {
    const stats = await PracticeProblems.aggregate([
      {
        $group: {
          _id: '$difficulty',
          count: { $sum: 1 },
          totalSubmissions: { $sum: '$submissionCount' },
          totalSuccesses: { $sum: '$successCount' }
        }
      }
    ]);
    
    res.status(200).json(stats);
  } catch (err) {
    console.error('Error fetching stats:', err);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
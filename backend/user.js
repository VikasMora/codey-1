import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Connect to MongoDB Atlas
mongoose.connect(
  'mongodb+srv://vikasmora:vikas@cluster0.tnddabx.mongodb.net/',
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('MongoDB connected'))
 .catch(err => console.log('MongoDB connection error:', err));

// Student Schema (for the students collection)
const studentSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isTeacher: { type: Boolean, default: false }
});

// Hash password before saving
studentSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

const Student = mongoose.model('Student', studentSchema, 'students'); // Use 'students' collection

// Classroom Schema (for the classrooms collection)
const classroomSchema = new mongoose.Schema({
  classroomName: { 
    type: String, 
    required: true,
    trim: true 
  },
  classroomSize: { 
    type: Number, 
    required: true,
    min: 1,
    max: 100 
  },
  subject: {
    type: String,
    trim: true,
    default: ''
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  classCode: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    length: 10
  },
  classroomStudents: [{
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    },
    username: {
      type: String,
      required: true
    },
    joinedAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

// Add a virtual field to get current student count
classroomSchema.virtual('currentStudentCount').get(function() {
  return this.classroomStudents.length;
});

// Add a method to check if classroom is full
classroomSchema.methods.isFull = function() {
  return this.classroomStudents.length >= this.classroomSize;
};

// Add a method to add a student to the classroom
classroomSchema.methods.addStudent = function(studentId, username) {
  if (this.isFull()) {
    throw new Error('Classroom is full');
  }
  
  // Check if student is already in classroom
  const existingStudent = this.classroomStudents.find(
    student => student.studentId.toString() === studentId.toString()
  );
  
  if (existingStudent) {
    throw new Error('Student is already in this classroom');
  }
  
  this.classroomStudents.push({
    studentId: studentId,
    username: username
  });
  
  return this.save();
};

// Add a method to remove a student from the classroom
classroomSchema.methods.removeStudent = function(studentId) {
  this.classroomStudents = this.classroomStudents.filter(
    student => student.studentId.toString() !== studentId.toString()
  );
  
  return this.save();
};

const Classroom = mongoose.model('Classroom', classroomSchema, 'classrooms');

// Practice Problems Schema (for the practiceproblems collection)
// New structure: each problem has a unique questionId and an array `questionContent`
// where each entry contains title, question, output, testCases and defaultCode.
const practiceProblemsSchema = new mongoose.Schema({
  questionId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  // Array of content blocks (supports multiple language/content variants or multiple parts)
  questionContent: [{
    title: {
      type: String,
      required: true,
      trim: true
    },
    question: {
      type: String,
      required: true,
      trim: true
    },
    output: {
      type: String,
      default: ''
    },
    // testCases for this content block
    testCases: [{
      input: {
        type: String,
        required: true
      },
      expectedOutput: {
        type: String,
        required: true
      },
      isHidden: {
        type: Boolean,
        default: false
      },
      description: {
        type: String,
        default: ''
      }
    }],
    // default code that would pass the visible test cases (kept for teachers/admin use)
    defaultCode: {
      language: { type: String, trim: true, default: 'JavaScript' },
      code: { type: String, trim: true, default: '' }
    }
  }],
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  language: {
    type: String,
    required: true,
    trim: true
  },
  hints: [{
    type: String,
    trim: true
  }],
  timeLimit: {
    type: Number, // in seconds
    default: 300
  },
  memoryLimit: {
    type: Number, // in MB
    default: 128
  },
  tags: [{
    type: String,
    trim: true
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  submissionCount: {
    type: Number,
    default: 0
  },
  successCount: {
    type: Number,
    default: 0
  }
});

// Add virtual field for success rate
practiceProblemsSchema.virtual('successRate').get(function() {
  if (this.submissionCount === 0) return 0;
  return ((this.successCount / this.submissionCount) * 100).toFixed(2);
});

// Update the updatedAt field before saving
practiceProblemsSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Add method to increment submission count
practiceProblemsSchema.methods.incrementSubmission = function(isSuccess = false) {
  this.submissionCount += 1;
  if (isSuccess) {
    this.successCount += 1;
  }
  return this.save();
};

// Add method to get preload code for a specific language
practiceProblemsSchema.methods.getPreloadCode = function(language) {
  const preloadForLanguage = this.preload.find(
    p => p.language.toLowerCase() === language.toLowerCase()
  );
  return preloadForLanguage || null;
};

// Add method to get all available preload languages
practiceProblemsSchema.methods.getAvailableLanguages = function() {
  return this.preload.map(p => p.language);
};

const PracticeProblems = mongoose.model('PracticeProblems', practiceProblemsSchema, 'practiceproblems');

// Submitted Practice Problems Schema (for tracking user submissions)
const submittedPracticeProblemsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PracticeProblems',
    required: true
  },
  questionId: {
    type: String,
    required: true,
    trim: true
  },
  problemTitle: {
    type: String,
    required: true,
    trim: true
  },
  submittedLanguage: {
    type: String,
    required: true,
    trim: true
  },
  submittedCode: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    required: true
  },
  testCasesPassed: {
    type: Number,
    default: 0
  },
  totalTestCases: {
    type: Number,
    default: 0
  },
  executionTime: {
    type: Number, // in milliseconds
    default: 0
  },
  memoryUsed: {
    type: Number, // in KB
    default: 0
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  points: {
    type: Number,
    default: 0
  },
  attempts: {
    type: Number,
    default: 1
  },
  status: {
    type: String,
    enum: ['Accepted', 'Wrong Answer', 'Time Limit Exceeded', 'Memory Limit Exceeded', 'Runtime Error', 'Compilation Error'],
    required: true
  },
  errorMessage: {
    type: String,
    default: ''
  },
  submissionIP: {
    type: String,
    default: ''
  },
  browserInfo: {
    type: String,
    default: ''
  }
});

// Add compound index for efficient queries
submittedPracticeProblemsSchema.index({ userId: 1, problemId: 1 });
submittedPracticeProblemsSchema.index({ username: 1, submittedAt: -1 });
submittedPracticeProblemsSchema.index({ difficulty: 1, isCorrect: 1 });

// Add virtual field for submission date formatting
submittedPracticeProblemsSchema.virtual('formattedSubmissionDate').get(function() {
  return this.submittedAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
});

// Add method to calculate points based on difficulty and attempts
submittedPracticeProblemsSchema.methods.calculatePoints = function() {
  if (!this.isCorrect) return 0;
  
  let basePoints = 0;
  switch (this.difficulty) {
    case 'Easy':
      basePoints = 10;
      break;
    case 'Medium':
      basePoints = 20;
      break;
    case 'Hard':
      basePoints = 30;
      break;
    default:
      basePoints = 10;
  }
  
  // Reduce points for multiple attempts
  const attemptPenalty = Math.max(0, (this.attempts - 1) * 2);
  this.points = Math.max(1, basePoints - attemptPenalty);
  
  return this.points;
};

// Add method to update attempt count
submittedPracticeProblemsSchema.methods.incrementAttempt = function() {
  this.attempts += 1;
  return this.save();
};

// Static method to get user statistics
submittedPracticeProblemsSchema.statics.getUserStats = async function(userId) {
  const stats = await this.aggregate([
    { $match: { userId: new mongoose.Types.ObjectId(userId) } },
    {
      $group: {
        _id: null,
        totalSubmissions: { $sum: 1 },
        correctSubmissions: { $sum: { $cond: ['$isCorrect', 1, 0] } },
        totalPoints: { $sum: '$points' },
        easyProblems: { $sum: { $cond: [{ $and: ['$isCorrect', { $eq: ['$difficulty', 'Easy'] }] }, 1, 0] } },
        mediumProblems: { $sum: { $cond: [{ $and: ['$isCorrect', { $eq: ['$difficulty', 'Medium'] }] }, 1, 0] } },
        hardProblems: { $sum: { $cond: [{ $and: ['$isCorrect', { $eq: ['$difficulty', 'Hard'] }] }, 1, 0] } },
        averageExecutionTime: { $avg: '$executionTime' }
      }
    }
  ]);
  
  return stats[0] || {
    totalSubmissions: 0,
    correctSubmissions: 0,
    totalPoints: 0,
    easyProblems: 0,
    mediumProblems: 0,
    hardProblems: 0,
    averageExecutionTime: 0
  };
};

// Static method to get leaderboard
submittedPracticeProblemsSchema.statics.getLeaderboard = async function(limit = 10) {
  return await this.aggregate([
    { $match: { isCorrect: true } },
    {
      $group: {
        _id: '$userId',
        username: { $first: '$username' },
        totalPoints: { $sum: '$points' },
        problemsSolved: { $sum: 1 },
        easyCount: { $sum: { $cond: [{ $eq: ['$difficulty', 'Easy'] }, 1, 0] } },
        mediumCount: { $sum: { $cond: [{ $eq: ['$difficulty', 'Medium'] }, 1, 0] } },
        hardCount: { $sum: { $cond: [{ $eq: ['$difficulty', 'Hard'] }, 1, 0] } }
      }
    },
    { $sort: { totalPoints: -1, problemsSolved: -1 } },
    { $limit: limit }
  ]);
};

const SubmittedPracticeProblems = mongoose.model('SubmittedPracticeProblems', submittedPracticeProblemsSchema, 'submittedpracticeproblems');

export { Student, Classroom, PracticeProblems, SubmittedPracticeProblems };
export default Student;
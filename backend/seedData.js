import bcrypt from 'bcrypt';
import Student from './user.js';

const dummyUsers = [
  // Students (isTeacher: false)
  { username: 'john_doe', password: '123456', isTeacher: false },
  { username: 'jane_smith', password: 'password123', isTeacher: false },
  { username: 'alice_wilson', password: 'alice2024', isTeacher: false },
  { username: 'bob_johnson', password: 'bobsecure', isTeacher: false },
  { username: 'charlie_brown', password: 'charlie123', isTeacher: false },
  { username: 'diana_prince', password: 'wonder2024', isTeacher: false },
  { username: 'edward_stark', password: 'winter123', isTeacher: false },
  { username: 'fiona_green', password: 'green456', isTeacher: false },
  { username: 'george_martin', password: 'george789', isTeacher: false },
  { username: 'helen_white', password: 'helen2024', isTeacher: false },
  
  // Teachers (isTeacher: true)
  { username: 'prof_anderson', password: 'teacher123', isTeacher: true },
  { username: 'dr_sarah_connor', password: 'sarah2024', isTeacher: true },
  { username: 'mr_james_bond', password: 'bond007', isTeacher: true },
  { username: 'ms_lisa_simpson', password: 'lisa456', isTeacher: true },
  { username: 'prof_xavier', password: 'xavier123', isTeacher: true },
  { username: 'dr_watson', password: 'watson789', isTeacher: true },
  { username: 'mrs_mcgonagall', password: 'magic2024', isTeacher: true },
  { username: 'prof_dumbledore', password: 'hogwarts', isTeacher: true },
  { username: 'dr_strange', password: 'mystic123', isTeacher: true },
  { username: 'prof_stark', password: 'ironman456', isTeacher: true }
];

const seedDatabase = async () => {
  try {
    console.log('Starting to seed database...');
    
    // Clear existing data
    await Student.deleteMany({});
    console.log('Cleared existing users');
    
    // Hash passwords and insert all users
    const hashedUsers = await Promise.all(
      dummyUsers.map(async (user) => {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        return {
          username: user.username,
          password: hashedPassword,
          isTeacher: user.isTeacher
        };
      })
    );
    
    await Student.insertMany(hashedUsers);
    
    const studentCount = dummyUsers.filter(user => !user.isTeacher).length;
    const teacherCount = dummyUsers.filter(user => user.isTeacher).length;
    
    console.log(`Successfully added ${studentCount} students and ${teacherCount} teachers to database`);
    
    // Display the usernames and plain passwords for reference
    console.log('\n--- STUDENT LOGIN CREDENTIALS ---');
    dummyUsers.filter(user => !user.isTeacher).forEach(student => {
      console.log(`Username: ${student.username} | Password: ${student.password}`);
    });
    
    console.log('\n--- TEACHER LOGIN CREDENTIALS ---');
    dummyUsers.filter(user => user.isTeacher).forEach(teacher => {
      console.log(`Username: ${teacher.username} | Password: ${teacher.password}`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
import { PracticeProblems } from './user.js';
import { dummyProblems } from './dummyProblems.js';

// Function to seed practice problems into the database
async function seedPracticeProblems() {
  try {
    console.log('🌱 Starting to seed practice problems...');
    
    // Clear existing problems (optional - remove this if you want to keep existing data)
    const existingCount = await PracticeProblems.countDocuments();
    console.log(`📊 Found ${existingCount} existing problems in database`);
    
    if (existingCount > 0) {
      console.log('🗑️  Clearing existing practice problems...');
      await PracticeProblems.deleteMany({});
      console.log('✅ Existing problems cleared');
    }
    
    // Insert dummy problems
    console.log('📝 Inserting dummy problems...');
    const insertedProblems = await PracticeProblems.insertMany(dummyProblems);
    
    console.log(`✅ Successfully inserted ${insertedProblems.length} practice problems!`);
    
    // Display summary of inserted problems
    console.log('\n📋 Inserted Problems Summary:');
    insertedProblems.forEach((problem, index) => {
      console.log(`  ${index + 1}. ${problem.title} (${problem.difficulty}) - ID: ${problem.questionId}`);
    });
    
    // Show database stats
    const totalCount = await PracticeProblems.countDocuments();
    const easyCount = await PracticeProblems.countDocuments({ difficulty: 'Easy' });
    const mediumCount = await PracticeProblems.countDocuments({ difficulty: 'Medium' });
    const hardCount = await PracticeProblems.countDocuments({ difficulty: 'Hard' });
    
    console.log('\n📈 Database Statistics:');
    console.log(`  Total Problems: ${totalCount}`);
    console.log(`  Easy: ${easyCount}`);
    console.log(`  Medium: ${mediumCount}`);
    console.log(`  Hard: ${hardCount}`);
    
    console.log('\n🎉 Database seeding completed successfully!');
    
  } catch (error) {
    console.error('❌ Error seeding practice problems:', error);
    
    if (error.code === 11000) {
      console.error('💡 Duplicate key error - some problems may already exist');
    } else {
      console.error('💡 Make sure MongoDB is running and connection string is correct');
    }
  } finally {
    // Close the database connection
    process.exit(0);
  }
}

// Function to verify problems in database
async function verifyProblems() {
  try {
    console.log('🔍 Verifying problems in database...');
    
    const problems = await PracticeProblems.find({}).select('questionId title difficulty category');
    
    if (problems.length === 0) {
      console.log('⚠️  No problems found in database');
    } else {
      console.log(`✅ Found ${problems.length} problems in database:`);
      problems.forEach((problem, index) => {
        console.log(`  ${index + 1}. ${problem.questionId}: ${problem.title} (${problem.difficulty})`);
      });
    }
    
  } catch (error) {
    console.error('❌ Error verifying problems:', error);
  }
}

// Check command line arguments
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'seed':
    seedPracticeProblems();
    break;
  case 'verify':
    verifyProblems();
    break;
  default:
    console.log('📚 Practice Problems Database Manager');
    console.log('');
    console.log('Available commands:');
    console.log('  node seedProblems.js seed     - Add dummy problems to database');
    console.log('  node seedProblems.js verify   - Check problems in database');
    console.log('');
    console.log('Example: node seedProblems.js seed');
    process.exit(0);
}
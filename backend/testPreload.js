import { PracticeProblems } from './user.js';

async function testPreloadField() {
  try {
    console.log('🔍 Testing preload field in database...');
    
    // Get the first problem and check if it has preload field
    const problem = await PracticeProblems.findOne({ questionId: 'PROB001' });
    
    if (problem) {
      console.log(`✅ Found problem: ${problem.title}`);
      console.log(`📊 Preload templates available: ${problem.preload ? problem.preload.length : 0}`);
      
      if (problem.preload && problem.preload.length > 0) {
        console.log('\n🚀 Preload Templates:');
        problem.preload.forEach((preload, index) => {
          console.log(`  ${index + 1}. Language: ${preload.language}`);
          console.log(`     Template: ${preload.template}`);
          console.log(`     Comments: ${preload.comments}`);
          console.log(`     Code Preview: ${preload.code.substring(0, 100)}...`);
          console.log('');
        });
      } else {
        console.log('❌ No preload templates found');
      }
    } else {
      console.log('❌ Problem not found');
    }
    
  } catch (error) {
    console.error('❌ Error testing preload field:', error);
  } finally {
    process.exit(0);
  }
}

testPreloadField();
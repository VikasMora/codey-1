import React from 'react';
import '../Navbarweb.css';

function Loops() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🔄 Loops (for, while, do-while)</h1>
        <p className="js-topic-subtitle">
          Master JavaScript loops to efficiently repeat code execution and iterate through data
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction to Loops */}
        <section className="js-topic-section">
          <h2>🔁 What are Loops?</h2>
          <p>
            Loops allow you to execute a block of code repeatedly until a specific condition is met.
            They're essential for processing arrays, generating sequences, and automating repetitive tasks.
          </p>
          
          <div className="js-loop-diagram">
            <div className="js-flow-diagram">
              <div className="js-flow-start">Start</div>
              <div className="js-flow-condition">Check Condition</div>
              <div className="js-flow-true">True → Execute Code Block</div>
              <div className="js-flow-false">False → Exit Loop</div>
              <div className="js-flow-loop">Loop Back</div>
            </div>
          </div>
        </section>

        {/* For Loops */}
        <section className="js-topic-section">
          <h2>🎯 For Loops</h2>
          <p>The most common loop, perfect when you know how many times to iterate:</p>
          
          <div className="js-for-examples">
            <div className="js-for-card">
              <h3>Basic For Loop</h3>
              <div className="js-code-example">
                <pre><code>{`// Basic for loop syntax
// for (initialization; condition; increment/decrement)

for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}
// Output: Count: 0, Count: 1, Count: 2, Count: 3, Count: 4

// Counting backwards
for (let i = 10; i >= 1; i--) {
  console.log("Countdown: " + i);
}
// Output: Countdown: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// Different increments
for (let i = 0; i <= 20; i += 5) {
  console.log("Multiple of 5: " + i);
}
// Output: Multiple of 5: 0, 5, 10, 15, 20`}</code></pre>
              </div>
            </div>

            <div className="js-for-card">
              <h3>Iterating Through Arrays</h3>
              <div className="js-code-example">
                <pre><code>{`const fruits = ["apple", "banana", "orange", "grape"];

// Traditional for loop with array
for (let i = 0; i < fruits.length; i++) {
  console.log((i + 1) + ". " + fruits[i]);
}
// Output: 1. apple, 2. banana, 3. orange, 4. grape

// Processing array elements
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum: " + sum); // Sum: 15

// Finding maximum value
const scores = [85, 92, 78, 96, 88];
let maxScore = scores[0];

for (let i = 1; i < scores.length; i++) {
  if (scores[i] > maxScore) {
    maxScore = scores[i];
  }
}
console.log("Highest score: " + maxScore); // Highest score: 96`}</code></pre>
              </div>
            </div>

            <div className="js-for-card">
              <h3>Nested For Loops</h3>
              <div className="js-code-example">
                <pre><code>{`// Creating a multiplication table
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + " x " + j + " = " + (i * j));
  }
}

// Working with 2D arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log("Row " + row + ", Col " + col + ": " + matrix[row][col]);
  }
}

// Creating patterns
let pattern = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "\\n";
}
console.log(pattern);
/* Output:
* 
* * 
* * * 
* * * * 
* * * * * 
*/`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* For...of Loop */}
        <section className="js-topic-section">
          <h2>📋 For...of Loop</h2>
          <p>A modern way to iterate over iterable objects like arrays and strings:</p>
          
          <div className="js-code-example">
            <h4>For...of Examples:</h4>
            <pre><code>{`// Iterating over arrays
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log("Color: " + color);
}
// Output: Color: red, Color: green, Color: blue

// With index using entries()
for (const [index, color] of colors.entries()) {
  console.log(index + ": " + color);
}
// Output: 0: red, 1: green, 2: blue

// Iterating over strings
const word = "Hello";
for (const letter of word) {
  console.log("Letter: " + letter);
}
// Output: Letter: H, Letter: e, Letter: l, Letter: l, Letter: o

// Working with array of objects
const users = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 30},
  {name: "Charlie", age: 35}
];

for (const user of users) {
  console.log(user.name + " is " + user.age + " years old");
}

// Breaking out of for...of
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of numbers) {
  if (num > 5) {
    break; // Exit loop when number > 5
  }
  console.log(num);
}
// Output: 1, 2, 3, 4, 5`}</code></pre>
          </div>
        </section>

        {/* For...in Loop */}
        <section className="js-topic-section">
          <h2>🔑 For...in Loop</h2>
          <p>Iterates over object properties (keys):</p>
          
          <div className="js-code-example">
            <h4>For...in Examples:</h4>
            <pre><code>{`// Iterating over object properties
const person = {
  name: "Alice",
  age: 25,
  city: "New York",
  occupation: "Developer"
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}
// Output: name: Alice, age: 25, city: New York, occupation: Developer

// Checking own properties (not inherited)
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + " = " + person[key]);
  }
}

// For...in with arrays (not recommended)
const fruits = ["apple", "banana", "orange"];

for (const index in fruits) {
  console.log(index + ": " + fruits[index]); // index is string!
}
// Output: 0: apple, 1: banana, 2: orange

// Better alternatives for arrays
console.log("Better approaches for arrays:");
fruits.forEach((fruit, index) => {
  console.log(index + ": " + fruit);
});

// Or use for...of with entries
for (const [index, fruit] of fruits.entries()) {
  console.log(index + ": " + fruit);
}`}</code></pre>
          </div>
        </section>

        {/* While Loops */}
        <section className="js-topic-section">
          <h2>⏳ While Loops</h2>
          <p>Executes code as long as a condition remains true:</p>
          
          <div className="js-while-examples">
            <div className="js-while-card">
              <h3>Basic While Loop</h3>
              <div className="js-code-example">
                <pre><code>{`// Basic while loop
let count = 0;

while (count < 5) {
  console.log("Count: " + count);
  count++; // Important: increment to avoid infinite loop
}
// Output: Count: 0, 1, 2, 3, 4

// Reading user input (simulated)
let userContinue = true;
let attempts = 0;

while (userContinue && attempts < 3) {
  console.log("Attempt " + (attempts + 1));
  // Simulate user decision
  userContinue = Math.random() > 0.5; // 50% chance to continue
  attempts++;
}

// Processing until condition met
let password = "";
let minLength = 8;

while (password.length < minLength) {
  // Simulate getting password input
  password += "a"; // This would be actual user input
  console.log("Password length: " + password.length);
}`}</code></pre>
              </div>
            </div>

            <div className="js-while-card">
              <h3>Practical While Loop Examples</h3>
              <div className="js-code-example">
                <pre><code>{`// Finding factors of a number
let number = 12;
let divisor = 1;
const factors = [];

while (divisor <= number) {
  if (number % divisor === 0) {
    factors.push(divisor);
  }
  divisor++;
}
console.log("Factors of " + number + ": " + factors.join(", "));
// Output: Factors of 12: 1, 2, 3, 4, 6, 12

// Processing array elements conditionally
const numbers = [1, 3, 5, 8, 2, 4, 6];
let index = 0;

while (index < numbers.length && numbers[index] % 2 !== 0) {
  console.log("Odd number: " + numbers[index]);
  index++;
}
console.log("Found even number at index " + index);

// Generating random numbers until condition
let randomNum;
let attempts2 = 0;

while (randomNum !== 5 && attempts2 < 10) {
  randomNum = Math.floor(Math.random() * 10) + 1; // 1-10
  console.log("Generated: " + randomNum);
  attempts2++;
}

if (randomNum === 5) {
  console.log("Found 5 in " + attempts2 + " attempts!");
} else {
  console.log("Didn't find 5 in 10 attempts");
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Do-While Loops */}
        <section className="js-topic-section">
          <h2>🔄 Do-While Loops</h2>
          <p>Executes code at least once, then continues while condition is true:</p>
          
          <div className="js-code-example">
            <h4>Do-While Examples:</h4>
            <pre><code>{`// Basic do-while loop
let counter = 0;

do {
  console.log("Counter: " + counter);
  counter++;
} while (counter < 3);
// Output: Counter: 0, 1, 2

// Difference between while and do-while
console.log("While loop (condition false from start):");
let x = 10;
while (x < 5) {
  console.log("This won't execute"); // Never runs
  x++;
}

console.log("Do-while loop (condition false from start):");
let y = 10;
do {
  console.log("This executes once: " + y); // Runs once
  y++;
} while (y < 5);

// Menu simulation
let choice;
do {
  // Simulate showing menu and getting user choice
  console.log("Menu: 1-Save, 2-Load, 3-Exit");
  choice = Math.floor(Math.random() * 4) + 1; // Random choice 1-4
  
  switch (choice) {
    case 1:
      console.log("Saving...");
      break;
    case 2:
      console.log("Loading...");
      break;
    case 3:
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid choice, try again");
  }
} while (choice !== 3);

// Input validation
let userInput;
do {
  // Simulate getting user input
  userInput = Math.floor(Math.random() * 15) + 1; // 1-15
  console.log("User entered: " + userInput);
  
  if (userInput < 1 || userInput > 10) {
    console.log("Please enter a number between 1 and 10");
  }
} while (userInput < 1 || userInput > 10);

console.log("Valid input received: " + userInput);`}</code></pre>
          </div>
        </section>

        {/* Loop Control Statements */}
        <section className="js-topic-section">
          <h2>🎮 Loop Control: Break and Continue</h2>
          <p>Control loop execution with break and continue statements:</p>
          
          <div className="js-control-examples">
            <div className="js-control-card">
              <h3>Break Statement</h3>
              <div className="js-code-example">
                <pre><code>{`// Break exits the loop completely
console.log("Finding first even number:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Found even number: " + i);
    break; // Exit loop immediately
  }
  console.log("Checking: " + i);
}
// Output: Checking: 1, Found even number: 2

// Break in nested loops (only breaks inner loop)
console.log("Breaking from nested loop:");
for (let i = 1; i <= 3; i++) {
  console.log("Outer loop: " + i);
  
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      console.log("Breaking inner loop at j = " + j);
      break; // Only breaks inner loop
    }
    console.log("  Inner loop: " + j);
  }
}

// Search example
const students = ["Alice", "Bob", "Charlie", "Diana"];
const searchName = "Charlie";
let found = false;

for (let i = 0; i < students.length; i++) {
  if (students[i] === searchName) {
    console.log("Found " + searchName + " at position " + i);
    found = true;
    break; // No need to continue searching
  }
}

if (!found) {
  console.log(searchName + " not found");
}`}</code></pre>
              </div>
            </div>

            <div className="js-control-card">
              <h3>Continue Statement</h3>
              <div className="js-code-example">
                <pre><code>{`// Continue skips current iteration
console.log("Printing only odd numbers:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log("Odd: " + i);
}
// Output: Odd: 1, 3, 5, 7, 9

// Skip empty values
const data = ["apple", "", "banana", null, "orange", undefined];
console.log("Valid items:");

for (let i = 0; i < data.length; i++) {
  if (!data[i]) {
    continue; // Skip empty/null/undefined values
  }
  console.log("- " + data[i]);
}
// Output: - apple, - banana, - orange

// Processing with conditions
const scores = [85, -1, 92, 78, -1, 96, 88];
let validScores = 0;
let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 0) {
    console.log("Skipping invalid score: " + scores[i]);
    continue; // Skip invalid scores
  }
  
  validScores++;
  totalScore += scores[i];
  console.log("Added valid score: " + scores[i]);
}

const average = totalScore / validScores;
console.log("Average of valid scores: " + average);`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Loop Performance and Best Practices */}
        <section className="js-topic-section">
          <h2>⚡ Performance and Best Practices</h2>
          
          <div className="js-best-practices">
            <div className="js-practice-group">
              <h3>✅ Performance Tips</h3>
              <ul>
                <li><strong>Cache array length:</strong> Avoid recalculating length in each iteration</li>
                <li><strong>Choose the right loop:</strong> Different loops have different use cases</li>
                <li><strong>Minimize work inside loops:</strong> Move calculations outside when possible</li>
                <li><strong>Use appropriate data structures:</strong> Sets for uniqueness, Maps for key-value pairs</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>{`// ✅ Good: Cache array length
const items = ["a", "b", "c", "d", "e"];
const length = items.length; // Calculate once

for (let i = 0; i < length; i++) {
  console.log(items[i]);
}

// ❌ Bad: Recalculate length each iteration
for (let i = 0; i < items.length; i++) { // items.length calculated each time
  console.log(items[i]);
}

// ✅ Good: Move expensive operations outside
const expensiveValue = Math.sqrt(1000); // Calculate once

for (let i = 0; i < 100; i++) {
  const result = i * expensiveValue; // Use pre-calculated value
  console.log(result);
}

// ✅ Good: Use appropriate loop type
const numbers = [1, 2, 3, 4, 5];

// For simple iteration: for...of
for (const num of numbers) {
  console.log(num);
}

// When you need index: forEach or traditional for
numbers.forEach((num, index) => {
  console.log(index + ": " + num);
});

// For objects: for...in or Object methods
const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
  console.log(key + ": " + obj[key]);
}

// Or better yet:
Object.entries(obj).forEach(([key, value]) => {
  console.log(key + ": " + value);
});`}</code></pre>
              </div>
            </div>

            <div className="js-practice-group">
              <h3>🚨 Common Pitfalls</h3>
              <ul>
                <li><strong>Infinite loops:</strong> Always ensure the loop condition can become false</li>
                <li><strong>Off-by-one errors:</strong> Be careful with &lt; vs &lt;= conditions</li>
                <li><strong>Modifying arrays while iterating:</strong> Can cause skipped elements</li>
                <li><strong>Wrong loop type:</strong> Using for...in on arrays</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>{`// ❌ Infinite loop danger
let count = 0;
while (count < 10) {
  console.log(count);
  // Forgot to increment count - infinite loop!
  // count++;
}

// ❌ Modifying array while iterating
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    numbers.splice(i, 1); // Removes element, shifts indices
    // This can cause elements to be skipped
  }
}

// ✅ Better: Create new array or iterate backwards
const odds = numbers.filter(num => num % 2 !== 0);

// Or iterate backwards when removing
for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] % 2 === 0) {
    numbers.splice(i, 1); // Safe when going backwards
  }
}

// ❌ Wrong loop for arrays
const fruits = ["apple", "banana", "orange"];
for (const index in fruits) {
  console.log(typeof index); // "string" - indices are strings!
}

// ✅ Correct approaches
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]); // i is number
}

for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit); // index is number
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Alternatives */}
        <section className="js-topic-section">
          <h2>🆕 Modern Loop Alternatives</h2>
          <p>Modern JavaScript provides many array methods that can replace traditional loops:</p>
          
          <div className="js-modern-loops">
            <div className="js-modern-card">
              <h3>Array Methods vs Loops</h3>
              <div className="js-code-example">
                <pre><code>{`const numbers = [1, 2, 3, 4, 5];

// Traditional loop vs forEach
console.log("Traditional for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("forEach method:");
numbers.forEach(num => console.log(num));

// Traditional loop vs map
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

// Modern way with map
const doubledMap = numbers.map(num => num * 2);

// Traditional loop vs filter
const evens = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  }
}

// Modern way with filter
const evensFilter = numbers.filter(num => num % 2 === 0);

// Traditional loop vs reduce
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Modern way with reduce
const sumReduce = numbers.reduce((acc, num) => acc + num, 0);

console.log("Sum:", sum, "vs", sumReduce); // Both are 15`}</code></pre>
              </div>
            </div>

            <div className="js-modern-card">
              <h3>When to Use Each Approach</h3>
              <div className="js-code-example">
                <pre><code>{`// Use traditional loops when:
// - You need to break early
// - You need complex index manipulation
// - Performance is critical for large datasets

// Use array methods when:
// - You want functional programming style
// - Code readability is important
// - Working with transformations

// Example: Finding first element that meets condition
const users = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 17},
  {name: "Charlie", age: 30}
];

// Traditional loop (can break early)
let firstAdult = null;
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    firstAdult = users[i];
    break; // Exit early when found
  }
}

// Modern alternative with find
const firstAdultFind = users.find(user => user.age >= 18);

// Both produce same result, but find is more readable
console.log("First adult:", firstAdult.name);
console.log("First adult (find):", firstAdultFind.name);`}</code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Loops;
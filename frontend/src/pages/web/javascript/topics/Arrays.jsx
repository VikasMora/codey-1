import React from 'react';
import '../Navbarweb.css';

function Arrays() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>📚 JavaScript Arrays</h1>
        <p className="js-topic-subtitle">
          Master JavaScript arrays - the essential data structure for storing and manipulating collections
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction to Arrays */}
        <section className="js-topic-section">
          <h2>📋 What are Arrays?</h2>
          <p>
            Arrays in JavaScript are ordered collections of elements that can store multiple values
            in a single variable. They're zero-indexed and can contain any data type.
          </p>
          
          <div className="js-array-visual">
            <div className="js-array-diagram">
              <h4>Array Structure:</h4>
              <div className="js-array-example">
                <div className="js-array-indices">
                  <span>Index:</span>
                  <span>0</span>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
                <div className="js-array-values">
                  <span>Values:</span>
                  <span>"apple"</span>
                  <span>"banana"</span>
                  <span>"orange"</span>
                  <span>"grape"</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creating Arrays */}
        <section className="js-topic-section">
          <h2>🔨 Creating Arrays</h2>
          
          <div className="js-creation-methods">
            <div className="js-creation-card">
              <h3>Array Literal Syntax</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic array creation
const fruits = ["apple", "banana", "orange", "grape"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null, {name: "John"}];

console.log("Fruits:", fruits); 
// ["apple", "banana", "orange", "grape"]

// Empty array
const emptyArray = [];
console.log("Empty array length:", emptyArray.length); // 0

// Multi-dimensional arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Matrix:", matrix);
console.log("Matrix[1][2]:", matrix[1][2]); // 6`}
                </code></pre>
              </div>
            </div>

            <div className="js-creation-card">
              <h3>Array Methods for Creation</h3>
              <div className="js-code-example">
                <pre><code>
{`// Array.from() - Create array from iterable
const arrayFromString = Array.from("Hello");
console.log("From string:", arrayFromString); 
// ["H", "e", "l", "l", "o"]

// Array.from() with mapping function
const doubled = Array.from([1, 2, 3, 4], x => x * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8]

// Generate sequence
const sequence = Array.from({length: 5}, (_, index) => index + 1);
console.log("Sequence:", sequence); // [1, 2, 3, 4, 5]

// Array.of() - Create array from arguments
const arrayOfNumbers = Array.of(1, 2, 3, 4, 5);
console.log("Array.of numbers:", arrayOfNumbers); 
// [1, 2, 3, 4, 5]

// Creating arrays from Set
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
const arrayFromSet = Array.from(uniqueNumbers);
console.log("From Set:", arrayFromSet); // [1, 2, 3, 4]`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Array Properties and Basic Operations */}
        <section className="js-topic-section">
          <h2>🔍 Array Properties and Basic Operations</h2>
          
          <div className="js-basic-operations">
            <div className="js-basic-card">
              <h3>Length and Indexing</h3>
              <div className="js-code-example">
                <pre><code>
{`const colors = ["red", "green", "blue", "yellow"];

// Length property
console.log("Array length:", colors.length); // 4

// Accessing elements by index
console.log("First color:", colors[0]); // "red"
console.log("Last color:", colors[colors.length - 1]); // "yellow"

// Modern way to access from end
console.log("Last with at():", colors.at(-1)); // "yellow"
console.log("Second to last with at():", colors.at(-2)); // "blue"

// Modifying elements
colors[1] = "lime"; // Change "green" to "lime"
console.log("Modified colors:", colors); 
// ["red", "lime", "blue", "yellow"]

// Array type checking
console.log("Is array:", Array.isArray(colors)); // true`}
                </code></pre>
              </div>
            </div>

            <div className="js-basic-card">
              <h3>Array Type Checking</h3>
              <div className="js-code-example">
                <pre><code>
{`// Array.isArray() - Most reliable way to check
const arr = [1, 2, 3];
const notArr = "not an array";
const obj = {0: "a", 1: "b", length: 2}; // Array-like object

console.log("Array.isArray(arr):", Array.isArray(arr)); // true
console.log("Array.isArray(notArr):", Array.isArray(notArr)); // false
console.log("Array.isArray(obj):", Array.isArray(obj)); // false

// Why Array.isArray() is preferred
function processArray(input) {
  if (Array.isArray(input)) {
    return input.length > 0 ? input[0] : null;
  } else {
    console.log("Input is not an array");
    return null;
  }
}

console.log("Process array:", processArray([1, 2, 3])); // 1
console.log("Process non-array:", processArray("hello")); // null`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Adding and Removing Elements */}
        <section className="js-topic-section">
          <h2>➕ Adding and Removing Elements</h2>
          
          <div className="js-modification-methods">
            <div className="js-modification-card">
              <h3>Adding Elements</h3>
              <div className="js-code-example">
                <pre><code>
{`let fruits = ["apple", "banana"];

// push() - Add to end (mutates original)
fruits.push("orange");
console.log("After push:", fruits); 
// ["apple", "banana", "orange"]

// unshift() - Add to beginning (mutates original)
fruits.unshift("mango");
console.log("After unshift:", fruits); 
// ["mango", "apple", "banana", "orange"]

// concat() - Creates new array (doesn't mutate)
const moreFruits = fruits.concat(["pear", "plum"]);
console.log("New array:", moreFruits); 

// Spread operator - Modern way (doesn't mutate)
const evenMoreFruits = [...fruits, "strawberry", "blueberry"];
console.log("With spread:", evenMoreFruits);

// splice() - Add at specific position (mutates original)
const numbers = [1, 2, 5, 6];
numbers.splice(2, 0, 3, 4); // Add 3, 4 at index 2
console.log("After splice insert:", numbers); // [1, 2, 3, 4, 5, 6]`}
                </code></pre>
              </div>
            </div>

            <div className="js-modification-card">
              <h3>Removing Elements</h3>
              <div className="js-code-example">
                <pre><code>
{`let colors = ["red", "green", "blue", "yellow", "purple"];

// pop() - Remove from end (returns removed element)
const lastColor = colors.pop();
console.log("Popped:", lastColor); // "purple"
console.log("After pop:", colors); // ["red", "green", "blue", "yellow"]

// shift() - Remove from beginning (returns removed element)
const firstColor = colors.shift();
console.log("Shifted:", firstColor); // "red"
console.log("After shift:", colors); // ["green", "blue", "yellow"]

// splice() - Remove from specific position
const removed = colors.splice(1, 1); // Remove 1 item at index 1
console.log("Removed with splice:", removed); // ["blue"]
console.log("After splice remove:", colors); // ["green", "yellow"]

// slice() - Extract elements (doesn't mutate original)
const originalNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const sliced = originalNumbers.slice(2, 5); // Extract from index 2 to 5
console.log("Sliced:", sliced); // [3, 4, 5]
console.log("Original unchanged:", originalNumbers); 
// Still [1,2,3,4,5,6,7,8]`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Array Methods */}
        <section className="js-topic-section">
          <h2>🔧 Essential Array Methods</h2>
          
          <div className="js-array-methods">
            <div className="js-method-card">
              <h3>Searching and Finding</h3>
              <div className="js-code-example">
                <pre><code>
{`const numbers = [10, 20, 30, 40, 50, 30, 60];
const users = [
  {id: 1, name: "Alice", age: 25, active: true},
  {id: 2, name: "Bob", age: 30, active: false},
  {id: 3, name: "Charlie", age: 35, active: true}
];

// indexOf() - Find first index of element
console.log("Index of 30:", numbers.indexOf(30)); // 2 (first occurrence)
console.log("Index of 999:", numbers.indexOf(999)); // -1 (not found)

// includes() - Check if element exists
console.log("Includes 40:", numbers.includes(40)); // true
console.log("Includes 999:", numbers.includes(999)); // false

// find() - Find first element matching condition
const activeUser = users.find(user => user.active);
console.log("First active user:", activeUser); 
// {id: 1, name: "Alice", age: 25, active: true}

// some() - Check if at least one element matches
const hasActiveUsers = users.some(user => user.active);
console.log("Has active users:", hasActiveUsers); // true

// every() - Check if all elements match
const allActive = users.every(user => user.active);
console.log("All users active:", allActive); // false`}
                </code></pre>
              </div>
            </div>

            <div className="js-method-card">
              <h3>Transformation Methods</h3>
              <div className="js-code-example">
                <pre><code>
{`const numbers = [1, 2, 3, 4, 5];
const products = [
  {name: "Laptop", price: 999, category: "Electronics"},
  {name: "Book", price: 15, category: "Education"},
  {name: "Coffee Mug", price: 8, category: "Kitchen"}
];

// map() - Transform each element
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

const squared = numbers.map(num => num ** 2);
console.log("Squared:", squared); // [1, 4, 9, 16, 25]

// Transform objects
const productNames = products.map(product => product.name);
console.log("Product names:", productNames);
// ["Laptop", "Book", "Coffee Mug"]

// filter() - Select elements matching condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [2, 4]

// reduce() - Reduce array to single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum); // 15

const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Total price:", totalPrice); // 1022`}
                </code></pre>
              </div>
            </div>

            <div className="js-method-card">
              <h3>Utility Methods</h3>
              <div className="js-code-example">
                <pre><code>
{`const fruits = ["apple", "banana", "orange"];
const numbers = [10, 5, 40, 25, 1000, 1];

// join() - Convert array to string
console.log("Default join:", fruits.join()); // "apple,banana,orange"
console.log("Custom separator:", fruits.join(" - ")); 
// "apple - banana - orange"

// reverse() - Reverse array (mutates original)
const numbersCopy = [...numbers];
numbersCopy.reverse();
console.log("Reversed:", numbersCopy); // [1, 1000, 25, 40, 5, 10]

// sort() - Sort array (mutates original)
const words = ["banana", "apple", "cherry"];
words.sort();
console.log("Sorted words:", words); // ["apple", "banana", "cherry"]

// Numeric sort (important!)
const nums = [10, 5, 40, 25, 1000, 1];
nums.sort((a, b) => a - b); // Ascending
console.log("Numeric sort:", nums); // [1, 5, 10, 25, 40, 1000]

// flat() - Flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("Flat (1 level):", nested.flat()); // [1, 2, 3, 4, [5, 6]]
console.log("Flat (all levels):", nested.flat(Infinity)); 
// [1, 2, 3, 4, 5, 6]`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Array Iteration */}
        <section className="js-topic-section">
          <h2>🔄 Array Iteration Methods</h2>
          
          <div className="js-iteration-methods">
            <div className="js-iteration-card">
              <h3>forEach vs for loops</h3>
              <div className="js-code-example">
                <pre><code>
{`const fruits = ["apple", "banana", "orange"];

// forEach() - Execute function for each element
console.log("Using forEach:");
fruits.forEach((fruit, index) => {
  console.log(index + ": " + fruit);
});

// Traditional for loop
console.log("Using traditional for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(i + ": " + fruits[i]);
}

// for...of loop (modern, clean)
console.log("Using for...of:");
for (const fruit of fruits) {
  console.log(fruit);
}

// for...of with index using entries()
console.log("Using for...of with entries:");
for (const [index, fruit] of fruits.entries()) {
  console.log(index + ": " + fruit);
}

// Breaking out of loops - use some() instead of forEach
fruits.some((fruit, index) => {
  if (fruit === "banana") {
    console.log("Found banana with some() at index " + index);
    return true; // Stop iteration
  }
  return false; // Continue iteration
});`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-dimensional Arrays */}
        <section className="js-topic-section">
          <h2>🏗️ Multi-dimensional Arrays</h2>
          
          <div className="js-multidim-examples">
            <div className="js-multidim-card">
              <h3>2D Arrays (Matrices)</h3>
              <div className="js-code-example">
                <pre><code>
{`// Creating 2D arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("3x3 Matrix:", matrix);

// Accessing 2D array elements
console.log("Element at [1][2]:", matrix[1][2]); // 6
console.log("First row:", matrix[0]); // [1, 2, 3]

// Creating dynamic 2D array
function create2DArray(rows, cols, fillValue = 0) {
  return Array.from({length: rows}, () => 
    Array.from({length: cols}, () => fillValue)
  );
}

const grid = create2DArray(3, 4, "X");
console.log("3x4 Grid:", grid);

// Iterating through 2D arrays
console.log("Iterating through matrix:");
matrix.forEach((row, rowIndex) => {
  row.forEach((value, colIndex) => {
    console.log("matrix[" + rowIndex + "][" + colIndex + "] = " + value);
  });
});

// Matrix operations
function addMatrices(matrix1, matrix2) {
  return matrix1.map((row, i) => 
    row.map((value, j) => value + matrix2[i][j])
  );
}

const matrixA = [[1, 2], [3, 4]];
const matrixB = [[5, 6], [7, 8]];
const sum = addMatrices(matrixA, matrixB);
console.log("Matrix A + B:", sum); // [[6, 8], [10, 12]]`}
                </code></pre>
              </div>
            </div>

            <div className="js-multidim-card">
              <h3>Jagged Arrays</h3>
              <div className="js-code-example">
                <pre><code>
{`// Jagged arrays (arrays with different row lengths)
const jaggedArray = [
  [1, 2, 3, 4],
  [5, 6],
  [7, 8, 9],
  [10]
];

console.log("Jagged array:");
jaggedArray.forEach((row, index) => {
  console.log("Row " + index + " (length " + row.length + "):", row);
});

// Safe access for jagged arrays
function safeGet2D(array, row, col, defaultValue = null) {
  if (row >= 0 && row < array.length && 
      col >= 0 && col < array[row].length) {
    return array[row][col];
  }
  return defaultValue;
}

console.log("Safe access [1][1]:", safeGet2D(jaggedArray, 1, 1)); // 6
console.log("Safe access [1][5]:", safeGet2D(jaggedArray, 1, 5, "N/A")); 
// "N/A"

// Flatten jagged array
const flattened = jaggedArray.flat();
console.log("Flattened:", flattened); 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>⭐ Array Best Practices</h2>
          
          <div className="js-best-practices">
            <div className="js-practice-group">
              <h3>✅ Performance Tips</h3>
              <ul>
                <li><strong>Cache array length:</strong> Store length in variable for large loops</li>
                <li><strong>Use appropriate methods:</strong> find() instead of filter()[0]</li>
                <li><strong>Immutable operations:</strong> Use map, filter, reduce when possible</li>
                <li><strong>Avoid modifying during iteration:</strong> Can cause skipped elements</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>
{`// ✅ Good practices
const numbers = [1, 2, 3, 4, 5];

// Cache length for performance
const length = numbers.length;
for (let i = 0; i < length; i++) {
  console.log(numbers[i]);
}

// Use find() instead of filter()[0]
const firstEven = numbers.find(num => num % 2 === 0);
console.log("First even:", firstEven); // 2

// Immutable operations
const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, x) => acc + x, 0);

console.log("Original unchanged:", numbers); // [1, 2, 3, 4, 5]

// Use Set for uniqueness
const duplicates = [1, 2, 3, 2, 4, 3, 5, 1];
const unique = [...new Set(duplicates)];
console.log("Unique values:", unique); // [1, 2, 3, 4, 5]`}
                </code></pre>
              </div>
            </div>

            <div className="js-practice-group">
              <h3>❌ Common Pitfalls</h3>
              <ul>
                <li><strong>Modifying array during iteration:</strong> Can skip elements</li>
                <li><strong>String sorting numbers:</strong> Use comparison function</li>
                <li><strong>Mutating methods:</strong> Be aware of which methods change original</li>
                <li><strong>Off-by-one errors:</strong> Remember arrays are zero-indexed</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>
{`// ❌ Common mistakes to avoid

// Wrong: String sorting for numbers
const nums = [10, 5, 40, 25, 1000, 1];
nums.sort(); // Alphabetical sort!
console.log("Wrong sort:", nums); // [1, 10, 1000, 25, 40, 5]

// ✅ Correct: Numeric comparison
const numsCopy = [10, 5, 40, 25, 1000, 1];
numsCopy.sort((a, b) => a - b);
console.log("Correct sort:", numsCopy); // [1, 5, 10, 25, 40, 1000]

// ✅ Better: Filter to new array instead of modifying during iteration
const odds = [1, 2, 3, 4, 5, 6].filter(num => num % 2 !== 0);
console.log("Odds:", odds); // [1, 3, 5]

// Remember: Some methods mutate, others don't
const original = [1, 2, 3];
const mapped = original.map(x => x * 2); // Doesn't mutate
console.log("Original after map:", original); // [1, 2, 3]

original.push(4); // Mutates
console.log("Original after push:", original); // [1, 2, 3, 4]`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Arrays;
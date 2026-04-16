import React from 'react';
import '../Navbarweb.css';

function VariablesAndDataTypes() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🔤 Variables and Data Types</h1>
        <p className="js-topic-subtitle">
          Learn how to store, manipulate, and work with different types of data in JavaScript
        </p>
      </div>

      <div className="js-topic-content">
        {/* Variable Declaration */}
        <section className="js-topic-section">
          <h2>📦 Variable Declaration</h2>
          <p>
            Variables are containers for storing data values. In JavaScript, you can declare variables using 
            <code>var</code>, <code>let</code>, or <code>const</code>.
          </p>
          
          <div className="js-code-example">
            <h4>Variable Declaration Methods:</h4>
            <pre><code>{`// ES6+ (Modern JavaScript) - Recommended
let userName = "John Doe";        // Mutable variable
const PI = 3.14159;              // Immutable constant
let age;                         // Declared but undefined

// ES5 (Legacy) - Avoid in modern code
var oldWayVariable = "legacy";   // Function-scoped`}</code></pre>
          </div>

          <div className="js-comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Keyword</th>
                  <th>Scope</th>
                  <th>Reassignable</th>
                  <th>Hoisting</th>
                  <th>When to Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>let</code></td>
                  <td>Block</td>
                  <td>✅ Yes</td>
                  <td>❌ No</td>
                  <td>General variables</td>
                </tr>
                <tr>
                  <td><code>const</code></td>
                  <td>Block</td>
                  <td>❌ No</td>
                  <td>❌ No</td>
                  <td>Constants, objects, arrays</td>
                </tr>
                <tr>
                  <td><code>var</code></td>
                  <td>Function</td>
                  <td>✅ Yes</td>
                  <td>✅ Yes</td>
                  <td>Legacy code only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Primitive Data Types */}
        <section className="js-topic-section">
          <h2>🧱 Primitive Data Types</h2>
          <p>JavaScript has 7 primitive data types that are immutable and stored by value:</p>

          <div className="js-data-types-grid">
            <div className="js-data-type-card">
              <h3>🔢 Number</h3>
              <p>Integers and floating-point numbers</p>
              <div className="js-code-example">
                <pre><code>{`let integer = 42;
let float = 3.14159;
let negative = -10;
let scientific = 2.5e6;  // 2,500,000
let infinity = Infinity;
let notANumber = NaN;`}</code></pre>
              </div>
            </div>

            <div className="js-data-type-card">
              <h3>📝 String</h3>
              <p>Text data enclosed in quotes</p>
              <div className="js-code-example">
                <pre><code>{`let singleQuote = 'Hello';
let doubleQuote = "World";
let template = \`Hello, \${name}!\`;
let multiline = \`Line 1
Line 2
Line 3\`;`}</code></pre>
              </div>
            </div>

            <div className="js-data-type-card">
              <h3>✅ Boolean</h3>
              <p>True or false values</p>
              <div className="js-code-example">
                <pre><code>{`let isActive = true;
let isComplete = false;
let result = 5 > 3;     // true
let comparison = "a" === "b"; // false`}</code></pre>
              </div>
            </div>

            <div className="js-data-type-card">
              <h3>❌ Undefined</h3>
              <p>Variable declared but not assigned</p>
              <div className="js-code-example">
                <pre><code>{`let uninitialized;
console.log(uninitialized); // undefined

function noReturn() {}
console.log(noReturn());    // undefined`}</code></pre>
              </div>
            </div>

            <div className="js-data-type-card">
              <h3>⭕ Null</h3>
              <p>Intentional absence of value</p>
              <div className="js-code-example">
                <pre><code>{`let empty = null;
let cleared = null;

// Common use case
let user = getCurrentUser() || null;`}</code></pre>
              </div>
            </div>

            <div className="js-data-type-card">
              <h3>🏷️ Symbol</h3>
              <p>Unique identifier (ES6+)</p>
              <div className="js-code-example">
                <pre><code>{`let sym1 = Symbol();
let sym2 = Symbol('description');
let sym3 = Symbol('description');

console.log(sym2 === sym3); // false`}</code></pre>
              </div>
            </div>

            <div className="js-data-type-card">
              <h3>🔢 BigInt</h3>
              <p>Arbitrarily large integers (ES2020)</p>
              <div className="js-code-example">
                <pre><code>{`let bigNumber = 123456789012345678901234567890n;
let fromNumber = BigInt(123);
let fromString = BigInt("456");

console.log(typeof bigNumber); // "bigint"`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Non-Primitive Data Types */}
        <section className="js-topic-section">
          <h2>📦 Non-Primitive (Reference) Types</h2>
          <p>These types are mutable and stored by reference:</p>

          <div className="js-feature-grid">
            <div className="js-feature-card">
              <h3>🏷️ Objects</h3>
              <p>Collections of key-value pairs</p>
              <div className="js-code-example">
                <pre><code>{`let person = {
  name: "John",
  age: 30,
  city: "New York"
};

let empty = {};
let nested = {
  address: {
    street: "123 Main St",
    zip: 12345
  }
};`}</code></pre>
              </div>
            </div>

            <div className="js-feature-card">
              <h3>📋 Arrays</h3>
              <p>Ordered lists of values</p>
              <div className="js-code-example">
                <pre><code>{`let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];
let empty = [];
let nested = [[1, 2], [3, 4]];

// Array methods
numbers.push(6);     // Add to end
numbers.pop();       // Remove from end`}</code></pre>
              </div>
            </div>

            <div className="js-feature-card">
              <h3>⚙️ Functions</h3>
              <p>Reusable blocks of code</p>
              <div className="js-code-example">
                <pre><code>{`function greet(name) {
  return "Hello, " + name;
}

let arrow = (x, y) => x + y;
let expression = function() {
  return "I'm a function expression";
};`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Type Checking */}
        <section className="js-topic-section">
          <h2>🔍 Type Checking</h2>
          <p>JavaScript provides several ways to check data types:</p>

          <div className="js-code-example">
            <h4>Using typeof operator:</h4>
            <pre><code>{`console.log(typeof 42);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (historical bug!)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"`}</code></pre>
          </div>

          <div className="js-code-example">
            <h4>More specific type checking:</h4>
            <pre><code>{`// Check for null specifically
let value = null;
console.log(value === null); // true

// Check for arrays
console.log(Array.isArray([]));     // true
console.log(Array.isArray({}));     // false

// Check for NaN
console.log(Number.isNaN(NaN));     // true
console.log(Number.isNaN("hello")); // false

// Constructor checking
let date = new Date();
console.log(date instanceof Date);  // true`}</code></pre>
          </div>
        </section>

        {/* Type Conversion */}
        <section className="js-topic-section">
          <h2>🔄 Type Conversion</h2>
          <p>JavaScript can convert between types automatically (coercion) or explicitly:</p>

          <div className="js-conversion-examples">
            <div className="js-conversion-section">
              <h3>🤖 Automatic Conversion (Coercion)</h3>
              <div className="js-code-example">
                <pre><code>{`// String concatenation
console.log("5" + 3);      // "53" (number to string)
console.log(5 + "3");      // "53" (number to string)

// Arithmetic operations
console.log("5" - 3);      // 2 (string to number)
console.log("5" * "2");    // 10 (strings to numbers)

// Boolean conversion
console.log(!!"hello");    // true (string to boolean)
console.log(!!0);          // false (number to boolean)`}</code></pre>
              </div>
            </div>

            <div className="js-conversion-section">
              <h3>🎯 Explicit Conversion</h3>
              <div className="js-code-example">
                <pre><code>{`// To String
let num = 123;
console.log(String(num));        // "123"
console.log(num.toString());     // "123"
console.log(num + "");           // "123"

// To Number
let str = "456";
console.log(Number(str));        // 456
console.log(parseInt(str));      // 456
console.log(parseFloat("3.14")); // 3.14
console.log(+str);               // 456 (unary plus)

// To Boolean
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean("hello"));   // true
console.log(Boolean(""));        // false`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Truthy and Falsy Values */}
        <section className="js-topic-section">
          <h2>✅❌ Truthy and Falsy Values</h2>
          <p>Understanding which values are considered true or false in boolean contexts:</p>

          <div className="js-truthy-falsy">
            <div className="js-falsy-values">
              <h3>❌ Falsy Values (8 total)</h3>
              <div className="js-code-example">
                <pre><code>{`// These values are falsy:
false          // boolean false
0              // number zero
-0             // negative zero
0n             // BigInt zero
""             // empty string
''             // empty string
\`\`             // empty template literal
null           // null value
undefined      // undefined value
NaN            // Not a Number

// All evaluate to false in if statements`}</code></pre>
              </div>
            </div>

            <div className="js-truthy-values">
              <h3>✅ Truthy Values</h3>
              <div className="js-code-example">
                <pre><code>{`// Everything else is truthy:
true           // boolean true
1              // any non-zero number
"hello"        // any non-empty string
"0"            // string containing "0"
"false"        // string containing "false"
[]             // empty array (object)
{}             // empty object
function(){}   // any function`}</code></pre>
              </div>
            </div>
          </div>

          <div className="js-code-example">
            <h4>Practical Examples:</h4>
            <pre><code>{`// Using in conditions
let userInput = "";
if (userInput) {
  console.log("User entered something");
} else {
  console.log("No input provided"); // This will run
}

// Default values using OR operator
let name = userInput || "Anonymous";

// Checking for valid numbers
let score = 0;
if (score !== false && score !== null && score !== undefined) {
  console.log("Valid score:", score);
}`}</code></pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>💡 Best Practices</h2>
          <div className="js-best-practices">
            <div className="js-practice-item">
              <h4>✅ Use const by default, let when reassignment is needed</h4>
              <div className="js-code-example">
                <pre><code>{`// Good
const userName = "John";
let counter = 0;

// Avoid
var oldStyle = "legacy";`}</code></pre>
              </div>
            </div>

            <div className="js-practice-item">
              <h4>✅ Use descriptive variable names</h4>
              <div className="js-code-example">
                <pre><code>{`// Good
const userAge = 25;
const isLoggedIn = true;
const shoppingCartItems = [];

// Bad
const a = 25;
const flag = true;
const arr = [];`}</code></pre>
              </div>
            </div>

            <div className="js-practice-item">
              <h4>✅ Use strict equality (===) for comparisons</h4>
              <div className="js-code-example">
                <pre><code>{`// Good
if (value === null) { }
if (number === 0) { }

// Avoid (loose equality can cause issues)
if (value == null) { }  // matches both null and undefined
if (number == "0") { }  // true due to type coercion`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Examples */}
        <section className="js-topic-section">
          <h2>🎮 Try It Yourself</h2>
          <p>Copy these examples to your browser console and experiment:</p>
          
          <div className="js-code-example">
            <h4>Variable Playground:</h4>
            <pre><code>{`// Try these in your browser console:

// 1. Declare variables of different types
let myName = "Your Name";
let myAge = 25;
let isStudent = true;
let hobbies = ["reading", "coding", "gaming"];

// 2. Check their types
console.log("Name type:", typeof myName);
console.log("Age type:", typeof myAge);
console.log("Student type:", typeof isStudent);
console.log("Hobbies type:", typeof hobbies);

// 3. Experiment with type conversion
let stringNumber = "123";
console.log("String + number:", stringNumber + 456);
console.log("String to number:", Number(stringNumber) + 456);

// 4. Test truthy/falsy values
console.log("Boolean of empty string:", Boolean(""));
console.log("Boolean of zero:", Boolean(0));
console.log("Boolean of empty array:", Boolean([]));`}</code></pre>
          </div>
        </section>

        {/* Common Gotchas */}
        <section className="js-topic-section">
          <h2>⚠️ Common Gotchas</h2>
          <div className="js-gotchas">
            <div className="js-gotcha-item">
              <h4>🐛 typeof null returns "object"</h4>
              <p>This is a historical bug that can't be fixed due to backward compatibility.</p>
              <div className="js-code-example">
                <pre><code>{`// Check for null explicitly
let value = null;
console.log(typeof value);      // "object" (misleading!)
console.log(value === null);    // true (correct way)`}</code></pre>
              </div>
            </div>

            <div className="js-gotcha-item">
              <h4>🐛 NaN is not equal to itself</h4>
              <div className="js-code-example">
                <pre><code>{`console.log(NaN === NaN);        // false
console.log(Number.isNaN(NaN));  // true (correct way to check)`}</code></pre>
              </div>
            </div>

            <div className="js-gotcha-item">
              <h4>🐛 Array type checking</h4>
              <div className="js-code-example">
                <pre><code>{`console.log(typeof []);           // "object" (not helpful)
console.log(Array.isArray([]));  // true (correct way)`}</code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default VariablesAndDataTypes;
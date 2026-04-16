import React from 'react';
import '../Navbarweb.css';

function OperatorsAndExpressions() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🔧 Operators and Expressions</h1>
        <p className="js-topic-subtitle">
          Learn how to perform operations and create expressions that manipulate data
        </p>
      </div>

      <div className="js-topic-content">
        {/* What are Operators */}
        <section className="js-topic-section">
          <h2>⚙️ What are Operators?</h2>
          <p>
            Operators are symbols that perform operations on operands (values or variables). 
            They are the building blocks for creating expressions and manipulating data in JavaScript.
          </p>
          
          <div className="js-operator-diagram">
            <div className="js-operator-visual">
              <div className="js-operand">5</div>
              <div className="js-operator">+</div>
              <div className="js-operand">3</div>
              <div className="js-equals">=</div>
              <div className="js-result">8</div>
            </div>
            <p className="js-diagram-label">Operand + Operator + Operand = Result</p>
          </div>
        </section>

        {/* Arithmetic Operators */}
        <section className="js-topic-section">
          <h2>🧮 Arithmetic Operators</h2>
          <p>Used to perform mathematical calculations:</p>
          
          <div className="js-operator-grid">
            <div className="js-operator-card">
              <h3>➕ Addition (+)</h3>
              <div className="js-code-example">
                <pre><code>{`let sum = 5 + 3;        // 8
let stringConcat = "Hello" + " World";  // "Hello World"
let mixedConcat = "Age: " + 25;         // "Age: 25"`}</code></pre>
              </div>
            </div>

            <div className="js-operator-card">
              <h3>➖ Subtraction (-)</h3>
              <div className="js-code-example">
                <pre><code>{`let difference = 10 - 4;    // 6
let negative = -5;          // -5 (unary minus)`}</code></pre>
              </div>
            </div>

            <div className="js-operator-card">
              <h3>✖️ Multiplication (*)</h3>
              <div className="js-code-example">
                <pre><code>{`let product = 6 * 7;       // 42
let area = length * width;  // Calculate area`}</code></pre>
              </div>
            </div>

            <div className="js-operator-card">
              <h3>➗ Division (/)</h3>
              <div className="js-code-example">
                <pre><code>{`let quotient = 15 / 3;     // 5
let decimal = 10 / 3;      // 3.3333...
let divideByZero = 5 / 0;  // Infinity`}</code></pre>
              </div>
            </div>

            <div className="js-operator-card">
              <h3>📐 Modulus (%)</h3>
              <div className="js-code-example">
                <pre><code>{`let remainder = 17 % 5;    // 2
let isEven = num % 2 === 0; // Check if even
let isOdd = num % 2 === 1;  // Check if odd`}</code></pre>
              </div>
            </div>

            <div className="js-operator-card">
              <h3>🔢 Exponentiation (**)</h3>
              <div className="js-code-example">
                <pre><code>{`let power = 2 ** 3;      // 8 (2 to the power of 3)
let square = 5 ** 2;     // 25
let cube = 3 ** 3;       // 27
let root = 9 ** 0.5;     // 3 (square root)`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Assignment Operators */}
        <section className="js-topic-section">
          <h2>📝 Assignment Operators</h2>
          <p>Used to assign values to variables:</p>
          
          <div className="js-operator-table">
            <table>
              <thead>
                <tr>
                  <th>Operator</th>
                  <th>Example</th>
                  <th>Equivalent To</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>=</td>
                  <td>x = 5</td>
                  <td>x = 5</td>
                  <td>x becomes 5</td>
                </tr>
                <tr>
                  <td>+=</td>
                  <td>x += 3</td>
                  <td>x = x + 3</td>
                  <td>x becomes 8</td>
                </tr>
                <tr>
                  <td>-=</td>
                  <td>x -= 2</td>
                  <td>x = x - 2</td>
                  <td>x becomes 6</td>
                </tr>
                <tr>
                  <td>*=</td>
                  <td>x *= 2</td>
                  <td>x = x * 2</td>
                  <td>x becomes 12</td>
                </tr>
                <tr>
                  <td>/=</td>
                  <td>x /= 3</td>
                  <td>x = x / 3</td>
                  <td>x becomes 4</td>
                </tr>
                <tr>
                  <td>%=</td>
                  <td>x %= 3</td>
                  <td>x = x % 3</td>
                  <td>x becomes 1</td>
                </tr>
                <tr>
                  <td>**=</td>
                  <td>x **= 2</td>
                  <td>x = x ** 2</td>
                  <td>x becomes 1</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="js-code-example">
            <h4>Assignment Examples:</h4>
            <pre><code>{`let score = 100;
score += 10;   // score is now 110
score -= 5;    // score is now 105
score *= 2;    // score is now 210
score /= 3;    // score is now 70
score %= 8;    // score is now 6`}</code></pre>
          </div>
        </section>

        {/* Comparison Operators */}
        <section className="js-topic-section">
          <h2>⚖️ Comparison Operators</h2>
          <p>Used to compare values and return boolean results:</p>
          
          <div className="js-comparison-grid">
            <div className="js-comparison-card">
              <h3>Equality Comparison</h3>
              <div className="js-code-example">
                <pre><code>{`// Loose equality (==) - converts types
5 == "5"      // true (string converted to number)
true == 1     // true
false == 0    // true
null == undefined  // true

// Strict equality (===) - no type conversion
5 === "5"     // false (different types)
5 === 5       // true
true === 1    // false`}</code></pre>
              </div>
            </div>

            <div className="js-comparison-card">
              <h3>Inequality Comparison</h3>
              <div className="js-code-example">
                <pre><code>{`// Loose inequality (!=)
5 != "3"      // true
5 != "5"      // false

// Strict inequality (!==)
5 !== "5"     // true (different types)
5 !== 5       // false`}</code></pre>
              </div>
            </div>

            <div className="js-comparison-card">
              <h3>Relational Operators</h3>
              <div className="js-code-example">
                <pre><code>{`let a = 10, b = 5;

a > b         // true (greater than)
a >= b        // true (greater than or equal)
a < b         // false (less than)
a <= b        // false (less than or equal)

"apple" > "banana"  // false (alphabetical comparison)
"10" > "2"          // false (string comparison, not numeric)`}</code></pre>
              </div>
            </div>
          </div>

          <div className="js-highlight-box">
            <h3>🔥 Best Practice: Use Strict Comparison</h3>
            <p>
              Always use <code>===</code> and <code>!==</code> instead of <code>==</code> and <code>!=</code> 
              to avoid unexpected type conversions!
            </p>
          </div>
        </section>

        {/* Logical Operators */}
        <section className="js-topic-section">
          <h2>🧠 Logical Operators</h2>
          <p>Used to combine or manipulate boolean values:</p>
          
          <div className="js-logical-grid">
            <div className="js-logical-card">
              <h3>AND (&&)</h3>
              <p>Returns true only if both operands are true</p>
              <div className="js-code-example">
                <pre><code>{`let age = 25;
let hasLicense = true;

// Both conditions must be true
let canDrive = age >= 18 && hasLicense;  // true

// Short-circuit evaluation
let user = { name: "John" };
user && user.name;  // "John" (if user exists, return name)`}</code></pre>
              </div>
            </div>

            <div className="js-logical-card">
              <h3>OR (||)</h3>
              <p>Returns true if at least one operand is true</p>
              <div className="js-code-example">
                <pre><code>{`let isWeekend = false;
let isHoliday = true;

// Either condition can be true
let isDayOff = isWeekend || isHoliday;  // true

// Default values
let username = inputName || "Guest";  // "Guest" if inputName is falsy`}</code></pre>
              </div>
            </div>

            <div className="js-logical-card">
              <h3>NOT (!)</h3>
              <p>Returns the opposite boolean value</p>
              <div className="js-code-example">
                <pre><code>{`let isLoggedIn = false;

let needsLogin = !isLoggedIn;  // true

// Double NOT for boolean conversion
let isTruthy = !!value;  // Convert any value to boolean`}</code></pre>
              </div>
            </div>
          </div>

          <div className="js-truth-table">
            <h4>Truth Table:</h4>
            <table>
              <thead>
                <tr><th>A</th><th>B</th><th>A && B</th><th>A || B</th><th>!A</th></tr>
              </thead>
              <tbody>
                <tr><td>true</td><td>true</td><td>true</td><td>true</td><td>false</td></tr>
                <tr><td>true</td><td>false</td><td>false</td><td>true</td><td>false</td></tr>
                <tr><td>false</td><td>true</td><td>false</td><td>true</td><td>true</td></tr>
                <tr><td>false</td><td>false</td><td>false</td><td>false</td><td>true</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Increment and Decrement */}
        <section className="js-topic-section">
          <h2>🔢 Increment and Decrement Operators</h2>
          <p>Shorthand for adding or subtracting 1:</p>
          
          <div className="js-increment-grid">
            <div className="js-increment-card">
              <h3>Pre-increment (++variable)</h3>
              <div className="js-code-example">
                <pre><code>{`let count = 5;
let newValue = ++count;  // count becomes 6, then assign to newValue
console.log(count);      // 6
console.log(newValue);   // 6`}</code></pre>
              </div>
            </div>

            <div className="js-increment-card">
              <h3>Post-increment (variable++)</h3>
              <div className="js-code-example">
                <pre><code>{`let count = 5;
let newValue = count++;  // assign current value (5), then increment count
console.log(count);      // 6
console.log(newValue);   // 5`}</code></pre>
              </div>
            </div>

            <div className="js-increment-card">
              <h3>Pre-decrement (--variable)</h3>
              <div className="js-code-example">
                <pre><code>{`let count = 5;
let newValue = --count;  // count becomes 4, then assign to newValue
console.log(count);      // 4
console.log(newValue);   // 4`}</code></pre>
              </div>
            </div>

            <div className="js-increment-card">
              <h3>Post-decrement (variable--)</h3>
              <div className="js-code-example">
                <pre><code>{`let count = 5;
let newValue = count--;  // assign current value (5), then decrement count
console.log(count);      // 4
console.log(newValue);   // 5`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Ternary Operator */}
        <section className="js-topic-section">
          <h2>❓ Ternary (Conditional) Operator</h2>
          <p>A shorthand for simple if-else statements:</p>
          
          <div className="js-ternary-syntax">
            <div className="js-syntax-diagram">
              <span className="js-condition">condition</span>
              <span className="js-operator">?</span>
              <span className="js-true-value">valueIfTrue</span>
              <span className="js-operator">:</span>
              <span className="js-false-value">valueIfFalse</span>
            </div>
          </div>

          <div className="js-code-example">
            <h4>Ternary Examples:</h4>
            <pre><code>{`// Basic ternary
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Instead of if-else
let weather = "sunny";
let activity = weather === "sunny" ? "go to beach" : "stay inside";

// Nested ternary (use sparingly)
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

// With function calls
let user = getUser();
let greeting = user ? "Welcome back!" : "Please log in";`}</code></pre>
          </div>
        </section>

        {/* Type Operators */}
        <section className="js-topic-section">
          <h2>🏷️ Type Operators</h2>
          <p>Operators for checking and working with data types:</p>
          
          <div className="js-type-operators">
            <div className="js-type-card">
              <h3>typeof Operator</h3>
              <div className="js-code-example">
                <pre><code>{`console.log(typeof 42);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (JavaScript quirk!)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"`}</code></pre>
              </div>
            </div>

            <div className="js-type-card">
              <h3>instanceof Operator</h3>
              <div className="js-code-example">
                <pre><code>{`let arr = [1, 2, 3];
let date = new Date();

console.log(arr instanceof Array);   // true
console.log(date instanceof Date);   // true
console.log(arr instanceof Object);  // true (arrays are objects)

// Custom constructors
function Person(name) {
  this.name = name;
}
let person = new Person("Alice");
console.log(person instanceof Person); // true`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Operator Precedence */}
        <section className="js-topic-section">
          <h2>🥇 Operator Precedence</h2>
          <p>The order in which operators are evaluated in expressions:</p>
          
          <div className="js-precedence-table">
            <table>
              <thead>
                <tr>
                  <th>Precedence</th>
                  <th>Operator</th>
                  <th>Description</th>
                  <th>Associativity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 (Highest)</td>
                  <td>( )</td>
                  <td>Grouping</td>
                  <td>n/a</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>++ --</td>
                  <td>Increment/Decrement</td>
                  <td>Right-to-left</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>**</td>
                  <td>Exponentiation</td>
                  <td>Right-to-left</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>* / %</td>
                  <td>Multiplication/Division</td>
                  <td>Left-to-right</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>+ -</td>
                  <td>Addition/Subtraction</td>
                  <td>Left-to-right</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>&lt; &gt; &lt;= &gt;=</td>
                  <td>Relational</td>
                  <td>Left-to-right</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>== != === !==</td>
                  <td>Equality</td>
                  <td>Left-to-right</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>&&</td>
                  <td>Logical AND</td>
                  <td>Left-to-right</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>||</td>
                  <td>Logical OR</td>
                  <td>Left-to-right</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>? :</td>
                  <td>Ternary</td>
                  <td>Right-to-left</td>
                </tr>
                <tr>
                  <td>11 (Lowest)</td>
                  <td>= += -= *= /=</td>
                  <td>Assignment</td>
                  <td>Right-to-left</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="js-code-example">
            <h4>Precedence Examples:</h4>
            <pre><code>{`// Without parentheses
let result1 = 5 + 3 * 2;      // 11 (not 16) - multiplication first

// With parentheses to change order
let result2 = (5 + 3) * 2;    // 16 - addition first

// Complex expression
let x = 10;
let result3 = x > 5 && x < 15 || x === 20;  // true
// Evaluated as: ((x > 5) && (x < 15)) || (x === 20)`}</code></pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>💡 Operator Best Practices</h2>
          
          <div className="js-best-practices">
            <div className="js-practice-item">
              <h4>✅ Use strict equality</h4>
              <div className="js-code-example">
                <pre><code>{`// Good: Strict comparison
if (value === 0) { /* ... */ }
if (name !== "") { /* ... */ }

// Avoid: Loose comparison
if (value == 0) { /* ... */ }   // Can have unexpected results`}</code></pre>
              </div>
            </div>

            <div className="js-practice-item">
              <h4>✅ Use parentheses for clarity</h4>
              <div className="js-code-example">
                <pre><code>{`// Good: Clear intention
let total = (price * quantity) + tax;
let isValid = (age >= 18) && (hasPermit === true);

// Harder to read without parentheses
let total = price * quantity + tax;
let isValid = age >= 18 && hasPermit === true;`}</code></pre>
              </div>
            </div>

            <div className="js-practice-item">
              <h4>✅ Keep expressions simple</h4>
              <div className="js-code-example">
                <pre><code>{`// Good: Break complex expressions into steps
let subtotal = price * quantity;
let taxAmount = subtotal * taxRate;
let total = subtotal + taxAmount;

// Avoid: Complex one-liners that are hard to debug
let total = (price * quantity) * (1 + taxRate) + shippingCost;`}</code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OperatorsAndExpressions;
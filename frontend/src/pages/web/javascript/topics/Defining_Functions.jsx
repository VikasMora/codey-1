import React from 'react';
import '../Navbarweb.css';

function DefiningFunctions() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>⚙️ Defining Functions</h1>
        <p className="js-topic-subtitle">
          Master the art of creating reusable blocks of code that perform specific tasks
        </p>
      </div>

      <div className="js-topic-content">
        {/* What are Functions */}
        <section className="js-topic-section">
          <h2>🔧 What are Functions?</h2>
          <p>
            Functions are reusable blocks of code designed to perform specific tasks. They help organize code,
            avoid repetition, and make programs more modular and maintainable.
          </p>
          
          <div className="js-function-diagram">
            <div className="js-function-visual">
              <div className="js-function-box">
                <h4>Function</h4>
                <div className="js-function-flow">
                  <div className="js-function-input">Input (Parameters)</div>
                  <div className="js-function-process">Process</div>
                  <div className="js-function-output">Output (Return Value)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="js-code-example">
            <h4>Simple Function Example:</h4>
            <pre><code>{`// Function that adds two numbers
function addNumbers(a, b) {
  return a + b;
}

// Using the function
let result = addNumbers(5, 3); // 8
console.log(result);`}</code></pre>
          </div>
        </section>

        {/* Function Declaration */}
        <section className="js-topic-section">
          <h2>📝 Function Declaration</h2>
          <p>The most common way to define a function using the <code>function</code> keyword:</p>
          
          <div className="js-code-example">
            <h4>Basic Syntax:</h4>
            <pre><code>{`function functionName(parameter1, parameter2) {
  // Function body
  return value; // Optional
}

// Examples:
function greet(name) {
  return "Hello, " + name + "!";
}

function calculateArea(width, height) {
  return width * height;
}

function showMessage() {
  console.log("This function has no parameters");
}

// Function with no return value (returns undefined)
function logMessage(message) {
  console.log(message);
  // No return statement = returns undefined
}`}</code></pre>
          </div>

          <div className="js-highlight-box">
            <h3>🔥 Function Hoisting</h3>
            <p>
              Function declarations are "hoisted" - you can call them before they're defined in your code!
            </p>
            <div className="js-code-example">
              <pre><code>{`// This works! Function is hoisted
console.log(sayHello("World")); // "Hello, World!"

function sayHello(name) {
  return "Hello, " + name + "!";
}`}</code></pre>
            </div>
          </div>
        </section>

        {/* Function Expression */}
        <section className="js-topic-section">
          <h2>🎭 Function Expression</h2>
          <p>Functions can also be assigned to variables as expressions:</p>
          
          <div className="js-code-example">
            <h4>Basic Function Expression:</h4>
            <pre><code>{`// Anonymous function expression
const multiply = function(x, y) {
  return x * y;
};

// Named function expression
const divide = function divideNumbers(x, y) {
  if (y === 0) {
    throw new Error("Division by zero");
  }
  return x / y;
};

// Using function expressions
console.log(multiply(4, 5));  // 20
console.log(divide(10, 2));   // 5`}</code></pre>
          </div>
        </section>

        {/* Arrow Functions */}
        <section className="js-topic-section">
          <h2>➡️ Arrow Functions (ES6)</h2>
          <p>A more concise way to write functions, introduced in ES6:</p>
          
          <div className="js-code-example">
            <h4>Arrow Function Examples:</h4>
            <pre><code>{`// Traditional function expression
const square1 = function(x) {
  return x * x;
};

// Arrow function with block body
const square2 = (x) => {
  return x * x;
};

// Arrow function with expression body (implicit return)
const square3 = (x) => x * x;

// Single parameter (parentheses optional)
const square4 = x => x * x;

// All of these are equivalent!
console.log(square1(5)); // 25
console.log(square2(5)); // 25
console.log(square3(5)); // 25
console.log(square4(5)); // 25`}</code></pre>
          </div>
        </section>

        {/* Parameters and Arguments */}
        <section className="js-topic-section">
          <h2>📥 Parameters and Arguments</h2>
          <p>Understanding how to pass data into functions:</p>
          
          <div className="js-code-example">
            <h4>Basic Parameters:</h4>
            <pre><code>{`// Function with multiple parameters
function createFullName(firstName, lastName, title) {
  return title + " " + firstName + " " + lastName;
}

// Arguments are passed in order
console.log(createFullName("John", "Doe", "Mr.")); // "Mr. John Doe"

// Missing arguments become undefined
console.log(createFullName("Jane")); // "undefined Jane undefined"`}</code></pre>
          </div>

          <div className="js-code-example">
            <h4>Default Parameters (ES6):</h4>
            <pre><code>{`// Parameters with default values
function greetUser(name = "Guest", greeting = "Hello") {
  return greeting + ", " + name + "!";
}

console.log(greetUser());                    // "Hello, Guest!"
console.log(greetUser("Alice"));             // "Hello, Alice!"
console.log(greetUser("Bob", "Welcome"));    // "Welcome, Bob!"`}</code></pre>
          </div>

          <div className="js-code-example">
            <h4>Rest Parameters (...):</h4>
            <pre><code>{`// Collect multiple arguments into an array
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15`}</code></pre>
          </div>
        </section>

        {/* Return Statements */}
        <section className="js-topic-section">
          <h2>↩️ Return Statements</h2>
          <p>How functions send data back to their caller:</p>
          
          <div className="js-code-example">
            <h4>Different Return Scenarios:</h4>
            <pre><code>{`// 1. Explicit return with value
function multiply(a, b) {
  return a * b;  // Returns the result
}

// 2. No return statement (returns undefined)
function logMessage(message) {
  console.log(message);
  // Implicitly returns undefined
}

// 3. Early return (exit function early)
function divide(a, b) {
  if (b === 0) {
    return null;  // Exit early for invalid input
  }
  return a / b;
}

// 4. Multiple return points
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}`}</code></pre>
          </div>
        </section>

        {/* Function Methods */}
        <section className="js-topic-section">
          <h2>🔧 Function Methods: call(), apply(), bind()</h2>
          <p>Methods to control how functions are called and what <code>this</code> refers to:</p>
          
          <div className="js-code-example">
            <h4>call() Method:</h4>
            <pre><code>{`function greet(greeting, punctuation) {
  return greeting + ", " + this.name + punctuation;
}

const person = { name: "Alice" };

// Call with specific 'this' and arguments
const message = greet.call(person, "Hello", "!");
console.log(message); // "Hello, Alice!"`}</code></pre>
          </div>

          <div className="js-code-example">
            <h4>apply() Method:</h4>
            <pre><code>{`// Same as call(), but arguments as array
const message = greet.apply(person, ["Hello", "!"]);
console.log(message); // "Hello, Alice!"

// Useful for functions that take multiple arguments
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum.apply(null, numbers); // 6`}</code></pre>
          </div>

          <div className="js-code-example">
            <h4>bind() Method:</h4>
            <pre><code>{`// Creates a new function with bound 'this'
const boundGreet = greet.bind(person);
console.log(boundGreet("Hi", "?")); // "Hi, Alice?"

// Partial application (pre-filling arguments)
const sayHello = greet.bind(person, "Hello");
console.log(sayHello("!"));  // "Hello, Alice!"`}</code></pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>💡 Function Best Practices</h2>
          
          <div className="js-best-practices">
            <div className="js-practice-item">
              <h4>✅ Keep functions small and focused</h4>
              <p>Each function should do one thing well (Single Responsibility Principle)</p>
              <div className="js-code-example">
                <pre><code>{`// Good: Focused function
function validateEmail(email) {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
}

// Good: Another focused function
function sendWelcomeEmail(email) {
  if (validateEmail(email)) {
    // Send email logic
  }
}`}</code></pre>
              </div>
            </div>

            <div className="js-practice-item">
              <h4>✅ Use descriptive parameter names</h4>
              <div className="js-code-example">
                <pre><code>{`// Bad
function calc(x, y, z) { }

// Good
function calculateMonthlyPayment(principal, interestRate, termInMonths) {
  return (principal * interestRate) / (1 - Math.pow(1 + interestRate, -termInMonths));
}`}</code></pre>
              </div>
            </div>

            <div className="js-practice-item">
              <h4>✅ Use pure functions when possible</h4>
              <p>Functions that don't modify external state and always return the same output for the same input</p>
              <div className="js-code-example">
                <pre><code>{`// Pure function (good)
function calculateTax(amount, taxRate) {
  return amount * taxRate;
}

// Impure function (avoid when possible)
let globalTaxRate = 0.1;
function calculateTaxImpure(amount) {
  return amount * globalTaxRate; // Depends on external variable
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Common Patterns */}
        <section className="js-topic-section">
          <h2>🎨 Common Function Patterns</h2>
          
          <div className="js-patterns">
            <div className="js-pattern-card">
              <h3>🏭 Factory Functions</h3>
              <div className="js-code-example">
                <pre><code>{`// Creates and returns objects
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      return "Hi, I'm " + this.name;
    },
    haveBirthday: function() {
      this.age++;
    }
  };
}

const person1 = createPerson("Alice", 25);
const person2 = createPerson("Bob", 30);`}</code></pre>
              </div>
            </div>

            <div className="js-pattern-card">
              <h3>🔄 Callback Functions</h3>
              <div className="js-code-example">
                <pre><code>{`// Functions passed as arguments
function processArray(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]`}</code></pre>
              </div>
            </div>

            <div className="js-pattern-card">
              <h3>🎯 Higher-Order Functions</h3>
              <div className="js-code-example">
                <pre><code>{`// Functions that return functions
function createValidator(minLength) {
  return function(value) {
    return value.length >= minLength;
  };
}

const validatePassword = createValidator(8);
console.log(validatePassword("12345"));    // false
console.log(validatePassword("password123")); // true`}</code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DefiningFunctions;
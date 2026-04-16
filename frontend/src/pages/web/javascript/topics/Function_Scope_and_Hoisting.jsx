import React from 'react';
import '../Navbarweb.css';

function FunctionScopeAndHoisting() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🏗️ Function Scope and Hoisting</h1>
        <p className="js-topic-subtitle">
          Understand how JavaScript handles variable scope and function hoisting behavior
        </p>
      </div>

      <div className="js-topic-content">
        {/* What is Scope */}
        <section className="js-topic-section">
          <h2>🔍 What is Scope?</h2>
          <p>
            Scope determines where variables and functions can be accessed in your code. 
            JavaScript has function scope, block scope, and global scope.
          </p>
          
          <div className="js-scope-diagram">
            <div className="js-scope-visual">
              <div className="js-scope-global">
                <h4>Global Scope</h4>
                <div className="js-scope-function">
                  <h4>Function Scope</h4>
                  <div className="js-scope-block">
                    <h4>Block Scope</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="js-code-example">
            <h4>Scope Examples:</h4>
            <pre><code>{`// Global scope
var globalVar = "I'm global";
let globalLet = "I'm also global";

function myFunction() {
  // Function scope
  var functionVar = "I'm in function scope";
  let functionLet = "I'm also in function scope";
  
  if (true) {
    // Block scope
    let blockLet = "I'm in block scope";
    const blockConst = "I'm also in block scope";
    var blockVar = "I'm still in function scope!"; // var ignores blocks
    
    console.log(blockLet); // Works
  }
  
  // console.log(blockLet); // Error: blockLet is not defined
  console.log(blockVar); // Works - var is function-scoped
}`}</code></pre>
          </div>
        </section>

        {/* Hoisting */}
        <section className="js-topic-section">
          <h2>⬆️ Hoisting Explained</h2>
          <p>Hoisting is JavaScript's behavior of moving declarations to the top of their scope:</p>
          
          <div className="js-hoisting-examples">
            <div className="js-hoisting-card">
              <h3>Variable Hoisting</h3>
              <div className="js-code-example">
                <pre><code>{`// What you write:
console.log(myVar); // undefined (not error!)
var myVar = 5;

// What JavaScript sees:
var myVar; // Declaration hoisted
console.log(myVar); // undefined
myVar = 5; // Assignment stays in place

// let and const behave differently:
console.log(myLet); // ReferenceError: Cannot access before initialization
let myLet = 10;

console.log(myConst); // ReferenceError: Cannot access before initialization
const myConst = 15;`}</code></pre>
              </div>
            </div>

            <div className="js-hoisting-card">
              <h3>Function Hoisting</h3>
              <div className="js-code-example">
                <pre><code>{`// Function declarations are fully hoisted
sayHello(); // Works! Prints "Hello!"

function sayHello() {
  console.log("Hello!");
}

// Function expressions are NOT hoisted
sayGoodbye(); // TypeError: sayGoodbye is not a function

var sayGoodbye = function() {
  console.log("Goodbye!");
};

// Arrow functions are also NOT hoisted
sayHi(); // ReferenceError: Cannot access before initialization

const sayHi = () => {
  console.log("Hi!");
};`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Global Scope */}
        <section className="js-topic-section">
          <h2>🌍 Global Scope</h2>
          <p>Variables declared in global scope are accessible everywhere:</p>
          
          <div className="js-code-example">
            <h4>Global Scope Examples:</h4>
            <pre><code>{`// Global variables
var globalVar = "Global with var";
let globalLet = "Global with let";
const globalConst = "Global with const";

// Global function
function globalFunction() {
  console.log("I'm a global function");
}

// Implicit globals (avoid these!)
function createImplicitGlobal() {
  implicitGlobal = "I'm accidentally global!"; // No var/let/const
}

createImplicitGlobal();
console.log(implicitGlobal); // Works, but bad practice!

// Browser globals
console.log(window.globalVar); // "Global with var" (in browser)
console.log(window.globalLet); // undefined (let/const don't attach to window)`}</code></pre>
          </div>

          <div className="js-highlight-box">
            <h3>🚨 Global Scope Best Practices</h3>
            <ul>
              <li>Minimize global variables to avoid naming conflicts</li>
              <li>Use modules or namespacing patterns</li>
              <li>Always declare variables with var, let, or const</li>
              <li>Consider using IIFE (Immediately Invoked Function Expression)</li>
            </ul>
          </div>
        </section>

        {/* Function Scope */}
        <section className="js-topic-section">
          <h2>⚙️ Function Scope</h2>
          <p>Variables declared inside functions are only accessible within that function:</p>
          
          <div className="js-code-example">
            <h4>Function Scope Examples:</h4>
            <pre><code>{`function outerFunction() {
  var outerVar = "I'm in outer function";
  
  function innerFunction() {
    var innerVar = "I'm in inner function";
    console.log(outerVar); // Can access outer scope
    console.log(innerVar); // Can access own scope
  }
  
  innerFunction();
  console.log(outerVar); // Can access own scope
  // console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();
// console.log(outerVar); // Error: outerVar is not defined

// Parameters are function-scoped
function greet(name) { // 'name' parameter is function-scoped
  var greeting = "Hello " + name;
  return greeting;
}

console.log(greet("Alice")); // "Hello Alice"
// console.log(name); // Error: name is not defined`}</code></pre>
          </div>
        </section>

        {/* Block Scope */}
        <section className="js-topic-section">
          <h2>📦 Block Scope (ES6+)</h2>
          <p>let and const create block-scoped variables:</p>
          
          <div className="js-code-example">
            <h4>Block Scope Examples:</h4>
            <pre><code>{`// Block scope with let and const
function testBlockScope() {
  if (true) {
    var varVariable = "I'm function-scoped";
    let letVariable = "I'm block-scoped";
    const constVariable = "I'm also block-scoped";
  }
  
  console.log(varVariable); // Works: "I'm function-scoped"
  // console.log(letVariable); // Error: letVariable is not defined
  // console.log(constVariable); // Error: constVariable is not defined
}

// For loop scope
function forLoopScope() {
  // With var (function-scoped)
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var i:", i), 100); // Prints: 3, 3, 3
  }
  console.log("var i after loop:", i); // 3
  
  // With let (block-scoped)
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let j:", j), 200); // Prints: 0, 1, 2
  }
  // console.log("let j after loop:", j); // Error: j is not defined
}

forLoopScope();`}</code></pre>
          </div>
        </section>

        {/* Lexical Scope */}
        <section className="js-topic-section">
          <h2>🔗 Lexical Scope</h2>
          <p>Inner functions have access to variables in their outer scope:</p>
          
          <div className="js-code-example">
            <h4>Lexical Scope Chain:</h4>
            <pre><code>{`function grandparent() {
  var grandparentVar = "Grandparent variable";
  
  function parent() {
    var parentVar = "Parent variable";
    
    function child() {
      var childVar = "Child variable";
      
      // Child can access all outer scopes
      console.log(childVar);      // "Child variable"
      console.log(parentVar);     // "Parent variable" 
      console.log(grandparentVar); // "Grandparent variable"
    }
    
    child();
    // Can't access child scope
    // console.log(childVar); // Error
  }
  
  parent();
}

grandparent();

// Practical example: Counter with closure
function createCounter() {
  let count = 0; // Private variable
  
  return function() {
    count++; // Access outer scope
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (separate scope)
console.log(counter1()); // 3`}</code></pre>
          </div>
        </section>

        {/* Temporal Dead Zone */}
        <section className="js-topic-section">
          <h2>⏰ Temporal Dead Zone</h2>
          <p>The time between hoisting and initialization for let/const:</p>
          
          <div className="js-code-example">
            <h4>Temporal Dead Zone Examples:</h4>
            <pre><code>{`function temporalDeadZone() {
  // TDZ starts here for 'myLet' and 'myConst'
  
  console.log(myVar); // undefined (hoisted, initialized with undefined)
  // console.log(myLet); // ReferenceError: Cannot access before initialization
  // console.log(myConst); // ReferenceError: Cannot access before initialization
  
  var myVar = "var value";
  let myLet = "let value"; // TDZ ends here for myLet
  const myConst = "const value"; // TDZ ends here for myConst
  
  console.log(myVar);   // "var value"
  console.log(myLet);   // "let value"
  console.log(myConst); // "const value"
}

// TDZ in function parameters
function tdzeInParams(a = b, b = 1) { // Error: b is in TDZ when evaluating a
  return a + b;
}

// Correct version
function correctParams(b = 1, a = b) { // Works: b is initialized before a
  return a + b;
}`}</code></pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>💡 Scope Best Practices</h2>
          
          <div className="js-best-practices">
            <div className="js-practice-group">
              <h3>✅ Variable Declaration Best Practices</h3>
              <ul>
                <li><strong>Use const by default:</strong> Only use let when you need to reassign</li>
                <li><strong>Avoid var:</strong> Use let/const for block scoping</li>
                <li><strong>Declare at the top:</strong> Declare variables at the beginning of their scope</li>
                <li><strong>Use descriptive names:</strong> Clear names reduce scope confusion</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>{`// Good practices
function processUserData(users) {
  const processedUsers = []; // const for arrays that won't be reassigned
  let currentUser; // let because it will be reassigned in loop
  
  for (let i = 0; i < users.length; i++) { // let for loop variable
    currentUser = users[i];
    
    if (currentUser.isActive) {
      const userData = { // const for object that won't be reassigned
        id: currentUser.id,
        name: currentUser.name.toUpperCase()
      };
      processedUsers.push(userData);
    }
  }
  
  return processedUsers;
}`}</code></pre>
              </div>
            </div>

            <div className="js-practice-group">
              <h3>🔒 Avoiding Scope Issues</h3>
              <ul>
                <li><strong>IIFE for private scope:</strong> Create isolated scopes when needed</li>
                <li><strong>Module pattern:</strong> Encapsulate related functionality</li>
                <li><strong>Minimize global variables:</strong> Reduce global namespace pollution</li>
                <li><strong>Use strict mode:</strong> Catch scope-related errors early</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>{`// IIFE (Immediately Invoked Function Expression)
(function() {
  // Private scope
  var privateVar = "Can't access from outside";
  
  // Only expose what's needed
  window.MyModule = {
    publicMethod: function() {
      return "Public method using " + privateVar;
    }
  };
})();

// Module pattern
const Calculator = (function() {
  // Private variables
  let history = [];
  
  // Private function
  function addToHistory(operation) {
    history.push(operation);
  }
  
  // Public API
  return {
    add: function(a, b) {
      const result = a + b;
      addToHistory(a + " + " + b + " = " + result);
      return result;
    },
    
    getHistory: function() {
      return history.slice(); // Return copy, not reference
    },
    
    clearHistory: function() {
      history = [];
    }
  };
})();

console.log(Calculator.add(5, 3)); // 8
console.log(Calculator.getHistory()); // ["5 + 3 = 8"]`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Common Pitfalls */}
        <section className="js-topic-section">
          <h2>🚨 Common Scope Pitfalls</h2>
          
          <div className="js-pitfalls">
            <div className="js-pitfall-item">
              <h4>❌ var in loops</h4>
              <div className="js-code-example">
                <pre><code>{`// Problem: var is function-scoped
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 100); // Prints: 3, 3, 3
}

// Solution: Use let for block scope
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let:", i), 100); // Prints: 0, 1, 2
}`}</code></pre>
              </div>
            </div>

            <div className="js-pitfall-item">
              <h4>❌ Accidental globals</h4>
              <div className="js-code-example">
                <pre><code>{`function createAccidentalGlobal() {
  myVar = "Oops, I'm global!"; // Missing var/let/const
}

// Solution: Always declare variables
function createProperLocal() {
  let myVar = "I'm properly scoped!";
}`}</code></pre>
              </div>
            </div>

            <div className="js-pitfall-item">
              <h4>❌ Hoisting confusion</h4>
              <div className="js-code-example">
                <pre><code>{`// Confusing: function expressions vs declarations
console.log(typeof funcDeclaration); // "function"
console.log(typeof funcExpression);  // "undefined"

function funcDeclaration() { } // Hoisted completely

var funcExpression = function() { }; // Only declaration hoisted`}</code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FunctionScopeAndHoisting;
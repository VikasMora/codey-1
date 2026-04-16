import React from 'react';
import '../Navbarweb.css';

function ArrowFunctions() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>➡️ Arrow Functions</h1>
        <p className="js-topic-subtitle">
          Master ES6 arrow functions and understand their differences from regular functions
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction to Arrow Functions */}
        <section className="js-topic-section">
          <h2>🎯 What are Arrow Functions?</h2>
          <p>
            Arrow functions, introduced in ES6, provide a more concise way to write function expressions.
            They have a shorter syntax and different behavior regarding 'this' binding.
          </p>
          
          <div className="js-arrow-comparison">
            <div className="js-comparison-card">
              <h3>Traditional Function</h3>
              <div className="js-code-example">
                <pre><code>{`// Function declaration
function add(a, b) {
  return a + b;
}

// Function expression
const add = function(a, b) {
  return a + b;
};`}</code></pre>
              </div>
            </div>

            <div className="js-comparison-card">
              <h3>Arrow Function</h3>
              <div className="js-code-example">
                <pre><code>{`// Arrow function
const add = (a, b) => {
  return a + b;
};

// Concise arrow function
const add = (a, b) => a + b;`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Arrow Function Syntax */}
        <section className="js-topic-section">
          <h2>✍️ Arrow Function Syntax</h2>
          <p>Arrow functions have several syntax variations depending on parameters and body:</p>
          
          <div className="js-syntax-examples">
            <div className="js-syntax-card">
              <h3>Basic Syntax</h3>
              <div className="js-code-example">
                <pre><code>{`// Basic arrow function
const basicArrow = () => {
  console.log("Hello World!");
};

// With parameters
const withParams = (name, age) => {
  console.log("Name: " + name + ", Age: " + age);
};

// Single parameter (parentheses optional)
const singleParam = name => {
  console.log("Hello " + name);
};

// Multiple parameters (parentheses required)
const multipleParams = (x, y, z) => {
  return x + y + z;
};`}</code></pre>
              </div>
            </div>

            <div className="js-syntax-card">
              <h3>Implicit Return</h3>
              <div className="js-code-example">
                <pre><code>{`// Explicit return (with curly braces)
const explicit = (x, y) => {
  return x * y;
};

// Implicit return (no curly braces)
const implicit = (x, y) => x * y;

// Implicit return with object (wrap in parentheses)
const createUser = (name, age) => ({
  name: name,
  age: age,
  createdAt: new Date()
});

// Multi-line implicit return
const calculate = (a, b) => (
  a * 2 + 
  b * 3
);`}</code></pre>
              </div>
            </div>

            <div className="js-syntax-card">
              <h3>No Parameters</h3>
              <div className="js-code-example">
                <pre><code>{`// No parameters - parentheses required
const noParams = () => {
  console.log("No parameters here!");
};

// Implicit return with no parameters
const getRandomNumber = () => Math.random();

// Current timestamp
const now = () => Date.now();

// Get current user (hypothetical)
const getCurrentUser = () => ({
  id: 1,
  name: "John Doe",
  isLoggedIn: true
});`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* 'this' Binding */}
        <section className="js-topic-section">
          <h2>🔗 'this' Binding Differences</h2>
          <p>The most important difference: arrow functions don't have their own 'this' context:</p>
          
          <div className="js-this-examples">
            <div className="js-this-card">
              <h3>Traditional Functions</h3>
              <div className="js-code-example">
                <pre><code>{`const person = {
  name: "Alice",
  
  // Regular method
  greet: function() {
    console.log("Hello, I'm " + this.name); // 'this' refers to person
  },
  
  // Method with nested function
  delayedGreet: function() {
    setTimeout(function() {
      console.log("Delayed: " + this.name); // 'this' is undefined or window
    }, 1000);
  },
  
  // Solution with bind
  delayedGreetFixed: function() {
    setTimeout(function() {
      console.log("Fixed: " + this.name); // 'this' refers to person
    }.bind(this), 1000);
  }
};

person.greet(); // "Hello, I'm Alice"
person.delayedGreet(); // "Delayed: undefined"`}</code></pre>
              </div>
            </div>

            <div className="js-this-card">
              <h3>Arrow Functions</h3>
              <div className="js-code-example">
                <pre><code>{`const person = {
  name: "Bob",
  
  // Arrow function as method (not recommended)
  greet: () => {
    console.log("Hello, I'm " + this.name); // 'this' is not person!
  },
  
  // Regular method with arrow function inside
  delayedGreet: function() {
    setTimeout(() => {
      console.log("Delayed: " + this.name); // 'this' inherited from parent
    }, 1000);
  },
  
  // Multiple nested levels
  deepNested: function() {
    const outerThis = this;
    
    setTimeout(() => {
      console.log("Level 1: " + this.name); // Works
      
      setTimeout(() => {
        console.log("Level 2: " + this.name); // Still works
      }, 500);
    }, 1000);
  }
};

person.delayedGreet(); // "Delayed: Bob" (works correctly)`}</code></pre>
              </div>
            </div>
          </div>

          <div className="js-highlight-box">
            <h3>🔥 Key Rule: Arrow Functions and 'this'</h3>
            <p>
              Arrow functions inherit 'this' from the enclosing scope. They do NOT create their own 'this' context.
              This makes them perfect for callbacks but unsuitable for object methods.
            </p>
          </div>
        </section>

        {/* When to Use Arrow Functions */}
        <section className="js-topic-section">
          <h2>✅ When to Use Arrow Functions</h2>
          
          <div className="js-usage-examples">
            <div className="js-usage-card">
              <h3>Perfect for Array Methods</h3>
              <div className="js-code-example">
                <pre><code>{`const numbers = [1, 2, 3, 4, 5];

// Map with arrow function
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter with arrow function
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// Reduce with arrow function
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// Complex transformations
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const adultNames = users
  .filter(user => user.age >= 18)
  .map(user => user.name.toUpperCase())
  .sort();

console.log(adultNames); // ["ALICE", "BOB", "CHARLIE"]`}</code></pre>
              </div>
            </div>

            <div className="js-usage-card">
              <h3>Great for Callbacks</h3>
              <div className="js-code-example">
                <pre><code>{`// Event listeners
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Promises
fetchUserData()
  .then(data => data.json())
  .then(user => console.log(user.name))
  .catch(error => console.error('Error:', error));

// Async/await
const processData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data.results.map(item => item.name);
  } catch (error) {
    console.error('Failed to process data:', error);
    return [];
  }
};

// Timeouts and intervals
setTimeout(() => console.log('One second later'), 1000);

setInterval(() => {
  console.log('Every 2 seconds');
}, 2000);`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* When NOT to Use Arrow Functions */}
        <section className="js-topic-section">
          <h2>❌ When NOT to Use Arrow Functions</h2>
          
          <div className="js-avoid-examples">
            <div className="js-avoid-card">
              <h3>Object Methods</h3>
              <div className="js-code-example">
                <pre><code>{`// ❌ Bad: Arrow function as object method
const calculator = {
  value: 0,
  
  add: (n) => {
    this.value += n; // 'this' is not calculator!
    return this;
  },
  
  getValue: () => this.value // 'this' is not calculator!
};

// ✅ Good: Regular function as object method
const calculator = {
  value: 0,
  
  add: function(n) {
    this.value += n; // 'this' is calculator
    return this;
  },
  
  // or using shorthand method syntax
  getValue() {
    return this.value;
  }
};

calculator.add(5).add(3);
console.log(calculator.getValue()); // 8`}</code></pre>
              </div>
            </div>

            <div className="js-avoid-card">
              <h3>Constructor Functions</h3>
              <div className="js-code-example">
                <pre><code>{`// ❌ Bad: Arrow function as constructor
const Person = (name, age) => {
  this.name = name; // Error: Arrow functions can't be constructors
  this.age = age;
};

// const alice = new Person("Alice", 25); // TypeError

// ✅ Good: Regular function or class
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Or using ES6 class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Arrow functions are fine as class properties
  greet = () => {
    console.log("Hello, I'm " + this.name);
  }
}`}</code></pre>
              </div>
            </div>

            <div className="js-avoid-card">
              <h3>Dynamic Context</h3>
              <div className="js-code-example">
                <pre><code>{`// ❌ Bad: When you need dynamic 'this'
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');

// Arrow function - 'this' won't be the button
button1.addEventListener('click', () => {
  console.log(this.id); // undefined or window.id
});

// ✅ Good: Regular function - 'this' is the button
button2.addEventListener('click', function() {
  console.log(this.id); // 'btn2'
  this.disabled = true; // Disable the clicked button
});`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Arrow Functions with Destructuring */}
        <section className="js-topic-section">
          <h2>🎯 Arrow Functions with Destructuring</h2>
          <p>Arrow functions work great with destructuring parameters:</p>
          
          <div className="js-code-example">
            <h4>Destructuring in Arrow Functions:</h4>
            <pre><code>{`// Destructuring object parameters
const greetUser = ({name, age, city}) => {
  console.log("Hello " + name + " from " + city + ", age " + age);
};

greetUser({name: "Alice", age: 25, city: "New York"});

// With default values
const createUser = ({name = "Anonymous", age = 0, active = true} = {}) => ({
  id: Date.now(),
  name,
  age,
  active,
  createdAt: new Date()
});

// Array destructuring
const getFirstAndLast = ([first, ...rest]) => {
  const last = rest[rest.length - 1];
  return {first, last};
};

console.log(getFirstAndLast([1, 2, 3, 4, 5])); // {first: 1, last: 5}

// Complex destructuring with renaming
const processApiResponse = ({data: {users = []} = {}} = {}) => {
  return users.map(({id, profile: {name, email}}) => ({
    userId: id,
    fullName: name,
    contactEmail: email
  }));
};`}</code></pre>
          </div>
        </section>

        {/* Advanced Arrow Function Patterns */}
        <section className="js-topic-section">
          <h2>🚀 Advanced Patterns</h2>
          
          <div className="js-advanced-patterns">
            <div className="js-pattern-card">
              <h3>Currying with Arrow Functions</h3>
              <div className="js-code-example">
                <pre><code>{`// Currying: function that returns function
const multiply = x => y => x * y;

const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// More complex currying
const createValidator = type => min => max => value => {
  if (type === 'number') {
    return value >= min && value <= max;
  }
  if (type === 'string') {
    return value.length >= min && value.length <= max;
  }
  return false;
};

const isValidAge = createValidator('number')(0)(120);
const isValidName = createValidator('string')(2)(50);

console.log(isValidAge(25)); // true
console.log(isValidName("Alice")); // true`}</code></pre>
              </div>
            </div>

            <div className="js-pattern-card">
              <h3>Higher-Order Functions</h3>
              <div className="js-code-example">
                <pre><code>{`// Function composition
const compose = (...functions) => value => 
  functions.reduceRight((acc, fn) => fn(acc), value);

const addTwo = x => x + 2;
const multiplyByThree = x => x * 3;
const subtractOne = x => x - 1;

const calculate = compose(subtractOne, multiplyByThree, addTwo);
console.log(calculate(5)); // ((5 + 2) * 3) - 1 = 20

// Pipe function (left to right)
const pipe = (...functions) => value =>
  functions.reduce((acc, fn) => fn(acc), value);

const calculatePipe = pipe(addTwo, multiplyByThree, subtractOne);
console.log(calculatePipe(5)); // ((5 + 2) * 3) - 1 = 20`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>💡 Arrow Function Best Practices</h2>
          
          <div className="js-best-practices">
            <div className="js-practice-group">
              <h3>✅ Do's</h3>
              <ul>
                <li><strong>Use for short, simple functions:</strong> Especially one-liners</li>
                <li><strong>Use for array methods:</strong> map, filter, reduce, etc.</li>
                <li><strong>Use for callbacks:</strong> Promises, setTimeout, event handlers</li>
                <li><strong>Use when you want to preserve 'this':</strong> In nested functions</li>
                <li><strong>Use implicit return:</strong> For simple expressions</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>{`// ✅ Good uses
const numbers = [1, 2, 3, 4, 5];

// Short and sweet
const doubled = numbers.map(n => n * 2);

// Clear and concise
const handleClick = () => console.log('Clicked!');

// Preserving 'this' context
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    // Arrow function preserves 'this'
    setTimeout(() => {
      this.events[event] = callback;
    }, 0);
  }
}`}</code></pre>
              </div>
            </div>

            <div className="js-practice-group">
              <h3>❌ Don'ts</h3>
              <ul>
                <li><strong>Don't use for object methods:</strong> Use regular methods instead</li>
                <li><strong>Don't use as constructors:</strong> They can't be called with 'new'</li>
                <li><strong>Don't overuse implicit return:</strong> Explicit can be clearer for complex logic</li>
                <li><strong>Don't use when you need 'arguments':</strong> Arrow functions don't have it</li>
                <li><strong>Don't use for very long functions:</strong> Readability suffers</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>{`// ❌ Avoid these patterns

// Too long for arrow function
const processComplexData = (data) => {
  // 20+ lines of complex logic
  // Better as regular function
};

// Object method
const obj = {
  name: "Test",
  getName: () => this.name // Won't work as expected
};

// When you need 'arguments'
const sum = () => {
  // No 'arguments' object available
  // Use rest parameters instead: (...args)
};`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Considerations */}
        <section className="js-topic-section">
          <h2>⚡ Performance Considerations</h2>
          
          <div className="js-performance-tips">
            <div className="js-tip-card">
              <h3>Memory Usage</h3>
              <div className="js-code-example">
                <pre><code>{`// Arrow functions in class properties create new function per instance
class Component {
  // ❌ Creates new function for each instance
  handleClick = () => {
    console.log('Clicked');
  }
  
  // ✅ Shared across all instances
  handleClick() {
    console.log('Clicked');
  }
}

// But arrow functions are great for binding
class ComponentWithBinding {
  constructor() {
    // ✅ Bind once in constructor
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    console.log('Clicked');
  }
}`}</code></pre>
              </div>
            </div>

            <div className="js-tip-card">
              <h3>Optimization Tips</h3>
              <div className="js-code-example">
                <pre><code>{`// ✅ Extract arrow functions that don't need closure
const users = [{name: 'Alice'}, {name: 'Bob'}];

// Instead of creating new function each time
const badMap = users.map(user => user.name.toUpperCase());

// Define reusable arrow function
const toUpperName = user => user.name.toUpperCase();
const goodMap = users.map(toUpperName);

// ✅ Use function declarations for hoisting when needed
processData(); // Works due to hoisting

function processData() {
  console.log('Processing...');
}

// Arrow functions are not hoisted
// processArrowData(); // ReferenceError
const processArrowData = () => console.log('Processing...');`}</code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ArrowFunctions;
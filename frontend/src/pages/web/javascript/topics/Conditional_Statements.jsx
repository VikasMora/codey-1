import React from 'react';
import '../Navbarweb.css';

function ConditionalStatements() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🔀 Conditional Statements</h1>
        <p className="js-topic-subtitle">
          Learn how to control program flow with if statements, switch cases, and conditional operators
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction to Conditionals */}
        <section className="js-topic-section">
          <h2>🤔 What are Conditional Statements?</h2>
          <p>
            Conditional statements allow your program to make decisions and execute different code 
            blocks based on whether certain conditions are true or false.
          </p>
          
          <div className="js-condition-flow">
            <div className="js-flow-diagram">
              <div className="js-flow-start">Start</div>
              <div className="js-flow-condition">Condition?</div>
              <div className="js-flow-true">True → Execute Code A</div>
              <div className="js-flow-false">False → Execute Code B</div>
              <div className="js-flow-end">End</div>
            </div>
          </div>
        </section>

        {/* If Statements */}
        <section className="js-topic-section">
          <h2>📝 If Statements</h2>
          <p>The basic conditional statement that executes code when a condition is true:</p>
          
          <div className="js-if-examples">
            <div className="js-if-card">
              <h3>Basic If Statement</h3>
              <div className="js-code-example">
                <pre><code>{`// Basic if statement
let age = 18;

if (age >= 18) {
  console.log("You are an adult!");
}

// If with multiple conditions
let weather = "sunny";
let temperature = 25;

if (weather === "sunny" && temperature > 20) {
  console.log("Perfect weather for a picnic!");
}

// If with logical operators
let hasLicense = true;
let hasInsurance = true;
let carWorking = true;

if (hasLicense && hasInsurance && carWorking) {
  console.log("You can drive!");
}`}</code></pre>
              </div>
            </div>

            <div className="js-if-card">
              <h3>If-Else Statement</h3>
              <div className="js-code-example">
                <pre><code>{`// Basic if-else
let score = 75;

if (score >= 60) {
  console.log("You passed!");
} else {
  console.log("You failed. Try again!");
}

// If-else with multiple conditions
let time = 14; // 24-hour format

if (time < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon/evening!");
}

// Nested conditions
let isWeekend = false;
let isHoliday = true;

if (isWeekend) {
  console.log("It's the weekend!");
} else {
  if (isHoliday) {
    console.log("It's a holiday!");
  } else {
    console.log("It's a regular weekday.");
  }
}`}</code></pre>
              </div>
            </div>

            <div className="js-if-card">
              <h3>If-Else If-Else Chain</h3>
              <div className="js-code-example">
                <pre><code>{`// Grade calculator
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Weather conditions
let temperature = 15;

if (temperature > 30) {
  console.log("It's hot! Stay hydrated.");
} else if (temperature > 20) {
  console.log("Nice weather!");
} else if (temperature > 10) {
  console.log("A bit cool, wear a jacket.");
} else if (temperature > 0) {
  console.log("It's cold!");
} else {
  console.log("Freezing! Bundle up!");
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Operators */}
        <section className="js-topic-section">
          <h2>⚖️ Comparison Operators in Conditions</h2>
          <p>Understanding how to create effective conditions using comparison operators:</p>
          
          <div className="js-comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Operator</th>
                  <th>Description</th>
                  <th>Example</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>===</td>
                  <td>Strict equality</td>
                  <td>5 === 5</td>
                  <td>true</td>
                </tr>
                <tr>
                  <td>!==</td>
                  <td>Strict inequality</td>
                  <td>5 !== "5"</td>
                  <td>true</td>
                </tr>
                <tr>
                  <td>&gt;</td>
                  <td>Greater than</td>
                  <td>10 &gt; 5</td>
                  <td>true</td>
                </tr>
                <tr>
                  <td>&lt;</td>
                  <td>Less than</td>
                  <td>3 &lt; 8</td>
                  <td>true</td>
                </tr>
                <tr>
                  <td>&gt;=</td>
                  <td>Greater than or equal</td>
                  <td>5 &gt;= 5</td>
                  <td>true</td>
                </tr>
                <tr>
                  <td>&lt;=</td>
                  <td>Less than or equal</td>
                  <td>4 &lt;= 3</td>
                  <td>false</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="js-code-example">
            <h4>Comparison Examples:</h4>
            <pre><code>{`// Strict vs loose equality
let age = 18;
let ageString = "18";

if (age === 18) {
  console.log("Age is exactly 18 (number)");
}

if (age == ageString) {
  console.log("Age equals '18' (type coercion)");
}

if (age === ageString) {
  console.log("This won't execute - different types");
}

// Number comparisons
let price = 29.99;
let budget = 30;

if (price <= budget) {
  console.log("You can afford this item!");
}

// String comparisons (alphabetical)
let name = "Alice";

if (name > "Aaron" && name < "Bob") {
  console.log("Name falls between Aaron and Bob alphabetically");
}`}</code></pre>
          </div>
        </section>

        {/* Logical Operators */}
        <section className="js-topic-section">
          <h2>🧠 Logical Operators</h2>
          <p>Combine multiple conditions using logical operators:</p>
          
          <div className="js-logical-examples">
            <div className="js-logical-card">
              <h3>AND Operator (&&)</h3>
              <div className="js-code-example">
                <pre><code>{`// All conditions must be true
let age = 25;
let hasJob = true;
let creditScore = 750;

if (age >= 18 && hasJob && creditScore > 700) {
  console.log("Loan approved!");
}

// Short-circuit evaluation
let user = {name: "Alice"};

if (user && user.name) {
  console.log("User name: " + user.name);
}

// Practical example: form validation
let email = "user@example.com";
let password = "securePassword123";

if (email.includes("@") && password.length >= 8) {
  console.log("Valid credentials");
}`}</code></pre>
              </div>
            </div>

            <div className="js-logical-card">
              <h3>OR Operator (||)</h3>
              <div className="js-code-example">
                <pre><code>{`// At least one condition must be true
let isWeekend = true;
let isHoliday = false;
let isVacation = false;

if (isWeekend || isHoliday || isVacation) {
  console.log("You don't have to work today!");
}

// Default values with OR
let username = "";
let displayName = username || "Anonymous";
console.log("Hello, " + displayName); // "Hello, Anonymous"

// Multiple fallbacks
let primaryColor = "";
let secondaryColor = "";
let defaultColor = "blue";

let chosenColor = primaryColor || secondaryColor || defaultColor;
console.log("Using color: " + chosenColor); // "Using color: blue"`}</code></pre>
              </div>
            </div>

            <div className="js-logical-card">
              <h3>NOT Operator (!)</h3>
              <div className="js-code-example">
                <pre><code>{`// Negates a boolean value
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in to continue");
}

// Double negation for boolean conversion
let value = "hello";
let isTruthy = !!value; // true
console.log(isTruthy);

// Practical examples
let errors = [];

if (!errors.length) {
  console.log("No errors found!");
}

let user = null;

if (!user) {
  console.log("User not found");
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Switch Statements */}
        <section className="js-topic-section">
          <h2>🔄 Switch Statements</h2>
          <p>An alternative to if-else chains for checking multiple specific values:</p>
          
          <div className="js-switch-examples">
            <div className="js-switch-card">
              <h3>Basic Switch Statement</h3>
              <div className="js-code-example">
                <pre><code>{`// Basic switch structure
let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("Today is " + dayName); // "Today is Wednesday"`}</code></pre>
              </div>
            </div>

            <div className="js-switch-card">
              <h3>Switch with Fall-through</h3>
              <div className="js-code-example">
                <pre><code>{`// Intentional fall-through (no break)
let month = "December";
let season;

switch (month) {
  case "December":
  case "January":
  case "February":
    season = "Winter";
    break;
  case "March":
  case "April":
  case "May":
    season = "Spring";
    break;
  case "June":
  case "July":
  case "August":
    season = "Summer";
    break;
  case "September":
  case "October":
  case "November":
    season = "Autumn";
    break;
  default:
    season = "Unknown";
}

console.log("Season: " + season); // "Season: Winter"`}</code></pre>
              </div>
            </div>

            <div className="js-switch-card">
              <h3>Switch vs If-Else</h3>
              <div className="js-code-example">
                <pre><code>{`let grade = "B";

// Using switch
switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("Average");
    break;
  default:
    console.log("Keep trying!");
}

// Equivalent if-else
if (grade === "A") {
  console.log("Excellent!");
} else if (grade === "B") {
  console.log("Good job!");
} else if (grade === "C") {
  console.log("Average");
} else {
  console.log("Keep trying!");
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Ternary Operator */}
        <section className="js-topic-section">
          <h2>❓ Ternary (Conditional) Operator</h2>
          <p>A shorthand way to write simple if-else statements:</p>
          
          <div className="js-ternary-examples">
            <div className="js-ternary-syntax">
              <div className="js-syntax-box">
                <code>condition ? valueIfTrue : valueIfFalse</code>
              </div>
            </div>

            <div className="js-code-example">
              <h4>Ternary Examples:</h4>
              <pre><code>{`// Basic ternary
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Instead of if-else
let weather = "rainy";
let activity = weather === "sunny" ? "go to beach" : "stay inside";
console.log("Plan: " + activity); // "Plan: stay inside"

// With function calls
let score = 85;
let result = score >= 60 ? "PASS" : "FAIL";
console.log("Result: " + result); // "Result: PASS"

// Nested ternary (use sparingly!)
let temperature = 25;
let clothing = temperature > 30 ? "shorts" : 
               temperature > 20 ? "t-shirt" : 
               temperature > 10 ? "sweater" : "coat";

// Better as if-else for readability
let clothing2;
if (temperature > 30) {
  clothing2 = "shorts";
} else if (temperature > 20) {
  clothing2 = "t-shirt";
} else if (temperature > 10) {
  clothing2 = "sweater";
} else {
  clothing2 = "coat";
}`}</code></pre>
            </div>
          </div>
        </section>

        {/* Truthy and Falsy Values */}
        <section className="js-topic-section">
          <h2>✅❌ Truthy and Falsy Values</h2>
          <p>Understanding which values are considered true or false in conditions:</p>
          
          <div className="js-truthy-falsy">
            <div className="js-falsy-card">
              <h3>Falsy Values (considered false)</h3>
              <ul>
                <li><code>false</code> - boolean false</li>
                <li><code>0</code> - number zero</li>
                <li><code>""</code> or <code>''</code> - empty string</li>
                <li><code>null</code> - null value</li>
                <li><code>undefined</code> - undefined value</li>
                <li><code>NaN</code> - Not a Number</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>{`// All these conditions are false
if (false) { console.log("Won't execute"); }
if (0) { console.log("Won't execute"); }
if ("") { console.log("Won't execute"); }
if (null) { console.log("Won't execute"); }
if (undefined) { console.log("Won't execute"); }
if (NaN) { console.log("Won't execute"); }

// Practical examples
let userInput = "";
if (userInput) {
  console.log("User entered: " + userInput);
} else {
  console.log("No input provided");
}

let items = [];
if (items.length) {
  console.log("Cart has items");
} else {
  console.log("Cart is empty");
}`}</code></pre>
              </div>
            </div>

            <div className="js-truthy-card">
              <h3>Truthy Values (considered true)</h3>
              <ul>
                <li><code>true</code> - boolean true</li>
                <li>Any non-zero number</li>
                <li>Any non-empty string</li>
                <li>Objects and arrays (even empty ones)</li>
                <li>Functions</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>{`// All these conditions are true
if (true) { console.log("Will execute"); }
if (1) { console.log("Will execute"); }
if (-1) { console.log("Will execute"); }
if ("hello") { console.log("Will execute"); }
if (" ") { console.log("Will execute - space is not empty"); }
if ([]) { console.log("Will execute - empty array is truthy"); }
if ({}) { console.log("Will execute - empty object is truthy"); }

// Check for empty array properly
let myArray = [];
if (myArray.length > 0) {
  console.log("Array has items");
} else {
  console.log("Array is empty");
}

// Check for empty object properly
let myObject = {};
if (Object.keys(myObject).length > 0) {
  console.log("Object has properties");
} else {
  console.log("Object is empty");
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>💡 Best Practices</h2>
          
          <div className="js-best-practices">
            <div className="js-practice-group">
              <h3>✅ Good Practices</h3>
              <ul>
                <li><strong>Use strict equality (===):</strong> Avoid unexpected type coercion</li>
                <li><strong>Keep conditions readable:</strong> Break complex conditions into variables</li>
                <li><strong>Use early returns:</strong> Reduce nesting with guard clauses</li>
                <li><strong>Be explicit:</strong> Check for specific values rather than relying on truthy/falsy</li>
                <li><strong>Use ternary for simple cases:</strong> Keep it readable</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>{`// ✅ Good: Clear and readable
function processOrder(order) {
  // Guard clauses (early returns)
  if (!order) {
    return "No order provided";
  }
  
  if (!order.items || order.items.length === 0) {
    return "Order has no items";
  }
  
  if (order.total <= 0) {
    return "Invalid order total";
  }
  
  // Main logic when all checks pass
  return "Order processed successfully";
}

// ✅ Good: Break complex conditions
const user = {age: 25, isActive: true, hasPermission: true};
const canAccess = user.age >= 18 && user.isActive && user.hasPermission;

if (canAccess) {
  console.log("Access granted");
}`}</code></pre>
              </div>
            </div>

            <div className="js-practice-group">
              <h3>❌ Avoid These Patterns</h3>
              <ul>
                <li><strong>Deep nesting:</strong> Too many nested if statements</li>
                <li><strong>Complex ternary:</strong> Multiple nested ternary operators</li>
                <li><strong>Loose equality (==):</strong> Can cause unexpected behavior</li>
                <li><strong>Yoda conditions:</strong> Putting constants first unnecessarily</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>{`// ❌ Bad: Too much nesting
function badExample(user) {
  if (user) {
    if (user.isActive) {
      if (user.permissions) {
        if (user.permissions.canEdit) {
          return "Can edit";
        } else {
          return "Cannot edit";
        }
      } else {
        return "No permissions";
      }
    } else {
      return "User inactive";
    }
  } else {
    return "No user";
  }
}

// ✅ Better: Use guard clauses
function goodExample(user) {
  if (!user) return "No user";
  if (!user.isActive) return "User inactive";
  if (!user.permissions) return "No permissions";
  if (!user.permissions.canEdit) return "Cannot edit";
  
  return "Can edit";
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Common Patterns */}
        <section className="js-topic-section">
          <h2>🎨 Common Conditional Patterns</h2>
          
          <div className="js-patterns">
            <div className="js-pattern-card">
              <h3>Input Validation</h3>
              <div className="js-code-example">
                <pre><code>{`function validateEmail(email) {
  // Check if email exists
  if (!email) {
    return {valid: false, message: "Email is required"};
  }
  
  // Check format
  if (!email.includes("@")) {
    return {valid: false, message: "Invalid email format"};
  }
  
  // Check length
  if (email.length < 5) {
    return {valid: false, message: "Email too short"};
  }
  
  return {valid: true, message: "Email is valid"};
}

// Usage
const result = validateEmail("user@example.com");
if (result.valid) {
  console.log("Proceeding with valid email");
} else {
  console.log("Error: " + result.message);
}`}</code></pre>
              </div>
            </div>

            <div className="js-pattern-card">
              <h3>Configuration with Defaults</h3>
              <div className="js-code-example">
                <pre><code>{`function createUser(options = {}) {
  // Provide defaults for missing values
  const name = options.name || "Anonymous";
  const age = options.age !== undefined ? options.age : 0;
  const role = options.role || "user";
  const isActive = options.isActive !== undefined ? options.isActive : true;
  
  // Validate required fields
  if (!options.email) {
    throw new Error("Email is required");
  }
  
  return {
    name,
    age,
    email: options.email,
    role,
    isActive,
    createdAt: new Date()
  };
}

// Usage with different scenarios
const user1 = createUser({email: "john@example.com"});
const user2 = createUser({
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  role: "admin"
});`}</code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ConditionalStatements;
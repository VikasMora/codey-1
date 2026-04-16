import React from 'react';
import '../Navbarweb.css';

function OperatorsAndExpressions() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>➕ Operators and Expressions</h1>
        <p className="js-topic-subtitle">
          Master Java operators to perform calculations, comparisons, and logical operations
        </p>
      </div>

      <div className="js-topic-content">
        <section className="js-topic-section">
          <h2>🧮 Arithmetic Operators</h2>
          <div className="js-comparison-table">
            <div className="js-comparison-row js-comparison-header">
              <div>Operator</div>
              <div>Description</div>
              <div>Example</div>
              <div>Result</div>
            </div>
            <div className="js-comparison-row">
              <div><code>+</code></div>
              <div>Addition</div>
              <div><code>5 + 3</code></div>
              <div><code>8</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>-</code></div>
              <div>Subtraction</div>
              <div><code>5 - 3</code></div>
              <div><code>2</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>*</code></div>
              <div>Multiplication</div>
              <div><code>5 * 3</code></div>
              <div><code>15</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>/</code></div>
              <div>Division</div>
              <div><code>15 / 3</code></div>
              <div><code>5</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>%</code></div>
              <div>Modulus (Remainder)</div>
              <div><code>17 % 5</code></div>
              <div><code>2</code></div>
            </div>
          </div>
          
          <div className="js-code-block">
            <pre><code>{`// Arithmetic operations example
int a = 10, b = 3;
int sum = a + b;        // 13
int difference = a - b; // 7
int product = a * b;    // 30
int quotient = a / b;   // 3 (integer division)
int remainder = a % b;  // 1

// Division with different types
double result = 10.0 / 3;  // 3.3333...
int intResult = 10 / 3;    // 3 (truncated)`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>📊 Comparison Operators</h2>
          <div className="js-comparison-table">
            <div className="js-comparison-row js-comparison-header">
              <div>Operator</div>
              <div>Description</div>
              <div>Example</div>
              <div>Result</div>
            </div>
            <div className="js-comparison-row">
              <div><code>==</code></div>
              <div>Equal to</div>
              <div><code>5 == 5</code></div>
              <div><code>true</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>!=</code></div>
              <div>Not equal to</div>
              <div><code>5 != 3</code></div>
              <div><code>true</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>&gt;</code></div>
              <div>Greater than</div>
              <div><code>5 &gt; 3</code></div>
              <div><code>true</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>&lt;</code></div>
              <div>Less than</div>
              <div><code>5 &lt; 3</code></div>
              <div><code>false</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>&gt;=</code></div>
              <div>Greater than or equal</div>
              <div><code>5 &gt;= 5</code></div>
              <div><code>true</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>&lt;=</code></div>
              <div>Less than or equal</div>
              <div><code>3 &lt;= 5</code></div>
              <div><code>true</code></div>
            </div>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🔗 Logical Operators</h2>
          
          <div className="js-code-block">
            <pre><code>{`boolean a = true, b = false;

// Logical AND (&&)
boolean result1 = a && b;    // false
boolean result2 = true && true;  // true

// Logical OR (||)
boolean result3 = a || b;    // true
boolean result4 = false || false; // false

// Logical NOT (!)
boolean result5 = !a;        // false
boolean result6 = !b;        // true

// Complex expressions
boolean complex = (5 > 3) && (10 < 20) || !(2 == 3);  // true`}</code></pre>
          </div>

          <div className="js-highlight-box">
            <h3>Short-Circuit Evaluation:</h3>
            <ul>
              <li><strong>&&:</strong> If first operand is false, second is not evaluated</li>
              <li><strong>||:</strong> If first operand is true, second is not evaluated</li>
            </ul>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>📈 Assignment Operators</h2>
          
          <div className="js-code-block">
            <pre><code>{`int x = 10;

// Basic assignment
x = 20;    // x is now 20

// Compound assignment operators
x += 5;    // x = x + 5;  (x = 25)
x -= 3;    // x = x - 3;  (x = 22)
x *= 2;    // x = x * 2;  (x = 44)
x /= 4;    // x = x / 4;  (x = 11)
x %= 3;    // x = x % 3;  (x = 2)

// Increment and Decrement
int y = 5;
y++;       // Post-increment: use y, then increment (y = 6)
++y;       // Pre-increment: increment, then use (y = 7)
y--;       // Post-decrement: use y, then decrement (y = 6)
--y;       // Pre-decrement: decrement, then use (y = 5)`}</code></pre>
          </div>

          <div className="js-feature-grid">
            <div className="js-feature-card">
              <h4>Pre-increment (++i)</h4>
              <p>Increment first, then return the new value</p>
            </div>
            <div className="js-feature-card">
              <h4>Post-increment (i++)</h4>
              <p>Return current value, then increment</p>
            </div>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🔢 Bitwise Operators</h2>
          
          <div className="js-code-block">
            <pre><code>{`int a = 5;   // Binary: 0101
int b = 3;   // Binary: 0011

// Bitwise AND
int and = a & b;     // 0101 & 0011 = 0001 (1)

// Bitwise OR
int or = a | b;      // 0101 | 0011 = 0111 (7)

// Bitwise XOR
int xor = a ^ b;     // 0101 ^ 0011 = 0110 (6)

// Bitwise NOT
int not = ~a;        // ~0101 = 1010 (-6 in two's complement)

// Left shift
int leftShift = a << 1;   // 0101 << 1 = 1010 (10)

// Right shift
int rightShift = a >> 1;  // 0101 >> 1 = 0010 (2)

// Unsigned right shift
int unsignedShift = a >>> 1; // Same as >> for positive numbers`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>❓ Ternary Operator</h2>
          
          <div className="js-code-block">
            <pre><code>{`// Syntax: condition ? value_if_true : value_if_false

int age = 18;
String status = age >= 18 ? "Adult" : "Minor";

// Nested ternary (use sparingly)
int score = 85;
String grade = score >= 90 ? "A" : 
               score >= 80 ? "B" : 
               score >= 70 ? "C" : "F";

// Equivalent if-else
String gradeIfElse;
if (score >= 90) {
    gradeIfElse = "A";
} else if (score >= 80) {
    gradeIfElse = "B";
} else if (score >= 70) {
    gradeIfElse = "C";
} else {
    gradeIfElse = "F";
}`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>⚡ Operator Precedence</h2>
          
          <div className="js-comparison-table">
            <div className="js-comparison-row js-comparison-header">
              <div>Precedence</div>
              <div>Operators</div>
              <div>Associativity</div>
            </div>
            <div className="js-comparison-row">
              <div>1 (Highest)</div>
              <div><code>() [] .</code></div>
              <div>Left to Right</div>
            </div>
            <div className="js-comparison-row">
              <div>2</div>
              <div><code>++ -- ! ~</code></div>
              <div>Right to Left</div>
            </div>
            <div className="js-comparison-row">
              <div>3</div>
              <div><code>* / %</code></div>
              <div>Left to Right</div>
            </div>
            <div className="js-comparison-row">
              <div>4</div>
              <div><code>+ -</code></div>
              <div>Left to Right</div>
            </div>
            <div className="js-comparison-row">
              <div>5</div>
              <div><code>&lt;&lt; &gt;&gt; &gt;&gt;&gt;</code></div>
              <div>Left to Right</div>
            </div>
            <div className="js-comparison-row">
              <div>6</div>
              <div><code>&lt; &lt;= &gt; &gt;=</code></div>
              <div>Left to Right</div>
            </div>
            <div className="js-comparison-row">
              <div>7</div>
              <div><code>== !=</code></div>
              <div>Left to Right</div>
            </div>
            <div className="js-comparison-row">
              <div>8</div>
              <div><code>&&</code></div>
              <div>Left to Right</div>
            </div>
            <div className="js-comparison-row">
              <div>9</div>
              <div><code>||</code></div>
              <div>Left to Right</div>
            </div>
            <div className="js-comparison-row">
              <div>10 (Lowest)</div>
              <div><code>= += -= *= /= %=</code></div>
              <div>Right to Left</div>
            </div>
          </div>

          <div className="js-code-block">
            <div className="js-code-header">
              <span>Precedence Examples</span>
            </div>
            <pre><code>{`// Without parentheses
int result1 = 2 + 3 * 4;        // 14 (not 20)
boolean test1 = 5 > 3 && 2 < 4; // true

// With parentheses for clarity
int result2 = (2 + 3) * 4;      // 20
boolean test2 = (5 > 3) && (2 < 4); // true (same result, clearer)`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>💡 Best Practices</h2>
          <div className="js-benefit-grid">
            <div className="js-benefit-card">
              <h4>📝 Use Parentheses</h4>
              <p>Make operator precedence explicit with parentheses for clarity</p>
            </div>
            <div className="js-benefit-card">
              <h4>🎯 Avoid Complex Expressions</h4>
              <p>Break complex expressions into smaller, readable parts</p>
            </div>
            <div className="js-benefit-card">
              <h4>⚠️ Watch for Overflow</h4>
              <p>Be careful with arithmetic operations that might exceed type limits</p>
            </div>
            <div className="js-benefit-card">
              <h4>🔍 String Comparison</h4>
              <p>Use .equals() method for String comparison, not ==</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OperatorsAndExpressions;
import React from 'react';
import '../Navbarweb.css';

function VariablesAndDataTypes() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🔤 Variables and Data Types</h1>
        <p className="js-topic-subtitle">
          Learn about Java's type system, variable declaration, and the different data types available
        </p>
      </div>

      <div className="js-topic-content">
        <section className="js-topic-section">
          <h2>📝 What are Variables?</h2>
          <p>
            Variables are containers that store data values. In Java, every variable has a specific type 
            that determines what kind of data it can hold.
          </p>
          
          <div className="js-code-block">
            <pre><code>{`// Variable declaration and initialization
int age = 25;
String name = "John";
double salary = 50000.50;
boolean isActive = true;`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🏗️ Primitive Data Types</h2>
          <div className="js-comparison-table">
            <div className="js-comparison-row js-comparison-header">
              <div>Data Type</div>
              <div>Size</div>
              <div>Range/Description</div>
              <div>Example</div>
            </div>
            <div className="js-comparison-row">
              <div><strong>byte</strong></div>
              <div>8 bits</div>
              <div>-128 to 127</div>
              <div><code>byte b = 100;</code></div>
            </div>
            <div className="js-comparison-row">
              <div><strong>short</strong></div>
              <div>16 bits</div>
              <div>-32,768 to 32,767</div>
              <div><code>short s = 1000;</code></div>
            </div>
            <div className="js-comparison-row">
              <div><strong>int</strong></div>
              <div>32 bits</div>
              <div>-2³¹ to 2³¹-1</div>
              <div><code>int i = 100000;</code></div>
            </div>
            <div className="js-comparison-row">
              <div><strong>long</strong></div>
              <div>64 bits</div>
              <div>-2⁶³ to 2⁶³-1</div>
              <div><code>long l = 100000L;</code></div>
            </div>
            <div className="js-comparison-row">
              <div><strong>float</strong></div>
              <div>32 bits</div>
              <div>IEEE 754 single precision</div>
              <div><code>float f = 10.5f;</code></div>
            </div>
            <div className="js-comparison-row">
              <div><strong>double</strong></div>
              <div>64 bits</div>
              <div>IEEE 754 double precision</div>
              <div><code>double d = 10.5;</code></div>
            </div>
            <div className="js-comparison-row">
              <div><strong>char</strong></div>
              <div>16 bits</div>
              <div>Unicode characters</div>
              <div><code>char c = 'A';</code></div>
            </div>
            <div className="js-comparison-row">
              <div><strong>boolean</strong></div>
              <div>1 bit</div>
              <div>true or false</div>
              <div><code>boolean flag = true;</code></div>
            </div>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>📦 Reference Data Types</h2>
          <p>Reference types store references to objects in memory rather than the actual values.</p>
          
          <div className="js-code-block">
            <pre><code>{`// String (most common reference type)
String message = "Hello, Java!";

// Arrays
int[] numbers = {1, 2, 3, 4, 5};
String[] names = {"Alice", "Bob", "Charlie"};

// Objects
Scanner scanner = new Scanner(System.in);
ArrayList<String> list = new ArrayList<>();`}</code></pre>
          </div>

          <div className="js-highlight-box">
            <h3>Key Differences:</h3>
            <ul>
              <li><strong>Primitive types</strong> store actual values directly</li>
              <li><strong>Reference types</strong> store memory addresses pointing to objects</li>
              <li><strong>Default values:</strong> Primitives have default values (0, false, etc.), references default to null</li>
            </ul>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🏷️ Variable Declaration and Initialization</h2>
          
          <div className="js-code-block">
            <div className="js-code-header">
              <span>Variable Declaration Patterns</span>
            </div>
            <pre><code>{`// Declaration only
int age;
String name;

// Declaration with initialization
int age = 25;
String name = "John Doe";

// Multiple declarations
int x, y, z;
int a = 1, b = 2, c = 3;

// Final variables (constants)
final double PI = 3.14159;
final String COMPANY_NAME = "TechCorp";`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🎯 Variable Naming Conventions</h2>
          <div className="js-feature-grid">
            <div className="js-feature-card">
              <h4>✅ Good Practices</h4>
              <ul>
                <li>Use camelCase: <code>firstName</code></li>
                <li>Be descriptive: <code>totalAmount</code></li>
                <li>Start with lowercase letter</li>
                <li>Use meaningful names</li>
              </ul>
            </div>
            <div className="js-feature-card">
              <h4>❌ Avoid These</h4>
              <ul>
                <li>Starting with numbers: <code>2names</code></li>
                <li>Using keywords: <code>class</code></li>
                <li>Special characters: <code>my-var</code></li>
                <li>Single letters (except loops): <code>a, b, c</code></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🔄 Type Conversion</h2>
          
          <h3>Implicit Conversion (Widening)</h3>
          <div className="js-code-block">
            <pre><code>{`// Automatic conversion to larger types
int i = 100;
long l = i;      // int to long
float f = l;     // long to float
double d = f;    // float to double`}</code></pre>
          </div>

          <h3>Explicit Conversion (Narrowing)</h3>
          <div className="js-code-block">
            <pre><code>{`// Manual conversion using casting
double d = 100.75;
int i = (int) d;        // 100 (loses decimal part)
long l = 123L;
int i2 = (int) l;       // Potential data loss

// String conversions
String str = "123";
int num = Integer.parseInt(str);
String numStr = String.valueOf(num);`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🔍 Variable Scope</h2>
          
          <div className="js-code-block">
            <div className="js-code-header">
              <span>Different Scopes Example</span>
            </div>
            <pre><code>{`public class ScopeExample {
    // Class/Instance variables
    private int instanceVar = 10;
    static int classVar = 20;
    
    public void method() {
        // Local variables
        int localVar = 30;
        
        // Block scope
        if (true) {
            int blockVar = 40;
            // blockVar is only accessible here
        }
        // blockVar not accessible here
    }
}`}</code></pre>
          </div>

          <div className="js-highlight-box">
            <h3>Scope Types:</h3>
            <ul>
              <li><strong>Local:</strong> Inside methods, constructors, or blocks</li>
              <li><strong>Instance:</strong> Inside class but outside methods</li>
              <li><strong>Class/Static:</strong> Belongs to the class itself</li>
            </ul>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>💡 Best Practices</h2>
          <div className="js-benefit-grid">
            <div className="js-benefit-card">
              <h4>🎯 Choose Appropriate Types</h4>
              <p>Use the smallest data type that can handle your data range</p>
            </div>
            <div className="js-benefit-card">
              <h4>🏷️ Meaningful Names</h4>
              <p>Variable names should clearly indicate their purpose</p>
            </div>
            <div className="js-benefit-card">
              <h4>🔒 Initialize Variables</h4>
              <p>Always initialize variables before using them</p>
            </div>
            <div className="js-benefit-card">
              <h4>📏 Minimize Scope</h4>
              <p>Declare variables in the smallest possible scope</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default VariablesAndDataTypes;
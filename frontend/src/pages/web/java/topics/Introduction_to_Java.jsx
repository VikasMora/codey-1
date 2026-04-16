import React from 'react';
import '../Navbarweb.css';

function IntroductionToJava() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>☕ Introduction to Java</h1>
        <p className="js-topic-subtitle">
          Welcome to Java - the platform-independent programming language that powers enterprise applications worldwide!
        </p>
      </div>

      <div className="js-topic-content">
        {/* What is Java Section */}
        <section className="js-topic-section">
          <h2>🌟 What is Java?</h2>
          <p>
            Java is a high-level, object-oriented programming language developed by Sun Microsystems (now Oracle). 
            It's designed to be platform-independent, following the principle "Write Once, Run Anywhere" (WORA).
          </p>
          
          <div className="js-highlight-box">
            <h3>Key Characteristics:</h3>
            <ul>
              <li><strong>Platform Independent:</strong> Java bytecode runs on any device with JVM</li>
              <li><strong>Object-Oriented:</strong> Everything is an object (except primitives)</li>
              <li><strong>Strongly Typed:</strong> Variables must be declared with specific types</li>
              <li><strong>Automatic Memory Management:</strong> Garbage collection handles memory</li>
              <li><strong>Multi-threaded:</strong> Built-in support for concurrent programming</li>
              <li><strong>Secure:</strong> Built-in security features and sandboxing</li>
            </ul>
          </div>
        </section>

        {/* History Timeline */}
        <section className="js-topic-section">
          <h2>📅 Java History Timeline</h2>
          <div className="js-timeline">
            <div className="js-timeline-item">
              <div className="js-timeline-year">1991</div>
              <div className="js-timeline-content">
                <h4>Project Green</h4>
                <p>James Gosling starts developing Oak (later renamed Java)</p>
              </div>
            </div>
            <div className="js-timeline-item">
              <div className="js-timeline-year">1995</div>
              <div className="js-timeline-content">
                <h4>Java 1.0 Released</h4>
                <p>First public release with the slogan "Write Once, Run Anywhere"</p>
              </div>
            </div>
            <div className="js-timeline-item">
              <div className="js-timeline-year">2004</div>
              <div className="js-timeline-content">
                <h4>Java 5 (1.5)</h4>
                <p>Major update with generics, annotations, and enhanced for loops</p>
              </div>
            </div>
            <div className="js-timeline-item">
              <div className="js-timeline-year">2014</div>
              <div className="js-timeline-content">
                <h4>Java 8</h4>
                <p>Lambda expressions and Stream API revolutionize Java programming</p>
              </div>
            </div>
            <div className="js-timeline-item">
              <div className="js-timeline-year">2017+</div>
              <div className="js-timeline-content">
                <h4>Modern Java</h4>
                <p>6-month release cycle with continuous improvements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Java Architecture */}
        <section className="js-topic-section">
          <h2>🏗️ Java Architecture</h2>
          <div className="js-architecture-diagram">
            <div className="js-arch-layer">
              <h4>Java Source Code (.java files)</h4>
              <p>Human-readable Java code written by developers</p>
            </div>
            <div className="js-arch-arrow">↓ javac compiler</div>
            <div className="js-arch-layer">
              <h4>Java Bytecode (.class files)</h4>
              <p>Platform-independent intermediate code</p>
            </div>
            <div className="js-arch-arrow">↓ JVM</div>
            <div className="js-arch-layer">
              <h4>Machine Code</h4>
              <p>Platform-specific executable code</p>
            </div>
          </div>
        </section>

        {/* JVM Components */}
        <section className="js-topic-section">
          <h2>⚙️ Java Virtual Machine (JVM)</h2>
          <p>
            The JVM is the runtime environment that executes Java bytecode. It provides the platform independence 
            that Java is famous for.
          </p>
          
          <div className="js-feature-grid">
            <div className="js-feature-card">
              <h4>Class Loader</h4>
              <p>Loads .class files into memory</p>
            </div>
            <div className="js-feature-card">
              <h4>Bytecode Verifier</h4>
              <p>Ensures code safety and security</p>
            </div>
            <div className="js-feature-card">
              <h4>Execution Engine</h4>
              <p>Interprets or compiles bytecode to machine code</p>
            </div>
            <div className="js-feature-card">
              <h4>Garbage Collector</h4>
              <p>Automatically manages memory allocation</p>
            </div>
          </div>
        </section>

        {/* Java Editions */}
        <section className="js-topic-section">
          <h2>📦 Java Editions</h2>
          <div className="js-comparison-table">
            <div className="js-comparison-row js-comparison-header">
              <div>Edition</div>
              <div>Purpose</div>
              <div>Key Features</div>
            </div>
            <div className="js-comparison-row">
              <div><strong>Java SE</strong><br/>(Standard Edition)</div>
              <div>Core Java development</div>
              <div>Basic libraries, JVM, development tools</div>
            </div>
            <div className="js-comparison-row">
              <div><strong>Java EE</strong><br/>(Enterprise Edition)</div>
              <div>Enterprise applications</div>
              <div>Web services, EJB, JPA, JSF</div>
            </div>
            <div className="js-comparison-row">
              <div><strong>Java ME</strong><br/>(Micro Edition)</div>
              <div>Mobile and embedded devices</div>
              <div>Lightweight JVM, limited libraries</div>
            </div>
          </div>
        </section>

        {/* First Java Program */}
        <section className="js-topic-section">
          <h2>👋 Your First Java Program</h2>
          <p>Let's start with the classic "Hello, World!" program:</p>
          
          <div className="js-code-block">
            <div className="js-code-header">
              <span>HelloWorld.java</span>
            </div>
            <pre><code>{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}</code></pre>
          </div>
          
          <div className="js-explanation-box">
            <h4>Code Explanation:</h4>
            <ul>
              <li><code>public class HelloWorld</code>: Declares a public class named HelloWorld</li>
              <li><code>public static void main(String[] args)</code>: The main method where execution begins</li>
              <li><code>System.out.println()</code>: Prints text to the console</li>
            </ul>
          </div>
        </section>

        {/* Setup Instructions */}
        <section className="js-topic-section">
          <h2>🛠️ Setting Up Java Development Environment</h2>
          
          <div className="js-steps-container">
            <div className="js-step">
              <div className="js-step-number">1</div>
              <div className="js-step-content">
                <h4>Install JDK</h4>
                <p>Download and install Java Development Kit from Oracle or use OpenJDK</p>
              </div>
            </div>
            
            <div className="js-step">
              <div className="js-step-number">2</div>
              <div className="js-step-content">
                <h4>Set Environment Variables</h4>
                <p>Configure JAVA_HOME and add Java to your system PATH</p>
              </div>
            </div>
            
            <div className="js-step">
              <div className="js-step-number">3</div>
              <div className="js-step-content">
                <h4>Choose an IDE</h4>
                <p>Popular choices: IntelliJ IDEA, Eclipse, VS Code, or NetBeans</p>
              </div>
            </div>
            
            <div className="js-step">
              <div className="js-step-number">4</div>
              <div className="js-step-content">
                <h4>Verify Installation</h4>
                <p>Run <code>java -version</code> and <code>javac -version</code> in terminal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Learn Java */}
        <section className="js-topic-section">
          <h2>🚀 Why Learn Java?</h2>
          <div className="js-benefit-grid">
            <div className="js-benefit-card">
              <h4>🌍 Platform Independence</h4>
              <p>Write once, run anywhere - Java applications work on any operating system</p>
            </div>
            <div className="js-benefit-card">
              <h4>💼 Industry Demand</h4>
              <p>High demand in enterprise, Android development, and web applications</p>
            </div>
            <div className="js-benefit-card">
              <h4>🏗️ Robust Architecture</h4>
              <p>Strong memory management, exception handling, and type safety</p>
            </div>
            <div className="js-benefit-card">
              <h4>📚 Rich Ecosystem</h4>
              <p>Vast collection of libraries, frameworks, and tools available</p>
            </div>
            <div className="js-benefit-card">
              <h4>👥 Large Community</h4>
              <p>Extensive community support, documentation, and learning resources</p>
            </div>
            <div className="js-benefit-card">
              <h4>🔒 Security</h4>
              <p>Built-in security features make it suitable for enterprise applications</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="js-topic-section">
          <h2>➡️ What's Next?</h2>
          <p>
            Now that you understand what Java is and why it's important, you're ready to dive deeper into 
            Java programming concepts. The next topic will cover variables and data types - the building 
            blocks of any Java program.
          </p>
          
          <div className="js-next-topics">
            <h4>Coming up next:</h4>
            <ul>
              <li>Variables and Data Types</li>
              <li>Operators and Expressions</li>
              <li>Control Flow Statements</li>
              <li>Methods and Classes</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default IntroductionToJava;
import React from 'react';
import '../Navbarweb.css';

function IntroductionToJavaScript() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>📚 Introduction to JavaScript</h1>
        <p className="js-topic-subtitle">
          Welcome to the world of JavaScript - the language that powers the modern web!
        </p>
      </div>

      <div className="js-topic-content">
        {/* What is JavaScript Section */}
        <section className="js-topic-section">
          <h2>🌟 What is JavaScript?</h2>
          <p>
            JavaScript is a high-level, interpreted programming language that was originally created to make web pages interactive. 
            Today, it's used for web development, mobile apps, desktop applications, and even server-side programming.
          </p>
          
          <div className="js-highlight-box">
            <h3>Key Characteristics:</h3>
            <ul>
              <li><strong>Dynamic:</strong> Variables don't need explicit type declarations</li>
              <li><strong>Interpreted:</strong> No compilation step required</li>
              <li><strong>Prototype-based:</strong> Uses prototypes instead of classes (though ES6 added class syntax)</li>
              <li><strong>Event-driven:</strong> Responds to user interactions and system events</li>
              <li><strong>Multi-paradigm:</strong> Supports procedural, object-oriented, and functional programming</li>
            </ul>
          </div>
        </section>

        {/* History Timeline */}
        <section className="js-topic-section">
          <h2>📅 JavaScript History Timeline</h2>
          <div className="js-timeline">
            <div className="js-timeline-item">
              <div className="js-timeline-year">1995</div>
              <div className="js-timeline-content">
                <h4>Birth of JavaScript</h4>
                <p>Created by Brendan Eich at Netscape in just 10 days</p>
              </div>
            </div>
            <div className="js-timeline-item">
              <div className="js-timeline-year">1997</div>
              <div className="js-timeline-content">
                <h4>ECMAScript Standard</h4>
                <p>JavaScript became standardized as ECMAScript</p>
              </div>
            </div>
            <div className="js-timeline-item">
              <div className="js-timeline-year">2009</div>
              <div className="js-timeline-content">
                <h4>Node.js Launch</h4>
                <p>JavaScript expanded beyond browsers to server-side development</p>
              </div>
            </div>
            <div className="js-timeline-item">
              <div className="js-timeline-year">2015</div>
              <div className="js-timeline-content">
                <h4>ES6/ES2015</h4>
                <p>Major update with classes, modules, arrow functions, and more</p>
              </div>
            </div>
          </div>
        </section>

        {/* JavaScript Ecosystem */}
        <section className="js-topic-section">
          <h2>🌍 The JavaScript Ecosystem</h2>
          <div className="js-ecosystem-diagram">
            <div className="js-ecosystem-center">
              <div className="js-ecosystem-core">JavaScript</div>
            </div>
            <div className="js-ecosystem-branches">
              <div className="js-ecosystem-branch">
                <h4>🌐 Frontend</h4>
                <p>React, Vue, Angular</p>
              </div>
              <div className="js-ecosystem-branch">
                <h4>⚙️ Backend</h4>
                <p>Node.js, Express</p>
              </div>
              <div className="js-ecosystem-branch">
                <h4>📱 Mobile</h4>
                <p>React Native, Ionic</p>
              </div>
              <div className="js-ecosystem-branch">
                <h4>🖥️ Desktop</h4>
                <p>Electron, Tauri</p>
              </div>
            </div>
          </div>
        </section>

        {/* First JavaScript Program */}
        <section className="js-topic-section">
          <h2>🚀 Your First JavaScript Program</h2>
          <p>Let's start with the classic "Hello, World!" example:</p>
          
          <div className="js-code-example">
            <h4>Method 1: Console Output</h4>
            <pre><code>{`// This will display in the browser's console
console.log("Hello, World!");

// You can also log variables and expressions
let message = "Welcome to JavaScript!";
console.log(message);

// Multiple values
console.log("The answer is:", 42);`}</code></pre>
          </div>

          <div className="js-code-example">
            <h4>Method 2: Alert Box</h4>
            <pre><code>{`// This creates a popup alert
alert("Hello, World!");

// You can also use template literals (ES6)
let name = "JavaScript Developer";
alert(\`Hello, \${name}!\`);`}</code></pre>
          </div>

          <div className="js-code-example">
            <h4>Method 3: Modifying HTML</h4>
            <pre><code>{`// Assuming you have an HTML element with id="output"
document.getElementById("output").innerHTML = "Hello, World!";

// Or create new elements dynamically
let heading = document.createElement("h1");
heading.textContent = "Hello, JavaScript!";
document.body.appendChild(heading);`}</code></pre>
          </div>
        </section>

        {/* Where JavaScript Runs */}
        <section className="js-topic-section">
          <h2>💻 Where JavaScript Runs</h2>
          <div className="js-feature-grid">
            <div className="js-feature-card">
              <h3>🌐 Web Browsers</h3>
              <p>Chrome, Firefox, Safari, Edge - all have JavaScript engines</p>
              <small>Engine examples: V8, SpiderMonkey, JavaScriptCore</small>
            </div>
            <div className="js-feature-card">
              <h3>⚙️ Server Side</h3>
              <p>Node.js runtime environment for backend development</p>
              <small>Built on Chrome's V8 JavaScript engine</small>
            </div>
            <div className="js-feature-card">
              <h3>📱 Mobile Apps</h3>
              <p>React Native, Ionic, and hybrid app frameworks</p>
              <small>Native performance with JavaScript logic</small>
            </div>
            <div className="js-feature-card">
              <h3>🖥️ Desktop Apps</h3>
              <p>Electron for cross-platform desktop applications</p>
              <small>Powers VS Code, Discord, Slack, and more</small>
            </div>
          </div>
        </section>

        {/* JavaScript vs Other Languages */}
        <section className="js-topic-section">
          <h2>⚖️ JavaScript vs Other Languages</h2>
          <div className="js-comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>JavaScript</th>
                  <th>Python</th>
                  <th>Java</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Type System</td>
                  <td>Dynamic, Weak</td>
                  <td>Dynamic, Strong</td>
                  <td>Static, Strong</td>
                </tr>
                <tr>
                  <td>Compilation</td>
                  <td>Interpreted/JIT</td>
                  <td>Interpreted</td>
                  <td>Compiled</td>
                </tr>
                <tr>
                  <td>Platform</td>
                  <td>Web, Server, Mobile</td>
                  <td>Server, Data Science</td>
                  <td>Enterprise, Android</td>
                </tr>
                <tr>
                  <td>Learning Curve</td>
                  <td>Moderate</td>
                  <td>Easy</td>
                  <td>Steep</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Getting Started Checklist */}
        <section className="js-topic-section">
          <h2>✅ Getting Started Checklist</h2>
          <div className="js-checklist">
            <div className="js-checklist-item">
              <input type="checkbox" id="browser" />
              <label htmlFor="browser">Install a modern web browser (Chrome, Firefox, etc.)</label>
            </div>
            <div className="js-checklist-item">
              <input type="checkbox" id="editor" />
              <label htmlFor="editor">Choose a code editor (VS Code, Sublime, Atom)</label>
            </div>
            <div className="js-checklist-item">
              <input type="checkbox" id="devtools" />
              <label htmlFor="devtools">Learn to use browser Developer Tools (F12)</label>
            </div>
            <div className="js-checklist-item">
              <input type="checkbox" id="console" />
              <label htmlFor="console">Practice using the browser console</label>
            </div>
            <div className="js-checklist-item">
              <input type="checkbox" id="html" />
              <label htmlFor="html">Basic knowledge of HTML and CSS (recommended)</label>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="js-topic-section">
          <h2>🎯 What's Next?</h2>
          <p>Now that you understand what JavaScript is, let's dive deeper into the fundamentals:</p>
          <div className="js-next-topics">
            <a href="#variables" className="js-next-topic">
              <span className="js-next-icon">🔤</span>
              <div>
                <h4>Variables and Data Types</h4>
                <p>Learn how to store and work with data</p>
              </div>
            </a>
            <a href="#operators" className="js-next-topic">
              <span className="js-next-icon">➕</span>
              <div>
                <h4>Operators and Expressions</h4>
                <p>Perform operations on your data</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default IntroductionToJavaScript;
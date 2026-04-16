import React from 'react';
import '../Navbarweb.css';

function ScopeAndAccessModifiers() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🏗️ Scope and Access Modifiers</h1>
        <p className="js-topic-subtitle">
          Understand variable scope and access control in Java for better encapsulation
        </p>
      </div>
      <div className="js-topic-content">
        <section className="js-topic-section">
          <h2>🔍 Access Modifiers</h2>
          <div className="js-comparison-table">
            <div className="js-comparison-row js-comparison-header">
              <div>Modifier</div>
              <div>Same Class</div>
              <div>Same Package</div>
              <div>Subclass</div>
              <div>Other Packages</div>
            </div>
            <div className="js-comparison-row">
              <div><code>public</code></div>
              <div>✅</div>
              <div>✅</div>
              <div>✅</div>
              <div>✅</div>
            </div>
            <div className="js-comparison-row">
              <div><code>protected</code></div>
              <div>✅</div>
              <div>✅</div>
              <div>✅</div>
              <div>❌</div>
            </div>
            <div className="js-comparison-row">
              <div><code>default</code></div>
              <div>✅</div>
              <div>✅</div>
              <div>❌</div>
              <div>❌</div>
            </div>
            <div className="js-comparison-row">
              <div><code>private</code></div>
              <div>✅</div>
              <div>❌</div>
              <div>❌</div>
              <div>❌</div>
            </div>
          </div>
        </section>
        <section className="js-topic-section">
          <h2>🏠 Variable Scope Types</h2>
          <div className="js-code-block">
            <pre><code>{`public class ScopeExample {
    // Class/Instance variables
    private int instanceVar = 10;
    static int classVar = 20;
    
    public void method() {
        // Local variables
        int localVar = 30;
        
        // Block scope
        for (int i = 0; i < 5; i++) {
            int loopVar = 40;
            System.out.println(i + loopVar);
        }
        // i and loopVar not accessible here
    }
}`}</code></pre>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ScopeAndAccessModifiers;
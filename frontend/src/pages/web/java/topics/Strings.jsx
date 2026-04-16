import React from 'react';
import '../Navbarweb.css';

function Strings() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>📝 String Manipulation</h1>
        <p className="js-topic-subtitle">Master Java String operations and methods</p>
      </div>
      <div className="js-topic-content">
        <section className="js-topic-section">
          <h2>🔤 String Basics</h2>
          <div className="js-code-block">
            <pre><code>{`// String creation
String str1 = "Hello World";
String str2 = new String("Hello World");

// String methods
int length = str1.length();
char firstChar = str1.charAt(0);
String upperCase = str1.toUpperCase();
String lowerCase = str1.toLowerCase();
boolean contains = str1.contains("World");

// String comparison
boolean isEqual = str1.equals(str2);
boolean isEqualIgnoreCase = str1.equalsIgnoreCase("hello world");

// String manipulation
String substring = str1.substring(0, 5); // "Hello"
String[] parts = str1.split(" "); // ["Hello", "World"]
String replaced = str1.replace("World", "Java");`}</code></pre>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Strings;
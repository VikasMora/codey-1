import React from 'react';
import '../Navbarweb.css';

function ConditionalStatements() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🔀 Conditional Statements</h1>
        <p className="js-topic-subtitle">Learn to control program flow with if-else, switch, and conditional operators</p>
      </div>
      <div className="js-topic-content">
        <section className="js-topic-section">
          <h2>🎯 If-Else Statements</h2>
          <div className="js-code-block">
            <pre><code>{`int score = 85;

if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}

// Nested if statements
int age = 25;
boolean hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        System.out.println("Can drive");
    } else {
        System.out.println("Need license");
    }
} else {
    System.out.println("Too young to drive");
}`}</code></pre>
          </div>
        </section>
        <section className="js-topic-section">
          <h2>🔄 Switch Statements</h2>
          <div className="js-code-block">
            <pre><code>{`int dayOfWeek = 3;

switch (dayOfWeek) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Other day");
        break;
}

// Modern switch expression (Java 12+)
String dayName = switch (dayOfWeek) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    default -> "Other day";
};`}</code></pre>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ConditionalStatements;
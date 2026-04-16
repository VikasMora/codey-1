import React from 'react';
import '../Navbarweb.css';

function CommentsAndCodeStructure() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>💬 Comments and Code Structure</h1>
        <p className="js-topic-subtitle">
          Learn to write clean, well-documented Java code with proper comments and structure
        </p>
      </div>

      <div className="js-topic-content">
        <section className="js-topic-section">
          <h2>📝 Types of Comments</h2>
          
          <h3>Single-Line Comments</h3>
          <div className="js-code-block">
            <pre><code>{`// This is a single-line comment
int age = 25; // Age of the person

// Use for brief explanations
// Multiple single-line comments
// can be used for longer text`}</code></pre>
          </div>

          <h3>Multi-Line Comments</h3>
          <div className="js-code-block">
            <pre><code>{`/*
 * This is a multi-line comment
 * Used for longer explanations
 * Can span multiple lines
 */
int calculateArea(int length, int width) {
    return length * width;
}

/* 
   Block comments are also useful for
   temporarily disabling code blocks
*/`}</code></pre>
          </div>

          <h3>Javadoc Comments</h3>
          <div className="js-code-block">
            <pre><code>{`/**
 * Calculates the area of a rectangle.
 * This method multiplies length and width to get the area.
 * 
 * @param length the length of the rectangle
 * @param width the width of the rectangle
 * @return the area of the rectangle
 * @author Your Name
 * @version 1.0
 * @since 2024
 */
public int calculateArea(int length, int width) {
    return length * width;
}

/**
 * Represents a Person with basic information.
 * 
 * @see Employee
 * @see Customer
 */
public class Person {
    // Class implementation
}`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🏗️ Basic Code Structure</h2>
          
          <div className="js-code-block">
            <div className="js-code-header">
              <span>Complete Java File Structure</span>
            </div>
            <pre><code>{`// 1. Package declaration (if any)
package com.company.project;

// 2. Import statements
import java.util.Scanner;
import java.util.ArrayList;
import java.time.LocalDate;

/**
 * 3. Class-level Javadoc comment
 * Description of what this class does
 */
public class MyClass {
    
    // 4. Class variables (fields)
    private static final String CONSTANT_VALUE = "Hello";
    private int instanceVariable;
    
    // 5. Constructors
    public MyClass() {
        this.instanceVariable = 0;
    }
    
    public MyClass(int value) {
        this.instanceVariable = value;
    }
    
    // 6. Methods
    public void doSomething() {
        // Method implementation
    }
    
    // 7. Main method (if this is the entry point)
    public static void main(String[] args) {
        // Program execution starts here
    }
}`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>📏 Naming Conventions</h2>
          
          <div className="js-comparison-table">
            <div className="js-comparison-row js-comparison-header">
              <div>Element</div>
              <div>Convention</div>
              <div>Example</div>
            </div>
            <div className="js-comparison-row">
              <div>Class Names</div>
              <div>PascalCase</div>
              <div><code>StudentRecord, BankAccount</code></div>
            </div>
            <div className="js-comparison-row">
              <div>Method Names</div>
              <div>camelCase</div>
              <div><code>calculateTotal(), getName()</code></div>
            </div>
            <div className="js-comparison-row">
              <div>Variable Names</div>
              <div>camelCase</div>
              <div><code>firstName, totalAmount</code></div>
            </div>
            <div className="js-comparison-row">
              <div>Constants</div>
              <div>UPPER_SNAKE_CASE</div>
              <div><code>MAX_SIZE, PI_VALUE</code></div>
            </div>
            <div className="js-comparison-row">
              <div>Package Names</div>
              <div>lowercase</div>
              <div><code>com.company.project</code></div>
            </div>
          </div>

          <div className="js-code-block">
            <pre><code>{`// Good naming examples
public class BankAccount {
    private static final double INTEREST_RATE = 0.05;
    private double accountBalance;
    private String accountHolderName;
    
    public void depositMoney(double amount) {
        this.accountBalance += amount;
    }
    
    public double calculateInterest() {
        return accountBalance * INTEREST_RATE;
    }
}`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🎨 Code Formatting and Indentation</h2>
          
          <div className="js-code-block">
            <div className="js-code-header">
              <span>Proper Formatting Example</span>
            </div>
            <pre><code>{`public class FormattingExample {
    
    // Proper spacing and indentation
    public void demonstrateFormatting() {
        
        // Space around operators
        int total = price + tax;
        
        // Proper brace placement
        if (total > 100) {
            System.out.println("High amount");
        } else {
            System.out.println("Normal amount");
        }
        
        // Array formatting
        int[] numbers = {1, 2, 3, 4, 5};
        
        // Method call formatting
        processPayment(
            customerName,
            total,
            paymentMethod
        );
    }
    
    // Method spacing
    private void processPayment(String name, double amount, String method) {
        // Implementation
    }
}`}</code></pre>
          </div>

          <div className="js-highlight-box">
            <h3>Formatting Rules:</h3>
            <ul>
              <li>Use 4 spaces or 1 tab for indentation</li>
              <li>Place opening braces on the same line</li>
              <li>Add spaces around operators</li>
              <li>Leave blank lines between methods</li>
              <li>Limit line length (80-120 characters)</li>
            </ul>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>📚 Javadoc Tags</h2>
          
          <div className="js-comparison-table">
            <div className="js-comparison-row js-comparison-header">
              <div>Tag</div>
              <div>Purpose</div>
              <div>Usage</div>
            </div>
            <div className="js-comparison-row">
              <div><code>@param</code></div>
              <div>Parameter description</div>
              <div><code>@param name the person's name</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>@return</code></div>
              <div>Return value description</div>
              <div><code>@return the calculated area</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>@throws</code></div>
              <div>Exception description</div>
              <div><code>@throws IllegalArgumentException if value is negative</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>@author</code></div>
              <div>Author information</div>
              <div><code>@author John Doe</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>@version</code></div>
              <div>Version information</div>
              <div><code>@version 1.2.0</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>@since</code></div>
              <div>Version when added</div>
              <div><code>@since 1.0</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>@see</code></div>
              <div>Reference to related items</div>
              <div><code>@see Rectangle</code></div>
            </div>
            <div className="js-comparison-row">
              <div><code>@deprecated</code></div>
              <div>Mark as obsolete</div>
              <div><code>@deprecated Use newMethod() instead</code></div>
            </div>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>✅ Best Practices for Comments</h2>
          
          <div className="js-feature-grid">
            <div className="js-feature-card">
              <h4>✅ Good Comments</h4>
              <ul>
                <li>Explain WHY, not WHAT</li>
                <li>Document complex algorithms</li>
                <li>Explain business logic</li>
                <li>Document assumptions</li>
                <li>Warn about gotchas</li>
              </ul>
            </div>
            <div className="js-feature-card">
              <h4>❌ Avoid These</h4>
              <ul>
                <li>Obvious comments</li>
                <li>Commented-out code</li>
                <li>Misleading comments</li>
                <li>Redundant information</li>
                <li>Outdated comments</li>
              </ul>
            </div>
          </div>

          <div className="js-code-block">
            <div className="js-code-header">
              <span>Good vs Bad Comments</span>
            </div>
            <pre><code>{`// ❌ Bad: States the obvious
int i = 0; // Set i to 0

// ✅ Good: Explains the business logic
int retryCount = 0; // Allow up to 3 connection attempts

// ❌ Bad: Redundant
/* This method calculates area */
public int calculateArea(int length, int width) {
    return length * width;
}

// ✅ Good: Explains complex logic
/**
 * Calculates compound interest using the formula:
 * A = P(1 + r/n)^(nt)
 * Where P=principal, r=rate, n=compounds per year, t=time
 */
public double calculateCompoundInterest(double principal, 
                                       double rate, 
                                       int compoundsPerYear, 
                                       int years) {
    // Implementation with complex formula
}`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🔧 IDE and Tools</h2>
          
          <div className="js-benefit-grid">
            <div className="js-benefit-card">
              <h4>🔧 Code Formatting</h4>
              <p>Use IDE auto-formatting (Ctrl+Alt+L in IntelliJ, Ctrl+Shift+F in Eclipse)</p>
            </div>
            <div className="js-benefit-card">
              <h4>📊 Code Analysis</h4>
              <p>Enable linting tools like Checkstyle, PMD, or SpotBugs</p>
            </div>
            <div className="js-benefit-card">
              <h4>📖 Javadoc Generation</h4>
              <p>Generate HTML documentation with: javadoc *.java</p>
            </div>
            <div className="js-benefit-card">
              <h4>⚙️ Editor Config</h4>
              <p>Use .editorconfig files to maintain consistent formatting across teams</p>
            </div>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>📝 Example: Well-Structured Class</h2>
          
          <div className="js-code-block">
            <div className="js-code-header">
              <span>Calculator.java</span>
            </div>
            <pre><code>{`package com.example.math;

import java.util.logging.Logger;

/**
 * A simple calculator that performs basic arithmetic operations.
 * 
 * This class provides methods for addition, subtraction, multiplication,
 * and division with proper error handling for edge cases.
 * 
 * @author Jane Developer
 * @version 2.0
 * @since 1.0
 */
public class Calculator {
    
    private static final Logger LOGGER = Logger.getLogger(Calculator.class.getName());
    
    /**
     * Adds two numbers and returns the result.
     * 
     * @param a the first number
     * @param b the second number
     * @return the sum of a and b
     */
    public double add(double a, double b) {
        LOGGER.info("Adding " + a + " and " + b);
        return a + b;
    }
    
    /**
     * Divides two numbers with zero-division check.
     * 
     * @param dividend the number to be divided
     * @param divisor the number to divide by
     * @return the result of division
     * @throws IllegalArgumentException if divisor is zero
     */
    public double divide(double dividend, double divisor) {
        if (divisor == 0) {
            throw new IllegalArgumentException("Cannot divide by zero");
        }
        
        return dividend / divisor;
    }
}`}</code></pre>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CommentsAndCodeStructure;
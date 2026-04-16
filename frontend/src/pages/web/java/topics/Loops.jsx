import React from 'react';
import '../Navbarweb.css';

function Loops() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🔄 Loops (for, while, do-while)</h1>
        <p className="js-topic-subtitle">Master repetitive execution with different loop structures in Java</p>
      </div>
      <div className="js-topic-content">
        <section className="js-topic-section">
          <h2>🔄 For Loops</h2>
          <div className="js-code-block">
            <pre><code>{`// Traditional for loop
for (int i = 0; i < 5; i++) {
    System.out.println("Count: " + i);
}

// Enhanced for loop (for-each)
int[] numbers = {1, 2, 3, 4, 5};
for (int number : numbers) {
    System.out.println(number);
}

String[] names = {"Alice", "Bob", "Charlie"};
for (String name : names) {
    System.out.println("Hello, " + name);
}

// Nested for loops
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.println("i=" + i + ", j=" + j);
    }
}`}</code></pre>
          </div>
          <div className="js-info-box">
            <p><strong>💡 Tip:</strong> Enhanced for loops (for-each) are cleaner when you don't need the index.</p>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>⏳ While and Do-While Loops</h2>
          <div className="js-code-block">
            <pre><code>{`// While loop
int count = 0;
while (count < 3) {
    System.out.println("While count: " + count);
    count++;
}

// Do-while loop (executes at least once)
int num = 0;
do {
    System.out.println("Do-while num: " + num);
    num++;
} while (num < 3);

// Example: Input validation
Scanner scanner = new Scanner(System.in);
int userInput;
do {
    System.out.print("Enter a positive number: ");
    userInput = scanner.nextInt();
    if (userInput <= 0) {
        System.out.println("Please enter a positive number!");
    }
} while (userInput <= 0);`}</code></pre>
          </div>
          <div className="js-info-box">
            <p><strong>⚠️ Important:</strong> Do-while loops execute at least once, even if the condition is initially false.</p>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🎯 Loop Control Statements</h2>
          <div className="js-code-block">
            <pre><code>{`// Break statement - exits the loop
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break; // Exit loop when i equals 5
    }
    System.out.println(i); // Prints 0, 1, 2, 3, 4
}

// Continue statement - skips current iteration
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue; // Skip even numbers
    }
    System.out.println("Odd: " + i); // Prints odd numbers only
}

// Labeled break (for nested loops)
outer: for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            break outer; // Break out of both loops
        }
        System.out.println("i=" + i + ", j=" + j);
    }
}
System.out.println("Exited nested loops");`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🏃‍♂️ Common Loop Patterns</h2>
          <div className="js-code-block">
            <pre><code>{`// Pattern 1: Iterating through arrays
int[] array = {10, 20, 30, 40, 50};
for (int i = 0; i < array.length; i++) {
    System.out.println("Index " + i + ": " + array[i]);
}

// Pattern 2: Reverse iteration
for (int i = array.length - 1; i >= 0; i--) {
    System.out.println("Reverse: " + array[i]);
}

// Pattern 3: Step iteration
for (int i = 0; i < 20; i += 2) {
    System.out.println("Even number: " + i);
}

// Pattern 4: Infinite loop with break condition
while (true) {
    int randomNum = (int)(Math.random() * 10);
    System.out.println("Random: " + randomNum);
    if (randomNum == 7) {
        System.out.println("Lucky 7! Exiting...");
        break;
    }
}`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🔍 Loop Performance Tips</h2>
          <div className="js-info-box">
            <h3>Best Practices:</h3>
            <ul>
              <li><strong>Cache array length:</strong> Store <code>array.length</code> in a variable for large arrays</li>
              <li><strong>Use enhanced for loops:</strong> When you don't need the index, use for-each loops</li>
              <li><strong>Avoid infinite loops:</strong> Always ensure your loop condition will eventually become false</li>
              <li><strong>Initialize outside:</strong> Declare loop variables outside when used after the loop</li>
              <li><strong>Use break/continue wisely:</strong> These can make code more readable but shouldn't be overused</li>
            </ul>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>💻 Practice Exercise</h2>
          <div className="js-exercise-box">
            <h3>Challenge: Number Pattern</h3>
            <p>Write a program that prints the following pattern using nested loops:</p>
            <pre><code>{`1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`}</code></pre>
            <details>
              <summary>💡 Solution</summary>
              <div className="js-code-block">
                <pre><code>{`for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(j + " ");
    }
    System.out.println(); // New line after each row
}`}</code></pre>
              </div>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Loops;
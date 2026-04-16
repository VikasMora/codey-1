import React from 'react';
import '../Navbarweb.css';

function Arrays() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>📋 Arrays</h1>
        <p className="js-topic-subtitle">Learn to work with collections of data using Java arrays</p>
      </div>
      <div className="js-topic-content">
        <section className="js-topic-section">
          <h2>📝 Array Declaration and Initialization</h2>
          <div className="js-code-block">
            <pre><code>{`// Array declaration
int[] numbers;
String[] names;

// Declaration and initialization
int[] scores = {85, 92, 78, 96, 88};
String[] fruits = {"apple", "banana", "orange"};

// Using new keyword
int[] values = new int[5]; // Array of 5 integers (default: 0)
String[] cities = new String[3]; // Array of 3 strings (default: null)

// Mixed declaration and initialization
int[] grades = new int[]{90, 85, 78, 92};`}</code></pre>
          </div>
        </section>
        <section className="js-topic-section">
          <h2>🔍 Array Operations</h2>
          <div className="js-code-block">
            <pre><code>{`int[] numbers = {10, 20, 30, 40, 50};

// Accessing elements
int firstElement = numbers[0]; // 10
int lastElement = numbers[numbers.length - 1]; // 50

// Modifying elements
numbers[2] = 35; // Change 30 to 35

// Array length
System.out.println("Array length: " + numbers.length);

// Iterating through array
for (int i = 0; i < numbers.length; i++) {
    System.out.println("Element " + i + ": " + numbers[i]);
}

// Enhanced for loop
for (int number : numbers) {
    System.out.println("Number: " + number);
}`}</code></pre>
          </div>
        </section>
        <section className="js-topic-section">
          <h2>🏢 Multidimensional Arrays</h2>
          <div className="js-code-block">
            <pre><code>{`// 2D Array declaration
int[][] matrix = new int[3][4]; // 3 rows, 4 columns

// 2D Array initialization
int[][] grid = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Accessing 2D array elements
int value = grid[1][2]; // Gets 6 (row 1, column 2)

// Iterating through 2D array
for (int i = 0; i < grid.length; i++) {
    for (int j = 0; j < grid[i].length; j++) {
        System.out.print(grid[i][j] + " ");
    }
    System.out.println();
}

// Enhanced for loop for 2D array
for (int[] row : grid) {
    for (int element : row) {
        System.out.print(element + " ");
    }
    System.out.println();
}`}</code></pre>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Arrays;
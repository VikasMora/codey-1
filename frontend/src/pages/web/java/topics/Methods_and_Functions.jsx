import React from 'react';
import '../Navbarweb.css';

function MethodsAndFunctions() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>⚙️ Methods and Functions</h1>
        <p className="js-topic-subtitle">
          Master Java methods to create reusable, organized, and efficient code
        </p>
      </div>

      <div className="js-topic-content">
        <section className="js-topic-section">
          <h2>📝 What are Methods?</h2>
          <p>
            Methods are blocks of code that perform specific tasks. They help organize code, 
            promote reusability, and make programs easier to understand and maintain.
          </p>
          
          <div className="js-code-block">
            <div className="js-code-header">
              <span>Method Structure</span>
            </div>
            <pre><code>{`// Method syntax:
// [access_modifier] [static] return_type method_name(parameters) {
//     // method body
//     return value; // if return_type is not void
// }

public static int addNumbers(int a, int b) {
    int sum = a + b;
    return sum;
}

public void greetUser(String name) {
    System.out.println("Hello, " + name + "!");
}`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🏗️ Method Components</h2>
          
          <div className="js-feature-grid">
            <div className="js-feature-card">
              <h4>Access Modifiers</h4>
              <ul>
                <li><code>public</code> - Accessible everywhere</li>
                <li><code>private</code> - Only within same class</li>
                <li><code>protected</code> - Package + subclasses</li>
                <li><code>default</code> - Package level</li>
              </ul>
            </div>
            <div className="js-feature-card">
              <h4>Return Types</h4>
              <ul>
                <li><code>void</code> - No return value</li>
                <li><code>int, double, boolean</code> - Primitive types</li>
                <li><code>String, Object</code> - Reference types</li>
                <li><code>int[]</code> - Arrays</li>
              </ul>
            </div>
          </div>

          <div className="js-code-block">
            <pre><code>{`public class MethodExamples {
    
    // Method with no parameters and no return value
    public void sayHello() {
        System.out.println("Hello, World!");
    }
    
    // Method with parameters and return value
    public int multiply(int x, int y) {
        return x * y;
    }
    
    // Method with multiple parameters
    public double calculateBMI(double weight, double height) {
        return weight / (height * height);
    }
    
    // Method returning boolean
    public boolean isEven(int number) {
        return number % 2 == 0;
    }
    
    // Method returning String
    public String getFullName(String firstName, String lastName) {
        return firstName + " " + lastName;
    }
}`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>📞 Method Calling</h2>
          
          <div className="js-code-block">
            <pre><code>{`public class MethodCalling {
    
    public static void main(String[] args) {
        MethodExamples example = new MethodExamples();
        
        // Calling void method
        example.sayHello();
        
        // Calling method with return value
        int result = example.multiply(5, 3);
        System.out.println("5 * 3 = " + result);
        
        // Using return value directly
        System.out.println("BMI: " + example.calculateBMI(70, 1.75));
        
        // Using in conditional
        if (example.isEven(10)) {
            System.out.println("10 is even");
        }
        
        // Chaining method calls
        String name = example.getFullName("John", "Doe");
        System.out.println(name.toUpperCase());
    }
}`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🔄 Method Overloading</h2>
          <p>
            Method overloading allows multiple methods with the same name but different parameters.
          </p>
          
          <div className="js-code-block">
            <pre><code>{`public class Calculator {
    
    // Overloaded add methods
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Overloaded print methods
    public void print(int value) {
        System.out.println("Integer: " + value);
    }
    
    public void print(String value) {
        System.out.println("String: " + value);
    }
    
    public void print(double value) {
        System.out.println("Double: " + value);
    }
    
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        calc.add(5, 3);           // Calls int version
        calc.add(5.5, 3.2);       // Calls double version
        calc.add(1, 2, 3);        // Calls three-parameter version
        
        calc.print(42);           // Calls int version
        calc.print("Hello");      // Calls String version
        calc.print(3.14);         // Calls double version
    }
}`}</code></pre>
          </div>

          <div className="js-highlight-box">
            <h3>Overloading Rules:</h3>
            <ul>
              <li>Methods must have different parameter lists</li>
              <li>Return type alone is not sufficient for overloading</li>
              <li>Compiler chooses method based on arguments provided</li>
            </ul>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🔢 Variable Arguments (Varargs)</h2>
          
          <div className="js-code-block">
            <pre><code>{`public class VarargsExample {
    
    // Method with variable arguments
    public int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
    
    // Varargs with other parameters (varargs must be last)
    public void printWithPrefix(String prefix, String... messages) {
        for (String message : messages) {
            System.out.println(prefix + ": " + message);
        }
    }
    
    public static void main(String[] args) {
        VarargsExample example = new VarargsExample();
        
        // Can call with different number of arguments
        System.out.println(example.sum(1, 2, 3));           // 6
        System.out.println(example.sum(1, 2, 3, 4, 5));     // 15
        System.out.println(example.sum());                   // 0
        
        // With array
        int[] numbers = {10, 20, 30};
        System.out.println(example.sum(numbers));            // 60
        
        example.printWithPrefix("INFO", "System started", "Ready to go");
    }
}`}</code></pre>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🏠 Static vs Instance Methods</h2>
          
          <div className="js-code-block">
            <pre><code>{`public class StaticVsInstance {
    
    private static int staticCounter = 0;
    private int instanceCounter = 0;
    
    // Static method - belongs to the class
    public static void staticMethod() {
        System.out.println("This is a static method");
        staticCounter++;
        // Cannot access instance variables or methods directly
        // instanceCounter++; // This would cause compilation error
    }
    
    // Instance method - belongs to object
    public void instanceMethod() {
        System.out.println("This is an instance method");
        instanceCounter++;
        staticCounter++; // Can access static variables
        staticMethod(); // Can call static methods
    }
    
    public static void main(String[] args) {
        // Calling static method
        StaticVsInstance.staticMethod(); // Using class name
        staticMethod(); // Within same class, class name optional
        
        // Calling instance method
        StaticVsInstance obj = new StaticVsInstance();
        obj.instanceMethod();
        
        // Creating multiple instances
        StaticVsInstance obj1 = new StaticVsInstance();
        StaticVsInstance obj2 = new StaticVsInstance();
        
        obj1.instanceMethod();
        obj2.instanceMethod();
        
        System.out.println("Static counter: " + staticCounter);
        System.out.println("obj1 instance counter: " + obj1.instanceCounter);
        System.out.println("obj2 instance counter: " + obj2.instanceCounter);
    }
}`}</code></pre>
          </div>

          <div className="js-comparison-table">
            <div className="js-comparison-row js-comparison-header">
              <div>Static Methods</div>
              <div>Instance Methods</div>
            </div>
            <div className="js-comparison-row">
              <div>Belong to the class</div>
              <div>Belong to object instances</div>
            </div>
            <div className="js-comparison-row">
              <div>Called using class name</div>
              <div>Called using object reference</div>
            </div>
            <div className="js-comparison-row">
              <div>Cannot access instance variables</div>
              <div>Can access both static and instance variables</div>
            </div>
            <div className="js-comparison-row">
              <div>Loaded when class is loaded</div>
              <div>Created when object is instantiated</div>
            </div>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>🔄 Recursion</h2>
          <p>
            Recursion is when a method calls itself. It's useful for problems that can be 
            broken down into smaller, similar subproblems.
          </p>
          
          <div className="js-code-block">
            <pre><code>{`public class RecursionExamples {
    
    // Factorial calculation
    public static long factorial(int n) {
        // Base case
        if (n <= 1) {
            return 1;
        }
        // Recursive case
        return n * factorial(n - 1);
    }
    
    // Fibonacci sequence
    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    // Power calculation
    public static double power(double base, int exponent) {
        if (exponent == 0) {
            return 1;
        }
        if (exponent < 0) {
            return 1 / power(base, -exponent);
        }
        return base * power(base, exponent - 1);
    }
    
    // Binary search (recursive)
    public static int binarySearch(int[] arr, int target, int left, int right) {
        if (left > right) {
            return -1; // Not found
        }
        
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            return binarySearch(arr, target, left, mid - 1);
        } else {
            return binarySearch(arr, target, mid + 1, right);
        }
    }
    
    public static void main(String[] args) {
        System.out.println("5! = " + factorial(5));
        System.out.println("Fibonacci(10) = " + fibonacci(10));
        System.out.println("2^8 = " + power(2, 8));
        
        int[] sortedArray = {1, 3, 5, 7, 9, 11, 13};
        int index = binarySearch(sortedArray, 7, 0, sortedArray.length - 1);
        System.out.println("7 found at index: " + index);
    }
}`}</code></pre>
          </div>

          <div className="js-highlight-box">
            <h3>Recursion Guidelines:</h3>
            <ul>
              <li><strong>Base Case:</strong> Must have a condition to stop recursion</li>
              <li><strong>Progress:</strong> Each call should move closer to base case</li>
              <li><strong>Stack Limit:</strong> Too many recursive calls can cause stack overflow</li>
              <li><strong>Efficiency:</strong> Consider iterative solutions for better performance</li>
            </ul>
          </div>
        </section>

        <section className="js-topic-section">
          <h2>💡 Method Best Practices</h2>
          
          <div className="js-benefit-grid">
            <div className="js-benefit-card">
              <h4>📏 Keep Methods Small</h4>
              <p>Methods should do one thing well. Aim for 20-30 lines maximum.</p>
            </div>
            <div className="js-benefit-card">
              <h4>🏷️ Use Descriptive Names</h4>
              <p>Method names should clearly indicate what they do: calculateTotal(), validateEmail()</p>
            </div>
            <div className="js-benefit-card">
              <h4>📝 Limit Parameters</h4>
              <p>Too many parameters make methods hard to use. Consider using objects for multiple parameters.</p>
            </div>
            <div className="js-benefit-card">
              <h4>🔒 Minimize Side Effects</h4>
              <p>Prefer pure functions that don't modify global state when possible.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MethodsAndFunctions;
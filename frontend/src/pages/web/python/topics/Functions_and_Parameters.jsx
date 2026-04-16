import React from 'react';
import '../Navbarweb.css';

function FunctionsAndParameters() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>⚙️ Functions and Parameters</h1>
        <p className="py-topic-subtitle">
          Learn to create reusable blocks of code with functions
        </p>
      </div>

      <div className="py-topic-content">
        {/* What are Functions */}
        <section className="py-topic-section">
          <h2>🎯 What are Functions?</h2>
          <p>
            A function is a reusable block of code that performs a specific task. Functions help you 
            organize your code, avoid repetition, and make your programs more modular and easier to maintain.
          </p>
          
          <div className="py-code-block">
            <pre>{`# Basic function syntax
def function_name():
    """This is a docstring that describes what the function does"""
    # Function body
    print("Hello from my function!")

# Calling the function
function_name()  # Output: Hello from my function!`}</pre>
          </div>
        </section>

        {/* Function Parameters */}
        <section className="py-topic-section">
          <h2>📥 Function Parameters</h2>
          <p>Parameters allow you to pass data into functions, making them more flexible and reusable.</p>

          <h3>Basic Parameters</h3>
          <div className="py-code-block">
            <pre>{`def greet(name):
    """Greets a person by name"""
    print(f"Hello, {name}!")

def add_numbers(a, b):
    """Adds two numbers and returns the result"""
    return a + b

# Calling functions with arguments
greet("Alice")              # Hello, Alice!
result = add_numbers(5, 3)  # result = 8
print(result)`}</pre>
          </div>

          <h3>Default Parameters</h3>
          <div className="py-code-block">
            <pre>{`def greet(name, greeting="Hello"):
    """Greets a person with a customizable greeting"""
    print(f"{greeting}, {name}!")

# Using default parameter
greet("Bob")                    # Hello, Bob!

# Overriding default parameter
greet("Charlie", "Hi there")    # Hi there, Charlie!

def calculate_area(length, width=None):
    """Calculate area of rectangle or square"""
    if width is None:
        width = length  # Square if only one dimension given
    return length * width

print(calculate_area(5))     # 25 (square)
print(calculate_area(4, 6))  # 24 (rectangle)`}</pre>
          </div>
        </section>

        {/* Return Values */}
        <section className="py-topic-section">
          <h2>📤 Return Values</h2>
          <p>Functions can return values using the return statement. This allows functions to produce output that can be used elsewhere in your program.</p>
          
          <div className="py-code-block">
            <pre>{`def multiply(x, y):
    """Multiplies two numbers"""
    result = x * y
    return result

def get_full_name(first_name, last_name):
    """Combines first and last name"""
    return f"{first_name} {last_name}"

def divide_safely(a, b):
    """Divides two numbers, returns None if division by zero"""
    if b == 0:
        print("Error: Cannot divide by zero!")
        return None
    return a / b

# Using return values
product = multiply(4, 7)        # product = 28
name = get_full_name("John", "Doe")  # name = "John Doe"
result = divide_safely(10, 2)   # result = 5.0
invalid = divide_safely(10, 0)  # invalid = None`}</pre>
          </div>

          <h3>Multiple Return Values</h3>
          <div className="py-code-block">
            <pre>{`def get_name_and_age():
    """Returns multiple values as a tuple"""
    return "Alice", 25

def calculate_circle(radius):
    """Calculate area and circumference of a circle"""
    area = 3.14159 * radius ** 2
    circumference = 2 * 3.14159 * radius
    return area, circumference

# Unpacking multiple return values
name, age = get_name_and_age()
print(f"Name: {name}, Age: {age}")

area, circ = calculate_circle(5)
print(f"Area: {area:.2f}, Circumference: {circ:.2f}")`}</pre>
          </div>
        </section>

        {/* Advanced Parameter Types */}
        <section className="py-topic-section">
          <h2>🚀 Advanced Parameter Types</h2>
          
          <h3>*args (Variable Length Arguments)</h3>
          <div className="py-code-block">
            <pre>{`def sum_all(*numbers):
    """Sum any number of arguments"""
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))          # 6
print(sum_all(1, 2, 3, 4, 5))    # 15

def print_info(name, *hobbies):
    """Print name and hobbies"""
    print(f"Name: {name}")
    print("Hobbies:", end=" ")
    for hobby in hobbies:
        print(hobby, end=" ")
    print()

print_info("Alice", "reading", "swimming", "coding")`}</pre>
          </div>

          <h3>**kwargs (Keyword Arguments)</h3>
          <div className="py-code-block">
            <pre>{`def create_profile(**details):
    """Create a user profile from keyword arguments"""
    print("User Profile:")
    for key, value in details.items():
        print(f"  {key}: {value}")

create_profile(name="Bob", age=30, city="New York", job="Engineer")

def greet_person(name, **kwargs):
    """Greet person with optional details"""
    greeting = f"Hello, {name}!"
    if 'age' in kwargs:
        greeting += f" You are {kwargs['age']} years old."
    if 'city' in kwargs:
        greeting += f" Nice to meet someone from {kwargs['city']}!"
    return greeting

message = greet_person("Charlie", age=25, city="Boston")
print(message)`}</pre>
          </div>
        </section>

        {/* Scope and Variables */}
        <section className="py-topic-section">
          <h2>🔍 Variable Scope</h2>
          <p>Understanding where variables can be accessed is crucial for writing correct functions.</p>
          
          <div className="py-code-block">
            <pre>{`# Global variable
global_var = "I'm global"

def my_function():
    # Local variable
    local_var = "I'm local"
    print(global_var)  # Can access global variable
    print(local_var)   # Can access local variable

my_function()
print(global_var)  # Works
# print(local_var)  # Error! local_var not accessible here

# Modifying global variables
counter = 0

def increment():
    global counter
    counter += 1
    print(f"Counter: {counter}")

increment()  # Counter: 1
increment()  # Counter: 2`}</pre>
          </div>
        </section>

        {/* Lambda Functions */}
        <section className="py-topic-section">
          <h2>λ Lambda Functions</h2>
          <p>Lambda functions are small, anonymous functions that can have any number of arguments but can only have one expression.</p>
          
          <div className="py-code-block">
            <pre>{`# Lambda function syntax
square = lambda x: x ** 2
print(square(5))  # 25

add = lambda a, b: a + b
print(add(3, 4))  # 7

# Using lambda with built-in functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# Filter even numbers
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4]

# Sort by custom criteria
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
students.sort(key=lambda student: student[1])  # Sort by grade
print(students)  # [('Charlie', 78), ('Alice', 85), ('Bob', 92)]`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Function Best Practices:</h3>
            <ul>
              <li><strong>Use descriptive names:</strong> calculate_area() instead of calc()</li>
              <li><strong>Keep functions small:</strong> One function, one responsibility</li>
              <li><strong>Use docstrings:</strong> Document what your function does</li>
              <li><strong>Avoid global variables:</strong> Pass data through parameters instead</li>
              <li><strong>Return meaningful values:</strong> Don't just print, return results</li>
              <li><strong>Use type hints:</strong> Help others understand expected types</li>
            </ul>
          </div>

          <div className="py-code-block">
            <pre>{`def calculate_bmi(weight: float, height: float) -> float:
    """
    Calculate Body Mass Index (BMI).
    
    Args:
        weight (float): Weight in kilograms
        height (float): Height in meters
    
    Returns:
        float: BMI value
    """
    if height <= 0:
        raise ValueError("Height must be positive")
    
    return weight / (height ** 2)

# Good function with clear purpose, documentation, and error handling
bmi = calculate_bmi(70, 1.75)
print(f"BMI: {bmi:.1f}")`}</pre>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Write a function that converts temperature between Celsius and Fahrenheit</li>
              <li>Create a function that checks if a number is prime</li>
              <li>Write a function that calculates factorial of a number</li>
              <li>Create a function that finds the maximum of three numbers</li>
              <li>Write a function that generates a password with specified length</li>
              <li>Create a calculator function that takes operation and numbers as parameters</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FunctionsAndParameters;
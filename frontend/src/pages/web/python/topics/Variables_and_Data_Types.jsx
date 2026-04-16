import React from 'react';
import '../Navbarweb.css';

function VariablesAndDataTypes() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>🔤 Variables and Data Types</h1>
        <p className="py-topic-subtitle">
          Learn how to store and work with different types of data in Python
        </p>
      </div>

      <div className="py-topic-content">
        {/* Variables Section */}
        <section className="py-topic-section">
          <h2>📦 What are Variables?</h2>
          <p>
            Variables are containers that store data values. In Python, you don't need to declare 
            the type of variable - Python automatically determines the type based on the value assigned.
          </p>
          
          <div className="py-code-block">
            <pre>{`# Creating variables
name = "Alice"
age = 25
height = 5.6
is_student = True

# Python is dynamically typed
x = 10        # x is an integer
x = "Hello"   # Now x is a string
x = [1, 2, 3] # Now x is a list`}</pre>
          </div>

          <div className="py-info-box">
            <h3>Variable Naming Rules:</h3>
            <ul>
              <li>Must start with a letter or underscore (_)</li>
              <li>Can contain letters, numbers, and underscores</li>
              <li>Case-sensitive (age and Age are different)</li>
              <li>Cannot use Python keywords (if, for, while, etc.)</li>
              <li>Use descriptive names (user_name instead of un)</li>
            </ul>
          </div>
        </section>

        {/* Built-in Data Types */}
        <section className="py-topic-section">
          <h2>🏗️ Built-in Data Types</h2>
          <p>Python has several built-in data types. Let's explore the most commonly used ones:</p>

          <h3>1. Numeric Types</h3>
          <div className="py-code-block">
            <pre>{`# Integer (int)
count = 42
negative_num = -17

# Float (floating-point number)
pi = 3.14159
temperature = -2.5

# Complex numbers
complex_num = 3 + 4j

# Type checking
print(type(count))        # <class 'int'>
print(type(pi))           # <class 'float'>
print(type(complex_num))  # <class 'complex'>`}</pre>
          </div>

          <h3>2. Text Type</h3>
          <div className="py-code-block">
            <pre>{`# String (str)
message = "Hello, Python!"
multiline = """This is a
multiline string"""
single_quotes = 'Also a string'

# String methods
name = "alice"
print(name.upper())       # ALICE
print(name.capitalize())  # Alice
print(len(name))         # 5`}</pre>
          </div>

          <h3>3. Boolean Type</h3>
          <div className="py-code-block">
            <pre>{`# Boolean (bool)
is_python_fun = True
is_difficult = False

# Boolean operations
print(True and False)   # False
print(True or False)    # True
print(not True)         # False

# Truthy and Falsy values
print(bool(1))          # True
print(bool(0))          # False
print(bool("hello"))    # True
print(bool(""))         # False`}</pre>
          </div>
        </section>

        {/* Type Conversion */}
        <section className="py-topic-section">
          <h2>🔄 Type Conversion</h2>
          <p>
            Python allows you to convert between different data types using built-in functions:
          </p>
          
          <div className="py-code-block">
            <pre>{`# Converting to integer
num_str = "123"
num_int = int(num_str)
print(num_int + 10)  # 133

# Converting to float
price_str = "19.99"
price_float = float(price_str)
print(price_float * 2)  # 39.98

# Converting to string
age = 25
age_str = str(age)
message = "I am " + age_str + " years old"

# Converting to boolean
print(bool(1))      # True
print(bool(0))      # False
print(bool([]))     # False (empty list)
print(bool([1]))    # True (non-empty list)`}</pre>
          </div>

          <div className="py-info-box warning">
            <h3>⚠️ Be Careful with Type Conversion:</h3>
            <ul>
              <li>Converting invalid strings to numbers raises ValueError</li>
              <li>int("3.14") will cause an error - use float() first</li>
              <li>Always validate input when converting user data</li>
            </ul>
          </div>
        </section>

        {/* Working with Variables */}
        <section className="py-topic-section">
          <h2>🔧 Working with Variables</h2>
          
          <h3>Multiple Assignment</h3>
          <div className="py-code-block">
            <pre>{`# Assign same value to multiple variables
x = y = z = 10

# Assign different values to multiple variables
name, age, city = "Alice", 25, "New York"

# Swapping variables
a = 5
b = 10
a, b = b, a  # Now a=10, b=5`}</pre>
          </div>

          <h3>Constants</h3>
          <div className="py-code-block">
            <pre>{`# Python doesn't have built-in constants, but by convention
# we use ALL_CAPS for values that shouldn't change
PI = 3.14159
MAX_SIZE = 100
API_URL = "https://api.example.com"

# These are still variables, but the naming convention
# tells other developers they shouldn't be modified`}</pre>
          </div>
        </section>

        {/* Input and Output */}
        <section className="py-topic-section">
          <h2>⌨️ Getting User Input</h2>
          <p>
            Use the input() function to get user input. Remember that input() always returns a string!
          </p>
          
          <div className="py-code-block">
            <pre>{`# Getting string input
name = input("What's your name? ")
print("Hello, " + name + "!")

# Getting numeric input
age_str = input("How old are you? ")
age = int(age_str)  # Convert to integer
print(f"Next year you'll be {age + 1}")

# Using f-strings for formatting
name = input("Enter your name: ")
age = int(input("Enter your age: "))
print(f"Hello {name}, you are {age} years old!")

# Getting multiple inputs in one line
x, y = input("Enter two numbers: ").split()
x, y = int(x), int(y)
print(f"Sum: {x + y}")`}</pre>
          </div>
        </section>

        {/* Common Operations */}
        <section className="py-topic-section">
          <h2>⚡ Common Operations</h2>
          
          <div className="py-feature-grid">
            <div className="py-feature-card">
              <h3>🔢 Arithmetic</h3>
              <div className="py-code-block">
                <pre>{`a = 10
b = 3

print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.333...
print(a // b)  # 3 (floor division)
print(a % b)   # 1 (remainder)
print(a ** b)  # 1000 (power)`}</pre>
              </div>
            </div>
            
            <div className="py-feature-card">
              <h3>📝 String Operations</h3>
              <div className="py-code-block">
                <pre>{`text = "Python"

print(text + " is fun")  # Concatenation
print(text * 3)          # Repetition
print(text[0])           # P (indexing)
print(text[1:4])         # yth (slicing)
print("Py" in text)      # True
print(len(text))         # 6`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create variables for your name, age, and favorite color</li>
              <li>Calculate the area of a rectangle using length and width variables</li>
              <li>Get user input for temperature in Celsius and convert to Fahrenheit</li>
              <li>Create a program that calculates the compound interest</li>
              <li>Write a program that swaps the values of two variables</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default VariablesAndDataTypes;
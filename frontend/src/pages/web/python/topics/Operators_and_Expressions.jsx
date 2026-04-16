import React from 'react';
import '../Navbarweb.css';

function OperatorsAndExpressions() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>➕ Operators and Expressions</h1>
        <p className="py-topic-subtitle">
          Master Python operators for mathematical and logical operations
        </p>
      </div>
      <div className="py-topic-content">
        {/* What are Operators */}
        <section className="py-topic-section">
          <h2>🎯 What are Operators?</h2>
          <p>
            Operators are special symbols that perform operations on variables and values. Python provides 
            a rich set of operators for arithmetic, comparison, logical operations, and more. Understanding 
            operators is fundamental to writing effective Python code.
          </p>
          
          <div className="py-highlight-box">
            <h3>Types of Operators in Python:</h3>
            <ul>
              <li><strong>Arithmetic Operators:</strong> Mathematical calculations</li>
              <li><strong>Comparison Operators:</strong> Compare values</li>
              <li><strong>Logical Operators:</strong> Combine conditional statements</li>
              <li><strong>Assignment Operators:</strong> Assign values to variables</li>
              <li><strong>Identity Operators:</strong> Compare object identity</li>
              <li><strong>Membership Operators:</strong> Test membership in sequences</li>
              <li><strong>Bitwise Operators:</strong> Operate on bits</li>
            </ul>
          </div>
        </section>

        {/* Arithmetic Operators */}
        <section className="py-topic-section">
          <h2>🔢 Arithmetic Operators</h2>
          <p>
            Arithmetic operators perform mathematical operations on numeric values.
          </p>
          
          <div className="py-code-block">
            <pre>{`# Basic arithmetic operators
a = 10
b = 3

print(a + b)   # Addition: 13
print(a - b)   # Subtraction: 7
print(a * b)   # Multiplication: 30
print(a / b)   # Division: 3.333...
print(a // b)  # Floor division: 3
print(a % b)   # Modulus (remainder): 1
print(a ** b)  # Exponentiation: 1000

# Unary operators
x = 5
print(+x)  # Unary plus: 5
print(-x)  # Unary minus: -5`}</pre>
          </div>

          <div className="py-info-box">
            <h3>💡 Important Notes:</h3>
            <ul>
              <li><strong>Division (/):</strong> Always returns a float, even for whole numbers</li>
              <li><strong>Floor Division (//):</strong> Returns the largest integer less than or equal to the result</li>
              <li><strong>Modulus (%):</strong> Useful for checking if numbers are even/odd or for cycling</li>
              <li><strong>Exponentiation (**):</strong> More efficient than using math.pow()</li>
            </ul>
          </div>

          <h3>Practical Examples</h3>
          <div className="py-code-block">
            <pre>{`# Check if number is even or odd
number = 17
if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")

# Calculate compound interest
principal = 1000
rate = 0.05
time = 3
amount = principal * (1 + rate) ** time
print(f"Amount after {{time}} years: \${{amount:.2f}}")

# Convert seconds to hours, minutes, seconds
total_seconds = 3661
hours = total_seconds // 3600
minutes = (total_seconds % 3600) // 60
seconds = total_seconds % 60
print(f"{{total_seconds}} seconds = {{hours}}h {{minutes}}m {{seconds}}s")`}</pre>
          </div>
        </section>

        {/* Comparison Operators */}
        <section className="py-topic-section">
          <h2>⚖️ Comparison Operators</h2>
          <p>
            Comparison operators compare two values and return a boolean result (True or False).
          </p>
          
          <div className="py-code-block">
            <pre>{`# Comparison operators
a = 10
b = 5
c = 10

print(a == c)   # Equal to: True
print(a != b)   # Not equal to: True
print(a > b)    # Greater than: True
print(a < b)    # Less than: False
print(a >= c)   # Greater than or equal to: True
print(a <= b)   # Less than or equal to: False

# Comparing different data types
print(5 == "5")     # False (different types)
print(5 == 5.0)     # True (numeric types are compared by value)
print(True == 1)    # True (boolean True equals 1)
print(False == 0)   # True (boolean False equals 0)

# Chaining comparisons
age = 25
print(18 <= age < 65)  # True (checks if age is between 18 and 65)

x = 10
print(5 < x < 15)      # True (equivalent to: 5 < x and x < 15)`}</pre>
          </div>

          <h3>String Comparison</h3>
          <div className="py-code-block">
            <pre>{`# String comparison (lexicographical order)
print("apple" < "banana")    # True
print("Apple" < "apple")     # True (uppercase comes before lowercase)
print("abc" == "ABC")        # False (case sensitive)

# Comparing string lengths
name1 = "Alice"
name2 = "Bob"
print(len(name1) > len(name2))  # True (5 > 3)`}</pre>
          </div>
        </section>

        {/* Logical Operators */}
        <section className="py-topic-section">
          <h2>🧠 Logical Operators</h2>
          <p>
            Logical operators combine conditional statements and return boolean results.
          </p>
          
          <div className="py-code-block">
            <pre>{`# Logical operators
a = True
b = False

print(a and b)   # Logical AND: False
print(a or b)    # Logical OR: True
print(not a)     # Logical NOT: False
print(not b)     # Logical NOT: True

# Practical examples
age = 25
has_license = True
is_sober = True

# Can drive if all conditions are met
can_drive = age >= 18 and has_license and is_sober
print(f"Can drive: {can_drive}")  # True

# Voting eligibility
is_citizen = True
age = 17
can_vote = is_citizen and age >= 18
print(f"Can vote: {can_vote}")  # False

# Complex conditions
temperature = 75
is_sunny = True
has_umbrella = False

good_weather = (temperature > 70 and is_sunny) or (temperature > 60 and not has_umbrella)
print(f"Good weather for walk: {good_weather}")  # True`}</pre>
          </div>

          <div className="py-info-box">
            <h3>⚡ Short-Circuit Evaluation:</h3>
            <p>Python uses short-circuit evaluation for logical operators:</p>
            <ul>
              <li><strong>and:</strong> If first operand is False, second operand isn't evaluated</li>
              <li><strong>or:</strong> If first operand is True, second operand isn't evaluated</li>
            </ul>
          </div>

          <div className="py-code-block">
            <pre>{`# Short-circuit evaluation example
def expensive_function():
    print("This function was called!")
    return True

# This won't print anything because False and ... is always False
result1 = False and expensive_function()

# This will print because True or ... is always True, but the function isn't called
result2 = True or expensive_function()

print(f"Result 1: {result1}, Result 2: {result2}")`}</pre>
          </div>
        </section>

        {/* Assignment Operators */}
        <section className="py-topic-section">
          <h2>📝 Assignment Operators</h2>
          <p>
            Assignment operators assign values to variables and can combine assignment with arithmetic operations.
          </p>
          
          <div className="py-code-block">
            <pre>{`# Basic assignment
x = 10
print(x)  # 10

# Arithmetic assignment operators
x += 5   # Same as: x = x + 5
print(x)  # 15

x -= 3   # Same as: x = x - 3
print(x)  # 12

x *= 2   # Same as: x = x * 2
print(x)  # 24

x /= 4   # Same as: x = x / 4
print(x)  # 6.0

x //= 2  # Same as: x = x // 2
print(x)  # 3.0

x %= 2   # Same as: x = x % 2
print(x)  # 1.0

x **= 3  # Same as: x = x ** 3
print(x)  # 1.0

# String concatenation with assignment
message = "Hello"
message += " World"
print(message)  # "Hello World"

# List extension with assignment
numbers = [1, 2, 3]
numbers += [4, 5]
print(numbers)  # [1, 2, 3, 4, 5]`}</pre>
          </div>

          <h3>Multiple Assignment</h3>
          <div className="py-code-block">
            <pre>{`# Multiple assignment
a = b = c = 10
print(a, b, c)  # 10 10 10

# Tuple unpacking assignment
x, y = 5, 10
print(f"x={x}, y={y}")  # x=5, y=10

# Swapping variables
x, y = y, x
print(f"x={x}, y={y}")  # x=10, y=5

# Extended unpacking (Python 3.0+)
numbers = [1, 2, 3, 4, 5]
first, *middle, last = numbers
print(f"First: {first}, Middle: {middle}, Last: {last}")
# First: 1, Middle: [2, 3, 4], Last: 5`}</pre>
          </div>
        </section>

        {/* Identity and Membership Operators */}
        <section className="py-topic-section">
          <h2>🔍 Identity and Membership Operators</h2>
          
          <h3>Identity Operators</h3>
          <p>Identity operators compare the memory locations of objects, not their values.</p>
          
          <div className="py-code-block">
            <pre>{`# Identity operators: is, is not
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)   # True (same values)
print(a is b)   # False (different objects in memory)
print(a is c)   # True (same object)

# Common use with None
value = None
print(value is None)      # True (preferred way)
print(value == None)      # True (but not recommended)

# Identity with immutable objects
x = 5
y = 5
print(x is y)  # True (Python caches small integers)

x = 1000
y = 1000
print(x is y)  # May be False (depends on Python implementation)`}</pre>
          </div>

          <h3>Membership Operators</h3>
          <p>Membership operators test if a value exists in a sequence.</p>
          
          <div className="py-code-block">
            <pre>{`# Membership operators: in, not in

# Lists
fruits = ["apple", "banana", "orange"]
print("apple" in fruits)        # True
print("grape" not in fruits)    # True

# Strings
text = "Python programming"
print("Python" in text)         # True
print("Java" not in text)       # True
print("prog" in text)           # True (substring)

# Dictionaries (checks keys)
student = {"name": "Alice", "age": 20, "grade": "A"}
print("name" in student)         # True
print("Alice" in student)        # False (Alice is a value, not a key)
print("height" not in student)   # True

# Sets
numbers = {1, 2, 3, 4, 5}
print(3 in numbers)              # True
print(6 not in numbers)          # True

# Practical example: input validation
def validate_grade(grade):
    valid_grades = ["A", "B", "C", "D", "F"]
    if grade in valid_grades:
        return f"Valid grade: {grade}"
    else:
        return f"Invalid grade: {grade}"

print(validate_grade("A"))  # Valid grade: A
print(validate_grade("X"))  # Invalid grade: X`}</pre>
          </div>
        </section>

        {/* Operator Precedence */}
        <section className="py-topic-section">
          <h2>🎯 Operator Precedence and Associativity</h2>
          <p>
            When multiple operators are used in an expression, Python follows specific rules 
            to determine the order of operations.
          </p>
          
          <div className="py-code-block">
            <pre>{`# Operator precedence (from highest to lowest)
result = 2 + 3 * 4          # 14, not 20 (multiplication first)
result = (2 + 3) * 4        # 20 (parentheses override precedence)

result = 2 ** 3 ** 2        # 512 (2 ** (3 ** 2)), right associative
result = (2 ** 3) ** 2      # 64 (8 ** 2)

# Complex expression
x = 5
y = 3
z = 2
result = x + y * z ** 2 - 1  # 5 + 3 * 4 - 1 = 16
print(result)

# Using parentheses for clarity
result = x + (y * (z ** 2)) - 1  # Same as above, but clearer
print(result)

# Logical operator precedence
result = True or False and False  # True (and has higher precedence)
result = (True or False) and False  # False (parentheses change order)

# Comparison chaining
age = 25
result = 18 <= age < 65 and age != 30  # True
print(f"Eligible: {result}")`}</pre>
          </div>

          <div className="py-info-box">
            <h3>📋 Precedence Order (Highest to Lowest):</h3>
            <ol>
              <li>Parentheses ()</li>
              <li>Exponentiation **</li>
              <li>Unary +, -</li>
              <li>Multiplication *, Division /, Floor division //, Modulus %</li>
              <li>Addition +, Subtraction -</li>
              <li>Comparison operators ==, !=, &lt;, &gt;, &lt;=, &gt;=</li>
              <li>Identity operators is, is not</li>
              <li>Membership operators in, not in</li>
              <li>Logical NOT not</li>
              <li>Logical AND and</li>
              <li>Logical OR or</li>
            </ol>
          </div>
        </section>

        {/* Expressions and Evaluation */}
        <section className="py-topic-section">
          <h2>🔄 Expressions and Evaluation</h2>
          <p>
            An expression is a combination of values, variables, and operators that Python 
            can evaluate to produce a result.
          </p>
          
          <div className="py-code-block">
            <pre>{`# Simple expressions
age = 25
next_year_age = age + 1

# Complex expressions
import math

# Quadratic formula: (-b ± √(b²-4ac)) / 2a
a, b, c = 1, -5, 6  # x² - 5x + 6 = 0
discriminant = b**2 - 4*a*c
root1 = (-b + math.sqrt(discriminant)) / (2*a)
root2 = (-b - math.sqrt(discriminant)) / (2*a)
print(f"Roots: {root1}, {root2}")  # Roots: 3.0, 2.0

# Conditional expressions (ternary operator)
age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # adult

# Multiple conditional expressions
grade = 85
letter_grade = "A" if grade >= 90 else "B" if grade >= 80 else "C" if grade >= 70 else "F"
print(letter_grade)  # B

# Expression in function calls
numbers = [1, 2, 3, 4, 5]
total = sum(x**2 for x in numbers)  # Sum of squares
print(total)  # 55

# Boolean expressions for control flow
username = "admin"
password = "secret123"
is_authenticated = username == "admin" and len(password) >= 8
print(f"Authenticated: {is_authenticated}")  # True`}</pre>
          </div>
        </section>

        {/* Bitwise Operators */}
        <section className="py-topic-section">
          <h2>💻 Bitwise Operators</h2>
          <p>
            Bitwise operators work on the binary representation of numbers. They're useful 
            for low-level programming and certain algorithms.
          </p>
          
          <div className="py-code-block">
            <pre>{`# Bitwise operators
a = 60  # 111100 in binary
b = 13  # 001101 in binary

print(f"a = {a:08b}")  # 00111100
print(f"b = {b:08b}")  # 00001101

print(f"a & b = {a & b}")   # Bitwise AND: 12 (001100)
print(f"a | b = {a | b}")   # Bitwise OR: 61 (111101)
print(f"a ^ b = {a ^ b}")   # Bitwise XOR: 49 (110001)
print(f"~a = {~a}")         # Bitwise NOT: -61
print(f"a << 2 = {a << 2}") # Left shift: 240 (multiply by 4)
print(f"a >> 2 = {a >> 2}") # Right shift: 15 (divide by 4)

# Practical uses
# Check if number is even (last bit is 0)
def is_even_bitwise(n):
    return (n & 1) == 0

print(is_even_bitwise(10))  # True
print(is_even_bitwise(7))   # False

# Fast multiplication/division by powers of 2
def multiply_by_8(n):
    return n << 3  # Left shift by 3 (2^3 = 8)

def divide_by_4(n):
    return n >> 2  # Right shift by 2 (2^2 = 4)

print(multiply_by_8(5))  # 40
print(divide_by_4(20))   # 5

# Toggle a bit
def toggle_bit(n, position):
    return n ^ (1 << position)

number = 10  # 1010 in binary
result = toggle_bit(number, 1)  # Toggle bit at position 1
print(f"{number} -> {result}")  # 10 -> 8 (1010 -> 1000)`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Operator Best Practices:</h3>
            <ul>
              <li><strong>Use parentheses</strong> for clarity, even when not required</li>
              <li><strong>Use 'is' and 'is not'</strong> for comparing with None</li>
              <li><strong>Prefer 'not in'</strong> over 'not ... in'</li>
              <li><strong>Use chained comparisons</strong> when appropriate</li>
              <li><strong>Be careful with floating-point</strong> comparisons</li>
              <li><strong>Use augmented assignment</strong> operators for readability</li>
            </ul>
          </div>

          <div className="py-code-block">
            <pre>{`# Good practices
# Use parentheses for clarity
result = (a + b) * (c - d)

# Compare with None using 'is'
if value is None:
    print("Value is None")

# Use 'not in' for membership testing
if item not in valid_items:
    print("Invalid item")

# Chained comparisons
if 0 <= index < len(my_list):
    print(my_list[index])

# Floating-point comparison
import math
a = 0.1 + 0.2
b = 0.3
if math.isclose(a, b):  # Better than a == b
    print("Equal")

# Augmented assignment
total += value  # Better than total = total + value`}</pre>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a calculator that uses all arithmetic operators</li>
              <li>Write a function to check if a year is a leap year using logical operators</li>
              <li>Build a grade classifier using comparison and logical operators</li>
              <li>Create a password validator using membership and comparison operators</li>
              <li>Write a function to swap two numbers without using a temporary variable</li>
              <li>Implement a simple voting system with eligibility checks</li>
              <li>Create a number guessing game using comparison operators</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OperatorsAndExpressions;
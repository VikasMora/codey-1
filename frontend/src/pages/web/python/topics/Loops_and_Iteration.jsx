import React from 'react';
import '../Navbarweb.css';

function LoopsAndIteration() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>🔄 Loops and Iteration</h1>
        <p className="py-topic-subtitle">
          Learn for loops, while loops, and iteration in Python
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>🎯 What are Loops and Iteration?</h2>
          <p>
            Loops allow you to execute a block of code repeatedly. They are essential for tasks 
            like processing collections of data, automating repetitive operations, and creating 
            interactive programs. Python provides two main types of loops: <strong>for loops</strong> 
            for iterating over sequences and <strong>while loops</strong> for repeating based on conditions.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Concepts:</h3>
            <ul>
              <li><strong>Iteration:</strong> The process of repeating a set of instructions</li>
              <li><strong>Iterable:</strong> An object that can be iterated over (lists, strings, ranges)</li>
              <li><strong>Loop Control:</strong> Using break, continue, and else with loops</li>
              <li><strong>Nested Loops:</strong> Loops inside other loops</li>
            </ul>
          </div>
        </section>

        {/* For Loops */}
        <section className="py-topic-section">
          <h2>🔁 For Loops</h2>
          <p>For loops are used to iterate over sequences like lists, strings, tuples, and ranges.</p>
          
          <h3>Basic For Loop Syntax</h3>
          <div className="py-code-block">
            <pre>{`# Basic for loop with a list
fruits = ["apple", "banana", "cherry", "date"]

for fruit in fruits:
    print(f"I like {{fruit}}")

# Output:
# I like apple
# I like banana  
# I like cherry
# I like date

# For loop with a string
message = "Hello"

for char in message:
    print(f"Character: {{char}}")

# Output:
# Character: H
# Character: e
# Character: l
# Character: l
# Character: o

# For loop with range()
print("Counting from 1 to 5:")
for i in range(1, 6):
    print(f"Count: {{i}}")

# For loop with range() - different patterns
print("\\nEven numbers from 0 to 10:")
for num in range(0, 11, 2):  # start, stop, step
    print(num, end=" ")  # 0 2 4 6 8 10

print("\\nCountdown from 5 to 1:")
for num in range(5, 0, -1):  # counting backwards
    print(num, end=" ")  # 5 4 3 2 1

# For loop with enumerate() - getting index and value
colors = ["red", "green", "blue"]

print("\\nColors with their positions:")
for index, color in enumerate(colors):
    print(f"Position {{index}}: {{color}}")

# Starting enumerate from a different number
print("\\nColors numbered from 1:")
for position, color in enumerate(colors, 1):
    print(f"{{position}}. {{color}}")`}</pre>
          </div>

          <h3>Iterating Over Different Data Types</h3>
          <div className="py-code-block">
            <pre>{`# Iterating over a tuple
coordinates = (10, 20, 30)
for coord in coordinates:
    print(f"Coordinate: {{coord}}")

# Iterating over a dictionary
student_grades = {{"Alice": 95, "Bob": 87, "Charlie": 92}}

# Iterate over keys
print("Students:")
for name in student_grades:
    print(f"- {{name}}")

# Iterate over values  
print("\\nGrades:")
for grade in student_grades.values():
    print(f"- {{grade}}")

# Iterate over key-value pairs
print("\\nStudent grades:")
for name, grade in student_grades.items():
    print(f"{{name}}: {{grade}}")

# Iterating over a set
unique_numbers = {{1, 2, 3, 4, 5}}
for num in unique_numbers:
    print(f"Number: {{num}}")

# Nested iteration - list of lists
matrix = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
]

print("\\nMatrix elements:")
for row in matrix:
    for element in row:
        print(element, end=" ")
    print()  # New line after each row

# Using zip() to iterate over multiple sequences
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
cities = ["New York", "London", "Tokyo"]

print("\\nPerson information:")
for name, age, city in zip(names, ages, cities):
    print(f"{{name}}, {{age}} years old, lives in {{city}}")

# Unpacking in for loops
points = [(1, 2), (3, 4), (5, 6)]
for x, y in points:
    print(f"Point at ({{x}}, {{y}})")`}</pre>
          </div>
        </section>

        {/* While Loops */}
        <section className="py-topic-section">
          <h2>⏰ While Loops</h2>
          <p>While loops repeat as long as a condition is True. They're useful when you don't know in advance how many iterations you need.</p>
          
          <div className="py-code-block">
            <pre>{`# Basic while loop
count = 0
while count < 5:
    print(f"Count is {{count}}")
    count += 1  # Don't forget to update the condition variable!

print("Loop finished")

# User input validation with while loop
while True:
    user_input = input("Enter a number (or 'quit' to exit): ")
    
    if user_input.lower() == 'quit':
        break
    
    try:
        number = float(user_input)
        print(f"You entered: {{number}}")
        print(f"Square: {{number ** 2}}")
    except ValueError:
        print("That's not a valid number. Try again.")

# Countdown timer
countdown = 10
print("Countdown:")
while countdown &gt; 0:
    print(f"{{countdown}}...")
    countdown -= 1
print("Blast off! 🚀")

# Finding elements with while loop
numbers = [2, 4, 7, 8, 10, 15]
target = 8
index = 0
found = False

while index &lt; len(numbers) and not found:
    if numbers[index] == target:
        print(f"Found {{target}} at index {{index}}")
        found = True
    else:
        index += 1

if not found:
    print(f"{{target}} not found in the list")

# Accumulating values
total = 0
num = 1
while num &lt;= 100:
    total += num
    num += 1
print(f"Sum of numbers 1 to 100: {{total}}")

# Password attempts
max_attempts = 3
attempts = 0
correct_password = "python123"

while attempts &lt; max_attempts:
    password = input("Enter password: ")
    
    if password == correct_password:
        print("Access granted!")
        break
    else:
        attempts += 1
        remaining = max_attempts - attempts
        if remaining &gt; 0:
            print(f"Wrong password. {{remaining}} attempts remaining.")
        else:
            print("Access denied. Too many failed attempts.")

# Menu system with while loop
while True:
    print("\\n--- Calculator Menu ---")
    print("1. Add")
    print("2. Subtract") 
    print("3. Multiply")
    print("4. Divide")
    print("5. Exit")
    
    choice = input("Choose an option (1-5): ")
    
    if choice == "5":
        print("Goodbye!")
        break
    elif choice in ["1", "2", "3", "4"]:
        try:
            a = float(input("Enter first number: "))
            b = float(input("Enter second number: "))
            
            if choice == "1":
                result = a + b
                print(f"Result: {{a}} + {{b}} = {{result}}")
            elif choice == "2":
                result = a - b
                print(f"Result: {{a}} - {{b}} = {{result}}")
            elif choice == "3":
                result = a * b
                print(f"Result: {{a}} × {{b}} = {{result}}")
            elif choice == "4":
                if b != 0:
                    result = a / b
                    print(f"Result: {{a}} ÷ {{b}} = {{result}}")
                else:
                    print("Error: Cannot divide by zero!")
        except ValueError:
            print("Error: Please enter valid numbers")
    else:
        print("Invalid choice. Please try again.")`}</pre>
          </div>
        </section>

        {/* Loop Control Statements */}
        <section className="py-topic-section">
          <h2>🎮 Loop Control Statements</h2>
          <p>Python provides <code>break</code>, <code>continue</code>, and <code>else</code> statements to control loop execution.</p>
          
          <h3>Break Statement</h3>
          <div className="py-code-block">
            <pre>{`# Break exits the loop immediately
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print("Looking for the first number greater than 6:")
for num in numbers:
    if num &gt; 6:
        print(f"Found it: {{num}}")
        break  # Exit the loop
    print(f"Checking: {{num}}")

# Break in nested loops only exits the inner loop
print("\\nBreak in nested loops:")
for i in range(3):
    print(f"Outer loop: {{i}}")
    for j in range(5):
        if j == 2:
            print(f"  Breaking inner loop at j={{j}}")
            break
        print(f"  Inner loop: {{j}}")

# Using break with while loops
print("\\nGuessing game:")
secret_number = 7
while True:
    guess = int(input("Guess a number (1-10): "))
    
    if guess == secret_number:
        print("Congratulations! You got it!")
        break
    elif guess &lt; secret_number:
        print("Too low!")
    else:
        print("Too high!")

# Finding first occurrence
names = ["Alice", "Bob", "Charlie", "David", "Bob", "Eve"]
target = "Bob"

print(f"\\nLooking for first occurrence of {{target}}:")
for index, name in enumerate(names):
    if name == target:
        print(f"First {{target}} found at index {{index}}")
        break
else:
    print(f"{{target}} not found")`}</pre>
          </div>

          <h3>Continue Statement</h3>
          <div className="py-code-block">
            <pre>{`# Continue skips the rest of the current iteration
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print("Odd numbers only:")
for num in numbers:
    if num % 2 == 0:  # Skip even numbers
        continue
    print(f"Odd number: {{num}}")

# Processing valid data only
data = [10, -5, 0, 25, -3, 15, 0, 8]

print("\\nProcessing positive numbers only:")
total = 0
count = 0

for value in data:
    if value &lt;= 0:
        print(f"Skipping {{value}} (not positive)")
        continue
    
    # This code only runs for positive numbers
    total += value
    count += 1
    print(f"Added {{value}}, running total: {{total}}")

if count &gt; 0:
    average = total / count
    print(f"\\nAverage of positive numbers: {{average}}")

# Skip invalid input
scores = ["95", "87", "invalid", "92", "", "78", "abc", "85"]

print("\\nProcessing valid scores:")
valid_scores = []

for score in scores:
    if not score or not score.isdigit():
        print(f"Skipping invalid score: '{{score}}'")
        continue
    
    score_int = int(score)
    if score_int &lt; 0 or score_int &gt; 100:
        print(f"Skipping out-of-range score: {{score_int}}")
        continue
    
    valid_scores.append(score_int)
    print(f"Valid score added: {{score_int}}")

print(f"Valid scores: {{valid_scores}}")

# Continue with while loops
print("\\nEnter numbers (negative to skip, 0 to stop):")
sum_positive = 0

while True:
    try:
        num = float(input("Enter a number: "))
        
        if num == 0:
            break
        
        if num &lt; 0:
            print("Negative number skipped")
            continue
        
        sum_positive += num
        print(f"Added {{num}}, current sum: {{sum_positive}}")
        
    except ValueError:
        print("Invalid input, please enter a number")
        continue

print(f"Final sum of positive numbers: {{sum_positive}}")`}</pre>
          </div>

          <h3>Loop Else Clause</h3>
          <div className="py-code-block">
            <pre>{`# The else clause runs if the loop completes normally (no break)

# Searching with for-else
numbers = [2, 4, 6, 8, 10]
target = 5

print(f"Searching for {{target}} in {{numbers}}:")
for num in numbers:
    if num == target:
        print(f"Found {{target}}!")
        break
    print(f"Checking {{num}}...")
else:
    print(f"{{target}} not found in the list")

# Prime number checker using for-else
def is_prime(n):
    if n &lt; 2:
        return False
    
    print(f"\\nChecking if {{n}} is prime:")
    for i in range(2, int(n ** 0.5) + 1):
        print(f"  Testing divisor {{i}}")
        if n % i == 0:
            print(f"  {{n}} is divisible by {{i}} - not prime")
            return False
    else:
        print(f"  No divisors found - {{n}} is prime!")
        return True

# Test the function
test_numbers = [17, 18, 19, 20]
for num in test_numbers:
    result = is_prime(num)
    print(f"{{num}} is {{'prime' if result else 'not prime'}}")

# While-else example
print("\\nPassword validation with while-else:")
max_attempts = 3
attempts = 0
correct_password = "secret"

while attempts &lt; max_attempts:
    password = input(f"Enter password (attempt {{attempts + 1}}/{{max_attempts}}): ")
    
    if password == correct_password:
        print("Login successful!")
        break
    
    attempts += 1
    print("Wrong password")
else:
    print("Maximum attempts exceeded. Account locked!")

# Validation loop with else
print("\\nEnter valid email addresses (empty to finish):")
valid_emails = []

while True:
    email = input("Email: ").strip()
    
    if not email:  # Empty input to finish
        break
    
    if "@" in email and "." in email:
        valid_emails.append(email)
        print(f"Valid email added: {{email}}")
    else:
        print("Invalid email format")
        continue
else:
    # This won't execute because we break out of the loop
    print("This message won't appear")

print(f"\\nCollected emails: {{valid_emails}}")`}</pre>
          </div>
        </section>

        {/* Nested Loops */}
        <section className="py-topic-section">
          <h2>🏢 Nested Loops</h2>
          <p>Loops inside other loops are called nested loops. They're useful for processing multi-dimensional data.</p>
          
          <div className="py-code-block">
            <pre>{`# Basic nested loops - multiplication table
print("Multiplication Table (1-5):")
print("   ", end="")
for j in range(1, 6):
    print(f"{{j:4}}", end="")
print()

for i in range(1, 6):
    print(f"{{i}}: ", end="")
    for j in range(1, 6):
        result = i * j
        print(f"{{result:4}}", end="")
    print()

# Pattern printing with nested loops
print("\\nStar patterns:")

# Right triangle
print("Right triangle:")
for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()

# Pyramid
print("\\nPyramid:")
for i in range(1, 6):
    # Print spaces
    for j in range(5 - i):
        print(" ", end="")
    # Print stars
    for k in range(2 * i - 1):
        print("*", end="")
    print()

# Processing 2D lists (matrix operations)
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

print("\\nMatrix:")
for row in matrix:
    for element in row:
        print(f"{{element:4}}", end="")
    print()

# Find maximum element in matrix
max_value = matrix[0][0]
max_row, max_col = 0, 0

for i in range(len(matrix)):
    for j in range(len(matrix[i])):
        if matrix[i][j] &gt; max_value:
            max_value = matrix[i][j]
            max_row, max_col = i, j

print(f"\\nMaximum value {{max_value}} found at row {{max_row}}, column {{max_col}}")

# Sum of each row
print("\\nRow sums:")
for i, row in enumerate(matrix):
    row_sum = 0
    for element in row:
        row_sum += element
    print(f"Row {{i}}: {{row_sum}}")

# Nested loops with different sequences
colors = ["red", "green", "blue"]
sizes = ["small", "medium", "large"]

print("\\nProduct combinations:")
for color in colors:
    for size in sizes:
        print(f"{{color}} {{size}} shirt")

# Dictionary iteration with nested loops
inventory = {{
    "fruits": ["apple", "banana", "orange"],
    "vegetables": ["carrot", "broccoli", "spinach"],
    "dairy": ["milk", "cheese", "yogurt"]
}}

print("\\nInventory:")
for category, items in inventory.items():
    print(f"\\n{{category.title()}}:")
    for item in items:
        print(f"  - {{item}}")

# Breaking out of nested loops using flags
print("\\nFinding target in matrix:")
target_matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

target = 5
found = False

for i in range(len(target_matrix)):
    for j in range(len(target_matrix[i])):
        if target_matrix[i][j] == target:
            print(f"Found {{target}} at position ({{i}}, {{j}})")
            found = True
            break
    if found:
        break
else:
    print(f"{{target}} not found in matrix")

# Game board example
board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    [' ', 'X', 'O']
]

print("\\nTic-tac-toe board:")
for i, row in enumerate(board):
    for j, cell in enumerate(row):
        print(f" {{cell}} ", end="")
        if j &lt; len(row) - 1:
            print("|", end="")
    print()
    if i &lt; len(board) - 1:
        print("-----------")`}</pre>
          </div>
        </section>

        {/* List Comprehensions */}
        <section className="py-topic-section">
          <h2>📋 List Comprehensions</h2>
          <p>List comprehensions provide a concise way to create lists using loops and conditions.</p>
          
          <div className="py-code-block">
            <pre>{`# Basic list comprehension syntax
# [expression for item in iterable]

# Traditional way with for loop
squares_traditional = []
for x in range(1, 6):
    squares_traditional.append(x ** 2)
print(f"Traditional squares: {{squares_traditional}}")

# List comprehension way
squares_comprehension = [x ** 2 for x in range(1, 6)]
print(f"Comprehension squares: {{squares_comprehension}}")

# List comprehension with strings
names = ["alice", "bob", "charlie", "david"]
capitalized = [name.capitalize() for name in names]
print(f"Capitalized names: {{capitalized}}")

# List comprehension with conditions
# [expression for item in iterable if condition]

# Even numbers only
numbers = range(1, 11)
evens = [x for x in numbers if x % 2 == 0]
print(f"Even numbers: {{evens}}")

# Squares of even numbers
even_squares = [x ** 2 for x in numbers if x % 2 == 0]
print(f"Squares of evens: {{even_squares}}")

# Filtering and transforming strings
words = ["hello", "world", "python", "programming", "code"]
long_words_upper = [word.upper() for word in words if len(word) &gt; 4]
print(f"Long words (uppercase): {{long_words_upper}}")

# Conditional expressions in list comprehensions
# [expression_if_true if condition else expression_if_false for item in iterable]

# Positive/negative labels
values = [-2, -1, 0, 1, 2, 3]
labels = ["positive" if x &gt; 0 else "negative" if x &lt; 0 else "zero" for x in values]
print(f"Value labels: {{labels}}")

# Grade classifications
scores = [95, 87, 76, 92, 88, 79, 91]
grades = ["A" if score &gt;= 90 else "B" if score &gt;= 80 else "C" for score in scores]
print(f"Grades: {{grades}}")

# Nested list comprehensions
# Creating a matrix
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print("Generated matrix:")
for row in matrix:
    print(row)

# Flattening a matrix
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [item for sublist in nested_list for item in sublist]
print(f"Flattened list: {{flattened}}")

# More complex nested comprehension
# Coordinates in a grid
coordinates = [(x, y) for x in range(3) for y in range(3) if x != y]
print(f"Coordinates (x ≠ y): {{coordinates}}")

# Working with multiple lists
first_names = ["John", "Jane", "Bob"]
last_names = ["Doe", "Smith", "Johnson"]
full_names = [f"{{first}} {{last}}" for first in first_names for last in last_names]
print(f"All name combinations: {{full_names}}")

# Dictionary comprehension (bonus)
# {{key: value for item in iterable}}

# Square dictionary
square_dict = {{x: x**2 for x in range(1, 6)}}
print(f"Square dictionary: {{square_dict}}")

# Word lengths
word_lengths = {{word: len(word) for word in words}}
print(f"Word lengths: {{word_lengths}}")

# Set comprehension (bonus)
# {{expression for item in iterable}}

# Unique word lengths
unique_lengths = {{len(word) for word in words}}
print(f"Unique word lengths: {{unique_lengths}}")

# Performance comparison
import time

# Timing traditional loop vs comprehension
start_time = time.time()
traditional_result = []
for i in range(1000):
    if i % 2 == 0:
        traditional_result.append(i ** 2)
traditional_time = time.time() - start_time

start_time = time.time()
comprehension_result = [i ** 2 for i in range(1000) if i % 2 == 0]
comprehension_time = time.time() - start_time

print(f"\\nPerformance comparison:")
print(f"Traditional loop: {{traditional_time:.6f}} seconds")
print(f"List comprehension: {{comprehension_time:.6f}} seconds")
print(f"Comprehension is {{traditional_time / comprehension_time:.2f}}x faster")`}</pre>
          </div>
        </section>

        {/* Common Patterns and Use Cases */}
        <section className="py-topic-section">
          <h2>🎯 Common Loop Patterns</h2>
          
          <div className="py-code-block">
            <pre>{`# 1. Accumulation Pattern
# Summing values
numbers = [1, 2, 3, 4, 5]
total = 0
for num in numbers:
    total += num
print(f"Sum: {{total}}")

# Product of values
product = 1
for num in numbers:
    product *= num
print(f"Product: {{product}}")

# 2. Counting Pattern
# Count occurrences
text = "hello world"
vowel_count = 0
for char in text:
    if char.lower() in "aeiou":
        vowel_count += 1
print(f"Vowels in '{{text}}': {{vowel_count}}")

# Count by category
grades = ["A", "B", "A", "C", "B", "A", "B"]
grade_counts = {{"A": 0, "B": 0, "C": 0}}
for grade in grades:
    grade_counts[grade] += 1
print(f"Grade distribution: {{grade_counts}}")

# 3. Finding Pattern
# Find maximum
numbers = [45, 23, 67, 89, 12, 56]
max_value = numbers[0]
for num in numbers:
    if num &gt; max_value:
        max_value = num
print(f"Maximum: {{max_value}}")

# Find minimum with index
min_value = numbers[0]
min_index = 0
for i, num in enumerate(numbers):
    if num &lt; min_value:
        min_value = num
        min_index = i
print(f"Minimum {{min_value}} at index {{min_index}}")

# 4. Filtering Pattern
# Filter positive numbers
mixed_numbers = [-3, 5, -1, 8, -7, 2, 0]
positive_numbers = []
for num in mixed_numbers:
    if num &gt; 0:
        positive_numbers.append(num)
print(f"Positive numbers: {{positive_numbers}}")

# Filter valid emails
email_list = ["user@example.com", "invalid-email", "test@test.org", "bad@", "good@domain.co.uk"]
valid_emails = []
for email in email_list:
    if "@" in email and "." in email.split("@")[1]:
        valid_emails.append(email)
print(f"Valid emails: {{valid_emails}}")

# 5. Transformation Pattern
# Convert temperatures
celsius_temps = [0, 25, 30, 15, -5]
fahrenheit_temps = []
for celsius in celsius_temps:
    fahrenheit = (celsius * 9/5) + 32
    fahrenheit_temps.append(fahrenheit)
print(f"Celsius: {{celsius_temps}}")
print(f"Fahrenheit: {{fahrenheit_temps}}")

# Clean and process data
raw_data = ["  Alice  ", "BOB", "charlie", "  DAVID  "]
clean_names = []
for name in raw_data:
    clean_name = name.strip().title()
    clean_names.append(clean_name)
print(f"Cleaned names: {{clean_names}}")

# 6. Validation Pattern
# Validate user input
def get_valid_age():
    while True:
        try:
            age_input = input("Enter your age: ")
            age = int(age_input)
            if 0 &lt;= age &lt;= 150:
                return age
            else:
                print("Age must be between 0 and 150")
        except ValueError:
            print("Please enter a valid number")

# Get valid menu choice
def get_menu_choice(options):
    while True:
        print("\\nChoose an option:")
        for i, option in enumerate(options, 1):
            print(f"{{i}}. {{option}}")
        
        try:
            choice = int(input("Your choice: "))
            if 1 &lt;= choice &lt;= len(options):
                return choice - 1  # Return 0-based index
            else:
                print(f"Please choose between 1 and {{len(options)}}")
        except ValueError:
            print("Please enter a valid number")

# 7. Batch Processing Pattern
# Process files in batches
files = ["file1.txt", "file2.txt", "file3.txt", "file4.txt", "file5.txt"]
batch_size = 2

for i in range(0, len(files), batch_size):
    batch = files[i:i + batch_size]
    print(f"Processing batch {{i//batch_size + 1}}: {{batch}}")
    # Simulate processing
    for filename in batch:
        print(f"  Processing {{filename}}...")

# 8. Progress Tracking Pattern
import time

def process_with_progress(items):
    total_items = len(items)
    for i, item in enumerate(items):
        # Simulate work
        time.sleep(0.1)
        
        # Calculate progress
        progress = (i + 1) / total_items * 100
        print(f"\\rProgress: {{progress:.1f}}% ({{i + 1}}/{{total_items}})", end="")
    
    print("\\nProcessing complete!")

# Example usage
# process_with_progress(range(10))

# 9. Event-driven Pattern
def simulate_sensor_readings():
    import random
    
    readings = []
    for _ in range(10):
        temperature = random.uniform(18, 25)
        humidity = random.uniform(40, 70)
        readings.append((temperature, humidity))
    
    print("Sensor readings:")
    for i, (temp, hum) in enumerate(readings):
        print(f"Reading {{i+1}}: {{temp:.1f}}°C, {{hum:.1f}}%")
        
        # Alert conditions
        if temp &gt; 24:
            print("  ⚠️  High temperature alert!")
        if hum &lt; 45:
            print("  ⚠️  Low humidity alert!")

simulate_sensor_readings()`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Loop Best Practices:</h3>
            <ul>
              <li><strong>Choose the right loop type:</strong> Use for loops for known sequences, while loops for conditions</li>
              <li><strong>Avoid infinite loops:</strong> Always ensure loop conditions will eventually become False</li>
              <li><strong>Use meaningful variable names:</strong> Make loop variables descriptive</li>
              <li><strong>Keep loops simple:</strong> Extract complex logic into functions</li>
              <li><strong>Consider list comprehensions:</strong> For simple transformations and filtering</li>
              <li><strong>Use enumerate():</strong> When you need both index and value</li>
              <li><strong>Use zip():</strong> For iterating over multiple sequences together</li>
            </ul>
          </div>

          <div className="py-code-block">
            <pre>{`# Good practices examples

# 1. Descriptive variable names
student_grades = [85, 92, 78, 96, 88]

# Bad: unclear variable name
for x in student_grades:
    print(x)

# Good: descriptive variable name
for grade in student_grades:
    print(f"Student grade: {{grade}}")

# 2. Use enumerate when you need the index
scores = [95, 87, 92, 78, 85]

# Bad: manual index tracking
index = 0
for score in scores:
    print(f"Student {{index + 1}}: {{score}}")
    index += 1

# Good: using enumerate
for position, score in enumerate(scores, 1):
    print(f"Student {{position}}: {{score}}")

# 3. Use zip for parallel iteration
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]

# Bad: using indices
for i in range(len(names)):
    print(f"{{names[i]}} is {{ages[i]}} years old")

# Good: using zip
for name, age in zip(names, ages):
    print(f"{{name}} is {{age}} years old")

# 4. Extract complex logic to functions
def process_student_data(students):
    \"\"\"Process student data with proper organization.\"\"\"
    
    def calculate_letter_grade(score):
        if score &gt;= 90:
            return "A"
        elif score &gt;= 80:
            return "B"
        elif score &gt;= 70:
            return "C"
        elif score &gt;= 60:
            return "D"
        else:
            return "F"
    
    def is_passing_grade(score):
        return score &gt;= 60
    
    results = []
    for student_name, score in students.items():
        letter_grade = calculate_letter_grade(score)
        passing = is_passing_grade(score)
        
        results.append({{
            "name": student_name,
            "score": score,
            "grade": letter_grade,
            "passing": passing
        }})
    
    return results

# Usage
students = {{"Alice": 95, "Bob": 87, "Charlie": 72, "David": 55}}
processed_data = process_student_data(students)

for student in processed_data:
    status = "PASS" if student["passing"] else "FAIL"
    print(f"{{student['name']}}: {{student['score']}} ({{student['grade']}}) - {{status}}")

# 5. Safe iteration with error handling
def safe_number_processing(data):
    \"\"\"Safely process a list that might contain invalid data.\"\"\"
    processed = []
    errors = []
    
    for i, item in enumerate(data):
        try:
            # Attempt to convert and process
            number = float(item)
            result = number ** 2
            processed.append(result)
        except (ValueError, TypeError) as e:
            error_msg = f"Item {{i}} ('{{item}}'): {{str(e)}}"
            errors.append(error_msg)
    
    return processed, errors

# Test with mixed data
test_data = ["1", "2.5", "invalid", 4, None, "5.7", ""]
results, error_list = safe_number_processing(test_data)

print(f"Successfully processed: {{results}}")
print(f"Errors encountered: {{error_list}}")

# 6. Memory-efficient processing with generators
def fibonacci_generator(n):
    \"\"\"Generate Fibonacci numbers efficiently.\"\"\"
    a, b = 0, 1
    count = 0
    while count &lt; n:
        yield a
        a, b = b, a + b
        count += 1

# Process large sequences without storing everything in memory
print("First 10 Fibonacci numbers:")
for i, fib_num in enumerate(fibonacci_generator(10)):
    print(f"F({{i}}) = {{fib_num}}")

# 7. Configuration-driven loops
CONFIG = {{
    "max_attempts": 3,
    "valid_grades": ["A", "B", "C", "D", "F"],
    "passing_score": 60
}}

def get_student_grades():
    \"\"\"Collect student grades with configuration.\"\"\"
    grades = []
    
    while len(grades) &lt; 5:  # Collect 5 grades
        attempts = 0
        
        while attempts &lt; CONFIG["max_attempts"]:
            try:
                grade_input = input(f"Enter grade {{len(grades) + 1}}: ")
                
                if grade_input.upper() in CONFIG["valid_grades"]:
                    grades.append(grade_input.upper())
                    break
                elif grade_input.isdigit():
                    score = int(grade_input)
                    if 0 &lt;= score &lt;= 100:
                        letter = "A" if score &gt;= 90 else "B" if score &gt;= 80 else "C" if score &gt;= 70 else "D" if score &gt;= 60 else "F"
                        grades.append(letter)
                        break
                
                print("Invalid grade format")
                attempts += 1
                
            except KeyboardInterrupt:
                print("\\nExiting...")
                return grades
        
        if attempts == CONFIG["max_attempts"]:
            print("Too many invalid attempts, skipping this grade")
    
    return grades

# Example would be: collected_grades = get_student_grades()
print("Grade collection function ready to use")`}</pre>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a program that prints the multiplication table for any number</li>
              <li>Write a number guessing game using a while loop</li>
              <li>Build a simple menu-driven calculator with loop control</li>
              <li>Process a list of student grades and calculate statistics</li>
              <li>Create patterns using nested loops (triangles, diamonds, etc.)</li>
              <li>Write a program that validates and collects user data</li>
              <li>Implement a simple inventory management system</li>
              <li>Create list comprehensions for data transformation tasks</li>
              <li>Build a text-based adventure game using loops</li>
              <li>Write a program that processes CSV-like data using loops</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LoopsAndIteration;
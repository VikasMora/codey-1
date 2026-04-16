import React from 'react';
import '../Navbarweb.css';

function ListComprehensions() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>📝 List Comprehensions</h1>
        <p className="py-topic-subtitle">
          Master concise and efficient list creation techniques
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>🎯 What are List Comprehensions?</h2>
          <p>
            List comprehensions provide a concise way to create lists in Python. They consist of brackets 
            containing an expression followed by a for clause, then zero or more for or if clauses. 
            List comprehensions are more readable, faster, and more Pythonic than traditional for loops 
            for creating lists.
          </p>
          
          <div className="py-highlight-box">
            <h3>Benefits of List Comprehensions:</h3>
            <ul>
              <li><strong>Concise Syntax:</strong> Express complex list operations in a single line</li>
              <li><strong>Better Performance:</strong> Generally faster than equivalent for loops</li>
              <li><strong>Readable Code:</strong> More Pythonic and expressive</li>
              <li><strong>Memory Efficient:</strong> Create lists without intermediate variables</li>
              <li><strong>Functional Style:</strong> Encourages functional programming patterns</li>
              <li><strong>Built-in Filtering:</strong> Combine creation and filtering in one expression</li>
            </ul>
          </div>
        </section>

        {/* Basic Syntax */}
        <section className="py-topic-section">
          <h2>🛠️ Basic Syntax and Examples</h2>
          
          <div className="py-code-block">
            <pre>{`# Basic list comprehension syntax: [expression for item in iterable]

# Traditional approach vs list comprehension
print("Traditional vs List Comprehension:")

# Traditional for loop
traditional_squares = []
for x in range(1, 6):
    traditional_squares.append(x ** 2)

print(f"Traditional approach: {{traditional_squares}}")

# List comprehension
list_comp_squares = [x ** 2 for x in range(1, 6)]
print(f"List comprehension: {{list_comp_squares}}")

# Basic examples
print(f"\\nBasic Examples:")

# Numbers
numbers = [x for x in range(10)]
print(f"Numbers 0-9: {{numbers}}")

# Even numbers
evens = [x for x in range(20) if x % 2 == 0]
print(f"Even numbers 0-18: {{evens}}")

# Squares of odd numbers
odd_squares = [x ** 2 for x in range(10) if x % 2 == 1]
print(f"Squares of odd numbers: {{odd_squares}}")

# String manipulation
words = ["hello", "world", "python", "programming"]
uppercase_words = [word.upper() for word in words]
print(f"Uppercase words: {{uppercase_words}}")

# Length of words
word_lengths = [len(word) for word in words]
print(f"Word lengths: {{word_lengths}}")

# Filter words by length
short_words = [word for word in words if len(word) <= 5]
print(f"Short words (≤5 chars): {{short_words}}")

# Mathematical expressions
powers_of_2 = [2 ** i for i in range(8)]
print(f"Powers of 2: {{powers_of_2}}")

# Working with existing lists
original_numbers = [1, 2, 3, 4, 5]

# Double each number
doubled = [x * 2 for x in original_numbers]
print(f"\\nDoubled numbers: {{doubled}}")

# Add 10 to each number
added_ten = [x + 10 for x in original_numbers]
print(f"Add 10 to each: {{added_ten}}")

# Convert to strings
str_numbers = [str(x) for x in original_numbers]
print(f"As strings: {{str_numbers}}")

# Boolean conditions
temperatures = [20, 25, 30, 18, 35, 22, 28]
hot_days = [temp for temp in temperatures if temp > 25]
print(f"\\nHot temperatures (>25°C): {{hot_days}}")

# Temperature conversion (Celsius to Fahrenheit)
fahrenheit = [temp * 9/5 + 32 for temp in temperatures]
print(f"Fahrenheit temperatures: {{fahrenheit}}")

# Multiple conditions
ideal_temps = [temp for temp in temperatures if 20 <= temp <= 30]
print(f"Ideal temperatures (20-30°C): {{ideal_temps}}")

# Working with strings
sentence = "The quick brown fox jumps over the lazy dog"
words_list = sentence.split()

# Words starting with specific letters
t_words = [word for word in words_list if word.lower().startswith('t')]
print(f"\\nWords starting with 't': {{t_words}}")

# Words longer than 4 characters
long_words = [word for word in words_list if len(word) > 4]
print(f"Long words (>4 chars): {{long_words}}")

# First letter of each word
first_letters = [word[0].upper() for word in words_list]
print(f"First letters: {{first_letters}}")

# Palindromes
test_words = ["level", "hello", "radar", "python", "madam", "world"]
palindromes = [word for word in test_words if word == word[::-1]]
print(f"\\nPalindromes: {{palindromes}}")

# Complex expressions
mixed_numbers = [-3, -1, 0, 1, 2, 4, -2, 5]

# Absolute values of negative numbers, squares of positive numbers
processed = [abs(x) if x < 0 else x**2 for x in mixed_numbers]
print(f"\\nProcessed numbers: {{processed}}")

# Categorize numbers
categories = ['negative' if x < 0 else 'zero' if x == 0 else 'positive' for x in mixed_numbers]
print(f"Categories: {{categories}}")`}</pre>
          </div>
        </section>

        {/* Conditional List Comprehensions */}
        <section className="py-topic-section">
          <h2>🔀 Conditional List Comprehensions</h2>
          
          <div className="py-code-block">
            <pre>{`# Conditional list comprehensions with if statements

# Basic filtering with if
numbers = range(1, 21)

# Filter: only even numbers
evens = [x for x in numbers if x % 2 == 0]
print(f"Even numbers: {{evens}}")

# Filter: only numbers divisible by 3
div_by_3 = [x for x in numbers if x % 3 == 0]
print(f"Divisible by 3: {{div_by_3}}")

# Multiple conditions with and/or
print(f"\\nMultiple Conditions:")

# Numbers divisible by both 2 and 3
div_by_2_and_3 = [x for x in numbers if x % 2 == 0 and x % 3 == 0]
print(f"Divisible by 2 AND 3: {{div_by_2_and_3}}")

# Numbers divisible by 2 or 3
div_by_2_or_3 = [x for x in numbers if x % 2 == 0 or x % 3 == 0]
print(f"Divisible by 2 OR 3: {{div_by_2_or_3}}")

# Complex conditions
prime_candidates = [x for x in range(2, 20) if all(x % i != 0 for i in range(2, int(x**0.5) + 1))]
print(f"Prime numbers: {{prime_candidates}}")

# Conditional expressions (ternary operator)
print(f"\\nConditional Expressions:")

# Different transformations based on conditions
mixed_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Square evens, cube odds
transformed = [x**2 if x % 2 == 0 else x**3 for x in mixed_nums]
print(f"Square evens, cube odds: {{transformed}}")

# Categorize numbers
labels = ['small' if x <= 3 else 'medium' if x <= 7 else 'large' for x in mixed_nums]
print(f"Size labels: {{labels}}")

# String processing with conditions
words = ["apple", "BANANA", "Cherry", "DATE", "elderberry"]

# Normalize case: uppercase if originally lowercase, lowercase if originally uppercase
normalized = [word.upper() if word.islower() else word.lower() for word in words]
print(f"\\nNormalized words: {{normalized}}")

# Keep only words with specific properties
vowel_words = [word for word in words if any(vowel in word.lower() for vowel in 'aeiou')]
print(f"Words with vowels: {{vowel_words}}")

# Filter and transform
short_upper = [word.upper() for word in words if len(word) <= 5]
print(f"Short words (≤5) in uppercase: {{short_upper}}")

# Working with nested conditions
students = [
    {{"name": "Alice", "grade": 85, "age": 20}},
    {{"name": "Bob", "grade": 92, "age": 19}},
    {{"name": "Charlie", "grade": 78, "age": 21}},
    {{"name": "Diana", "grade": 96, "age": 20}},
    {{"name": "Eve", "grade": 88, "age": 22}}
]

# High-performing students
high_performers = [student["name"] for student in students if student["grade"] >= 90]
print(f"\\nHigh performers (≥90): {{high_performers}}")

# Young high performers
young_high = [student["name"] for student in students 
              if student["grade"] >= 85 and student["age"] <= 20]
print(f"Young high performers: {{young_high}}")

# Grade categories with names
grade_info = [f"{{s['name']}}: {{'A' if s['grade'] >= 90 else 'B' if s['grade'] >= 80 else 'C'}}"
              for s in students]
print(f"Grade categories: {{grade_info}}")

# Filtering with function calls
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# Prime numbers using function
primes_up_to_30 = [x for x in range(2, 31) if is_prime(x)]
print(f"\\nPrimes up to 30: {{primes_up_to_30}}")

# String validation
emails = ["alice@gmail.com", "invalid-email", "bob@company.com", "@bad.com", "charlie@yahoo.com"]
valid_emails = [email for email in emails if "@" in email and "." in email.split("@")[1]]
print(f"\\nValid emails: {{valid_emails}}")

# Data cleaning
raw_data = ["  123  ", "456", "  ", "789  ", "", "  012"]
clean_numbers = [int(item.strip()) for item in raw_data if item.strip().isdigit()]
print(f"Clean numbers: {{clean_numbers}}")

# Conditional aggregation
sales_data = [
    {{"product": "laptop", "price": 999, "quantity": 2}},
    {{"product": "mouse", "price": 25, "quantity": 10}},
    {{"product": "keyboard", "price": 75, "quantity": 5}},
    {{"product": "monitor", "price": 299, "quantity": 3}}
]

# High-value items (total value > 200)
high_value_items = [
    item['product'] + ": $" + str(item['price'] * item['quantity'])
    for item in sales_data 
    if item['price'] * item['quantity'] > 200
]
print(f"\\nHigh-value items: {{high_value_items}}")

# Complex filtering with multiple criteria
weather_data = [
    {{"day": "Monday", "temp": 22, "humidity": 65, "rain": False}},
    {{"day": "Tuesday", "temp": 18, "humidity": 80, "rain": True}},
    {{"day": "Wednesday", "temp": 25, "humidity": 55, "rain": False}},
    {{"day": "Thursday", "temp": 20, "humidity": 70, "rain": True}},
    {{"day": "Friday", "temp": 28, "humidity": 45, "rain": False}}
]

# Perfect weather days (warm, low humidity, no rain)
perfect_days = [
    day["day"] for day in weather_data 
    if day["temp"] > 22 and day["humidity"] < 60 and not day["rain"]
]
print(f"Perfect weather days: {{perfect_days}}")

# Weather descriptions
weather_desc = [
    f"{{day['day']}}: {{'Nice' if day['temp'] > 20 and not day['rain'] else 'Poor'}}"
    for day in weather_data
]
print(f"Weather descriptions: {{weather_desc}}")

# Nested conditions with error handling
test_data = ["10", "20", "abc", "30", "", "40"]
safe_numbers = [
    int(x) if x.isdigit() else 0 
    for x in test_data 
    if x.strip()  # Only process non-empty strings
]
print(f"\\nSafe number conversion: {{safe_numbers}}")

# Set membership conditions
allowed_users = {{"admin", "user1", "user2", "guest"}}
user_requests = [
    {{"user": "admin", "action": "delete"}},
    {{"user": "hacker", "action": "delete"}},
    {{"user": "user1", "action": "read"}},
    {{"user": "guest", "action": "write"}}
]

valid_requests = [
    f"{{req['user']}} can {{req['action']}}" 
    for req in user_requests 
    if req["user"] in allowed_users
]
print(f"Valid user requests: {{valid_requests}}")`}</pre>
          </div>
        </section>

        {/* Nested List Comprehensions */}
        <section className="py-topic-section">
          <h2>🔄 Nested List Comprehensions</h2>
          
          <div className="py-code-block">
            <pre>{`# Nested list comprehensions for 2D data and complex structures

# Creating 2D lists (matrices)
print("Creating 2D Lists:")

# Simple 3x3 matrix with zeros
matrix_zeros = [[0 for j in range(3)] for i in range(3)]
print(f"3x3 zero matrix: {{matrix_zeros}}")

# 3x4 matrix with row-column sum
matrix_sum = [[i + j for j in range(4)] for i in range(3)]
print(f"Row-column sum matrix: {{matrix_sum}}")

# Identity matrix
size = 4
identity = [[1 if i == j else 0 for j in range(size)] for i in range(size)]
print(f"4x4 identity matrix: {{identity}}")

# Multiplication table
mult_table = [[i * j for j in range(1, 6)] for i in range(1, 6)]
print(f"\\n5x5 multiplication table:")
for row in mult_table:
    print(row)

# Flattening nested lists
print(f"\\nFlattening Nested Lists:")
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Flatten using nested comprehension
flattened = [item for sublist in nested_list for item in sublist]
print(f"Original: {{nested_list}}")
print(f"Flattened: {{flattened}}")

# Flatten with condition (only even numbers)
even_flattened = [item for sublist in nested_list for item in sublist if item % 2 == 0]
print(f"Even numbers only: {{even_flattened}}")

# Working with strings in nested structure
words_by_category = [
    ["apple", "banana", "cherry"],
    ["carrot", "broccoli", "spinach"],
    ["chicken", "beef", "fish"]
]

# All words starting with 'c'
c_words = [word for category in words_by_category for word in category if word.startswith('c')]
print(f"\\nWords starting with 'c': {{c_words}}")

# All words with their categories
word_with_category = [
    f"{{word}} (category {{i}})" 
    for i, category in enumerate(words_by_category) 
    for word in category
]
print(f"Words with categories: {{word_with_category}}")

# Matrix operations
print(f"\\nMatrix Operations:")
matrix_a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
matrix_b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]]

# Element-wise addition
matrix_add = [
    [matrix_a[i][j] + matrix_b[i][j] for j in range(len(matrix_a[0]))] 
    for i in range(len(matrix_a))
]
print(f"Matrix addition:")
for row in matrix_add:
    print(row)

# Transpose matrix
transpose = [[matrix_a[i][j] for i in range(len(matrix_a))] for j in range(len(matrix_a[0]))]
print(f"\\nTranspose of matrix_a:")
for row in transpose:
    print(row)

# Extract diagonal elements
diagonal = [matrix_a[i][i] for i in range(min(len(matrix_a), len(matrix_a[0])))]
print(f"\\nDiagonal elements: {{diagonal}}")

# Complex nested structures
print(f"\\nComplex Nested Structures:")

# Student data processing
students_data = [
    [
        {{"name": "Alice", "grades": [85, 90, 78]}},
        {{"name": "Bob", "grades": [92, 88, 84]}}
    ],
    [
        {{"name": "Charlie", "grades": [76, 82, 90]}},
        {{"name": "Diana", "grades": [95, 91, 87]}}
    ]
]

# All student names
all_names = [
    student["name"] 
    for class_group in students_data 
    for student in class_group
]
print(f"All student names: {{all_names}}")

# All grades flattened
all_grades = [
    grade 
    for class_group in students_data 
    for student in class_group 
    for grade in student["grades"]
]
print(f"All grades: {{all_grades}}")

# Students with average grade > 85
high_avg_students = [
    student["name"]
    for class_group in students_data 
    for student in class_group
    if sum(student["grades"]) / len(student["grades"]) > 85
]
print(f"High average students: {{high_avg_students}}")

# Coordinate grid generation
print(f"\\nCoordinate Grid Generation:")

# All coordinates in a 3x3 grid
coordinates = [(x, y) for x in range(3) for y in range(3)]
print(f"3x3 grid coordinates: {{coordinates}}")

# Only coordinates where x + y is even
even_sum_coords = [(x, y) for x in range(5) for y in range(5) if (x + y) % 2 == 0]
print(f"Even sum coordinates: {{even_sum_coords}}")

# Distance from origin
import math
coord_distances = [
    ((x, y), round(math.sqrt(x**2 + y**2), 2))
    for x in range(-2, 3) 
    for y in range(-2, 3)
    if not (x == 0 and y == 0)  # Exclude origin
]
print(f"\\nCoordinates with distances:")
for coord, dist in coord_distances:
    print(f"  {{coord}}: {{dist}}")

# Nested comprehension with multiple conditions
print(f"\\nComplex Filtering:")

# Generate Pythagorean triples
pythagorean_triples = [
    (a, b, c)
    for a in range(1, 21)
    for b in range(a, 21)  # b >= a to avoid duplicates
    for c in range(b, 21)  # c >= b
    if a**2 + b**2 == c**2
]
print(f"Pythagorean triples (a² + b² = c²): {{pythagorean_triples}}")

# Word combinations
adjectives = ["red", "big", "fast"]
nouns = ["car", "house", "dog"]

# All adjective-noun combinations
combinations = [f"{{adj}} {{noun}}" for adj in adjectives for noun in nouns]
print(f"\\nAdjective-noun combinations: {{combinations}}")

# Only combinations where adjective and noun start with different letters
diff_letter_combos = [
    f"{{adj}} {{noun}}" 
    for adj in adjectives 
    for noun in nouns 
    if adj[0] != noun[0]
]
print(f"Different starting letters: {{diff_letter_combos}}")

# Nested dictionary processing
company_data = {{
    "IT": [
        {{"name": "Alice", "salary": 75000, "experience": 3}},
        {{"name": "Bob", "salary": 85000, "experience": 5}}
    ],
    "HR": [
        {{"name": "Charlie", "salary": 60000, "experience": 2}},
        {{"name": "Diana", "salary": 70000, "experience": 4}}
    ]
}}

# All employee names with their departments
employee_dept = [
    f"{{emp['name']}} ({{dept}})"
    for dept, employees in company_data.items()
    for emp in employees
]
print(f"\\nEmployees with departments: {{employee_dept}}")

# Senior employees (experience >= 4) with salary info
senior_employees = [
    emp['name'] + ": $" + str(emp['salary'])
    for dept, employees in company_data.items()
    for emp in employees
    if emp['experience'] >= 4
]
print(f"Senior employees: {{senior_employees}}")

# Creating lookup tables
print(f"\\nLookup Tables:")

# Character frequency in words
words = ["python", "programming", "language"]
char_frequency = [
    (char, sum(1 for word in words for c in word if c == char))
    for char in set(char for word in words for char in word)
]
print(f"Character frequencies: {{sorted(char_frequency)}}")

# Cross-product with filtering
colors = ["red", "green", "blue"]
sizes = ["S", "M", "L", "XL"]

# Product variants (excluding red XL)
variants = [
    f"{{color}} {{size}}"
    for color in colors
    for size in sizes
    if not (color == "red" and size == "XL")
]
print(f"\\nProduct variants: {{variants}}")`}</pre>
          </div>
        </section>

        {/* Dictionary and Set Comprehensions */}
        <section className="py-topic-section">
          <h2>📚 Dictionary and Set Comprehensions</h2>
          
          <div className="py-code-block">
            <pre>{`# Dictionary and set comprehensions

# Dictionary Comprehensions
print("Dictionary Comprehensions:")

# Basic dictionary comprehension
numbers = range(1, 6)
squares_dict = {{x: x**2 for x in numbers}}
print(f"Squares dictionary: {{squares_dict}}")

# Dictionary with conditional
even_squares = {{x: x**2 for x in range(10) if x % 2 == 0}}
print(f"Even squares: {{even_squares}}")

# String manipulation in dictionary
words = ["apple", "banana", "cherry", "date"]
word_lengths = {{word: len(word) for word in words}}
print(f"Word lengths: {{word_lengths}}")

# Invert dictionary (swap keys and values)
original = {{"a": 1, "b": 2, "c": 3}}
inverted = {{value: key for key, value in original.items()}}
print(f"\\nOriginal: {{original}}")
print(f"Inverted: {{inverted}}")

# Grade letter assignment
students_scores = {{"Alice": 85, "Bob": 92, "Charlie": 78, "Diana": 96}}
grade_letters = {{
    name: "A" if score >= 90 else "B" if score >= 80 else "C"
    for name, score in students_scores.items()
}}
print(f"\\nGrade letters: {{grade_letters}}")

# Filter dictionary
high_scorers = {{name: score for name, score in students_scores.items() if score >= 85}}
print(f"High scorers (≥85): {{high_scorers}}")

# Complex dictionary operations
products = [
    {{"name": "laptop", "price": 999, "category": "electronics"}},
    {{"name": "book", "price": 25, "category": "education"}},
    {{"name": "headphones", "price": 150, "category": "electronics"}},
    {{"name": "notebook", "price": 5, "category": "education"}}
]

# Group by category
by_category = {{
    category: [p["name"] for p in products if p["category"] == category]
    for category in set(p["category"] for p in products)
}}
print(f"\\nGrouped by category: {{by_category}}")

# Price lookup dictionary
price_lookup = {{p["name"]: p["price"] for p in products}}
print(f"Price lookup: {{price_lookup}}")

# Expensive items (price > 100)
expensive_items = {{
    p["name"]: p["price"] 
    for p in products 
    if p["price"] > 100
}}
print(f"Expensive items: {{expensive_items}}")

# Set Comprehensions
print(f"\\nSet Comprehensions:")

# Basic set comprehension
numbers_list = [1, 2, 2, 3, 3, 4, 5, 5]
unique_numbers = {{x for x in numbers_list}}
print(f"Original list: {{numbers_list}}")
print(f"Unique numbers: {{unique_numbers}}")

# Set with condition
even_set = {{x for x in range(20) if x % 2 == 0}}
print(f"Even numbers set: {{even_set}}")

# String processing with sets
sentence = "the quick brown fox jumps over the lazy dog"
unique_chars = {{char.lower() for char in sentence if char.isalpha()}}
print(f"\\nUnique characters: {{sorted(unique_chars)}}")

# Vowels in words
words = ["hello", "world", "python", "programming"]
all_vowels = {{char for word in words for char in word.lower() if char in 'aeiou'}}
print(f"All vowels found: {{all_vowels}}")

# Set of word lengths
word_length_set = {{len(word) for word in words}}
print(f"Unique word lengths: {{sorted(word_length_set)}}")

# Complex set operations
email_domains = [
    "alice@gmail.com", "bob@yahoo.com", "charlie@gmail.com", 
    "diana@company.com", "eve@yahoo.com"
]

# Unique domains
domains = {{email.split('@')[1] for email in email_domains}}
print(f"\\nUnique domains: {{domains}}")

# File extensions
file_names = ["document.pdf", "image.jpg", "script.py", "data.csv", "photo.jpg"]
extensions = {{name.split('.')[-1] for name in file_names if '.' in name}}
print(f"File extensions: {{extensions}}")

# Nested comprehensions with dictionaries and sets
print(f"\\nNested Comprehensions:")

# Students with their subjects
student_subjects = {{
    "Alice": ["Math", "Physics", "Chemistry"],
    "Bob": ["Math", "Biology", "Chemistry"],
    "Charlie": ["Physics", "Biology", "Math"]
}}

# All unique subjects
all_subjects = {{subject for subjects in student_subjects.values() for subject in subjects}}
print(f"All subjects: {{all_subjects}}")

# Students per subject
subject_students = {{
    subject: [name for name, subjects in student_subjects.items() if subject in subjects]
    for subject in all_subjects
}}
print(f"Students per subject: {{subject_students}}")

# Common subjects (taken by all students)
common_subjects = {{
    subject for subject in all_subjects
    if all(subject in subjects for subjects in student_subjects.values())
}}
print(f"Common subjects: {{common_subjects}}")

# Advanced patterns
print(f"\\nAdvanced Patterns:")

# Matrix to dictionary mapping
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
matrix_dict = {{(i, j): matrix[i][j] for i in range(len(matrix)) for j in range(len(matrix[0]))}}
print(f"Matrix as dictionary: {{matrix_dict}}")

# Frequency counting
text = "hello world hello python world programming"
word_freq = {{
    word: text.split().count(word) 
    for word in set(text.split())
}}
print(f"\\nWord frequencies: {{word_freq}}")

# Conditional dictionary with multiple sources
temperatures = [("Monday", 20), ("Tuesday", 18), ("Wednesday", 25), ("Thursday", 22)]
weather_status = {{
    day: "Hot" if temp > 23 else "Warm" if temp > 19 else "Cool"
    for day, temp in temperatures
}}
print(f"Weather status: {{weather_status}}")

# Set operations with comprehensions
set1 = {{x for x in range(10) if x % 2 == 0}}
set2 = {{x for x in range(5, 15) if x % 3 == 0}}

print(f"\\nSet Operations:")
print(f"Even numbers 0-9: {{set1}}")
print(f"Multiples of 3, 5-14: {{set2}}")
print(f"Union: {{set1 | set2}}")
print(f"Intersection: {{set1 & set2}}")

# Combining comprehension types
data = [
    {{"name": "Alice", "scores": [85, 90, 88]}},
    {{"name": "Bob", "scores": [92, 87, 94]}},
    {{"name": "Charlie", "scores": [78, 82, 85]}}
]

# Dictionary of averages
averages = {{
    person["name"]: sum(person["scores"]) / len(person["scores"])
    for person in data
}}
print(f"\\nStudent averages: {{averages}}")

# Set of all unique scores
all_scores = {{score for person in data for score in person["scores"]}}
print(f"All unique scores: {{sorted(all_scores)}}")

# Dictionary of grade classifications
grade_classes = {{
    name: "Excellent" if avg >= 90 else "Good" if avg >= 80 else "Average"
    for name, avg in averages.items()
}}
print(f"Grade classifications: {{grade_classes}}")

# Performance comparison
import time

# Traditional approach
start_time = time.time()
traditional_squares = []
for i in range(10000):
    traditional_squares.append(i**2)
traditional_time = time.time() - start_time

# List comprehension
start_time = time.time()
comp_squares = [i**2 for i in range(10000)]
comp_time = time.time() - start_time

print(f"\\nPerformance Comparison (10,000 squares):")
print(f"Traditional loop: {{traditional_time}} seconds")
print(f"List comprehension: {{comp_time}} seconds")
print(f"Speedup: {{traditional_time / comp_time if comp_time > 0 else 'N/A'}}x")`}</pre>
          </div>
        </section>

        {/* Advanced Techniques */}
        <section className="py-topic-section">
          <h2>🚀 Advanced Techniques and Performance</h2>
          
          <div className="py-code-block">
            <pre>{`# Advanced list comprehension techniques and performance considerations

# Generator expressions (memory efficient)
print("Generator Expressions vs List Comprehensions:")

import sys

# Memory comparison
list_comp = [x**2 for x in range(1000)]
gen_expr = (x**2 for x in range(1000))

print(f"List comprehension memory: {{sys.getsizeof(list_comp)}} bytes")
print(f"Generator expression memory: {{sys.getsizeof(gen_expr)}} bytes")

# Generator expressions for large datasets
def process_large_dataset():
    # Memory-efficient processing of large data
    large_numbers = (x for x in range(1000000) if x % 1000 == 0)
    
    # Process in chunks
    processed_count = 0
    for num in large_numbers:
        if processed_count < 10:  # Process only first 10 for demo
            print(f"Processing: {{num}}")
            processed_count += 1
        else:
            break

print(f"\\nProcessing large dataset:")
process_large_dataset()

# Walrus operator with comprehensions (Python 3.8+)
print(f"\\nWalrus Operator Examples:")

# Traditional approach
words = ["hello", "world", "python", "programming"]
long_words_traditional = []
for word in words:
    length = len(word)
    if length > 5:
        long_words_traditional.append((word, length))

# With walrus operator in comprehension
long_words_walrus = [(word, length) for word in words if (length := len(word)) > 5]

print(f"Long words (traditional): {{long_words_traditional}}")
print(f"Long words (walrus): {{long_words_walrus}}")

# Complex expressions with walrus operator
numbers = [1, 4, 9, 16, 25, 36, 49]
sqrt_results = [(num, sqrt_val) for num in numbers if (sqrt_val := num**0.5) == int(sqrt_val)]
print(f"Perfect squares with roots: {{sqrt_results}}")

# Chaining comprehensions
print(f"\\nChaining Comprehensions:")

# Process data through multiple transformations
raw_data = "  Hello World Python Programming  "

# Chain: split -> filter -> process -> transform
result = [
    word.upper()
    for word in [w.strip() for w in raw_data.split()]
    if len(word) > 4
]
print(f"Processed words: {{result}}")

# More complex chaining
numbers = range(1, 21)
processed = [
    f"{{num}}->{{squared}}"
    for num in numbers
    if (squared := num**2) % 4 == 0  # Only squares divisible by 4
]
print(f"Filtered squared numbers: {{processed}}")

# Function calls in comprehensions
print(f"\\nFunction Calls in Comprehensions:")

def is_palindrome(word):
    return word.lower() == word.lower()[::-1]

def word_score(word):
    return sum(ord(char.lower()) - ord('a') + 1 for char in word if char.isalpha())

words = ["level", "hello", "radar", "python", "madam", "world"]

# Find palindromes
palindromes = [word for word in words if is_palindrome(word)]
print(f"Palindromes: {{palindromes}}")

# Calculate word scores
word_scores = {{word: word_score(word) for word in words}}
print(f"Word scores: {{word_scores}}")

# High-scoring palindromes
high_score_palindromes = [
    (word, score) 
    for word in words 
    if is_palindrome(word) and (score := word_score(word)) > 50
]
print(f"High-scoring palindromes: {{high_score_palindromes}}")

# Error handling in comprehensions
print(f"\\nError Handling:")

# Safe division
numbers = [10, 5, 0, 8, 2, 0, 15]
safe_divisions = [
    100 / num if num != 0 else float('inf')
    for num in numbers
]
print(f"Safe divisions (100/n): {{safe_divisions}}")

# Safe type conversion
mixed_data = ["10", "20", "abc", "30.5", "40"]
safe_ints = [
    int(float(x)) if x.replace('.', '').replace('-', '').isdigit() else 0
    for x in mixed_data
]
print(f"Safe integer conversion: {{safe_ints}}")

# Filtering with exception handling
def safe_sqrt(x):
    try:
        return x**0.5 if x >= 0 else None
    except:
        return None

test_numbers = [4, 9, -1, 16, "invalid", 25]
safe_square_roots = [
    safe_sqrt(x) for x in test_numbers 
    if isinstance(x, (int, float)) and safe_sqrt(x) is not None
]
print(f"Safe square roots: {{safe_square_roots}}")

# Performance optimization techniques
print(f"\\nPerformance Optimization:")

import time

# Set membership vs list membership
large_list = list(range(10000))
large_set = set(large_list)
search_items = [100, 5000, 9999]

# Time list comprehension with list membership
start_time = time.time()
list_results = [x for x in large_list if x in search_items]
list_time = time.time() - start_time

# Time list comprehension with set membership
start_time = time.time()
set_results = [x for x in large_list if x in set(search_items)]
set_time = time.time() - start_time

print(f"List membership time: {{list_time}} seconds")
print(f"Set membership time: {{set_time}} seconds")
print(f"Set is {{list_time / set_time if set_time > 0 else 'much'}} times faster")

# Pre-compiled regex for better performance
import re

# Compile regex once
email_pattern = re.compile(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{{2,}}$')

test_emails = [
    "valid@email.com", "invalid.email", "another@valid.org", 
    "@invalid.com", "user@domain.co.uk"
]

valid_emails = [email for email in test_emails if email_pattern.match(email)]
print(f"\\nValid emails: {{valid_emails}}")

# Efficient string operations
def efficient_string_processing():
    words = ["python", "java", "javascript", "go", "rust", "swift"]
    
    # Pre-calculate values that don't change
    vowels = set('aeiou')
    
    # Efficient vowel counting
    vowel_counts = {{
        word: sum(1 for char in word.lower() if char in vowels)
        for word in words
    }}
    
    return vowel_counts

vowel_results = efficient_string_processing()
print(f"Efficient vowel counting: {{vowel_results}}")

# Memory-efficient processing with itertools
from itertools import islice, chain

def memory_efficient_processing():
    # Process large data in chunks
    def chunked_processing(iterable, chunk_size):
        iterator = iter(iterable)
        while True:
            chunk = list(islice(iterator, chunk_size))
            if not chunk:
                break
            yield [x**2 for x in chunk if x % 2 == 0]
    
    # Process in chunks of 1000
    large_range = range(10000)
    processed_chunks = list(chunked_processing(large_range, 1000))
    
    # Flatten results efficiently
    flattened = list(chain.from_iterable(processed_chunks))
    
    return len(flattened)

result_count = memory_efficient_processing()
print(f"\\nProcessed {{result_count}} even squares efficiently")

# Best practices demonstration
print(f"\\nBest Practices:")

# Good: Simple and readable
good_example = [x**2 for x in range(10) if x % 2 == 0]
print(f"Good (simple): {{good_example}}")

# Avoid: Too complex in one line
# Instead of this complex one-liner:
# complex_bad = [process(transform(x)) for sublist in data for x in sublist if validate(x) and check(x)]

# Do this instead:
def process_data_properly(data):
    results = []
    for sublist in data:
        for x in sublist:
            if validate_item(x) and additional_check(x):
                transformed = transform_item(x)
                processed = process_item(transformed)
                results.append(processed)
    return results

def validate_item(x):
    return isinstance(x, (int, float)) and x > 0

def additional_check(x):
    return x < 100

def transform_item(x):
    return x * 2

def process_item(x):
    return x**2

# Example usage
sample_data = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
properly_processed = process_data_properly(sample_data)
print(f"Properly processed (readable): {{properly_processed}}")

# When to use comprehensions vs traditional loops
print(f"\\nWhen to Use Comprehensions:")
print("✓ Simple transformations and filtering")
print("✓ Creating new collections from existing ones")
print("✓ Mathematical operations on sequences")
print("✓ When readability is maintained")
print("\\nAvoid comprehensions when:")
print("✗ Logic becomes too complex")
print("✗ Multiple nested conditions")
print("✗ Side effects are needed")
print("✗ Error handling is complex")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>List Comprehension Best Practices:</h3>
            <ul>
              <li><strong>Keep it simple:</strong> If it's hard to read, use a regular loop</li>
              <li><strong>Use meaningful variable names:</strong> Even in short comprehensions</li>
              <li><strong>Consider generator expressions:</strong> For memory efficiency with large datasets</li>
              <li><strong>Limit nesting:</strong> Avoid more than 2-3 levels of nesting</li>
              <li><strong>Use functions for complex logic:</strong> Extract complex conditions to functions</li>
              <li><strong>Prefer comprehensions for pure transformations:</strong> No side effects</li>
              <li><strong>Consider readability over cleverness:</strong> Code is read more than written</li>
              <li><strong>Use walrus operator judiciously:</strong> Only when it improves readability</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a list of all perfect squares less than 1000</li>
              <li>Generate a list of all prime numbers up to 100 using list comprehension</li>
              <li>Build a word frequency counter from a text using dictionary comprehension</li>
              <li>Create a multiplication table (nested lists) using list comprehensions</li>
              <li>Extract all email addresses from a list of mixed strings</li>
              <li>Generate all possible combinations of two lists using nested comprehensions</li>
              <li>Create a gradebook system that assigns letter grades based on numeric scores</li>
              <li>Build a data cleaning pipeline that processes and validates user input</li>
              <li>Generate a set of unique characters from multiple strings</li>
              <li>Create a matrix transpose function using list comprehensions</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ListComprehensions;
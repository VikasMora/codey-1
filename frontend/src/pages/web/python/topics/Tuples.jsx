import React from 'react';
import '../Navbarweb.css';

function Tuples() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>📦 Tuples</h1>
        <p className="py-topic-subtitle">
          Learn about immutable sequences in Python
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>🎯 What are Tuples?</h2>
          <p>
            Tuples are ordered, immutable collections in Python that can store multiple items 
            of different data types. Once created, you cannot change, add, or remove items from 
            a tuple. This immutability makes tuples perfect for storing data that shouldn't 
            change throughout your program's execution.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Characteristics of Tuples:</h3>
            <ul>
              <li><strong>Ordered:</strong> Items have a defined order that won't change</li>
              <li><strong>Immutable:</strong> Cannot be changed after creation</li>
              <li><strong>Allow Duplicates:</strong> Can contain the same value multiple times</li>
              <li><strong>Indexed:</strong> Items can be accessed using index numbers</li>
              <li><strong>Hashable:</strong> Can be used as dictionary keys and stored in sets</li>
            </ul>
          </div>
        </section>

        {/* Creating Tuples */}
        <section className="py-topic-section">
          <h2>🛠️ Creating Tuples</h2>
          
          <div className="py-code-block">
            <pre>{`# Different ways to create tuples
# Empty tuple
empty_tuple = ()
empty_tuple_alt = tuple()

print(f"Empty tuple: {{empty_tuple}}")
print(f"Type: {{type(empty_tuple)}}")

# Single item tuple (note the comma!)
single_item = (42,)                    # Comma is required!
single_item_alt = 42,                  # Alternative syntax
wrong_single = (42)                    # This is just parentheses, not a tuple!

print(f"Single item tuple: {{single_item}}")
print(f"Type of single_item: {{type(single_item)}}")
print(f"Type of wrong_single: {{type(wrong_single)}}")  # This will be <class 'int'>

# Multiple items tuple
coordinates = (10, 20)
person_info = ("Alice", 25, "Engineer", True)
mixed_tuple = (1, "hello", 3.14, [1, 2, 3], {{"key": "value"}})

print(f"Coordinates: {{coordinates}}")
print(f"Person info: {{person_info}}")
print(f"Mixed tuple: {{mixed_tuple}}")

# Creating tuples without parentheses (tuple packing)
point = 5, 10                          # This creates a tuple
rgb_color = 255, 128, 0
student = "Bob", 22, "Physics"

print(f"Point (no parentheses): {{point}}")
print(f"RGB color: {{rgb_color}}")
print(f"Student: {{student}}")

# Creating tuples from other iterables
list_to_tuple = tuple([1, 2, 3, 4])
string_to_tuple = tuple("hello")
range_to_tuple = tuple(range(5))

print(f"From list: {{list_to_tuple}}")
print(f"From string: {{string_to_tuple}}")
print(f"From range: {{range_to_tuple}}")

# Nested tuples
nested_tuple = ((1, 2), (3, 4), (5, 6))
coordinates_3d = (
    (0, 0, 0),
    (1, 1, 1),
    (2, 2, 2)
)

print(f"Nested tuple: {{nested_tuple}}")
print(f"3D coordinates: {{coordinates_3d}}")

# Tuple constructor with multiple arguments
constructed_tuple = tuple("python")    # Creates ('p', 'y', 't', 'h', 'o', 'n')
print(f"Constructed from string: {{constructed_tuple}}")`}</pre>
          </div>
        </section>

        {/* Accessing Tuple Elements */}
        <section className="py-topic-section">
          <h2>🔍 Accessing Tuple Elements</h2>
          
          <div className="py-code-block">
            <pre>{`# Indexing - accessing individual elements
fruits = ("apple", "banana", "cherry", "date", "elderberry")

# Positive indexing (0-based)
first_fruit = fruits[0]                # "apple"
second_fruit = fruits[1]               # "banana"
third_fruit = fruits[2]                # "cherry"

print(f"First fruit: {{first_fruit}}")
print(f"Second fruit: {{second_fruit}}")
print(f"Third fruit: {{third_fruit}}")

# Negative indexing (from the end)
last_fruit = fruits[-1]                # "elderberry"
second_last = fruits[-2]               # "date"

print(f"Last fruit: {{last_fruit}}")
print(f"Second last: {{second_last}}")

# Slicing - accessing multiple elements
numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

# Basic slicing [start:end]
first_three = numbers[:3]              # (0, 1, 2)
middle_section = numbers[3:7]          # (3, 4, 5, 6)
last_three = numbers[-3:]              # (7, 8, 9)

print(f"First three: {{first_three}}")
print(f"Middle section: {{middle_section}}")
print(f"Last three: {{last_three}}")

# Extended slicing [start:end:step]
every_second = numbers[::2]            # (0, 2, 4, 6, 8)
reverse_tuple = numbers[::-1]          # (9, 8, 7, 6, 5, 4, 3, 2, 1, 0)
every_third = numbers[1::3]            # (1, 4, 7)

print(f"Every second: {{every_second}}")
print(f"Reversed: {{reverse_tuple}}")
print(f"Every third from index 1: {{every_third}}")

# Accessing nested tuples
nested = ((1, 2, 3), (4, 5, 6), (7, 8, 9))
first_inner_tuple = nested[0]          # (1, 2, 3)
element_in_nested = nested[1][2]       # 6 (second tuple, third element)

print(f"First inner tuple: {{first_inner_tuple}}")
print(f"Element [1][2]: {{element_in_nested}}")

# Using loops to access elements
print("\\nIterating through tuple:")
for fruit in fruits:
    print(f"- {{fruit}}")

print("\\nIterating with index:")
for i, fruit in enumerate(fruits):
    print(f"{{i}}: {{fruit}}")

# Checking if element exists
has_apple = "apple" in fruits          # True
has_grape = "grape" in fruits          # False

print(f"\\nHas apple: {{has_apple}}")
print(f"Has grape: {{has_grape}}")

# Finding length
tuple_length = len(fruits)
print(f"Number of fruits: {{tuple_length}}")

# Unpacking tuples - very important concept!
person = ("Alice", 25, "Engineer")

# Unpack into separate variables
name, age, profession = person

print(f"\\nUnpacked person data:")
print(f"Name: {{name}}")
print(f"Age: {{age}}")
print(f"Profession: {{profession}}")

# Partial unpacking with *
numbers_tuple = (1, 2, 3, 4, 5, 6, 7, 8)
first, second, *rest = numbers_tuple
print(f"\\nFirst: {{first}}, Second: {{second}}, Rest: {{rest}}")

first, *middle, last = numbers_tuple
print(f"First: {{first}}, Middle: {{middle}}, Last: {{last}}")

# Swapping variables using tuple unpacking
a = 10
b = 20
print(f"\\nBefore swap: a={{a}}, b={{b}}")

a, b = b, a                            # Elegant swap using tuples!
print(f"After swap: a={{a}}, b={{b}}")`}</pre>
          </div>
        </section>

        {/* Tuple Operations and Methods */}
        <section className="py-topic-section">
          <h2>⚙️ Tuple Operations and Methods</h2>
          
          <div className="py-code-block">
            <pre>{`# Tuple methods (limited because tuples are immutable)
numbers = (1, 2, 2, 3, 2, 4, 5, 2)

# count() - count occurrences of an element
count_of_twos = numbers.count(2)       # 4
count_of_sixes = numbers.count(6)      # 0

print(f"Count of 2s: {{count_of_twos}}")
print(f"Count of 6s: {{count_of_sixes}}")

# index() - find first occurrence of an element
index_of_first_two = numbers.index(2)  # 1
# index_of_six = numbers.index(6)      # This would raise ValueError!

print(f"First occurrence of 2 at index: {{index_of_first_two}}")

# Safe way to find index
def safe_index(tuple_obj, value):
    try:
        return tuple_obj.index(value)
    except ValueError:
        return -1  # or None, or whatever indicates "not found"

safe_index_result = safe_index(numbers, 6)
print(f"Safe index search for 6: {{safe_index_result}}")

# Tuple concatenation (creates new tuple)
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
combined = tuple1 + tuple2             # (1, 2, 3, 4, 5, 6)

print(f"Tuple1: {{tuple1}}")
print(f"Tuple2: {{tuple2}}")
print(f"Combined: {{combined}}")

# Tuple repetition
repeated = tuple1 * 3                  # (1, 2, 3, 1, 2, 3, 1, 2, 3)
print(f"Repeated 3 times: {{repeated}}")

# Comparison operations
tuple_a = (1, 2, 3)
tuple_b = (1, 2, 3)
tuple_c = (1, 2, 4)
tuple_d = (1, 2)

print(f"\\nTuple comparisons:")
print(f"tuple_a == tuple_b: {{tuple_a == tuple_b}}")  # True
print(f"tuple_a == tuple_c: {{tuple_a == tuple_c}}")  # False
print(f"tuple_a > tuple_c: {{tuple_a > tuple_c}}")    # False (lexicographic comparison)
print(f"tuple_a > tuple_d: {{tuple_a > tuple_d}}")    # True

# Membership testing
colors = ("red", "green", "blue", "yellow")
has_red = "red" in colors              # True
has_purple = "purple" in colors        # False

print(f"\\nMembership testing:")
print(f"Has red: {{has_red}}")
print(f"Has purple: {{has_purple}}")

# Length and other built-in functions
print(f"\\nLength: {{len(colors)}}")
print(f"Min: {{min(numbers)}}")        # 1
print(f"Max: {{max(numbers)}}")        # 5
print(f"Sum: {{sum(numbers)}}")        # 19

# Converting to list and back (when you need mutability)
original_tuple = (1, 2, 3)
temp_list = list(original_tuple)       # Convert to list
temp_list.append(4)                    # Modify the list
new_tuple = tuple(temp_list)           # Convert back to tuple

print(f"\\nOriginal tuple: {{original_tuple}}")
print(f"Modified tuple: {{new_tuple}}")

# Sorting tuples (returns a list)
unsorted_tuple = (3, 1, 4, 1, 5, 9, 2, 6)
sorted_list = sorted(unsorted_tuple)   # Returns a list!
sorted_tuple = tuple(sorted(unsorted_tuple))  # Convert back to tuple

print(f"\\nUnsorted: {{unsorted_tuple}}")
print(f"Sorted (list): {{sorted_list}}")
print(f"Sorted (tuple): {{sorted_tuple}}")

# Tuple immutability demonstration
coordinates = (10, 20)
print(f"\\nOriginal coordinates: {{coordinates}}")

# These operations would raise TypeError:
# coordinates[0] = 15                  # TypeError!
# coordinates.append(30)               # AttributeError!
# del coordinates[0]                   # TypeError!

# But you can create new tuples
new_coordinates = coordinates + (30,)   # Add element by creating new tuple
print(f"Extended coordinates: {{new_coordinates}}")

# Working with mutable objects inside tuples
tuple_with_list = (1, 2, [3, 4, 5])
print(f"\\nTuple with list: {{tuple_with_list}}")

# The tuple itself is immutable, but the list inside can be modified
tuple_with_list[2].append(6)          # This works!
print(f"After modifying inner list: {{tuple_with_list}}")

# However, you can't replace the list itself
# tuple_with_list[2] = [7, 8, 9]      # This would raise TypeError!

# Practical examples
# 1. Function returning multiple values
def get_circle_properties(radius):
    area = 3.14159 * radius ** 2
    circumference = 2 * 3.14159 * radius
    return area, circumference          # Returns a tuple

area, circumference = get_circle_properties(5)
print(f"\\nCircle properties: Area={{area}}, Circumference={{circumference}}")

# 2. Coordinates and points
point_2d = (10, 20)
point_3d = (10, 20, 30)

def calculate_distance_2d(p1, p2):
    x1, y1 = p1
    x2, y2 = p2
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5

distance = calculate_distance_2d((0, 0), (3, 4))
print(f"Distance between points: {{distance}}")

# 3. Database-like records
student_records = [
    ("Alice", "12345", "Computer Science", 3.8),
    ("Bob", "12346", "Physics", 3.6),
    ("Charlie", "12347", "Mathematics", 3.9)
]

print("\\nStudent Records:")
for name, student_id, major, gpa in student_records:
    print(f"{{name}} ({{student_id}}): {{major}}, GPA: {{gpa}}")

# 4. Configuration settings
DATABASE_CONFIG = ("localhost", 5432, "myapp_db", "username", "password")
host, port, db_name, user, password = DATABASE_CONFIG

print(f"\\nDatabase config: {{host}}:{{port}}/{{db_name}} as {{user}}")`}</pre>
          </div>
        </section>

        {/* Tuples vs Lists */}
        <section className="py-topic-section">
          <h2>⚖️ Tuples vs Lists</h2>
          
          <div className="py-code-block">
            <pre>{`# Comparing tuples and lists
import time
import sys

# Performance comparison - creation
def time_creation(n=1000000):
    # Tuple creation
    start = time.time()
    for i in range(n):
        t = (1, 2, 3, 4, 5)
    tuple_time = time.time() - start
    
    # List creation
    start = time.time()
    for i in range(n):
        l = [1, 2, 3, 4, 5]
    list_time = time.time() - start
    
    return tuple_time, list_time

tuple_time, list_time = time_creation(100000)
print(f"Tuple creation time: {{tuple_time}} seconds")
print(f"List creation time: {{list_time}} seconds")
print(f"Tuple is {{list_time/tuple_time}} x faster to create")

# Memory usage comparison
tuple_data = (1, 2, 3, 4, 5) * 1000
list_data = [1, 2, 3, 4, 5] * 1000

tuple_size = sys.getsizeof(tuple_data)
list_size = sys.getsizeof(list_data)

print(f"\\nMemory usage:")
print(f"Tuple size: {{tuple_size}} bytes")
print(f"List size: {{list_size}} bytes")
print(f"Tuple uses {{((tuple_size/list_size-1)*100)}}% memory compared to list")

# Access speed comparison
large_tuple = tuple(range(1000))
large_list = list(range(1000))

# Time tuple access
start = time.time()
for i in range(10000):
    item = large_tuple[500]
tuple_access_time = time.time() - start

# Time list access  
start = time.time()
for i in range(10000):
    item = large_list[500]
list_access_time = time.time() - start

print(f"\\nAccess time comparison:")
print(f"Tuple access: {{tuple_access_time}} seconds")
print(f"List access: {{list_access_time}} seconds")

# When to use tuples vs lists
print("\\n" + "="*50)
print("WHEN TO USE TUPLES:")
print("="*50)

# 1. Immutable data
DAYS_OF_WEEK = ("Monday", "Tuesday", "Wednesday", "Thursday", 
                "Friday", "Saturday", "Sunday")
RGB_COLORS = {{
    "red": (255, 0, 0),
    "green": (0, 255, 0),
    "blue": (0, 0, 255)
}}

print("1. For immutable data that shouldn't change:")
print(f"   Days of week: {{DAYS_OF_WEEK[:3]}}...")
print(f"   RGB colors: {{RGB_COLORS['red']}}")

# 2. Dictionary keys (tuples are hashable)
coordinate_data = {{
    (0, 0): "Origin",
    (1, 2): "Point A",
    (3, 4): "Point B"
}}

print("\\n2. As dictionary keys (because they're hashable):")
print(f"   Location at (1,2): {{coordinate_data.get((1, 2))}}")

# 3. Function returns
def get_user_info(user_id):
    # Simulate database lookup
    return "Alice Smith", 28, "alice@email.com"

name, age, email = get_user_info(123)
print("\\n3. For function returns (multiple values):")
print(f"   User info: {{name}}, {{age}}, {{email}}")

# 4. Fixed-size collections
def process_rgb_pixel(pixel):
    r, g, b = pixel  # Expecting exactly 3 values
    return (r + g + b) / 3  # Return grayscale value

avg_color = process_rgb_pixel((128, 64, 192))
print("\\n4. For fixed-size collections:")
print(f"   Average RGB value: {{avg_color}}")

print("\\n" + "="*50)
print("WHEN TO USE LISTS:")
print("="*50)

# 1. Dynamic collections
shopping_cart = []
shopping_cart.append("bread")
shopping_cart.append("milk")
shopping_cart.extend(["eggs", "cheese"])
shopping_cart.remove("bread")

print("1. For dynamic collections that change:")
print(f"   Shopping cart: {{shopping_cart}}")

# 2. Need to modify contents
grades = [85, 92, 78, 96]
grades.append(88)  # Add new grade
grades[2] = 82     # Update existing grade
grades.sort()      # Sort in place

print("\\n2. When you need to modify contents:")
print(f"   Updated grades: {{grades}}")

# 3. Unknown final size
user_inputs = []
# Simulate collecting user input
sample_inputs = ["apple", "banana", "cherry"]
for item in sample_inputs:
    user_inputs.append(item.upper())

print("\\n3. For collections of unknown final size:")
print(f"   User inputs: {{user_inputs}}")

# Conversion between tuples and lists
original_tuple = (1, 2, 3, 4, 5)
converted_list = list(original_tuple)     # Tuple to list
converted_list.append(6)                  # Modify list
final_tuple = tuple(converted_list)       # List back to tuple

print("\\n" + "="*50)
print("CONVERSION BETWEEN TUPLES AND LISTS:")
print("="*50)
print(f"Original tuple: {{original_tuple}}")
print(f"Converted to list and modified: {{converted_list}}")
print(f"Converted back to tuple: {{final_tuple}}")

# Immutability demonstration
print("\\n" + "="*50)
print("IMMUTABILITY DEMONSTRATION:")
print("="*50)

# Tuple immutability
coords = (10, 20)
print(f"Original coordinates: {{coords}}")

# This would cause an error:
# coords[0] = 15  # TypeError: 'tuple' object does not support item assignment

# But we can create a new tuple
new_coords = (15, coords[1])
print(f"New coordinates: {{new_coords}}")

# Or unpack and repack
x, y = coords
updated_coords = (x + 5, y + 5)
print(f"Updated coordinates: {{updated_coords}}")

# Nested mutability
mixed_data = (1, 2, [3, 4, 5])
print(f"\\nTuple with mutable object: {{mixed_data}}")

# The tuple structure is immutable, but inner objects can change
mixed_data[2].append(6)
print(f"After modifying inner list: {{mixed_data}}")

# However, you can't replace the reference
# mixed_data[2] = [7, 8, 9]  # This would still cause TypeError!

print("\\n" + "="*50)
print("SUMMARY:")
print("="*50)
print("Use TUPLES for:")
print("  • Fixed data that won't change")
print("  • Dictionary keys") 
print("  • Function returns")
print("  • Configuration settings")
print("  • Coordinates/points")
print("  • Better performance")
print()
print("Use LISTS for:")
print("  • Dynamic collections")
print("  • Data that needs modification")
print("  • Unknown final size")
print("  • Need list methods (sort, append, etc.)")`}</pre>
          </div>
        </section>

        {/* Advanced Tuple Concepts */}
        <section className="py-topic-section">
          <h2>🚀 Advanced Tuple Concepts</h2>
          
          <div className="py-code-block">
            <pre>{`# Named Tuples - structured tuples with named fields
from collections import namedtuple

# Define a named tuple class
Point = namedtuple('Point', ['x', 'y'])
Person = namedtuple('Person', ['name', 'age', 'email'])

# Create instances
origin = Point(0, 0)
point_a = Point(3, 4)
alice = Person('Alice', 25, 'alice@email.com')

print("Named Tuples:")
print(f"Origin: {{origin}}")
print(f"Point A: {{point_a}}")
print(f"Alice: {{alice}}")

# Access by name (more readable than indices)
print(f"\\nPoint A coordinates: x={{point_a.x}}, y={{point_a.y}}")
print(f"Alice's email: {{alice.email}}")

# Still works with regular tuple operations
x, y = point_a                         # Unpacking works
print(f"Unpacked coordinates: x={{x}}, y={{y}}")

# Named tuples are still immutable
# alice.age = 26  # This would raise AttributeError!

# But you can create modified copies
older_alice = alice._replace(age=26)
print(f"Updated Alice: {{older_alice}}")

# Convert to dictionary
alice_dict = alice._asdict()
print(f"As dictionary: {{alice_dict}}")

# Tuple packing and unpacking patterns
print("\\n" + "="*50)
print("ADVANCED UNPACKING PATTERNS:")
print("="*50)

# Multiple assignment
person_data = ("Bob", 30, "Engineer", "New York")
name, age, job, city = person_data

print(f"Person: {{name}}, {{age}}, {{job}}, {{city}}")

# Ignore unwanted values with underscore
_, age, _, city = person_data          # Only keep age and city
print(f"Relevant info: Age {{age}} in {{city}}")

# Extended unpacking with *
numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

# Get first, last, and everything in between
first, *middle, last = numbers
print(f"\\nFirst: {{first}}, Last: {{last}}, Middle: {{middle}}")

# Get first two and rest
first, second, *rest = numbers
print(f"First: {{first}}, Second: {{second}}, Rest: {{rest}}")

# Get all but last two
*beginning, second_last, last = numbers
print(f"Beginning: {{beginning}}, Second last: {{second_last}}, Last: {{last}}")

# Nested tuple unpacking
nested_data = ((1, 2), (3, 4), (5, 6))
(a, b), (c, d), (e, f) = nested_data

print(f"\\nNested unpacking: a={{a}}, b={{b}}, c={{c}}, d={{d}}, e={{e}}, f={{f}}")

# Function argument unpacking
def calculate_rectangle_area(length, width):
    return length * width

dimensions = (10, 5)
area = calculate_rectangle_area(*dimensions)  # Unpack tuple as arguments
print(f"\\nRectangle area: {{area}}")

# Advanced tuple operations
print("\\n" + "="*50)
print("ADVANCED OPERATIONS:")
print("="*50)

# Tuple as function arguments and returns
def process_coordinates(*points):
    """Process multiple coordinate tuples."""
    total_distance = 0
    for i in range(len(points) - 1):
        x1, y1 = points[i]
        x2, y2 = points[i + 1]
        distance = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
        total_distance += distance
    return total_distance, len(points)

path_points = [(0, 0), (3, 4), (6, 8), (9, 12)]
total_dist, num_points = process_coordinates(*path_points)
print(f"Path distance: {{total_dist}} across {{num_points}} points")

# Using tuples for caching (hashable keys)
calculation_cache = {{}}

def expensive_calculation(a, b, c):
    """Simulate expensive calculation with caching."""
    key = (a, b, c)  # Tuple as cache key
    
    if key in calculation_cache:
        print(f"Cache hit for {{key}}")
        return calculation_cache[key]
    
    # Simulate expensive computation
    result = a ** 2 + b ** 2 + c ** 2
    calculation_cache[key] = result
    print(f"Calculated and cached {{key}} = {{result}}")
    return result

# Test caching
result1 = expensive_calculation(1, 2, 3)
result2 = expensive_calculation(1, 2, 3)  # Should use cache
result3 = expensive_calculation(2, 3, 4)  # New calculation

# Tuple comprehensions (actually generator expressions)
squared_tuple = tuple(x**2 for x in range(1, 6))
filtered_tuple = tuple(x for x in range(1, 11) if x % 2 == 0)

print(f"\\nSquared tuple: {{squared_tuple}}")
print(f"Even numbers tuple: {{filtered_tuple}}")

# Working with tuple of tuples (matrix-like data)
matrix = (
    (1, 2, 3),
    (4, 5, 6), 
    (7, 8, 9)
)

print(f"\\nMatrix:")
for row in matrix:
    print(row)

# Transpose matrix using zip
transposed = tuple(zip(*matrix))
print(f"\\nTransposed:")
for row in transposed:
    print(row)

# Flattening nested tuples
nested = ((1, 2), (3, 4, 5), (6,))
flattened = tuple(item for subtuple in nested for item in subtuple)
print(f"\\nFlattened: {{flattened}}")

# Sorting tuples by different criteria
students = [
    ("Alice", 85, "A"),
    ("Bob", 92, "A+"),
    ("Charlie", 78, "B+"),
    ("Diana", 96, "A+")
]

# Sort by grade (second element)
by_grade = tuple(sorted(students, key=lambda student: student[1]))
print(f"\\nSorted by grade:")
for student in by_grade:
    print(f"  {{student}}")

# Sort by name (first element)
by_name = tuple(sorted(students, key=lambda student: student[0]))
print(f"\\nSorted by name:")
for student in by_name:
    print(f"  {{student}}")

# Real-world examples
print("\\n" + "="*50)
print("REAL-WORLD EXAMPLES:")
print("="*50)

# 1. Configuration management
SERVER_CONFIG = (
    ("web_server", "nginx", 80),
    ("database", "postgresql", 5432),
    ("cache", "redis", 6379)
)

print("Server configuration:")
for service, software, port in SERVER_CONFIG:
    print(f"  {{service}}: {{software}} on port {{port}}")

# 2. Color palette management
COLOR_PALETTE = {{
    "primary": (52, 152, 219),      # Blue
    "secondary": (155, 89, 182),    # Purple  
    "success": (46, 204, 113),      # Green
    "warning": (241, 196, 15),      # Yellow
    "danger": (231, 76, 60)         # Red
}}

def rgb_to_hex(rgb_tuple):
    r, g, b = rgb_tuple
    return f"#{{r:02x}}{{g:02x}}{{b:02x}}"

print(f"\\nColor palette:")
for color_name, rgb_values in COLOR_PALETTE.items():
    hex_value = rgb_to_hex(rgb_values)
    print(f"  {{color_name}}: {{rgb_values}} = {{hex_value}}")

# 3. Geographic coordinates
CITIES = {{
    "New York": (40.7128, -74.0060),
    "London": (51.5074, -0.1278),
    "Tokyo": (35.6762, 139.6503),
    "Sydney": (-33.8688, 151.2093)
}}

def calculate_distance(coord1, coord2):
    """Calculate distance between two coordinates (simplified)."""
    lat1, lon1 = coord1
    lat2, lon2 = coord2
    return ((lat2 - lat1) ** 2 + (lon2 - lon1) ** 2) ** 0.5

ny_coords = CITIES["New York"]
london_coords = CITIES["London"]
distance = calculate_distance(ny_coords, london_coords)

print(f"\\nDistance between NYC and London: {{distance}} units")

# 4. Version information
VERSION_INFO = (2, 1, 3, "stable")
major, minor, patch, status = VERSION_INFO

version_string = f"{{major}}.{{minor}}.{{patch}}-{{status}}"
print(f"\\nApplication version: {{version_string}}")

# 5. Database query results simulation
def simulate_query_results():
    """Simulate database returning tuple records."""
    return [
        (1, "Alice Johnson", "alice@email.com", "2024-01-15"),
        (2, "Bob Smith", "bob@email.com", "2024-01-16"),
        (3, "Charlie Brown", "charlie@email.com", "2024-01-17")
    ]

query_results = simulate_query_results()
print(f"\\nQuery results:")
for user_id, full_name, email, created_date in query_results:
    print(f"  ID: {{user_id}}, Name: {{full_name}}, Email: {{email}}, Created: {{created_date}}")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Tuple Best Practices:</h3>
            <ul>
              <li><strong>Use for immutable data:</strong> When data shouldn't change during program execution</li>
              <li><strong>Function returns:</strong> Perfect for returning multiple related values</li>
              <li><strong>Dictionary keys:</strong> Take advantage of hashability for complex keys</li>
              <li><strong>Configuration settings:</strong> Prevent accidental modification of constants</li>
              <li><strong>Performance critical code:</strong> Use when you need faster creation and access</li>
              <li><strong>Single-item tuples:</strong> Always include the trailing comma: `(item,)`</li>
              <li><strong>Unpacking:</strong> Use tuple unpacking for cleaner, more readable code</li>
              <li><strong>Named tuples:</strong> Consider for structured data with named fields</li>
            </ul>
          </div>

          <div className="py-code-block">
            <pre>{`# Best practices examples

# 1. Good use of tuples for constants
SCREEN_DIMENSIONS = (1920, 1080)
API_ENDPOINTS = (
    "https://api.example.com/users",
    "https://api.example.com/products", 
    "https://api.example.com/orders"
)

# 2. Function returns with descriptive unpacking
def analyze_sales_data():
    # Simulate analysis
    return 1250.75, 45, 87.5  # total_revenue, num_transactions, avg_order

total_revenue, transaction_count, avg_order_value = analyze_sales_data()
print(f"Revenue: , Transactions: {{transaction_count}}, Avg: ")

# 3. Using tuples as dictionary keys for multi-dimensional data
sales_by_region_month = {{
    ("North", "January"): 15000,
    ("North", "February"): 18000,
    ("South", "January"): 12000,
    ("South", "February"): 14500
}}

north_jan_sales = sales_by_region_month[("North", "January")]
print(f"North region January sales: ")

# 4. Coordinate and point management
class Point:
    def __init__(self, coordinates):
        self.coords = coordinates  # Store as tuple for immutability
    
    def distance_to(self, other_point):
        x1, y1 = self.coords
        x2, y2 = other_point.coords
        return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
    
    def translate(self, dx, dy):
        x, y = self.coords
        return Point((x + dx, y + dy))  # Return new point

point_a = Point((0, 0))
point_b = Point((3, 4))
distance = point_a.distance_to(point_b)
moved_point = point_a.translate(5, 5)

print(f"Distance: {{distance}}")
print(f"Moved point: {{moved_point.coords}}")

# 5. State management with tuples
def create_game_state(player_pos, enemy_positions, score):
    """Create immutable game state."""
    return (player_pos, tuple(enemy_positions), score)

def update_player_position(game_state, new_position):
    """Return new game state with updated player position."""
    _, enemy_positions, score = game_state
    return (new_position, enemy_positions, score)

# Initial game state
initial_state = create_game_state((10, 10), [(5, 5), (15, 15)], 0)
updated_state = update_player_position(initial_state, (12, 10))

print(f"Initial state: {{initial_state}}")
print(f"Updated state: {{updated_state}}")

# 6. Data validation with tuples
VALID_COLORS = ("red", "green", "blue", "yellow", "purple")
VALID_SIZES = ("small", "medium", "large", "extra-large")

def validate_product_options(color, size):
    """Validate product options against allowed values."""
    color_valid = color.lower() in VALID_COLORS
    size_valid = size.lower() in VALID_SIZES
    
    return color_valid and size_valid, (color_valid, size_valid)

is_valid, (color_ok, size_ok) = validate_product_options("blue", "medium")
print(f"\\nValidation result: {{is_valid}} (color: {{color_ok}}, size: {{size_ok}})")

# 7. Efficient data processing with tuple unpacking
def process_user_records(records):
    """Process list of user record tuples."""
    processed = []
    
    for user_id, name, email, age in records:
        # Process each record
        processed_name = name.title()
        email_domain = email.split('@')[1] if '@' in email else 'unknown'
        age_group = 'adult' if age >= 18 else 'minor'
        
        processed.append((user_id, processed_name, email_domain, age_group))
    
    return processed

sample_records = [
    (1, "alice smith", "alice@gmail.com", 25),
    (2, "bob jones", "bob@yahoo.com", 17),
    (3, "charlie brown", "charlie@outlook.com", 30)
]

processed_records = process_user_records(sample_records)
print(f"\\nProcessed records:")
for record in processed_records:
    print(f"  {{record}}")

# 8. Configuration management with nested tuples
DATABASE_CONFIGS = {{
    "development": ("localhost", 5432, "dev_db", False),
    "staging": ("staging.example.com", 5432, "staging_db", True),
    "production": ("prod.example.com", 5432, "prod_db", True)
}}

def get_db_connection_string(environment):
    """Generate database connection string."""
    host, port, db_name, ssl_required = DATABASE_CONFIGS[environment]
    ssl_param = "?sslmode=require" if ssl_required else ""
    return f"postgresql://{{host}}:{{port}}/{{db_name}}{{ssl_param}}"

dev_connection = get_db_connection_string("development")
prod_connection = get_db_connection_string("production")

print(f"\\nDev connection: {{dev_connection}}")
print(f"Prod connection: {{prod_connection}}")

# 9. Using tuples for enumeration-like constants
HTTP_STATUS_CODES = {{
    "OK": (200, "Success"),
    "NOT_FOUND": (404, "Resource not found"),
    "INTERNAL_ERROR": (500, "Internal server error")
}}

def create_http_response(status_key, data=None):
    """Create HTTP response with status code and message."""
    code, message = HTTP_STATUS_CODES[status_key]
    return {{
        "status_code": code,
        "message": message,
        "data": data
    }}

response = create_http_response("OK", {{"users": ["Alice", "Bob"]}})
print(f"\\nHTTP Response: {{response}}")

# 10. Memory-efficient data storage
def store_temperature_readings():
    """Store temperature readings as tuples for efficiency."""
    # Simulate sensor data: (timestamp, temperature, humidity)
    readings = [
        (1640995200, 22.5, 65),  # Unix timestamp format
        (1640995260, 22.7, 64),
        (1640995320, 22.3, 66)
    ]
    return tuple(readings)  # Immutable collection of readings

temperature_data = store_temperature_readings()
print(f"\\nTemperature readings stored: {{len(temperature_data)}} entries")

# Calculate average temperature
total_temp = sum(temp for _, temp, _ in temperature_data)
avg_temp = total_temp / len(temperature_data)
print(f"Average temperature: {{avg_temp}}°C")`}</pre>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a tuple to store RGB color values and write functions to convert to hex and calculate brightness</li>
              <li>Build a coordinate system using tuples for 2D and 3D points with distance calculation methods</li>
              <li>Design a database record system using tuples to represent student information (ID, name, grades)</li>
              <li>Create a configuration management system using nested tuples for different environments</li>
              <li>Implement a simple caching system using tuples as dictionary keys</li>
              <li>Write functions that return multiple values using tuples and demonstrate proper unpacking</li>
              <li>Build a matrix operations system using tuples of tuples</li>
              <li>Create a version comparison system using version tuples (major, minor, patch)</li>
              <li>Design a geographic information system using coordinate tuples</li>
              <li>Implement a simple state management system for a game using immutable tuples</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tuples;
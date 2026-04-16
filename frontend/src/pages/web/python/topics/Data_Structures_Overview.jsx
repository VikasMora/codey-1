import React from 'react';
import '../Navbarweb.css';

function DataStructuresOverview() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>📊 Data Structures Overview</h1>
        <p className="py-topic-subtitle">
          Introduction to Python's built-in data structures
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>🎯 What are Data Structures?</h2>
          <p>
            Data structures are ways to organize, store, and manage data in your programs. 
            Python provides several built-in data structures that are optimized for different 
            use cases. Understanding when and how to use each data structure is crucial for 
            writing efficient and maintainable code.
          </p>
          
          <div className="py-highlight-box">
            <h3>Python's Main Built-in Data Structures:</h3>
            <ul>
              <li><strong>Lists:</strong> Ordered, mutable collections that allow duplicates</li>
              <li><strong>Tuples:</strong> Ordered, immutable collections that allow duplicates</li>
              <li><strong>Dictionaries:</strong> Unordered, mutable key-value pairs</li>
              <li><strong>Sets:</strong> Unordered, mutable collections of unique elements</li>
              <li><strong>Strings:</strong> Immutable sequences of characters</li>
            </ul>
          </div>
        </section>

        {/* Lists */}
        <section className="py-topic-section">
          <h2>📝 Lists - Dynamic Arrays</h2>
          <p>Lists are ordered, mutable collections that can store different data types and allow duplicates.</p>
          
          <div className="py-code-block">
            <pre>{`# Creating lists
empty_list = []
numbers = [1, 2, 3, 4, 5]
mixed_list = [1, "hello", 3.14, True, [1, 2, 3]]
fruits = ["apple", "banana", "cherry"]

print(f"Numbers: {{numbers}}")
print(f"Mixed list: {{mixed_list}}")
print(f"Fruits: {{fruits}}")

# Accessing elements (indexing)
print(f"First fruit: {{fruits[0]}}")        # apple
print(f"Last fruit: {{fruits[-1]}}")        # cherry  
print(f"Second number: {{numbers[1]}}")     # 2

# Slicing
print(f"First 3 numbers: {{numbers[0:3]}}")     # [1, 2, 3]
print(f"Last 2 fruits: {{fruits[-2:]}}")        # ['banana', 'cherry']
print(f"Every 2nd number: {{numbers[::2]}}")    # [1, 3, 5]

# List length
print(f"Number of fruits: {{len(fruits)}}")     # 3

# Checking membership
print(f"Is 'apple' in fruits? {{'apple' in fruits}}")      # True
print(f"Is 'grape' in fruits? {{'grape' in fruits}}")      # False

# List methods
fruits.append("date")                    # Add to end
fruits.insert(1, "blueberry")           # Insert at index 1
fruits.extend(["elderberry", "fig"])    # Add multiple items

print(f"After additions: {{fruits}}")

# Removing items
fruits.remove("banana")                  # Remove first occurrence
popped_item = fruits.pop()              # Remove and return last item
deleted_item = fruits.pop(1)            # Remove and return item at index 1

print(f"After removals: {{fruits}}")
print(f"Popped: {{popped_item}}, Deleted: {{deleted_item}}")

# List operations
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2                # Concatenation
repeated = list1 * 3                    # Repetition

print(f"Combined: {{combined}}")
print(f"Repeated: {{repeated}}")

# Modifying lists
numbers = [5, 2, 8, 1, 9]
numbers.sort()                          # Sort in place
print(f"Sorted: {{numbers}}")

numbers.reverse()                       # Reverse in place
print(f"Reversed: {{numbers}}")

# List comprehensions
squares = [x**2 for x in range(1, 6)]
evens = [x for x in range(1, 11) if x % 2 == 0]

print(f"Squares: {{squares}}")
print(f"Evens: {{evens}}")

# Nested lists (2D arrays)
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(f"Matrix element [1][2]: {{matrix[1][2]}}")  # 6

# Common use cases
shopping_cart = []
shopping_cart.append("bread")
shopping_cart.append("milk")
shopping_cart.extend(["eggs", "cheese"])

print(f"Shopping cart: {{shopping_cart}}")

# Finding items
if "milk" in shopping_cart:
    index = shopping_cart.index("milk")
    print(f"Milk is at position {{index}}")

# Counting occurrences
numbers_with_duplicates = [1, 2, 2, 3, 2, 4]
count_of_twos = numbers_with_duplicates.count(2)
print(f"Number of 2s: {{count_of_twos}}")`}</pre>
          </div>

          <div className="py-info-box">
            <h3>💡 When to Use Lists:</h3>
            <ul>
              <li>Need an ordered collection that can be modified</li>
              <li>Want to allow duplicate values</li>
              <li>Need to access items by index</li>
              <li>Building dynamic collections (shopping carts, to-do lists)</li>
            </ul>
          </div>
        </section>

        {/* Tuples */}
        <section className="py-topic-section">
          <h2>🔒 Tuples - Immutable Sequences</h2>
          <p>Tuples are ordered, immutable collections that can store different data types and allow duplicates.</p>
          
          <div className="py-code-block">
            <pre>{`# Creating tuples
empty_tuple = ()
single_item_tuple = (42,)               # Note the comma!
coordinates = (10, 20)
person_info = ("Alice", 25, "Engineer", True)
nested_tuple = ((1, 2), (3, 4), (5, 6))

print(f"Coordinates: {{coordinates}}")
print(f"Person: {{person_info}}")
print(f"Nested: {{nested_tuple}}")

# Creating tuples without parentheses
point = 5, 10                           # Tuple packing
rgb_color = 255, 128, 0

print(f"Point: {{point}}")
print(f"RGB: {{rgb_color}}")

# Accessing elements (same as lists)
name = person_info[0]
age = person_info[1]
profession = person_info[2]

print(f"Name: {{name}}, Age: {{age}}, Job: {{profession}}")

# Tuple unpacking
x, y = coordinates                      # Unpack into variables
name, age, job, is_active = person_info

print(f"Unpacked coordinates: x={{x}}, y={{y}}")
print(f"Unpacked person: {{name}} is {{age}} years old")

# Slicing (same as lists)
numbers_tuple = (1, 2, 3, 4, 5, 6, 7, 8)
first_three = numbers_tuple[:3]         # (1, 2, 3)
last_two = numbers_tuple[-2:]           # (7, 8)

print(f"First three: {{first_three}}")
print(f"Last two: {{last_two}}")

# Tuple methods (limited because immutable)
numbers = (1, 2, 2, 3, 2, 4, 2)
count_twos = numbers.count(2)           # Count occurrences
index_first_two = numbers.index(2)     # Find first occurrence

print(f"Count of 2s: {{count_twos}}")
print(f"First 2 at index: {{index_first_two}}")

# Tuples are immutable - these would cause errors:
# coordinates[0] = 15                   # TypeError!
# coordinates.append(30)                # AttributeError!

# But you can create new tuples
new_coordinates = coordinates + (30,)
print(f"Extended coordinates: {{new_coordinates}}")

# Multiple assignment using tuples
def get_name_age():
    return "Bob", 30

name, age = get_name_age()              # Tuple unpacking
print(f"Returned values: {{name}}, {{age}}")

# Swapping variables using tuples
a = 10
b = 20
print(f"Before swap: a={{a}}, b={{b}}")

a, b = b, a                             # Elegant swap!
print(f"After swap: a={{a}}, b={{b}}")

# Using tuples as dictionary keys (because they're immutable)
locations = {{
    (0, 0): "Origin",
    (1, 2): "Point A", 
    (3, 4): "Point B"
}}

print(f"Location at (1,2): {{locations[(1, 2)]}}")

# Common use cases
# 1. Coordinates and points
point_3d = (10, 20, 30)
rgb_color = (255, 0, 128)

# 2. Database records
student_record = ("John Doe", "12345", "Computer Science", 3.8)
student_id, student_name, major, gpa = student_record[1], student_record[0], student_record[2], student_record[3]

# 3. Function returns (multiple values)
def calculate_circle(radius):
    area = 3.14159 * radius ** 2
    circumference = 2 * 3.14159 * radius
    return area, circumference           # Returns a tuple

area, circumference = calculate_circle(5)
print(f"Circle: Area={{area:.2f}}, Circumference={{circumference:.2f}}")

# 4. Configuration settings (immutable)
DATABASE_CONFIG = ("localhost", 5432, "mydb", "user", "password")
host, port, db_name, username, password = DATABASE_CONFIG

print(f"Connecting to {{db_name}} at {{host}}:{{port}}")

# Tuple vs List performance
import time

# Tuples are faster for creation and access
large_tuple = tuple(range(1000))
large_list = list(range(1000))

# Accessing elements
start = time.time()
for i in range(1000):
    item = large_tuple[i]
tuple_time = time.time() - start

start = time.time()
for i in range(1000):
    item = large_list[i]
list_time = time.time() - start

print(f"Tuple access time: {{tuple_time:.6f}}")
print(f"List access time: {{list_time:.6f}}")`}</pre>
          </div>

          <div className="py-info-box">
            <h3>💡 When to Use Tuples:</h3>
            <ul>
              <li>Data that shouldn't change (coordinates, RGB values, database records)</li>
              <li>Function returns with multiple values</li>
              <li>Dictionary keys (since they're immutable and hashable)</li>
              <li>Configuration settings</li>
              <li>When you need better performance than lists</li>
            </ul>
          </div>
        </section>

        {/* Dictionaries */}
        <section className="py-topic-section">
          <h2>🗂️ Dictionaries - Key-Value Pairs</h2>
          <p>Dictionaries store data as key-value pairs, providing fast lookups and flexible data organization.</p>
          
          <div className="py-code-block">
            <pre>{`# Creating dictionaries
empty_dict = {{}}
student = {{
    "name": "Alice",
    "age": 20,
    "major": "Computer Science",
    "gpa": 3.8
}}

# Alternative creation methods
person = dict(name="Bob", age=25, city="New York")
pairs = dict([("a", 1), ("b", 2), ("c", 3)])

print(f"Student: {{student}}")
print(f"Person: {{person}}")
print(f"From pairs: {{pairs}}")

# Accessing values
name = student["name"]                  # Direct access
age = student.get("age")               # Safe access
major = student.get("major", "Undecided")  # With default value

print(f"Name: {{name}}, Age: {{age}}, Major: {{major}}")

# Adding and modifying
student["email"] = "alice@email.com"   # Add new key-value
student["age"] = 21                    # Modify existing value
student.update({{"year": "Junior", "credits": 90}})  # Add multiple

print(f"Updated student: {{student}}")

# Removing items
removed_value = student.pop("email")   # Remove and return value
student.pop("credits", None)           # Safe removal with default
del student["year"]                    # Delete key-value pair

print(f"After removals: {{student}}")
print(f"Removed email: {{removed_value}}")

# Dictionary methods and operations
keys = list(student.keys())            # Get all keys
values = list(student.values())        # Get all values  
items = list(student.items())          # Get key-value pairs

print(f"Keys: {{keys}}")
print(f"Values: {{values}}")
print(f"Items: {{items}}")

# Checking membership
print(f"Has 'name' key? {{'name' in student}}")
print(f"Has 'phone' key? {{'phone' in student}}")
print(f"Has value 'Alice'? {{'Alice' in student.values()}}")

# Iterating over dictionaries
print("\\nIterating over dictionary:")
for key in student:                    # Iterate over keys
    print(f"{{key}}: {{student[key]}}")

for key, value in student.items():     # Iterate over key-value pairs
    print(f"{{key}} = {{value}}")

# Dictionary comprehensions
numbers = {{str(i): i**2 for i in range(1, 6)}}
word_lengths = {{word: len(word) for word in ["hello", "world", "python"]}}

print(f"Number squares: {{numbers}}")
print(f"Word lengths: {{word_lengths}}")

# Nested dictionaries
students = {{
    "alice": {{
        "age": 20,
        "major": "CS",
        "grades": {{"math": 95, "science": 88}}
    }},
    "bob": {{
        "age": 22,
        "major": "Physics", 
        "grades": {{"math": 92, "science": 96}}
    }}
}}

# Accessing nested data
alice_math_grade = students["alice"]["grades"]["math"]
print(f"Alice's math grade: {{alice_math_grade}}")

# Safe nested access
def get_nested(dictionary, *keys):
    for key in keys:
        if isinstance(dictionary, dict) and key in dictionary:
            dictionary = dictionary[key]
        else:
            return None
    return dictionary

bob_english_grade = get_nested(students, "bob", "grades", "english")
print(f"Bob's English grade: {{bob_english_grade or 'Not found'}}")

# Dictionary as a counter
text = "hello world"
char_count = {{}}

for char in text:
    if char in char_count:
        char_count[char] += 1
    else:
        char_count[char] = 1

print(f"Character counts: {{char_count}}")

# Using defaultdict for cleaner counting
from collections import defaultdict

char_count_auto = defaultdict(int)
for char in text:
    char_count_auto[char] += 1

print(f"Auto character counts: {{dict(char_count_auto)}}")

# Dictionary methods showcase
inventory = {{
    "apples": 50,
    "bananas": 30,
    "oranges": 25
}}

# Get with default
pears = inventory.get("pears", 0)
print(f"Pears in inventory: {{pears}}")

# Setdefault - get or set default
grapes = inventory.setdefault("grapes", 10)
print(f"Grapes after setdefault: {{grapes}}")
print(f"Updated inventory: {{inventory}}")

# Clear all items
inventory_copy = inventory.copy()      # Make a copy first
inventory_copy.clear()
print(f"Cleared copy: {{inventory_copy}}")

# Merge dictionaries (Python 3.9+)
dict1 = {{"a": 1, "b": 2}}
dict2 = {{"c": 3, "d": 4}}
merged = dict1 | dict2                 # Union operator
print(f"Merged dictionaries: {{merged}}")

# Update with union operator
dict1 |= {{"e": 5}}                    # In-place union
print(f"Updated dict1: {{dict1}}")

# Real-world examples
# 1. Configuration settings
config = {{
    "database": {{
        "host": "localhost",
        "port": 5432,
        "name": "myapp"
    }},
    "cache": {{
        "enabled": True,
        "timeout": 300
    }}
}}

# 2. User profiles
users = {{
    "user123": {{
        "username": "alice_dev",
        "email": "alice@example.com",
        "preferences": {{
            "theme": "dark",
            "notifications": True
        }}
    }}
}}

# 3. API response parsing
api_response = {{
    "status": "success",
    "data": {{
        "users": [
            {{"id": 1, "name": "Alice"}},
            {{"id": 2, "name": "Bob"}}
        ]
    }}
}}

users_data = api_response["data"]["users"]
print(f"API users: {{users_data}}")`}</pre>
          </div>

          <div className="py-info-box">
            <h3>💡 When to Use Dictionaries:</h3>
            <ul>
              <li>Need fast lookups by key (O(1) average case)</li>
              <li>Representing structured data (JSON-like objects)</li>
              <li>Counting occurrences or frequencies</li>
              <li>Caching computed results</li>
              <li>Configuration settings and mappings</li>
            </ul>
          </div>
        </section>

        {/* Sets */}
        <section className="py-topic-section">
          <h2>🎯 Sets - Unique Collections</h2>
          <p>Sets are unordered collections of unique elements, perfect for eliminating duplicates and set operations.</p>
          
          <div className="py-code-block">
            <pre>{`# Creating sets
empty_set = set()                      # Note: {{}} creates empty dict!
numbers_set = {{1, 2, 3, 4, 5}}
mixed_set = {{1, "hello", 3.14, True}}

# Creating from lists (removes duplicates)
numbers_list = [1, 2, 2, 3, 3, 3, 4, 5]
unique_numbers = set(numbers_list)

print(f"Original list: {{numbers_list}}")
print(f"Unique set: {{unique_numbers}}")

# Set from string (unique characters)
unique_chars = set("hello world")
print(f"Unique characters: {{unique_chars}}")

# Adding elements
fruits = {{"apple", "banana"}}
fruits.add("cherry")                   # Add single element
fruits.update(["date", "elderberry"])  # Add multiple elements

print(f"Fruits set: {{fruits}}")

# Removing elements
fruits.remove("banana")                # Remove (raises error if not found)
fruits.discard("grape")                # Remove safely (no error if not found)
popped_fruit = fruits.pop()            # Remove arbitrary element

print(f"After removal: {{fruits}}")
print(f"Popped fruit: {{popped_fruit}}")

# Set operations
set_a = {{1, 2, 3, 4, 5}}
set_b = {{4, 5, 6, 7, 8}}

# Union (elements in either set)
union = set_a | set_b                  # OR operator
union_method = set_a.union(set_b)      # Method form

print(f"Union {{set_a}} ∪ {{set_b}} = {{union}}")

# Intersection (elements in both sets)
intersection = set_a & set_b           # AND operator  
intersection_method = set_a.intersection(set_b)

print(f"Intersection {{set_a}} ∩ {{set_b}} = {{intersection}}")

# Difference (elements in first set but not second)
difference = set_a - set_b             # MINUS operator
difference_method = set_a.difference(set_b)

print(f"Difference {{set_a}} - {{set_b}} = {{difference}}")

# Symmetric difference (elements in either set, but not both)
sym_diff = set_a ^ set_b               # XOR operator
sym_diff_method = set_a.symmetric_difference(set_b)

print(f"Symmetric difference {{set_a}} ⊕ {{set_b}} = {{sym_diff}}")

# Set relationships
small_set = {{2, 3}}
large_set = {{1, 2, 3, 4, 5}}

print(f"Is {{small_set}} subset of {{large_set}}? {{small_set.issubset(large_set)}}")
print(f"Is {{large_set}} superset of {{small_set}}? {{large_set.issuperset(small_set)}}")
print(f"Are {{set_a}} and {{set_b}} disjoint? {{set_a.isdisjoint(set_b)}}")

# Practical examples
# 1. Remove duplicates from a list
numbers_with_dupes = [1, 2, 2, 3, 3, 3, 4, 4, 5]
unique_numbers_list = list(set(numbers_with_dupes))
print(f"Removed duplicates: {{unique_numbers_list}}")

# 2. Find common elements
student_a_courses = {{"Math", "Physics", "Chemistry", "Biology"}}
student_b_courses = {{"Physics", "Chemistry", "History", "English"}}
common_courses = student_a_courses & student_b_courses

print(f"Common courses: {{common_courses}}")

# 3. Find unique elements in each list
unique_to_a = student_a_courses - student_b_courses
unique_to_b = student_b_courses - student_a_courses

print(f"Unique to student A: {{unique_to_a}}")
print(f"Unique to student B: {{unique_to_b}}")

# 4. Track visited items
visited_pages = set()
page_views = ["home", "about", "contact", "home", "products", "about"]

for page in page_views:
    visited_pages.add(page)

print(f"Visited pages: {{visited_pages}}")
print(f"Unique page views: {{len(visited_pages)}}")

# 5. Validate permissions
required_permissions = {{"read", "write", "execute"}}
user_permissions = {{"read", "write"}}

missing_permissions = required_permissions - user_permissions
if missing_permissions:
    print(f"Missing permissions: {{missing_permissions}}")
else:
    print("User has all required permissions")

# 6. Tag analysis
post1_tags = {{"python", "programming", "tutorial", "beginner"}}
post2_tags = {{"python", "advanced", "tutorial", "expert"}}
post3_tags = {{"javascript", "web", "frontend", "tutorial"}}

# Find common tags across all posts
all_tags = post1_tags | post2_tags | post3_tags
common_to_all = post1_tags & post2_tags & post3_tags

print(f"All unique tags: {{all_tags}}")
print(f"Common to all posts: {{common_to_all}}")

# Set comprehensions
even_squares = {{x**2 for x in range(1, 11) if x % 2 == 0}}
vowels_in_text = {{char.lower() for char in "Hello World" if char.lower() in "aeiou"}}

print(f"Even squares: {{even_squares}}")
print(f"Vowels found: {{vowels_in_text}}")

# Frozen sets (immutable sets)
immutable_set = frozenset([1, 2, 3, 4])
nested_sets = {{frozenset([1, 2]), frozenset([3, 4])}}  # Sets can contain frozensets

print(f"Frozen set: {{immutable_set}}")
print(f"Nested sets: {{nested_sets}}")

# Performance comparison - membership testing
import time

large_list = list(range(10000))
large_set = set(large_list)

# Test membership in list vs set
start = time.time()
result = 9999 in large_list
list_time = time.time() - start

start = time.time()  
result = 9999 in large_set
set_time = time.time() - start

print(f"List membership test: {{list_time:.6f}} seconds")
print(f"Set membership test: {{set_time:.6f}} seconds")
print(f"Set is {{list_time/set_time:.0f}}x faster for membership testing")`}</pre>
          </div>

          <div className="py-info-box">
            <h3>💡 When to Use Sets:</h3>
            <ul>
              <li>Need to eliminate duplicates from a collection</li>
              <li>Fast membership testing (O(1) average case)</li>
              <li>Mathematical set operations (union, intersection, etc.)</li>
              <li>Tracking unique items (visited pages, unique users)</li>
              <li>Finding common or different elements between collections</li>
            </ul>
          </div>
        </section>

        {/* Strings as Data Structures */}
        <section className="py-topic-section">
          <h2>🔤 Strings - Immutable Character Sequences</h2>
          <p>Strings are immutable sequences of characters with powerful built-in methods for text processing.</p>
          
          <div className="py-code-block">
            <pre>{`# String creation and basic operations
text = "Hello, Python!"
multiline = """This is a
multiline string
with multiple lines"""

raw_string = r"C:\\Users\\name\\file.txt"  # Raw string (no escape processing)
f_string = f"The answer is {{42}}"          # F-string for formatting

print(f"Text: {{text}}")
print(f"Multiline:\\n{{multiline}}")
print(f"Raw: {{raw_string}}")
print(f"F-string: {{f_string}}")

# String indexing and slicing (like lists and tuples)
message = "Python Programming"
first_char = message[0]                # 'P'
last_char = message[-1]                # 'g'
substring = message[7:18]              # 'Programming'

print(f"First: {{first_char}}, Last: {{last_char}}, Substring: {{substring}}")

# String methods - Case manipulation
text = "Hello World"
print(f"Upper: {{text.upper()}}")           # HELLO WORLD
print(f"Lower: {{text.lower()}}")           # hello world
print(f"Title: {{text.title()}}")           # Hello World
print(f"Capitalize: {{text.capitalize()}}") # Hello world
print(f"Swapcase: {{text.swapcase()}}")     # hELLO wORLD

# String methods - Checking content
email = "user@example.com"
password = "MyPassword123"

print(f"Email contains '@': {{'@' in email}}")
print(f"Email starts with 'user': {{email.startswith('user')}}")
print(f"Email ends with '.com': {{email.endswith('.com')}}")
print(f"Password is alphanumeric: {{password.isalnum()}}")
print(f"Password is all digits: {{password.isdigit()}}")
print(f"Password is all alpha: {{password.isalpha()}}")

# String methods - Whitespace and formatting
messy_text = "   Hello, World!   "
print(f"Original: '{{messy_text}}'")
print(f"Stripped: '{{messy_text.strip()}}'")
print(f"Left strip: '{{messy_text.lstrip()}}'")
print(f"Right strip: '{{messy_text.rstrip()}}'")

# Center, left justify, right justify
text = "Python"
print(f"Centered: '{{text.center(20, '-')}}'")     # -------Python-------
print(f"Left justified: '{{text.ljust(15, '.')}}'") # Python.........
print(f"Right justified: '{{text.rjust(15, '.')}}'") # .........Python

# String splitting and joining
sentence = "Python is awesome for data science"
words = sentence.split()               # Split on whitespace
words_comma = sentence.split(' ')      # Split on specific character

print(f"Words: {{words}}")
print(f"Word count: {{len(words)}}")

# Join list back to string
joined = " ".join(words)
joined_with_dash = "-".join(words)

print(f"Rejoined: {{joined}}")
print(f"With dashes: {{joined_with_dash}}")

# String replacement
text = "I love Java programming"
new_text = text.replace("Java", "Python")
print(f"Replaced: {{new_text}}")

# Replace multiple occurrences
text_multi = "The cat in the hat sat on the mat"
no_the = text_multi.replace("the", "a")
print(f"Replaced 'the': {{no_the}}")

# String finding and counting
text = "Python programming with Python is fun"
position = text.find("Python")         # First occurrence
last_position = text.rfind("Python")   # Last occurrence
count = text.count("Python")           # Count occurrences

print(f"First 'Python' at: {{position}}")
print(f"Last 'Python' at: {{last_position}}")
print(f"'Python' appears {{count}} times")

# String formatting - multiple methods
name = "Alice"
age = 25
score = 95.67

# F-strings (modern, preferred)
f_formatted = f"{{name}} is {{age}} years old with a score of {{score:.1f}}"

# .format() method
format_method = "{{}} is {{}} years old with a score of {{:.1f}}".format(name, age, score)

# % formatting (old style)
percent_format = "%s is %d years old with a score of %.1f" % (name, age, score)

print(f"F-string: {{f_formatted}}")
print(f"Format method: {{format_method}}")
print(f"Percent format: {{percent_format}}")

# Advanced string operations
# 1. Text processing
def analyze_text(text):
    words = text.lower().split()
    word_count = len(words)
    char_count = len(text)
    char_count_no_spaces = len(text.replace(" ", ""))
    
    return {{
        "words": word_count,
        "characters": char_count,
        "characters_no_spaces": char_count_no_spaces,
        "sentences": text.count(".") + text.count("!") + text.count("?")
    }}

sample_text = "Hello world! This is Python. Isn't it great?"
analysis = analyze_text(sample_text)
print(f"Text analysis: {{analysis}}")

# 2. Data cleaning
dirty_data = ["  Alice  ", "BOB", "charlie", "  DAVID  "]
clean_data = [name.strip().title() for name in dirty_data]
print(f"Cleaned names: {{clean_data}}")

# 3. Password validation
def validate_password(password):
    checks = {{
        "length": len(password) >= 8,
        "uppercase": any(c.isupper() for c in password),
        "lowercase": any(c.islower() for c in password), 
        "digit": any(c.isdigit() for c in password),
        "special": any(c in "!@#$%^&*" for c in password)
    }}
    
    return all(checks.values()), checks

pwd = "MyPassword123!"
is_valid, details = validate_password(pwd)
print(f"Password valid: {{is_valid}}")
print(f"Password checks: {{details}}")

# 4. URL parsing (simple)
url = "https://www.example.com/path/page?param=value"
protocol = url.split("://")[0]
domain = url.split("://")[1].split("/")[0]
path = "/" + "/".join(url.split("://")[1].split("/")[1:]).split("?")[0]

print(f"Protocol: {{protocol}}")
print(f"Domain: {{domain}}")
print(f"Path: {{path}}")

# 5. CSV-like data processing
csv_data = "Alice,25,Engineer\\nBob,30,Designer\\nCharlie,28,Developer"
rows = csv_data.split("\\n")
parsed_data = []

for row in rows:
    name, age, job = row.split(",")
    parsed_data.append({{
        "name": name,
        "age": int(age),
        "job": job
    }})

print(f"Parsed CSV data: {{parsed_data}}")

# String as iterable
word = "Python"
for i, char in enumerate(word):
    print(f"Character {{i}}: {{char}}")

# String multiplication and concatenation
separator = "-" * 50
header = "REPORT".center(50, "=")

print(separator)
print(header)
print(separator)

# Escape sequences
escaped_text = "Line 1\\nLine 2\\tTabbed text\\\\Backslash\\"Quote\\""
print(f"Escaped text:\\n{{escaped_text}}")`}</pre>
          </div>

          <div className="py-info-box">
            <h3>💡 When to Use Strings:</h3>
            <ul>
              <li>Text processing and manipulation</li>
              <li>User input validation and cleaning</li>
              <li>File path manipulation</li>
              <li>Data parsing (CSV, logs, configuration files)</li>
              <li>Template generation and formatting</li>
            </ul>
          </div>
        </section>

        {/* Choosing the Right Data Structure */}
        <section className="py-topic-section">
          <h2>🎯 Choosing the Right Data Structure</h2>
          
          <div className="py-code-block">
            <pre>{`# Decision guide for choosing data structures

# Use LISTS when:
# - You need ordered, mutable collections
# - You want to allow duplicates
# - You need to access items by index
# - You're building dynamic collections

shopping_cart = []                     # Empty cart
shopping_cart.append("laptop")        # Add items
shopping_cart.extend(["mouse", "keyboard"])
first_item = shopping_cart[0]          # Access by index

# Use TUPLES when:
# - Data shouldn't change (immutable)
# - You need hashable objects (for dict keys)
# - Returning multiple values from functions
# - Performance is critical

coordinates = (10, 20)                # Immutable point
def get_user_info():
    return "Alice", 25, "Engineer"     # Multiple return values

name, age, job = get_user_info()      # Tuple unpacking

# Use DICTIONARIES when:
# - You need key-value mappings
# - Fast lookups are important
# - Data has named attributes
# - Working with JSON-like data

user_profile = {{
    "username": "alice_dev",
    "email": "alice@example.com",
    "settings": {{
        "theme": "dark",
        "notifications": True
    }}
}}

# Fast lookup by key
email = user_profile["email"]         # O(1) lookup

# Use SETS when:
# - You need unique elements only
# - Fast membership testing is important
# - You want set operations (union, intersection)
# - Removing duplicates from collections

unique_visitors = set()
page_views = ["alice", "bob", "alice", "charlie", "bob"]

for visitor in page_views:
    unique_visitors.add(visitor)

print(f"Unique visitors: {{len(unique_visitors)}}")

# Use STRINGS when:
# - Working with text data
# - Need immutable character sequences
# - Processing file paths, URLs, etc.
# - Formatting and template operations

def format_user_message(username, action):
    return f"User {{username}} performed action: {{action}}"

message = format_user_message("alice", "login")

# Performance comparison example
import time
from collections import defaultdict

# Different approaches to counting items
data = ["apple", "banana", "apple", "cherry", "banana", "apple"] * 1000

# Method 1: Using dictionary with manual checking
start_time = time.time()
count_dict = {{}}
for item in data:
    if item in count_dict:
        count_dict[item] += 1
    else:
        count_dict[item] = 1
dict_time = time.time() - start_time

# Method 2: Using dictionary with get()
start_time = time.time()
count_dict_get = {{}}
for item in data:
    count_dict_get[item] = count_dict_get.get(item, 0) + 1
get_time = time.time() - start_time

# Method 3: Using defaultdict
start_time = time.time()
count_defaultdict = defaultdict(int)
for item in data:
    count_defaultdict[item] += 1
defaultdict_time = time.time() - start_time

print(f"Manual checking: {{dict_time:.6f}} seconds")
print(f"Using get(): {{get_time:.6f}} seconds")
print(f"Using defaultdict: {{defaultdict_time:.6f}} seconds")

# Real-world example: Processing user activity
user_activities = [
    ("alice", "login", "2024-01-01 09:00"),
    ("bob", "view_page", "2024-01-01 09:15"),
    ("alice", "purchase", "2024-01-01 09:30"),
    ("charlie", "login", "2024-01-01 10:00"),
    ("alice", "logout", "2024-01-01 10:30")
]

# Using different data structures for different purposes
# 1. List: Keep chronological order
activity_log = user_activities.copy()

# 2. Dictionary: Group by user
user_sessions = {{}}
for username, action, timestamp in user_activities:
    if username not in user_sessions:
        user_sessions[username] = []
    user_sessions[username].append((action, timestamp))

# 3. Set: Find unique users and actions
unique_users = {{username for username, _, _ in user_activities}}
unique_actions = {{action for _, action, _ in user_activities}}

# 4. Tuple: Immutable activity record
activity_summary = (
    len(user_activities),           # Total activities
    len(unique_users),              # Unique users  
    len(unique_actions)             # Unique actions
)

print(f"Activity summary: {{activity_summary}}")
print(f"Unique users: {{unique_users}}")
print(f"User sessions: {{user_sessions}}")

# Memory usage comparison
import sys

# Compare memory usage of different structures
sample_data = list(range(1000))

list_size = sys.getsizeof(sample_data)
tuple_size = sys.getsizeof(tuple(sample_data))
set_size = sys.getsizeof(set(sample_data))
dict_size = sys.getsizeof({{i: i for i in sample_data}})

print(f"\\nMemory usage for 1000 integers:")
print(f"List: {{list_size}} bytes")
print(f"Tuple: {{tuple_size}} bytes")  
print(f"Set: {{set_size}} bytes")
print(f"Dict: {{dict_size}} bytes")

# Nested data structures for complex data
# Student management system example
students_database = {{
    "courses": {{
        "CS101": {{
            "name": "Introduction to Programming",
            "credits": 3,
            "enrolled": ["alice", "bob", "charlie"]
        }},
        "CS102": {{
            "name": "Data Structures",
            "credits": 4,
            "enrolled": ["alice", "david"]
        }}
    }},
    "students": {{
        "alice": {{
            "name": "Alice Smith",
            "courses": ["CS101", "CS102"],
            "grades": {{"CS101": 95, "CS102": 88}}
        }},
        "bob": {{
            "name": "Bob Johnson", 
            "courses": ["CS101"],
            "grades": {{"CS101": 92}}
        }}
    }}
}}

# Query: Find all students in CS101
cs101_students = students_database["courses"]["CS101"]["enrolled"]
print(f"CS101 students: {{cs101_students}}")

# Query: Calculate Alice's GPA
alice_grades = list(students_database["students"]["alice"]["grades"].values())
alice_gpa = sum(alice_grades) / len(alice_grades)
print(f"Alice's GPA: {{alice_gpa:.2f}}")`}</pre>
          </div>

          <div className="py-info-box">
            <h3>📊 Quick Reference Guide:</h3>
            <table style={{width: "100%", borderCollapse: "collapse", marginTop: "10px"}}>
              <thead>
                <tr style={{backgroundColor: "#f0f8ff"}}>
                  <th style={{border: "1px solid #ddd", padding: "8px"}}>Data Structure</th>
                  <th style={{border: "1px solid #ddd", padding: "8px"}}>Ordered</th>
                  <th style={{border: "1px solid #ddd", padding: "8px"}}>Mutable</th>
                  <th style={{border: "1px solid #ddd", padding: "8px"}}>Duplicates</th>
                  <th style={{border: "1px solid #ddd", padding: "8px"}}>Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}><strong>List</strong></td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>✅ Yes</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>✅ Yes</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>✅ Yes</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>Dynamic collections, sequences</td>
                </tr>
                <tr>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}><strong>Tuple</strong></td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>✅ Yes</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>❌ No</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>✅ Yes</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>Fixed data, coordinates, records</td>
                </tr>
                <tr>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}><strong>Dictionary</strong></td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>✅ Yes*</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>✅ Yes</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>❌ Keys No</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>Key-value mappings, lookups</td>
                </tr>
                <tr>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}><strong>Set</strong></td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>❌ No</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>✅ Yes</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>❌ No</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>Unique elements, set operations</td>
                </tr>
                <tr>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}><strong>String</strong></td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>✅ Yes</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>❌ No</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>✅ Yes</td>
                  <td style={{border: "1px solid #ddd", padding: "8px"}}>Text processing, characters</td>
                </tr>
              </tbody>
            </table>
            <p><em>*Dictionaries maintain insertion order as of Python 3.7+</em></p>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a contact book using dictionaries to store names, phone numbers, and emails</li>
              <li>Build a shopping cart system using lists with add, remove, and total price functions</li>
              <li>Implement a simple word frequency counter using dictionaries</li>
              <li>Create a student grade management system using nested data structures</li>
              <li>Write functions to find common elements between multiple lists using sets</li>
              <li>Build a simple inventory system that tracks product quantities</li>
              <li>Create a text analyzer that counts words, characters, and sentences</li>
              <li>Implement a simple cache system using dictionaries</li>
              <li>Design a playlist manager using lists and dictionaries</li>
              <li>Build a voting system that prevents duplicate votes using sets</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DataStructuresOverview;
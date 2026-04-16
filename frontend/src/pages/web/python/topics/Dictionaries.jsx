import React from 'react';
import '../Navbarweb.css';

function Dictionaries() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>📖 Dictionaries</h1>
        <p className="py-topic-subtitle">
          Master key-value pairs and dictionary operations
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>🎯 What are Dictionaries?</h2>
          <p>
            Dictionaries are mutable collections in Python that store data as key-value pairs. 
            They are unordered (before Python 3.7) or insertion-ordered (Python 3.7+), changeable, 
            and do not allow duplicate keys. Dictionaries are perfect for storing related information 
            where you need fast lookups by a unique identifier.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Characteristics of Dictionaries:</h3>
            <ul>
              <li><strong>Mutable:</strong> Can be changed after creation</li>
              <li><strong>Key-Value Pairs:</strong> Each item consists of a key and its associated value</li>
              <li><strong>Unique Keys:</strong> Keys must be unique within a dictionary</li>
              <li><strong>Fast Lookup:</strong> O(1) average time complexity for key access</li>
              <li><strong>Dynamic Size:</strong> Can grow and shrink as needed</li>
              <li><strong>Hashable Keys:</strong> Keys must be immutable (strings, numbers, tuples)</li>
            </ul>
          </div>
        </section>

        {/* Creating Dictionaries */}
        <section className="py-topic-section">
          <h2>🛠️ Creating Dictionaries</h2>
          
          <div className="py-code-block">
            <pre>{`# Different ways to create dictionaries
# Empty dictionary
empty_dict = {{}}
empty_dict_alt = dict()

print(f"Empty dictionary: {{empty_dict}}")
print(f"Type: {{type(empty_dict)}}")

# Dictionary with initial data
student = {{
    "name": "Alice",
    "age": 20,
    "grade": "A",
    "courses": ["Math", "Physics", "Chemistry"]
}}

print(f"Student dictionary: {{student}}")

# Using different key types
mixed_keys = {{
    "string_key": "value1",
    42: "numeric key",
    (1, 2): "tuple key",
    True: "boolean key"
}}

print(f"Mixed keys dictionary: {{mixed_keys}}")

# Dictionary with dict() constructor
person = dict(
    name="Bob",
    age=25,
    city="New York",
    occupation="Engineer"
)

print(f"Person dictionary: {{person}}")

# From list of tuples
pairs = [("a", 1), ("b", 2), ("c", 3)]
dict_from_pairs = dict(pairs)

print(f"Dictionary from pairs: {{dict_from_pairs}}")

# Dictionary comprehension (we'll cover this more later)
squares = {{x: x**2 for x in range(1, 6)}}
print(f"Squares dictionary: {{squares}}")

# Using zip to create dictionary
keys = ["name", "age", "city"]
values = ["Charlie", 30, "Boston"]
zipped_dict = dict(zip(keys, values))

print(f"Zipped dictionary: {{zipped_dict}}")

# Nested dictionaries
company = {{
    "name": "TechCorp",
    "employees": {{
        "alice": {{"role": "developer", "salary": 75000}},
        "bob": {{"role": "designer", "salary": 65000}},
        "charlie": {{"role": "manager", "salary": 85000}}
    }},
    "departments": ["IT", "HR", "Finance"]
}}

print(f"Company dictionary: {{company}}")

# Dictionary with default values using fromkeys()
default_scores = dict.fromkeys(["math", "english", "science"], 0)
print(f"Default scores: {{default_scores}}")

# Creating dictionary with list as values
inventory = {{
    "fruits": ["apple", "banana", "orange"],
    "vegetables": ["carrot", "broccoli", "spinach"],
    "dairy": ["milk", "cheese", "yogurt"]
}}

print(f"Inventory dictionary: {{inventory}}")`}</pre>
          </div>
        </section>

        {/* Accessing Dictionary Elements */}
        <section className="py-topic-section">
          <h2>🔍 Accessing Dictionary Elements</h2>
          
          <div className="py-code-block">
            <pre>{`# Accessing dictionary values
student = {{
    "name": "Alice",
    "age": 20,
    "grade": "A",
    "courses": ["Math", "Physics", "Chemistry"],
    "gpa": 3.8
}}

# Square bracket notation
name = student["name"]                    # "Alice"
age = student["age"]                      # 20

print(f"Student name: {{name}}")
print(f"Student age: {{age}}")

# Using get() method (safer approach)
grade = student.get("grade")              # "A"
gpa = student.get("gpa")                  # 3.8
missing = student.get("address")          # None (no KeyError)
missing_with_default = student.get("address", "Not provided")

print(f"Grade: {{grade}}")
print(f"GPA: {{gpa}}")
print(f"Address: {{missing}}")
print(f"Address with default: {{missing_with_default}}")

# Accessing nested values
company = {{
    "name": "TechCorp",
    "employees": {{
        "alice": {{"role": "developer", "salary": 75000}},
        "bob": {{"role": "designer", "salary": 65000}}
    }}
}}

# Direct nested access
alice_role = company["employees"]["alice"]["role"]
bob_salary = company["employees"]["bob"]["salary"]

print(f"Alice's role: {{alice_role}}")
print(f"Bob's salary: {{bob_salary}}")

# Safe nested access with get()
charlie_role = company.get("employees", {{}}).get("charlie", {{}}).get("role", "Not found")
print(f"Charlie's role: {{charlie_role}}")

# Check if key exists
has_name = "name" in student              # True
has_address = "address" in student        # False

print(f"Has name: {{has_name}}")
print(f"Has address: {{has_address}}")

# Getting all keys, values, and items
print(f"\\nAll keys: {{list(student.keys())}}")
print(f"All values: {{list(student.values())}}")
print(f"All items: {{list(student.items())}}")

# Iterating through dictionary
print("\\nIterating through dictionary:")

# Iterate over keys
for key in student:
    print(f"Key: {{key}}")

# Iterate over keys explicitly
for key in student.keys():
    print(f"Key: {{key}}, Value: {{student[key]}}")

# Iterate over values
for value in student.values():
    print(f"Value: {{value}}")

# Iterate over key-value pairs
for key, value in student.items():
    print(f"{{key}}: {{value}}")

# Advanced access patterns
courses = student["courses"]
first_course = courses[0] if courses else "No courses"
print(f"\\nFirst course: {{first_course}}")

# Dynamic key access
key_to_find = "gpa"
if key_to_find in student:
    value = student[key_to_find]
    print(f"Dynamic access - {{key_to_find}}: {{value}}")

# Multiple key access
keys_to_get = ["name", "age", "grade"]
selected_data = {{key: student.get(key) for key in keys_to_get}}
print(f"Selected data: {{selected_data}}")

# Error handling for missing keys
try:
    missing_value = student["address"]    # This will raise KeyError
except KeyError as e:
    print(f"Key error: {{e}}")

# Safe access with error handling
def safe_get(dictionary, key, default=None):
    try:
        return dictionary[key]
    except KeyError:
        return default

safe_address = safe_get(student, "address", "Address not found")
print(f"Safe address access: {{safe_address}}")`}</pre>
          </div>
        </section>

        {/* Modifying Dictionaries */}
        <section className="py-topic-section">
          <h2>✏️ Modifying Dictionaries</h2>
          
          <div className="py-code-block">
            <pre>{`# Modifying dictionary content
student = {{
    "name": "Alice",
    "age": 20,
    "grade": "A"
}}

print(f"Original: {{student}}")

# Adding new key-value pairs
student["courses"] = ["Math", "Physics"]
student["gpa"] = 3.8
student["active"] = True

print(f"After additions: {{student}}")

# Updating existing values
student["age"] = 21                       # Update age
student["grade"] = "A+"                   # Update grade

print(f"After updates: {{student}}")

# Using update() method
additional_info = {{
    "email": "alice@university.edu",
    "phone": "555-0123",
    "address": "123 Campus Drive"
}}

student.update(additional_info)
print(f"After update(): {{student}}")

# Update with keyword arguments
student.update(semester="Spring", year=2024)
print(f"After keyword update: {{student}}")

# Conditional updates
if "scholarship" not in student:
    student["scholarship"] = "Merit Scholar"

print(f"After conditional update: {{student}}")

# Removing items from dictionary
# Using del keyword
del student["phone"]
print(f"After deleting phone: {{student}}")

# Using pop() method (returns the value)
removed_address = student.pop("address")
print(f"Removed address: {{removed_address}}")
print(f"After pop(): {{student}}")

# Using pop() with default value
removed_item = student.pop("nonexistent", "Not found")
print(f"Pop with default: {{removed_item}}")

# Using popitem() to remove last inserted item (Python 3.7+)
last_item = student.popitem()
print(f"Last item removed: {{last_item}}")
print(f"After popitem(): {{student}}")

# Clear all items
temp_dict = {{"a": 1, "b": 2, "c": 3}}
print(f"Before clear: {{temp_dict}}")
temp_dict.clear()
print(f"After clear: {{temp_dict}}")

# Nested dictionary modifications
company = {{
    "employees": {{
        "alice": {{"role": "developer", "salary": 75000}},
        "bob": {{"role": "designer", "salary": 65000}}
    }}
}}

# Add new employee
company["employees"]["charlie"] = {{"role": "manager", "salary": 85000}}

# Update existing employee
company["employees"]["alice"]["salary"] = 80000
company["employees"]["alice"]["level"] = "Senior"

print(f"Modified company: {{company}}")

# Merge dictionaries (Python 3.9+ with | operator)
dict1 = {{"a": 1, "b": 2}}
dict2 = {{"c": 3, "d": 4}}
dict3 = {{"b": 20, "e": 5}}  # Note: 'b' will be overwritten

# Method 1: Using | operator (Python 3.9+)
# merged = dict1 | dict2 | dict3

# Method 2: Using ** unpacking (works in older Python versions)
merged = {{**dict1, **dict2, **dict3}}
print(f"Merged dictionary: {{merged}}")

# Method 3: Using update() on a copy
merged_copy = dict1.copy()
merged_copy.update(dict2)
merged_copy.update(dict3)
print(f"Merged with update: {{merged_copy}}")

# Increment values
counters = {{"a": 1, "b": 2, "c": 3}}

# Increment existing values
for key in counters:
    counters[key] += 1

print(f"Incremented counters: {{counters}}")

# Safe increment (handle missing keys)
def safe_increment(dictionary, key, increment=1):
    dictionary[key] = dictionary.get(key, 0) + increment

safe_increment(counters, "d", 5)  # New key
safe_increment(counters, "a", 2)  # Existing key

print(f"After safe increments: {{counters}}")

# Bulk updates using dictionary comprehension
original = {{"a": 1, "b": 2, "c": 3, "d": 4}}

# Double all values
doubled = {{k: v * 2 for k, v in original.items()}}
print(f"Doubled values: {{doubled}}")

# Filter and modify
filtered_doubled = {{k: v * 2 for k, v in original.items() if v > 2}}
print(f"Filtered and doubled: {{filtered_doubled}}")

# Transform keys
uppercased_keys = {{k.upper(): v for k, v in original.items()}}
print(f"Uppercased keys: {{uppercased_keys}}")

# Conditional modifications
grades = {{"alice": 85, "bob": 92, "charlie": 78, "diana": 96}}

# Add letter grades
for name, score in grades.items():
    if score >= 90:
        grades[f"{{name}}_letter"] = "A"
    elif score >= 80:
        grades[f"{{name}}_letter"] = "B"
    else:
        grades[f"{{name}}_letter"] = "C"

print(f"Grades with letters: {{grades}}")

# Setting default values using setdefault()
inventory = {{"apples": 10, "bananas": 5}}

# setdefault() returns the value if key exists, otherwise sets and returns default
apples = inventory.setdefault("apples", 0)      # Returns 10 (existing)
oranges = inventory.setdefault("oranges", 0)    # Sets and returns 0 (new)

print(f"Apples: {{apples}}")
print(f"Oranges: {{oranges}}")
print(f"Updated inventory: {{inventory}}")`}</pre>
          </div>
        </section>

        {/* Dictionary Methods and Operations */}
        <section className="py-topic-section">
          <h2>⚙️ Dictionary Methods and Operations</h2>
          
          <div className="py-code-block">
            <pre>{`# Comprehensive dictionary methods
student_grades = {{
    "alice": 85,
    "bob": 92,
    "charlie": 78,
    "diana": 96,
    "eve": 89
}}

print(f"Original grades: {{student_grades}}")

# Dictionary information methods
print(f"\\nDictionary Information:")
print(f"Length: {{len(student_grades)}}")
print(f"Keys: {{list(student_grades.keys())}}")
print(f"Values: {{list(student_grades.values())}}")
print(f"Items: {{list(student_grades.items())}}")

# Dictionary copying
shallow_copy = student_grades.copy()
deep_copy_manual = {{k: v for k, v in student_grades.items()}}

print(f"\\nShallow copy: {{shallow_copy}}")

# Modify original and see effect on copies
student_grades["alice"] = 90
print(f"Original after modification: {{student_grades}}")
print(f"Shallow copy after original modification: {{shallow_copy}}")

# Dictionary comparison
dict1 = {{"a": 1, "b": 2, "c": 3}}
dict2 = {{"a": 1, "b": 2, "c": 3}}
dict3 = {{"a": 1, "b": 2, "c": 4}}

print(f"\\nDictionary Comparisons:")
print(f"dict1 == dict2: {{dict1 == dict2}}")    # True
print(f"dict1 == dict3: {{dict1 == dict3}}")    # False
print(f"dict1 != dict3: {{dict1 != dict3}}")    # True

# Dictionary membership testing
print(f"\\nMembership Testing:")
print(f"'alice' in student_grades: {{'alice' in student_grades}}")
print(f"'frank' in student_grades: {{'frank' in student_grades}}")
print(f"85 in student_grades.values(): {{85 in student_grades.values()}}")
print(f"('bob', 92) in student_grades.items(): {{('bob', 92) in student_grades.items()}}")

# Finding minimum and maximum
print(f"\\nMin/Max Operations:")
print(f"Student with min grade: {{min(student_grades, key=student_grades.get)}}")
print(f"Student with max grade: {{max(student_grades, key=student_grades.get)}}")
print(f"Minimum grade: {{min(student_grades.values())}}")
print(f"Maximum grade: {{max(student_grades.values())}}")

# Sorting dictionaries
print(f"\\nSorting:")

# Sort by keys
sorted_by_keys = dict(sorted(student_grades.items()))
print(f"Sorted by keys: {{sorted_by_keys}}")

# Sort by values
sorted_by_values = dict(sorted(student_grades.items(), key=lambda item: item[1]))
print(f"Sorted by values (ascending): {{sorted_by_values}}")

# Sort by values descending
sorted_by_values_desc = dict(sorted(student_grades.items(), key=lambda item: item[1], reverse=True))
print(f"Sorted by values (descending): {{sorted_by_values_desc}}")

# Dictionary operations with sets
grades1 = {{"alice": 85, "bob": 92, "charlie": 78}}
grades2 = {{"bob": 88, "diana": 96, "eve": 89}}

# Keys operations
common_students = set(grades1.keys()) & set(grades2.keys())
all_students = set(grades1.keys()) | set(grades2.keys())
unique_to_grades1 = set(grades1.keys()) - set(grades2.keys())

print(f"\\nSet Operations on Keys:")
print(f"Common students: {{common_students}}")
print(f"All students: {{all_students}}")
print(f"Unique to grades1: {{unique_to_grades1}}")

# Filtering dictionaries
high_performers = {{name: grade for name, grade in student_grades.items() if grade >= 90}}
print(f"\\nHigh performers (>=90): {{high_performers}}")

# Dictionary statistics
grades_list = list(student_grades.values())
average_grade = sum(grades_list) / len(grades_list)
grade_count = len(grades_list)

print(f"\\nStatistics:")
print(f"Average grade: {{average_grade}}")
print(f"Number of students: {{grade_count}}")
print(f"Grade range: {{min(grades_list)}} - {{max(grades_list)}}")

# Grouping with dictionaries
students_data = [
    {{"name": "alice", "grade": 85, "subject": "math"}},
    {{"name": "bob", "grade": 92, "subject": "math"}},
    {{"name": "alice", "grade": 88, "subject": "science"}},
    {{"name": "charlie", "grade": 78, "subject": "math"}},
    {{"name": "bob", "grade": 95, "subject": "science"}}
]

# Group by subject
by_subject = {{}}
for student in students_data:
    subject = student["subject"]
    if subject not in by_subject:
        by_subject[subject] = []
    by_subject[subject].append(student)

print(f"\\nGrouped by subject: {{by_subject}}")

# Group by student
by_student = {{}}
for student in students_data:
    name = student["name"]
    if name not in by_student:
        by_student[name] = []
    by_student[name].append(student)

print(f"Grouped by student: {{by_student}}")

# Dictionary aggregation
subject_averages = {{}}
for subject, students in by_subject.items():
    total_grade = sum(s["grade"] for s in students)
    count = len(students)
    subject_averages[subject] = total_grade / count

print(f"\\nSubject averages: {{subject_averages}}")

# Dictionary validation
def validate_student_record(record):
    required_keys = ["name", "age", "grade"]
    
    # Check if all required keys exist
    missing_keys = [key for key in required_keys if key not in record]
    
    if missing_keys:
        return False, f"Missing keys: {{missing_keys}}"
    
    # Validate data types and ranges
    if not isinstance(record["name"], str) or len(record["name"]) == 0:
        return False, "Name must be a non-empty string"
    
    if not isinstance(record["age"], int) or record["age"] < 0:
        return False, "Age must be a positive integer"
    
    if not isinstance(record["grade"], (int, float)) or not (0 <= record["grade"] <= 100):
        return False, "Grade must be between 0 and 100"
    
    return True, "Valid record"

# Test validation
test_records = [
    {{"name": "Alice", "age": 20, "grade": 85}},         # Valid
    {{"name": "", "age": 20, "grade": 85}},              # Invalid name
    {{"name": "Bob", "age": -5, "grade": 85}},           # Invalid age
    {{"name": "Charlie", "age": 20, "grade": 105}},      # Invalid grade
    {{"name": "Diana", "age": 20}}                       # Missing grade
]

print(f"\\nValidation Results:")
for i, record in enumerate(test_records):
    is_valid, message = validate_student_record(record)
    print(f"Record {{i+1}}: {{is_valid}} - {{message}}")

# Dictionary performance tips
import time

# Demonstrate dictionary vs list lookup performance
large_dict = {{i: f"value_{{i}}" for i in range(100000)}}
large_list = [f"value_{{i}}" for i in range(100000)]

# Dictionary lookup (O(1))
start_time = time.time()
for _ in range(1000):
    value = large_dict.get(50000)
dict_time = time.time() - start_time

# List search (O(n))
start_time = time.time()
for _ in range(1000):
    try:
        index = large_list.index("value_50000")
    except ValueError:
        pass
list_time = time.time() - start_time

print(f"\\nPerformance Comparison:")
print(f"Dictionary lookup time: {{dict_time}} seconds")
print(f"List search time: {{list_time}} seconds")
print(f"Dictionary is {{list_time / dict_time if dict_time > 0 else 'much'}} times faster")`}</pre>
          </div>
        </section>

        {/* Advanced Dictionary Patterns */}
        <section className="py-topic-section">
          <h2>🚀 Advanced Dictionary Patterns</h2>
          
          <div className="py-code-block">
            <pre>{`# Advanced dictionary usage patterns

# 1. Default dictionaries using collections.defaultdict
from collections import defaultdict, Counter

# Regular dictionary approach (verbose)
word_count = {{}}
text = "hello world hello python world"
for word in text.split():
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

print(f"Manual word count: {{word_count}}")

# Using defaultdict (cleaner)
word_count_dd = defaultdict(int)  # int() returns 0
for word in text.split():
    word_count_dd[word] += 1

print(f"Defaultdict word count: {{dict(word_count_dd)}}")

# Grouping with defaultdict
students = [
    ("Alice", "Math"),
    ("Bob", "Science"),
    ("Charlie", "Math"),
    ("Diana", "Science"),
    ("Eve", "Math")
]

groups = defaultdict(list)
for name, subject in students:
    groups[subject].append(name)

print(f"\\nGrouped students: {{dict(groups)}}")

# 2. Counter for counting
from collections import Counter

text = "hello world hello python world programming"
word_counter = Counter(text.split())

print(f"\\nCounter example: {{word_counter}}")
print(f"Most common words: {{word_counter.most_common(2)}}")

# Counter operations
counter1 = Counter("hello")
counter2 = Counter("world")

print(f"Counter1: {{counter1}}")
print(f"Counter2: {{counter2}}")
print(f"Combined: {{counter1 + counter2}}")
print(f"Difference: {{counter1 - counter2}}")

# 3. Dictionary comprehensions (advanced patterns)
# Nested dictionary comprehension
multiplication_table = {{
    i: {{j: i * j for j in range(1, 6)}} 
    for i in range(1, 6)
}}

print(f"\\nMultiplication table: {{multiplication_table}}")

# Conditional dictionary comprehension
numbers = range(1, 11)
even_squares = {{n: n**2 for n in numbers if n % 2 == 0}}
print(f"Even squares: {{even_squares}}")

# Dictionary comprehension with string manipulation
names = ["Alice", "bob", "CHARLIE", "diana"]
normalized_names = {{name.lower(): name.title() for name in names}}
print(f"Normalized names: {{normalized_names}}")

# 4. Dictionary as a switch/case replacement
def process_grade(grade):
    grade_actions = {{
        "A": lambda: "Excellent! Keep up the great work!",
        "B": lambda: "Good job! You're doing well.",
        "C": lambda: "Average performance. Room for improvement.",
        "D": lambda: "Below average. Need to study more.",
        "F": lambda: "Failing grade. Seek help immediately."
    }}
    
    action = grade_actions.get(grade, lambda: "Invalid grade")
    return action()

print(f"\\nGrade responses:")
for grade in ["A", "C", "F", "X"]:
    print(f"Grade {{grade}}: {{process_grade(grade)}}")

# 5. Caching with dictionaries
cache = {{}}

def fibonacci_cached(n):
    if n in cache:
        return cache[n]
    
    if n <= 1:
        result = n
    else:
        result = fibonacci_cached(n-1) + fibonacci_cached(n-2)
    
    cache[n] = result
    return result

print(f"\\nFibonacci with caching:")
for i in range(10):
    print(f"fib({{i}}) = {{fibonacci_cached(i)}}")

print(f"Cache contents: {{cache}}")

# 6. Configuration management
config = {{
    "database": {{
        "host": "localhost",
        "port": 5432,
        "name": "myapp",
        "credentials": {{
            "username": "admin",
            "password": "secret"
        }}
    }},
    "api": {{
        "base_url": "https://api.example.com",
        "timeout": 30,
        "retries": 3
    }},
    "features": {{
        "logging": True,
        "debug": False,
        "cache": True
    }}
}}

def get_config_value(path, default=None):
    """Get nested configuration value using dot notation."""
    keys = path.split('.')
    value = config
    
    try:
        for key in keys:
            value = value[key]
        return value
    except (KeyError, TypeError):
        return default

print(f"\\nConfiguration access:")
print(f"Database host: {{get_config_value('database.host')}}")
print(f"API timeout: {{get_config_value('api.timeout')}}")
print(f"Missing value: {{get_config_value('missing.key', 'default')}}")

# 7. State machines with dictionaries
class SimpleStateMachine:
    def __init__(self):
        self.state = "idle"
        self.transitions = {{
            "idle": {{
                "start": "running",
                "configure": "configuring"
            }},
            "running": {{
                "pause": "paused",
                "stop": "stopped",
                "error": "error"
            }},
            "paused": {{
                "resume": "running",
                "stop": "stopped"
            }},
            "stopped": {{
                "reset": "idle"
            }},
            "configuring": {{
                "save": "idle",
                "cancel": "idle"
            }},
            "error": {{
                "reset": "idle"
            }}
        }}
    
    def transition(self, action):
        if self.state in self.transitions and action in self.transitions[self.state]:
            old_state = self.state
            self.state = self.transitions[self.state][action]
            return f"Transitioned from {{old_state}} to {{self.state}}"
        else:
            return f"Invalid transition: {{action}} from {{self.state}}"

sm = SimpleStateMachine()
print(f"\\nState machine demo:")
print(f"Initial state: {{sm.state}}")

actions = ["start", "pause", "resume", "stop", "reset", "invalid"]
for action in actions:
    result = sm.transition(action)
    print(f"Action '{{action}}': {{result}} (Now: {{sm.state}})")

# 8. Dictionary-based data transformation pipeline
def transform_data(data, transformations):
    """Apply a series of transformations to data using a dictionary pipeline."""
    result = data
    
    for name, transform_func in transformations.items():
        result = transform_func(result)
        print(f"After {{name}}: {{result}}")
    
    return result

# Example transformations
transformations = {{
    "uppercase": lambda x: x.upper(),
    "remove_spaces": lambda x: x.replace(" ", ""),
    "add_prefix": lambda x: "processed_" + x,
    "reverse": lambda x: x[::-1]
}}

original_text = "hello world"
print(f"\\nTransformation pipeline:")
print(f"Original: {{original_text}}")
final_result = transform_data(original_text, transformations)
print(f"Final result: {{final_result}}")

# 9. Dictionary-based event system
class EventSystem:
    def __init__(self):
        self.events = defaultdict(list)
    
    def subscribe(self, event_name, callback):
        self.events[event_name].append(callback)
    
    def publish(self, event_name, data=None):
        for callback in self.events[event_name]:
            callback(data)

# Example usage
event_system = EventSystem()

def on_user_login(data):
    print(f"User logged in: {{data}}")

def on_user_logout(data):
    print(f"User logged out: {{data}}")

def send_welcome_email(data):
    print(f"Sending welcome email to: {{data}}")

event_system.subscribe("login", on_user_login)
event_system.subscribe("login", send_welcome_email)
event_system.subscribe("logout", on_user_logout)

print(f"\\nEvent system demo:")
event_system.publish("login", "alice@example.com")
event_system.publish("logout", "alice@example.com")

# 10. Dictionary-based template system
def render_template(template, context):
    """Simple template renderer using dictionary context."""
    import re
    
    def replace_var(match):
        var_name = match.group(1)
        return str(context.get(var_name, f"{{{{{{var_name}}}}}}"))
    
    return re.sub(r'\\{{\\{{(.+?)\\}}\\}}', replace_var, template)

template = "Hello {{{{name}}}}, you have {{{{count}}}} new messages in {{{{folder}}}}."
context = {{
    "name": "Alice",
    "count": 5,
    "folder": "Inbox"
}}

print(f"\\nTemplate system:")
print(f"Template: {{template}}")
print(f"Rendered: {{render_template(template, context)}}")

# Missing variable example
incomplete_context = {{"name": "Bob"}}
print(f"With missing vars: {{render_template(template, incomplete_context)}}")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Dictionary Best Practices:</h3>
            <ul>
              <li><strong>Use get() for safe access:</strong> Prefer `dict.get(key, default)` over `dict[key]`</li>
              <li><strong>Choose appropriate key types:</strong> Use immutable types (strings, numbers, tuples)</li>
              <li><strong>Use defaultdict for grouping:</strong> Simplifies code when building collections</li>
              <li><strong>Leverage dict comprehensions:</strong> More readable than loops for simple transformations</li>
              <li><strong>Consider Counter for counting:</strong> Built-in solution for frequency analysis</li>
              <li><strong>Use setdefault() wisely:</strong> Good for initializing nested structures</li>
              <li><strong>Validate input data:</strong> Check keys and values before processing</li>
              <li><strong>Document key meanings:</strong> Clear documentation for complex nested structures</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a student grade management system using nested dictionaries</li>
              <li>Build a word frequency analyzer that processes text files</li>
              <li>Implement a shopping cart system with product management</li>
              <li>Design a configuration manager for application settings</li>
              <li>Create a simple caching system for expensive function calls</li>
              <li>Build a contact directory with search and filter capabilities</li>
              <li>Implement a basic inventory tracking system</li>
              <li>Design a menu-driven calculator using dictionary dispatch</li>
              <li>Create a simple state machine for a game or application</li>
              <li>Build a data aggregation system that groups and summarizes information</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dictionaries;
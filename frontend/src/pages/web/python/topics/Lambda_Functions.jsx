import React from 'react';
import '../Navbarweb.css';

function LambdaFunctions() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>λ Lambda Functions</h1>
        <p className="py-topic-subtitle">
          Learn about anonymous functions and functional programming
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>🎯 What are Lambda Functions?</h2>
          <p>
            Lambda functions are small, anonymous functions that can have any number of arguments but 
            can only have one expression. They are also known as "anonymous functions" because they 
            don't have a name like regular functions. Lambda functions are particularly useful for 
            functional programming, short operations, and as arguments to higher-order functions.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Characteristics of Lambda Functions:</h3>
            <ul>
              <li><strong>Anonymous:</strong> No function name required</li>
              <li><strong>Single Expression:</strong> Can only contain one expression (not statements)</li>
              <li><strong>Inline Definition:</strong> Defined where they're used</li>
              <li><strong>Return Value:</strong> Automatically return the result of their expression</li>
              <li><strong>Functional Programming:</strong> Perfect for map(), filter(), reduce(), and sort()</li>
              <li><strong>Concise:</strong> Shorter syntax for simple operations</li>
            </ul>
          </div>
        </section>

        {/* Basic Syntax */}
        <section className="py-topic-section">
          <h2>🛠️ Basic Syntax and Examples</h2>
          
          <div className="py-code-block">
            <pre>{`# Basic lambda syntax: lambda arguments: expression

print("Basic Lambda Function Examples:")

# Simple lambda function
square = lambda x: x ** 2
print(f"Square of 5: {{square(5)}}")

# Lambda with multiple parameters
add = lambda x, y: x + y
print(f"Add 3 + 7: {{add(3, 7)}}")

# Lambda with conditional expression
max_value = lambda a, b: a if a > b else b
print(f"Max of 10 and 15: {{max_value(10, 15)}}")

# Comparison with regular functions
print(f"\\nRegular Function vs Lambda:")

# Regular function
def regular_square(x):
    return x ** 2

# Lambda equivalent
lambda_square = lambda x: x ** 2

print(f"Regular function: {{regular_square(4)}}")
print(f"Lambda function: {{lambda_square(4)}}")

# Multiple arguments
multiply = lambda x, y, z: x * y * z
print(f"Multiply 2 * 3 * 4: {{multiply(2, 3, 4)}}")

# String operations
uppercase = lambda s: s.upper()
print(f"Uppercase 'hello': {{uppercase('hello')}}")

# Boolean operations
is_even = lambda n: n % 2 == 0
print(f"Is 8 even? {{is_even(8)}}")
print(f"Is 7 even? {{is_even(7)}}")

# Complex expressions
calculate_area = lambda length, width: length * width
print(f"Rectangle area (5x3): {{calculate_area(5, 3)}}")

# Temperature conversion
celsius_to_fahrenheit = lambda c: (c * 9/5) + 32
print(f"25°C in Fahrenheit: {{celsius_to_fahrenheit(25)}}")

# String manipulation
reverse_string = lambda s: s[::-1]
print(f"Reverse 'python': {{reverse_string('python')}}")

# Mathematical operations
power_of = lambda base, exp: base ** exp
print(f"2 to the power of 5: {{power_of(2, 5)}}")

# Default parameter values in lambda
greet = lambda name, greeting="Hello": f"{{greeting}}, {{name}}!"
print(f"Default greeting: {{greet('Alice')}}")
print(f"Custom greeting: {{greet('Bob', 'Hi')}}")

# Working with tuples
get_first = lambda t: t[0] if t else None
get_second = lambda t: t[1] if len(t) > 1 else None

sample_tuple = (10, 20, 30)
print(f"\\nTuple operations:")
print(f"First element: {{get_first(sample_tuple)}}")
print(f"Second element: {{get_second(sample_tuple)}}")

# List operations
get_length = lambda lst: len(lst)
is_empty = lambda lst: len(lst) == 0

sample_list = [1, 2, 3, 4, 5]
empty_list = []

print(f"\\nList operations:")
print(f"Length of {{sample_list}}: {{get_length(sample_list)}}")
print(f"Is empty list empty? {{is_empty(empty_list)}}")
print(f"Is sample list empty? {{is_empty(sample_list)}}")

# Dictionary operations
get_value = lambda d, key, default=None: d.get(key, default)
sample_dict = {{"name": "John", "age": 30}}

print(f"\\nDictionary operations:")
print(f"Get name: {{get_value(sample_dict, 'name')}}")
print(f"Get height (with default): {{get_value(sample_dict, 'height', 'Unknown')}}")

# Nested lambda functions
add_then_multiply = lambda x, y: (lambda result: result * 2)(x + y)
print(f"\\nNested lambda (3+4)*2: {{add_then_multiply(3, 4)}}")

# Lambda with type checking
safe_divide = lambda x, y: x / y if y != 0 else float('inf')
print(f"\\nSafe division:")
print(f"10 / 2 = {{safe_divide(10, 2)}}")
print(f"10 / 0 = {{safe_divide(10, 0)}}")

# Working with classes (lambda as method)
class Calculator:
    add = lambda self, x, y: x + y
    subtract = lambda self, x, y: x - y

calc = Calculator()
print(f"\\nLambda in class:")
print(f"Calculator add: {{calc.add(10, 5)}}")
print(f"Calculator subtract: {{calc.subtract(10, 5)}}")

# Lambda returning lambda (closure)
def multiplier(factor):
    return lambda x: x * factor

double = multiplier(2)
triple = multiplier(3)

print(f"\\nClosure with lambda:")
print(f"Double 7: {{double(7)}}")
print(f"Triple 7: {{triple(7)}}")

# Immediate lambda execution
result = (lambda x, y: x + y)(5, 3)
print(f"\\nImmediate execution: {{result}}")

# Lambda with unpacking
point_distance = lambda p1, p2: ((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2)**0.5
point1 = (0, 0)
point2 = (3, 4)
print(f"\\nDistance between {{point1}} and {{point2}}: {{point_distance(point1, point2)}}")

# Working with *args
sum_all = lambda *args: sum(args)
print(f"Sum of multiple values: {{sum_all(1, 2, 3, 4, 5)}}")

# Working with **kwargs
format_person = lambda **kwargs: ", ".join([f"{{k}}: {{v}}" for k, v in kwargs.items()])
print(f"Format person: {{format_person(name='Alice', age=25, city='New York')}}")`}</pre>
          </div>
        </section>

        {/* Higher-Order Functions */}
        <section className="py-topic-section">
          <h2>🔧 Lambda with Higher-Order Functions</h2>
          
          <div className="py-code-block">
            <pre>{`# Using lambda functions with map(), filter(), reduce(), and sort()

print("Lambda with Higher-Order Functions:")

# MAP() - Apply function to all items in a list
numbers = [1, 2, 3, 4, 5]

# Square all numbers
squared = list(map(lambda x: x**2, numbers))
print(f"Original: {{numbers}}")
print(f"Squared: {{squared}}")

# Convert to strings
str_numbers = list(map(lambda x: str(x), numbers))
print(f"As strings: {{str_numbers}}")

# Temperature conversion
celsius_temps = [0, 20, 30, 37, 100]
fahrenheit_temps = list(map(lambda c: (c * 9/5) + 32, celsius_temps))
print(f"\\nCelsius: {{celsius_temps}}")
print(f"Fahrenheit: {{fahrenheit_temps}}")

# String operations with map
words = ["hello", "world", "python"]
uppercase_words = list(map(lambda s: s.upper(), words))
reversed_words = list(map(lambda s: s[::-1], words))

print(f"\\nOriginal words: {{words}}")
print(f"Uppercase: {{uppercase_words}}")
print(f"Reversed: {{reversed_words}}")

# FILTER() - Filter items based on condition
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter even numbers
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(f"\\nAll numbers: {{numbers}}")
print(f"Even numbers: {{evens}}")

# Filter numbers greater than 5
greater_than_5 = list(filter(lambda x: x > 5, numbers))
print(f"Greater than 5: {{greater_than_5}}")

# Filter strings by length
words = ["cat", "elephant", "dog", "hippopotamus", "ant"]
long_words = list(filter(lambda w: len(w) > 3, words))
short_words = list(filter(lambda w: len(w) <= 3, words))

print(f"\\nAll words: {{words}}")
print(f"Long words (>3): {{long_words}}")
print(f"Short words (≤3): {{short_words}}")

# Filter positive numbers
mixed_numbers = [-5, -1, 0, 3, 7, -2, 10]
positive_nums = list(filter(lambda x: x > 0, mixed_numbers))
print(f"\\nMixed numbers: {{mixed_numbers}}")
print(f"Positive only: {{positive_nums}}")

# REDUCE() - Combine all items into single value
from functools import reduce

# Sum all numbers
numbers = [1, 2, 3, 4, 5]
total = reduce(lambda x, y: x + y, numbers)
print(f"\\nSum using reduce: {{total}}")

# Find maximum
maximum = reduce(lambda x, y: x if x > y else y, numbers)
print(f"Maximum using reduce: {{maximum}}")

# Concatenate strings
words = ["Hello", " ", "World", "!"]
sentence = reduce(lambda x, y: x + y, words)
print(f"Concatenated: '{{sentence}}'")

# Calculate factorial
factorial_5 = reduce(lambda x, y: x * y, range(1, 6))
print(f"5! = {{factorial_5}}")

# SORT() with lambda key function
print(f"\\nSorting with Lambda:")

# Sort by absolute value
numbers = [-5, 2, -1, 8, -3]
sorted_by_abs = sorted(numbers, key=lambda x: abs(x))
print(f"Original: {{numbers}}")
print(f"Sorted by absolute value: {{sorted_by_abs}}")

# Sort strings by length
words = ["python", "java", "c", "javascript", "go"]
sorted_by_length = sorted(words, key=lambda w: len(w))
print(f"\\nWords: {{words}}")
print(f"Sorted by length: {{sorted_by_length}}")

# Sort tuples by second element
students = [("Alice", 85), ("Bob", 90), ("Charlie", 78), ("Diana", 92)]
sorted_by_grade = sorted(students, key=lambda student: student[1])
print(f"\\nStudents: {{students}}")
print(f"Sorted by grade: {{sorted_by_grade}}")

# Sort dictionaries by value
scores = [{{"name": "Alice", "score": 85}}, {{"name": "Bob", "score": 92}}, {{"name": "Charlie", "score": 78}}]
sorted_by_score = sorted(scores, key=lambda x: x["score"], reverse=True)
print(f"\\nSorted by score (descending):")
for student in sorted_by_score:
    print(f"  {{student['name']}}: {{student['score']}}")

# Complex sorting - by multiple criteria
people = [
    {{"name": "Alice", "age": 25, "salary": 50000}},
    {{"name": "Bob", "age": 30, "salary": 60000}},
    {{"name": "Charlie", "age": 25, "salary": 55000}},
    {{"name": "Diana", "age": 30, "salary": 58000}}
]

# Sort by age, then by salary
sorted_people = sorted(people, key=lambda p: (p["age"], p["salary"]))
print(f"\\nSorted by age, then salary:")
for person in sorted_people:
    print(f"  {{person['name']}}: {{person['age']}} years, $" + str(person['salary']))

# Combining map, filter, and lambda
print(f"\\nCombining Multiple Operations:")

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Get squares of even numbers greater than 2
result = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0 and x > 2, numbers)))
print(f"Squares of even numbers > 2: {{result}}")

# Process words: filter long words, then capitalize
words = ["cat", "elephant", "dog", "hippopotamus", "ant", "butterfly"]
processed = list(map(lambda w: w.upper(), filter(lambda w: len(w) > 4, words)))
print(f"Long words capitalized: {{processed}}")

# Chain operations with reduce
numbers = [1, 2, 3, 4, 5]
# Filter evens, square them, then sum
chain_result = reduce(
    lambda x, y: x + y,
    map(lambda x: x**2, filter(lambda x: x % 2 == 0, numbers))
)
print(f"Sum of squares of even numbers: {{chain_result}}")

# GROUP BY equivalent using lambda and dictionaries
from itertools import groupby

# Group words by first letter
words = ["apple", "banana", "cherry", "apricot", "blueberry", "coconut"]
words_sorted = sorted(words, key=lambda w: w[0])  # Must sort first for groupby
grouped = {{k: list(g) for k, g in groupby(words_sorted, key=lambda w: w[0])}}
print(f"\\nGrouped by first letter: {{grouped}}")

# Group numbers by even/odd
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
grouped_numbers = {{
    "even": list(filter(lambda x: x % 2 == 0, numbers)),
    "odd": list(filter(lambda x: x % 2 == 1, numbers))
}}
print(f"Grouped numbers: {{grouped_numbers}}")

# ALL() and ANY() with lambda
print(f"\\nUsing all() and any():")

numbers = [2, 4, 6, 8, 10]
all_even = all(map(lambda x: x % 2 == 0, numbers))
print(f"All numbers even? {{all_even}}")

mixed_numbers = [1, 2, 3, 4, 5]
any_even = any(map(lambda x: x % 2 == 0, mixed_numbers))
print(f"Any numbers even? {{any_even}}")

# Check if all words are longer than 3 characters
words = ["python", "java", "javascript"]
all_long = all(map(lambda w: len(w) > 3, words))
print(f"All words > 3 chars? {{all_long}}")

# MIN() and MAX() with lambda key
print(f"\\nMin/Max with custom key:")

words = ["python", "java", "c", "javascript"]
shortest = min(words, key=lambda w: len(w))
longest = max(words, key=lambda w: len(w))
print(f"Shortest word: {{shortest}}")
print(f"Longest word: {{longest}}")

# Find student with highest grade
students = [{{"name": "Alice", "grade": 85}}, {{"name": "Bob", "grade": 92}}, {{"name": "Charlie", "grade": 78}}]
top_student = max(students, key=lambda s: s["grade"])
print(f"Top student: {{top_student['name']}} with grade {{top_student['grade']}}")

# Find closest number to target
numbers = [10, 15, 8, 22, 18]
target = 16
closest = min(numbers, key=lambda x: abs(x - target))
print(f"Closest to {{target}}: {{closest}}")

# Functional programming style
print(f"\\nFunctional Programming Style:")

# Pipeline of operations
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Traditional approach
result_traditional = []
for x in data:
    if x % 2 == 0:
        result_traditional.append(x ** 2)
result_traditional = sum(result_traditional)

# Functional approach with lambda
result_functional = reduce(
    lambda acc, x: acc + x,
    map(lambda x: x ** 2, filter(lambda x: x % 2 == 0, data)),
    0  # Initial value for reduce
)

print(f"Traditional result: {{result_traditional}}")
print(f"Functional result: {{result_functional}}")

# Data transformation pipeline
employees = [
    {{"name": "Alice", "department": "IT", "salary": 75000}},
    {{"name": "Bob", "department": "HR", "salary": 60000}},
    {{"name": "Charlie", "department": "IT", "salary": 80000}},
    {{"name": "Diana", "department": "Finance", "salary": 70000}}
]

# Get average salary of IT department
it_avg_salary = reduce(
    lambda acc, x: acc + x,
    map(lambda emp: emp["salary"], filter(lambda emp: emp["department"] == "IT", employees))
) / len(list(filter(lambda emp: emp["department"] == "IT", employees)))

print(f"\\nIT department average salary: {{it_avg_salary}}")

# Transform data structure
transformed_employees = list(map(
    lambda emp: {{
        "full_info": f"{{emp['name']}} ({{emp['department']}})",
        "annual_salary": emp["salary"],
        "monthly_salary": emp["salary"] // 12
    }},
    employees
))

print(f"\\nTransformed employee data:")
for emp in transformed_employees:
    print(f"  {{emp['full_info']}}: $" + str(emp['monthly_salary']) + "/month")`}</pre>
          </div>
        </section>

        {/* Advanced Patterns */}
        <section className="py-topic-section">
          <h2>🚀 Advanced Lambda Patterns</h2>
          
          <div className="py-code-block">
            <pre>{`# Advanced lambda function patterns and techniques

print("Advanced Lambda Patterns:")

# CLOSURES with Lambda
print("1. Closures and Function Factories:")

def create_multiplier(factor):
    return lambda x: x * factor

def create_adder(increment):
    return lambda x: x + increment

# Create specialized functions
double = create_multiplier(2)
triple = create_multiplier(3)
add_ten = create_adder(10)

print(f"Double 5: {{double(5)}}")
print(f"Triple 4: {{triple(4)}}")
print(f"Add 10 to 7: {{add_ten(7)}}")

# More complex closure
def create_validator(min_val, max_val):
    return lambda x: min_val <= x <= max_val

age_validator = create_validator(0, 120)
percentage_validator = create_validator(0, 100)

print(f"\\nValidation:")
print(f"Age 25 valid? {{age_validator(25)}}")
print(f"Age 150 valid? {{age_validator(150)}}")
print(f"Percentage 85 valid? {{percentage_validator(85)}}")

# CURRYING with Lambda
print(f"\\n2. Currying:")

# Traditional function
def add_three_numbers(x, y, z):
    return x + y + z

# Curried version with lambda
curried_add = lambda x: lambda y: lambda z: x + y + z

# Usage
result1 = add_three_numbers(1, 2, 3)
result2 = curried_add(1)(2)(3)

print(f"Traditional: {{result1}}")
print(f"Curried: {{result2}}")

# Partial application
add_5 = curried_add(5)
add_5_and_3 = add_5(3)
final_result = add_5_and_3(2)

print(f"Partial application result: {{final_result}}")

# COMPOSITION with Lambda
print(f"\\n3. Function Composition:")

# Simple composition
add_one = lambda x: x + 1
multiply_two = lambda x: x * 2
square = lambda x: x ** 2

# Compose functions
composed = lambda x: square(multiply_two(add_one(x)))
print(f"Compose (((5+1)*2)²): {{composed(5)}}")

# General composition helper
def compose(*functions):
    return lambda x: reduce(lambda acc, f: f(acc), reversed(functions), x)

# Use composition helper
pipeline = compose(add_one, multiply_two, square)
print(f"Pipeline result: {{pipeline(3)}}")

# MEMOIZATION with Lambda
print(f"\\n4. Memoization Pattern:")

def memoize(func):
    cache = {{}}
    return lambda *args: cache.setdefault(args, func(*args))

# Expensive function to memoize
def expensive_calculation(n):
    print(f"  Computing for {{n}}...")
    return n ** 2 + n * 10

memoized_calc = memoize(expensive_calculation)

print("First calls (computed):")
print(f"Result for 5: {{memoized_calc(5)}}")
print(f"Result for 10: {{memoized_calc(10)}}")

print("\\nSecond calls (cached):")
print(f"Result for 5: {{memoized_calc(5)}}")
print(f"Result for 10: {{memoized_calc(10)}}")

# CONDITIONAL EXECUTION with Lambda
print(f"\\n5. Conditional Execution:")

# Conditional function execution
def conditional_execute(condition, true_func, false_func):
    return lambda *args: true_func(*args) if condition else false_func(*args)

# Example: different behavior based on mode
debug_mode = True
logger = conditional_execute(
    debug_mode,
    lambda msg: print(f"DEBUG: {{msg}}"),
    lambda msg: None  # Do nothing in production
)

logger("This is a debug message")

# Switch-case equivalent with lambda
def create_switch(cases, default=lambda x: None):
    return lambda key: cases.get(key, default)(key) if callable(cases.get(key, default)) else cases.get(key, default)

# Calculator switch
operations = {{
    '+': lambda x, y: x + y,
    '-': lambda x, y: x - y,
    '*': lambda x, y: x * y,
    '/': lambda x, y: x / y if y != 0 else float('inf'),
}}

calculator = create_switch(operations, lambda op: f"Unknown operation: {{op}}")

print(f"\\nCalculator results:")
print(f"10 + 5 = {{operations['+'](10, 5)}}")
print(f"10 * 3 = {{operations['*'](10, 3)}}")

# LAMBDA with DECORATORS
print(f"\\n6. Lambda with Decorators:")

def timer_decorator(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Function took {{end - start}} seconds")
        return result
    return wrapper

# Apply decorator to lambda
timed_square = timer_decorator(lambda x: x ** 2)
result = timed_square(1000)
print(f"Timed square result: {{result}}")

# LAMBDA for EVENT HANDLING
print(f"\\n7. Event Handling Pattern:")

class EventHandler:
    def __init__(self):
        self.handlers = {{}}
    
    def on(self, event, handler):
        if event not in self.handlers:
            self.handlers[event] = []
        self.handlers[event].append(handler)
    
    def emit(self, event, *args):
        for handler in self.handlers.get(event, []):
            handler(*args)

# Usage with lambdas
events = EventHandler()

events.on('user_login', lambda user: print(f"User {{user}} logged in"))
events.on('user_login', lambda user: print(f"Welcome {{user}}!"))
events.on('user_logout', lambda user: print(f"Goodbye {{user}}!"))

print("\\nEvent handling:")
events.emit('user_login', 'Alice')
events.emit('user_logout', 'Alice')

# LAMBDA for DATA VALIDATION
print(f"\\n8. Data Validation:")

# Validation rules as lambdas
validators = {{
    'email': lambda x: '@' in x and '.' in x.split('@')[1],
    'phone': lambda x: x.replace('-', '').replace(' ', '').isdigit(),
    'age': lambda x: isinstance(x, int) and 0 <= x <= 120,
    'password': lambda x: len(x) >= 8 and any(c.isupper() for c in x)
}}

def validate_data(data, rules):
    results = {{}}
    for field, value in data.items():
        if field in rules:
            results[field] = rules[field](value)
        else:
            results[field] = True  # No rule means valid
    return results

# Test data
user_data = {{
    'email': 'user@example.com',
    'phone': '123-456-7890',
    'age': 25,
    'password': 'SecurePass123'
}}

validation_results = validate_data(user_data, validators)
print(f"Validation results: {{validation_results}}")

# LAMBDA for STREAM PROCESSING
print(f"\\n9. Stream Processing:")

class Stream:
    def __init__(self, data):
        self.data = data
    
    def map(self, func):
        return Stream(map(func, self.data))
    
    def filter(self, func):
        return Stream(filter(func, self.data))
    
    def reduce(self, func, initial=None):
        if initial is None:
            return reduce(func, self.data)
        return reduce(func, self.data, initial)
    
    def collect(self):
        return list(self.data)

# Stream processing with lambdas
numbers = Stream([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

result = numbers.filter(lambda x: x % 2 == 0).map(lambda x: x ** 2).collect()

print(f"Stream processing result: {{result}}")

# LAMBDA for CONFIGURATION
print(f"\\n10. Dynamic Configuration:")

# Configuration with lambda functions
config = {{
    'development': {{
        'database_url': lambda: 'sqlite:///dev.db',
        'debug': lambda: True,
        'log_level': lambda: 'DEBUG'
    }},
    'production': {{
        'database_url': lambda: 'postgresql://prod.server/db',
        'debug': lambda: False,
        'log_level': lambda: 'ERROR'
    }}
}}

def get_config(environment):
    env_config = config.get(environment, config['development'])
    return {{key: value() for key, value in env_config.items()}}

dev_config = get_config('development')
prod_config = get_config('production')

print(f"Dev config: {{dev_config}}")
print(f"Prod config: {{prod_config}}")

# LAMBDA for SORTING ALGORITHMS
print(f"\\n11. Custom Sorting:")

# Complex sorting with multiple criteria
products = [
    {{"name": "Laptop", "price": 999, "rating": 4.5, "category": "Electronics"}},
    {{"name": "Book", "price": 25, "rating": 4.8, "category": "Education"}},
    {{"name": "Phone", "price": 699, "rating": 4.3, "category": "Electronics"}},
    {{"name": "Tablet", "price": 399, "rating": 4.6, "category": "Electronics"}}
]

# Sort by category, then by rating (descending), then by price
sorted_products = sorted(products, key=lambda p: (p['category'], -p['rating'], p['price']))

print("Products sorted by category, rating (desc), price:")
for product in sorted_products:
    print(f"  {{product['name']}}: {{product['category']}}, {{product['rating']}}, $" + str(product['price']))

# LAMBDA for FUNCTIONAL PIPELINES
print(f"\\n12. Functional Programming Pipeline:")

# Create a processing pipeline
def pipeline(*functions):
    return lambda x: reduce(lambda acc, f: f(acc), functions, x)

# Text processing pipeline
text_processor = pipeline(
    lambda text: text.lower(),
    lambda text: ''.join(c for c in text if c.isalnum() or c.isspace()),
    lambda text: text.split(),
    lambda words: [word for word in words if len(word) > 2],
    lambda words: ' '.join(words)
)

sample_text = "Hello, World! This is a TEST... with 123 numbers!"
processed = text_processor(sample_text)
print(f"\\nOriginal: {{sample_text}}")
print(f"Processed: {{processed}}")

# Mathematical pipeline
math_pipeline = pipeline(
    lambda x: x * 2,     # Double
    lambda x: x + 10,    # Add 10
    lambda x: x ** 2,    # Square
    lambda x: x / 4      # Divide by 4
)

result = math_pipeline(5)
print(f"\\nMath pipeline (5): {{result}}")

# Error handling in pipelines
def safe_pipeline(*functions):
    def pipeline_func(x):
        try:
            return reduce(lambda acc, f: f(acc), functions, x)
        except Exception as e:
            return f"Pipeline error: {{e}}"
    return pipeline_func

safe_math = safe_pipeline(
    lambda x: x / 2,
    lambda x: 10 / x,  # Might cause division by zero
    lambda x: x ** 0.5
)

print(f"Safe pipeline (4): {{safe_math(4)}}")
print(f"Safe pipeline (0): {{safe_math(0)}}")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Best Practices and Guidelines</h2>
          
          <div className="py-highlight-box">
            <h3>When to Use Lambda Functions:</h3>
            <ul>
              <li><strong>Short, simple operations:</strong> Single expressions that fit on one line</li>
              <li><strong>Higher-order functions:</strong> As arguments to map(), filter(), sort(), etc.</li>
              <li><strong>Event handlers:</strong> Simple callback functions</li>
              <li><strong>Functional programming:</strong> When embracing functional paradigms</li>
              <li><strong>Temporary functions:</strong> One-time use functions</li>
            </ul>
            
            <h3>When to Avoid Lambda Functions:</h3>
            <ul>
              <li><strong>Complex logic:</strong> Multiple statements or complex conditions</li>
              <li><strong>Reusable code:</strong> Functions used in multiple places</li>
              <li><strong>Documentation needed:</strong> When function behavior needs explanation</li>
              <li><strong>Error handling:</strong> When try/except blocks are needed</li>
              <li><strong>Debugging:</strong> Regular functions are easier to debug</li>
            </ul>
            
            <h3>Performance Considerations:</h3>
            <ul>
              <li>Lambda functions have similar performance to regular functions</li>
              <li>Avoid creating lambdas inside loops (creates new function objects each time)</li>
              <li>For frequently used operations, consider regular functions</li>
              <li>Generator expressions can be more memory-efficient than lambdas with map/filter</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a lambda function that calculates compound interest</li>
              <li>Use lambda with filter() to find palindromes in a list of words</li>
              <li>Build a sorting system for student records using multiple criteria</li>
              <li>Create a function that returns different lambda functions based on operation type</li>
              <li>Implement a simple calculator using lambdas in a dictionary</li>
              <li>Use reduce() with lambda to find the product of all even numbers in a list</li>
              <li>Create a data validation system using lambda functions</li>
              <li>Build a text processing pipeline using lambda functions</li>
              <li>Implement function composition using lambdas</li>
              <li>Create a memoization decorator that works with lambda functions</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LambdaFunctions;
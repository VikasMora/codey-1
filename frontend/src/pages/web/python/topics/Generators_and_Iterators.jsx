import React from 'react';
import '../Navbarweb.css';

function GeneratorsAndIterators() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>🔄 Generators and Iterators</h1>
        <p className="py-topic-subtitle">
          Master memory-efficient iteration with generators
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>🔄 What are Generators and Iterators?</h2>
          <p>
            Generators and iterators are powerful Python features that enable memory-efficient iteration over 
            data sequences. Iterators follow a protocol that allows objects to be iterated over one item at a time, 
            while generators are a special type of iterator that can pause and resume execution. They're essential 
            for handling large datasets, creating infinite sequences, and building memory-efficient applications 
            that don't load all data into memory at once.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Iterator and Generator Concepts:</h3>
            <ul>
              <li><strong>Iterator Protocol:</strong> __iter__() and __next__() methods for iteration</li>
              <li><strong>Generator Functions:</strong> Functions that use yield to return values lazily</li>
              <li><strong>Generator Expressions:</strong> Compact syntax for creating generators</li>
              <li><strong>Lazy Evaluation:</strong> Computing values only when needed</li>
              <li><strong>Memory Efficiency:</strong> Processing large datasets without loading everything</li>
              <li><strong>Stateful Iteration:</strong> Generators remember their position between calls</li>
            </ul>
          </div>
        </section>

        {/* Iterator Protocol */}
        <section className="py-topic-section">
          <h2>🔍 The Iterator Protocol</h2>
          
          <div className="py-code-block">
            <pre>{`# Understanding the iterator protocol
print("The Iterator Protocol:")

# Built-in iterables and their iterators
print("Built-in iterables:")
data = [1, 2, 3, 4, 5]
string_data = "hello"
dict_data = {"a": 1, "b": 2, "c": 3}

# Getting iterators from iterables
list_iter = iter(data)
string_iter = iter(string_data)
dict_iter = iter(dict_data)

print(f"List iterator: {list_iter}")
print(f"String iterator: {string_iter}")
print(f"Dict iterator: {dict_iter}")

# Using next() to get values
print("\\nUsing next() to iterate manually:")
print(f"First item from list: {next(list_iter)}")
print(f"Second item from list: {next(list_iter)}")
print(f"First char from string: {next(string_iter)}")
print(f"Second char from string: {next(string_iter)}")

# StopIteration exception when iterator is exhausted
print("\\nHandling StopIteration:")
try:
    # Exhaust the remaining items
    while True:
        item = next(list_iter)
        print(f"List item: {item}")
except StopIteration:
    print("List iterator exhausted!")

# Creating a custom iterator class
class CountDown:
    """Custom iterator that counts down from a given number."""
    
    def __init__(self, start):
        self.start = start
    
    def __iter__(self):
        """Return the iterator object (self)."""
        return self
    
    def __next__(self):
        """Return the next item in the sequence."""
        if self.start <= 0:
            raise StopIteration
        
        self.start -= 1
        return self.start + 1

print("\\nCustom CountDown iterator:")
countdown = CountDown(5)

# Can use in for loops
print("Using in for loop:")
for num in countdown:
    print(f"Countdown: {num}")

print("\\nTrying to iterate again (iterator is exhausted):")
for num in countdown:
    print(f"Countdown: {num}")
print("No output - iterator was already exhausted!")

# Creating a new iterator
print("\\nCreating fresh iterator:")
new_countdown = CountDown(3)
for num in new_countdown:
    print(f"New countdown: {num}")

# Custom iterable class (creates new iterator each time)
class CountDownIterable:
    """Iterable class that creates fresh iterators."""
    
    def __init__(self, start):
        self.start = start
    
    def __iter__(self):
        """Return a new iterator each time."""
        return CountDown(self.start)

print("\\nIterable class (creates fresh iterators):")
countdown_iterable = CountDownIterable(3)

print("First iteration:")
for num in countdown_iterable:
    print(f"First: {num}")

print("\\nSecond iteration (works because we get a fresh iterator):")
for num in countdown_iterable:
    print(f"Second: {num}")

# Range-like iterator
class CustomRange:
    """Custom implementation similar to range()."""
    
    def __init__(self, start, stop=None, step=1):
        if stop is None:
            self.start = 0
            self.stop = start
        else:
            self.start = start
            self.stop = stop
        self.step = step
        self.current = self.start
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if (self.step > 0 and self.current >= self.stop) or \\
           (self.step < 0 and self.current <= self.stop):
            raise StopIteration
        
        value = self.current
        self.current += self.step
        return value

print("\\nCustom range iterator:")
custom_range = CustomRange(2, 10, 2)
print("Even numbers from 2 to 8:")
for num in custom_range:
    print(f"  {num}")

# Reverse range
reverse_range = CustomRange(10, 0, -2)
print("\\nReverse even numbers from 10 to 2:")
for num in reverse_range:
    print(f"  {num}")

# Fibonacci iterator
class FibonacciIterator:
    """Iterator that generates Fibonacci numbers."""
    
    def __init__(self, max_count=None):
        self.max_count = max_count
        self.count = 0
        self.current = 0
        self.next_val = 1
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.max_count is not None and self.count >= self.max_count:
            raise StopIteration
        
        if self.count == 0:
            self.count += 1
            return 0
        elif self.count == 1:
            self.count += 1
            return 1
        else:
            fib_val = self.current + self.next_val
            self.current = self.next_val
            self.next_val = fib_val
            self.count += 1
            return fib_val

print("\\nFibonacci iterator (first 10 numbers):")
fib = FibonacciIterator(10)
for num in fib:
    print(f"  {num}")

# Infinite Fibonacci iterator
print("\\nInfinite Fibonacci (stopping manually after 15):")
infinite_fib = FibonacciIterator()  # No max_count
for i, num in enumerate(infinite_fib):
    if i >= 15:
        break
    print(f"  F({i}) = {num}")

# File line iterator
class FileLineIterator:
    """Iterator for reading file lines one at a time."""
    
    def __init__(self, filename):
        self.filename = filename
        self.file = None
    
    def __iter__(self):
        # Open file when iteration starts
        self.file = open(self.filename, 'r', encoding='utf-8')
        return self
    
    def __next__(self):
        if self.file is None:
            raise StopIteration
        
        line = self.file.readline()
        if line:
            return line.rstrip('\\n')  # Remove newline
        else:
            # End of file reached
            self.file.close()
            self.file = None
            raise StopIteration
    
    def __del__(self):
        # Cleanup: close file if still open
        if self.file:
            self.file.close()

# Create a sample file for demonstration
import tempfile
import os

sample_content = """Line 1: Hello World
Line 2: Python Iterators
Line 3: Are Amazing
Line 4: Memory Efficient
Line 5: Last Line"""

with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.txt') as temp_file:
    temp_file.write(sample_content)
    temp_filename = temp_file.name

print(f"\\nReading file '{temp_filename}' with custom iterator:")
file_iter = FileLineIterator(temp_filename)
for line_num, line in enumerate(file_iter, 1):
    print(f"  Line {line_num}: {line}")

# Cleanup temporary file
os.unlink(temp_filename)

# Iterator utilities
print("\\nIterator utilities:")

# Checking if object is iterable
def is_iterable(obj):
    """Check if object is iterable."""
    try:
        iter(obj)
        return True
    except TypeError:
        return False

test_objects = [
    [1, 2, 3],          # List
    "hello",            # String
    {"a": 1},           # Dict
    {1, 2, 3},          # Set
    (1, 2, 3),          # Tuple
    range(5),           # Range
    42,                 # Integer (not iterable)
    CustomRange(5),     # Custom iterator
]

for obj in test_objects:
    iterable = is_iterable(obj)
    print(f"  {str(obj):<20} Iterable: {iterable}")

# Converting iterator to list (consumes the iterator)
print("\\nConverting iterators to lists:")
countdown = CountDown(5)
countdown_list = list(countdown)
print(f"CountDown(5) as list: {countdown_list}")

# Iterator is now exhausted
try:
    next(countdown)
except StopIteration:
    print("CountDown iterator is exhausted after conversion to list")

# Chaining iterators
class ChainedIterator:
    """Iterator that chains multiple iterables."""
    
    def __init__(self, *iterables):
        self.iterables = iterables
        self.current_iter = None
        self.iter_index = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        while self.iter_index < len(self.iterables):
            if self.current_iter is None:
                self.current_iter = iter(self.iterables[self.iter_index])
            
            try:
                return next(self.current_iter)
            except StopIteration:
                # Current iterator exhausted, move to next
                self.current_iter = None
                self.iter_index += 1
        
        # All iterators exhausted
        raise StopIteration

print("\\nChaining multiple iterables:")
chained = ChainedIterator([1, 2], "ab", range(3, 5))
for item in chained:
    print(f"  Chained item: {item}")

# Enumerate-like iterator
class CustomEnumerate:
    """Custom implementation similar to enumerate()."""
    
    def __init__(self, iterable, start=0):
        self.iterator = iter(iterable)
        self.start = start
    
    def __iter__(self):
        return self
    
    def __next__(self):
        value = next(self.iterator)  # May raise StopIteration
        result = (self.start, value)
        self.start += 1
        return result

print("\\nCustom enumerate iterator:")
data = ['apple', 'banana', 'cherry']
custom_enum = CustomEnumerate(data, start=1)
for index, value in custom_enum:
    print(f"  {index}: {value}")

# Zip-like iterator
class CustomZip:
    """Custom implementation similar to zip()."""
    
    def __init__(self, *iterables):
        self.iterators = [iter(iterable) for iterable in iterables]
    
    def __iter__(self):
        return self
    
    def __next__(self):
        try:
            return tuple(next(iterator) for iterator in self.iterators)
        except StopIteration:
            raise StopIteration

print("\\nCustom zip iterator:")
names = ['Alice', 'Bob', 'Charlie']
ages = [25, 30, 35]
cities = ['New York', 'London', 'Tokyo']

custom_zip = CustomZip(names, ages, cities)
for name, age, city in custom_zip:
    print(f"  {name} ({age}) lives in {city}")

# Iterator with state
class StatefulIterator:
    """Iterator that maintains complex state."""
    
    def __init__(self, data):
        self.data = data
        self.index = 0
        self.direction = 1  # 1 for forward, -1 for backward
        self.bounce_count = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.bounce_count >= 10:  # Limit bounces
            raise StopIteration
        
        if self.index >= len(self.data):
            # Hit end, reverse direction
            self.direction = -1
            self.index = len(self.data) - 2
            self.bounce_count += 1
        elif self.index < 0:
            # Hit beginning, reverse direction
            self.direction = 1
            self.index = 1
            self.bounce_count += 1
        
        if 0 <= self.index < len(self.data):
            value = self.data[self.index]
            self.index += self.direction
            return value
        else:
            raise StopIteration

print("\\nStateful bouncing iterator:")
bouncer = StatefulIterator([1, 2, 3, 4])
bounce_values = list(bouncer)
print(f"Bouncing pattern: {bounce_values}")`}</pre>
          </div>
        </section>

        {/* Generator Functions */}
        <section className="py-topic-section">
          <h2>⚡ Generator Functions</h2>
          
          <div className="py-code-block">
            <pre>{`# Generator functions with yield
print("Generator Functions with yield:")

# Simple generator function
def simple_generator():
    """A basic generator that yields three values."""
    print("Generator started")
    yield 1
    print("Between first and second yield")
    yield 2
    print("Between second and third yield") 
    yield 3
    print("Generator finished")

print("Creating and using a simple generator:")
gen = simple_generator()
print(f"Generator object: {gen}")

print("\\nIterating through generator:")
for value in gen:
    print(f"Received: {value}")

# Generator functions are automatically iterators
def countdown_generator(start):
    """Generator version of countdown."""
    while start > 0:
        yield start
        start -= 1

print("\\nCountdown generator:")
for num in countdown_generator(5):
    print(f"Countdown: {num}")

# Fibonacci generator
def fibonacci_generator(max_count=None):
    """Generate Fibonacci numbers."""
    a, b = 0, 1
    count = 0
    
    while max_count is None or count < max_count:
        yield a
        a, b = b, a + b
        count += 1

print("\\nFibonacci generator (first 10):")
fib_gen = fibonacci_generator(10)
for num in fib_gen:
    print(f"  {num}")

print("\\nInfinite Fibonacci (manual control):")
infinite_fib = fibonacci_generator()
for i in range(15):
    print(f"  F({i}) = {next(infinite_fib)}")

# Generator with input (send method)
def echo_generator():
    """Generator that echoes back sent values."""
    print("Echo generator started")
    
    while True:
        received = yield
        if received is None:
            break
        print(f"Echo: {received}")

print("\\nGenerator with send() method:")
echo_gen = echo_generator()
next(echo_gen)  # Prime the generator

echo_gen.send("Hello")
echo_gen.send("World")
echo_gen.send(42)
echo_gen.send(None)  # Signal to stop

# Generator that both yields and receives
def accumulator_generator():
    """Generator that accumulates sent values."""
    total = 0
    
    while True:
        value = yield total
        if value is None:
            break
        total += value

print("\\nAccumulator generator:")
acc_gen = accumulator_generator()
print(f"Initial total: {next(acc_gen)}")

print(f"After adding 10: {acc_gen.send(10)}")
print(f"After adding 20: {acc_gen.send(20)}")
print(f"After adding 5: {acc_gen.send(5)}")

# Generator with exception handling
def robust_generator():
    """Generator with exception handling."""
    try:
        yield "First value"
        yield "Second value"
        yield "Third value"
    except GeneratorExit:
        print("Generator is being closed")
    except ValueError as e:
        print(f"Caught ValueError: {e}")
        yield f"Error handled: {e}"
    finally:
        print("Generator cleanup")

print("\\nGenerator with exception handling:")
robust_gen = robust_generator()

print(f"First: {next(robust_gen)}")
print(f"Second: {next(robust_gen)}")

# Send exception to generator
try:
    robust_gen.throw(ValueError, "Something went wrong")
    print(f"After exception: {next(robust_gen)}")
except StopIteration:
    print("Generator exhausted after exception")

# File processing generator
def process_file_lines(filename, encoding='utf-8'):
    """Generator for processing file lines."""
    try:
        with open(filename, 'r', encoding=encoding) as file:
            line_num = 0
            for line in file:
                line_num += 1
                # Process each line
                processed = line.strip().upper()
                yield line_num, processed
    except FileNotFoundError:
        yield None, f"File '{filename}' not found"

# Create sample file for demonstration
import tempfile
import os

sample_data = """apple
banana
cherry
date
elderberry"""

with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.txt') as temp_file:
    temp_file.write(sample_data)
    temp_filename = temp_file.name

print("\\nFile processing generator:")
for line_num, processed_line in process_file_lines(temp_filename):
    if line_num is None:
        print(f"Error: {processed_line}")
    else:
        print(f"Line {line_num}: {processed_line}")

os.unlink(temp_filename)  # Cleanup

# Generator pipeline
def numbers_generator(start, count):
    """Generate a sequence of numbers."""
    for i in range(count):
        yield start + i

def square_generator(numbers):
    """Square each number from input generator."""
    for num in numbers:
        yield num ** 2

def filter_even_generator(numbers):
    """Filter only even numbers."""
    for num in numbers:
        if num % 2 == 0:
            yield num

print("\\nGenerator pipeline:")
numbers = numbers_generator(1, 10)
squared = square_generator(numbers)
even_squares = filter_even_generator(squared)

print("Even squares from 1-10:")
for num in even_squares:
    print(f"  {num}")

# Generator with state management
def stateful_generator():
    """Generator that maintains state between yields."""
    state = {"count": 0, "sum": 0, "values": []}
    
    while True:
        value = yield state.copy()  # Yield current state
        
        if value is None:
            break
        
        # Update state
        state["count"] += 1
        state["sum"] += value
        state["values"].append(value)
        
        # Limit stored values to last 5
        if len(state["values"]) > 5:
            state["values"].pop(0)

print("\\nStateful generator:")
state_gen = stateful_generator()
print(f"Initial state: {next(state_gen)}")

values_to_add = [10, 20, 30, 40, 50, 60]
for value in values_to_add:
    state = state_gen.send(value)
    print(f"Added {value}: {state}")

# Data transformation generator
def data_processor(data_source, transformations):
    """Apply transformations to data using generators."""
    for item in data_source:
        result = item
        for transform in transformations:
            result = transform(result)
        yield result

# Define transformation functions
def add_prefix(text):
    return f"processed_{text}"

def to_upper(text):
    return text.upper()

def add_suffix(text):
    return f"{text}_done"

print("\\nData transformation generator:")
source_data = ["item1", "item2", "item3"]
transformations = [add_prefix, to_upper, add_suffix]

processor = data_processor(source_data, transformations)
for transformed_item in processor:
    print(f"  {transformed_item}")

# Generator for infinite sequences
def infinite_sequence(start=0, step=1):
    """Generate infinite arithmetic sequence."""
    current = start
    while True:
        yield current
        current += step

def cycle_generator(items):
    """Cycle through items infinitely."""
    while True:
        for item in items:
            yield item

print("\\nInfinite generators (with manual limits):")
print("Arithmetic sequence (0, 2, 4, 6, ...):")
arithmetic = infinite_sequence(0, 2)
for i, num in enumerate(arithmetic):
    if i >= 10:
        break
    print(f"  {num}")

print("\\nCycling through colors:")
colors = cycle_generator(["red", "green", "blue"])
for i, color in enumerate(colors):
    if i >= 8:
        break
    print(f"  Color {i+1}: {color}")

# Memory comparison: list vs generator
def create_list(n):
    """Create list of squares (memory intensive)."""
    return [x**2 for x in range(n)]

def create_generator(n):
    """Create generator of squares (memory efficient)."""
    for x in range(n):
        yield x**2

print("\\nMemory efficiency comparison:")

# Small example to show memory usage difference
import sys

n = 1000
list_data = create_list(n)
gen_data = create_generator(n)

print(f"List of {n} squares size: ~{sys.getsizeof(list_data)} bytes")
print(f"Generator object size: ~{sys.getsizeof(gen_data)} bytes")
print(f"Memory savings: ~{sys.getsizeof(list_data) - sys.getsizeof(gen_data)} bytes")

# Processing large data with generators
def process_large_dataset(size):
    """Simulate processing large dataset with generator."""
    print(f"Processing dataset of size {size}...")
    
    for i in range(size):
        # Simulate some processing
        processed_value = i ** 2 + 2 * i + 1
        yield processed_value
        
        # Show progress periodically
        if i % 10000 == 0:
            print(f"  Processed {i} items...")

print("\\nProcessing large dataset (first 50 items):")
large_data_gen = process_large_dataset(100000)

# Process only what we need
for i, value in enumerate(large_data_gen):
    if i >= 50:
        break
    if i % 10 == 0:
        print(f"  Item {i}: {value}")

print("Generator allows processing without loading all data into memory!")

# Generator cleanup and resource management
def resource_generator(resource_name):
    """Generator that manages resources properly."""
    print(f"Acquiring resource: {resource_name}")
    
    try:
        for i in range(5):
            print(f"Using resource {resource_name} - operation {i}")
            yield f"Result {i} from {resource_name}"
    finally:
        print(f"Releasing resource: {resource_name}")

print("\\nResource management with generators:")
resource_gen = resource_generator("database_connection")

# Partial consumption
for i, result in enumerate(resource_gen):
    print(f"  Got: {result}")
    if i >= 2:
        break  # Early termination

print("Resource properly cleaned up even with early termination")`}</pre>
          </div>
        </section>

        {/* Generator Expressions */}
        <section className="py-topic-section">
          <h2>📝 Generator Expressions</h2>
          
          <div className="py-code-block">
            <pre>{`# Generator expressions - compact generator syntax
print("Generator Expressions:")

# Basic generator expression
squares_gen = (x**2 for x in range(10))
print(f"Generator expression: {squares_gen}")

print("\\nSquares from generator expression:")
for square in squares_gen:
    print(f"  {square}")

# Comparison: list comprehension vs generator expression
print("\\nList comprehension vs Generator expression:")

# List comprehension (creates all items in memory)
squares_list = [x**2 for x in range(10)]
print(f"List comprehension: {squares_list}")
print(f"List memory usage: ~{sys.getsizeof(squares_list)} bytes")

# Generator expression (creates items on demand)
squares_gen = (x**2 for x in range(10))
print(f"Generator expression: {squares_gen}")
print(f"Generator memory usage: ~{sys.getsizeof(squares_gen)} bytes")

# Converting generator expression to list
squares_from_gen = list(squares_gen)
print(f"List from generator: {squares_from_gen}")

# Generator expressions with filtering
print("\\nGenerator expressions with filtering:")

# Even squares
even_squares = (x**2 for x in range(20) if x % 2 == 0)
print("Even squares (0-19):")
for square in even_squares:
    print(f"  {square}")

# Complex filtering and transformation
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
processed = (x * 2 + 1 for x in data if x % 3 != 0)
print("\\nProcessed data (x*2+1 for x not divisible by 3):")
for value in processed:
    print(f"  {value}")

# Nested generator expressions
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Flatten matrix with generator expression
flattened = (item for row in matrix for item in row)
print("\\nFlattened matrix:")
print(f"  {list(flattened)}")

# Conditional nested generator
filtered_flattened = (item for row in matrix for item in row if item % 2 == 1)
print("\\nOdd numbers from matrix:")
print(f"  {list(filtered_flattened)}")

# Generator expressions with string processing
text_data = ["Hello World", "Python Generators", "Are Awesome", "Memory Efficient"]

# Extract words
words_gen = (word for sentence in text_data for word in sentence.split())
print("\\nAll words from text data:")
for word in words_gen:
    print(f"  '{word}'")

# Filter and process words
long_words = (word.upper() for sentence in text_data 
              for word in sentence.split() if len(word) > 5)
print("\\nLong words (>5 chars) in uppercase:")
for word in long_words:
    print(f"  '{word}'")

# Generator expressions with file processing
# Create sample file
sample_lines = ["line 1: apple\\n", "line 2: banana\\n", "line 3: cherry\\n", 
                "line 4: date\\n", "line 5: elderberry\\n"]

with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.txt') as temp_file:
    temp_file.writelines(sample_lines)
    temp_filename = temp_file.name

# Process file with generator expression
with open(temp_filename, 'r') as file:
    # Extract fruit names (assuming format "line X: fruit")
    fruits = (line.split(': ')[1].strip() for line in file if ': ' in line)
    print("\\nFruits from file:")
    for fruit in fruits:
        print(f"  {fruit}")

os.unlink(temp_filename)  # Cleanup

# Chaining generator expressions
numbers = range(100)

# Chain multiple transformations
pipeline = (
    x for x in                              # Start with numbers
    (x**2 for x in numbers if x % 2 == 0)  # Even numbers squared
    if x > 100                              # Filter large values
)

print("\\nChained generator expressions:")
print("Even numbers squared, then filtered for > 100:")
result = list(pipeline)
print(f"  {result[:10]}...")  # Show first 10 results

# Generator expressions in function calls
print("\\nGenerator expressions in function calls:")

# Sum of squares
sum_of_squares = sum(x**2 for x in range(10))
print(f"Sum of squares 0-9: {sum_of_squares}")

# Max of processed values
max_processed = max(x*2 + 1 for x in range(20) if x % 3 == 0)
print(f"Max of (x*2+1) for x divisible by 3: {max_processed}")

# Join strings from generator
joined = ', '.join(str(x**2) for x in range(5))
print(f"Joined squares: {joined}")

# Any/all with generator expressions
numbers = range(10)
has_even = any(x % 2 == 0 for x in numbers)
all_positive = all(x >= 0 for x in numbers)
print(f"Has even number: {has_even}")
print(f"All positive: {all_positive}")

# Memory efficient data processing
def process_csv_data(csv_content):
    """Process CSV data using generator expressions."""
    lines = csv_content.strip().split('\\n')
    
    # Skip header and parse data
    data_rows = (line.split(',') for line in lines[1:])
    
    # Convert to dictionaries
    headers = lines[0].split(',')
    records = (dict(zip(headers, row)) for row in data_rows)
    
    return records

# Sample CSV data
csv_data = """name,age,city
Alice,25,New York
Bob,30,London
Charlie,35,Tokyo
Diana,28,Paris"""

print("\\nProcessing CSV with generator expressions:")
records_gen = process_csv_data(csv_data)

for record in records_gen:
    print(f"  {record}")

# Generator expressions for mathematical sequences
print("\\nMathematical sequences with generator expressions:")

# Prime number generator (simple algorithm)
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

primes = (n for n in range(2, 100) if is_prime(n))
print("Prime numbers under 100:")
prime_list = list(primes)
print(f"  {prime_list}")

# Pythagorean triples
pythagorean_triples = ((a, b, c) for a in range(1, 20)
                      for b in range(a, 20)
                      for c in range(b, 20)
                      if a*a + b*b == c*c)

print("\\nPythagorean triples (a² + b² = c²):")
for triple in pythagorean_triples:
    print(f"  {triple}")

# Generator expressions with complex data structures
students = [
    {"name": "Alice", "grades": [85, 92, 78, 96]},
    {"name": "Bob", "grades": [79, 85, 88, 82]},
    {"name": "Charlie", "grades": [92, 94, 89, 97]},
    {"name": "Diana", "grades": [88, 91, 85, 93]}
]

# Calculate average grades
averages = ((student["name"], sum(student["grades"]) / len(student["grades"]))
           for student in students)

print("\\nStudent grade averages:")
for name, avg in averages:
    print(f"  {name}: {avg:.2f}")

# High-performing students
high_performers = (student["name"] for student in students
                  if sum(student["grades"]) / len(student["grades"]) > 90)

print("\\nHigh-performing students (avg > 90):")
for name in high_performers:
    print(f"  {name}")

# Generator expressions for data transformation
raw_data = [
    "  Alice, 25, Engineer  ",
    "  Bob, 30, Designer   ",
    "  Charlie, 35, Manager ",
    "  Diana, 28, Developer "
]

# Clean and parse data
parsed_data = (line.strip().split(', ') for line in raw_data)
cleaned_records = ({"name": parts[0], "age": int(parts[1]), "job": parts[2]}
                  for parts in parsed_data)

print("\\nCleaned and parsed data:")
for record in cleaned_records:
    print(f"  {record}")

# Performance comparison for large datasets
print("\\nPerformance comparison (large dataset):")

def time_operation(operation_name, operation):
    """Time an operation."""
    import time
    start_time = time.time()
    result = operation()
    end_time = time.time()
    print(f"  {operation_name}: {end_time - start_time:.4f} seconds")
    return result

n = 100000

# List comprehension (memory intensive)
def create_list():
    return [x**2 for x in range(n) if x % 2 == 0]

# Generator expression (memory efficient)
def create_generator():
    return (x**2 for x in range(n) if x % 2 == 0)

print(f"Processing {n} numbers:")
squares_list = time_operation("List comprehension", create_list)
squares_gen = time_operation("Generator expression", create_generator)

print(f"\\nMemory usage comparison:")
print(f"  List size: {len(squares_list)} items, ~{sys.getsizeof(squares_list)} bytes")
print(f"  Generator size: ~{sys.getsizeof(squares_gen)} bytes")

# Consuming generator vs list
def sum_list():
    return sum(squares_list)

def sum_generator():
    return sum(squares_gen)

print(f"\\nConsumption timing:")
list_sum = time_operation("Sum from list", sum_list)
gen_sum = time_operation("Sum from generator", sum_generator)

print(f"Results: List sum = {list_sum}, Generator sum = {gen_sum}")

# Generator expressions with external libraries (if available)
print("\\nGenerator expressions with built-in functions:")

# Using itertools-like functionality with generator expressions
def batched_generator(iterable, batch_size):
    """Create batches using generator expressions."""
    iterator = iter(iterable)
    while True:
        batch = list(islice(iterator, batch_size))
        if not batch:
            break
        yield batch

from itertools import islice

data_range = range(25)
batches = batched_generator(data_range, 5)

print("Data in batches of 5:")
for i, batch in enumerate(batches):
    print(f"  Batch {i+1}: {batch}")

# Combining multiple generator expressions
print("\\nCombining multiple generator expressions:")

# Generate coordinate pairs
coords = ((x, y) for x in range(3) for y in range(3))
print("Coordinate pairs:")
for coord in coords:
    print(f"  {coord}")

# Filter coordinates based on condition
valid_coords = ((x, y) for x in range(5) for y in range(5) 
               if x + y <= 4 and x != y)
print("\\nValid coordinates (x+y <= 4, x != y):")
for coord in valid_coords:
    print(f"  {coord}")

# Generator expression best practices
print("\\nGenerator Expression Best Practices:")
best_practices = [
    "Use for memory-efficient iteration over large datasets",
    "Prefer over list comprehensions when you don't need all items at once",
    "Chain with built-in functions like sum(), max(), any(), all()",
    "Use parentheses to make complex expressions readable",
    "Remember that generator expressions are consumed once",
    "Consider readability vs. performance trade-offs",
    "Use meaningful variable names even in compact expressions"
]

for i, practice in enumerate(best_practices, 1):
    print(f"  {i}. {practice}")`}</pre>
          </div>
        </section>

        {/* Advanced Generator Patterns */}
        <section className="py-topic-section">
          <h2>🔧 Advanced Generator Patterns</h2>
          
          <div className="py-code-block">
            <pre>{`# Advanced generator patterns and techniques
print("Advanced Generator Patterns:")

# Coroutines with generators (Python 2 style, still useful to understand)
def coroutine_demo():
    """Generator-based coroutine that processes sent values."""
    print("Coroutine started, ready to receive values")
    
    try:
        while True:
            value = yield
            print(f"Processing: {value}")
            
            if isinstance(value, str):
                print(f"  String length: {len(value)}")
            elif isinstance(value, (int, float)):
                print(f"  Number squared: {value**2}")
            else:
                print(f"  Unknown type: {type(value)}")
    
    except GeneratorExit:
        print("Coroutine closing")

print("Coroutine demonstration:")
coro = coroutine_demo()
next(coro)  # Prime the coroutine

coro.send("hello")
coro.send(42)
coro.send([1, 2, 3])
coro.close()  # Trigger GeneratorExit

# Generator delegation with yield from
def sub_generator(start, end):
    """Sub-generator for a range of numbers."""
    print(f"Sub-generator: producing {start} to {end}")
    for i in range(start, end + 1):
        yield i

def delegating_generator():
    """Generator that delegates to sub-generators."""
    print("Main generator started")
    
    yield from sub_generator(1, 3)
    yield 'middle'
    yield from sub_generator(10, 12)
    
    print("Main generator finished")

print("\\nGenerator delegation with 'yield from':")
for value in delegating_generator():
    print(f"  Received: {value}")

# Complex generator pipeline
def data_source():
    """Generate raw data."""
    data = [
        {"name": "Alice", "age": 25, "salary": 50000},
        {"name": "Bob", "age": 30, "salary": 60000},
        {"name": "Charlie", "age": 35, "salary": 70000},
        {"name": "Diana", "age": 28, "salary": 55000},
        {"name": "Eve", "age": 32, "salary": 65000},
    ]
    
    for record in data:
        yield record

def filter_generator(source, condition):
    """Filter records based on condition."""
    for record in source:
        if condition(record):
            yield record

def transform_generator(source, transformer):
    """Transform records using transformer function."""
    for record in source:
        yield transformer(record)

def aggregate_generator(source, key_func, agg_func):
    """Aggregate records by key."""
    groups = {}
    
    # Group records
    for record in source:
        key = key_func(record)
        if key not in groups:
            groups[key] = []
        groups[key].append(record)
    
    # Yield aggregated results
    for key, group in groups.items():
        yield key, agg_func(group)

print("\\nComplex generator pipeline:")

# Create pipeline
source = data_source()
adults = filter_generator(source, lambda r: r['age'] >= 30)
with_bonus = transform_generator(adults, 
    lambda r: {**r, 'bonus': r['salary'] * 0.1})

print("Adults with bonus calculation:")
for record in with_bonus:
    print(f"  {record}")

# Aggregation pipeline
print("\\nSalary aggregation by age group:")
source2 = data_source()
age_groups = aggregate_generator(
    source2,
    key_func=lambda r: "young" if r['age'] < 30 else "senior",
    agg_func=lambda group: sum(r['salary'] for r in group) / len(group)
)

for age_group, avg_salary in age_groups:
    print(f"  {'{'}{age_group}{'}'}: ${'{'}{avg_salary:,.2f}{'}'}")

# Generator with exception handling and recovery
def resilient_generator(data):
    """Generator that handles errors gracefully."""
    for item in data:
        try:
            # Simulate processing that might fail
            if isinstance(item, str):
                result = item.upper()
            elif isinstance(item, (int, float)):
                result = 1 / item  # Will fail for 0
            else:
                raise ValueError(f"Unsupported type: {type(item)}")
            
            yield result
            
        except ZeroDivisionError:
            print(f"Warning: Division by zero for item {item}, skipping")
            continue
        except ValueError as e:
            print(f"Warning: {e}, yielding error marker")
            yield f"ERROR: {item}"
        except Exception as e:
            print(f"Unexpected error for item {item}: {e}")
            continue

print("\\nResilient generator with error handling:")
test_data = ["hello", 5, 2.5, 0, [1, 2, 3], "world", -1]
resilient_gen = resilient_generator(test_data)

for result in resilient_gen:
    print(f"  Result: {result}")

# Generator with state persistence
class PersistentGenerator:
    """Generator class that can save/restore state."""
    
    def __init__(self, start=0, end=100, step=1):
        self.start = start
        self.end = end
        self.step = step
        self.current = start
        self.history = []
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current {'>'}= self.end:
            raise StopIteration
        
        value = self.current
        self.history.append(value)
        self.current += self.step
        return value
    
    def get_state(self):
        """Get current generator state."""
        return {'{'}
            'current': self.current,
            'history_length': len(self.history),
            'progress': (self.current - self.start) / (self.end - self.start)
        {'}'}
    
    def set_position(self, position):
        """Set generator position."""
        if self.start {'<'}= position {'<'} self.end:
            self.current = position
            # Adjust history (simplified)
            expected_history_length = (position - self.start) // self.step
            self.history = list(range(self.start, position, self.step))
    
    def reset(self):
        """Reset generator to start."""
        self.current = self.start
        self.history = []

print("\\nPersistent generator with state management:")
persistent_gen = PersistentGenerator(0, 20, 3)

print("Generate first 5 values:")
for i, value in enumerate(persistent_gen):
    if i {'>'}= 5:
        break
    print(f"  Value: {value}")

state = persistent_gen.get_state()
print(f"Current state: {state}")

print("\\nContinue generation:")
for i, value in enumerate(persistent_gen):
    if i {'>'}= 3:
        break
    print(f"  Value: {value}")

print(f"Final state: {persistent_gen.get_state()}")

# Generator for tree traversal
class TreeNode:
    """Simple tree node for demonstration."""
    
    def __init__(self, value, children=None):
        self.value = value
        self.children = children or []
    
    def add_child(self, child):
        self.children.append(child)

def depth_first_generator(node):
    """Depth-first tree traversal generator."""
    yield node.value
    
    for child in node.children:
        yield from depth_first_generator(child)

def breadth_first_generator(root):
    """Breadth-first tree traversal generator."""
    queue = [root]
    
    while queue:
        node = queue.pop(0)
        yield node.value
        
        queue.extend(node.children)

print("\\nTree traversal generators:")

# Build sample tree
root = TreeNode("A")
root.add_child(TreeNode("B"))
root.add_child(TreeNode("C"))
root.children[0].add_child(TreeNode("D"))
root.children[0].add_child(TreeNode("E"))
root.children[1].add_child(TreeNode("F"))

print("Depth-first traversal:")
for value in depth_first_generator(root):
    print(f"  {value}")

print("\\nBreadth-first traversal:")
for value in breadth_first_generator(root):
    print(f"  {value}")

# Generator for streaming data processing
def streaming_processor(data_stream, window_size=3):
    """Process streaming data with sliding window."""
    window = []
    
    for item in data_stream:
        window.append(item)
        
        if len(window) {'>'} window_size:
            window.pop(0)
        
        if len(window) == window_size:
            # Process window
            window_sum = sum(window)
            window_avg = window_sum / len(window)
            yield {'{'}
                'window': window.copy(),
                'sum': window_sum,
                'avg': window_avg,
                'latest': item
            {'}'}

def data_stream():
    """Simulate continuous data stream."""
    import random
    for i in range(15):
        yield random.randint(1, 100)

print("\\nStreaming data processor with sliding window:")
stream = data_stream()
processor = streaming_processor(stream, window_size=4)

for i, result in enumerate(processor):
    print(f"  Window {i+1}: {result}")

# Generator for batch processing
def batch_processor(items, batch_size, processor_func):
    """Process items in batches."""
    batch = []
    
    for item in items:
        batch.append(item)
        
        if len(batch) {'>'}= batch_size:
            # Process full batch
            yield processor_func(batch)
            batch = []
    
    # Process remaining items
    if batch:
        yield processor_func(batch)

def process_batch(batch):
    """Process a batch of items."""
    return {'{'}
        'batch_size': len(batch),
        'sum': sum(batch),
        'avg': sum(batch) / len(batch),
        'min': min(batch),
        'max': max(batch)
    {'}'}

print("\\nBatch processing generator:")
data = range(1, 23)  # 22 items
batch_gen = batch_processor(data, batch_size=5, processor_func=process_batch)

for i, batch_result in enumerate(batch_gen):
    print(f"  Batch {i+1}: {batch_result}")

# Memory-efficient file processing
def large_file_processor(filename, chunk_size=1024):
    """Process large files chunk by chunk."""
    try:
        with open(filename, 'r', encoding='utf-8') as file:
            while True:
                chunk = file.read(chunk_size)
                if not chunk:
                    break
                
                # Process chunk
                lines = chunk.split('\\n')
                word_count = sum(len(line.split()) for line in lines)
                char_count = len(chunk)
                
                yield {'{'}
                    'chunk_size': len(chunk),
                    'lines': len(lines),
                    'words': word_count,
                    'chars': char_count
                {'}'}
    
    except FileNotFoundError:
        yield {'{'}{''}error{''}: f"File {'\''}{'{'}{filename}{'}'}{'\''} not found"{'}'}

# Create sample large file
large_content = "\\n".join([f"Line {i}: This is sample text with multiple words." 
                          for i in range(1000)])

with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.txt') as temp_file:
    temp_file.write(large_content)
    temp_filename = temp_file.name

print("\\nLarge file processing generator:")
file_gen = large_file_processor(temp_filename, chunk_size=200)

total_chars = 0
total_words = 0
chunk_count = 0

for chunk_info in file_gen:
    if 'error' in chunk_info:
        print(f"  Error: {chunk_info['error']}")
        break
    
    chunk_count += 1
    total_chars += chunk_info['chars']
    total_words += chunk_info['words']
    
    if chunk_count {'<'}= 5:  # Show first 5 chunks
        print(f"  Chunk {chunk_count}: {chunk_info}")

print(f"\\nTotal: {chunk_count} chunks, {total_chars} chars, {total_words} words")

os.unlink(temp_filename)  # Cleanup

# Performance monitoring generator
def monitored_generator(generator, monitor_interval=10):
    """Generator wrapper that monitors performance."""
    import time
    
    start_time = time.time()
    item_count = 0
    
    for item in generator:
        item_count += 1
        
        if item_count % monitor_interval == 0:
            elapsed = time.time() - start_time
            rate = item_count / elapsed if elapsed > 0 else 0
            
            print(f"  Performance: {item_count} items, "
                  f"{elapsed:.2f}s, {rate:.2f} items/sec")
        
        yield item
    
    # Final statistics
    total_time = time.time() - start_time
    final_rate = item_count / total_time if total_time > 0 else 0
    
    print(f"  Final: {item_count} items processed in {total_time:.2f}s "
          f"({final_rate:.2f} items/sec)")

print("\\nPerformance monitoring generator:")

def slow_generator(count):
    """Generator that simulates slow processing."""
    for i in range(count):
        time.sleep(0.001)  # Simulate processing time
        yield i**2

monitored = monitored_generator(slow_generator(100), monitor_interval=25)
results = list(monitored)
print(f"Processed {len(results)} items")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Generator Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Best Practices:</h3>
            <ul>
              <li><strong>Use for memory efficiency:</strong> Generators are ideal for large datasets and streams</li>
              <li><strong>Lazy evaluation:</strong> Generate values only when needed to save resources</li>
              <li><strong>One-time iteration:</strong> Remember that generators are consumed once</li>
              <li><strong>Error handling:</strong> Include proper exception handling in generator functions</li>
              <li><strong>Resource cleanup:</strong> Use try/finally or context managers for resource management</li>
              <li><strong>Meaningful names:</strong> Use descriptive names for generator functions and variables</li>
              <li><strong>Documentation:</strong> Document what your generators yield and any side effects</li>
              <li><strong>Testing:</strong> Test generators thoroughly, including edge cases and exceptions</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a generator that produces prime numbers using the Sieve of Eratosthenes</li>
              <li>Build a file reader generator that processes CSV files line by line</li>
              <li>Design a generator pipeline for data cleaning and transformation</li>
              <li>Create a generator that simulates real-time sensor data with timestamps</li>
              <li>Build a tree traversal generator for different traversal orders</li>
              <li>Design a generator for paginated API results</li>
              <li>Create a memory-efficient log file analyzer using generators</li>
              <li>Build a generator that produces mathematical sequences (factorial, squares, etc.)</li>
              <li>Design a streaming data processor with windowing and aggregation</li>
              <li>Create a generator-based task scheduler for background processing</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default GeneratorsAndIterators;
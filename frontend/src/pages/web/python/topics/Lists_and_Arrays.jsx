import React from 'react';
import '../Navbarweb.css';

function ListsAndArrays() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>📋 Lists and Arrays</h1>
        <p className="py-topic-subtitle">
          Master Python's most versatile data structure for storing collections of items
        </p>
      </div>

      <div className="py-topic-content">
        {/* Introduction to Lists */}
        <section className="py-topic-section">
          <h2>📝 What are Lists?</h2>
          <p>
            Lists are ordered collections of items that can store different data types. They are mutable, 
            meaning you can change their contents after creation. Lists are one of the most commonly 
            used data structures in Python.
          </p>
          
          <div className="py-code-block">
            <pre>{`# Creating lists
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
empty_list = []

# Lists can contain other lists
nested = [[1, 2], [3, 4], [5, 6]]

print(fruits)   # ['apple', 'banana', 'orange']
print(len(fruits))  # 3 (length of list)`}</pre>
          </div>
        </section>

        {/* Accessing List Elements */}
        <section className="py-topic-section">
          <h2>🎯 Accessing List Elements</h2>
          
          <h3>Indexing</h3>
          <div className="py-code-block">
            <pre>{`fruits = ["apple", "banana", "orange", "grape", "kiwi"]

# Positive indexing (starts from 0)
print(fruits[0])    # apple (first element)
print(fruits[1])    # banana (second element)
print(fruits[4])    # kiwi (last element)

# Negative indexing (starts from -1 for last element)
print(fruits[-1])   # kiwi (last element)
print(fruits[-2])   # grape (second to last)
print(fruits[-5])   # apple (first element)

# IndexError if index is out of range
# print(fruits[10])  # Error!`}</pre>
          </div>

          <h3>Slicing</h3>
          <div className="py-code-block">
            <pre>{`numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Basic slicing: list[start:end]
print(numbers[2:5])     # [2, 3, 4] (end index excluded)
print(numbers[:4])      # [0, 1, 2, 3] (from start to index 4)
print(numbers[6:])      # [6, 7, 8, 9] (from index 6 to end)
print(numbers[:])       # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] (entire list)

# Slicing with step: list[start:end:step]
print(numbers[::2])     # [0, 2, 4, 6, 8] (every 2nd element)
print(numbers[1::2])    # [1, 3, 5, 7, 9] (every 2nd starting from index 1)
print(numbers[::-1])    # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] (reverse)`}</pre>
          </div>
        </section>

        {/* Modifying Lists */}
        <section className="py-topic-section">
          <h2>✏️ Modifying Lists</h2>
          
          <h3>Changing Elements</h3>
          <div className="py-code-block">
            <pre>{`fruits = ["apple", "banana", "orange"]

# Change single element
fruits[1] = "mango"
print(fruits)  # ['apple', 'mango', 'orange']

# Change multiple elements using slicing
fruits[1:3] = ["pear", "grape"]
print(fruits)  # ['apple', 'pear', 'grape']

# Change with different number of elements
numbers = [1, 2, 3, 4, 5]
numbers[1:3] = [10, 20, 30, 40]
print(numbers)  # [1, 10, 20, 30, 40, 4, 5]`}</pre>
          </div>

          <h3>Adding Elements</h3>
          <div className="py-code-block">
            <pre>{`fruits = ["apple", "banana"]

# append() - add single element to end
fruits.append("orange")
print(fruits)  # ['apple', 'banana', 'orange']

# insert() - add element at specific position
fruits.insert(1, "mango")
print(fruits)  # ['apple', 'mango', 'banana', 'orange']

# extend() - add multiple elements
fruits.extend(["grape", "kiwi"])
print(fruits)  # ['apple', 'mango', 'banana', 'orange', 'grape', 'kiwi']

# Using + operator to combine lists
more_fruits = fruits + ["pear", "peach"]
print(more_fruits)  # Original list + new elements`}</pre>
          </div>

          <h3>Removing Elements</h3>
          <div className="py-code-block">
            <pre>{`fruits = ["apple", "banana", "orange", "banana", "grape"]

# remove() - removes first occurrence of value
fruits.remove("banana")
print(fruits)  # ['apple', 'orange', 'banana', 'grape']

# pop() - removes and returns element at index (last if no index given)
last_fruit = fruits.pop()
print(last_fruit)  # grape
print(fruits)      # ['apple', 'orange', 'banana']

second_fruit = fruits.pop(1)
print(second_fruit)  # orange
print(fruits)        # ['apple', 'banana']

# del statement - delete by index or slice
numbers = [1, 2, 3, 4, 5, 6, 7]
del numbers[0]      # Remove first element
del numbers[1:3]    # Remove slice
print(numbers)      # [2, 5, 6, 7]

# clear() - remove all elements
numbers.clear()
print(numbers)      # []`}</pre>
          </div>
        </section>

        {/* List Methods */}
        <section className="py-topic-section">
          <h2>🔧 Useful List Methods</h2>
          
          <div className="py-code-block">
            <pre>{`numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]

# count() - count occurrences of value
print(numbers.count(1))    # 2
print(numbers.count(5))    # 2

# index() - find index of first occurrence
print(numbers.index(4))    # 2
print(numbers.index(5))    # 4 (first occurrence)

# sort() - sort list in place
numbers.sort()
print(numbers)             # [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]

# sort in descending order
numbers.sort(reverse=True)
print(numbers)             # [9, 6, 5, 5, 4, 3, 3, 2, 1, 1]

# reverse() - reverse list in place
fruits = ["apple", "banana", "orange"]
fruits.reverse()
print(fruits)              # ['orange', 'banana', 'apple']

# copy() - create a shallow copy
original = [1, 2, 3]
copy_list = original.copy()
copy_list.append(4)
print(original)            # [1, 2, 3] (unchanged)
print(copy_list)           # [1, 2, 3, 4]`}</pre>
          </div>
        </section>

        {/* List Comprehensions */}
        <section className="py-topic-section">
          <h2>⚡ List Comprehensions</h2>
          <p>
            List comprehensions provide a concise way to create lists based on existing lists or other iterables.
          </p>
          
          <div className="py-code-block">
            <pre>{`# Basic list comprehension
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]
print(squares)  # [1, 4, 9, 16, 25]

# With condition
evens = [x for x in numbers if x % 2 == 0]
print(evens)    # [2, 4]

# More complex expressions
words = ["hello", "world", "python"]
lengths = [len(word) for word in words]
print(lengths)  # [5, 5, 6]

upper_words = [word.upper() for word in words if len(word) > 4]
print(upper_words)  # ['HELLO', 'WORLD', 'PYTHON']

# Nested list comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
print(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]`}</pre>
          </div>
        </section>

        {/* Working with Lists */}
        <section className="py-topic-section">
          <h2>🛠️ Common List Operations</h2>
          
          <h3>Checking Membership</h3>
          <div className="py-code-block">
            <pre>{`fruits = ["apple", "banana", "orange"]

# Check if item exists in list
print("apple" in fruits)      # True
print("grape" in fruits)      # False
print("mango" not in fruits)  # True

# Find all indices of a value
def find_all_indices(lst, value):
    return [i for i, x in enumerate(lst) if x == value]

numbers = [1, 2, 3, 2, 4, 2, 5]
indices = find_all_indices(numbers, 2)
print(indices)  # [1, 3, 5]`}</pre>
          </div>

          <h3>Iterating Through Lists</h3>
          <div className="py-code-block">
            <pre>{`fruits = ["apple", "banana", "orange"]

# Basic iteration
for fruit in fruits:
    print(fruit)

# With index using enumerate()
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# Iterating through multiple lists with zip()
colors = ["red", "yellow", "orange"]
for fruit, color in zip(fruits, colors):
    print(f"{fruit} is {color}")

# Reverse iteration
for fruit in reversed(fruits):
    print(fruit)`}</pre>
          </div>
        </section>

        {/* Lists vs Arrays */}
        <section className="py-topic-section">
          <h2>📊 Lists vs Arrays (NumPy)</h2>
          <p>
            While Python lists are versatile, NumPy arrays are better for numerical computations.
          </p>
          
          <div className="py-info-box">
            <h3>When to use Lists vs Arrays:</h3>
            <ul>
              <li><strong>Python Lists:</strong> Mixed data types, dynamic size, general-purpose</li>
              <li><strong>NumPy Arrays:</strong> Numerical data, fixed size, mathematical operations</li>
            </ul>
          </div>

          <div className="py-code-block">
            <pre>{`# Python lists - flexible but slower for math
python_list = [1, 2, 3, 4, 5]
doubled = [x * 2 for x in python_list]

# NumPy arrays - faster for numerical operations
import numpy as np
numpy_array = np.array([1, 2, 3, 4, 5])
doubled_np = numpy_array * 2  # Vectorized operation

print(doubled)     # [2, 4, 6, 8, 10]
print(doubled_np)  # [2 4 6 8 10]

# NumPy offers many mathematical functions
print(np.sum(numpy_array))    # 15
print(np.mean(numpy_array))   # 3.0
print(np.std(numpy_array))    # Standard deviation`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>List Best Practices:</h3>
            <ul>
              <li><strong>Use list comprehensions</strong> for simple transformations</li>
              <li><strong>Use enumerate()</strong> when you need both index and value</li>
              <li><strong>Use in operator</strong> for membership testing</li>
              <li><strong>Avoid modifying lists</strong> while iterating over them</li>
              <li><strong>Use copy()</strong> when you need independent copies</li>
              <li><strong>Consider deque</strong> for frequent insertions/deletions at both ends</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a list of numbers and find the sum, average, and maximum</li>
              <li>Remove duplicates from a list while preserving order</li>
              <li>Merge two sorted lists into one sorted list</li>
              <li>Find the second largest element in a list</li>
              <li>Rotate a list by k positions to the right</li>
              <li>Create a function that flattens a nested list</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ListsAndArrays;
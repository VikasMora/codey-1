import React from 'react';
import '../Navbarweb.css';

function ScopeAndNamespaces() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>🔍 Scope and Namespaces</h1>
        <p className="py-topic-subtitle">
          Understanding variable scope and namespaces in Python
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>🎯 What are Scope and Namespaces?</h2>
          <p>
            <strong>Scope</strong> determines where variables can be accessed in your code, while 
            <strong> namespaces</strong> are containers that hold names (variables, functions, classes) 
            and map them to objects. Understanding these concepts is crucial for writing robust 
            Python programs and avoiding common variable-related errors.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Concepts:</h3>
            <ul>
              <li><strong>Namespace:</strong> A mapping from names to objects (like a dictionary)</li>
              <li><strong>Scope:</strong> A region of code where a namespace is directly accessible</li>
              <li><strong>LEGB Rule:</strong> Local → Enclosing → Global → Built-in (search order)</li>
              <li><strong>Variable Lifetime:</strong> How long a variable exists in memory</li>
            </ul>
          </div>
        </section>

        {/* Types of Scope */}
        <section className="py-topic-section">
          <h2>📍 Types of Scope in Python</h2>
          
          <h3>1. Local Scope</h3>
          <p>Variables defined inside a function have local scope - they're only accessible within that function.</p>
          
          <div className="py-code-block">
            <pre>{`def my_function():
    # Local variable - only accessible inside this function
    local_var = "I'm local"
    print(local_var)  # This works
    
    def nested_function():
        # This is also local to nested_function
        nested_var = "I'm nested local"
        print(local_var)    # Can access parent's local variable
        print(nested_var)   # Can access own local variable
    
    nested_function()
    # print(nested_var)  # Error! nested_var is not accessible here

my_function()
# print(local_var)  # Error! local_var is not accessible here

# Example: Function parameters are also local
def greet(name):  # 'name' is a local variable
    message = f"Hello, {{name}}!"  # 'message' is local too
    return message

result = greet("Alice")
print(result)  # Works fine
# print(name)     # Error! 'name' is not accessible outside the function
# print(message)  # Error! 'message' is not accessible outside the function`}</pre>
          </div>

          <h3>2. Global Scope</h3>
          <p>Variables defined at the module level have global scope - accessible throughout the module.</p>
          
          <div className="py-code-block">
            <pre>{`# Global variables - accessible throughout the module
global_var = "I'm global"
counter = 0

def function_one():
    # Can read global variables
    print(global_var)  # Works fine
    print(f"Counter: {{counter}}")  # Works fine

def function_two():
    # Can also read global variables
    print(f"Still can access: {{global_var}}")

function_one()
function_two()

# Modifying global variables requires 'global' keyword
def increment_counter():
    global counter  # Tell Python we want to modify the global counter
    counter += 1    # Now this modifies the global variable
    print(f"Counter is now: {{counter}}")

def wrong_increment():
    # This creates a NEW local variable, doesn't modify global
    counter = counter + 1  # Error! Can't read local before assignment
    print(counter)

increment_counter()  # Works fine
print(f"Global counter: {{counter}}")  # Shows the modified value

# wrong_increment()  # This would cause an UnboundLocalError`}</pre>
          </div>

          <h3>3. Enclosing Scope</h3>
          <p>Variables in the enclosing (outer) function scope - relevant for nested functions.</p>
          
          <div className="py-code-block">
            <pre>{`def outer_function(x):
    # This is enclosing scope for inner_function
    outer_var = f"Outer variable: {{x}}"
    
    def inner_function(y):
        # Can access variables from enclosing scope
        inner_var = f"Inner variable: {{y}}"
        print(outer_var)  # Accessing enclosing scope
        print(inner_var)  # Accessing local scope
        
        def deeply_nested():
            # Can access both enclosing scopes
            print(outer_var)  # From outer_function
            print(inner_var)  # From inner_function
            print("Deeply nested function")
        
        deeply_nested()
    
    inner_function("Hello")
    # print(inner_var)  # Error! inner_var is not accessible here

outer_function("World")

# Using 'nonlocal' to modify enclosing scope variables
def make_counter():
    count = 0  # Enclosing scope variable
    
    def increment():
        nonlocal count  # Tell Python to use enclosing scope's count
        count += 1
        return count
    
    def get_count():
        return count  # Can read without nonlocal
    
    return increment, get_count

# Create counter functions
inc, get = make_counter()
print(inc())  # 1
print(inc())  # 2
print(get())  # 2`}</pre>
          </div>

          <h3>4. Built-in Scope</h3>
          <p>Contains built-in functions and exceptions that are always available.</p>
          
          <div className="py-code-block">
            <pre>{`# Built-in scope contains functions like:
print("Hello")          # print is built-in
result = len([1, 2, 3]) # len is built-in  
value = abs(-5)         # abs is built-in
numbers = range(5)      # range is built-in

# You can see all built-in names
import builtins
print("Built-in names:", dir(builtins))

# You can override built-ins (but shouldn't!)
def print(message):  # This shadows the built-in print
    pass  # Do nothing

print("This won't print!")  # Uses our custom print function

# To access the original built-in after overriding
builtins.print("This will print!")  # Uses built-in print

# Delete our custom print to restore built-in
del print
print("Built-in print is back!")  # Now uses built-in print again`}</pre>
          </div>
        </section>

        {/* LEGB Rule */}
        <section className="py-topic-section">
          <h2>🔍 The LEGB Rule</h2>
          <p>
            Python follows the LEGB rule to resolve variable names: <strong>L</strong>ocal → 
            <strong>E</strong>nclosing → <strong>G</strong>lobal → <strong>B</strong>uilt-in
          </p>
          
          <div className="py-code-block">
            <pre>{`# Demonstrating LEGB rule
x = "Global x"          # Global scope

def outer():
    x = "Enclosing x"   # Enclosing scope
    
    def inner():
        x = "Local x"   # Local scope
        print(f"Inner function sees: {{x}}")  # Uses Local x
    
    inner()
    print(f"Outer function sees: {{x}}")      # Uses Enclosing x

outer()
print(f"Module level sees: {{x}}")            # Uses Global x

# Example without local variable
def outer_no_local():
    x = "Enclosing x"
    
    def inner_no_local():
        # No local x, so uses enclosing x
        print(f"Inner sees: {{x}}")  # Uses Enclosing x
    
    inner_no_local()

outer_no_local()

# Example with built-in
def demo_builtin():
    def inner():
        # No local 'len', checks enclosing (none), global (none), then built-in
        return len([1, 2, 3])  # Uses built-in len
    
    return inner()

print(f"Length: {{demo_builtin()}}")

# Demonstrating search order with same name at different levels
name = "Global"

def level1():
    name = "Enclosing"
    
    def level2():
        name = "Local"
        print(f"Level 2: {{name}}")  # Local wins
    
    def level2_no_local():
        print(f"Level 2 (no local): {{name}}")  # Enclosing wins
    
    level2()
    level2_no_local()
    print(f"Level 1: {{name}}")  # Enclosing scope

level1()
print(f"Global level: {{name}}")  # Global scope`}</pre>
          </div>
        </section>

        {/* Namespaces in Detail */}
        <section className="py-topic-section">
          <h2>📚 Understanding Namespaces</h2>
          
          <h3>Types of Namespaces</h3>
          <div className="py-code-block">
            <pre>{`# 1. Built-in namespace
# Contains built-in functions and exceptions
print(dir(__builtins__))  # See built-in names

# 2. Global namespace (module namespace)
global_var = "I'm in global namespace"
print(globals())  # See all global names

# 3. Local namespace (function namespace)
def show_local_namespace():
    local_var = "I'm in local namespace"
    parameter = "I'm a parameter"
    print("Local namespace:", locals())  # See all local names

show_local_namespace()

# 4. Class namespace
class MyClass:
    class_var = "I'm a class variable"
    
    def __init__(self):
        self.instance_var = "I'm an instance variable"
    
    def show_namespaces(self):
        local_var = "I'm a method local variable"
        print("Class namespace:", MyClass.__dict__)
        print("Instance namespace:", self.__dict__)
        print("Method local namespace:", locals())

obj = MyClass()
obj.show_namespaces()

# 5. Module namespace
import math
print("Math module namespace:", dir(math))`}</pre>
          </div>

          <h3>Namespace Lifecycle</h3>
          <div className="py-code-block">
            <pre>{`# Namespaces are created and destroyed at different times

def demonstrate_lifecycle():
    """Show when local namespace is created and destroyed."""
    print("Function starts - local namespace created")
    
    local_var = "I exist now"
    print(f"Variable created: {{local_var}}")
    
    if True:
        # Python doesn't create new namespace for if/for/while blocks
        block_var = "I'm in the same namespace as local_var"
        print(f"Block variable: {{block_var}}")
    
    # block_var is still accessible here (same namespace)
    print(f"Still accessible: {{block_var}}")
    
    print("Function ends - local namespace will be destroyed")

demonstrate_lifecycle()
# All local variables are now gone

# Class namespace example
class Counter:
    count = 0  # Class namespace - shared by all instances
    
    def __init__(self, name):
        self.name = name        # Instance namespace - unique per instance
        Counter.count += 1      # Modify class namespace
        self.instance_id = Counter.count  # Use class variable
    
    @classmethod
    def get_total_count(cls):
        return cls.count  # Access class namespace

# Create instances
c1 = Counter("First")
c2 = Counter("Second")

print(f"Total counters: {{Counter.get_total_count()}}")  # 2
print(f"C1 name: {{c1.name}}, ID: {{c1.instance_id}}")   # First, 1  
print(f"C2 name: {{c2.name}}, ID: {{c2.instance_id}}")   # Second, 2`}</pre>
          </div>
        </section>

        {/* Variable Resolution Examples */}
        <section className="py-topic-section">
          <h2>🎯 Variable Resolution Examples</h2>
          
          <div className="py-code-block">
            <pre>{`# Complex example showing variable resolution
message = "Global message"

def outer_function():
    message = "Outer function message"
    
    def inner_function():
        # Different scenarios for variable access
        
        def scenario1():
            # Uses enclosing scope (outer_function's message)
            print(f"Scenario 1: {{message}}")
        
        def scenario2():
            message = "Local message"  # Creates local variable
            print(f"Scenario 2: {{message}}")  # Uses local
        
        def scenario3():
            global message  # Refers to global message
            print(f"Scenario 3 (before): {{message}}")
            message = "Modified global message"
            print(f"Scenario 3 (after): {{message}}")
        
        def scenario4():
            nonlocal message  # Refers to enclosing scope message
            print(f"Scenario 4 (before): {{message}}")
            message = "Modified enclosing message"
            print(f"Scenario 4 (after): {{message}}")
        
        # Run scenarios
        scenario1()  # Uses enclosing scope
        scenario2()  # Uses local scope
        
        print(f"After scenario2, enclosing still: {{message}}")
        
        scenario3()  # Modifies global
        print(f"After scenario3, enclosing still: {{message}}")
        
        scenario4()  # Modifies enclosing
        print(f"After scenario4, enclosing now: {{message}}")
    
    inner_function()
    print(f"Outer function final: {{message}}")

print(f"Initial global: {{message}}")
outer_function()
print(f"Final global: {{message}}")

# Example: Variable masking/shadowing
def demonstrate_shadowing():
    # This function shows how variables can "shadow" each other
    
    list = [1, 2, 3]  # This shadows the built-in 'list' function!
    
    # Now 'list' refers to our local variable, not the built-in
    print(f"Local list: {{list}}")
    
    # This would cause an error because list is no longer the built-in function
    # new_list = list([4, 5, 6])  # TypeError: 'list' object is not callable
    
    # To use the built-in list function, we need to access it via builtins
    import builtins
    new_list = builtins.list([4, 5, 6])
    print(f"Created using built-in list: {{new_list}}")

demonstrate_shadowing()`}</pre>
          </div>
        </section>

        {/* Global and Nonlocal Keywords */}
        <section className="py-topic-section">
          <h2>🔧 Global and Nonlocal Keywords</h2>
          
          <h3>The 'global' Keyword</h3>
          <div className="py-code-block">
            <pre>{`# Global keyword usage
counter = 0  # Global variable

def increment():
    global counter  # Declare that we want to modify the global counter
    counter += 1

def decrement():
    global counter
    counter -= 1

def get_counter():
    # No 'global' needed for reading
    return counter

print(f"Initial counter: {{get_counter()}}")  # 0

increment()
print(f"After increment: {{get_counter()}}")  # 1

decrement()  
print(f"After decrement: {{get_counter()}}")  # 0

# Multiple global variables
x = 10
y = 20

def modify_multiple():
    global x, y  # Can declare multiple globals
    x, y = y, x  # Swap the values

print(f"Before swap: x={{x}}, y={{y}}")  # x=10, y=20
modify_multiple()
print(f"After swap: x={{x}}, y={{y}}")   # x=20, y=10

# Creating global variables from within functions
def create_global():
    global new_global_var
    new_global_var = "Created inside function"

# new_global_var doesn't exist yet
# print(new_global_var)  # NameError

create_global()  # Now it exists
print(new_global_var)  # Works fine`}</pre>
          </div>

          <h3>The 'nonlocal' Keyword</h3>
          <div className="py-code-block">
            <pre>{`# Nonlocal keyword usage
def outer():
    x = 10  # Enclosing scope variable
    
    def inner():
        nonlocal x  # Refer to enclosing scope's x
        x += 5      # Modify enclosing scope's x
    
    print(f"Before inner: x = {{x}}")  # 10
    inner()
    print(f"After inner: x = {{x}}")   # 15

outer()

# More complex nonlocal example
def make_accumulator(start=0):
    total = start  # Enclosing scope variable
    
    def add(amount):
        nonlocal total  # Modify enclosing scope's total
        total += amount
        return total
    
    def subtract(amount):
        nonlocal total
        total -= amount
        return total
    
    def get_total():
        return total  # Can read without nonlocal
    
    def reset():
        nonlocal total
        total = start  # Reset to initial value
    
    # Return functions that form a closure
    return add, subtract, get_total, reset

# Create an accumulator
add_fn, sub_fn, get_fn, reset_fn = make_accumulator(100)

print(f"Initial: {{get_fn()}}")      # 100
print(f"Add 50: {{add_fn(50)}}")     # 150
print(f"Subtract 20: {{sub_fn(20)}}") # 130
print(f"Current: {{get_fn()}}")      # 130
reset_fn()
print(f"After reset: {{get_fn()}}")  # 100

# Nonlocal with nested levels
def level1():
    x = "Level 1"
    
    def level2():
        x = "Level 2"  # This creates a new local variable
        
        def level3():
            nonlocal x  # Refers to level2's x, not level1's
            x = "Modified Level 2"
        
        print(f"Level 2 before: {{x}}")
        level3()
        print(f"Level 2 after: {{x}}")
    
    print(f"Level 1: {{x}}")
    level2()
    print(f"Level 1 unchanged: {{x}}")

level1()`}</pre>
          </div>
        </section>

        {/* Common Pitfalls */}
        <section className="py-topic-section">
          <h2>⚠️ Common Scope Pitfalls</h2>
          
          <div className="py-info-box warning">
            <h3>🚨 Watch Out For These Mistakes:</h3>
            <ul>
              <li><strong>UnboundLocalError:</strong> Trying to read a local variable before assigning to it</li>
              <li><strong>Late Binding Closures:</strong> Loop variables in closures</li>
              <li><strong>Mutable Default Arguments:</strong> Shared state between function calls</li>
              <li><strong>Variable Shadowing:</strong> Accidentally hiding built-in or global variables</li>
            </ul>
          </div>

          <div className="py-code-block">
            <pre>{`# 1. UnboundLocalError
def problematic_function():
    print(x)  # Error! Python sees 'x = 5' below and treats x as local
    x = 5     # This makes x a local variable for the entire function

x = 10  # Global x
# problematic_function()  # UnboundLocalError

# Fix: Use global keyword or read before assigning
def fixed_function():
    global x
    print(x)  # Now it works
    x = 5

# 2. Late Binding Closures (Loop Variable Problem)
functions = []
for i in range(3):
    # All functions will print 2 (the final value of i)!
    functions.append(lambda: print(f"Wrong: {{i}}"))

print("Late binding problem:")
for func in functions:
    func()  # All print "Wrong: 2"

# Fix: Capture the loop variable
functions_fixed = []
for i in range(3):
    # Capture i as a default parameter
    functions_fixed.append(lambda x=i: print(f"Fixed: {{x}}"))

print("Fixed version:")
for func in functions_fixed:
    func()  # Prints 0, 1, 2 correctly

# 3. Mutable Default Arguments
def append_to_list(item, target_list=[]):  # Dangerous!
    target_list.append(item)
    return target_list

# The same list object is reused!
list1 = append_to_list("first")
list2 = append_to_list("second")
print(f"List1: {{list1}}")  # ['first', 'second'] - Unexpected!
print(f"List2: {{list2}}")  # ['first', 'second'] - Same object!

# Fix: Use None as default
def append_to_list_fixed(item, target_list=None):
    if target_list is None:
        target_list = []  # Create new list each time
    target_list.append(item)
    return target_list

list3 = append_to_list_fixed("third")
list4 = append_to_list_fixed("fourth")
print(f"List3: {{list3}}")  # ['third'] - Correct!
print(f"List4: {{list4}}")  # ['fourth'] - Correct!

# 4. Variable Shadowing
def shadowing_example():
    # Accidentally shadow built-in functions
    max = 5  # This shadows the built-in max function
    min = 3  # This shadows the built-in min function
    
    numbers = [1, 2, 3, 4, 5]
    # result = max(numbers)  # Error! max is now an integer, not a function
    
    # Fix: Use different variable names
    maximum_value = 5
    minimum_value = 3
    result = max(numbers)  # Now this works
    
    return result

print(f"Max value: {{shadowing_example()}}")`}</pre>
          </div>
        </section>

        {/* Advanced Topics */}
        <section className="py-topic-section">
          <h2>🚀 Advanced Scope Concepts</h2>
          
          <h3>Closures and Free Variables</h3>
          <div className="py-code-block">
            <pre>{`# Closures: Functions that capture variables from enclosing scope
def make_multiplier(factor):
    # 'factor' is captured by the inner function
    def multiplier(number):
        return number * factor  # 'factor' is a free variable
    
    return multiplier

# Create different multipliers
double = make_multiplier(2)
triple = make_multiplier(3)

print(f"Double 5: {{double(5)}}")  # 10
print(f"Triple 5: {{triple(5)}}")  # 15

# Inspect closure information
print(f"Double closure variables: {{double.__code__.co_freevars}}")  # ('factor',)
print(f"Double closure values: {{double.__closure__[0].cell_contents}}")  # 2

# Multiple free variables
def make_calculator(operation, initial_value):
    def calculate(x):
        if operation == "add":
            return initial_value + x
        elif operation == "multiply":
            return initial_value * x
        else:
            return x
    
    return calculate

add_ten = make_calculator("add", 10)
multiply_by_five = make_calculator("multiply", 5)

print(f"Add 10 to 7: {{add_ten(7)}}")          # 17
print(f"Multiply 7 by 5: {{multiply_by_five(7)}}")  # 35

# Class-based alternative to closures
class Multiplier:
    def __init__(self, factor):
        self.factor = factor
    
    def __call__(self, number):
        return number * self.factor

class_double = Multiplier(2)
print(f"Class-based double 5: {{class_double(5)}}")  # 10`}</pre>
          </div>

          <h3>Scope in List Comprehensions and Generator Expressions</h3>
          <div className="py-code-block">
            <pre>{`# List comprehensions have their own scope (Python 3.x)
x = "global"

# The 'x' in the list comprehension doesn't affect global 'x'
result = [x for x in range(3)]
print(f"After list comprehension, global x is still: {{x}}")  # "global"

# However, variables from enclosing scope are accessible
def scope_in_comprehensions():
    outer_var = "outer"
    
    # Can access outer_var from comprehension
    result = [f"{{outer_var}}-{{i}}" for i in range(3)]
    print(f"Comprehension result: {{result}}")
    
    # Comprehension variables don't leak into function scope (Python 3.x)
    # print(i)  # NameError in Python 3.x
    
    return result

scope_in_comprehensions()

# Generator expressions also have their own scope
def generator_scope():
    numbers = [1, 2, 3, 4, 5]
    
    # Generator expression with its own scope
    squares = (x**2 for x in numbers if x % 2 == 0)
    
    # The 'x' variable doesn't exist in function scope
    # print(x)  # NameError
    
    return list(squares)

print(f"Even squares: {{generator_scope()}}")  # [4, 16]

# Nested comprehensions
def nested_comprehensions():
    matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    
    # Flatten matrix using nested comprehension
    flattened = [item for row in matrix for item in row]
    print(f"Flattened: {{flattened}}")
    
    # Variables in comprehensions don't interfere
    result = [
        [item * 2 for item in row]  # inner 'item' 
        for row in matrix           # outer 'row'
    ]
    print(f"Doubled matrix: {{result}}")

nested_comprehensions()`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Scope and Namespace Best Practices:</h3>
            <ul>
              <li><strong>Minimize global variables:</strong> Use function parameters and return values</li>
              <li><strong>Use descriptive names:</strong> Avoid shadowing built-in functions</li>
              <li><strong>Be explicit:</strong> Use global/nonlocal keywords when modifying outer variables</li>
              <li><strong>Keep functions small:</strong> Reduce the need for complex scoping</li>
              <li><strong>Avoid mutable defaults:</strong> Use None and create new objects inside functions</li>
              <li><strong>Document closures:</strong> Make it clear when functions capture variables</li>
            </ul>
          </div>

          <div className="py-code-block">
            <pre>{`# Good practices example
class BankAccount:
    """Example of good scope management."""
    
    _next_account_id = 1000  # Class variable
    
    def __init__(self, initial_balance=0):
        # Instance variables
        self.account_id = BankAccount._next_account_id
        BankAccount._next_account_id += 1
        self.balance = initial_balance
        self.transaction_history = []
    
    def deposit(self, amount):
        """Deposit money - good parameter usage."""
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        
        self.balance += amount
        self._record_transaction("deposit", amount)
        return self.balance
    
    def withdraw(self, amount):
        """Withdraw money - clear scope boundaries."""
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")
        
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        
        self.balance -= amount
        self._record_transaction("withdrawal", amount)
        return self.balance
    
    def _record_transaction(self, transaction_type, amount):
        """Private method - clear scoping."""
        from datetime import datetime
        
        transaction = {{
            'type': transaction_type,
            'amount': amount,
            'timestamp': datetime.now(),
            'balance_after': self.balance
        }}
        
        self.transaction_history.append(transaction)
    
    def get_balance(self):
        """Simple accessor - no complex scoping needed."""
        return self.balance

# Usage demonstrates clear scope boundaries
account = BankAccount(100)
print(f"Initial balance: {{account.get_balance()}}")
account.deposit(50)
print(f"After deposit: {{account.get_balance()}}")
account.withdraw(25)
print(f"After withdrawal: {{account.get_balance()}}")`}</pre>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a function that demonstrates all four scope types (LEGB)</li>
              <li>Write a closure that maintains state between calls</li>
              <li>Fix code with UnboundLocalError using proper scope keywords</li>
              <li>Create a decorator that uses nonlocal to count function calls</li>
              <li>Build a simple namespace manager using classes</li>
              <li>Write functions that avoid common scoping pitfalls</li>
              <li>Implement a configuration system using global and local scopes</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ScopeAndNamespaces;
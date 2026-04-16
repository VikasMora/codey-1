import React from 'react';
import '../Navbarweb.css';

function Polymorphism() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>🎭 Polymorphism</h1>
        <p className="py-topic-subtitle">
          Understanding polymorphism and method overriding in Python
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>🎭 What is Polymorphism?</h2>
          <p>
            Polymorphism is a core principle of object-oriented programming that allows objects of 
            different types to be treated as instances of the same type through a common interface. 
            In Python, polymorphism enables you to write code that works with objects of different 
            classes, as long as they implement the same methods or protocols.
          </p>
          
          <div className="py-highlight-box">
            <h3>Types of Polymorphism in Python:</h3>
            <ul>
              <li><strong>Method Overriding:</strong> Redefining methods in child classes</li>
              <li><strong>Duck Typing:</strong> "If it walks like a duck and quacks like a duck, it's a duck"</li>
              <li><strong>Operator Overloading:</strong> Defining behavior for built-in operators</li>
              <li><strong>Protocol-based:</strong> Using abstract base classes and protocols</li>
              <li><strong>Generic Functions:</strong> Functions that work with multiple types</li>
              <li><strong>Runtime Polymorphism:</strong> Method resolution at runtime</li>
            </ul>
          </div>
        </section>

        {/* Method Overriding */}
        <section className="py-topic-section">
          <h2>🔄 Method Overriding</h2>
          
          <div className="py-code-block">
            <pre>{`# Method overriding and polymorphism
print("Method Overriding Examples:")

class Shape:
    def __init__(self, color):
        self.color = color
    
    def area(self):
        raise NotImplementedError("Subclasses must implement area method")
    
    def perimeter(self):
        raise NotImplementedError("Subclasses must implement perimeter method")
    
    def describe(self):
        return f"A {'{'}{self.color{'}'} shape"
    
    # Common method that uses polymorphic behavior
    def get_info(self):
        return f"{'{'}{self.describe(){'}'} with area {'{'}{self.area(){'}'} and perimeter {'{'}{self.perimeter(){'}'}"

class Rectangle(Shape):
    def __init__(self, color, width, height):
        super().__init__(color)
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)
    
    def describe(self):
        return f"A {'{'}{self.color{'}'} rectangle ({'{'}{self.width{'}'}x{'{'}{self.height{'}'}{')'}"

class Circle(Shape):
    def __init__(self, color, radius):
        super().__init__(color)
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2
    
    def perimeter(self):
        return 2 * 3.14159 * self.radius
    
    def describe(self):
        return f"A {'{'}{self.color{'}'} circle (radius {'{'}{self.radius{'}'}{')'}"

class Triangle(Shape):
    def __init__(self, color, base, height, side1, side2):
        super().__init__(color)
        self.base = base
        self.height = height
        self.side1 = side1
        self.side2 = side2
    
    def area(self):
        return 0.5 * self.base * self.height
    
    def perimeter(self):
        return self.base + self.side1 + self.side2
    
    def describe(self):
        return f"A {'{'}{self.color{'}'} triangle (base {'{'}{self.base{'}'}{')'}"

# Create different shapes
shapes = [
    Rectangle("red", 5, 3),
    Circle("blue", 4),
    Triangle("green", 6, 4, 5, 5),
    Rectangle("yellow", 2, 8)
]

print("\\nPolymorphic behavior with different shapes:")
for shape in shapes:
    print(f"Shape: {'{'}{shape.get_info(){'}'}")

# Function that works with any shape (polymorphism)
def calculate_total_area(shape_list):
    total = 0
    for shape in shape_list:
        total += shape.area()  # Polymorphic method call
    return total

def find_largest_shape(shape_list):
    if not shape_list:
        return None
    
    largest = shape_list[0]
    for shape in shape_list[1:]:
        if shape.area() > largest.area():  # Polymorphic comparison
            largest = shape
    return largest

print(f"\\nTotal area of all shapes: {'{'}{calculate_total_area(shapes){'}'}{')'}")
largest = find_largest_shape(shapes)
if largest:
    print(f"Largest shape: {'{'}{largest.describe(){'}'} with area {'{'}{largest.area(){'}'}")

# Animal hierarchy demonstrating method overriding
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def make_sound(self):
        return f"{'{'}{self.name{'}'} makes a sound"
    
    def move(self):
        return f"{'{'}{self.name{'}'} moves"
    
    def eat(self, food):
        return f"{'{'}{self.name{'}'} eats {'{'}{food{'}'}"
    
    def introduce(self):
        return f"I am {'{'}{self.name{'}'}{')'}, a {'{'}{self.species{'}'}"

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Dog")
        self.breed = breed
    
    def make_sound(self):
        return f"{'{'}{self.name{'}'} barks: Woof! Woof!"
    
    def move(self):
        return f"{'{'}{self.name{'}'} runs on four legs"
    
    def fetch(self, item):
        return f"{'{'}{self.name{'}'} fetches the {'{'}{item{'}'}"
    
    def introduce(self):
        base_intro = super().introduce()
        return f"{'{'}{base_intro{'}'}{')'} and I'm a {'{'}{self.breed{'}'}"

class Cat(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Cat")
        self.breed = breed
    
    def make_sound(self):
        return f"{'{'}{self.name{'}'} meows: Meow!"
    
    def move(self):
        return f"{'{'}{self.name{'}'} prowls silently"
    
    def climb(self):
        return f"{'{'}{self.name{'}'} climbs up high"

class Bird(Animal):
    def __init__(self, name, species, can_fly=True):
        super().__init__(name, species)
        self.can_fly = can_fly
    
    def make_sound(self):
        return f"{'{'}{self.name{'}'} chirps: Tweet! Tweet!"
    
    def move(self):
        if self.can_fly:
            return f"{'{'}{self.name{'}'} flies through the air"
        else:
            return f"{'{'}{self.name{'}'} walks on the ground"
    
    def fly(self):
        if self.can_fly:
            return f"{'{'}{self.name{'}'} spreads its wings and soars"
        else:
            return f"{'{'}{self.name{'}'} cannot fly"

# Demonstrate polymorphism with animals
animals = [
    Dog("Buddy", "Golden Retriever"),
    Cat("Whiskers", "Persian"), 
    Bird("Tweety", "Canary"),
    Bird("Penguin", "Emperor Penguin", can_fly=False),
    Dog("Rex", "German Shepherd")
]

print("\\nPolymorphic animal behaviors:")
for animal in animals:
    print(f"- {'{'}{animal.make_sound(){'}'}")
    print(f"  {'{'}{animal.move(){'}'}")
    print(f"  {'{'}{animal.introduce(){'}'}")
    print()

# Generic function that works with any animal
def animal_concert(animal_list):
    print("🎵 Animal Concert Starting! 🎵")
    for animal in animal_list:
        sound = animal.make_sound()  # Polymorphic call
        print(f"♪ {'{'}{sound{'}'} ♪")
    print("🎵 Concert Finished! 🎵")

animal_concert(animals[:3])  # Use first 3 animals

# Method overriding with different return types
class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model
    
    def start_engine(self):
        return "Engine started"
    
    def get_info(self):
        return {'{'}"type": "vehicle", "make": self.make, "model": self.model{'}'}

class Car(Vehicle):
    def __init__(self, make, model, doors):
        super().__init__(make, model)
        self.doors = doors
    
    def start_engine(self):
        return "Car engine started with a purr"
    
    def get_info(self):
        info = super().get_info()
        info.update({'{'}"type": "car", "doors": self.doors{'}'}{')'})
        return info

class Motorcycle(Vehicle):
    def __init__(self, make, model, cc):
        super().__init__(make, model)
        self.cc = cc
    
    def start_engine(self):
        return "Motorcycle engine started with a roar"
    
    def get_info(self):
        info = super().get_info()
        info.update({'{'}"type": "motorcycle", "engine_cc": self.cc{'}'}{')'})
        return info

vehicles = [
    Car("Toyota", "Camry", 4),
    Motorcycle("Harley", "Davidson", 1200),
    Car("Honda", "Civic", 2)
]

print("\\nVehicle polymorphism:")
for vehicle in vehicles:
    print(f"{'{'}{vehicle.start_engine(){'}'}")
    print(f"Info: {'{'}{vehicle.get_info(){'}'}")
    print()`}</pre>
          </div>
        </section>

        {/* Duck Typing */}
        <section className="py-topic-section">
          <h2>🦆 Duck Typing</h2>
          
          <div className="py-code-block">
            <pre>{`# Duck typing - "If it walks like a duck and quacks like a duck, it's a duck"
print("Duck Typing Examples:")

# Different classes that implement the same interface
class Duck:
    def quack(self):
        return "Quack quack!"
    
    def walk(self):
        return "Duck waddles"
    
    def fly(self):
        return "Duck flies with flapping wings"

class Robot:
    def quack(self):
        return "Beep beep! (robotic quack)"
    
    def walk(self):
        return "Robot walks with mechanical steps"
    
    def fly(self):
        return "Robot activates jetpack"

class Person:
    def quack(self):
        return "Human imitating duck: QUACK!"
    
    def walk(self):
        return "Person walks on two legs"
    
    def fly(self):
        return "Person cannot fly (yet!)"

class Car:
    def start(self):
        return "Car engine starts"
    
    def drive(self):
        return "Car drives on road"
    
    # Note: Car doesn't have quack, walk, or fly methods

# Function that expects duck-like behavior
def make_it_act_like_duck(duck_like_object):
    """This function works with any object that has quack, walk, and fly methods"""
    try:
        print(f"Quacking: {'{'}{duck_like_object.quack(){'}'}")
        print(f"Walking: {'{'}{duck_like_object.walk(){'}'}")
        print(f"Flying: {'{'}{duck_like_object.fly(){'}'}")
        return True
    except AttributeError as e:
        print(f"This object is not duck-like: {'{'}{e{'}'}")
        return False

# Test duck typing
duck_like_objects = [Duck(), Robot(), Person(), Car()]

print("\\nTesting duck typing:")
for obj in duck_like_objects:
    obj_type = type(obj).__name__
    print(f"\\nTesting {'{'}{obj_type{'}'}:")
    success = make_it_act_like_duck(obj)
    print(f"{'{'}{obj_type{'}'} is duck-like: {'{'}{success{'}'}")

# File-like objects example
class StringFileWriter:
    def __init__(self):
        self.content = []
    
    def write(self, text):
        self.content.append(text)
    
    def flush(self):
        pass  # No need to flush for in-memory storage
    
    def get_content(self):
        return ''.join(self.content)

class NetworkWriter:
    def __init__(self, url):
        self.url = url
        self.buffer = []
    
    def write(self, text):
        # Simulate writing to network
        self.buffer.append(f"[NETWORK] {'{'}{text{'}'}")
    
    def flush(self):
        # Simulate sending buffer to network
        print(f"Flushing {'{'}{len(self.buffer){'}'} items to {'{'}{self.url{'}'}")
        self.buffer.clear()

class ConsoleWriter:
    def write(self, text):
        print(f"[CONSOLE] {'{'}{text.strip(){'}'}")
    
    def flush(self):
        pass  # Console output is immediate

# Function that works with any file-like object
def save_report(writer, data):
    """Works with any object that has write and flush methods"""
    writer.write("=== REPORT ===\\n")
    for item in data:
        writer.write(f"- {'{'}{item{'}'}\\n")
    writer.write("=== END ===\\n")
    writer.flush()

# Test file-like duck typing
report_data = ["Sales increased by 15%", "Customer satisfaction: 92%", "New features launched: 5"]

writers = [
    ("StringFileWriter", StringFileWriter()),
    ("NetworkWriter", NetworkWriter("https://api.example.com/reports")),
    ("ConsoleWriter", ConsoleWriter())
]

print("\\nFile-like object duck typing:")
for writer_name, writer in writers:
    print(f"\\nUsing {'{'}{writer_name{'}'}:")
    save_report(writer, report_data)
    
    # Show content for StringFileWriter
    if hasattr(writer, 'get_content'):
        print(f"Content: {'{'}{repr(writer.get_content()){'}'}")

# Iterator protocol example
class CountDown:
    def __init__(self, start):
        self.start = start
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.start <= 0:
            raise StopIteration
        self.start -= 1
        return self.start + 1

class FibonacciSequence:
    def __init__(self, max_count):
        self.max_count = max_count
        self.count = 0
        self.a, self.b = 0, 1
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.count >= self.max_count:
            raise StopIteration
        
        self.count += 1
        if self.count == 1:
            return self.a
        elif self.count == 2:
            return self.b
        else:
            self.a, self.b = self.b, self.a + self.b
            return self.b

# Function that works with any iterable
def process_sequence(sequence, name):
    print(f"\\nProcessing {'{'}{name{'}'}:")
    total = 0
    count = 0
    for value in sequence:  # Duck typing - works with any iterable
        print(f"  {'{'}{value{'}'}")
        total += value
        count += 1
    
    if count > 0:
        print(f"  Total: {'{'}{total{'}'}{')'}, Average: {'{'}{total/count:.2f{'}'}")
    else:
        print("  Empty sequence")

# Test iterator duck typing
sequences = [
    ("Countdown from 5", CountDown(5)),
    ("First 6 Fibonacci numbers", FibonacciSequence(6)),
    ("Regular list", [10, 20, 30, 40]),
    ("Range object", range(1, 5))
]

for name, seq in sequences:
    process_sequence(seq, name)

# Context manager protocol
class TimerContext:
    def __init__(self, name):
        self.name = name
        self.start_time = None
    
    def __enter__(self):
        import time
        self.start_time = time.time()
        print(f"Starting timer: {'{'}{self.name{'}'}")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        duration = time.time() - self.start_time
        print(f"Timer {'{'}{self.name{'}'} finished: {'{'}{duration:.3f{'}'} seconds")
        return False

class DatabaseTransaction:
    def __init__(self, connection_string):
        self.connection_string = connection_string
        self.transaction_active = False
    
    def __enter__(self):
        print(f"Starting database transaction: {'{'}{self.connection_string{'}'}")
        self.transaction_active = True
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is not None:
            print(f"Rolling back transaction due to: {'{'}{exc_val{'}'}")
        else:
            print("Committing transaction")
        self.transaction_active = False
        return False  # Don't suppress exceptions

# Function that works with any context manager
def perform_operation_safely(context_manager, operation_name):
    """Works with any object that implements context manager protocol"""
    with context_manager:
        print(f"Performing operation: {'{'}{operation_name{'}'}")
        import time
        time.sleep(0.1)  # Simulate work
        print(f"Operation {'{'}{operation_name{'}'} completed")

print("\\nContext manager duck typing:")
contexts = [
    ("Timer", TimerContext("Sample Operation")),
    ("Database", DatabaseTransaction("postgresql://localhost/mydb"))
]

for name, context in contexts:
    print(f"\\nUsing {'{'}{name{'}'} context manager:")
    perform_operation_safely(context, f"Task with {'{'}{name{'}'}")

# Callable objects (objects that behave like functions)
class Multiplier:
    def __init__(self, factor):
        self.factor = factor
    
    def __call__(self, value):
        return value * self.factor

class Logger:
    def __init__(self, prefix):
        self.prefix = prefix
        self.call_count = 0
    
    def __call__(self, message):
        self.call_count += 1
        print(f"[{'{'}{self.prefix{'}'}] ({'{'}{self.call_count{'}'}{')'}: {'{'}{message{'}'}")

def apply_function(func, values, func_name):
    """Works with any callable object"""
    print(f"\\nApplying {'{'}{func_name{'}'}:")
    results = []
    for value in values:
        result = func(value)  # Duck typing - works with any callable
        results.append(result)
        print(f"  {'{'}{func_name{'}'}({'{'}{value{'}'}{')'} = {'{'}{result{'}'}")
    return results

# Test callable duck typing
callables = [
    ("double function", lambda x: x * 2),
    ("triple multiplier", Multiplier(3)),
    ("square function", lambda x: x ** 2)
]

test_values = [1, 2, 3, 4, 5]

for name, callable_obj in callables:
    apply_function(callable_obj, test_values, name)

# Logger as callable
logger = Logger("DEBUG")
logger("Application started")
logger("Processing data")
logger("Operation completed")`}</pre>
          </div>
        </section>

        {/* Operator Overloading */}
        <section className="py-topic-section">
          <h2>⚙️ Operator Overloading</h2>
          
          <div className="py-code-block">
            <pre>{`# Operator overloading for polymorphic behavior
print("Operator Overloading Examples:")

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Vector({'{'}{self.x{'}'}{')'}, {'{'}{self.y{'}'}{')'}"
    
    def __repr__(self):
        return f"Vector({'{'}{self.x{'}'}{')'}, {'{'}{self.y{'}'}{')'}"
    
    # Addition operator
    def __add__(self, other):
        if isinstance(other, Vector):
            return Vector(self.x + other.x, self.y + other.y)
        elif isinstance(other, (int, float)):
            return Vector(self.x + other, self.y + other)
        else:
            return NotImplemented
    
    # Right addition (when Vector is on the right side)
    def __radd__(self, other):
        return self.__add__(other)
    
    # Subtraction operator
    def __sub__(self, other):
        if isinstance(other, Vector):
            return Vector(self.x - other.x, self.y - other.y)
        elif isinstance(other, (int, float)):
            return Vector(self.x - other, self.y - other)
        else:
            return NotImplemented
    
    # Multiplication (scalar and dot product)
    def __mul__(self, other):
        if isinstance(other, (int, float)):
            return Vector(self.x * other, self.y * other)
        elif isinstance(other, Vector):
            # Dot product
            return self.x * other.x + self.y * other.y
        else:
            return NotImplemented
    
    # Right multiplication
    def __rmul__(self, other):
        return self.__mul__(other)
    
    # Division by scalar
    def __truediv__(self, other):
        if isinstance(other, (int, float)):
            if other == 0:
                raise ZeroDivisionError("Cannot divide by zero")
            return Vector(self.x / other, self.y / other)
        else:
            return NotImplemented
    
    # Equality comparison
    def __eq__(self, other):
        if isinstance(other, Vector):
            return self.x == other.x and self.y == other.y
        return False
    
    # Less than comparison (by magnitude)
    def __lt__(self, other):
        if isinstance(other, Vector):
            return self.magnitude() < other.magnitude()
        return NotImplemented
    
    # Greater than comparison
    def __gt__(self, other):
        if isinstance(other, Vector):
            return self.magnitude() > other.magnitude()
        return NotImplemented
    
    # Absolute value (magnitude)
    def __abs__(self):
        return (self.x ** 2 + self.y ** 2) ** 0.5
    
    def magnitude(self):
        return abs(self)
    
    # Negation
    def __neg__(self):
        return Vector(-self.x, -self.y)
    
    # Length (for len() function)
    def __len__(self):
        return 2  # Always 2D vector
    
    # Item access (indexing)
    def __getitem__(self, index):
        if index == 0:
            return self.x
        elif index == 1:
            return self.y
        else:
            raise IndexError("Vector index out of range")
    
    def __setitem__(self, index, value):
        if index == 0:
            self.x = value
        elif index == 1:
            self.y = value
        else:
            raise IndexError("Vector index out of range")

# Test vector operations
print("\\nVector Operations:")
v1 = Vector(3, 4)
v2 = Vector(1, 2)

print(f"v1 = {'{'}{v1{'}'}")
print(f"v2 = {'{'}{v2{'}'}")

# Arithmetic operations
print(f"v1 + v2 = {'{'}{v1 + v2{'}'}")
print(f"v1 - v2 = {'{'}{v1 - v2{'}'}")
print(f"v1 * 3 = {'{'}{v1 * 3{'}'}")
print(f"3 * v1 = {'{'}{3 * v1{'}'}")
print(f"v1 * v2 (dot product) = {'{'}{v1 * v2{'}'}")
print(f"v1 / 2 = {'{'}{v1 / 2{'}'}")

# Comparison operations
print(f"v1 == v2: {'{'}{v1 == v2{'}'}")
print(f"v1 > v2: {'{'}{v1 > v2{'}'}")
print(f"v1 < v2: {'{'}{v1 < v2{'}'}")

# Unary operations
print(f"-v1 = {'{'}{-v1{'}'}")
print(f"abs(v1) = {'{'}{abs(v1){'}'}")
print(f"len(v1) = {'{'}{len(v1){'}'}")

# Indexing
print(f"v1[0] = {'{'}{v1[0]{'}'}{')'}, v1[1] = {'{'}{v1[1]{'}'}")

# Matrix class with operator overloading
class Matrix:
    def __init__(self, rows):
        self.rows = [list(row) for row in rows]
        self.num_rows = len(self.rows)
        self.num_cols = len(self.rows[0]) if self.rows else 0
    
    def __str__(self):
        return '\\n'.join([' '.join(f'{'{'}{val:6.2f{'}'}' for val in row) for row in self.rows])
    
    def __repr__(self):
        return f"Matrix({'{'}{self.rows{'}'}{')'}"
    
    def __add__(self, other):
        if isinstance(other, Matrix):
            if self.num_rows != other.num_rows or self.num_cols != other.num_cols:
                raise ValueError("Matrices must have same dimensions for addition")
            
            result = []
            for i in range(self.num_rows):
                row = []
                for j in range(self.num_cols):
                    row.append(self.rows[i][j] + other.rows[i][j])
                result.append(row)
            return Matrix(result)
        else:
            return NotImplemented
    
    def __mul__(self, other):
        if isinstance(other, (int, float)):
            # Scalar multiplication
            result = []
            for row in self.rows:
                new_row = [val * other for val in row]
                result.append(new_row)
            return Matrix(result)
        elif isinstance(other, Matrix):
            # Matrix multiplication
            if self.num_cols != other.num_rows:
                raise ValueError("Invalid dimensions for matrix multiplication")
            
            result = []
            for i in range(self.num_rows):
                row = []
                for j in range(other.num_cols):
                    sum_val = 0
                    for k in range(self.num_cols):
                        sum_val += self.rows[i][k] * other.rows[k][j]
                    row.append(sum_val)
                result.append(row)
            return Matrix(result)
        else:
            return NotImplemented
    
    def __rmul__(self, other):
        return self.__mul__(other)
    
    def __getitem__(self, key):
        return self.rows[key]
    
    def __setitem__(self, key, value):
        self.rows[key] = value

# Test matrix operations
print("\\nMatrix Operations:")
m1 = Matrix([[1, 2], [3, 4]])
m2 = Matrix([[5, 6], [7, 8]])

print(f"Matrix m1:\\n{'{'}{m1{'}'}\\n")
print(f"Matrix m2:\\n{'{'}{m2{'}'}\\n")

print(f"m1 + m2:\\n{'{'}{m1 + m2{'}'}\\n")
print(f"m1 * 2:\\n{'{'}{m1 * 2{'}'}\\n")
print(f"m1 * m2:\\n{'{'}{m1 * m2{'}'}\\n")

# Custom class with rich comparison methods
class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius
    
    def __str__(self):
        return f"{'{'}{self.celsius{'}'}°C"
    
    def __eq__(self, other):
        if isinstance(other, Temperature):
            return abs(self.celsius - other.celsius) < 0.01
        return False
    
    def __lt__(self, other):
        if isinstance(other, Temperature):
            return self.celsius < other.celsius
        return NotImplemented
    
    def __le__(self, other):
        return self < other or self == other
    
    def __gt__(self, other):
        if isinstance(other, Temperature):
            return self.celsius > other.celsius
        return NotImplemented
    
    def __ge__(self, other):
        return self > other or self == other
    
    def __ne__(self, other):
        return not self == other
    
    def __add__(self, other):
        if isinstance(other, Temperature):
            return Temperature(self.celsius + other.celsius)
        elif isinstance(other, (int, float)):
            return Temperature(self.celsius + other)
        return NotImplemented
    
    def __hash__(self):
        return hash(round(self.celsius, 2))

# Test temperature comparisons
temps = [Temperature(20), Temperature(25), Temperature(15), Temperature(25)]
print("\\nTemperature Operations:")
for temp in temps:
    print(f"Temperature: {'{'}{temp{'}'}")

print(f"\\nSorted temperatures:")
sorted_temps = sorted(temps)
for temp in sorted_temps:
    print(f"  {'{'}{temp{'}'}")

print(f"\\nUnique temperatures (using hash):")
unique_temps = set(temps)
for temp in unique_temps:
    print(f"  {'{'}{temp{'}'}")

# Function that works polymorphically with any object supporting operators
def find_average(objects):
    """Find average of objects that support + and / operators"""
    if not objects:
        return None
    
    total = objects[0]
    for obj in objects[1:]:
        total = total + obj
    
    return total / len(objects)

print(f"\\nPolymorphic average calculation:")
numbers = [1, 2, 3, 4, 5]
vectors = [Vector(1, 1), Vector(2, 2), Vector(3, 3)]
temperatures = [Temperature(20), Temperature(25), Temperature(30)]

try:
    print(f"Average of numbers: {'{'}{find_average(numbers){'}'}")
    print(f"Average of vectors: {'{'}{find_average(vectors){'}'}")
    print(f"Average of temperatures: {'{'}{find_average(temperatures){'}'}")
except Exception as e:
    print(f"Error calculating average: {'{'}{e{'}'}")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Polymorphism Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Best Practices:</h3>
            <ul>
              <li><strong>Design clear interfaces:</strong> Define common methods that all polymorphic classes should implement</li>
              <li><strong>Use abstract base classes:</strong> Provide a contract for what methods subclasses must implement</li>
              <li><strong>Follow the Liskov Substitution Principle:</strong> Subclasses should be substitutable for their base classes</li>
              <li><strong>Implement proper error handling:</strong> Handle cases where objects don't support expected operations</li>
              <li><strong>Use isinstance() carefully:</strong> Prefer duck typing, but use isinstance() when type checking is necessary</li>
              <li><strong>Document expected interfaces:</strong> Make it clear what methods/attributes your code expects</li>
              <li><strong>Test with different types:</strong> Ensure your polymorphic code works with various implementations</li>
              <li><strong>Consider protocol classes:</strong> Use typing.Protocol for structural typing in modern Python</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a media player system that can play different file formats polymorphically</li>
              <li>Build a drawing application with different shape classes that can be rendered uniformly</li>
              <li>Design a payment system supporting different payment methods (credit card, PayPal, etc.)</li>
              <li>Implement a notification system with multiple delivery channels (email, SMS, push)</li>
              <li>Create a data processing pipeline that works with different data sources</li>
              <li>Build a game with different character types that share common actions</li>
              <li>Design a logging system with different output formats and destinations</li>
              <li>Implement a serialization system supporting multiple formats (JSON, XML, CSV)</li>
              <li>Create a mathematical expression evaluator with different operation types</li>
              <li>Build a plugin system where different plugins implement a common interface</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Polymorphism;
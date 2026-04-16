import React from 'react';
import '../Navbarweb.css';

function Encapsulation() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>📦 Encapsulation</h1>
        <p className="py-topic-subtitle">
          Learn about data hiding and encapsulation in Python
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>📦 What is Encapsulation?</h2>
          <p>
            Encapsulation is one of the fundamental principles of object-oriented programming that 
            involves bundling data (attributes) and the methods that operate on that data into a 
            single unit (class), while restricting direct access to some of the object's components. 
            This principle helps protect the integrity of data and provides a clean interface for 
            interacting with objects.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Encapsulation Concepts:</h3>
            <ul>
              <li><strong>Data Hiding:</strong> Restricting direct access to object attributes</li>
              <li><strong>Public Attributes:</strong> Accessible from anywhere (no underscore prefix)</li>
              <li><strong>Protected Attributes:</strong> Convention for internal use (single underscore _)</li>
              <li><strong>Private Attributes:</strong> Name mangling for restricted access (double underscore __)</li>
              <li><strong>Properties:</strong> Controlled access to attributes using getter/setter methods</li>
              <li><strong>Information Hiding:</strong> Hiding implementation details from users</li>
            </ul>
          </div>
        </section>

        {/* Access Modifiers */}
        <section className="py-topic-section">
          <h2>🔐 Access Modifiers in Python</h2>
          
          <div className="py-code-block">
            <pre>{`# Access modifiers and data hiding in Python
print("Access Modifiers Examples:")

class BankAccount:
    def __init__(self, account_holder, initial_balance=0):
        # Public attribute - accessible from anywhere
        self.account_holder = account_holder
        
        # Protected attribute - intended for internal use (single underscore)
        self._account_number = f"ACC{'{'}{id(self) % 10000:04d}{'}'}"
        
        # Private attribute - name mangling (double underscore)
        self.__balance = initial_balance
        
        # Private method - internal implementation detail
        self.__log_transaction = []
    
    # Public method - part of the class interface
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            self.__add_transaction(f"Deposit: ${'{'}amount{'}'}")
            print(f"Deposited ${'{'}amount{'}'}")
        else:
            print("Deposit amount must be positive")
    
    def withdraw(self, amount):
        if amount > 0:
            if self.__balance >= amount:
                self.__balance -= amount
                self.__add_transaction(f"Withdrawal: ${'{'}amount{'}'}")
                print(f"Withdrew ${'{'}amount{'}'}")
            else:
                print("Insufficient funds")
        else:
            print("Withdrawal amount must be positive")
    
    # Public method to access private balance safely
    def get_balance(self):
        return self.__balance
    
    # Protected method - intended for subclasses
    def _get_account_info(self):
        return {{
            "holder": self.account_holder,
            "account_number": self._account_number,
            "balance": self.__balance
        }}
    
    # Private method - internal helper
    def __add_transaction(self, description):
        from datetime import datetime
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self.__log_transaction.append(f"[{'{'}timestamp{'}'}] {'{'}description{'}'}")
    
    # Public method to view transaction history
    def get_transaction_history(self):
        return self.__log_transaction.copy()  # Return copy to prevent external modification
    
    def __str__(self):
        return f"Account: {'{'}{self.account_holder{'}'}{'}'} - Balance: ${'{'}{self.__balance{'}'}"

# Creating and testing bank account
print("\\nTesting Access Modifiers:")
account = BankAccount("Alice Johnson", 1000)

# Accessing public attributes - OK
print(f"Account holder: {'{'}{account.account_holder{'}'}")

# Accessing protected attributes - possible but not recommended
print(f"Account number (protected): {'{'}{account._account_number{'}'}")

# Trying to access private attributes directly - will fail
try:
    print(f"Balance (direct access): {'{'}{account.__balance{'}'}")
except AttributeError as e:
    print(f"Error accessing private attribute: {'{'}{e{'}'}")

# Correct way to access private data through public methods
print(f"Balance (through method): ${'{'}{account.get_balance(){'}'}")

# Using public methods
account.deposit(500)
account.withdraw(200)
print(account)

# Viewing transaction history
print("\\nTransaction History:")
for transaction in account.get_transaction_history():
    print(f"  {'{'}{transaction{'}'}")

# Demonstrating name mangling
print("\\nName Mangling Demonstration:")
print(f"Account attributes: {'{'}{[attr for attr in dir(account) if not attr.startswith('__')]{'}'}")

# The private attribute is actually accessible as _ClassName__attribute
print(f"Private balance via name mangling: ${'{'}{account._BankAccount__balance{'}'}")

# Class with different access levels
class Student:
    def __init__(self, name, student_id):
        self.name = name              # Public
        self._student_id = student_id # Protected
        self.__grades = []            # Private
        self.__gpa = 0.0             # Private
    
    # Public method
    def add_grade(self, subject, grade):
        if 0 <= grade <= 100:
            self.__grades.append({'{'}subject: {'{'}{subject{'}'}, grade: {'{'}{grade{'}'}{'}'})
            self.__calculate_gpa()
            print(f"Added grade: {'{'}{subject{'}'} - {'{'}{grade{'}'}")
        else:
            print("Grade must be between 0 and 100")
    
    # Public getter for private data
    def get_gpa(self):
        return round(self.__gpa, 2)
    
    def get_grades(self):
        # Return copy to prevent external modification
        return self.__grades.copy()
    
    # Protected method - for internal use or subclasses
    def _validate_grade(self, grade):
        return isinstance(grade, (int, float)) and 0 <= grade <= 100
    
    # Private method - implementation detail
    def __calculate_gpa(self):
        if self.__grades:
            total = sum(grade_info['grade'] for grade_info in self.__grades)
            self.__gpa = (total / len(self.__grades)) / 25  # Convert to 4.0 scale
        else:
            self.__gpa = 0.0
    
    def __str__(self):
        return f"Student: {'{'}{self.name{'}'} (ID: {'{'}{self._student_id{'}'}{')'} - GPA: {'{'}{self.get_gpa(){'}'}"

# Testing student class
student = Student("Bob Smith", "STU001")
student.add_grade("Math", 85)
student.add_grade("Science", 92)
student.add_grade("English", 78)

print(f"\\n{'{'}{student{'}'}")
print(f"Grades: {'{'}{student.get_grades(){'}'}")

# Inheritance and access modifiers
class GraduateStudent(Student):
    def __init__(self, name, student_id, thesis_topic):
        super().__init__(name, student_id)
        self.thesis_topic = thesis_topic
        self.__research_hours = 0  # Private to GraduateStudent
    
    def add_research_hours(self, hours):
        if hours > 0:
            self.__research_hours += hours
            print(f"Added {'{'}{hours{'}'} research hours")
        else:
            print("Research hours must be positive")
    
    def get_research_hours(self):
        return self.__research_hours
    
    # Can access protected method from parent
    def validate_thesis_grade(self, grade):
        return self._validate_grade(grade)
    
    # Cannot directly access private attributes from parent
    def try_access_parent_private(self):
        try:
            # This would fail - cannot access parent's private attributes
            return self.__grades
        except AttributeError:
            return "Cannot access parent's private attributes"
    
    def __str__(self):
        base_info = super().__str__()
        return f"{'{'}{base_info{'}'}, Thesis: {'{'}{self.thesis_topic{'}'}, Research Hours: {'{'}{self.__research_hours{'}'}"

grad_student = GraduateStudent("Carol Davis", "GRAD001", "Machine Learning Applications")
grad_student.add_grade("Advanced Algorithms", 95)
grad_student.add_research_hours(120)

print(f"\\n{'{'}{grad_student{'}'}")
print(f"Can validate grade: {'{'}{grad_student.validate_thesis_grade(88){'}'}")
print(f"Accessing parent private: {'{'}{grad_student.try_access_parent_private(){'}'}")`}</pre>
          </div>
        </section>

        {/* Properties and Descriptors */}
        <section className="py-topic-section">
          <h2>🏠 Properties and Controlled Access</h2>
          
          <div className="py-code-block">
            <pre>{`# Properties for controlled access to attributes
print("Properties and Controlled Access:")

class Temperature:
    def __init__(self, celsius=0):
        self.__celsius = celsius
    
    # Property getter
    @property
    def celsius(self):
        return self.__celsius
    
    # Property setter with validation
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature cannot be below absolute zero (-273.15°C)")
        self.__celsius = value
    
    # Property deleter
    @celsius.deleter
    def celsius(self):
        print("Temperature reading deleted")
        self.__celsius = 0
    
    # Read-only property (no setter)
    @property
    def fahrenheit(self):
        return (self.__celsius * 9/5) + 32
    
    # Another read-only property
    @property
    def kelvin(self):
        return self.__celsius + 273.15
    
    # Method to set fahrenheit (since it's read-only as property)
    def set_fahrenheit(self, value):
        if value < -459.67:
            raise ValueError("Temperature cannot be below absolute zero (-459.67°F)")
        self.celsius = (value - 32) * 5/9
    
    def __str__(self):
        return f"{'{'}{self.celsius{'}'}°C / {'{'}{self.fahrenheit{'}'}°F / {'{'}{self.kelvin{'}'}K"

# Testing properties
print("\\nTesting Temperature Properties:")
temp = Temperature(25)
print(f"Initial temperature: {'{'}{temp{'}'}")

# Using property getter
print(f"Celsius: {'{'}{temp.celsius{'}'}°C")
print(f"Fahrenheit: {'{'}{temp.fahrenheit{'}'}°F")
print(f"Kelvin: {'{'}{temp.kelvin{'}'}K")

# Using property setter with validation
try:
    temp.celsius = 100
    print(f"After setting to 100°C: {'{'}{temp{'}'}")
    
    temp.celsius = -300  # This will raise an error
except ValueError as e:
    print(f"Error: {'{'}{e{'}'}")

# Read-only properties cannot be set directly
try:
    temp.fahrenheit = 100  # This will raise an error
except AttributeError as e:
    print(f"Cannot set read-only property: {'{'}{e{'}'}")

# Use method to set fahrenheit
temp.set_fahrenheit(212)  # Boiling point of water
print(f"After setting to 212°F: {'{'}{temp{'}'}")

# Property deleter
del temp.celsius
print(f"After deletion: {'{'}{temp{'}'}")

# Advanced property example with caching
class Circle:
    def __init__(self, radius):
        self.__radius = radius
        self.__area_cache = None
        self.__circumference_cache = None
    
    @property
    def radius(self):
        return self.__radius
    
    @radius.setter
    def radius(self, value):
        if value <= 0:
            raise ValueError("Radius must be positive")
        self.__radius = value
        # Invalidate caches when radius changes
        self.__area_cache = None
        self.__circumference_cache = None
    
    @property
    def area(self):
        if self.__area_cache is None:
            print("Calculating area...")
            self.__area_cache = 3.14159 * self.__radius ** 2
        return self.__area_cache
    
    @property
    def circumference(self):
        if self.__circumference_cache is None:
            print("Calculating circumference...")
            self.__circumference_cache = 2 * 3.14159 * self.__radius
        return self.__circumference_cache
    
    @property
    def diameter(self):
        return 2 * self.__radius
    
    def __str__(self):
        return f"Circle(radius={'{'}{self.radius{'}'}{')'}"

print("\\nTesting Circle with Caching:")
circle = Circle(5)
print(f"Circle: {'{'}{circle{'}'}")

# First access calculates and caches
print(f"Area: {'{'}{circle.area{'}'}")
print(f"Area again: {'{'}{circle.area{'}'}")  # Uses cache

print(f"Circumference: {'{'}{circle.circumference{'}'}")
print(f"Circumference again: {'{'}{circle.circumference{'}'}")  # Uses cache

# Changing radius invalidates cache
circle.radius = 10
print(f"After changing radius: {'{'}{circle{'}'}")
print(f"New area: {'{'}{circle.area{'}'}")  # Recalculates

# Property with complex validation
class Person:
    def __init__(self, name, age, email):
        self.name = name    # Will use setter validation
        self.age = age      # Will use setter validation
        self.email = email  # Will use setter validation
    
    @property
    def name(self):
        return self.__name
    
    @name.setter
    def name(self, value):
        if not isinstance(value, str):
            raise TypeError("Name must be a string")
        if len(value.strip()) == 0:
            raise ValueError("Name cannot be empty")
        if len(value) > 50:
            raise ValueError("Name too long (max 50 characters)")
        self.__name = value.strip().title()
    
    @property
    def age(self):
        return self.__age
    
    @age.setter
    def age(self, value):
        if not isinstance(value, int):
            raise TypeError("Age must be an integer")
        if value < 0:
            raise ValueError("Age cannot be negative")
        if value > 150:
            raise ValueError("Age seems unrealistic")
        self.__age = value
    
    @property
    def email(self):
        return self.__email
    
    @email.setter
    def email(self, value):
        if not isinstance(value, str):
            raise TypeError("Email must be a string")
        if "@" not in value or "." not in value:
            raise ValueError("Invalid email format")
        if len(value) > 100:
            raise ValueError("Email too long")
        self.__email = value.lower()
    
    @property
    def is_adult(self):
        return self.__age >= 18
    
    @property
    def email_domain(self):
        return self.__email.split("@")[1]
    
    def __str__(self):
        return f"{'{'}{self.name{'}'} ({'{'}{self.age{'}'}) - {'{'}{self.email{'}'}"

print("\\nTesting Person with Validation:")
try:
    person = Person("  john DOE  ", 25, "JOHN.DOE@EXAMPLE.COM")
    print(f"Person: {'{'}{person{'}'}")
    print(f"Is adult: {'{'}{person.is_adult{'}'}")
    print(f"Email domain: {'{'}{person.email_domain{'}'}")
    
    # Test validation
    person.age = 30
    print(f"After age change: {'{'}{person{'}'}")
    
    person.email = "john.doe@newdomain.com"
    print(f"After email change: {'{'}{person{'}'}")
    
    # This will raise an error
    person.age = -5
    
except (ValueError, TypeError) as e:
    print(f"Validation error: {'{'}{e{'}'}")

# Using property() function (alternative to decorators)
class Rectangle:
    def __init__(self, width, height):
        self.__width = width
        self.__height = height
    
    def get_width(self):
        return self.__width
    
    def set_width(self, value):
        if value <= 0:
            raise ValueError("Width must be positive")
        self.__width = value
    
    def get_height(self):
        return self.__height
    
    def set_height(self, value):
        if value <= 0:
            raise ValueError("Height must be positive")
        self.__height = value
    
    def get_area(self):
        return self.__width * self.__height
    
    def get_perimeter(self):
        return 2 * (self.__width + self.__height)
    
    # Create properties using property() function
    width = property(get_width, set_width)
    height = property(get_height, set_height)
    area = property(get_area)  # Read-only
    perimeter = property(get_perimeter)  # Read-only

print("\\nTesting Rectangle with property() function:")
rect = Rectangle(5, 3)
print(f"Width: {'{'}{rect.width{'}'}{')'}, Height: {'{'}{rect.height{'}'}")
print(f"Area: {'{'}{rect.area{'}'}{')'}, Perimeter: {'{'}{rect.perimeter{'}'}")

rect.width = 8
rect.height = 6
print(f"After changes - Area: {'{'}{rect.area{'}'}{')'}, Perimeter: {'{'}{rect.perimeter{'}'}")`}</pre>
          </div>
        </section>

        {/* Data Classes and Encapsulation */}
        <section className="py-topic-section">
          <h2>📊 Modern Encapsulation Patterns</h2>
          
          <div className="py-code-block">
            <pre>{`# Modern encapsulation patterns and best practices
print("Modern Encapsulation Patterns:")

# Using dataclasses for cleaner code
from dataclasses import dataclass, field
from typing import List, Optional
import re

@dataclass
class Product:
    name: str
    price: float = field(default=0.0)
    category: str = field(default="General")
    __sku: Optional[str] = field(default=None, init=False)  # Private field
    
    def __post_init__(self):
        # Validation after initialization
        if self.price < 0:
            raise ValueError("Price cannot be negative")
        if not self.name.strip():
            raise ValueError("Product name cannot be empty")
        
        # Generate SKU automatically
        self.__sku = self.__generate_sku()
    
    def __generate_sku(self):
        # Private method to generate SKU
        name_part = re.sub(r'[^a-zA-Z0-9]', '', self.name.upper())[:6]
        cat_part = self.category.upper()[:3]
        return f"{'{'}{cat_part{'}'}{')'}-{'{'}{name_part{'}'}{')'}-{'{'}{hash(self.name) % 10000:04d{'}'}"
    
    @property
    def sku(self):
        return self.__sku
    
    @property
    def formatted_price(self):
        return f"${'{'}{self.price:.2f{'}'}"
    
    def apply_discount(self, percentage):
        if 0 <= percentage <= 100:
            self.price *= (1 - percentage / 100)
            print(f"Applied {'{'}{percentage{'}'}% discount. New price: {'{'}{self.formatted_price{'}'}")
        else:
            raise ValueError("Discount percentage must be between 0 and 100")
    
    def __str__(self):
        return f"{'{'}{self.name{'}'} ({'{'}{self.sku{'}'}{')'} - {'{'}{self.formatted_price{'}'}"

print("\\nDataclass Example:")
product = Product("Wireless Headphones", 199.99, "Electronics")
print(product)
product.apply_discount(15)
print(f"After discount: {'{'}{product{'}'}")

# Slots for memory optimization and attribute restriction
class OptimizedPoint:
    __slots__ = ['__x', '__y']  # Restrict attributes and save memory
    
    def __init__(self, x=0, y=0):
        self.__x = x
        self.__y = y
    
    @property
    def x(self):
        return self.__x
    
    @x.setter
    def x(self, value):
        if not isinstance(value, (int, float)):
            raise TypeError("Coordinates must be numeric")
        self.__x = value
    
    @property
    def y(self):
        return self.__y
    
    @y.setter
    def y(self, value):
        if not isinstance(value, (int, float)):
            raise TypeError("Coordinates must be numeric")
        self.__y = value
    
    @property
    def magnitude(self):
        return (self.__x ** 2 + self.__y ** 2) ** 0.5
    
    def distance_to(self, other):
        return (((self.__x - other.x) ** 2 + (self.__y - other.y) ** 2) ** 0.5
    
    def __str__(self):
        return f"Point({'{'}{self.__x{'}'}{')'}, {'{'}{self.__y{'}'}{')'}"

print("\\nOptimized Point with __slots__:")
point1 = OptimizedPoint(3, 4)
point2 = OptimizedPoint(0, 0)

print(f"Point 1: {'{'}{point1{'}'}")
print(f"Magnitude: {'{'}{point1.magnitude{'}'}")
print(f"Distance between points: {'{'}{point1.distance_to(point2){'}'}")

# Trying to add new attributes will fail with __slots__
try:
    point1.z = 5  # This will raise an AttributeError
except AttributeError as e:
    print(f"Cannot add new attributes with __slots__: {'{'}{e{'}'}")

# Context manager for encapsulating resource management
class DatabaseConnection:
    def __init__(self, connection_string):
        self.__connection_string = connection_string
        self.__connection = None
        self.__transaction_count = 0
    
    def __enter__(self):
        print(f"Opening database connection to {'{'}{self.__connection_string{'}'}")
        self.__connection = f"Connection to {'{'}{self.__connection_string{'}'}"
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is not None:
            print(f"Rolling back transaction due to error: {'{'}{exc_val{'}'}")
            self.__rollback()
        else:
            print("Committing transaction")
            self.__commit()
        
        print("Closing database connection")
        self.__connection = None
        return False  # Don't suppress exceptions
    
    def execute_query(self, query):
        if not self.__connection:
            raise RuntimeError("No active database connection")
        
        print(f"Executing: {'{'}{query{'}'}")
        self.__transaction_count += 1
        
        # Simulate query execution
        if "DROP" in query.upper():
            raise ValueError("Dangerous operation detected!")
        
        return f"Query result for: {'{'}{query{'}'}"
    
    def __commit(self):
        print(f"Committed {'{'}{self.__transaction_count{'}'} transactions")
    
    def __rollback(self):
        print(f"Rolled back {'{'}{self.__transaction_count{'}'} transactions")
    
    @property
    def is_connected(self):
        return self.__connection is not None

print("\\nContext Manager Example:")
# Successful transaction
with DatabaseConnection("postgresql://localhost/mydb") as db:
    result1 = db.execute_query("SELECT * FROM users")
    result2 = db.execute_query("UPDATE users SET status='active'")
    print(f"Results: {'{'}{result1{'}'}{')'}, {'{'}{result2{'}'}")

print()

# Failed transaction (will rollback)
try:
    with DatabaseConnection("postgresql://localhost/mydb") as db:
        result = db.execute_query("SELECT * FROM products")
        db.execute_query("DROP TABLE users")  # This will cause error
except ValueError as e:
    print(f"Transaction failed: {'{'}{e{'}'}")

# Descriptor for advanced attribute control
class ValidatedAttribute:
    def __init__(self, validator_func, error_message):
        self.validator_func = validator_func
        self.error_message = error_message
        self.name = None
    
    def __set_name__(self, owner, name):
        self.name = f"_{'{'}{owner.__name__{'}'}_{'{'}{name{'}'}"
    
    def __get__(self, instance, owner):
        if instance is None:
            return self
        return getattr(instance, self.name)
    
    def __set__(self, instance, value):
        if not self.validator_func(value):
            raise ValueError(self.error_message)
        setattr(instance, self.name, value)
    
    def __delete__(self, instance):
        raise AttributeError("Cannot delete this attribute")

class User:
    # Define validated attributes using descriptors
    username = ValidatedAttribute(
        lambda x: isinstance(x, str) and 3 <= len(x) <= 20 and x.isalnum(),
        "Username must be 3-20 alphanumeric characters"
    )
    
    email = ValidatedAttribute(
        lambda x: isinstance(x, str) and "@" in x and "." in x.split("@")[1],
        "Invalid email format"
    )
    
    age = ValidatedAttribute(
        lambda x: isinstance(x, int) and 0 <= x <= 120,
        "Age must be an integer between 0 and 120"
    )
    
    def __init__(self, username, email, age):
        self.username = username  # Will use descriptor validation
        self.email = email        # Will use descriptor validation
        self.age = age           # Will use descriptor validation
        self.__created_at = "2024-01-01"  # Private attribute
    
    def __str__(self):
        return f"User({'{'}{self.username{'}'}{')'}, {'{'}{self.email{'}'}{')'}, {'{'}{self.age{'}'}{')'}"

print("\\nDescriptor Validation Example:")
try:
    user = User("john123", "john@example.com", 25)
    print(f"Valid user: {'{'}{user{'}'}")
    
    # Test validation
    user.age = 30  # OK
    print(f"After age change: {'{'}{user{'}'}")
    
    user.username = "ab"  # This will fail validation
    
except ValueError as e:
    print(f"Validation failed: {'{'}{e{'}'}")

# Metaclass for automatic property generation
class AutoPropertyMeta(type):
    def __new__(cls, name, bases, dct):
        # Find private attributes and create properties for them
        for key, value in list(dct.items()):
            if key.startswith('_') and not key.startswith('__'):
                property_name = key[1:]  # Remove leading underscore
                
                # Create getter
                def make_getter(attr_name):
                    def getter(self):
                        return getattr(self, attr_name)
                    return getter
                
                # Create setter
                def make_setter(attr_name):
                    def setter(self, value):
                        setattr(self, attr_name, value)
                    return setter
                
                # Add property to class
                dct[property_name] = property(
                    make_getter(key),
                    make_setter(key)
                )
        
        return super().__new__(cls, name, bases, dct)

class AutoPropertyExample(metaclass=AutoPropertyMeta):
    def __init__(self, name, value):
        self._name = name      # Will auto-generate 'name' property
        self._value = value    # Will auto-generate 'value' property
        self.__secret = "hidden"  # Won't generate property (double underscore)

print("\\nMetaclass Auto-Property Example:")
auto_obj = AutoPropertyExample("test", 42)
print(f"Name: {'{'}{auto_obj.name{'}'}")    # Uses auto-generated property
print(f"Value: {'{'}{auto_obj.value{'}'}")  # Uses auto-generated property

auto_obj.name = "updated"
print(f"Updated name: {'{'}{auto_obj.name{'}'}")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Encapsulation Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Best Practices:</h3>
            <ul>
              <li><strong>Use properties for controlled access:</strong> Implement getters/setters for validation and computed values</li>
              <li><strong>Follow naming conventions:</strong> Single underscore for protected, double for private attributes</li>
              <li><strong>Validate in setters:</strong> Ensure data integrity by validating input in property setters</li>
              <li><strong>Keep interfaces minimal:</strong> Expose only what clients need to use</li>
              <li><strong>Use dataclasses when appropriate:</strong> Reduce boilerplate for simple data containers</li>
              <li><strong>Consider __slots__ for optimization:</strong> Use when you need memory efficiency and attribute restriction</li>
              <li><strong>Implement context managers for resources:</strong> Ensure proper resource management</li>
              <li><strong>Document your interfaces:</strong> Make it clear what's public vs internal</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a BankAccount class with proper encapsulation and validation</li>
              <li>Build a Student class with grade management and GPA calculation</li>
              <li>Design a Temperature converter with multiple unit properties</li>
              <li>Implement a secure User authentication system</li>
              <li>Create a Configuration manager with validation and type checking</li>
              <li>Build a Shopping Cart with item management and price calculations</li>
              <li>Design a File manager with access control and metadata</li>
              <li>Implement a Database connection pool with resource management</li>
              <li>Create a Logging system with different output formats</li>
              <li>Build a Cache system with size limits and expiration</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Encapsulation;
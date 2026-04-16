import React from 'react';
import '../Navbarweb.css';

function ClassesAndObjects() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>🏗️ Classes and Objects</h1>
        <p className="py-topic-subtitle">
          Learn object-oriented programming in Python with classes and objects
        </p>
      </div>

      <div className="py-topic-content">
        {/* Introduction to OOP */}
        <section className="py-topic-section">
          <h2>🎯 What is Object-Oriented Programming?</h2>
          <p>
            Object-Oriented Programming (OOP) is a programming paradigm that organizes code into classes 
            and objects. It helps you create reusable, modular code that models real-world entities and relationships.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key OOP Concepts:</h3>
            <ul>
              <li><strong>Class:</strong> A blueprint for creating objects</li>
              <li><strong>Object:</strong> An instance of a class</li>
              <li><strong>Attributes:</strong> Variables that belong to an object</li>
              <li><strong>Methods:</strong> Functions that belong to an object</li>
              <li><strong>Encapsulation:</strong> Bundling data and methods together</li>
              <li><strong>Inheritance:</strong> Creating new classes based on existing ones</li>
            </ul>
          </div>
        </section>

        {/* Creating Classes */}
        <section className="py-topic-section">
          <h2>📝 Creating Your First Class</h2>
          
          <div className="py-code-block">
            <pre>{`# Basic class definition
class Person:
    """A simple Person class"""
    
    def __init__(self, name, age):
        """Constructor method - runs when object is created"""
        self.name = name  # Instance attribute
        self.age = age    # Instance attribute
    
    def greet(self):
        """Instance method"""
        return f"Hello, my name is {self.name}"
    
    def have_birthday(self):
        """Method that modifies the object"""
        self.age += 1
        print(f"Happy birthday! {self.name} is now {self.age} years old")

# Creating objects (instances of the class)
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

# Accessing attributes
print(person1.name)  # Alice
print(person2.age)   # 30

# Calling methods
print(person1.greet())  # Hello, my name is Alice
person1.have_birthday()  # Happy birthday! Alice is now 26 years old`}</pre>
          </div>
        </section>

        {/* Class vs Instance Attributes */}
        <section className="py-topic-section">
          <h2>🏷️ Class vs Instance Attributes</h2>
          
          <div className="py-code-block">
            <pre>{`class Dog:
    # Class attribute - shared by all instances
    species = "Canis lupus"
    total_dogs = 0
    
    def __init__(self, name, breed):
        # Instance attributes - unique to each object
        self.name = name
        self.breed = breed
        Dog.total_dogs += 1  # Modify class attribute
    
    def bark(self):
        return f"{self.name} says Woof!"
    
    @classmethod
    def get_total_dogs(cls):
        """Class method - works with class, not instance"""
        return cls.total_dogs
    
    @staticmethod
    def dog_sound():
        """Static method - doesn't use self or cls"""
        return "Dogs make barking sounds"

# Creating dog objects
dog1 = Dog("Buddy", "Golden Retriever")
dog2 = Dog("Max", "German Shepherd")

# Accessing class attributes
print(dog1.species)  # Canis lupus (same for all dogs)
print(Dog.species)   # Canis lupus (can access via class)

# Instance attributes are different
print(dog1.name)     # Buddy
print(dog2.name)     # Max

print(Dog.get_total_dogs())  # 2
print(Dog.dog_sound())       # Dogs make barking sounds`}</pre>
          </div>
        </section>

        {/* Special Methods */}
        <section className="py-topic-section">
          <h2>✨ Special Methods (Dunder Methods)</h2>
          <p>
            Special methods (also called magic methods or dunder methods) allow you to define how 
            objects behave with built-in Python functions and operators.
          </p>
          
          <div className="py-code-block">
            <pre>{`class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        """String representation for users"""
        return f"{self.title} by {self.author}"
    
    def __repr__(self):
        """String representation for developers"""
        return f"Book('{self.title}', '{self.author}', {self.pages})"
    
    def __len__(self):
        """Return length when len() is called"""
        return self.pages
    
    def __eq__(self, other):
        """Define equality comparison"""
        if isinstance(other, Book):
            return (self.title == other.title and 
                   self.author == other.author)
        return False
    
    def __lt__(self, other):
        """Define less than comparison (for sorting)"""
        return self.pages < other.pages
    
    def __add__(self, other):
        """Define addition behavior"""
        if isinstance(other, Book):
            combined_title = f"{self.title} & {other.title}"
            return Book(combined_title, f"{self.author}, {other.author}", 
                       self.pages + other.pages)
        return NotImplemented

# Using the Book class
book1 = Book("1984", "George Orwell", 328)
book2 = Book("Animal Farm", "George Orwell", 112)

print(book1)           # 1984 by George Orwell (uses __str__)
print(repr(book1))     # Book('1984', 'George Orwell', 328) (uses __repr__)
print(len(book1))      # 328 (uses __len__)
print(book1 == book2)  # False (uses __eq__)
print(book1 > book2)   # True (uses __lt__ and comparison)

combined = book1 + book2  # Uses __add__
print(combined)        # 1984 & Animal Farm by George Orwell, George Orwell`}</pre>
          </div>
        </section>

        {/* Property Decorators */}
        <section className="py-topic-section">
          <h2>🔒 Properties and Encapsulation</h2>
          <p>
            Properties allow you to create attributes that behave like variables but are actually 
            controlled by methods. This helps with encapsulation and data validation.
          </p>
          
          <div className="py-code-block">
            <pre>{`class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius  # Private attribute (by convention)
    
    @property
    def celsius(self):
        """Getter for celsius"""
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        """Setter for celsius with validation"""
        if value < -273.15:
            raise ValueError("Temperature cannot be below absolute zero")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        """Computed property"""
        return (self._celsius * 9/5) + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        """Set celsius based on fahrenheit"""
        self.celsius = (value - 32) * 5/9
    
    @property
    def kelvin(self):
        """Another computed property"""
        return self._celsius + 273.15
    
    def __str__(self):
        return f"{self.celsius}°C ({self.fahrenheit}°F, {self.kelvin}K)"

# Using properties
temp = Temperature(25)
print(temp)  # 25°C (77.0°F, 298.15K)

# Setting temperature via different scales
temp.fahrenheit = 100
print(temp.celsius)  # 37.77777777777778

temp.celsius = 0
print(temp.fahrenheit)  # 32.0

# Validation in action
try:
    temp.celsius = -300  # Below absolute zero
except ValueError as e:
    print(f"Error: {e}")  # Error: Temperature cannot be below absolute zero`}</pre>
          </div>
        </section>

        {/* Inheritance */}
        <section className="py-topic-section">
          <h2>👨‍👩‍👧 Inheritance</h2>
          <p>
            Inheritance allows you to create new classes based on existing classes, inheriting 
            their attributes and methods while adding new functionality.
          </p>
          
          <div className="py-code-block">
            <pre>{`# Base class (Parent class)
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
        self.is_alive = True
    
    def make_sound(self):
        return "Some generic animal sound"
    
    def sleep(self):
        return f"{self.name} is sleeping"
    
    def __str__(self):
        return f"{self.name} the {self.species}"

# Derived class (Child class)
class Dog(Animal):
    def __init__(self, name, breed, owner=None):
        super().__init__(name, "Dog")  # Call parent constructor
        self.breed = breed
        self.owner = owner
    
    def make_sound(self):  # Override parent method
        return f"{self.name} barks: Woof!"
    
    def fetch(self):  # New method specific to dogs
        return f"{self.name} fetches the ball"

class Cat(Animal):
    def __init__(self, name, indoor=True):
        super().__init__(name, "Cat")
        self.indoor = indoor
    
    def make_sound(self):  # Override parent method
        return f"{self.name} meows: Meow!"
    
    def purr(self):  # New method specific to cats
        return f"{self.name} purrs contentedly"

# Using inheritance
dog = Dog("Buddy", "Golden Retriever", "Alice")
cat = Cat("Whiskers", indoor=True)

print(dog)  # Buddy the Dog
print(cat)  # Whiskers the Cat

# Inherited methods
print(dog.sleep())  # Buddy is sleeping
print(cat.sleep())  # Whiskers is sleeping

# Overridden methods
print(dog.make_sound())  # Buddy barks: Woof!
print(cat.make_sound())  # Whiskers meows: Meow!

# Class-specific methods
print(dog.fetch())  # Buddy fetches the ball
print(cat.purr())   # Whiskers purrs contentedly`}</pre>
          </div>
        </section>

        {/* Multiple Inheritance */}
        <section className="py-topic-section">
          <h2>🔗 Multiple Inheritance and MRO</h2>
          <p>
            Python supports multiple inheritance, where a class can inherit from multiple parent classes. 
            Python uses Method Resolution Order (MRO) to determine which method to call.
          </p>
          
          <div className="py-code-block">
            <pre>{`class Flying:
    def fly(self):
        return "Flying through the air"

class Swimming:
    def swim(self):
        return "Swimming in water"

class Bird(Animal, Flying):
    def __init__(self, name, can_fly=True):
        super().__init__(name, "Bird")
        self.can_fly = can_fly
    
    def make_sound(self):
        return f"{self.name} chirps: Tweet!"

class Duck(Bird, Swimming):
    def __init__(self, name):
        super().__init__(name, can_fly=True)
    
    def make_sound(self):
        return f"{self.name} quacks: Quack!"

# Using multiple inheritance
duck = Duck("Donald")

print(duck.make_sound())  # Donald quacks: Quack!
print(duck.fly())         # Flying through the air
print(duck.swim())        # Swimming in water
print(duck.sleep())       # Donald is sleeping (from Animal)

# Check Method Resolution Order
print(Duck.__mro__)  # Shows the order of method resolution

# Check if object is instance of multiple classes
print(isinstance(duck, Duck))      # True
print(isinstance(duck, Bird))      # True
print(isinstance(duck, Animal))    # True
print(isinstance(duck, Swimming))  # True`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>OOP Best Practices:</h3>
            <ul>
              <li><strong>Use descriptive class names:</strong> PascalCase (ClassName)</li>
              <li><strong>Keep classes focused:</strong> Single Responsibility Principle</li>
              <li><strong>Use properties</strong> for computed attributes and validation</li>
              <li><strong>Prefer composition over inheritance</strong> when possible</li>
              <li><strong>Use docstrings</strong> to document classes and methods</li>
              <li><strong>Follow the DRY principle:</strong> Don't Repeat Yourself</li>
              <li><strong>Use private attributes</strong> (underscore prefix) for internal data</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a BankAccount class with deposit, withdraw, and balance methods</li>
              <li>Design a Vehicle class hierarchy with Car, Motorcycle, and Truck subclasses</li>
              <li>Build a Library system with Book, Member, and Library classes</li>
              <li>Create a Shape class with Circle, Rectangle, and Triangle subclasses</li>
              <li>Design a Student/Teacher management system with inheritance</li>
              <li>Implement a simple game with Player, Enemy, and Weapon classes</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ClassesAndObjects;
import React from 'react';
import '../Navbarweb.css';

function Inheritance() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>👨‍👩‍👧 Inheritance</h1>
        <p className="py-topic-subtitle">
          Learn to create classes that inherit from other classes
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>👨‍👩‍👧 What is Inheritance?</h2>
          <p>
            Inheritance is a fundamental concept in object-oriented programming that allows you to create 
            new classes based on existing classes. The new class (child/derived class) inherits attributes 
            and methods from the existing class (parent/base class), promoting code reuse and establishing 
            hierarchical relationships between classes.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Inheritance Concepts:</h3>
            <ul>
              <li><strong>Parent/Base Class:</strong> The class being inherited from</li>
              <li><strong>Child/Derived Class:</strong> The class that inherits from another class</li>
              <li><strong>super():</strong> Function to call parent class methods</li>
              <li><strong>Method Overriding:</strong> Redefining parent methods in child classes</li>
              <li><strong>Multiple Inheritance:</strong> Inheriting from multiple parent classes</li>
              <li><strong>Method Resolution Order (MRO):</strong> The order Python searches for methods</li>
            </ul>
          </div>
        </section>

        {/* Basic Inheritance */}
        <section className="py-topic-section">
          <h2>🌱 Basic Inheritance</h2>
          
          <div className="py-code-block">
            <pre>{`# Basic inheritance example
print("Basic Inheritance Examples:")

# Parent class (Base class)
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
        self.energy = 100
    
    def eat(self, food):
        print(f"{{self.name}} is eating {{food}}")
        self.energy += 20
        if self.energy > 100:
            self.energy = 100
    
    def sleep(self):
        print(f"{{self.name}} is sleeping")
        self.energy = 100
    
    def make_sound(self):
        print(f"{{self.name}} makes a sound")
    
    def __str__(self):
        return f"{{self.name}} ({{self.species}}) - Energy: {{self.energy}}"

# Child class (Derived class)
class Dog(Animal):
    def __init__(self, name, breed):
        # Call parent constructor
        super().__init__(name, "Canine")
        self.breed = breed
        self.loyalty = 100
    
    # Override parent method
    def make_sound(self):
        print(f"{{self.name}} barks: Woof! Woof!")
    
    # Add new method specific to Dog
    def fetch(self, item):
        print(f"{{self.name}} fetches the {{item}}")
        self.energy -= 10
        self.loyalty += 5
    
    def guard(self):
        print(f"{{self.name}} is guarding the house")
        self.energy -= 15

# Another child class
class Cat(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Feline")
        self.breed = breed
        self.independence = 80
    
    def make_sound(self):
        print(f"{{self.name}} meows: Meow!")
    
    def climb(self):
        print(f"{{self.name}} climbs up high")
        self.energy -= 5
    
    def purr(self):
        print(f"{{self.name}} purrs contentedly")
        self.energy += 5

# Creating instances
print("\\nCreating animals:")
generic_animal = Animal("Generic", "Unknown")
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", "Persian")

print(generic_animal)
print(dog)  
print(cat)

print("\\nAnimal behaviors:")
generic_animal.make_sound()
dog.make_sound()
cat.make_sound()

print("\\nInherited methods:")
dog.eat("dog food")
cat.eat("fish")

print("\\nDog-specific methods:")
dog.fetch("ball")
dog.guard()

print("\\nCat-specific methods:")
cat.climb()
cat.purr()

print("\\nAfter activities:")
print(dog)
print(cat)

# Checking inheritance relationship
print(f"\\nInheritance relationships:")
print(f"Is dog an instance of Dog? {{isinstance(dog, Dog)}}")
print(f"Is dog an instance of Animal? {{isinstance(dog, Animal)}}")
print(f"Is Dog a subclass of Animal? {{issubclass(Dog, Animal)}}")
print(f"Is Animal a subclass of Dog? {{issubclass(Animal, Dog)}}")

# Method Resolution Order (MRO)
print(f"\\nMethod Resolution Order for Dog: {{Dog.__mro__}}")
print(f"Dog MRO names: {{[cls.__name__ for cls in Dog.__mro__}}}")

# Accessing parent methods explicitly
print(f"\\nAccessing parent methods:")
print("Dog's parent make_sound method:")
Animal.make_sound(dog)  # Call parent method directly
print("Dog's overridden make_sound method:")
dog.make_sound()`}</pre>
          </div>
        </section>

        {/* Advanced Inheritance */}
        <section className="py-topic-section">
          <h2>🚀 Advanced Inheritance Patterns</h2>
          
          <div className="py-code-block">
            <pre>{`# Advanced inheritance patterns
print("Advanced Inheritance Examples:")

# Multi-level inheritance
class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.is_running = False
    
    def start(self):
        self.is_running = True
        print(f"{{self.make}} {{self.model}} started")
    
    def stop(self):
        self.is_running = False
        print(f"{{self.make}} {{self.model}} stopped")
    
    def get_info(self):
        return f"{{self.year}} {{self.make}} {{self.model}}"

class MotorVehicle(Vehicle):
    def __init__(self, make, model, year, engine_type, fuel_capacity):
        super().__init__(make, model, year)
        self.engine_type = engine_type
        self.fuel_capacity = fuel_capacity
        self.fuel_level = fuel_capacity
    
    def refuel(self, amount):
        self.fuel_level = min(self.fuel_level + amount, self.fuel_capacity)
        print(f"Refueled. Current fuel: {{self.fuel_level}}/{{self.fuel_capacity}} liters")
    
    def drive(self, distance):
        fuel_needed = distance * 0.1  # 0.1 liter per km
        if fuel_needed <= self.fuel_level:
            self.fuel_level -= fuel_needed
            print(f"Drove {{distance}} km. Fuel remaining: {{self.fuel_level:.1f}} liters")
        else:
            print("Not enough fuel!")

class Car(MotorVehicle):
    def __init__(self, make, model, year, engine_type, fuel_capacity, doors):
        super().__init__(make, model, year, engine_type, fuel_capacity)
        self.doors = doors
        self.passengers = 0
        self.max_passengers = 5
    
    def add_passenger(self, count=1):
        if self.passengers + count <= self.max_passengers:
            self.passengers += count
            print(f"Added {{count}} passenger(s). Total: {{self.passengers}}")
        else:
            print("Car is full!")
    
    def honk(self):
        print("Beep beep!")

class Truck(MotorVehicle):
    def __init__(self, make, model, year, engine_type, fuel_capacity, cargo_capacity):
        super().__init__(make, model, year, engine_type, fuel_capacity)
        self.cargo_capacity = cargo_capacity
        self.cargo_weight = 0
    
    def load_cargo(self, weight):
        if self.cargo_weight + weight <= self.cargo_capacity:
            self.cargo_weight += weight
            print(f"Loaded {{weight}} kg. Total cargo: {{self.cargo_weight}} kg")
        else:
            print("Truck overloaded!")
    
    def unload_cargo(self, weight):
        if weight <= self.cargo_weight:
            self.cargo_weight -= weight
            print(f"Unloaded {{weight}} kg. Remaining cargo: {{self.cargo_weight}} kg")

# Testing multi-level inheritance
print("\\nMulti-level Inheritance:")
car = Car("Toyota", "Camry", 2023, "Gasoline", 60, 4)
truck = Truck("Ford", "F-150", 2023, "Diesel", 120, 1000)

print(car.get_info())  # From Vehicle
car.refuel(20)         # From MotorVehicle
car.add_passenger(3)   # From Car
car.honk()            # From Car

print(truck.get_info())  # From Vehicle
truck.load_cargo(500)    # From Truck
truck.drive(100)         # From MotorVehicle

# Multiple inheritance
print(f"\\nMultiple Inheritance:")

class Flyable:
    def __init__(self):
        self.altitude = 0
        self.max_altitude = 1000
    
    def takeoff(self):
        if self.altitude == 0:
            self.altitude = 100
            print("Taking off... Now at 100m altitude")
        else:
            print("Already in the air!")
    
    def land(self):
        if self.altitude > 0:
            self.altitude = 0
            print("Landing... Now on the ground")
        else:
            print("Already on the ground!")
    
    def fly_to_altitude(self, target_altitude):
        if 0 <= target_altitude <= self.max_altitude:
            self.altitude = target_altitude
            print(f"Flying to {{target_altitude}}m altitude")
        else:
            print(f"Cannot fly to {{target_altitude}}m (max: {{self.max_altitude}}m)")

class Swimmable:
    def __init__(self):
        self.depth = 0
        self.max_depth = 50
    
    def dive(self, target_depth):
        if 0 <= target_depth <= self.max_depth:
            self.depth = target_depth
            print(f"Diving to {{target_depth}}m depth")
        else:
            print(f"Cannot dive to {{target_depth}}m (max: {{self.max_depth}}m)")
    
    def surface(self):
        if self.depth > 0:
            self.depth = 0
            print("Surfacing... Now at water surface")
        else:
            print("Already at surface!")

# Multiple inheritance - Duck inherits from Animal, Flyable, and Swimmable
class Duck(Animal, Flyable, Swimmable):
    def __init__(self, name):
        Animal.__init__(self, name, "Duck")
        Flyable.__init__(self)
        Swimmable.__init__(self)
        self.waterproof = True
    
    def make_sound(self):
        print(f"{{self.name}} quacks: Quack! Quack!")
    
    def swim(self):
        print(f"{{self.name}} is swimming gracefully")
        self.energy -= 5

# Testing multiple inheritance
duck = Duck("Donald")
print(f"Duck MRO: {{[cls.__name__ for cls in Duck.__mro__}}}")

duck.make_sound()    # From Duck (overridden)
duck.eat("bread")    # From Animal
duck.takeoff()       # From Flyable
duck.fly_to_altitude(200)  # From Flyable
duck.land()          # From Flyable
duck.dive(5)         # From Swimmable
duck.swim()          # From Duck
duck.surface()       # From Swimmable

# Diamond problem example and resolution
print(f"\\nDiamond Problem Example:")

class A:
    def method(self):
        print("Method from class A")
    
    def common_method(self):
        print("A's common method")

class B(A):
    def method(self):
        print("Method from class B")
        super().method()  # Call parent method
    
    def common_method(self):
        print("B's common method")
        super().common_method()

class C(A):
    def method(self):
        print("Method from class C")
        super().method()  # Call parent method
    
    def common_method(self):
        print("C's common method")
        super().common_method()

class D(B, C):
    def method(self):
        print("Method from class D")
        super().method()  # This will follow MRO
    
    def common_method(self):
        print("D's common method")
        super().common_method()

# Testing diamond inheritance
d = D()
print(f"D's MRO: {{[cls.__name__ for cls in D.__mro__}}}")
print("Calling d.method():")
d.method()
print("\\nCalling d.common_method():")
d.common_method()

# Abstract base classes simulation
class Shape:
    def __init__(self, color):
        self.color = color
    
    def area(self):
        raise NotImplementedError("Subclasses must implement area method")
    
    def perimeter(self):
        raise NotImplementedError("Subclasses must implement perimeter method")
    
    def describe(self):
        return f"A {{self.color}} shape with area {{self.area()}} and perimeter {{self.perimeter()}}"

class Rectangle(Shape):
    def __init__(self, color, width, height):
        super().__init__(color)
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    def __init__(self, color, radius):
        super().__init__(color)
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2
    
    def perimeter(self):
        return 2 * 3.14159 * self.radius

print(f"\\nAbstract Base Class Pattern:")
rectangle = Rectangle("red", 5, 3)
circle = Circle("blue", 4)

print(rectangle.describe())
print(circle.describe())

# Try to create abstract shape (will work but calling methods will fail)
try:
    abstract_shape = Shape("green")
    print(abstract_shape.describe())  # This will raise NotImplementedError
except NotImplementedError as e:
    print(f"Error: {{e}}")

# Method chaining with inheritance
class ChainableVehicle(Vehicle):
    def start(self):
        super().start()
        return self  # Return self for chaining
    
    def stop(self):
        super().stop()
        return self
    
    def info(self):
        print(self.get_info())
        return self

print(f"\\nMethod Chaining:")
chainable_car = ChainableVehicle("Honda", "Civic", 2023)
chainable_car.start().info().stop().info()`}</pre>
          </div>
        </section>

        {/* super() Function */}
        <section className="py-topic-section">
          <h2>🦸‍♀️ The super() Function</h2>
          
          <div className="py-code-block">
            <pre>{`# Advanced usage of super()
print("Advanced super() Usage:")

class Employee:
    def __init__(self, name, employee_id, department):
        self.name = name
        self.employee_id = employee_id
        self.department = department
        self.salary = 0
        print(f"Employee {{name}} created in {{department}} department")
    
    def work(self):
        print(f"{{self.name}} is working")
    
    def get_details(self):
        return f"Employee: {{self.name}} (ID: {{self.employee_id}}, Dept: {{self.department}})"
    
    def calculate_bonus(self):
        return self.salary * 0.1  # 10% bonus

class Manager(Employee):
    def __init__(self, name, employee_id, department, team_size):
        super().__init__(name, employee_id, department)  # Call parent constructor
        self.team_size = team_size
        self.salary = 80000  # Set manager salary
        print(f"Manager {{name}} manages {{team_size}} people")
    
    def work(self):
        super().work()  # Call parent method first
        print(f"{{self.name}} is also managing the team")
    
    def get_details(self):
        base_details = super().get_details()  # Get parent details
        return f"{{base_details}}, Team Size: {{self.team_size}}"
    
    def calculate_bonus(self):
        base_bonus = super().calculate_bonus()  # Get parent bonus calculation
        management_bonus = self.team_size * 1000  # Additional management bonus
        return base_bonus + management_bonus
    
    def conduct_meeting(self):
        print(f"{{self.name}} is conducting a team meeting")

class Developer(Employee):
    def __init__(self, name, employee_id, department, programming_languages):
        super().__init__(name, employee_id, department)
        self.programming_languages = programming_languages
        self.salary = 70000
        print(f"Developer {{name}} knows: {{', '.join(programming_languages)}}")
    
    def work(self):
        super().work()
        print(f"{{self.name}} is coding")
    
    def get_details(self):
        base_details = super().get_details()
        return f"{{base_details}}, Languages: {{', '.join(self.programming_languages)}}"
    
    def calculate_bonus(self):
        base_bonus = super().calculate_bonus()
        skill_bonus = len(self.programming_languages) * 500  # Bonus per language
        return base_bonus + skill_bonus
    
    def code_review(self):
        print(f"{{self.name}} is reviewing code")

class TechLead(Manager, Developer):
    def __init__(self, name, employee_id, department, team_size, programming_languages):
        # Need to handle multiple inheritance carefully
        Manager.__init__(self, name, employee_id, department, team_size)
        # Don't call Developer.__init__ as it would call Employee.__init__ again
        self.programming_languages = programming_languages
        self.salary = 100000  # Override salary for tech lead
        print(f"Tech Lead {{name}} leads {{team_size}} developers")
    
    def work(self):
        # Use super() to follow MRO
        super().work()
        print(f"{{self.name}} is architecting solutions")
    
    def get_details(self):
        # This will follow MRO: TechLead -> Manager -> Developer -> Employee
        details = super().get_details()
        return f"{{details}}, Tech Lead"
    
    def calculate_bonus(self):
        # Combine both bonuses carefully
        manager_bonus = Manager.calculate_bonus(self)
        developer_bonus = Developer.calculate_bonus(self) - Employee.calculate_bonus(self)  # Avoid double-counting base
        return manager_bonus + developer_bonus
    
    def mentor_team(self):
        print(f"{{self.name}} is mentoring the development team")

# Testing super() with single inheritance
print("\\nSingle Inheritance:")
manager = Manager("Alice", "M001", "Engineering", 5)
developer = Developer("Bob", "D001", "Engineering", ["Python", "JavaScript", "Go"])

manager.work()
print(manager.get_details())
print(f"Manager bonus: ${'{'}{manager.calculate_bonus(){'}'}")

print()
developer.work()
print(developer.get_details())
print(f"Developer bonus: ${'{'}{developer.calculate_bonus(){'}'}")

# Testing super() with multiple inheritance
print("\\nMultiple Inheritance:")
tech_lead = TechLead("Charlie", "TL001", "Engineering", 8, ["Python", "Java", "C++", "Rust"])

print(f"TechLead MRO: {{[cls.__name__ for cls in TechLead.__mro__}}}")
tech_lead.work()
print(tech_lead.get_details())
print(f"Tech Lead bonus: ${'{'}{tech_lead.calculate_bonus(){'}'}")

# Demonstrating cooperative inheritance
print(f"\\nCooperative Inheritance Example:")

class LoggingMixin:
    def __init__(self, *args, **kwargs):
        print(f"LoggingMixin: Initializing with args={{args}}, kwargs={{kwargs}}")
        super().__init__(*args, **kwargs)
    
    def log_action(self, action):
        print(f"LOG: {{self.__class__.__name__}} performed {{action}}")

class TimestampMixin:
    def __init__(self, *args, **kwargs):
        print(f"TimestampMixin: Initializing with args={{args}}, kwargs={{kwargs}}")
        from datetime import datetime
        self.created_at = datetime.now()
        super().__init__(*args, **kwargs)
    
    def get_timestamp(self):
        return self.created_at.strftime("%Y-%m-%d %H:%M:%S")

class Person:
    def __init__(self, name, age):
        print(f"Person: Initializing {{name}}, age {{age}}")
        self.name = name
        self.age = age
    
    def introduce(self):
        print(f"Hi, I'm {{self.name}} and I'm {{self.age}} years old")

class TrackedPerson(LoggingMixin, TimestampMixin, Person):
    def __init__(self, name, age, tracking_id):
        print(f"TrackedPerson: Starting initialization")
        self.tracking_id = tracking_id
        super().__init__(name, age)  # This will follow MRO
        print(f"TrackedPerson: Completed initialization")
    
    def introduce(self):
        super().introduce()
        self.log_action("introduction")
        print(f"Tracked since: {{self.get_timestamp()}}")
        print(f"Tracking ID: {{self.tracking_id}}")

print(f"TrackedPerson MRO: {{[cls.__name__ for cls in TrackedPerson.__mro__}}}")
tracked_person = TrackedPerson("David", 30, "TP001")
tracked_person.introduce()

# super() with arguments (Python 2 style, still valid in Python 3)
class OldStyleSuper(Employee):
    def __init__(self, name, employee_id, department):
        # Explicit super call with arguments
        super(OldStyleSuper, self).__init__(name, employee_id, department)
        print("Using old-style super() call")

print(f"\\nOld-style super() (still works):")
old_style = OldStyleSuper("Eve", "OS001", "Legacy")

# super() in static and class methods
class MathUtils:
    pi = 3.14159
    
    @classmethod
    def get_pi(cls):
        return cls.pi
    
    @staticmethod
    def add(a, b):
        return a + b

class AdvancedMathUtils(MathUtils):
    e = 2.71828
    
    @classmethod
    def get_pi(cls):
        base_pi = super().get_pi()  # Call parent class method
        print(f"Getting pi from parent: {{base_pi}}")
        return base_pi
    
    @classmethod
    def get_e(cls):
        return cls.e
    
    @staticmethod
    def multiply(a, b):
        # Cannot use super() in static methods as they have no class context
        return a * b

print(f"\\nsuper() in class methods:")
print(f"Advanced PI: {{AdvancedMathUtils.get_pi()}}")
print(f"E: {{AdvancedMathUtils.get_e()}}")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Inheritance Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Best Practices:</h3>
            <ul>
              <li><strong>Use super():</strong> Always use super() to call parent methods for maintainability</li>
              <li><strong>Follow IS-A relationship:</strong> Only use inheritance when child "is a" type of parent</li>
              <li><strong>Keep inheritance hierarchies shallow:</strong> Deep inheritance can be hard to understand</li>
              <li><strong>Prefer composition over inheritance:</strong> When relationship is "has a" rather than "is a"</li>
              <li><strong>Use abstract base classes:</strong> Define contracts that subclasses must implement</li>
              <li><strong>Be careful with multiple inheritance:</strong> Understand MRO and potential conflicts</li>
              <li><strong>Document inheritance relationships:</strong> Clear documentation helps maintainability</li>
              <li><strong>Override methods thoughtfully:</strong> Ensure overridden methods maintain expected behavior</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a comprehensive vehicle hierarchy with different vehicle types</li>
              <li>Build an employee management system with different employee roles</li>
              <li>Design a shape hierarchy with area and perimeter calculations</li>
              <li>Implement a gaming system with different character types and abilities</li>
              <li>Create a file system simulation with different file and directory types</li>
              <li>Build an e-commerce system with different product categories</li>
              <li>Design a media player system supporting different file formats</li>
              <li>Create a banking system with different account types</li>
              <li>Implement a content management system with different content types</li>
              <li>Build a notification system with different delivery methods</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Inheritance;
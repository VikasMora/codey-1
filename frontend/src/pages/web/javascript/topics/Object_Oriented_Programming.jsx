import React from 'react';
import '../Navbarweb.css';

function ObjectOrientedProgramming() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🏛️ Object-Oriented JavaScript</h1>
        <p className="js-topic-subtitle">
          Master object-oriented programming concepts in JavaScript including classes, inheritance, and encapsulation
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction to OOP */}
        <section className="js-topic-section">
          <h2>🎯 What is Object-Oriented Programming?</h2>
          <p>
            Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects
            containing both data (properties) and behavior (methods). JavaScript supports OOP through
            prototypes and ES6 classes.
          </p>
          
          <div className="js-oop-principles">
            <div className="js-principle-card">
              <h3>🏗️ Four Pillars of OOP</h3>
              <ul>
                <li><strong>Encapsulation:</strong> Bundling data and methods together</li>
                <li><strong>Inheritance:</strong> Creating new classes based on existing ones</li>
                <li><strong>Polymorphism:</strong> Objects taking multiple forms</li>
                <li><strong>Abstraction:</strong> Hiding implementation details</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ES6 Classes */}
        <section className="js-topic-section">
          <h2>🏫 ES6 Classes</h2>
          
          <div className="js-class-examples">
            <div className="js-class-card">
              <h3>Basic Class Syntax</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic class definition
class Person {
  // Constructor method
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.isActive = true;
  }
  
  // Instance methods
  introduce() {
    return "Hello, I'm " + this.name + " and I'm " + this.age + " years old.";
  }
  
  getInfo() {
    return {
      name: this.name,
      age: this.age,
      email: this.email,
      status: this.isActive ? 'Active' : 'Inactive'
    };
  }
  
  updateAge(newAge) {
    if (newAge > 0 && newAge < 150) {
      this.age = newAge;
      console.log("Age updated to " + newAge);
    } else {
      console.log("Invalid age provided");
    }
  }
  
  toggleStatus() {
    this.isActive = !this.isActive;
    return this.isActive;
  }
}

// Creating instances
const person1 = new Person("Alice Johnson", 28, "alice@email.com");
const person2 = new Person("Bob Smith", 35, "bob@email.com");

console.log(person1.introduce()); 
// "Hello, I'm Alice Johnson and I'm 28 years old."

console.log(person1.getInfo());
// {name: "Alice Johnson", age: 28, email: "alice@email.com", status: "Active"}

person1.updateAge(29);
console.log(person1.age); // 29`}
                </code></pre>
              </div>
            </div>

            <div className="js-class-card">
              <h3>Static Methods and Properties</h3>
              <div className="js-code-example">
                <pre><code>
{`class MathUtils {
  // Static properties
  static PI = 3.14159;
  static E = 2.71828;
  
  // Static methods (belong to class, not instances)
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
  
  static circleArea(radius) {
    return this.PI * radius * radius;
  }
  
  static factorial(n) {
    if (n <= 1) return 1;
    return n * this.factorial(n - 1);
  }
  
  static randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Using static methods (no need to create instance)
console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.circleArea(5)); // 78.53975
console.log(MathUtils.factorial(5)); // 120
console.log(MathUtils.randomBetween(1, 10)); // Random number 1-10

// Static properties
console.log("Pi value:", MathUtils.PI); // 3.14159

// Instance vs Static
class Counter {
  constructor() {
    this.instanceCount = 0;
    Counter.totalInstances = (Counter.totalInstances || 0) + 1;
  }
  
  increment() {
    this.instanceCount++;
  }
  
  static getTotalInstances() {
    return Counter.totalInstances || 0;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();
counter1.increment();
counter1.increment();

console.log("Counter1 count:", counter1.instanceCount); // 2
console.log("Counter2 count:", counter2.instanceCount); // 0
console.log("Total instances:", Counter.getTotalInstances()); // 2`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Inheritance */}
        <section className="js-topic-section">
          <h2>🧬 Inheritance</h2>
          
          <div className="js-inheritance-examples">
            <div className="js-inheritance-card">
              <h3>Class Inheritance with extends</h3>
              <div className="js-code-example">
                <pre><code>
{`// Base class (Parent)
class Animal {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.isAlive = true;
  }
  
  eat(food) {
    console.log(this.name + " is eating " + food);
  }
  
  sleep() {
    console.log(this.name + " is sleeping");
  }
  
  makeSound() {
    console.log(this.name + " makes a sound");
  }
  
  getInfo() {
    return this.name + " is a " + this.age + " year old " + this.species;
  }
}

// Derived class (Child) extending Animal
class Dog extends Animal {
  constructor(name, breed, age) {
    // Call parent constructor
    super(name, "Dog", age);
    this.breed = breed;
    this.tricks = [];
  }
  
  // Override parent method
  makeSound() {
    console.log(this.name + " barks: Woof! Woof!");
  }
  
  // New methods specific to Dog
  fetch(item) {
    console.log(this.name + " fetches the " + item);
  }
  
  learnTrick(trick) {
    this.tricks.push(trick);
    console.log(this.name + " learned " + trick + "!");
  }
  
  performTricks() {
    if (this.tricks.length === 0) {
      console.log(this.name + " doesn't know any tricks yet");
      return;
    }
    
    console.log(this.name + " performs:");
    this.tricks.forEach(trick => {
      console.log("- " + trick);
    });
  }
  
  // Override getInfo to include breed
  getInfo() {
    return super.getInfo() + " (" + this.breed + " breed)";
  }
}

// Another derived class
class Cat extends Animal {
  constructor(name, breed, age) {
    super(name, "Cat", age);
    this.breed = breed;
    this.livesLeft = 9;
  }
  
  makeSound() {
    console.log(this.name + " meows: Meow! Meow!");
  }
  
  climb() {
    console.log(this.name + " climbs up high");
  }
  
  purr() {
    console.log(this.name + " purrs contentedly");
  }
}

// Using inheritance
const dog = new Dog("Buddy", "Golden Retriever", 3);
const cat = new Cat("Whiskers", "Persian", 2);

// Inherited methods
dog.eat("kibble"); // "Buddy is eating kibble"
cat.sleep(); // "Whiskers is sleeping"

// Overridden methods
dog.makeSound(); // "Buddy barks: Woof! Woof!"
cat.makeSound(); // "Whiskers meows: Meow! Meow!"

// Specific methods
dog.learnTrick("sit");
dog.learnTrick("roll over");
dog.performTricks();
// "Buddy learned sit!"
// "Buddy learned roll over!"
// "Buddy performs: - sit - roll over"

console.log(dog.getInfo()); 
// "Buddy is a 3 year old Dog (Golden Retriever breed)"

console.log(cat.getInfo()); 
// "Whiskers is a 2 year old Cat"`}
                </code></pre>
              </div>
            </div>

            <div className="js-inheritance-card">
              <h3>Multi-level Inheritance</h3>
              <div className="js-code-example">
                <pre><code>
{`// Base class
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }
  
  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      console.log("Vehicle started");
    }
  }
  
  stop() {
    if (this.isRunning) {
      this.isRunning = false;
      console.log("Vehicle stopped");
    }
  }
  
  getDescription() {
    return this.year + " " + this.make + " " + this.model;
  }
}

// First level inheritance
class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
    this.gear = "P"; // Park
  }
  
  start() {
    super.start();
    console.log("Car engine running");
  }
  
  changeGear(newGear) {
    const validGears = ["P", "R", "N", "D"];
    if (validGears.includes(newGear)) {
      this.gear = newGear;
      console.log("Gear changed to " + newGear);
    }
  }
}

// Second level inheritance
class SportsCar extends Car {
  constructor(make, model, year, doors, topSpeed) {
    super(make, model, year, doors);
    this.topSpeed = topSpeed;
    this.sportMode = false;
  }
  
  start() {
    super.start();
    console.log("Sports car ready for action!");
  }
  
  enableSportMode() {
    this.sportMode = true;
    console.log("Sport mode enabled! Maximum performance!");
  }
  
  disableSportMode() {
    this.sportMode = false;
    console.log("Sport mode disabled. Comfort mode active.");
  }
  
  getDescription() {
    return super.getDescription() + " (Top speed: " + this.topSpeed + " mph)";
  }
}

// Using multi-level inheritance
const sportsCar = new SportsCar("Ferrari", "F8 Tributo", 2023, 2, 211);

sportsCar.start();
// "Vehicle started"
// "Car engine running"
// "Sports car ready for action!"

sportsCar.changeGear("D");
sportsCar.enableSportMode();

console.log(sportsCar.getDescription());
// "2023 Ferrari F8 Tributo (Top speed: 211 mph)"

// Check inheritance chain
console.log(sportsCar instanceof SportsCar); // true
console.log(sportsCar instanceof Car); // true
console.log(sportsCar instanceof Vehicle); // true`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Encapsulation */}
        <section className="js-topic-section">
          <h2>🔒 Encapsulation</h2>
          
          <div className="js-encapsulation-examples">
            <div className="js-encapsulation-card">
              <h3>Private Fields and Methods</h3>
              <div className="js-code-example">
                <pre><code>
{`// Modern JavaScript private fields (ES2022)
class BankAccount {
  // Private fields (start with #)
  #balance = 0;
  #accountNumber;
  #pin;
  
  constructor(accountNumber, initialBalance = 0, pin) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
    this.#pin = pin;
    this.holderName = "";
    this.accountType = "Savings";
  }
  
  // Private method
  #validatePin(inputPin) {
    return this.#pin === inputPin;
  }
  
  // Private method for logging transactions
  #logTransaction(type, amount, balance) {
    const timestamp = new Date().toISOString();
    console.log("[" + timestamp + "] " + type + ": $" + amount + 
                " | Balance: $" + balance);
  }
  
  // Public methods (interface)
  deposit(amount, pin) {
    if (!this.#validatePin(pin)) {
      throw new Error("Invalid PIN");
    }
    
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }
    
    this.#balance += amount;
    this.#logTransaction("DEPOSIT", amount, this.#balance);
    return this.#balance;
  }
  
  withdraw(amount, pin) {
    if (!this.#validatePin(pin)) {
      throw new Error("Invalid PIN");
    }
    
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }
    
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    
    this.#balance -= amount;
    this.#logTransaction("WITHDRAWAL", amount, this.#balance);
    return this.#balance;
  }
  
  getBalance(pin) {
    if (!this.#validatePin(pin)) {
      throw new Error("Invalid PIN");
    }
    return this.#balance;
  }
  
  // Public method that doesn't expose sensitive data
  getAccountInfo() {
    return {
      accountNumber: this.#accountNumber.slice(-4).padStart(8, "*"),
      accountType: this.accountType,
      holderName: this.holderName
    };
  }
}

// Using encapsulation
const account = new BankAccount("123456789", 1000, "1234");
account.holderName = "John Doe";

try {
  // These work with correct PIN
  account.deposit(500, "1234");
  console.log("Balance:", account.getBalance("1234")); // 1500
  account.withdraw(200, "1234");
  
  // This fails with wrong PIN
  account.withdraw(100, "0000"); // Error: Invalid PIN
} catch (error) {
  console.log("Transaction failed:", error.message);
}

// Private fields are truly private
console.log(account.getAccountInfo()); 
// {accountNumber: "****6789", accountType: "Savings", holderName: "John Doe"}

// These don't work - private fields are inaccessible
// console.log(account.#balance); // SyntaxError
// account.#validatePin("1234"); // SyntaxError`}
                </code></pre>
              </div>
            </div>

            <div className="js-encapsulation-card">
              <h3>Getters and Setters</h3>
              <div className="js-code-example">
                <pre><code>
{`class Temperature {
  constructor(celsius = 0) {
    this._celsius = celsius;
  }
  
  // Getter for celsius
  get celsius() {
    return this._celsius;
  }
  
  // Setter for celsius with validation
  set celsius(value) {
    if (typeof value !== 'number') {
      throw new Error("Temperature must be a number");
    }
    if (value < -273.15) {
      throw new Error("Temperature cannot be below absolute zero");
    }
    this._celsius = value;
  }
  
  // Getter for fahrenheit (computed property)
  get fahrenheit() {
    return (this._celsius * 9/5) + 32;
  }
  
  // Setter for fahrenheit
  set fahrenheit(value) {
    if (typeof value !== 'number') {
      throw new Error("Temperature must be a number");
    }
    this.celsius = (value - 32) * 5/9; // Uses celsius setter for validation
  }
  
  // Getter for kelvin
  get kelvin() {
    return this._celsius + 273.15;
  }
  
  // Setter for kelvin
  set kelvin(value) {
    if (typeof value !== 'number') {
      throw new Error("Temperature must be a number");
    }
    this.celsius = value - 273.15; // Uses celsius setter for validation
  }
  
  // Method to get all scales
  getAllScales() {
    return {
      celsius: this.celsius,
      fahrenheit: this.fahrenheit,
      kelvin: this.kelvin
    };
  }
}

// Using getters and setters
const temp = new Temperature(25);

console.log("Initial temperature:");
console.log("Celsius:", temp.celsius); // 25
console.log("Fahrenheit:", temp.fahrenheit); // 77
console.log("Kelvin:", temp.kelvin); // 298.15

// Setting temperature using different scales
temp.fahrenheit = 100; // Sets celsius to ~37.78
console.log("After setting to 100°F:");
console.log(temp.getAllScales());
// {celsius: 37.77777777777778, fahrenheit: 100, kelvin: 310.92777777777775}

temp.kelvin = 300; // Sets celsius to ~26.85
console.log("After setting to 300K:");
console.log(temp.getAllScales());
// {celsius: 26.850000000000023, fahrenheit: 80.33000000000004, kelvin: 300}

// Validation in action
try {
  temp.celsius = -300; // Error: below absolute zero
} catch (error) {
  console.log("Error:", error.message);
}

// Property descriptor with getter/setter
class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  
  get radius() {
    return this._radius;
  }
  
  set radius(value) {
    if (value <= 0) {
      throw new Error("Radius must be positive");
    }
    this._radius = value;
  }
  
  get diameter() {
    return this._radius * 2;
  }
  
  get area() {
    return Math.PI * this._radius * this._radius;
  }
  
  get circumference() {
    return 2 * Math.PI * this._radius;
  }
}

const circle = new Circle(5);
console.log("Circle with radius 5:");
console.log("Diameter:", circle.diameter); // 10
console.log("Area:", circle.area.toFixed(2)); // 78.54
console.log("Circumference:", circle.circumference.toFixed(2)); // 31.42

circle.radius = 10; // Updates radius, other properties auto-update
console.log("After changing radius to 10:");
console.log("Area:", circle.area.toFixed(2)); // 314.16`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Polymorphism */}
        <section className="js-topic-section">
          <h2>🎭 Polymorphism</h2>
          
          <div className="js-polymorphism-examples">
            <div className="js-polymorphism-card">
              <h3>Method Overriding</h3>
              <div className="js-code-example">
                <pre><code>
{`// Base class defining interface
class Shape {
  constructor(name) {
    this.name = name;
  }
  
  // Base implementation (to be overridden)
  calculateArea() {
    throw new Error("calculateArea() must be implemented by subclass");
  }
  
  calculatePerimeter() {
    throw new Error("calculatePerimeter() must be implemented by subclass");
  }
  
  // Common method used by all shapes
  getDescription() {
    return "This is a " + this.name + 
           " with area " + this.calculateArea().toFixed(2) +
           " and perimeter " + this.calculatePerimeter().toFixed(2);
  }
}

// Rectangle implementation
class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }
  
  calculateArea() {
    return this.width * this.height;
  }
  
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Circle implementation
class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }
  
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
  
  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Triangle implementation
class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super("Triangle");
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  
  calculateArea() {
    // Using Heron's formula
    const s = this.calculatePerimeter() / 2;
    return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
  }
  
  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

// Polymorphism in action - same interface, different implementations
const shapes = [
  new Rectangle(5, 4),
  new Circle(3),
  new Triangle(3, 4, 5)
];

// Process all shapes uniformly
shapes.forEach((shape, index) => {
  console.log("Shape " + (index + 1) + ":");
  console.log(shape.getDescription());
  console.log("Area:", shape.calculateArea().toFixed(2));
  console.log("Perimeter:", shape.calculatePerimeter().toFixed(2));
  console.log("---");
});

// Function that works with any shape (polymorphism)
function compareShapes(shape1, shape2) {
  const area1 = shape1.calculateArea();
  const area2 = shape2.calculateArea();
  
  if (area1 > area2) {
    return shape1.name + " has larger area than " + shape2.name;
  } else if (area2 > area1) {
    return shape2.name + " has larger area than " + shape1.name;
  } else {
    return "Both shapes have equal area";
  }
}

console.log(compareShapes(shapes[0], shapes[1]));
// Rectangle has larger area than Circle (or vice versa)`}
                </code></pre>
              </div>
            </div>

            <div className="js-polymorphism-card">
              <h3>Duck Typing and Interfaces</h3>
              <div className="js-code-example">
                <pre><code>
{`// Duck typing - "If it looks like a duck and quacks like a duck, it's a duck"
// Objects with same interface can be used interchangeably

class EmailNotification {
  send(message, recipient) {
    console.log("Sending email to " + recipient + ": " + message);
    return {
      type: 'email',
      status: 'sent',
      timestamp: new Date().toISOString()
    };
  }
}

class SMSNotification {
  send(message, recipient) {
    console.log("Sending SMS to " + recipient + ": " + message);
    return {
      type: 'sms',
      status: 'sent',
      timestamp: new Date().toISOString()
    };
  }
}

class PushNotification {
  send(message, recipient) {
    console.log("Sending push notification to " + recipient + ": " + message);
    return {
      type: 'push',
      status: 'sent',
      timestamp: new Date().toISOString()
    };
  }
}

// Notification service that works with any notification type
class NotificationService {
  constructor() {
    this.providers = [];
  }
  
  addProvider(provider) {
    // Duck typing - we don't check class, just that it has 'send' method
    if (typeof provider.send === 'function') {
      this.providers.push(provider);
    } else {
      throw new Error("Provider must implement send method");
    }
  }
  
  sendToAll(message, recipient) {
    const results = [];
    
    this.providers.forEach(provider => {
      try {
        const result = provider.send(message, recipient);
        results.push(result);
      } catch (error) {
        results.push({
          type: 'unknown',
          status: 'failed',
          error: error.message
        });
      }
    });
    
    return results;
  }
}

// Using polymorphism with duck typing
const notificationService = new NotificationService();

notificationService.addProvider(new EmailNotification());
notificationService.addProvider(new SMSNotification());
notificationService.addProvider(new PushNotification());

// Send via all providers
const results = notificationService.sendToAll(
  "Your order has been shipped!",
  "john@example.com"
);

console.log("Notification results:", results);

// Custom provider that implements the same interface
class SlackNotification {
  constructor(channel) {
    this.channel = channel;
  }
  
  send(message, recipient) {
    console.log("Posting to Slack channel " + this.channel + 
                " for " + recipient + ": " + message);
    return {
      type: 'slack',
      status: 'sent',
      channel: this.channel,
      timestamp: new Date().toISOString()
    };
  }
}

// Add new provider - works seamlessly
notificationService.addProvider(new SlackNotification("#general"));

// Another example - payment processors
class PayPalProcessor {
  processPayment(amount, currency) {
    console.log("Processing $" + amount + " " + currency + " via PayPal");
    return { success: true, transactionId: "PP_" + Date.now() };
  }
}

class StripeProcessor {
  processPayment(amount, currency) {
    console.log("Processing $" + amount + " " + currency + " via Stripe");
    return { success: true, transactionId: "ST_" + Date.now() };
  }
}

class CryptoProcessor {
  processPayment(amount, currency) {
    console.log("Processing " + amount + " " + currency + " via Crypto");
    return { success: true, transactionId: "CR_" + Date.now() };
  }
}

// Payment service using polymorphism
function processPayments(processors, amount, currency) {
  const results = [];
  
  processors.forEach((processor, index) => {
    console.log("Using processor " + (index + 1) + ":");
    const result = processor.processPayment(amount, currency);
    results.push(result);
  });
  
  return results;
}

// All processors have same interface - polymorphism in action
const processors = [
  new PayPalProcessor(),
  new StripeProcessor(),
  new CryptoProcessor()
];

processPayments(processors, 100, "USD");`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Composition vs Inheritance */}
        <section className="js-topic-section">
          <h2>🧩 Composition vs Inheritance</h2>
          
          <div className="js-composition-examples">
            <div className="js-composition-card">
              <h3>Composition Pattern</h3>
              <div className="js-code-example">
                <pre><code>
{`// Composition: "Has-a" relationship instead of "Is-a"
// More flexible than inheritance

// Behaviors as separate objects
const canFly = {
  fly() {
    console.log(this.name + " is flying through the air");
  },
  
  land() {
    console.log(this.name + " has landed");
  }
};

const canSwim = {
  swim() {
    console.log(this.name + " is swimming gracefully");
  },
  
  dive() {
    console.log(this.name + " dives underwater");
  }
};

const canWalk = {
  walk() {
    console.log(this.name + " is walking");
  },
  
  run() {
    console.log(this.name + " is running fast");
  }
};

// Mixin function to compose behaviors
function mixin(target, ...behaviors) {
  behaviors.forEach(behavior => {
    Object.assign(target.prototype, behavior);
  });
}

// Animal classes using composition
class Bird {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  
  makeSound() {
    console.log(this.name + " chirps");
  }
}

class Fish {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  
  makeSound() {
    console.log(this.name + " makes bubble sounds");
  }
}

class Mammal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  
  makeSound() {
    console.log(this.name + " makes mammal sounds");
  }
}

// Compose different abilities
mixin(Bird, canFly, canWalk); // Birds can fly and walk
mixin(Fish, canSwim);          // Fish can swim
mixin(Mammal, canWalk);        // Mammals can walk

// Special cases
class Duck extends Bird {
  constructor(name) {
    super(name, "Duck");
  }
  
  makeSound() {
    console.log(this.name + " quacks");
  }
}

class Penguin extends Bird {
  constructor(name) {
    super(name, "Penguin");
  }
  
  makeSound() {
    console.log(this.name + " squawks");
  }
}

class Dolphin extends Mammal {
  constructor(name) {
    super(name, "Dolphin");
  }
  
  makeSound() {
    console.log(this.name + " clicks and whistles");
  }
}

// Add swimming to ducks and dolphins, flying to... wait, penguins can't fly!
mixin(Duck, canSwim);    // Ducks can also swim
mixin(Dolphin, canSwim); // Dolphins can swim
// Don't add flying to penguins - they can't fly!

// Usage
const sparrow = new Bird("Sparrow", "House Sparrow");
const duck = new Duck("Donald");
const penguin = new Penguin("Pingu");
const dolphin = new Dolphin("Flipper");

sparrow.fly();    // "Sparrow is flying through the air"
sparrow.walk();   // "Sparrow is walking"

duck.fly();       // "Donald is flying through the air"
duck.swim();      // "Donald is swimming gracefully"
duck.walk();      // "Donald is walking"

penguin.walk();   // "Pingu is walking"
// penguin.fly(); // Error: penguin.fly is not a function

dolphin.swim();   // "Flipper is swimming gracefully"
dolphin.walk();   // "Flipper is walking" (on land when beached)

// Composition with dependency injection
class Logger {
  log(message) {
    console.log("[LOG] " + message);
  }
}

class EmailSender {
  send(to, subject, body) {
    console.log("Email sent to " + to + ": " + subject);
  }
}

class UserService {
  constructor(logger, emailSender) {
    this.logger = logger;       // Composed dependency
    this.emailSender = emailSender; // Composed dependency
    this.users = [];
  }
  
  createUser(userData) {
    this.logger.log("Creating user: " + userData.name);
    
    const user = {
      id: Date.now(),
      ...userData,
      createdAt: new Date()
    };
    
    this.users.push(user);
    
    this.emailSender.send(
      user.email,
      "Welcome!",
      "Welcome to our service, " + user.name + "!"
    );
    
    this.logger.log("User created with ID: " + user.id);
    return user;
  }
}

// Composition in action
const logger = new Logger();
const emailSender = new EmailSender();
const userService = new UserService(logger, emailSender);

userService.createUser({
  name: "John Doe",
  email: "john@example.com"
});`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Design Patterns */}
        <section className="js-topic-section">
          <h2>🏗️ Common OOP Design Patterns</h2>
          
          <div className="js-patterns-examples">
            <div className="js-pattern-card">
              <h3>Singleton Pattern</h3>
              <div className="js-code-example">
                <pre><code>
{`// Singleton - Ensure only one instance exists
class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    
    this.host = "localhost";
    this.port = 5432;
    this.isConnected = false;
    this.queryCount = 0;
    
    DatabaseConnection.instance = this;
    return this;
  }
  
  connect() {
    if (!this.isConnected) {
      console.log("Connecting to database at " + this.host + ":" + this.port);
      this.isConnected = true;
    } else {
      console.log("Already connected to database");
    }
  }
  
  disconnect() {
    if (this.isConnected) {
      console.log("Disconnecting from database");
      this.isConnected = false;
    }
  }
  
  query(sql) {
    if (!this.isConnected) {
      throw new Error("Not connected to database");
    }
    
    this.queryCount++;
    console.log("Executing query " + this.queryCount + ": " + sql);
    return { success: true, queryId: this.queryCount };
  }
  
  static getInstance() {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }
}

// Usage - always returns same instance
const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();
const db3 = DatabaseConnection.getInstance();

console.log(db1 === db2); // true (same instance)
console.log(db2 === db3); // true (same instance)

db1.connect();
db2.query("SELECT * FROM users"); // Works because db1 and db2 are same instance
console.log("Query count:", db3.queryCount); // 1`}
                </code></pre>
              </div>
            </div>

            <div className="js-pattern-card">
              <h3>Factory Pattern</h3>
              <div className="js-code-example">
                <pre><code>
{`// Factory - Create objects without specifying exact class
class User {
  constructor(name, email, type) {
    this.name = name;
    this.email = email;
    this.type = type;
    this.permissions = [];
  }
}

class AdminUser extends User {
  constructor(name, email) {
    super(name, email, "admin");
    this.permissions = ["read", "write", "delete", "manage"];
  }
  
  manageUsers() {
    console.log("Admin " + this.name + " is managing users");
  }
}

class RegularUser extends User {
  constructor(name, email) {
    super(name, email, "regular");
    this.permissions = ["read"];
  }
  
  viewContent() {
    console.log("User " + this.name + " is viewing content");
  }
}

class ModeratorUser extends User {
  constructor(name, email) {
    super(name, email, "moderator");
    this.permissions = ["read", "write", "moderate"];
  }
  
  moderateContent() {
    console.log("Moderator " + this.name + " is moderating content");
  }
}

// User Factory
class UserFactory {
  static createUser(type, name, email) {
    switch (type.toLowerCase()) {
      case "admin":
        return new AdminUser(name, email);
      case "moderator":
        return new ModeratorUser(name, email);
      case "regular":
        return new RegularUser(name, email);
      default:
        throw new Error("Unknown user type: " + type);
    }
  }
  
  static createUsersFromConfig(config) {
    return config.map(userConfig => 
      this.createUser(userConfig.type, userConfig.name, userConfig.email)
    );
  }
}

// Usage
const admin = UserFactory.createUser("admin", "Alice", "alice@admin.com");
const user = UserFactory.createUser("regular", "Bob", "bob@user.com");
const moderator = UserFactory.createUser("moderator", "Carol", "carol@mod.com");

admin.manageUsers();         // "Admin Alice is managing users"
user.viewContent();          // "User Bob is viewing content"
moderator.moderateContent(); // "Moderator Carol is moderating content"

// Batch creation
const userConfigs = [
  { type: "admin", name: "Admin1", email: "admin1@test.com" },
  { type: "regular", name: "User1", email: "user1@test.com" },
  { type: "moderator", name: "Mod1", email: "mod1@test.com" }
];

const users = UserFactory.createUsersFromConfig(userConfigs);
console.log("Created users:", users.map(u => u.type + ": " + u.name));`}
                </code></pre>
              </div>
            </div>

            <div className="js-pattern-card">
              <h3>Observer Pattern</h3>
              <div className="js-code-example">
                <pre><code>
{`// Observer - Subject notifies observers of changes
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }
  
  unsubscribe(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
    }
  }
  
  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(data));
    }
  }
}

// Subject that emits events
class ShoppingCart extends EventEmitter {
  constructor() {
    super();
    this.items = [];
    this.total = 0;
  }
  
  addItem(item) {
    this.items.push(item);
    this.updateTotal();
    this.emit('itemAdded', { item, cart: this });
  }
  
  removeItem(itemId) {
    const index = this.items.findIndex(item => item.id === itemId);
    if (index > -1) {
      const removedItem = this.items.splice(index, 1)[0];
      this.updateTotal();
      this.emit('itemRemoved', { item: removedItem, cart: this });
    }
  }
  
  updateTotal() {
    this.total = this.items.reduce((sum, item) => sum + item.price, 0);
    this.emit('totalChanged', { total: this.total, cart: this });
  }
  
  clear() {
    this.items = [];
    this.total = 0;
    this.emit('cartCleared', { cart: this });
  }
}

// Observers
class CartDisplay {
  constructor(cart) {
    this.cart = cart;
    
    // Subscribe to cart events
    cart.subscribe('itemAdded', this.onItemAdded.bind(this));
    cart.subscribe('itemRemoved', this.onItemRemoved.bind(this));
    cart.subscribe('totalChanged', this.onTotalChanged.bind(this));
    cart.subscribe('cartCleared', this.onCartCleared.bind(this));
  }
  
  onItemAdded(data) {
    console.log("Display: Added " + data.item.name + " to cart");
    this.updateDisplay();
  }
  
  onItemRemoved(data) {
    console.log("Display: Removed " + data.item.name + " from cart");
    this.updateDisplay();
  }
  
  onTotalChanged(data) {
    console.log("Display: Total updated to $" + data.total.toFixed(2));
  }
  
  onCartCleared(data) {
    console.log("Display: Cart cleared");
    this.updateDisplay();
  }
  
  updateDisplay() {
    console.log("Display: Cart has " + this.cart.items.length + " items");
  }
}

class InventoryManager {
  constructor(cart) {
    this.inventory = new Map();
    cart.subscribe('itemAdded', this.onItemAdded.bind(this));
    cart.subscribe('itemRemoved', this.onItemRemoved.bind(this));
  }
  
  onItemAdded(data) {
    const currentStock = this.inventory.get(data.item.id) || 0;
    if (currentStock > 0) {
      this.inventory.set(data.item.id, currentStock - 1);
      console.log("Inventory: Stock for " + data.item.name + 
                  " reduced to " + (currentStock - 1));
    }
  }
  
  onItemRemoved(data) {
    const currentStock = this.inventory.get(data.item.id) || 0;
    this.inventory.set(data.item.id, currentStock + 1);
    console.log("Inventory: Stock for " + data.item.name + 
                " increased to " + (currentStock + 1));
  }
  
  setStock(itemId, quantity) {
    this.inventory.set(itemId, quantity);
  }
}

// Usage
const cart = new ShoppingCart();
const display = new CartDisplay(cart);
const inventory = new InventoryManager(cart);

// Set initial inventory
inventory.setStock(1, 10);
inventory.setStock(2, 5);

// Add items - observers are notified automatically
cart.addItem({ id: 1, name: "Laptop", price: 999.99 });
cart.addItem({ id: 2, name: "Mouse", price: 29.99 });
cart.removeItem(2);

console.log("Final total:", cart.total);`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>⭐ OOP Best Practices</h2>
          
          <div className="js-oop-practices">
            <div className="js-practice-group">
              <h3>✅ Design Principles</h3>
              <ul>
                <li><strong>Single Responsibility:</strong> Each class should have one reason to change</li>
                <li><strong>Open/Closed:</strong> Open for extension, closed for modification</li>
                <li><strong>Liskov Substitution:</strong> Subtypes should be substitutable for base types</li>
                <li><strong>Interface Segregation:</strong> Many specific interfaces better than one general</li>
                <li><strong>Dependency Inversion:</strong> Depend on abstractions, not concretions</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>
{`// ✅ Good OOP practices

// Single Responsibility - each class has one job
class UserValidator {
  validateEmail(email) {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
  }
  
  validateAge(age) {
    return age >= 0 && age <= 150;
  }
}

class UserRepository {
  constructor() {
    this.users = new Map();
  }
  
  save(user) {
    this.users.set(user.id, user);
  }
  
  findById(id) {
    return this.users.get(id);
  }
}

class UserService {
  constructor(validator, repository) {
    this.validator = validator;
    this.repository = repository;
  }
  
  createUser(userData) {
    if (!this.validator.validateEmail(userData.email)) {
      throw new Error("Invalid email");
    }
    
    if (!this.validator.validateAge(userData.age)) {
      throw new Error("Invalid age");
    }
    
    const user = new User(userData);
    this.repository.save(user);
    return user;
  }
}

// Open/Closed Principle - extend without modifying
class DiscountCalculator {
  calculate(amount, customer) {
    return amount; // Base implementation
  }
}

class PremiumDiscountCalculator extends DiscountCalculator {
  calculate(amount, customer) {
    return amount * 0.9; // 10% discount
  }
}

class VIPDiscountCalculator extends DiscountCalculator {
  calculate(amount, customer) {
    return amount * 0.8; // 20% discount
  }
}

// Composition over inheritance
class PaymentProcessor {
  constructor(logger, validator, gateway) {
    this.logger = logger;
    this.validator = validator;
    this.gateway = gateway;
  }
  
  process(payment) {
    this.logger.log("Processing payment: " + payment.amount);
    
    if (!this.validator.validate(payment)) {
      throw new Error("Invalid payment data");
    }
    
    return this.gateway.charge(payment);
  }
}

// Usage with dependency injection
const validator = new UserValidator();
const repository = new UserRepository();
const userService = new UserService(validator, repository);`}
                </code></pre>
              </div>
            </div>

            <div className="js-practice-group">
              <h3>❌ Common Pitfalls</h3>
              <ul>
                <li><strong>God objects:</strong> Classes that do too many things</li>
                <li><strong>Tight coupling:</strong> Classes too dependent on each other</li>
                <li><strong>Deep inheritance:</strong> Too many levels of inheritance</li>
                <li><strong>Leaky abstractions:</strong> Implementation details exposed</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>
{`// ❌ Bad practices to avoid

// God object - does everything
class BadUserManager {
  constructor() {
    this.users = [];
    this.database = new Database();
    this.emailService = new EmailService();
    this.logger = new Logger();
  }
  
  // Too many responsibilities in one class
  createUser(data) { /* validation, creation, saving, emailing, logging */ }
  validateEmail(email) { /* validation logic */ }
  sendEmail(user) { /* email logic */ }
  saveToDatabase(user) { /* database logic */ }
  generateReport() { /* reporting logic */ }
  authenticateUser(credentials) { /* auth logic */ }
  hashPassword(password) { /* crypto logic */ }
  // ... many more methods
}

// ✅ Better: Split responsibilities
class User { /* User data and basic methods */ }
class UserValidator { /* Validation logic */ }
class UserRepository { /* Database operations */ }
class EmailService { /* Email sending */ }
class AuthService { /* Authentication */ }
class ReportGenerator { /* Report generation */ }

// Tight coupling - hard to test and modify
class BadOrderProcessor {
  processOrder(order) {
    // Direct dependencies - hard to mock/test
    const paymentGateway = new PayPalGateway();
    const emailSender = new SMTPEmailSender();
    const logger = new FileLogger();
    
    // Tightly coupled to specific implementations
    paymentGateway.charge(order.total);
    emailSender.send(order.customerEmail, "Order confirmed");
    logger.log("Order processed");
  }
}

// ✅ Better: Dependency injection
class GoodOrderProcessor {
  constructor(paymentGateway, emailSender, logger) {
    this.paymentGateway = paymentGateway;
    this.emailSender = emailSender;
    this.logger = logger;
  }
  
  processOrder(order) {
    this.paymentGateway.charge(order.total);
    this.emailSender.send(order.customerEmail, "Order confirmed");
    this.logger.log("Order processed");
  }
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ObjectOrientedProgramming;
import React from 'react';
import '../Navbarweb.css';

function Objects() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🏗️ JavaScript Objects</h1>
        <p className="js-topic-subtitle">
          Master JavaScript objects - the foundation of complex data structures and object-oriented programming
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction to Objects */}
        <section className="js-topic-section">
          <h2>📦 What are Objects?</h2>
          <p>
            Objects in JavaScript are collections of key-value pairs that represent real-world entities.
            They're the building blocks for complex data structures and enable object-oriented programming.
          </p>
          
          <div className="js-object-visual">
            <div className="js-object-diagram">
              <h4>Object Structure:</h4>
              <div className="js-object-parts">
                <div className="js-object-key">Key (Property)</div>
                <div className="js-object-colon">:</div>
                <div className="js-object-value">Value</div>
              </div>
              <p className="js-diagram-note">
                Keys are strings (or Symbols), Values can be any data type
              </p>
            </div>
          </div>
        </section>

        {/* Creating Objects */}
        <section className="js-topic-section">
          <h2>🔨 Creating Objects</h2>
          
          <div className="js-creation-methods">
            <div className="js-creation-card">
              <h3>Object Literal Syntax</h3>
              <div className="js-code-example">
                <pre><code>{`// Basic object literal
const person = {
  name: "Alice Johnson",
  age: 28,
  city: "New York",
  isEmployed: true
};

console.log(person); 
// Output: {name: "Alice Johnson", age: 28, city: "New York", isEmployed: true}

// Empty object
const emptyObject = {};

// Object with different data types
const mixedObject = {
  // String property
  title: "JavaScript Developer",
  
  // Number properties
  experience: 5,
  salary: 75000,
  
  // Boolean property
  remote: true,
  
  // Array property
  skills: ["JavaScript", "React", "Node.js"],
  
  // Nested object
  address: {
    street: "123 Main St",
    city: "Seattle",
    zipCode: "98101"
  },
  
  // Function property (method)
  introduce: function() {
    return "Hi, I'm " + this.name;
  }
};

console.log("Title:", mixedObject.title);
console.log("Skills:", mixedObject.skills);
console.log("Address:", mixedObject.address.city);`}</code></pre>
              </div>
            </div>

            <div className="js-creation-card">
              <h3>Constructor Function</h3>
              <div className="js-code-example">
                <pre><code>{`// Constructor function (traditional way)
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
  
  this.start = function() {
    this.isRunning = true;
    return this.make + " " + this.model + " started!";
  };
  
  this.stop = function() {
    this.isRunning = false;
    return this.make + " " + this.model + " stopped!";
  };
}

// Creating instances with 'new' keyword
const car1 = new Car("Toyota", "Camry", 2022);
const car2 = new Car("Honda", "Civic", 2021);

console.log(car1.make); // Toyota
console.log(car1.start()); // Toyota Camry started!
console.log(car1.isRunning); // true

// Each instance is independent
console.log(car2.make); // Honda
console.log(car2.isRunning); // false (hasn't been started)

// Using Object.create()
const personPrototype = {
  greet: function() {
    return "Hello, I'm " + this.name;
  },
  
  setAge: function(newAge) {
    if (newAge > 0 && newAge < 150) {
      this.age = newAge;
    } else {
      console.log("Invalid age");
    }
  }
};

const john = Object.create(personPrototype);
john.name = "John Doe";
john.age = 35;

console.log(john.greet()); // Hello, I'm John Doe
john.setAge(40);
console.log(john.age); // 40`}</code></pre>
              </div>
            </div>

            <div className="js-creation-card">
              <h3>Class Syntax (ES6+)</h3>
              <div className="js-code-example">
                <pre><code>{`// Modern class syntax
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
    this.currentPage = 0;
  }
  
  // Methods
  read(pagesToRead) {
    if (this.currentPage + pagesToRead <= this.pages) {
      this.currentPage += pagesToRead;
      console.log("Read " + pagesToRead + " pages. Current page: " + this.currentPage);
      
      if (this.currentPage === this.pages) {
        this.isRead = true;
        console.log("Finished reading " + this.title + "!");
      }
    } else {
      console.log("Cannot read beyond the book length");
    }
  }
  
  getProgress() {
    const percentage = (this.currentPage / this.pages * 100).toFixed(1);
    return percentage + "% complete";
  }
  
  restart() {
    this.currentPage = 0;
    this.isRead = false;
    console.log("Restarted reading " + this.title);
  }
  
  // Static method (belongs to class, not instances)
  static compareBooks(book1, book2) {
    if (book1.pages > book2.pages) {
      return book1.title + " is longer than " + book2.title;
    } else if (book1.pages < book2.pages) {
      return book2.title + " is longer than " + book1.title;
    } else {
      return "Both books have the same length";
    }
  }
}

// Creating instances
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);

// Using methods
book1.read(50);
console.log(book1.getProgress()); // 27.8% complete

book2.read(100);
console.log(book2.getProgress()); // 35.6% complete

// Using static method
console.log(Book.compareBooks(book1, book2));
// Output: To Kill a Mockingbird is longer than The Great Gatsby`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Accessing Object Properties */}
        <section className="js-topic-section">
          <h2>🔍 Accessing Object Properties</h2>
          
          <div className="js-access-methods">
            <div className="js-access-card">
              <h3>Dot Notation vs Bracket Notation</h3>
              <div className="js-code-example">
                <pre><code>{`const student = {
  name: "Emma Wilson",
  age: 20,
  major: "Computer Science",
  "student id": "CS2023-001", // Property with space
  gpa: 3.8,
  courses: ["JavaScript", "Python", "Database Design"]
};

// Dot notation (most common)
console.log(student.name); // Emma Wilson
console.log(student.age); // 20
console.log(student.gpa); // 3.8

// Bracket notation (required for properties with spaces or special characters)
console.log(student["student id"]); // CS2023-001
console.log(student["name"]); // Emma Wilson (also works)

// Dynamic property access
const propertyName = "major";
console.log(student[propertyName]); // Computer Science

// Accessing nested properties
const userProfile = {
  personal: {
    firstName: "John",
    lastName: "Smith",
    contact: {
      email: "john@example.com",
      phone: "+1-555-0123"
    }
  },
  preferences: {
    theme: "dark",
    language: "English"
  }
};

console.log(userProfile.personal.firstName); // John
console.log(userProfile.personal.contact.email); // john@example.com
console.log(userProfile["preferences"]["theme"]); // dark

// Safe property access with optional chaining (ES2020)
console.log(userProfile.personal?.contact?.email); // john@example.com
console.log(userProfile.work?.department); // undefined (no error)`}</code></pre>
              </div>
            </div>

            <div className="js-access-card">
              <h3>Property Existence and Defaults</h3>
              <div className="js-code-example">
                <pre><code>{`const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  enableLogging: true
};

// Checking if property exists
console.log("apiUrl" in config); // true
console.log("database" in config); // false

// Using hasOwnProperty (checks own properties, not inherited)
console.log(config.hasOwnProperty("timeout")); // true
console.log(config.hasOwnProperty("toString")); // false (inherited)

// Providing default values
const theme = config.theme || "light"; // Use "light" if theme doesn't exist
console.log("Theme:", theme); // Theme: light

// Modern way with nullish coalescing
const maxRetries = config.maxRetries ?? 3; // Use 3 if maxRetries is null/undefined
console.log("Max retries:", maxRetries); // Max retries: 3

// Destructuring with defaults
const {
  apiUrl,
  timeout = 3000, // default if timeout doesn't exist
  retryCount = 1,  // default if retryCount doesn't exist
  enableCache = false // default if enableCache doesn't exist
} = config;

console.log("API URL:", apiUrl); // https://api.example.com
console.log("Timeout:", timeout); // 5000 (from object)
console.log("Retry count:", retryCount); // 1 (default)
console.log("Enable cache:", enableCache); // false (default)

// Nested destructuring with defaults
const settings = {
  ui: {
    theme: "dark",
    fontSize: 14
  }
};

const {
  ui: {
    theme = "light",
    fontSize = 12,
    showSidebar = true // doesn't exist in object
  } = {}
} = settings;

console.log("Theme:", theme); // dark
console.log("Font size:", fontSize); // 14
console.log("Show sidebar:", showSidebar); // true (default)`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Modifying Objects */}
        <section className="js-topic-section">
          <h2>✏️ Modifying Objects</h2>
          
          <div className="js-modify-examples">
            <div className="js-modify-card">
              <h3>Adding and Updating Properties</h3>
              <div className="js-code-example">
                <pre><code>{`const employee = {
  name: "Sarah Connor",
  department: "Engineering",
  salary: 80000
};

// Adding new properties
employee.position = "Senior Developer";
employee["start date"] = "2020-01-15";
employee.skills = ["JavaScript", "React", "Node.js"];

console.log(employee);
/* Output:
{
  name: "Sarah Connor",
  department: "Engineering", 
  salary: 80000,
  position: "Senior Developer",
  "start date": "2020-01-15",
  skills: ["JavaScript", "React", "Node.js"]
}
*/

// Updating existing properties
employee.salary = 85000; // Dot notation
employee["department"] = "Senior Engineering"; // Bracket notation

// Dynamic property updates
const propertyToUpdate = "position";
const newValue = "Lead Developer";
employee[propertyToUpdate] = newValue;

console.log("Updated salary:", employee.salary); // 85000
console.log("Updated position:", employee.position); // Lead Developer

// Adding methods
employee.getYearsOfService = function() {
  const currentYear = new Date().getFullYear();
  const startYear = new Date(this["start date"]).getFullYear();
  return currentYear - startYear;
};

employee.promote = function(newPosition, salaryIncrease) {
  this.position = newPosition;
  this.salary += salaryIncrease;
  return "Promoted to " + newPosition + " with new salary: $" + this.salary;
};

console.log("Years of service:", employee.getYearsOfService());
console.log(employee.promote("Engineering Manager", 15000));`}</code></pre>
              </div>
            </div>

            <div className="js-modify-card">
              <h3>Deleting Properties</h3>
              <div className="js-code-example">
                <pre><code>{`const product = {
  id: "PROD-001",
  name: "Laptop",
  price: 999.99,
  category: "Electronics",
  inStock: true,
  tempData: "This should be removed"
};

console.log("Before deletion:", Object.keys(product));
// ["id", "name", "price", "category", "inStock", "tempData"]

// Deleting a property
delete product.tempData;

console.log("After deletion:", Object.keys(product));
// ["id", "name", "price", "category", "inStock"]

// Check if property was deleted
console.log("tempData exists:", "tempData" in product); // false

// Deleting with bracket notation
delete product["inStock"];

console.log("Final properties:", Object.keys(product));
// ["id", "name", "price", "category"]

// Note: delete returns true if successful
const deleteResult = delete product.category;
console.log("Delete successful:", deleteResult); // true

// Cannot delete non-configurable properties
const obj = {};
Object.defineProperty(obj, "permanent", {
  value: "cannot delete",
  configurable: false
});

const canDelete = delete obj.permanent;
console.log("Can delete permanent property:", canDelete); // false
console.log("Permanent property still exists:", obj.permanent); // cannot delete`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Object Methods */}
        <section className="js-topic-section">
          <h2>🔧 Object Methods</h2>
          
          <div className="js-methods-examples">
            <div className="js-methods-card">
              <h3>Built-in Object Methods</h3>
              <div className="js-code-example">
                <pre><code>{`const inventory = {
  laptop: 15,
  mouse: 50,
  keyboard: 30,
  monitor: 8,
  speaker: 25
};

// Object.keys() - Get array of property names
const itemNames = Object.keys(inventory);
console.log("Items in inventory:", itemNames);
// ["laptop", "mouse", "keyboard", "monitor", "speaker"]

// Object.values() - Get array of property values
const quantities = Object.values(inventory);
console.log("Quantities:", quantities);
// [15, 50, 30, 8, 25]

// Object.entries() - Get array of [key, value] pairs
const entries = Object.entries(inventory);
console.log("Entries:", entries);
// [["laptop", 15], ["mouse", 50], ["keyboard", 30], ...]

// Practical use with entries
console.log("Inventory report:");
entries.forEach(([item, quantity]) => {
  const status = quantity > 20 ? "Well stocked" : "Low stock";
  console.log("- " + item + ": " + quantity + " (" + status + ")");
});

// Object.assign() - Copy properties from one object to another
const defaultSettings = {
  theme: "light",
  fontSize: 14,
  autoSave: true,
  notifications: false
};

const userSettings = {
  theme: "dark",
  fontSize: 16
};

// Merge objects (userSettings overrides defaultSettings)
const finalSettings = Object.assign({}, defaultSettings, userSettings);
console.log("Final settings:", finalSettings);
// {theme: "dark", fontSize: 16, autoSave: true, notifications: false}

// Modern way with spread operator (preferred)
const finalSettingsSpread = {...defaultSettings, ...userSettings};
console.log("With spread:", finalSettingsSpread);`}</code></pre>
              </div>
            </div>

            <div className="js-methods-card">
              <h3>Object Manipulation Methods</h3>
              <div className="js-code-example">
                <pre><code>{`// Object.freeze() - Make object immutable
const constants = {
  PI: 3.14159,
  GRAVITY: 9.8,
  LIGHT_SPEED: 299792458
};

Object.freeze(constants);

// Attempts to modify will fail (silently in non-strict mode)
constants.PI = 3; // This won't work
constants.newConstant = 42; // This won't work
delete constants.GRAVITY; // This won't work

console.log("PI is still:", constants.PI); // 3.14159

// Check if object is frozen
console.log("Is frozen:", Object.isFrozen(constants)); // true

// Object.seal() - Prevent adding/removing properties but allow modifications
const userProfile = {
  username: "johndoe",
  email: "john@example.com",
  score: 1250
};

Object.seal(userProfile);

// Can modify existing properties
userProfile.score = 1300; // Works
userProfile.email = "newemail@example.com"; // Works

// Cannot add or delete properties
userProfile.newProperty = "test"; // Won't work
delete userProfile.username; // Won't work

console.log("Sealed profile:", userProfile);
console.log("Is sealed:", Object.isSealed(userProfile)); // true

// Object.preventExtensions() - Only prevent adding new properties
const settings = {
  volume: 75,
  brightness: 80
};

Object.preventExtensions(settings);

// Can modify and delete existing properties
settings.volume = 90; // Works
delete settings.brightness; // Works

// Cannot add new properties
settings.contrast = 60; // Won't work

console.log("Final settings:", settings); // {volume: 90}
console.log("Is extensible:", Object.isExtensible(settings)); // false`}</code></pre>
              </div>
            </div>

            <div className="js-methods-card">
              <h3>Object Property Descriptors</h3>
              <div className="js-code-example">
                <pre><code>{`// Object.defineProperty() - Define property with specific attributes
const bankAccount = {};

Object.defineProperty(bankAccount, "balance", {
  value: 1000,
  writable: false,    // Cannot be changed
  enumerable: true,   // Shows up in for...in loops
  configurable: false // Cannot be deleted or reconfigured
});

Object.defineProperty(bankAccount, "accountNumber", {
  value: "ACC-123456",
  writable: false,
  enumerable: false,  // Won't show up in Object.keys()
  configurable: false
});

// Add a computed property (getter/setter)
Object.defineProperty(bankAccount, "formattedBalance", {
  get: function() {
    return "$" + this.balance.toLocaleString();
  },
  enumerable: true,
  configurable: true
});

console.log("Balance:", bankAccount.balance); // 1000
console.log("Formatted:", bankAccount.formattedBalance); // $1,000
console.log("Keys:", Object.keys(bankAccount)); // ["balance", "formattedBalance"]

// Try to modify (will fail silently)
bankAccount.balance = 2000;
console.log("Balance after attempt to change:", bankAccount.balance); // 1000

// Object.getOwnPropertyDescriptor() - Get property descriptor
const descriptor = Object.getOwnPropertyDescriptor(bankAccount, "balance");
console.log("Balance descriptor:", descriptor);
/* Output:
{
  value: 1000,
  writable: false,
  enumerable: true,
  configurable: false
}
*/

// Object.defineProperties() - Define multiple properties at once
const product = {};

Object.defineProperties(product, {
  name: {
    value: "Premium Widget",
    writable: true,
    enumerable: true
  },
  price: {
    value: 29.99,
    writable: true,
    enumerable: true
  },
  cost: {
    value: 15.50,
    writable: false,
    enumerable: false // Hidden from Object.keys()
  },
  profit: {
    get: function() {
      return this.price - this.cost;
    },
    enumerable: true
  }
});

console.log("Product:", product.name); // Premium Widget
console.log("Profit:", product.profit); // 14.49
console.log("Visible properties:", Object.keys(product)); // ["name", "price", "profit"]`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Object Iteration */}
        <section className="js-topic-section">
          <h2>🔄 Iterating Over Objects</h2>
          
          <div className="js-iteration-examples">
            <div className="js-iteration-card">
              <h3>Different Iteration Methods</h3>
              <div className="js-code-example">
                <pre><code>{`const restaurant = {
  name: "Bella Vista",
  cuisine: "Italian",
  rating: 4.5,
  priceRange: "$$",
  features: ["outdoor seating", "live music", "wine bar"]
};

// 1. for...in loop (iterates over enumerable properties)
console.log("Using for...in:");
for (const property in restaurant) {
  console.log(property + ": " + restaurant[property]);
}

// 2. Object.keys() with forEach
console.log("\\nUsing Object.keys():");
Object.keys(restaurant).forEach(key => {
  console.log(key + " -> " + restaurant[key]);
});

// 3. Object.entries() - most versatile
console.log("\\nUsing Object.entries():");
Object.entries(restaurant).forEach(([key, value]) => {
  if (Array.isArray(value)) {
    console.log(key + ": " + value.join(", "));
  } else {
    console.log(key + ": " + value);
  }
});

// 4. Object.values() - when you only need values
console.log("\\nUsing Object.values():");
const values = Object.values(restaurant);
values.forEach((value, index) => {
  console.log("Value " + index + ": " + value);
});

// Filtering object properties
console.log("\\nString properties only:");
const stringProperties = Object.entries(restaurant)
  .filter(([key, value]) => typeof value === "string")
  .forEach(([key, value]) => {
    console.log(key + ": " + value);
  });

// Converting object to array for advanced operations
const propertyInfo = Object.entries(restaurant).map(([key, value]) => ({
  property: key,
  type: typeof value,
  length: String(value).length
}));

console.log("\\nProperty information:");
propertyInfo.forEach(info => {
  console.log("- " + info.property + " (" + info.type + "), length: " + info.length);
});`}</code></pre>
              </div>
            </div>

            <div className="js-iteration-card">
              <h3>Advanced Iteration Patterns</h3>
              <div className="js-code-example">
                <pre><code>{`// Working with nested objects
const company = {
  name: "TechCorp",
  departments: {
    engineering: {
      employees: 45,
      budget: 2000000,
      projects: ["Web App", "Mobile App", "API"]
    },
    marketing: {
      employees: 12,
      budget: 500000,
      projects: ["Campaign A", "Campaign B"]
    },
    sales: {
      employees: 18,
      budget: 300000,
      projects: ["Q4 Push", "Enterprise"]
    }
  },
  founded: 2015
};

// Deep iteration through nested objects
function iterateDeep(obj, prefix = "") {
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? prefix + "." + key : key;
    
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      console.log(fullKey + " (object):");
      iterateDeep(value, fullKey);
    } else {
      console.log(fullKey + ": " + value);
    }
  }
}

console.log("Deep iteration:");
iterateDeep(company);

// Calculate totals across departments
console.log("\\nDepartment summary:");
let totalEmployees = 0;
let totalBudget = 0;

Object.entries(company.departments).forEach(([deptName, deptInfo]) => {
  console.log(deptName + ":");
  console.log("  Employees: " + deptInfo.employees);
  console.log("  Budget: $" + deptInfo.budget.toLocaleString());
  console.log("  Projects: " + deptInfo.projects.length);
  
  totalEmployees += deptInfo.employees;
  totalBudget += deptInfo.budget;
});

console.log("\\nCompany totals:");
console.log("Total employees: " + totalEmployees);
console.log("Total budget: $" + totalBudget.toLocaleString());

// Finding departments by criteria
const largeDepartments = Object.entries(company.departments)
  .filter(([name, info]) => info.employees > 15)
  .map(([name, info]) => name);

console.log("Large departments (>15 employees):", largeDepartments);

// Transform object structure
const departmentSummary = Object.fromEntries(
  Object.entries(company.departments).map(([name, info]) => [
    name,
    {
      size: info.employees > 20 ? "Large" : info.employees > 10 ? "Medium" : "Small",
      projectCount: info.projects.length,
      budgetPerEmployee: Math.round(info.budget / info.employees)
    }
  ])
);

console.log("\\nDepartment summary:");
console.log(departmentSummary);`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Object Comparison and Cloning */}
        <section className="js-topic-section">
          <h2>📋 Object Comparison and Cloning</h2>
          
          <div className="js-comparison-examples">
            <div className="js-comparison-card">
              <h3>Object Comparison</h3>
              <div className="js-code-example">
                <pre><code>{`// Objects are compared by reference, not value
const obj1 = {name: "Alice", age: 25};
const obj2 = {name: "Alice", age: 25};
const obj3 = obj1; // Same reference

console.log("obj1 === obj2:", obj1 === obj2); // false (different objects)
console.log("obj1 === obj3:", obj1 === obj3); // true (same reference)

// Shallow comparison function
function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  // Different number of properties
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  // Check each property
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  return true;
}

const person1 = {name: "Bob", age: 30, city: "NYC"};
const person2 = {name: "Bob", age: 30, city: "NYC"};
const person3 = {name: "Bob", age: 31, city: "NYC"};

console.log("Shallow equal (person1, person2):", shallowEqual(person1, person2)); // true
console.log("Shallow equal (person1, person3):", shallowEqual(person1, person3)); // false

// Deep comparison function (basic version)
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  
  if (obj1 == null || obj2 == null) return false;
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  
  return true;
}

const nested1 = {
  name: "Alice",
  address: {city: "Boston", zip: "02101"},
  hobbies: ["reading", "swimming"]
};

const nested2 = {
  name: "Alice", 
  address: {city: "Boston", zip: "02101"},
  hobbies: ["reading", "swimming"]
};

const nested3 = {
  name: "Alice",
  address: {city: "Boston", zip: "02102"}, // Different zip
  hobbies: ["reading", "swimming"]
};

console.log("Deep equal (nested1, nested2):", deepEqual(nested1, nested2)); // true
console.log("Deep equal (nested1, nested3):", deepEqual(nested1, nested3)); // false`}</code></pre>
              </div>
            </div>

            <div className="js-comparison-card">
              <h3>Object Cloning</h3>
              <div className="js-code-example">
                <pre><code>{`const original = {
  name: "Original Object",
  numbers: [1, 2, 3],
  settings: {
    theme: "dark",
    language: "en"
  },
  date: new Date("2023-01-01")
};

// 1. Shallow copy with Object.assign()
const shallowCopy1 = Object.assign({}, original);
// 2. Shallow copy with spread operator (preferred)
const shallowCopy2 = {...original};

console.log("Original:", original.name);
console.log("Shallow copy:", shallowCopy2.name);

// Modify nested property in shallow copy
shallowCopy2.settings.theme = "light";
console.log("Original theme after shallow copy change:", original.settings.theme); // "light" - modified!

// This is because nested objects are still shared references

// 3. Deep copy with JSON (limited - loses functions, dates become strings)
const jsonCopy = JSON.parse(JSON.stringify(original));
console.log("JSON copy date type:", typeof jsonCopy.date); // "string"

// 4. Deep copy with structuredClone (modern browsers)
// const deepCopy = structuredClone(original); // Uncomment if supported

// 5. Manual deep copy function
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item));
  }
  
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  
  return cloned;
}

const manualDeepCopy = deepClone(original);

// Test deep copy
manualDeepCopy.settings.theme = "blue";
manualDeepCopy.numbers.push(4);

console.log("Original theme after deep copy change:", original.settings.theme); // "dark" - unchanged
console.log("Original numbers after deep copy change:", original.numbers); // [1, 2, 3] - unchanged

console.log("Deep copy theme:", manualDeepCopy.settings.theme); // "blue"
console.log("Deep copy numbers:", manualDeepCopy.numbers); // [1, 2, 3, 4]

// Copying with additional properties
const enhanced = {
  ...original,
  id: "enhanced-001",
  version: "2.0",
  settings: {
    ...original.settings,
    autoSave: true // Add new property to nested object
  }
};

console.log("Enhanced object:", enhanced);`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>⭐ Object Best Practices</h2>
          
          <div className="js-best-practices">
            <div className="js-practice-group">
              <h3>✅ Recommended Practices</h3>
              <ul>
                <li><strong>Use descriptive property names:</strong> Clear, meaningful keys improve code readability</li>
                <li><strong>Group related properties:</strong> Organize related data into nested objects</li>
                <li><strong>Use const for object references:</strong> Prevents accidental reassignment</li>
                <li><strong>Validate object structure:</strong> Check for required properties before use</li>
                <li><strong>Use optional chaining:</strong> Safely access nested properties</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>{`// ✅ Good practices
const user = {
  // Descriptive property names
  firstName: "John",
  lastName: "Doe",
  
  // Grouped related properties
  contact: {
    email: "john@example.com",
    phone: "+1-555-0123",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "90210"
    }
  },
  
  // Use arrays for lists
  preferences: ["email-notifications", "dark-mode"],
  
  // Methods for behavior
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
  
  hasPreference(pref) {
    return this.preferences.includes(pref);
  }
};

// Safe property access
const email = user.contact?.email;
const street = user.contact?.address?.street;

// Property validation
function validateUser(userObj) {
  const required = ["firstName", "lastName", "contact"];
  
  for (const prop of required) {
    if (!(prop in userObj)) {
      throw new Error("Missing required property: " + prop);
    }
  }
  
  if (!userObj.contact.email) {
    throw new Error("Email is required in contact info");
  }
  
  return true;
}

try {
  validateUser(user);
  console.log("User is valid");
} catch (error) {
  console.log("Validation error:", error.message);
}`}</code></pre>
              </div>
            </div>

            <div className="js-practice-group">
              <h3>❌ Common Pitfalls</h3>
              <ul>
                <li><strong>Mutating objects unintentionally:</strong> Always be aware of reference vs value</li>
                <li><strong>Using for...in on arrays:</strong> Use for...of or array methods instead</li>
                <li><strong>Assuming property order:</strong> Object property order isn't guaranteed in older JS</li>
                <li><strong>Deep nested structures:</strong> Can become hard to maintain and debug</li>
              </ul>
              
              <div className="js-code-example">
                <pre><code>{`// ❌ Common mistakes to avoid

// 1. Mutating shared objects
const originalConfig = {theme: "light", debug: false};
const userConfig = originalConfig; // Same reference!

userConfig.theme = "dark"; // Modifies original too
console.log("Original theme:", originalConfig.theme); // "dark" - unexpected!

// ✅ Better: Create a copy
const userConfigCopy = {...originalConfig};
userConfigCopy.theme = "dark";
console.log("Original theme (safe):", originalConfig.theme); // "light"

// 2. Incorrect property checking
const data = {count: 0, active: false};

// ❌ Wrong way (0 and false are falsy)
if (data.count) {
  console.log("Has count"); // Won't execute!
}

// ✅ Correct way
if ("count" in data) {
  console.log("Has count property"); // Will execute
}

if (data.count !== undefined) {
  console.log("Count is defined"); // Will execute
}

// 3. Modifying object during iteration
const scores = {alice: 85, bob: 92, charlie: 78};

// ❌ Dangerous: modifying during iteration
for (const name in scores) {
  if (scores[name] < 80) {
    delete scores[name]; // Can cause issues
  }
}

// ✅ Better: collect keys first, then modify
const keysToDelete = [];
for (const name in scores) {
  if (scores[name] < 80) {
    keysToDelete.push(name);
  }
}

keysToDelete.forEach(key => delete scores[key]);

// Or use filtering to create new object
const passingScores = Object.fromEntries(
  Object.entries(scores).filter(([name, score]) => score >= 80)
);`}</code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Objects;
import React from 'react';
import '../Navbarweb.css';

function ES6Features() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>✨ ES6+ Features</h1>
        <p className="js-topic-subtitle">
          Master modern JavaScript: destructuring, modules, symbols, iterators, generators, and advanced ES6+ syntax
        </p>
      </div>

      <div className="js-topic-content">
        {/* Destructuring */}
        <section className="js-topic-section">
          <h2>📦 Destructuring Assignment</h2>
          <p>
            Destructuring allows you to extract values from arrays or objects into distinct variables.
            It provides a clean and concise syntax for working with complex data structures and
            is widely used in modern JavaScript development.
          </p>
          
          <div className="js-destructuring-examples">
            <div className="js-destructuring-card">
              <h3>Array Destructuring</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic array destructuring
const numbers = [1, 2, 3, 4, 5];

// Traditional approach
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];

// Destructuring approach
const [a, b, c] = numbers;
console.log(a, b, c); // 1, 2, 3

// Skipping elements
const [x, , z] = numbers; // Skip second element
console.log(x, z); // 1, 3

// Rest syntax
const [head, ...tail] = numbers;
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Default values
const [p, q, r, s, t, u = 10] = numbers;
console.log(u); // 10 (default value since numbers[5] is undefined)

// Swapping variables
let var1 = 'hello';
let var2 = 'world';
[var1, var2] = [var2, var1];
console.log(var1, var2); // 'world', 'hello'

// Nested array destructuring
const nested = [[1, 2], [3, 4], [5, 6]];
const [[firstFirst, firstSecond], [secondFirst]] = nested;
console.log(firstFirst, firstSecond, secondFirst); // 1, 2, 3

// Function return values
function getCoordinates() {
  return [10, 20];
}

const [xCoord, yCoord] = getCoordinates();
console.log('Coordinates:', xCoord, yCoord); // 10, 20

// Destructuring from function parameters
function processArray([first, second, ...rest]) {
  console.log('First:', first);
  console.log('Second:', second);
  console.log('Rest:', rest);
}

processArray([1, 2, 3, 4, 5]);

// Working with strings (iterable)
const str = 'hello';
const [char1, char2, ...restChars] = str;
console.log(char1, char2, restChars); // 'h', 'e', ['l', 'l', 'o']

// Destructuring with Map and Set
const mySet = new Set([1, 2, 3]);
const [setFirst, setSecond] = mySet;
console.log(setFirst, setSecond); // 1, 2

const myMap = new Map([['a', 1], ['b', 2]]);
const [[key1, value1], [key2, value2]] = myMap;
console.log(key1, value1, key2, value2); // 'a', 1, 'b', 2`}
                </code></pre>
              </div>
            </div>

            <div className="js-destructuring-card">
              <h3>Object Destructuring</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic object destructuring
const person = {
  name: 'John Doe',
  age: 30,
  city: 'New York',
  country: 'USA'
};

// Traditional approach
const name = person.name;
const age = person.age;

// Destructuring approach
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // 'John Doe', 30

// Shorthand (when variable names match property names)
const { city, country } = person;
console.log(city, country); // 'New York', 'USA'

// Default values
const { height = 180, weight = 70 } = person;
console.log(height, weight); // 180, 70 (defaults used)

// Rest syntax with objects
const { name: n, ...otherProps } = person;
console.log(n); // 'John Doe'
console.log(otherProps); // { age: 30, city: 'New York', country: 'USA' }

// Nested object destructuring
const user = {
  id: 123,
  profile: {
    personal: {
      firstName: 'Jane',
      lastName: 'Smith'
    },
    contact: {
      email: 'jane@example.com',
      phone: '123-456-7890'
    }
  },
  preferences: {
    theme: 'dark',
    notifications: true
  }
};

// Deep destructuring
const {
  profile: {
    personal: { firstName, lastName },
    contact: { email }
  },
  preferences: { theme }
} = user;

console.log(firstName, lastName, email, theme);

// Destructuring function parameters
function createUser({ name, email, age = 25, isAdmin = false }) {
  return {
    id: Date.now(),
    name,
    email,
    age,
    isAdmin,
    createdAt: new Date()
  };
}

const newUser = createUser({
  name: 'Bob Johnson',
  email: 'bob@example.com',
  isAdmin: true
});

console.log(newUser);

// Destructuring in function parameters with nested objects
function processUserData({
  user: { name, email },
  settings: { theme = 'light', lang = 'en' } = {},
  metadata = {}
}) {
  console.log('Processing:', name, email, theme, lang, metadata);
}

processUserData({
  user: { name: 'Alice', email: 'alice@example.com' },
  settings: { theme: 'dark' }
});

// Computed property names in destructuring
const prop = 'dynamicProperty';
const obj = { dynamicProperty: 'value' };
const { [prop]: dynamicValue } = obj;
console.log(dynamicValue); // 'value'

// Mixed array and object destructuring
const complexData = {
  users: [
    { name: 'John', scores: [85, 92, 78] },
    { name: 'Jane', scores: [91, 87, 94] }
  ]
};

const {
  users: [
    { name: userName1, scores: [score1, score2] },
    { name: userName2 }
  ]
} = complexData;

console.log(userName1, score1, score2); // 'John', 85, 92
console.log(userName2); // 'Jane'

// Destructuring assignment (not declaration)
let a, b;
({ a, b } = { a: 10, b: 20 }); // Note the parentheses!
console.log(a, b); // 10, 20`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Template Literals and Tagged Templates */}
        <section className="js-topic-section">
          <h2>🏷️ Template Literals & Tagged Templates</h2>
          
          <div className="js-template-examples">
            <div className="js-template-card">
              <h3>Template Literals</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic template literals
const name = 'John';
const age = 30;

// Old way with string concatenation
const message1 = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template literal way
const message2 = \`Hello, my name is \${name} and I am \${age} years old.\`;
console.log(message2);

// Multi-line strings
const multiline = \`
  This is a multi-line string
  that preserves line breaks
  and indentation.
\`;
console.log(multiline);

// Expression evaluation
const a = 10;
const b = 20;
const mathResult = \`The sum of \${a} and \${b} is \${a + b}\`;
console.log(mathResult); // 'The sum of 10 and 20 is 30'

// Function calls in templates
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

const price = 1234.56;
const priceMessage = \`The product costs \${formatCurrency(price)}\`;
console.log(priceMessage); // 'The product costs $1,234.56'

// Conditional expressions
const user = { name: 'Alice', isAdmin: true };
const greeting = \`Welcome, \${user.name}! \${user.isAdmin ? 'You have admin privileges.' : 'You are a regular user.'}\`;
console.log(greeting);

// Nested template literals
const users = ['Alice', 'Bob', 'Charlie'];
const userList = \`
  <ul>
    \${users.map(user => \`<li>\${user}</li>\`).join('')}
  </ul>
\`;
console.log(userList);

// Raw strings (preserving escape sequences)
const rawString = String.raw\`This is a raw string with \\n and \\t\`;
console.log(rawString); // Outputs: This is a raw string with \\n and \\t`}
                </code></pre>
              </div>
            </div>

            <div className="js-template-card">
              <h3>Tagged Template Literals</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic tagged template
function simpleTag(strings, ...values) {
  console.log('Strings:', strings);
  console.log('Values:', values);
  
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] || '');
  }, '');
}

const name = 'John';
const age = 30;
const result = simpleTag\`Hello \${name}, you are \${age} years old!\`;
console.log(result);

// HTML escaping tag
function html(strings, ...values) {
  const escapeHtml = (str) => {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };
  
  return strings.reduce((result, string, i) => {
    const value = values[i] ? escapeHtml(values[i]) : '';
    return result + string + value;
  }, '');
}

const userInput = '<script>alert("XSS")</script>';
const safeHtml = html\`<div>User input: \${userInput}</div>\`;
console.log(safeHtml); // XSS attempt is escaped

// SQL template tag (for demonstration - use proper libraries in production)
function sql(strings, ...values) {
  const escapeValue = (value) => {
    if (typeof value === 'string') {
      return "'" + value.replace(/'/g, "''") + "'";
    }
    if (typeof value === 'number') {
      return value.toString();
    }
    if (value === null || value === undefined) {
      return 'NULL';
    }
    return "'" + String(value).replace(/'/g, "''") + "'";
  };
  
  return strings.reduce((query, string, i) => {
    const value = values[i] ? escapeValue(values[i]) : '';
    return query + string + value;
  }, '');
}

const userId = 123;
const userName = "John O'Connor";
const query = sql\`SELECT * FROM users WHERE id = \${userId} AND name = \${userName}\`;
console.log(query);

// Styling/CSS template tag
function css(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] || '';
    return result + string + value;
  }, '');
}

const primaryColor = '#3498db';
const fontSize = '16px';
const styles = css\`
  .button {
    background-color: \${primaryColor};
    font-size: \${fontSize};
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
  }
\`;
console.log(styles);

// Internationalization tag
function i18n(strings, ...values) {
  const translations = {
    'Hello {{name}}, you have {{count}} messages': {
      'es': 'Hola {{name}}, tienes {{count}} mensajes',
      'fr': 'Bonjour {{name}}, vous avez {{count}} messages'
    }
  };
  
  const template = strings.join('{{}}');
  const currentLang = 'es'; // This would come from app state
  
  let translated = translations[template] && translations[template][currentLang] 
    ? translations[template][currentLang] 
    : template;
  
  values.forEach((value, index) => {
    translated = translated.replace('{{}}', value);
  });
  
  return translated;
}

const messageCount = 5;
const translatedMessage = i18n\`Hello \${name}, you have \${messageCount} messages\`;
console.log(translatedMessage);

// Debug/logging tag
function debug(strings, ...values) {
  console.group('🐛 Debug Template');
  
  strings.forEach((string, i) => {
    if (string) console.log('String', i + ':', JSON.stringify(string));
    if (values[i] !== undefined) {
      console.log('Value', i + ':', values[i], typeof values[i]);
    }
  });
  
  const result = strings.reduce((acc, string, i) => {
    return acc + string + (values[i] || '');
  }, '');
  
  console.log('Final result:', result);
  console.groupEnd();
  
  return result;
}

const debugResult = debug\`User \${name} has \${age} years\`;`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="js-topic-section">
          <h2>📦 ES6 Modules</h2>
          
          <div className="js-modules-examples">
            <div className="js-modules-card">
              <h3>Import and Export Syntax</h3>
              <div className="js-code-example">
                <pre><code>
{`// ========== EXPORT EXAMPLES ==========

// Named exports (multiple exports per module)
// math.js
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Export later (alternative syntax)
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

export { subtract, divide };

// Export with different name
const power = (base, exponent) => Math.pow(base, exponent);
export { power as pow };

// ========== DEFAULT EXPORTS ==========

// utils.js - One default export per module
class Calculator {
  add(a, b) { return a + b; }
  subtract(a, b) { return a - b; }
}

export default Calculator;

// Alternative default export syntax
export default function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

// Mixed named and default exports
// user.js
export default class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest'
};

export function validateEmail(email) {
  return email.includes('@');
}

// ========== IMPORT EXAMPLES ==========

// Named imports
import { add, multiply, PI } from './math.js';

console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20
console.log(PI); // 3.14159

// Import with different name
import { pow as power } from './math.js';
console.log(power(2, 3)); // 8

// Import all named exports
import * as Math from './math.js';
console.log(Math.add(1, 2));
console.log(Math.PI);

// Default import
import Calculator from './utils.js';
const calc = new Calculator();

// Mixed imports
import User, { USER_ROLES, validateEmail } from './user.js';

const user = new User('John', 'john@example.com');
console.log(USER_ROLES.ADMIN);
console.log(validateEmail(user.email));

// Import default with custom name
import MyCalculator from './utils.js';

// ========== DYNAMIC IMPORTS ==========

// Dynamic import (returns a Promise)
async function loadMathModule() {
  try {
    const mathModule = await import('./math.js');
    console.log(mathModule.add(1, 2));
    console.log(mathModule.PI);
  } catch (error) {
    console.error('Failed to load math module:', error);
  }
}

// Conditional loading
async function loadFeature(featureName) {
  if (featureName === 'advanced-math') {
    const module = await import('./advanced-math.js');
    return module.default;
  } else if (featureName === 'graphics') {
    const module = await import('./graphics.js');
    return module;
  }
}

// Dynamic import with destructuring
async function useDynamicImport() {
  const { add, multiply } = await import('./math.js');
  console.log(add(5, 3));
}

// ========== MODULE PATTERNS ==========

// Barrel exports (index.js)
// Re-export from multiple modules
export { add, multiply, PI } from './math.js';
export { default as Calculator } from './calculator.js';
export { User, validateEmail } from './user.js';

// Now you can import everything from one place:
// import { add, Calculator, User } from './index.js';

// Module with side effects
// logger.js
console.log('Logger module loaded');

// This will run when the module is imported
window.globalLogger = {
  log: (message) => console.log('[LOG]', message),
  error: (message) => console.error('[ERROR]', message)
};

// Import for side effects only
import './logger.js';

// ========== REAL-WORLD EXAMPLES ==========

// API module
// api.js
const BASE_URL = 'https://api.example.com';

class APIClient {
  async get(endpoint) {
    const response = await fetch(BASE_URL + endpoint);
    return response.json();
  }
  
  async post(endpoint, data) {
    const response = await fetch(BASE_URL + endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
}

export default APIClient;

export const endpoints = {
  users: '/users',
  posts: '/posts',
  comments: '/comments'
};

// Configuration module
// config.js
const config = {
  development: {
    apiUrl: 'http://localhost:3000',
    debug: true
  },
  production: {
    apiUrl: 'https://api.myapp.com',
    debug: false
  }
};

export default config[process.env.NODE_ENV || 'development'];

// Utilities module
// utils.js
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// Main application file
// app.js
import APIClient, { endpoints } from './api.js';
import config from './config.js';
import { debounce, throttle } from './utils.js';

const api = new APIClient();

// Use imported modules
const debouncedSearch = debounce(async (query) => {
  const results = await api.get(endpoints.users + '?search=' + query);
  console.log('Search results:', results);
}, 300);`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Symbols */}
        <section className="js-topic-section">
          <h2>🔣 Symbols</h2>
          
          <div className="js-symbols-examples">
            <div className="js-symbols-card">
              <h3>Symbol Basics and Usage</h3>
              <div className="js-code-example">
                <pre><code>
{`// Creating symbols
const symbol1 = Symbol();
const symbol2 = Symbol('description');
const symbol3 = Symbol('description'); // Different from symbol2!

console.log(symbol1); // Symbol()
console.log(symbol2); // Symbol(description)
console.log(symbol2 === symbol3); // false - symbols are always unique

// Symbol properties
console.log(typeof symbol1); // 'symbol'
console.log(symbol2.toString()); // 'Symbol(description)'
console.log(symbol2.description); // 'description'

// Using symbols as object keys
const obj = {};
const sym1 = Symbol('prop1');
const sym2 = Symbol('prop2');

obj[sym1] = 'value1';
obj[sym2] = 'value2';
obj.regularProp = 'regular value';

console.log(obj[sym1]); // 'value1'
console.log(obj[sym2]); // 'value2'

// Symbols are not enumerable in for...in loops
for (let key in obj) {
  console.log(key); // Only logs 'regularProp'
}

// Getting symbol properties
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(prop1), Symbol(prop2)]

// Global symbol registry
const globalSym1 = Symbol.for('global.symbol');
const globalSym2 = Symbol.for('global.symbol'); // Same as globalSym1
console.log(globalSym1 === globalSym2); // true

// Get key for global symbol
console.log(Symbol.keyFor(globalSym1)); // 'global.symbol'
console.log(Symbol.keyFor(symbol1)); // undefined (not global)

// Well-known symbols
const myIterable = {
  data: [1, 2, 3, 4, 5],
  
  // Make object iterable using Symbol.iterator
  [Symbol.iterator]: function() {
    let index = 0;
    const data = this.data;
    
    return {
      next: function() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// Now we can use for...of with our object
for (let value of myIterable) {
  console.log(value); // 1, 2, 3, 4, 5
}

// Symbol.toStringTag - customize Object.prototype.toString()
class CustomClass {
  get [Symbol.toStringTag]() {
    return 'CustomClass';
  }
}

const instance = new CustomClass();
console.log(Object.prototype.toString.call(instance)); // '[object CustomClass]'

// Symbol.hasInstance - customize instanceof behavior
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

console.log([] instanceof MyArray); // true
console.log({} instanceof MyArray); // false

// Private-like properties with symbols
const _private = Symbol('private');
const _secret = Symbol('secret');

class SecureClass {
  constructor(publicData, privateData) {
    this.publicData = publicData;
    this[_private] = privateData;
    this[_secret] = 'top secret';
  }
  
  getPrivateData() {
    return this[_private];
  }
  
  static getPrivateSymbol() {
    return _private; // Only expose if needed
  }
}

const secure = new SecureClass('public info', 'private info');
console.log(secure.publicData); // 'public info'
console.log(secure[_private]); // 'private info' (if you have access to the symbol)
console.log(secure._private); // undefined

// Symbol-based constants (better than strings)
const COLORS = {
  RED: Symbol('red'),
  GREEN: Symbol('green'),
  BLUE: Symbol('blue')
};

function processColor(color) {
  switch (color) {
    case COLORS.RED:
      return 'Processing red color';
    case COLORS.GREEN:
      return 'Processing green color';
    case COLORS.BLUE:
      return 'Processing blue color';
    default:
      throw new Error('Unknown color');
  }
}

console.log(processColor(COLORS.RED));

// Symbol for method names (avoiding conflicts)
const CALCULATE = Symbol('calculate');
const RESET = Symbol('reset');

class Calculator {
  constructor() {
    this.value = 0;
  }
  
  [CALCULATE](operation, operand) {
    switch (operation) {
      case 'add':
        this.value += operand;
        break;
      case 'multiply':
        this.value *= operand;
        break;
    }
    return this;
  }
  
  [RESET]() {
    this.value = 0;
    return this;
  }
  
  // Public methods that use the symbol methods
  add(operand) {
    return this[CALCULATE]('add', operand);
  }
  
  multiply(operand) {
    return this[CALCULATE]('multiply', operand);
  }
  
  reset() {
    return this[RESET]();
  }
  
  getValue() {
    return this.value;
  }
}

const calc = new Calculator();
console.log(calc.add(5).multiply(3).getValue()); // 15

// Advanced symbol usage
class EventEmitter {
  constructor() {
    this[Symbol.for('events')] = new Map();
  }
  
  on(event, listener) {
    const events = this[Symbol.for('events')];
    if (!events.has(event)) {
      events.set(event, []);
    }
    events.get(event).push(listener);
    return this;
  }
  
  emit(event, ...args) {
    const events = this[Symbol.for('events')];
    const listeners = events.get(event) || [];
    listeners.forEach(listener => listener.apply(this, args));
    return this;
  }
  
  // Symbol.species for subclass constructor
  static get [Symbol.species]() {
    return this;
  }
}

// Symbol-based registry pattern
const SymbolRegistry = (() => {
  const registry = new Map();
  
  return {
    create(key) {
      if (!registry.has(key)) {
        registry.set(key, Symbol(key));
      }
      return registry.get(key);
    },
    
    get(key) {
      return registry.get(key);
    },
    
    has(key) {
      return registry.has(key);
    }
  };
})();

// Use the registry
const ACTION_TYPES = {
  USER_LOGIN: SymbolRegistry.create('USER_LOGIN'),
  USER_LOGOUT: SymbolRegistry.create('USER_LOGOUT'),
  DATA_FETCH: SymbolRegistry.create('DATA_FETCH')
};

console.log(ACTION_TYPES.USER_LOGIN === SymbolRegistry.get('USER_LOGIN')); // true`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Iterators and Generators */}
        <section className="js-topic-section">
          <h2>🔄 Iterators & Generators</h2>
          
          <div className="js-iterators-examples">
            <div className="js-iterators-card">
              <h3>Iterators</h3>
              <div className="js-code-example">
                <pre><code>
{`// Understanding iterators
const array = [1, 2, 3];
const iterator = array[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Custom iterator
function createRangeIterator(start, end) {
  let current = start;
  
  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      } else {
        return { done: true };
      }
    }
  };
}

const rangeIterator = createRangeIterator(1, 3);
console.log(rangeIterator.next()); // { value: 1, done: false }
console.log(rangeIterator.next()); // { value: 2, done: false }
console.log(rangeIterator.next()); // { value: 3, done: false }
console.log(rangeIterator.next()); // { done: true }

// Making objects iterable
class NumberSequence {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}

const sequence = new NumberSequence(1, 5);

// Now we can use for...of
for (let num of sequence) {
  console.log(num); // 1, 2, 3, 4, 5
}

// Or spread operator
console.log([...sequence]); // [1, 2, 3, 4, 5]

// Complex iterator example
class FibonacciSequence {
  constructor(limit) {
    this.limit = limit;
  }
  
  [Symbol.iterator]() {
    let prev = 0;
    let curr = 1;
    let count = 0;
    const limit = this.limit;
    
    return {
      next() {
        if (count < limit) {
          count++;
          if (count === 1) return { value: prev, done: false };
          if (count === 2) return { value: curr, done: false };
          
          const next = prev + curr;
          prev = curr;
          curr = next;
          return { value: next, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}

const fibonacci = new FibonacciSequence(8);
console.log([...fibonacci]); // [0, 1, 1, 2, 3, 5, 8, 13]`}
                </code></pre>
              </div>
            </div>

            <div className="js-iterators-card">
              <h3>Generators</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic generator function
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = simpleGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Generator with parameters and return
function* generatorWithParams(max) {
  let count = 0;
  while (count < max) {
    const value = yield count++;
    console.log('Received value:', value);
  }
  return 'Generator finished';
}

const paramGen = generatorWithParams(3);
console.log(paramGen.next());      // { value: 0, done: false }
console.log(paramGen.next('a'));   // Logs: Received value: a
                                   // { value: 1, done: false }
console.log(paramGen.next('b'));   // Logs: Received value: b
                                   // { value: 2, done: false }
console.log(paramGen.next('c'));   // Logs: Received value: c
                                   // { value: 'Generator finished', done: true }

// Generator for ranges
function* range(start, end, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

console.log([...range(1, 10, 2)]); // [1, 3, 5, 7, 9]

// Infinite generators
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

function* take(n, iterable) {
  let count = 0;
  for (let value of iterable) {
    if (count >= n) break;
    yield value;
    count++;
  }
}

const infinite = infiniteSequence();
console.log([...take(5, infinite)]); // [0, 1, 2, 3, 4]

// Fibonacci generator
function* fibonacci() {
  let prev = 0, curr = 1;
  yield prev;
  yield curr;
  
  while (true) {
    const next = prev + curr;
    yield next;
    prev = curr;
    curr = next;
  }
}

const fibGen = fibonacci();
console.log([...take(10, fibGen)]); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Generator delegation with yield*
function* generator1() {
  yield 1;
  yield 2;
}

function* generator2() {
  yield 3;
  yield 4;
}

function* combinedGenerator() {
  yield* generator1();
  yield* generator2();
  yield 5;
}

console.log([...combinedGenerator()]); // [1, 2, 3, 4, 5]

// Async generators (ES2018)
async function* asyncGenerator() {
  for (let i = 1; i <= 3; i++) {
    await new Promise(resolve => setTimeout(resolve, 100));
    yield i;
  }
}

// Consume async generator
async function consumeAsyncGenerator() {
  for await (let value of asyncGenerator()) {
    console.log('Async value:', value);
  }
}

// Generator for tree traversal
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  
  *inorderTraversal() {
    if (this.left) {
      yield* this.left.inorderTraversal();
    }
    yield this.value;
    if (this.right) {
      yield* this.right.inorderTraversal();
    }
  }
  
  *preorderTraversal() {
    yield this.value;
    if (this.left) {
      yield* this.left.preorderTraversal();
    }
    if (this.right) {
      yield* this.right.preorderTraversal();
    }
  }
}

// Create a binary tree
const root = new TreeNode(4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6, new TreeNode(5), new TreeNode(7))
);

console.log('Inorder:', [...root.inorderTraversal()]);   // [1, 2, 3, 4, 5, 6, 7]
console.log('Preorder:', [...root.preorderTraversal()]); // [4, 2, 1, 3, 6, 5, 7]

// Generator for pagination
function* paginate(items, pageSize) {
  for (let i = 0; i < items.length; i += pageSize) {
    yield items.slice(i, i + pageSize);
  }
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pages = paginate(data, 3);

for (let page of pages) {
  console.log('Page:', page); // [1,2,3], [4,5,6], [7,8,9], [10]
}

// Generator with error handling
function* errorHandlingGenerator() {
  try {
    yield 1;
    yield 2;
    throw new Error('Generator error');
    yield 3; // This won't be reached
  } catch (error) {
    console.log('Caught in generator:', error.message);
    yield 'error handled';
  }
}

const errorGen = errorHandlingGenerator();
console.log(errorGen.next()); // { value: 1, done: false }
console.log(errorGen.next()); // { value: 2, done: false }
console.log(errorGen.next()); // Logs error, then { value: 'error handled', done: false }

// Generator for state machine
function* stateMachine() {
  let state = 'idle';
  
  while (true) {
    switch (state) {
      case 'idle':
        console.log('State: Idle');
        const action = yield 'waiting for action';
        if (action === 'start') state = 'running';
        break;
        
      case 'running':
        console.log('State: Running');
        const command = yield 'processing';
        if (command === 'stop') state = 'idle';
        else if (command === 'pause') state = 'paused';
        break;
        
      case 'paused':
        console.log('State: Paused');
        const resume = yield 'paused';
        if (resume === 'resume') state = 'running';
        else if (resume === 'stop') state = 'idle';
        break;
    }
  }
}

const machine = stateMachine();
console.log(machine.next());           // State: Idle, { value: 'waiting for action', done: false }
console.log(machine.next('start'));   // State: Running, { value: 'processing', done: false }
console.log(machine.next('pause'));   // State: Paused, { value: 'paused', done: false }
console.log(machine.next('resume'));  // State: Running, { value: 'processing', done: false }`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced ES6+ Features */}
        <section className="js-topic-section">
          <h2>🚀 Advanced ES6+ Features</h2>
          
          <div className="js-advanced-examples">
            <div className="js-advanced-card">
              <h3>Classes and Inheritance</h3>
              <div className="js-code-example">
                <pre><code>
{`// ES6 Classes
class Person {
  // Public fields (ES2022)
  name = '';
  age = 0;
  
  // Private fields (ES2022)
  #id = Math.random().toString(36).substr(2, 9);
  #secrets = [];
  
  // Static field
  static species = 'Homo sapiens';
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Methods
  introduce() {
    return \`Hi, I'm \${this.name} and I'm \${this.age} years old.\`;
  }
  
  // Getter
  get id() {
    return this.#id;
  }
  
  // Setter
  set age(value) {
    if (value < 0 || value > 150) {
      throw new Error('Invalid age');
    }
    this.age = value;
  }
  
  // Private method
  #addSecret(secret) {
    this.#secrets.push(secret);
  }
  
  // Public method that uses private method
  confide(secret) {
    this.#addSecret(secret);
    return 'Secret added safely';
  }
  
  // Static method
  static compare(person1, person2) {
    return person1.age - person2.age;
  }
}

// Inheritance
class Employee extends Person {
  #salary = 0;
  
  constructor(name, age, position, salary) {
    super(name, age); // Call parent constructor
    this.position = position;
    this.#salary = salary;
  }
  
  // Override method
  introduce() {
    return super.introduce() + \` I work as a \${this.position}.\`;
  }
  
  // New method
  getAnnualSalary() {
    return this.#salary * 12;
  }
  
  // Static method
  static createIntern(name, age) {
    return new Employee(name, age, 'Intern', 2000);
  }
}

const person = new Person('Alice', 30);
console.log(person.introduce());
console.log(person.id); // Can access via getter

const employee = new Employee('Bob', 25, 'Developer', 5000);
console.log(employee.introduce());
console.log(employee.getAnnualSalary());

// Mixins pattern
const Flyable = {
  fly() {
    return \`\${this.name} is flying!\`;
  }
};

const Swimmable = {
  swim() {
    return \`\${this.name} is swimming!\`;
  }
};

class Duck extends Person {
  constructor(name) {
    super(name, 1); // Ducks live about 1 year in this example
  }
}

// Add mixins
Object.assign(Duck.prototype, Flyable, Swimmable);

const duck = new Duck('Daffy');
console.log(duck.fly());
console.log(duck.swim());`}
                </code></pre>
              </div>
            </div>

            <div className="js-advanced-card">
              <h3>Proxy and Reflect</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic Proxy
const target = {
  name: 'John',
  age: 30
};

const handler = {
  get(target, property) {
    console.log(\`Getting \${property}\`);
    return target[property];
  },
  
  set(target, property, value) {
    console.log(\`Setting \${property} to \${value}\`);
    target[property] = value;
    return true;
  }
};

const proxy = new Proxy(target, handler);
console.log(proxy.name); // Logs: Getting name, then: John
proxy.age = 31;          // Logs: Setting age to 31

// Validation proxy
function createValidatedObject(validators = {}) {
  return new Proxy({}, {
    set(target, property, value) {
      if (validators[property]) {
        const isValid = validators[property](value);
        if (!isValid) {
          throw new Error(\`Invalid value for \${property}: \${value}\`);
        }
      }
      target[property] = value;
      return true;
    }
  });
}

const user = createValidatedObject({
  age: (value) => typeof value === 'number' && value > 0 && value < 150,
  email: (value) => typeof value === 'string' && value.includes('@')
});

user.age = 25;                    // OK
user.email = 'john@example.com';  // OK
// user.age = -5;                 // Would throw error

// Default values proxy
function createDefaultProxy(defaults = {}) {
  return new Proxy({}, {
    get(target, property) {
      return property in target ? target[property] : defaults[property];
    }
  });
}

const config = createDefaultProxy({
  theme: 'light',
  language: 'en',
  notifications: true
});

console.log(config.theme);        // 'light' (default)
console.log(config.language);     // 'en' (default)
config.theme = 'dark';
console.log(config.theme);        // 'dark' (set value)

// Array proxy for logging
function createLoggedArray(arr = []) {
  return new Proxy(arr, {
    set(target, property, value) {
      console.log(\`Array[\${property}] = \${value}\`);
      target[property] = value;
      return true;
    },
    
    get(target, property) {
      if (property === 'push') {
        return function(...items) {
          console.log('Pushing items:', items);
          return Array.prototype.push.apply(target, items);
        };
      }
      return target[property];
    }
  });
}

const loggedArray = createLoggedArray();
loggedArray.push(1, 2, 3); // Logs the push operation
loggedArray[3] = 4;         // Logs: Array[3] = 4

// Function proxy
function createMemoizedFunction(fn) {
  const cache = new Map();
  
  return new Proxy(fn, {
    apply(target, thisArg, args) {
      const key = JSON.stringify(args);
      
      if (cache.has(key)) {
        console.log('Cache hit for:', key);
        return cache.get(key);
      }
      
      console.log('Computing for:', key);
      const result = Reflect.apply(target, thisArg, args);
      cache.set(key, result);
      return result;
    }
  });
}

const expensiveFunction = createMemoizedFunction((n) => {
  // Simulate expensive computation
  let result = 0;
  for (let i = 0; i < n * 1000000; i++) {
    result += i;
  }
  return result;
});

console.log(expensiveFunction(100)); // Computes
console.log(expensiveFunction(100)); // Cache hit

// Reflect examples
const obj = { a: 1, b: 2 };

// Reflect.get
console.log(Reflect.get(obj, 'a')); // 1

// Reflect.set
Reflect.set(obj, 'c', 3);
console.log(obj); // { a: 1, b: 2, c: 3 }

// Reflect.has
console.log(Reflect.has(obj, 'b')); // true

// Reflect.deleteProperty
Reflect.deleteProperty(obj, 'b');
console.log(obj); // { a: 1, c: 3 }

// Reflect.ownKeys
console.log(Reflect.ownKeys(obj)); // ['a', 'c']

// Using Reflect in Proxy handlers
const reflectedProxy = new Proxy(target, {
  get(target, property, receiver) {
    console.log(\`Accessing \${property}\`);
    return Reflect.get(target, property, receiver);
  },
  
  set(target, property, value, receiver) {
    console.log(\`Setting \${property} = \${value}\`);
    return Reflect.set(target, property, value, receiver);
  }
});`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>⭐ ES6+ Best Practices</h2>
          
          <div className="js-es6-practices">
            <div className="js-practice-group">
              <h3>✅ Modern JavaScript Guidelines</h3>
              <ul>
                <li><strong>Use const/let instead of var:</strong> Block scope prevents many bugs</li>
                <li><strong>Prefer arrow functions:</strong> For lexical this binding and concise syntax</li>
                <li><strong>Use template literals:</strong> More readable than string concatenation</li>
                <li><strong>Destructure when appropriate:</strong> Extract values cleanly from objects/arrays</li>
                <li><strong>Use modules:</strong> Organize code with import/export statements</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🔧 Performance Tips</h3>
              <ul>
                <li><strong>Use generators for large datasets:</strong> Memory-efficient iteration</li>
                <li><strong>Leverage symbols for private properties:</strong> Better than naming conventions</li>
                <li><strong>Use Proxy carefully:</strong> Can impact performance if overused</li>
                <li><strong>Prefer spread over concat:</strong> Often more readable and performant</li>
                <li><strong>Use appropriate data structures:</strong> Map/Set vs Object/Array based on use case</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>📚 Code Organization</h3>
              <ul>
                <li><strong>Use classes for object creation:</strong> Clear inheritance and structure</li>
                <li><strong>Group related exports:</strong> Use barrel exports for clean imports</li>
                <li><strong>Implement iterators for custom collections:</strong> Make objects work with for...of</li>
                <li><strong>Use symbols for API design:</strong> Create collision-free property keys</li>
                <li><strong>Document complex generators:</strong> Clear examples of yielded values</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ES6Features;
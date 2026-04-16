import React from 'react';
import '../Navbarweb.css';

function CallbacksAndHigherOrderFunctions() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🔄 Callbacks and Higher-Order Functions</h1>
        <p className="js-topic-subtitle">
          Master functional programming patterns: callbacks, higher-order functions, and powerful composition techniques
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction to Callbacks */}
        <section className="js-topic-section">
          <h2>📞 Understanding Callbacks</h2>
          <p>
            A callback is a function that is passed as an argument to another function and is executed at a specific point.
            Callbacks are fundamental to JavaScript's asynchronous nature and functional programming patterns.
          </p>
          
          <div className="js-callback-basics">
            <div className="js-basic-example">
              <h3>💡 Basic Callback Concepts</h3>
              <div className="js-code-example">
                <pre><code>
{`// Simple callback example
function greetUser(name, callback) {
  const greeting = 'Hello, ' + name + '!';
  callback(greeting); // Execute the callback with the greeting
}

function displayGreeting(message) {
  console.log('Display:', message);
}

function logGreeting(message) {
  console.log('Log:', message.toUpperCase());
}

// Using different callbacks with the same function
greetUser('Alice', displayGreeting); // Display: Hello, Alice!
greetUser('Bob', logGreeting);       // Log: HELLO, BOB!

// Anonymous callback functions
greetUser('Charlie', function(message) {
  console.log('Anonymous:', message);
});

// Arrow function callback
greetUser('Diana', (message) => {
  console.log('Arrow:', message);
});

// Callback with multiple parameters
function processUserData(user, successCallback, errorCallback) {
  if (user && user.name && user.email) {
    const processedUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: user.name.trim(),
      email: user.email.toLowerCase(),
      createdAt: new Date().toISOString()
    };
    successCallback(processedUser);
  } else {
    errorCallback('Invalid user data provided');
  }
}

// Usage with success and error callbacks
const userData = { name: 'John Doe', email: 'JOHN@EXAMPLE.COM' };

processUserData(
  userData,
  (user) => {
    console.log('User created successfully:', user);
  },
  (error) => {
    console.error('Error creating user:', error);
  }
);

// Array methods using callbacks
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach - executes callback for each element
numbers.forEach((number, index) => {
  console.log('Index ' + index + ': ' + number);
});

// map - transforms each element using callback
const doubled = numbers.map((number) => number * 2);
console.log('Doubled:', doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// filter - keeps elements where callback returns true
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log('Even numbers:', evenNumbers); // [2, 4, 6, 8, 10]

// reduce - accumulates values using callback
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum:', sum); // 55

// find - returns first element where callback returns true
const firstEven = numbers.find((number) => number % 2 === 0);
console.log('First even:', firstEven); // 2

// some - returns true if any element passes the callback test
const hasEven = numbers.some((number) => number % 2 === 0);
console.log('Has even numbers:', hasEven); // true

// every - returns true if all elements pass the callback test
const allPositive = numbers.every((number) => number > 0);
console.log('All positive:', allPositive); // true

// Event handling with callbacks
function createButton(text, clickCallback) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', clickCallback);
  return button;
}

// Create buttons with different callback behaviors
const alertButton = createButton('Alert', () => {
  alert('Button clicked!');
});

const logButton = createButton('Log', () => {
  console.log('Log button clicked at:', new Date().toLocaleTimeString());
});

const counterButton = (() => {
  let count = 0;
  return createButton('Count', () => {
    count++;
    console.log('Clicked ' + count + ' times');
  });
})();

// Timer callbacks
console.log('Starting timer...');

setTimeout(() => {
  console.log('This executes after 2 seconds');
}, 2000);

let intervalCount = 0;
const intervalId = setInterval(() => {
  intervalCount++;
  console.log('Interval execution #' + intervalCount);
  
  if (intervalCount >= 3) {
    clearInterval(intervalId);
    console.log('Interval stopped');
  }
}, 1000);

// Callback chaining
function step1(data, callback) {
  console.log('Step 1: Processing', data);
  setTimeout(() => {
    callback(null, data + ' -> Step1');
  }, 100);
}

function step2(data, callback) {
  console.log('Step 2: Processing', data);
  setTimeout(() => {
    callback(null, data + ' -> Step2');
  }, 100);
}

function step3(data, callback) {
  console.log('Step 3: Processing', data);
  setTimeout(() => {
    callback(null, data + ' -> Step3');
  }, 100);
}

// Nested callbacks (callback hell example)
step1('Initial Data', (err1, result1) => {
  if (err1) {
    console.error('Error in step 1:', err1);
    return;
  }
  
  step2(result1, (err2, result2) => {
    if (err2) {
      console.error('Error in step 2:', err2);
      return;
    }
    
    step3(result2, (err3, result3) => {
      if (err3) {
        console.error('Error in step 3:', err3);
        return;
      }
      
      console.log('Final result:', result3);
    });
  });
});`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Higher-Order Functions */}
        <section className="js-topic-section">
          <h2>🎯 Higher-Order Functions</h2>
          
          <div className="js-hof-examples">
            <div className="js-hof-card">
              <h3>Function Factories and Generators</h3>
              <div className="js-code-example">
                <pre><code>
{`// Higher-order functions: functions that operate on other functions

// Function factory - returns a function
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log('Double 5:', double(5));     // 10
console.log('Triple 4:', triple(4));     // 12
console.log('Quadruple 3:', quadruple(3)); // 12

// Advanced function factory with configuration
function createValidator(config) {
  return function(value) {
    const errors = [];
    
    if (config.required && (!value || value.toString().trim() === '')) {
      errors.push('Value is required');
    }
    
    if (config.minLength && value && value.length < config.minLength) {
      errors.push('Value must be at least ' + config.minLength + ' characters');
    }
    
    if (config.maxLength && value && value.length > config.maxLength) {
      errors.push('Value must be at most ' + config.maxLength + ' characters');
    }
    
    if (config.pattern && value && !config.pattern.test(value)) {
      errors.push('Value does not match required pattern');
    }
    
    if (config.custom && typeof config.custom === 'function') {
      const customError = config.custom(value);
      if (customError) {
        errors.push(customError);
      }
    }
    
    return {
      isValid: errors.length === 0,
      errors: errors,
      value: value
    };
  };
}

// Create specific validators
const emailValidator = createValidator({
  required: true,
  pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
  custom: (value) => {
    if (value && value.length > 254) {
      return 'Email address too long';
    }
  }
});

const passwordValidator = createValidator({
  required: true,
  minLength: 8,
  maxLength: 128,
  custom: (value) => {
    if (value && !/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/.test(value)) {
      return 'Password must contain lowercase, uppercase, and number';
    }
  }
});

// Test validators
console.log('Email validation:', emailValidator('test@example.com'));
console.log('Password validation:', passwordValidator('MyPass123'));
console.log('Invalid email:', emailValidator('invalid-email'));

// Function decorators - functions that modify other functions
function logExecutionTime(func) {
  return function(...args) {
    const startTime = performance.now();
    const result = func.apply(this, args);
    const endTime = performance.now();
    
    console.log('Function ' + func.name + ' executed in ' + (endTime - startTime) + ' milliseconds');
    return result;
  };
}

function retry(func, maxAttempts = 3, delay = 1000) {
  return function(...args) {
    let attempts = 0;
    
    const attemptFunction = () => {
      attempts++;
      try {
        return func.apply(this, args);
      } catch (error) {
        if (attempts >= maxAttempts) {
          throw new Error('Failed after ' + maxAttempts + ' attempts: ' + error.message);
        }
        
        console.log('Attempt ' + attempts + ' failed, retrying in ' + delay + 'ms...');
        setTimeout(attemptFunction, delay);
      }
    };
    
    return attemptFunction();
  };
}

// Cache/memoize decorator
function memoize(func) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      console.log('Cache hit for:', key);
      return cache.get(key);
    }
    
    console.log('Cache miss, computing:', key);
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Example functions to decorate
function expensiveCalculation(n) {
  let result = 0;
  for (let i = 0; i < n * 1000000; i++) {
    result += Math.sqrt(i);
  }
  return result;
}

function unreliableFunction(value) {
  if (Math.random() > 0.7) {
    return 'Success: ' + value;
  }
  throw new Error('Random failure occurred');
}

// Apply decorators
const timedCalculation = logExecutionTime(expensiveCalculation);
const memoizedCalculation = memoize(expensiveCalculation);
const reliableFunction = retry(unreliableFunction, 5, 500);

// Test decorated functions
console.log('Timed result:', timedCalculation(100));
console.log('Memoized result 1:', memoizedCalculation(50));
console.log('Memoized result 2:', memoizedCalculation(50)); // Should use cache

// Function composition - combining functions
function compose(...functions) {
  return function(value) {
    return functions.reduceRight((acc, fn) => fn(acc), value);
  };
}

function pipe(...functions) {
  return function(value) {
    return functions.reduce((acc, fn) => fn(acc), value);
  };
}

// Utility functions for composition
const addTen = (x) => x + 10;
const multiplyByTwo = (x) => x * 2;
const square = (x) => x * x;
const toString = (x) => x.toString();
const toUpperCase = (s) => s.toUpperCase();

// Compose functions (right to left)
const composedFunction = compose(
  toUpperCase,
  toString,
  square,
  multiplyByTwo,
  addTen
);

// Pipe functions (left to right) 
const pipedFunction = pipe(
  addTen,
  multiplyByTwo,
  square,
  toString,
  toUpperCase
);

console.log('Composed result (5):', composedFunction(5)); // "900"
console.log('Piped result (5):', pipedFunction(5));      // "900"

// Curry function - transforms multi-argument function
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

// Example function to curry
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

// Different ways to call curried function
console.log('All at once:', curriedAdd(1, 2, 3));           // 6
console.log('One by one:', curriedAdd(1)(2)(3));           // 6
console.log('Partially applied:', curriedAdd(1, 2)(3));     // 6

// Create specialized versions
const addOne = curriedAdd(1);
const addOnePlusTwo = curriedAdd(1, 2);

console.log('Add one to 5:', addOne(2, 5));      // 8
console.log('Add 1+2 to 7:', addOnePlusTwo(7));  // 10`}
                </code></pre>
              </div>
            </div>

            <div className="js-hof-card">
              <h3>Array Processing with Higher-Order Functions</h3>
              <div className="js-code-example">
                <pre><code>
{`// Advanced array processing patterns

const users = [
  { id: 1, name: 'Alice Johnson', age: 28, department: 'Engineering', salary: 85000, active: true },
  { id: 2, name: 'Bob Smith', age: 34, department: 'Marketing', salary: 65000, active: true },
  { id: 3, name: 'Carol Davis', age: 29, department: 'Engineering', salary: 92000, active: false },
  { id: 4, name: 'David Wilson', age: 31, department: 'Sales', salary: 58000, active: true },
  { id: 5, name: 'Emma Brown', age: 26, department: 'Engineering', salary: 78000, active: true },
  { id: 6, name: 'Frank Miller', age: 45, department: 'Management', salary: 120000, active: true }
];

// Complex filtering and transformation chains
const processUsers = (users) => {
  return users
    .filter(user => user.active)                          // Only active users
    .filter(user => user.age >= 25 && user.age <= 35)    // Age range
    .map(user => ({                                       // Transform user objects
      ...user,
      salaryCategory: user.salary > 80000 ? 'High' : 'Standard',
      yearsToRetirement: 65 - user.age,
      monthlyGross: Math.round(user.salary / 12)
    }))
    .sort((a, b) => b.salary - a.salary)                  // Sort by salary descending
    .slice(0, 3);                                         // Take top 3
};

console.log('Processed users:', processUsers(users));

// Custom higher-order array methods
function createArrayProcessor() {
  return {
    // Group by property
    groupBy: function(array, keyFn) {
      return array.reduce((groups, item) => {
        const key = typeof keyFn === 'function' ? keyFn(item) : item[keyFn];
        if (!groups[key]) {
          groups[key] = [];
        }
        groups[key].push(item);
        return groups;
      }, {});
    },

    // Partition array into two groups based on predicate
    partition: function(array, predicate) {
      return array.reduce((acc, item) => {
        if (predicate(item)) {
          acc[0].push(item);
        } else {
          acc[1].push(item);
        }
        return acc;
      }, [[], []]);
    },

    // Find unique items based on property
    uniqueBy: function(array, keyFn) {
      const seen = new Set();
      return array.filter(item => {
        const key = typeof keyFn === 'function' ? keyFn(item) : item[keyFn];
        if (seen.has(key)) {
          return false;
        }
        seen.add(key);
        return true;
      });
    },

    // Chunk array into smaller arrays
    chunk: function(array, size) {
      const chunks = [];
      for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
      }
      return chunks;
    },

    // Flatten nested arrays
    flatten: function(array) {
      return array.reduce((flat, item) => {
        if (Array.isArray(item)) {
          return flat.concat(this.flatten(item));
        }
        return flat.concat(item);
      }, []);
    },

    // Count occurrences
    countBy: function(array, keyFn) {
      return array.reduce((counts, item) => {
        const key = typeof keyFn === 'function' ? keyFn(item) : item[keyFn];
        counts[key] = (counts[key] || 0) + 1;
        return counts;
      }, {});
    },

    // Calculate statistics
    stats: function(array, valueFn) {
      if (array.length === 0) return null;
      
      const values = array.map(valueFn);
      const sum = values.reduce((a, b) => a + b, 0);
      const sortedValues = [...values].sort((a, b) => a - b);
      
      return {
        count: values.length,
        sum: sum,
        avg: sum / values.length,
        min: Math.min(...values),
        max: Math.max(...values),
        median: sortedValues[Math.floor(sortedValues.length / 2)]
      };
    }
  };
}

const processor = createArrayProcessor();

// Usage examples
console.log('Users by department:', processor.groupBy(users, 'department'));

console.log('Users by salary category:', processor.groupBy(users, user => 
  user.salary > 80000 ? 'High' : 'Standard'
));

const [activeUsers, inactiveUsers] = processor.partition(users, user => user.active);
console.log('Active users:', activeUsers.length);
console.log('Inactive users:', inactiveUsers.length);

console.log('Unique departments:', processor.uniqueBy(users, 'department'));

const userChunks = processor.chunk(users, 2);
console.log('User chunks:', userChunks);

const departmentCounts = processor.countBy(users, 'department');
console.log('Department counts:', departmentCounts);

const salaryStats = processor.stats(users, user => user.salary);
console.log('Salary statistics:', salaryStats);

// Pipeline processing function
function createPipeline(...processors) {
  return function(data) {
    return processors.reduce((result, processor) => {
      if (typeof processor === 'function') {
        return processor(result);
      } else if (processor && typeof processor.process === 'function') {
        return processor.process(result);
      }
      return result;
    }, data);
  };
}

// Pipeline processors
const processors = {
  filterActive: (users) => users.filter(user => user.active),
  
  addSalaryCategory: (users) => users.map(user => ({
    ...user,
    salaryCategory: user.salary > 80000 ? 'High' : 'Standard'
  })),
  
  sortBySalary: (users) => [...users].sort((a, b) => b.salary - a.salary),
  
  takeTop: (count) => (users) => users.slice(0, count),
  
  summarize: (users) => ({
    total: users.length,
    totalSalary: users.reduce((sum, user) => sum + user.salary, 0),
    avgSalary: users.reduce((sum, user) => sum + user.salary, 0) / users.length,
    departments: [...new Set(users.map(user => user.department))]
  })
};

// Create processing pipeline
const userPipeline = createPipeline(
  processors.filterActive,
  processors.addSalaryCategory,
  processors.sortBySalary,
  processors.takeTop(3),
  processors.summarize
);

console.log('Pipeline result:', userPipeline(users));

// Async higher-order functions
function asyncMap(array, asyncFn) {
  return Promise.all(array.map(asyncFn));
}

function asyncFilter(array, asyncPredicate) {
  return Promise.all(
    array.map(async (item) => {
      const shouldKeep = await asyncPredicate(item);
      return shouldKeep ? item : null;
    })
  ).then(results => results.filter(item => item !== null));
}

function asyncReduce(array, asyncReducer, initialValue) {
  return array.reduce(async (accPromise, current, index) => {
    const acc = await accPromise;
    return asyncReducer(acc, current, index, array);
  }, Promise.resolve(initialValue));
}

// Example async operations
const simulateAPICall = (user) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        ...user,
        lastLoginDays: Math.floor(Math.random() * 30),
        loginCount: Math.floor(Math.random() * 100)
      });
    }, Math.random() * 1000);
  });
};

const isActiveUser = (user) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(user.lastLoginDays < 7);
    }, 100);
  });
};

// Usage
(async () => {
  try {
    console.log('Starting async processing...');
    
    // Enrich all users with login data
    const enrichedUsers = await asyncMap(users.slice(0, 3), simulateAPICall);
    console.log('Enriched users:', enrichedUsers);
    
    // Filter for recently active users
    const activeUsers = await asyncFilter(enrichedUsers, isActiveUser);
    console.log('Recently active users:', activeUsers);
    
    // Calculate total login count
    const totalLogins = await asyncReduce(enrichedUsers, async (sum, user) => {
      return sum + user.loginCount;
    }, 0);
    console.log('Total login count:', totalLogins);
    
  } catch (error) {
    console.error('Async processing error:', error);
  }
})();`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Functional Programming Patterns */}
        <section className="js-topic-section">
          <h2>🧠 Functional Programming Patterns</h2>
          
          <div className="js-fp-examples">
            <div className="js-fp-card">
              <h3>Pure Functions and Immutability</h3>
              <div className="js-code-example">
                <pre><code>
{`// Pure functions - same input always produces same output, no side effects

// ❌ Impure function - depends on external state, has side effects
let counter = 0;
function impureIncrement() {
  counter++; // Side effect: modifies external state
  console.log('Counter:', counter); // Side effect: logging
  return counter;
}

// ✅ Pure function - no side effects, deterministic
function pureAdd(a, b) {
  return a + b; // Always returns same result for same inputs
}

function pureIncrement(value) {
  return value + 1; // Returns new value, doesn't modify input
}

// ❌ Impure array modification
function impureAddItem(array, item) {
  array.push(item); // Mutates original array
  return array;
}

// ✅ Pure array operations
function pureAddItem(array, item) {
  return [...array, item]; // Returns new array, original unchanged
}

function pureRemoveItem(array, index) {
  return array.filter((_, i) => i !== index);
}

function pureUpdateItem(array, index, newValue) {
  return array.map((item, i) => i === index ? newValue : item);
}

// ❌ Impure object modification
function impureUpdateUser(user, updates) {
  Object.assign(user, updates); // Mutates original object
  return user;
}

// ✅ Pure object operations
function pureUpdateUser(user, updates) {
  return { ...user, ...updates }; // Returns new object
}

function pureNestedUpdate(obj, path, value) {
  const keys = path.split('.');
  
  if (keys.length === 1) {
    return { ...obj, [keys[0]]: value };
  }
  
  const [firstKey, ...restKeys] = keys;
  return {
    ...obj,
    [firstKey]: pureNestedUpdate(obj[firstKey] || {}, restKeys.join('.'), value)
  };
}

// Example usage
const user = {
  name: 'John',
  profile: {
    settings: {
      theme: 'light',
      notifications: true
    }
  }
};

const updatedUser = pureNestedUpdate(user, 'profile.settings.theme', 'dark');
console.log('Original user theme:', user.profile.settings.theme);     // 'light'
console.log('Updated user theme:', updatedUser.profile.settings.theme); // 'dark'

// Immutable data structures helpers
const ImmutableHelpers = {
  // Deep clone
  deepClone: function(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map(item => this.deepClone(item));
    if (typeof obj === 'object') {
      const cloned = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          cloned[key] = this.deepClone(obj[key]);
        }
      }
      return cloned;
    }
  },

  // Set nested property immutably
  setIn: function(obj, path, value) {
    const keys = Array.isArray(path) ? path : path.split('.');
    
    if (keys.length === 0) return value;
    if (keys.length === 1) return { ...obj, [keys[0]]: value };
    
    const [head, ...tail] = keys;
    return {
      ...obj,
      [head]: this.setIn(obj[head] || {}, tail, value)
    };
  },

  // Update nested property immutably
  updateIn: function(obj, path, updater) {
    const keys = Array.isArray(path) ? path : path.split('.');
    const currentValue = this.getIn(obj, keys);
    const newValue = updater(currentValue);
    return this.setIn(obj, keys, newValue);
  },

  // Get nested property
  getIn: function(obj, path, defaultValue = undefined) {
    const keys = Array.isArray(path) ? path : path.split('.');
    let current = obj;
    
    for (const key of keys) {
      if (current == null || typeof current !== 'object') {
        return defaultValue;
      }
      current = current[key];
    }
    
    return current === undefined ? defaultValue : current;
  },

  // Merge objects deeply
  mergeDeep: function(target, source) {
    const result = { ...target };
    
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        if (
          source[key] && 
          typeof source[key] === 'object' && 
          !Array.isArray(source[key]) &&
          target[key] &&
          typeof target[key] === 'object' &&
          !Array.isArray(target[key])
        ) {
          result[key] = this.mergeDeep(target[key], source[key]);
        } else {
          result[key] = source[key];
        }
      }
    }
    
    return result;
  }
};

// Usage examples
const state = {
  user: {
    id: 1,
    profile: {
      name: 'Alice',
      preferences: {
        theme: 'light',
        language: 'en'
      }
    }
  },
  ui: {
    sidebar: { open: true },
    notifications: []
  }
};

// Immutable updates
const newState1 = ImmutableHelpers.setIn(state, ['user', 'profile', 'name'], 'Bob');
const newState2 = ImmutableHelpers.updateIn(state, ['ui', 'notifications'], 
  notifications => [...notifications, { id: 1, message: 'New notification' }]
);

console.log('Original name:', ImmutableHelpers.getIn(state, ['user', 'profile', 'name']));
console.log('Updated name:', ImmutableHelpers.getIn(newState1, ['user', 'profile', 'name']));

// Function composition for data transformations
const pipe = (...functions) => (value) => functions.reduce((acc, fn) => fn(acc), value);
const compose = (...functions) => (value) => functions.reduceRight((acc, fn) => fn(acc), value);

// Data transformation functions
const dataTransforms = {
  normalizeEmail: (user) => ({ 
    ...user, 
    email: user.email ? user.email.toLowerCase().trim() : '' 
  }),
  
  addTimestamp: (user) => ({ 
    ...user, 
    createdAt: user.createdAt || new Date().toISOString() 
  }),
  
  calculateAge: (user) => ({
    ...user,
    age: user.birthDate ? 
      Math.floor((Date.now() - new Date(user.birthDate)) / (365.25 * 24 * 60 * 60 * 1000)) :
      null
  }),
  
  addFullName: (user) => ({
    ...user,
    fullName: [user.firstName, user.lastName].filter(Boolean).join(' ')
  }),
  
  validateRequired: (fields) => (user) => {
    const errors = [];
    fields.forEach(field => {
      if (!user[field]) {
        errors.push(field + ' is required');
      }
    });
    
    return { ...user, validationErrors: errors };
  }
};

// Create user processing pipeline
const processUser = pipe(
  dataTransforms.normalizeEmail,
  dataTransforms.addTimestamp,
  dataTransforms.calculateAge,
  dataTransforms.addFullName,
  dataTransforms.validateRequired(['firstName', 'email'])
);

const rawUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: '  JOHN@EXAMPLE.COM  ',
  birthDate: '1990-05-15'
};

const processedUser = processUser(rawUser);
console.log('Processed user:', processedUser);

// Lens pattern for functional updates (advanced)
function createLens(getter, setter) {
  return {
    get: getter,
    set: setter,
    over: function(fn, obj) {
      return setter(fn(getter(obj)), obj);
    }
  };
}

// Property lens
const prop = (key) => createLens(
  (obj) => obj[key],
  (value, obj) => ({ ...obj, [key]: value })
);

// Path lens
const path = (keys) => createLens(
  (obj) => ImmutableHelpers.getIn(obj, keys),
  (value, obj) => ImmutableHelpers.setIn(obj, keys, value)
);

// Compose lenses
const compose_lenses = (outer, inner) => createLens(
  (obj) => inner.get(outer.get(obj)),
  (value, obj) => outer.set(inner.set(value, outer.get(obj)), obj)
);

// Usage
const nameLens = prop('name');
const profileLens = prop('profile');
const profileNameLens = compose_lenses(profileLens, nameLens);

const userObj = { profile: { name: 'Alice' }, id: 1 };
const updatedUserObj = profileNameLens.set('Bob', userObj);

console.log('Original:', userObj.profile.name);        // 'Alice'
console.log('Updated:', updatedUserObj.profile.name);  // 'Bob'`}
                </code></pre>
              </div>
            </div>

            <div className="js-fp-card">
              <h3>Monads and Advanced Patterns</h3>
              <div className="js-code-example">
                <pre><code>
{`// Maybe/Optional monad for handling null/undefined values
class Maybe {
  constructor(value) {
    this._value = value;
  }

  static of(value) {
    return new Maybe(value);
  }

  static nothing() {
    return new Maybe(null);
  }

  isNothing() {
    return this._value === null || this._value === undefined;
  }

  map(fn) {
    return this.isNothing() ? Maybe.nothing() : Maybe.of(fn(this._value));
  }

  flatMap(fn) {
    return this.isNothing() ? Maybe.nothing() : fn(this._value);
  }

  filter(predicate) {
    return this.isNothing() || !predicate(this._value) ? Maybe.nothing() : this;
  }

  getOrElse(defaultValue) {
    return this.isNothing() ? defaultValue : this._value;
  }

  toString() {
    return this.isNothing() ? 'Nothing' : 'Just(' + this._value + ')';
  }
}

// Usage
const safeUser = Maybe.of({ name: 'John', address: { city: 'New York' } });

const result = safeUser
  .map(user => user.address)
  .map(address => address.city)
  .map(city => city.toUpperCase())
  .getOrElse('Unknown City');

console.log('Safe result:', result); // 'NEW YORK'

// Handling null case
const nullUser = Maybe.of(null);
const nullResult = nullUser
  .map(user => user.address)
  .map(address => address.city)
  .getOrElse('Unknown City');

console.log('Null result:', nullResult); // 'Unknown City'

// Either monad for error handling
class Either {
  constructor(value, isLeft = false) {
    this._value = value;
    this._isLeft = isLeft;
  }

  static left(value) {
    return new Either(value, true);
  }

  static right(value) {
    return new Either(value, false);
  }

  isLeft() {
    return this._isLeft;
  }

  isRight() {
    return !this._isLeft;
  }

  map(fn) {
    return this.isLeft() ? this : Either.right(fn(this._value));
  }

  flatMap(fn) {
    return this.isLeft() ? this : fn(this._value);
  }

  mapLeft(fn) {
    return this.isLeft() ? Either.left(fn(this._value)) : this;
  }

  fold(leftFn, rightFn) {
    return this.isLeft() ? leftFn(this._value) : rightFn(this._value);
  }

  getOrElse(defaultValue) {
    return this.isLeft() ? defaultValue : this._value;
  }
}

// Safe division function
function safeDivide(a, b) {
  if (b === 0) {
    return Either.left('Division by zero');
  }
  return Either.right(a / b);
}

// Safe parsing
function safeParseInt(str) {
  const num = parseInt(str, 10);
  if (isNaN(num)) {
    return Either.left('Invalid number: ' + str);
  }
  return Either.right(num);
}

// Chaining operations
const calculation = safeParseInt('10')
  .flatMap(a => safeParseInt('2').flatMap(b => safeDivide(a, b)))
  .map(result => result * 2);

console.log('Calculation result:', calculation.getOrElse('Error'));

// Task monad for async operations
class Task {
  constructor(computation) {
    this._computation = computation;
  }

  static of(value) {
    return new Task(resolve => resolve(value));
  }

  static rejected(error) {
    return new Task((resolve, reject) => reject(error));
  }

  map(fn) {
    return new Task((resolve, reject) => {
      this._computation(
        value => resolve(fn(value)),
        reject
      );
    });
  }

  flatMap(fn) {
    return new Task((resolve, reject) => {
      this._computation(
        value => fn(value)._computation(resolve, reject),
        reject
      );
    });
  }

  run(onSuccess = console.log, onError = console.error) {
    this._computation(onSuccess, onError);
  }

  // Convert to Promise
  toPromise() {
    return new Promise(this._computation);
  }
}

// HTTP request task
function fetchTask(url) {
  return new Task((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          reject(new Error('HTTP ' + response.status));
        }
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  });
}

// File reader task
function readFileTask(file) {
  return new Task((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = e => reject(new Error('File read error'));
    reader.readAsText(file);
  });
}

// Functional error handling utilities
const FunctionalUtils = {
  // Try-catch wrapper
  tryCatch: function(fn) {
    return function(...args) {
      try {
        const result = fn.apply(this, args);
        return Either.right(result);
      } catch (error) {
        return Either.left(error);
      }
    };
  },

  // Async try-catch wrapper  
  asyncTryCatch: function(asyncFn) {
    return async function(...args) {
      try {
        const result = await asyncFn.apply(this, args);
        return Either.right(result);
      } catch (error) {
        return Either.left(error);
      }
    };
  },

  // Sequence operations (fail fast)
  sequence: function(eithers) {
    const values = [];
    for (const either of eithers) {
      if (either.isLeft()) {
        return either;
      }
      values.push(either._value);
    }
    return Either.right(values);
  },

  // Parallel operations (collect all errors or all successes)
  parallel: function(eithers) {
    const errors = [];
    const values = [];
    
    for (const either of eithers) {
      if (either.isLeft()) {
        errors.push(either._value);
      } else {
        values.push(either._value);
      }
    }
    
    return errors.length > 0 ? Either.left(errors) : Either.right(values);
  },

  // Traverse array with function that returns Either
  traverse: function(array, fn) {
    const results = array.map(fn);
    return this.sequence(results);
  }
};

// Usage examples
const safeJsonParse = FunctionalUtils.tryCatch(JSON.parse);

const validJson = safeJsonParse('{"name": "John"}');
const invalidJson = safeJsonParse('invalid json');

console.log('Valid JSON:', validJson.getOrElse('Parse error'));
console.log('Invalid JSON:', invalidJson.fold(
  error => 'Error: ' + error.message,
  value => 'Success: ' + JSON.stringify(value)
));

// Traverse example
const numbers = ['1', '2', '3', 'invalid', '5'];
const parseResults = FunctionalUtils.traverse(numbers, safeParseInt);

console.log('Parse traverse result:', parseResults.fold(
  error => 'First error: ' + error,
  values => 'All parsed: ' + values.join(', ')
));

// Function composition with error handling
const safeCompose = (...functions) => (value) => {
  return functions.reduce((acc, fn) => {
    return acc.flatMap(fn);
  }, Either.right(value));
};

const processString = safeCompose(
  str => str.trim() ? Either.right(str.trim()) : Either.left('Empty string'),
  str => str.length > 2 ? Either.right(str) : Either.left('Too short'),
  str => Either.right(str.toUpperCase()),
  str => Either.right('Processed: ' + str)
);

console.log('Process valid:', processString('  hello  ').getOrElse('Error'));
console.log('Process invalid:', processString('  a  ').getOrElse('Error'));`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>⭐ Best Practices</h2>
          
          <div className="js-callback-practices">
            <div className="js-practice-group">
              <h3>✅ Callback Guidelines</h3>
              <ul>
                <li><strong>Name your callbacks:</strong> Use named functions instead of anonymous ones for better debugging</li>
                <li><strong>Handle errors:</strong> Always include error handling in callback functions</li>
                <li><strong>Avoid callback hell:</strong> Use promises, async/await, or functional composition</li>
                <li><strong>Keep callbacks simple:</strong> Extract complex logic into separate functions</li>
                <li><strong>Document callback signatures:</strong> Clearly specify what parameters callbacks receive</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🎯 Higher-Order Function Tips</h3>
              <ul>
                <li><strong>Prefer pure functions:</strong> Avoid side effects in higher-order functions</li>
                <li><strong>Use descriptive names:</strong> Function names should clearly indicate their purpose</li>
                <li><strong>Leverage closures wisely:</strong> Use closures for configuration and state management</li>
                <li><strong>Consider performance:</strong> Be mindful of function creation overhead in loops</li>
                <li><strong>Test thoroughly:</strong> Higher-order functions can be complex; test edge cases</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🧠 Functional Programming Benefits</h3>
              <ul>
                <li><strong>Immutability:</strong> Reduces bugs and makes code more predictable</li>
                <li><strong>Composability:</strong> Small functions can be combined to create complex behavior</li>
                <li><strong>Testability:</strong> Pure functions are easier to test and reason about</li>
                <li><strong>Reusability:</strong> Generic higher-order functions can be reused across projects</li>
                <li><strong>Parallel processing:</strong> Pure functions are safe for concurrent execution</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CallbacksAndHigherOrderFunctions;
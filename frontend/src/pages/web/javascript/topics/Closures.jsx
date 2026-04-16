import React from 'react';
import '../Navbarweb.css';

function Closures() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🔒 JavaScript Closures</h1>
        <p className="js-topic-subtitle">
          Master closures: understanding lexical scope, data privacy, and powerful programming patterns
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction to Closures */}
        <section className="js-topic-section">
          <h2>🧠 What are Closures?</h2>
          <p>
            A closure is a feature where an inner function has access to variables in the outer function's scope
            even after the outer function has finished executing. Closures are fundamental to JavaScript and
            enable powerful patterns for data privacy, module creation, and functional programming.
          </p>
          
          <div className="js-closure-basics">
            <div className="js-basic-example">
              <h3>💡 Basic Closure Concept</h3>
              <div className="js-code-example">
                <pre><code>
{`// Simple closure example
function outerFunction(x) {
  // This is the outer function's scope
  
  function innerFunction(y) {
    // Inner function has access to outer function's variables
    return x + y; // x is "closed over" by the inner function
  }
  
  return innerFunction; // Return the inner function
}

// Create a closure
const addFive = outerFunction(5);

// The outer function has finished executing, but...
console.log(addFive(10)); // 15 - inner function still remembers x = 5!

// Another closure with different value
const addTen = outerFunction(10);
console.log(addTen(5)); // 15 - each closure maintains its own copy of x

// Demonstrating closure memory
function createCounter() {
  let count = 0; // Private variable
  
  return function() {
    count++; // Inner function modifies outer variable
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 - independent closure
console.log(counter1()); // 3

// Closure with multiple functions
function calculator(initialValue) {
  let value = initialValue;
  
  return {
    add: function(num) {
      value += num;
      return this;
    },
    subtract: function(num) {
      value -= num;
      return this;
    },
    multiply: function(num) {
      value *= num;
      return this;
    },
    getValue: function() {
      return value;
    },
    reset: function() {
      value = initialValue;
      return this;
    }
  };
}

const calc = calculator(10);
console.log(calc.add(5).multiply(2).getValue()); // 30
calc.reset();
console.log(calc.getValue()); // 10`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Lexical Scoping */}
        <section className="js-topic-section">
          <h2>🎯 Lexical Scoping</h2>
          
          <div className="js-lexical-examples">
            <div className="js-lexical-card">
              <h3>Understanding Scope Chain</h3>
              <div className="js-code-example">
                <pre><code>
{`// Lexical scoping determines variable access
let globalVar = 'Global';

function outerScope() {
  let outerVar = 'Outer';
  
  function middleScope() {
    let middleVar = 'Middle';
    
    function innerScope() {
      let innerVar = 'Inner';
      
      // Inner function can access all outer variables
      console.log('Inner can see:', {
        globalVar,   // 'Global'
        outerVar,    // 'Outer' 
        middleVar,   // 'Middle'
        innerVar     // 'Inner'
      });
      
      return function() {
        // This returned function creates a closure
        // It "closes over" all the variables it can access
        return {
          global: globalVar,
          outer: outerVar,
          middle: middleVar,
          inner: innerVar
        };
      };
    }
    
    return innerScope();
  }
  
  return middleScope();
}

// Create closure that remembers the entire scope chain
const closureFunction = outerScope();
console.log(closureFunction()); 
// {global: 'Global', outer: 'Outer', middle: 'Middle', inner: 'Inner'}

// Variable shadowing in closures
function shadowingExample() {
  let name = 'Outer';
  
  function inner() {
    let name = 'Inner'; // Shadows outer 'name'
    
    return function() {
      console.log('Closure sees inner name:', name); // 'Inner'
      
      // To access outer name, we'd need a different approach
      return name;
    };
  }
  
  return inner();
}

const shadowClosure = shadowingExample();
console.log(shadowClosure()); // 'Inner'

// Avoiding shadowing to access outer scope
function noShadowingExample() {
  let outerName = 'Outer';
  
  function inner() {
    let innerName = 'Inner';
    
    return function() {
      return {
        outer: outerName,
        inner: innerName
      };
    };
  }
  
  return inner();
}

const noShadowClosure = noShadowingExample();
console.log(noShadowClosure()); // {outer: 'Outer', inner: 'Inner'}

// Dynamic scope vs lexical scope
function createDynamicExample() {
  function outer() {
    let x = 'outer x';
    
    function inner() {
      console.log('Lexical x:', x); // Always 'outer x'
    }
    
    return inner;
  }
  
  function callWithDifferentScope() {
    let x = 'different x';
    const innerFn = outer();
    innerFn(); // Still logs 'outer x' - lexical, not dynamic!
  }
  
  callWithDifferentScope();
}

createDynamicExample();

// Closure captures by reference, not value
function referenceCapture() {
  let message = 'Initial';
  
  function createClosure() {
    return function() {
      return message; // Captures reference to 'message'
    };
  }
  
  const closure = createClosure();
  console.log(closure()); // 'Initial'
  
  message = 'Modified'; // Change the variable
  console.log(closure()); // 'Modified' - closure sees the change!
  
  return closure;
}

const refClosure = referenceCapture();
console.log(refClosure()); // 'Modified'`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Data Privacy and Encapsulation */}
        <section className="js-topic-section">
          <h2>🛡️ Data Privacy and Encapsulation</h2>
          
          <div className="js-privacy-examples">
            <div className="js-privacy-card">
              <h3>Private Variables with Closures</h3>
              <div className="js-code-example">
                <pre><code>
{`// Creating truly private variables
function createUser(name, email) {
  // Private variables - not accessible from outside
  let _name = name;
  let _email = email;
  let _id = Math.random().toString(36).substr(2, 9);
  let _loginAttempts = 0;
  let _isLocked = false;
  
  // Public interface - methods that have access to private variables
  return {
    // Getter methods
    getName: function() {
      return _name;
    },
    
    getEmail: function() {
      return _email;
    },
    
    getId: function() {
      return _id;
    },
    
    // Controlled setter methods
    setName: function(newName) {
      if (typeof newName === 'string' && newName.trim().length > 0) {
        _name = newName.trim();
        return true;
      }
      return false;
    },
    
    setEmail: function(newEmail) {
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (emailRegex.test(newEmail)) {
        _email = newEmail;
        return true;
      }
      return false;
    },
    
    // Authentication methods
    authenticate: function(password) {
      if (_isLocked) {
        return { success: false, message: 'Account locked' };
      }
      
      if (password === 'correct_password') {
        _loginAttempts = 0;
        return { success: true, message: 'Login successful' };
      } else {
        _loginAttempts++;
        if (_loginAttempts >= 3) {
          _isLocked = true;
          return { success: false, message: 'Account locked after 3 attempts' };
        }
        return { success: false, message: 'Invalid password. Attempts: ' + _loginAttempts };
      }
    },
    
    unlock: function(adminKey) {
      if (adminKey === 'admin_unlock_key') {
        _isLocked = false;
        _loginAttempts = 0;
        return true;
      }
      return false;
    },
    
    getStatus: function() {
      return {
        isLocked: _isLocked,
        loginAttempts: _loginAttempts
      };
    }
  };
}

// Usage
const user = createUser('John Doe', 'john@example.com');

console.log(user.getName()); // 'John Doe'
console.log(user.getId()); // Generated ID

// These won't work - private variables are truly private
console.log(user._name); // undefined
console.log(user._email); // undefined

// Controlled access through methods
console.log(user.setName('Jane Doe')); // true
console.log(user.getName()); // 'Jane Doe'

console.log(user.setName('')); // false - validation failed
console.log(user.getName()); // Still 'Jane Doe'

// Banking account example with private balance
function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;
  let transactionHistory = [];
  let accountNumber = 'ACC' + Date.now();
  
  function addTransaction(type, amount, description) {
    transactionHistory.push({
      date: new Date().toISOString(),
      type: type,
      amount: amount,
      balance: balance,
      description: description
    });
  }
  
  return {
    getAccountNumber: function() {
      return accountNumber;
    },
    
    getBalance: function() {
      return balance;
    },
    
    deposit: function(amount, description = 'Deposit') {
      if (amount <= 0) {
        throw new Error('Deposit amount must be positive');
      }
      
      balance += amount;
      addTransaction('deposit', amount, description);
      return balance;
    },
    
    withdraw: function(amount, description = 'Withdrawal') {
      if (amount <= 0) {
        throw new Error('Withdrawal amount must be positive');
      }
      
      if (amount > balance) {
        throw new Error('Insufficient funds');
      }
      
      balance -= amount;
      addTransaction('withdrawal', -amount, description);
      return balance;
    },
    
    transfer: function(amount, targetAccount, description = 'Transfer') {
      this.withdraw(amount, 'Transfer to ' + targetAccount.getAccountNumber());
      targetAccount.deposit(amount, 'Transfer from ' + accountNumber);
      return balance;
    },
    
    getTransactionHistory: function() {
      // Return copy to prevent external modification
      return transactionHistory.map(transaction => ({ ...transaction }));
    },
    
    getStatement: function(limit = 10) {
      return {
        accountNumber: accountNumber,
        currentBalance: balance,
        recentTransactions: transactionHistory.slice(-limit)
      };
    }
  };
}

// Usage
const account1 = createBankAccount(1000);
const account2 = createBankAccount(500);

console.log('Initial balance:', account1.getBalance()); // 1000

account1.deposit(200, 'Salary deposit');
console.log('After deposit:', account1.getBalance()); // 1200

account1.withdraw(100, 'ATM withdrawal');
console.log('After withdrawal:', account1.getBalance()); // 1100

account1.transfer(300, account2, 'Payment to friend');
console.log('Account 1 balance:', account1.getBalance()); // 800
console.log('Account 2 balance:', account2.getBalance()); // 800

// Private variables remain inaccessible
console.log(account1.balance); // undefined
console.log(account1.transactionHistory); // undefined

console.log('Statement:', account1.getStatement(3));`}
                </code></pre>
              </div>
            </div>

            <div className="js-privacy-card">
              <h3>Module Pattern with Closures</h3>
              <div className="js-code-example">
                <pre><code>
{`// Module pattern using IIFE (Immediately Invoked Function Expression)
const ShoppingCart = (function() {
  // Private variables and functions
  let items = [];
  let total = 0;
  let taxRate = 0.08;
  
  function calculateTax(amount) {
    return amount * taxRate;
  }
  
  function updateTotal() {
    total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
  
  function findItemIndex(id) {
    return items.findIndex(item => item.id === id);
  }
  
  // Public API
  return {
    addItem: function(item) {
      const existingIndex = findItemIndex(item.id);
      
      if (existingIndex > -1) {
        items[existingIndex].quantity += item.quantity || 1;
      } else {
        items.push({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity || 1
        });
      }
      
      updateTotal();
      return this; // Enable method chaining
    },
    
    removeItem: function(id) {
      const index = findItemIndex(id);
      if (index > -1) {
        items.splice(index, 1);
        updateTotal();
      }
      return this;
    },
    
    updateQuantity: function(id, quantity) {
      const index = findItemIndex(id);
      if (index > -1 && quantity > 0) {
        items[index].quantity = quantity;
        updateTotal();
      } else if (index > -1 && quantity === 0) {
        this.removeItem(id);
      }
      return this;
    },
    
    getItems: function() {
      return items.map(item => ({ ...item })); // Return copies
    },
    
    getTotal: function() {
      return total;
    },
    
    getTotalWithTax: function() {
      return total + calculateTax(total);
    },
    
    getTaxAmount: function() {
      return calculateTax(total);
    },
    
    clear: function() {
      items = [];
      total = 0;
      return this;
    },
    
    getItemCount: function() {
      return items.reduce((count, item) => count + item.quantity, 0);
    },
    
    // Configuration methods
    setTaxRate: function(rate) {
      if (rate >= 0 && rate <= 1) {
        taxRate = rate;
        return true;
      }
      return false;
    },
    
    getTaxRate: function() {
      return taxRate;
    }
  };
})();

// Usage
ShoppingCart.addItem({ id: 1, name: 'Laptop', price: 999.99, quantity: 1 });
ShoppingCart.addItem({ id: 2, name: 'Mouse', price: 29.99, quantity: 2 });

console.log('Items:', ShoppingCart.getItems());
console.log('Total:', ShoppingCart.getTotal()); // 1059.97
console.log('Total with tax:', ShoppingCart.getTotalWithTax()); // 1144.77

// Private variables are not accessible
console.log(ShoppingCart.items); // undefined
console.log(ShoppingCart.taxRate); // undefined

// Event emitter module
const EventEmitter = (function() {
  let events = {};
  
  function getEventListeners(eventName) {
    if (!events[eventName]) {
      events[eventName] = [];
    }
    return events[eventName];
  }
  
  return {
    on: function(eventName, callback) {
      getEventListeners(eventName).push(callback);
      return this;
    },
    
    off: function(eventName, callback) {
      const listeners = getEventListeners(eventName);
      const index = listeners.indexOf(callback);
      if (index > -1) {
        listeners.splice(index, 1);
      }
      return this;
    },
    
    emit: function(eventName, data) {
      const listeners = getEventListeners(eventName);
      listeners.forEach(callback => {
        try {
          callback(data);
        } catch (error) {
          console.error('Error in event listener:', error);
        }
      });
      return this;
    },
    
    once: function(eventName, callback) {
      const onceWrapper = (data) => {
        callback(data);
        this.off(eventName, onceWrapper);
      };
      this.on(eventName, onceWrapper);
      return this;
    },
    
    getEventNames: function() {
      return Object.keys(events);
    },
    
    getListenerCount: function(eventName) {
      return getEventListeners(eventName).length;
    },
    
    removeAllListeners: function(eventName) {
      if (eventName) {
        events[eventName] = [];
      } else {
        events = {};
      }
      return this;
    }
  };
})();

// Usage
EventEmitter.on('user-login', (user) => {
  console.log('User logged in:', user.name);
});

EventEmitter.on('user-login', (user) => {
  console.log('Updating login statistics for:', user.id);
});

EventEmitter.emit('user-login', { id: 1, name: 'John Doe' });

// Configuration module
const AppConfig = (function() {
  let config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    retries: 3,
    debug: false
  };
  
  let environment = 'development';
  
  return {
    get: function(key) {
      return config[key];
    },
    
    set: function(key, value) {
      const oldValue = config[key];
      config[key] = value;
      
      // Emit config change event
      if (typeof EventEmitter !== 'undefined') {
        EventEmitter.emit('config-changed', {
          key: key,
          oldValue: oldValue,
          newValue: value
        });
      }
      
      return this;
    },
    
    getAll: function() {
      return { ...config }; // Return copy
    },
    
    setEnvironment: function(env) {
      environment = env;
      
      // Environment-specific defaults
      if (env === 'production') {
        config.debug = false;
        config.apiUrl = 'https://api.production.com';
      } else if (env === 'development') {
        config.debug = true;
        config.apiUrl = 'https://api.dev.com';
      }
      
      return this;
    },
    
    getEnvironment: function() {
      return environment;
    },
    
    reset: function() {
      config = {
        apiUrl: 'https://api.example.com',
        timeout: 5000,
        retries: 3,
        debug: false
      };
      return this;
    }
  };
})();

// Usage
console.log('API URL:', AppConfig.get('apiUrl'));
AppConfig.set('timeout', 10000).set('debug', true);
console.log('Updated config:', AppConfig.getAll());`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Common Closure Patterns */}
        <section className="js-topic-section">
          <h2>🎨 Common Closure Patterns</h2>
          
          <div className="js-patterns-examples">
            <div className="js-pattern-card">
              <h3>Factory Functions</h3>
              <div className="js-code-example">
                <pre><code>
{`// Factory functions create objects with closures
function createAnimal(species, name, age) {
  // Private variables
  let _species = species;
  let _name = name;
  let _age = age;
  let _energy = 100;
  let _happiness = 50;
  
  // Private methods
  function validateAge(newAge) {
    return newAge >= 0 && newAge <= 100;
  }
  
  function updateMood() {
    if (_energy < 20) _happiness -= 10;
    if (_energy > 80) _happiness += 5;
    _happiness = Math.max(0, Math.min(100, _happiness));
  }
  
  // Return object with methods that form closures
  return {
    getName: () => _name,
    getSpecies: () => _species,
    getAge: () => _age,
    getEnergy: () => _energy,
    getHappiness: () => _happiness,
    
    setName: function(newName) {
      if (typeof newName === 'string' && newName.trim()) {
        _name = newName.trim();
        return true;
      }
      return false;
    },
    
    ageOneYear: function() {
      if (_age < 100) {
        _age++;
        _energy = Math.max(0, _energy - 5);
        updateMood();
      }
      return this;
    },
    
    feed: function(amount = 20) {
      _energy = Math.min(100, _energy + amount);
      _happiness = Math.min(100, _happiness + 10);
      updateMood();
      return this;
    },
    
    exercise: function(intensity = 'medium') {
      const energyCost = {
        light: 10,
        medium: 20,
        intense: 30
      };
      
      _energy = Math.max(0, _energy - (energyCost[intensity] || 20));
      _happiness = Math.min(100, _happiness + 15);
      updateMood();
      return this;
    },
    
    sleep: function(hours = 8) {
      const energyGain = Math.min(40, hours * 5);
      _energy = Math.min(100, _energy + energyGain);
      updateMood();
      return this;
    },
    
    getStatus: function() {
      let status = 'neutral';
      if (_happiness > 70 && _energy > 50) status = 'happy';
      else if (_happiness < 30 || _energy < 20) status = 'unhappy';
      
      return {
        name: _name,
        species: _species,
        age: _age,
        energy: _energy,
        happiness: _happiness,
        status: status
      };
    }
  };
}

// Create animals
const dog = createAnimal('Dog', 'Buddy', 3);
const cat = createAnimal('Cat', 'Whiskers', 2);

console.log(dog.getStatus());
dog.feed().exercise('light').sleep(6);
console.log('After activities:', dog.getStatus());

// Each animal maintains its own private state
console.log('Dog energy:', dog.getEnergy());
console.log('Cat energy:', cat.getEnergy()); // Independent

// Timer/Scheduler factory
function createScheduler() {
  let tasks = [];
  let timers = new Map();
  let taskId = 0;
  
  return {
    scheduleOnce: function(callback, delay, ...args) {
      const id = ++taskId;
      
      const timer = setTimeout(() => {
        try {
          callback(...args);
        } catch (error) {
          console.error('Scheduled task error:', error);
        }
        timers.delete(id);
      }, delay);
      
      timers.set(id, timer);
      tasks.push({ id, type: 'once', delay, scheduled: Date.now() });
      
      return id;
    },
    
    scheduleRepeating: function(callback, interval, ...args) {
      const id = ++taskId;
      
      const timer = setInterval(() => {
        try {
          callback(...args);
        } catch (error) {
          console.error('Repeating task error:', error);
        }
      }, interval);
      
      timers.set(id, timer);
      tasks.push({ id, type: 'repeating', interval, scheduled: Date.now() });
      
      return id;
    },
    
    cancel: function(id) {
      if (timers.has(id)) {
        const timer = timers.get(id);
        clearTimeout(timer);
        clearInterval(timer);
        timers.delete(id);
        
        tasks = tasks.filter(task => task.id !== id);
        return true;
      }
      return false;
    },
    
    cancelAll: function() {
      timers.forEach((timer) => {
        clearTimeout(timer);
        clearInterval(timer);
      });
      timers.clear();
      tasks = [];
    },
    
    getActiveTasks: function() {
      return tasks.map(task => ({ ...task }));
    },
    
    getTaskCount: function() {
      return tasks.length;
    }
  };
}

// Usage
const scheduler = createScheduler();

const taskId1 = scheduler.scheduleOnce(() => {
  console.log('Task executed once!');
}, 1000);

const taskId2 = scheduler.scheduleRepeating(() => {
  console.log('Repeating task executed at', new Date().toLocaleTimeString());
}, 2000);

console.log('Active tasks:', scheduler.getTaskCount());

// Cancel after 10 seconds
setTimeout(() => {
  scheduler.cancel(taskId2);
  console.log('Repeating task cancelled');
}, 10000);`}
                </code></pre>
              </div>
            </div>

            <div className="js-pattern-card">
              <h3>Memoization with Closures</h3>
              <div className="js-code-example">
                <pre><code>
{`// Memoization - caching function results
function createMemoizedFunction(fn) {
  const cache = new Map();
  
  return function(...args) {
    // Create cache key from arguments
    const key = JSON.stringify(args);
    
    // Return cached result if available
    if (cache.has(key)) {
      console.log('Cache hit for:', key);
      return cache.get(key);
    }
    
    // Calculate and cache result
    console.log('Cache miss for:', key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    
    return result;
  };
}

// Expensive calculation function
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Create memoized version
const memoizedFib = createMemoizedFunction(fibonacci);

console.time('First call');
console.log('Fibonacci(40):', memoizedFib(40));
console.timeEnd('First call');

console.time('Second call');
console.log('Fibonacci(40):', memoizedFib(40)); // Much faster!
console.timeEnd('Second call');

// Advanced memoization with TTL (Time To Live)
function createMemoizedWithTTL(fn, ttlMs = 60000) {
  const cache = new Map();
  
  function cleanExpired() {
    const now = Date.now();
    for (let [key, entry] of cache.entries()) {
      if (now - entry.timestamp > ttlMs) {
        cache.delete(key);
      }
    }
  }
  
  return function(...args) {
    cleanExpired(); // Clean expired entries
    
    const key = JSON.stringify(args);
    const now = Date.now();
    
    if (cache.has(key)) {
      const entry = cache.get(key);
      if (now - entry.timestamp <= ttlMs) {
        console.log('Fresh cache hit for:', key);
        return entry.value;
      } else {
        cache.delete(key); // Remove expired entry
      }
    }
    
    console.log('Computing fresh result for:', key);
    const result = fn.apply(this, args);
    cache.set(key, { value: result, timestamp: now });
    
    return result;
  };
}

// API call simulation
function simulateAPICall(endpoint) {
  console.log('Making API call to:', endpoint);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: 'Response from ' + endpoint, timestamp: Date.now() });
    }, 1000);
  });
}

const cachedAPICall = createMemoizedWithTTL(simulateAPICall, 5000); // 5 second TTL

// Usage
cachedAPICall('/users').then(console.log);
cachedAPICall('/users').then(console.log); // Cached

// Debounce function using closures
function createDebounced(func, delay) {
  let timeoutId;
  let lastArgs;
  
  return function(...args) {
    lastArgs = args;
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func.apply(this, lastArgs);
    }, delay);
  };
}

// Throttle function using closures
function createThrottled(func, limit) {
  let inThrottle;
  let lastResult;
  
  return function(...args) {
    if (!inThrottle) {
      lastResult = func.apply(this, args);
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
    
    return lastResult;
  };
}

// Usage examples
const debouncedSearch = createDebounced((query) => {
  console.log('Searching for:', query);
}, 300);

const throttledScroll = createThrottled(() => {
  console.log('Scroll handler executed at:', Date.now());
}, 100);

// Simulate rapid calls
debouncedSearch('a');
debouncedSearch('ab');
debouncedSearch('abc'); // Only this will execute after 300ms

// Rate limiter using closures
function createRateLimiter(maxCalls, windowMs) {
  const calls = [];
  
  return function(fn, ...args) {
    const now = Date.now();
    
    // Remove calls outside the window
    while (calls.length > 0 && calls[0] <= now - windowMs) {
      calls.shift();
    }
    
    // Check if we can make the call
    if (calls.length < maxCalls) {
      calls.push(now);
      return fn(...args);
    } else {
      console.log('Rate limit exceeded. Try again later.');
      return null;
    }
  };
}

const rateLimitedFunction = createRateLimiter(5, 60000); // 5 calls per minute

// Function composition with closures
function createPipeline(...functions) {
  return function(input) {
    return functions.reduce((acc, fn) => fn(acc), input);
  };
}

// Create processing pipeline
const processData = createPipeline(
  (data) => data.trim(),
  (data) => data.toLowerCase(),
  (data) => data.replace(/[^a-z0-9]/g, '-'),
  (data) => data.replace(/-+/g, '-'),
  (data) => data.replace(/^-|-$/g, '')
);

console.log(processData('  Hello World! @#$  ')); // 'hello-world'`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Memory Management */}
        <section className="js-topic-section">
          <h2>💾 Memory Management and Performance</h2>
          
          <div className="js-memory-examples">
            <div className="js-memory-card">
              <h3>Memory Leaks and Prevention</h3>
              <div className="js-code-example">
                <pre><code>
{`// Common memory leak patterns with closures

// ❌ Memory leak - circular references
function createMemoryLeak() {
  const largeData = new Array(1000000).fill('large data');
  
  const obj = {
    data: largeData,
    cleanup: function() {
      // This creates a circular reference
      // The function holds reference to 'largeData'
      // But 'obj' also holds reference to the function
      console.log('Cleaning up data of size:', this.data.length);
    }
  };
  
  // The closure captures 'largeData' even though it's not needed
  obj.processData = function() {
    // This function doesn't use largeData but still captures it
    console.log('Processing...');
  };
  
  return obj; // Memory leak: largeData won't be garbage collected
}

// ✅ Fixed version - avoid unnecessary captures
function createMemoryEfficient() {
  const largeData = new Array(1000000).fill('large data');
  
  // Process data immediately and only keep what's needed
  const processedResult = largeData.length; // Only keep the length
  
  return {
    getDataSize: function() {
      return processedResult; // Captures only the number, not the array
    },
    
    cleanup: function() {
      console.log('Data size was:', processedResult);
    }
  };
  // largeData can now be garbage collected
}

// ❌ Event listener memory leak
function createEventListenerLeak() {
  const largeObject = { data: new Array(100000).fill('data') };
  
  document.addEventListener('click', function() {
    // This captures largeObject even if not used
    console.log('Click detected');
  });
  
  // largeObject cannot be garbage collected because of the event listener
}

// ✅ Proper event listener management
function createProperEventListener() {
  const largeObject = { data: new Array(100000).fill('data') };
  
  // Don't capture unnecessary variables
  function handleClick() {
    console.log('Click detected');
  }
  
  document.addEventListener('click', handleClick);
  
  // Return cleanup function
  return function cleanup() {
    document.removeEventListener('click', handleClick);
  };
  // largeObject can be garbage collected when this function ends
}

// Memory-conscious closure factory
function createMemoryConsciousFunction() {
  // Large data that we want to process
  const hugeArray = new Array(1000000).fill(0).map((_, i) => i);
  
  // Process the data immediately
  const sum = hugeArray.reduce((a, b) => a + b, 0);
  const average = sum / hugeArray.length;
  const max = Math.max(...hugeArray);
  const min = Math.min(...hugeArray);
  
  // Don't keep reference to the huge array in the closure
  // Return function that only captures the processed results
  return function getStats() {
    return {
      sum: sum,
      average: average,
      max: max,
      min: min,
      count: hugeArray.length // Only capture the length, not the array
    };
  };
  // hugeArray can be garbage collected here
}

// WeakMap for memory-safe associations
const createWeakMapCache = (() => {
  const cache = new WeakMap();
  
  return function(obj) {
    if (cache.has(obj)) {
      return cache.get(obj);
    }
    
    // Create expensive computation result
    const result = {
      processed: Date.now(),
      data: 'Processed data for ' + obj.id
    };
    
    cache.set(obj, result);
    return result;
  };
})();

// Usage - objects can be garbage collected when no longer referenced
let tempObj = { id: 'temp123' };
console.log(createWeakMapCache(tempObj));
tempObj = null; // Object can now be garbage collected, cache entry removed

// Memory monitoring utility
function createMemoryMonitor() {
  let measurements = [];
  let isMonitoring = false;
  let intervalId;
  
  function measure() {
    if (performance.memory) {
      const memory = {
        timestamp: Date.now(),
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit
      };
      measurements.push(memory);
      
      // Keep only last 100 measurements
      if (measurements.length > 100) {
        measurements.shift();
      }
      
      return memory;
    }
    return null;
  }
  
  return {
    start: function(interval = 1000) {
      if (!isMonitoring) {
        isMonitoring = true;
        intervalId = setInterval(measure, interval);
        console.log('Memory monitoring started');
      }
    },
    
    stop: function() {
      if (isMonitoring) {
        isMonitoring = false;
        clearInterval(intervalId);
        console.log('Memory monitoring stopped');
      }
    },
    
    getMeasurements: function() {
      return measurements.slice(); // Return copy
    },
    
    getCurrentMemory: function() {
      return measure();
    },
    
    getMemoryTrend: function() {
      if (measurements.length < 2) return null;
      
      const recent = measurements.slice(-10);
      const avg = recent.reduce((sum, m) => sum + m.used, 0) / recent.length;
      const first = recent[0].used;
      const last = recent[recent.length - 1].used;
      
      return {
        average: avg,
        trend: last > first ? 'increasing' : 'decreasing',
        change: last - first
      };
    },
    
    reset: function() {
      measurements = [];
    }
  };
}

// Cleanup utility for closures
function createCleanupManager() {
  const cleanupTasks = [];
  
  return {
    addCleanup: function(cleanupFn) {
      cleanupTasks.push(cleanupFn);
    },
    
    cleanup: function() {
      console.log('Running', cleanupTasks.length, 'cleanup tasks');
      cleanupTasks.forEach((task, index) => {
        try {
          task();
        } catch (error) {
          console.error('Cleanup task', index, 'failed:', error);
        }
      });
      cleanupTasks.length = 0; // Clear the array
    },
    
    getTaskCount: function() {
      return cleanupTasks.length;
    }
  };
}

// Usage example
const monitor = createMemoryMonitor();
monitor.start(500);

// Create some memory usage
const objects = [];
for (let i = 0; i < 1000; i++) {
  objects.push(createMemoryEfficient());
}

setTimeout(() => {
  console.log('Memory trend:', monitor.getMemoryTrend());
  monitor.stop();
}, 5000);

// Best practices summary
const bestPractices = {
  avoidUnnecessaryCaptures: 'Only capture variables that are actually used',
  cleanupEventListeners: 'Always remove event listeners when done',
  useWeakReferences: 'Use WeakMap/WeakSet for temporary associations',
  processDataEarly: 'Transform large data early, keep only what you need',
  implementCleanup: 'Provide cleanup methods for complex closures',
  monitorMemory: 'Monitor memory usage in long-running applications'
};

console.log('Closure memory best practices:', bestPractices);`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>⭐ Closure Best Practices</h2>
          
          <div className="js-closure-practices">
            <div className="js-practice-group">
              <h3>✅ Design Guidelines</h3>
              <ul>
                <li><strong>Minimize captures:</strong> Only capture variables that are actually needed</li>
                <li><strong>Prefer parameters:</strong> Pass data as parameters instead of capturing from scope</li>
                <li><strong>Return cleanup functions:</strong> Provide ways to break circular references</li>
                <li><strong>Use WeakMap for associations:</strong> Avoid memory leaks with object associations</li>
                <li><strong>Document closure behavior:</strong> Make it clear what variables are captured</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🚀 Performance Tips</h3>
              <ul>
                <li><strong>Avoid creating closures in loops:</strong> Create them outside when possible</li>
                <li><strong>Reuse closure functions:</strong> Don't recreate the same closure repeatedly</li>
                <li><strong>Process data early:</strong> Transform large data before creating closures</li>
                <li><strong>Monitor memory usage:</strong> Watch for memory leaks in long-running apps</li>
                <li><strong>Use memoization wisely:</strong> Cache expensive computations with TTL</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🛡️ Security Considerations</h3>
              <ul>
                <li><strong>Don't expose sensitive data:</strong> Keep secrets truly private</li>
                <li><strong>Validate closure inputs:</strong> Check parameters in closure functions</li>
                <li><strong>Sanitize captured data:</strong> Clean data before capturing in closures</li>
                <li><strong>Limit closure scope:</strong> Don't capture more than necessary</li>
                <li><strong>Use modules for organization:</strong> Organize related closures in modules</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Closures;
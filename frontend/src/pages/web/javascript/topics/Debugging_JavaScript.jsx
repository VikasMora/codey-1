import React from 'react';
import '../Navbarweb.css';

function DebuggingJavaScript() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🐛 Debugging JavaScript</h1>
        <p className="js-topic-subtitle">
          Master debugging techniques, browser dev tools, and strategies to identify and fix JavaScript issues
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction to Debugging */}
        <section className="js-topic-section">
          <h2>🎯 Understanding Debugging</h2>
          <p>
            Debugging is the process of finding and fixing errors (bugs) in your code. Effective debugging 
            is one of the most valuable skills a developer can have. It involves systematic problem-solving, 
            careful observation, and the right tools and techniques.
          </p>
          
          <div className="js-debugging-types">
            <div className="js-debug-card">
              <h3>🚨 Types of Errors</h3>
              <ul>
                <li><strong>Syntax Errors:</strong> Invalid JavaScript syntax that prevents code from running</li>
                <li><strong>Runtime Errors:</strong> Errors that occur during code execution</li>
                <li><strong>Logic Errors:</strong> Code runs but produces incorrect results</li>
                <li><strong>Type Errors:</strong> Operations on incompatible data types</li>
                <li><strong>Reference Errors:</strong> Using undefined variables or functions</li>
              </ul>
            </div>

            <div className="js-debug-card">
              <h3>🔍 Debugging Process</h3>
              <ol>
                <li><strong>Reproduce:</strong> Make the bug happen consistently</li>
                <li><strong>Isolate:</strong> Narrow down where the problem occurs</li>
                <li><strong>Investigate:</strong> Examine code, data, and execution flow</li>
                <li><strong>Hypothesize:</strong> Form theories about the cause</li>
                <li><strong>Test:</strong> Verify your hypothesis with changes</li>
                <li><strong>Fix:</strong> Implement the solution</li>
                <li><strong>Verify:</strong> Ensure the fix works and doesn't break other things</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Console Methods */}
        <section className="js-topic-section">
          <h2>🖥️ Console Debugging Methods</h2>
          <p>
            The browser console is your first and most important debugging tool. 
            Learn to use various console methods effectively to track down issues.
          </p>
          
          <div className="js-console-methods">
            <div className="js-method-card">
              <h3>📝 Basic Console Methods</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic logging
console.log('Simple message');
console.log('User ID:', userId, 'Name:', userName);

// Different log levels
console.info('Information message');
console.warn('Warning message');
console.error('Error message');
console.debug('Debug message (may not show in production)');

// Styling console output
console.log('%cStyled message', 'color: blue; font-size: 16px; font-weight: bold;');
console.log('%cError: %cSomething went wrong', 
  'color: red; font-weight: bold;', 
  'color: black; font-weight: normal;');

// Group related logs
console.group('User Processing');
console.log('Processing user:', user.name);
console.log('User role:', user.role);
console.groupEnd();

// Collapsible groups
console.groupCollapsed('Detailed Debug Info');
console.log('Verbose debug information...');
console.groupEnd();

// Assertions
console.assert(user.age > 0, 'User age must be positive', user);
console.assert(Array.isArray(items), 'Items should be an array', items);

// Counting
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.count('Even numbers');
  } else {
    console.count('Odd numbers');
  }
}
console.countReset('Even numbers');

// Timing
console.time('Data Processing');
// ... some expensive operation
processLargeDataset();
console.timeEnd('Data Processing');

// Table display for objects and arrays
const users = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'London' },
  { name: 'Charlie', age: 35, city: 'Tokyo' }
];
console.table(users);
console.table(users, ['name', 'age']); // Show only specific columns

// Stack trace
function deepFunction() {
  console.trace('Function call stack');
}
function middleFunction() { deepFunction(); }
function topFunction() { middleFunction(); }
topFunction();`}
                </code></pre>
              </div>
            </div>

            <div className="js-method-card">
              <h3>🔧 Advanced Console Techniques</h3>
              <div className="js-code-example">
                <pre><code>
{`// Conditional logging
const DEBUG = true;
const debug = DEBUG ? console.log.bind(console, '🐛') : () => {};
debug('This only shows when DEBUG is true');

// Custom logger with timestamps
class Logger {
  static log(message, ...args) {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] \${message}\`, ...args);
  }
  
  static error(message, error) {
    const timestamp = new Date().toISOString();
    console.error(\`[\${timestamp}] ERROR: \${message}\`, error);
  }
  
  static performance(label, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(\`⏱️ \${label}: \${(end - start).toFixed(2)}ms\`);
    return result;
  }
}

// Usage
Logger.log('Processing started');
Logger.performance('Array sorting', () => {
  return largeArray.sort((a, b) => a - b);
});

// Memory usage monitoring
function logMemoryUsage() {
  const memory = performance.memory;
  console.log('Memory Usage:', {
    used: \`\${Math.round(memory.usedJSHeapSize / 1024 / 1024)} MB\`,
    total: \`\${Math.round(memory.totalJSHeapSize / 1024 / 1024)} MB\`,
    limit: \`\${Math.round(memory.jsHeapSizeLimit / 1024 / 1024)} MB\`
  });
}

// Object inspection helper
function inspect(obj, label = 'Object') {
  console.group(\`🔍 \${label} Inspection\`);
  console.log('Type:', typeof obj);
  console.log('Constructor:', obj?.constructor?.name);
  console.log('Keys:', Object.keys(obj));
  console.log('Values:', Object.values(obj));
  console.log('Full object:', obj);
  console.groupEnd();
}

// Function call tracker
function trackCalls(fn, name) {
  return function(...args) {
    console.log(\`📞 Calling \${name} with args:\`, args);
    const result = fn.apply(this, args);
    console.log(\`✅ \${name} returned:\`, result);
    return result;
  };
}

// Usage
const trackedAdd = trackCalls((a, b) => a + b, 'add');
trackedAdd(5, 3); // Logs function call and result`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Browser Developer Tools */}
        <section className="js-topic-section">
          <h2>🔧 Browser Developer Tools</h2>
          
          <div className="js-devtools-guide">
            <div className="js-devtools-card">
              <h3>🎯 Sources Panel Debugging</h3>
              <div className="js-devtools-content">
                <h4>Setting Breakpoints</h4>
                <ul>
                  <li><strong>Line Breakpoints:</strong> Click line numbers in Sources panel</li>
                  <li><strong>Conditional Breakpoints:</strong> Right-click line → Add conditional breakpoint</li>
                  <li><strong>Logpoints:</strong> Console.log without modifying code</li>
                  <li><strong>Exception Breakpoints:</strong> Pause on caught/uncaught exceptions</li>
                </ul>
                
                <h4>Debugger Controls</h4>
                <div className="js-code-example">
                  <pre><code>
{`// Programmatic breakpoints
function processData(data) {
  debugger; // Execution will pause here when dev tools are open
  
  if (!data || data.length === 0) {
    debugger; // Conditional debugging point
    throw new Error('No data provided');
  }
  
  return data.map(item => {
    // Set breakpoint here to inspect each iteration
    return transformItem(item);
  });
}

// Using debugger statement effectively
function complexCalculation(input) {
  let step1 = input * 2;
  debugger; // Check step1 value
  
  let step2 = step1 + 10;
  debugger; // Check step2 value
  
  return step2 / 3;
}`}
                  </code></pre>
                </div>
                
                <h4>Stepping Through Code</h4>
                <ul>
                  <li><strong>F8 (Continue):</strong> Resume execution</li>
                  <li><strong>F10 (Step Over):</strong> Execute current line</li>
                  <li><strong>F11 (Step Into):</strong> Enter function calls</li>
                  <li><strong>Shift+F11 (Step Out):</strong> Exit current function</li>
                </ul>
              </div>
            </div>

            <div className="js-devtools-card">
              <h3>👀 Watch Expressions & Call Stack</h3>
              <div className="js-devtools-content">
                <div className="js-code-example">
                  <pre><code>
{`// Variables to watch during debugging
function calculateTotal(items, taxRate = 0.1) {
  // Add these expressions to Watch panel:
  // items.length
  // taxRate
  // subtotal
  // tax
  // total
  
  const subtotal = items.reduce((sum, item) => {
    // Watch: sum, item, item.price
    return sum + (item.price * item.quantity);
  }, 0);
  
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  
  // Call stack shows:
  // calculateTotal (current)
  // processOrder (caller)
  // handleCheckout (caller's caller)
  
  return { subtotal, tax, total };
}

// Scope inspection example
function outerFunction(param1) {
  const outerVar = 'outer scope';
  
  function innerFunction(param2) {
    const innerVar = 'inner scope';
    debugger; // Inspect Local, Closure, and Global scopes
    return outerVar + innerVar + param1 + param2;
  }
  
  return innerFunction;
}`}
                  </code></pre>
                </div>
                
                <h4>Scope Inspection</h4>
                <ul>
                  <li><strong>Local Scope:</strong> Current function variables</li>
                  <li><strong>Closure Scope:</strong> Variables from outer functions</li>
                  <li><strong>Global Scope:</strong> Global variables and window object</li>
                  <li><strong>Script Scope:</strong> Module-level variables</li>
                </ul>
              </div>
            </div>

            <div className="js-devtools-card">
              <h3>🌐 Network & Performance Debugging</h3>
              <div className="js-devtools-content">
                <h4>Network Tab Usage</h4>
                <ul>
                  <li><strong>Monitor API Calls:</strong> Check request/response data</li>
                  <li><strong>Timing Analysis:</strong> Identify slow requests</li>
                  <li><strong>Headers Inspection:</strong> Verify authentication, CORS</li>
                  <li><strong>Response Preview:</strong> Check API response format</li>
                </ul>
                
                <div className="js-code-example">
                  <pre><code>
{`// Network debugging helpers
async function debuggedFetch(url, options = {}) {
  console.group(\`🌐 Fetching: \${url}\`);
  console.log('Options:', options);
  
  const startTime = performance.now();
  
  try {
    const response = await fetch(url, options);
    const endTime = performance.now();
    
    console.log(\`📊 Status: \${response.status}\`);
    console.log(\`⏱️ Time: \${(endTime - startTime).toFixed(2)}ms\`);
    console.log('Headers:', Object.fromEntries(response.headers));
    
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    
    return response;
  } catch (error) {
    console.error('❌ Fetch failed:', error);
    throw error;
  } finally {
    console.groupEnd();
  }
}

// Performance monitoring
function measureFunction(fn, name) {
  return function(...args) {
    const mark1 = \`\${name}-start\`;
    const mark2 = \`\${name}-end\`;
    const measure = \`\${name}-duration\`;
    
    performance.mark(mark1);
    const result = fn.apply(this, args);
    performance.mark(mark2);
    performance.measure(measure, mark1, mark2);
    
    const entry = performance.getEntriesByName(measure)[0];
    console.log(\`📈 \${name}: \${entry.duration.toFixed(2)}ms\`);
    
    return result;
  };
}`}
                  </code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Debugging Scenarios */}
        <section className="js-topic-section">
          <h2>🔍 Common Debugging Scenarios</h2>
          
          <div className="js-scenarios">
            <div className="js-scenario-card">
              <h3>🚫 Undefined Variables & Functions</h3>
              <div className="js-scenario-content">
                <div className="js-code-example">
                  <pre><code>
{`// Problem: ReferenceError: userName is not defined
console.log(userName); // ❌ Error

// Debugging approach:
// 1. Check if variable is declared
let userName; // ✅ Declare first
console.log(userName); // undefined (not an error)

// 2. Check scope issues
function outer() {
  let localVar = 'hello';
  
  function inner() {
    console.log(localVar); // ✅ Accessible (closure)
    console.log(anotherLocal); // ❌ ReferenceError
  }
  
  let anotherLocal = 'world'; // Hoisting issue
  inner();
}

// 3. Safe property access
const user = { profile: { name: 'John' } };

// Unsafe access
console.log(user.profile.name); // Works
console.log(user.settings.theme); // ❌ TypeError

// Safe access patterns
console.log(user.settings?.theme); // ✅ Optional chaining
console.log(user.settings && user.settings.theme); // ✅ Logical AND
console.log((user.settings || {}).theme); // ✅ Default object

// Debugging helper for object paths
function safeGet(obj, path, defaultValue = undefined) {
  try {
    return path.split('.').reduce((current, key) => {
      console.log(\`Accessing key '\${key}' on:\`, current);
      return current[key];
    }, obj) ?? defaultValue;
  } catch (error) {
    console.error(\`Error accessing path '\${path}':\`, error);
    return defaultValue;
  }
}

// Usage
const theme = safeGet(user, 'settings.theme', 'default');`}
                  </code></pre>
                </div>
              </div>
            </div>

            <div className="js-scenario-card">
              <h3>🔄 Asynchronous Code Issues</h3>
              <div className="js-scenario-content">
                <div className="js-code-example">
                  <pre><code>
{`// Problem: Timing and Promise issues
async function debugAsyncIssues() {
  console.log('1. Starting async operation');
  
  // Common mistake: Not awaiting promises
  const userData = getUserData(); // ❌ Returns Promise, not data
  console.log('User name:', userData.name); // ❌ undefined
  
  // Correct approach
  const userDataCorrect = await getUserData(); // ✅ Await the promise
  console.log('User name:', userDataCorrect.name); // ✅ Works
  
  // Debugging promise chains
  return fetch('/api/user')
    .then(response => {
      console.log('📡 Response received:', response.status);
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}\`);
      }
      return response.json();
    })
    .then(data => {
      console.log('📄 Data parsed:', data);
      return data;
    })
    .catch(error => {
      console.error('❌ Promise chain failed:', error);
      // Return fallback data or re-throw
      throw error;
    });
}

// Race condition debugging
let counter = 0;

async function incrementAsync() {
  const currentValue = counter;
  console.log(\`📊 Current value: \${currentValue}\`);
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 100));
  
  counter = currentValue + 1;
  console.log(\`📈 New value: \${counter}\`);
}

// This can cause race conditions
Promise.all([
  incrementAsync(),
  incrementAsync(),
  incrementAsync()
]).then(() => {
  console.log(\`Final counter: \${counter}\`); // May not be 3!
});

// Better approach with proper synchronization
class AsyncCounter {
  constructor() {
    this.counter = 0;
    this.pending = Promise.resolve();
  }
  
  async increment() {
    this.pending = this.pending.then(async () => {
      const current = this.counter;
      console.log(\`Current: \${current}\`);
      
      await new Promise(resolve => setTimeout(resolve, 100));
      
      this.counter = current + 1;
      console.log(\`New: \${this.counter}\`);
    });
    
    return this.pending;
  }
}`}
                  </code></pre>
                </div>
              </div>
            </div>

            <div className="js-scenario-card">
              <h3>📊 Data Type Issues</h3>
              <div className="js-scenario-content">
                <div className="js-code-example">
                  <pre><code>
{`// Type coercion problems
function debugTypeIssues() {
  // String/number confusion
  const userInput = '5'; // From form input
  const multiplier = 3;
  
  console.log(userInput + multiplier); // '53' (string concatenation)
  console.log(userInput * multiplier); // 15 (numeric multiplication)
  
  // Safe conversion
  const safeNumber = Number(userInput);
  if (isNaN(safeNumber)) {
    console.error('Invalid number:', userInput);
    return;
  }
  console.log(safeNumber + multiplier); // 8 (numeric addition)
  
  // Array vs object confusion
  const maybeArray = JSON.parse(jsonString);
  console.log('Is array?', Array.isArray(maybeArray));
  
  // Null vs undefined
  let value1; // undefined
  let value2 = null; // null
  
  console.log('value1 == null:', value1 == null); // true
  console.log('value1 === null:', value1 === null); // false
  console.log('value2 === null:', value2 === null); // true
  
  // Falsy value debugging
  const values = [0, '', false, null, undefined, NaN];
  values.forEach(value => {
    console.log(\`Value: \${value}, Type: \${typeof value}, Truthy: \${!!value}\`);
  });
}

// Type checking utilities
function getDetailedType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  if (value instanceof Date) return 'date';
  if (value instanceof Error) return 'error';
  return typeof value;
}

function validateTypes(obj, schema) {
  const errors = [];
  
  for (const [key, expectedType] of Object.entries(schema)) {
    const actualType = getDetailedType(obj[key]);
    if (actualType !== expectedType) {
      errors.push(\`\${key}: expected \${expectedType}, got \${actualType}\`);
    }
  }
  
  if (errors.length > 0) {
    console.error('Type validation errors:', errors);
    return false;
  }
  
  return true;
}

// Usage
const user = { name: 'John', age: '30', active: true };
const schema = { name: 'string', age: 'number', active: 'boolean' };
validateTypes(user, schema); // Will log age type error`}
                  </code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Debugging Tools */}
        <section className="js-topic-section">
          <h2>🛠️ Advanced Debugging Tools & Techniques</h2>
          
          <div className="js-advanced-tools">
            <div className="js-tool-card">
              <h3>🔬 Memory Leak Detection</h3>
              <div className="js-code-example">
                <pre><code>
{`// Memory leak patterns to watch for
class MemoryLeakDetector {
  constructor() {
    this.eventListeners = new Set();
    this.intervals = new Set();
    this.timeouts = new Set();
  }
  
  // Safe event listener management
  addListener(element, event, handler) {
    element.addEventListener(event, handler);
    this.eventListeners.add({ element, event, handler });
  }
  
  // Safe interval management
  setInterval(callback, delay) {
    const intervalId = setInterval(callback, delay);
    this.intervals.add(intervalId);
    return intervalId;
  }
  
  // Clean up all resources
  cleanup() {
    // Remove event listeners
    this.eventListeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });
    
    // Clear intervals
    this.intervals.forEach(id => clearInterval(id));
    
    // Clear timeouts
    this.timeouts.forEach(id => clearTimeout(id));
    
    // Clear collections
    this.eventListeners.clear();
    this.intervals.clear();
    this.timeouts.clear();
  }
}

// Memory usage monitoring
function monitorMemoryUsage() {
  const measurements = [];
  
  function measure() {
    if (performance.memory) {
      const usage = {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit,
        timestamp: Date.now()
      };
      
      measurements.push(usage);
      
      // Keep only last 100 measurements
      if (measurements.length > 100) {
        measurements.shift();
      }
      
      // Check for memory growth
      if (measurements.length > 10) {
        const recent = measurements.slice(-10);
        const trend = recent[recent.length - 1].used - recent[0].used;
        
        if (trend > 5 * 1024 * 1024) { // 5MB growth
          console.warn('⚠️ Memory usage trending upward:', {
            growth: \`\${(trend / 1024 / 1024).toFixed(2)} MB\`,
            current: \`\${(usage.used / 1024 / 1024).toFixed(2)} MB\`
          });
        }
      }
    }
  }
  
  return setInterval(measure, 5000); // Check every 5 seconds
}`}
                </code></pre>
              </div>
            </div>

            <div className="js-tool-card">
              <h3>🎨 Visual Debugging Techniques</h3>
              <div className="js-code-example">
                <pre><code>
{`// Visual debugging with DOM highlighting
class VisualDebugger {
  static highlightElement(element, color = 'red', duration = 2000) {
    const originalBorder = element.style.border;
    element.style.border = \`3px solid \${color}\`;
    element.style.boxShadow = \`0 0 10px \${color}\`;
    
    setTimeout(() => {
      element.style.border = originalBorder;
      element.style.boxShadow = '';
    }, duration);
  }
  
  static showElementInfo(element) {
    const info = {
      tagName: element.tagName,
      id: element.id,
      classes: Array.from(element.classList),
      dimensions: element.getBoundingClientRect(),
      computedStyle: window.getComputedStyle(element)
    };
    
    console.group('🎯 Element Debug Info');
    console.log('Element:', element);
    console.table(info.dimensions);
    console.log('Classes:', info.classes);
    console.groupEnd();
    
    this.highlightElement(element, 'blue');
  }
  
  static trackElementChanges(element, callback) {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        console.log('🔄 Element changed:', {
          type: mutation.type,
          target: mutation.target,
          oldValue: mutation.oldValue,
          addedNodes: Array.from(mutation.addedNodes),
          removedNodes: Array.from(mutation.removedNodes)
        });
        
        if (callback) callback(mutation);
      });
    });
    
    observer.observe(element, {
      childList: true,
      attributes: true,
      subtree: true,
      attributeOldValue: true
    });
    
    return observer;
  }
}

// Event flow debugging
function debugEventFlow(element) {
  ['mousedown', 'mouseup', 'click', 'focus', 'blur'].forEach(eventType => {
    element.addEventListener(eventType, (e) => {
      console.log(\`📅 Event: \${eventType}\`, {
        target: e.target.tagName,
        currentTarget: e.currentTarget.tagName,
        phase: e.eventPhase,
        bubbles: e.bubbles,
        cancelable: e.cancelable
      });
    }, true); // Capture phase
    
    element.addEventListener(eventType, (e) => {
      console.log(\`📅 Event (bubble): \${eventType}\`, {
        target: e.target.tagName,
        currentTarget: e.currentTarget.tagName
      });
    }); // Bubble phase
  });
}

// Performance profiling
class PerformanceProfiler {
  static profile(name, fn) {
    return function(...args) {
      const startTime = performance.now();
      performance.mark(\`\${name}-start\`);
      
      try {
        const result = fn.apply(this, args);
        
        if (result && typeof result.then === 'function') {
          // Handle promises
          return result.then(value => {
            PerformanceProfiler.logTiming(name, startTime);
            return value;
          }).catch(error => {
            PerformanceProfiler.logTiming(name, startTime, error);
            throw error;
          });
        } else {
          PerformanceProfiler.logTiming(name, startTime);
          return result;
        }
      } catch (error) {
        PerformanceProfiler.logTiming(name, startTime, error);
        throw error;
      }
    };
  }
  
  static logTiming(name, startTime, error = null) {
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    performance.mark(\`\${name}-end\`);
    performance.measure(name, \`\${name}-start\`, \`\${name}-end\`);
    
    const status = error ? '❌' : '✅';
    console.log(\`\${status} \${name}: \${duration.toFixed(2)}ms\`);
    
    if (error) {
      console.error('Error details:', error);
    }
  }
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Debugging Best Practices */}
        <section className="js-topic-section">
          <h2>✅ Debugging Best Practices</h2>
          
          <div className="js-best-practices">
            <div className="js-practice-group">
              <h3>🎯 General Guidelines</h3>
              <ul>
                <li><strong>Read error messages carefully:</strong> They often tell you exactly what's wrong</li>
                <li><strong>Use meaningful variable names:</strong> Makes debugging much easier</li>
                <li><strong>Write small, testable functions:</strong> Easier to isolate problems</li>
                <li><strong>Use version control:</strong> Compare working vs. broken code</li>
                <li><strong>Document your debugging process:</strong> Keep notes on what you tried</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🔧 Tool Usage</h3>
              <ul>
                <li><strong>Master console methods:</strong> Use appropriate log levels and formatting</li>
                <li><strong>Learn keyboard shortcuts:</strong> F12, F8, F10, F11 for efficient debugging</li>
                <li><strong>Use breakpoints strategically:</strong> Not just console.log everywhere</li>
                <li><strong>Inspect network requests:</strong> API issues are common</li>
                <li><strong>Monitor performance:</strong> Identify bottlenecks early</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🧠 Problem-Solving</h3>
              <ul>
                <li><strong>Rubber duck debugging:</strong> Explain your code to someone (or something)</li>
                <li><strong>Binary search approach:</strong> Comment out half the code to isolate issues</li>
                <li><strong>Minimal reproducible example:</strong> Strip away everything non-essential</li>
                <li><strong>Check assumptions:</strong> Verify what you think you know</li>
                <li><strong>Take breaks:</strong> Fresh eyes often spot obvious issues</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🛡️ Prevention</h3>
              <ul>
                <li><strong>Use TypeScript:</strong> Catch type errors at compile time</li>
                <li><strong>Write tests:</strong> Catch regressions early</li>
                <li><strong>Use linting tools:</strong> Catch common mistakes automatically</li>
                <li><strong>Code reviews:</strong> Another pair of eyes on your code</li>
                <li><strong>Error boundaries:</strong> Graceful error handling in production</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DebuggingJavaScript;
import React from 'react';
import '../Navbarweb.css';

function ErrorHandling() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🚨 JavaScript Error Handling</h1>
        <p className="js-topic-subtitle">
          Master error handling: try/catch, custom errors, debugging strategies, and building resilient applications
        </p>
      </div>

      <div className="js-topic-content">
        {/* Understanding JavaScript Errors */}
        <section className="js-topic-section">
          <h2>🧠 Understanding JavaScript Errors</h2>
          <p>
            Error handling is crucial for building robust applications. JavaScript provides several mechanisms
            to catch, handle, and recover from errors. Understanding different error types and handling
            strategies helps create more resilient and user-friendly applications.
          </p>
          
          <div className="js-error-basics">
            <div className="js-basic-example">
              <h3>💡 Types of JavaScript Errors</h3>
              <div className="js-code-example">
                <pre><code>
{`// 1. Syntax Errors - Caught at parse time
// These prevent code from running at all
/*
function syntaxError() {
  console.log('Missing closing parenthesis'
  // SyntaxError: Unexpected end of input
}
*/

// 2. Reference Errors - Variable not found
function referenceErrorExample() {
  try {
    console.log(nonExistentVariable);
  } catch (error) {
    console.log('ReferenceError:', error.message);
    // ReferenceError: nonExistentVariable is not defined
  }
}

// 3. Type Errors - Wrong data type operations
function typeErrorExample() {
  try {
    const number = 42;
    number.toUpperCase(); // Numbers don't have toUpperCase method
  } catch (error) {
    console.log('TypeError:', error.message);
    // TypeError: number.toUpperCase is not a function
  }
  
  try {
    const nullValue = null;
    nullValue.property; // Cannot read property of null
  } catch (error) {
    console.log('TypeError:', error.message);
    // TypeError: Cannot read properties of null
  }
}

// 4. Range Errors - Number out of range
function rangeErrorExample() {
  try {
    const array = new Array(-1); // Negative length not allowed
  } catch (error) {
    console.log('RangeError:', error.message);
    // RangeError: Invalid array length
  }
  
  try {
    const number = 123.456;
    number.toFixed(101); // Precision out of range
  } catch (error) {
    console.log('RangeError:', error.message);
    // RangeError: toFixed() digits argument must be between 0 and 100
  }
}

// 5. URI Errors - Invalid URI operations
function uriErrorExample() {
  try {
    decodeURIComponent('%'); // Incomplete escape sequence
  } catch (error) {
    console.log('URIError:', error.message);
    // URIError: URI malformed
  }
}

// 6. Eval Errors (deprecated but still possible)
function evalErrorExample() {
  try {
    // Modern browsers rarely throw EvalError
    // But it can happen in strict mode or special circumstances
    eval('var x = ;'); // Syntax error in eval
  } catch (error) {
    console.log('Error in eval:', error.message);
  }
}

// Error object properties
function errorObjectExample() {
  try {
    throw new Error('Custom error message');
  } catch (error) {
    console.log('Error properties:');
    console.log('- name:', error.name);           // 'Error'
    console.log('- message:', error.message);     // 'Custom error message'
    console.log('- stack:', error.stack);         // Stack trace (varies by browser)
    
    // Additional properties in some browsers
    if (error.fileName) {
      console.log('- fileName:', error.fileName);
    }
    if (error.lineNumber) {
      console.log('- lineNumber:', error.lineNumber);
    }
    if (error.columnNumber) {
      console.log('- columnNumber:', error.columnNumber);
    }
  }
}

// Runtime vs Compile-time errors
function demonstrateErrorTypes() {
  console.log('=== Demonstrating Different Error Types ===');
  
  // Runtime errors - happen during execution
  try {
    const obj = {};
    obj.method(); // TypeError at runtime
  } catch (error) {
    console.log('Runtime error caught:', error.constructor.name);
  }
  
  // Logic errors - no exception thrown, but wrong behavior
  function logicErrorExample(numbers) {
    let sum = 0;
    for (let i = 1; i <= numbers.length; i++) { // Bug: should start from 0
      sum += numbers[i]; // This will include undefined
    }
    return sum; // Returns NaN due to undefined values
  }
  
  const result = logicErrorExample([1, 2, 3, 4, 5]);
  console.log('Logic error result:', result); // NaN instead of 15
  
  // Asynchronous errors
  setTimeout(() => {
    try {
      throw new Error('Async error');
    } catch (error) {
      console.log('Caught async error:', error.message);
    }
  }, 100);
  
  // Unhandled Promise rejections
  Promise.reject('Unhandled promise rejection')
    .catch(error => {
      console.log('Caught promise rejection:', error);
    });
}

// Error propagation
function errorPropagationExample() {
  function deepFunction() {
    throw new Error('Error from deep function');
  }
  
  function middleFunction() {
    // This function doesn't handle the error, so it propagates up
    deepFunction();
  }
  
  function topFunction() {
    try {
      middleFunction();
    } catch (error) {
      console.log('Error caught at top level:', error.message);
      console.log('Stack trace shows the path:', error.stack);
    }
  }
  
  topFunction();
}

// Global error handling
window.addEventListener('error', (event) => {
  console.log('Global error handler:', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error
  });
});

// Global promise rejection handling
window.addEventListener('unhandledrejection', (event) => {
  console.log('Unhandled promise rejection:', event.reason);
  // Prevent the default behavior (logging to console)
  // event.preventDefault();
});

// Custom error demonstration
class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'CustomError';
    this.code = code;
    this.timestamp = new Date().toISOString();
  }
}

function throwCustomError() {
  throw new CustomError('Something went wrong', 'CUSTOM_001');
}

try {
  throwCustomError();
} catch (error) {
  if (error instanceof CustomError) {
    console.log('Custom error caught:', {
      name: error.name,
      message: error.message,
      code: error.code,
      timestamp: error.timestamp
    });
  }
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Try/Catch/Finally */}
        <section className="js-topic-section">
          <h2>🛡️ Try/Catch/Finally</h2>
          
          <div className="js-trycatch-examples">
            <div className="js-trycatch-card">
              <h3>Basic Error Handling</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic try/catch syntax
function basicTryCatch() {
  try {
    // Code that might throw an error
    const result = riskyOperation();
    console.log('Operation successful:', result);
    return result;
  } catch (error) {
    // Handle the error
    console.error('Operation failed:', error.message);
    return null;
  }
}

function riskyOperation() {
  const random = Math.random();
  if (random < 0.3) {
    throw new Error('Random failure occurred');
  }
  return 'Success! Random value: ' + random;
}

// Try/catch/finally - cleanup code
function tryCatchFinally() {
  let resource = null;
  
  try {
    console.log('Acquiring resource...');
    resource = acquireResource();
    
    console.log('Using resource...');
    const result = useResource(resource);
    
    console.log('Resource operation completed');
    return result;
    
  } catch (error) {
    console.error('Resource operation failed:', error.message);
    return null;
    
  } finally {
    // This ALWAYS executes, regardless of success or failure
    if (resource) {
      console.log('Releasing resource...');
      releaseResource(resource);
    }
    console.log('Cleanup completed');
  }
}

function acquireResource() {
  return { id: Date.now(), type: 'database_connection' };
}

function useResource(resource) {
  // Simulate random failure
  if (Math.random() < 0.4) {
    throw new Error('Resource operation failed');
  }
  return 'Used resource ' + resource.id;
}

function releaseResource(resource) {
  console.log('Resource', resource.id, 'released');
}

// Nested try/catch blocks
function nestedTryCatch() {
  try {
    console.log('Outer try block');
    
    try {
      console.log('Inner try block');
      
      const operation = Math.random();
      if (operation < 0.3) {
        throw new Error('Inner error');
      } else if (operation < 0.6) {
        throw new TypeError('Type error in inner block');
      }
      
      console.log('Inner operation successful');
      
    } catch (innerError) {
      console.log('Inner catch:', innerError.message);
      
      // Re-throw if it's a TypeError
      if (innerError instanceof TypeError) {
        throw innerError; // This will be caught by outer catch
      }
      
      // Handle other errors locally
      console.log('Inner error handled locally');
    }
    
    console.log('Continuing outer try block');
    
  } catch (outerError) {
    console.log('Outer catch:', outerError.message);
  }
}

// Multiple catch blocks (not directly supported, but can be simulated)
function multipleCatchSimulation() {
  try {
    const errorType = Math.random();
    
    if (errorType < 0.25) {
      throw new TypeError('Type error occurred');
    } else if (errorType < 0.5) {
      throw new ReferenceError('Reference error occurred');
    } else if (errorType < 0.75) {
      throw new RangeError('Range error occurred');
    } else {
      throw new Error('Generic error occurred');
    }
    
  } catch (error) {
    // Handle different error types
    if (error instanceof TypeError) {
      console.log('Handling TypeError:', error.message);
      // Specific handling for type errors
    } else if (error instanceof ReferenceError) {
      console.log('Handling ReferenceError:', error.message);
      // Specific handling for reference errors
    } else if (error instanceof RangeError) {
      console.log('Handling RangeError:', error.message);
      // Specific handling for range errors
    } else {
      console.log('Handling generic Error:', error.message);
      // Generic error handling
    }
  }
}

// Conditional error handling
function conditionalErrorHandling() {
  try {
    performComplexOperation();
  } catch (error) {
    // Different handling based on error properties
    if (error.code === 'NETWORK_ERROR') {
      console.log('Network error - retrying...');
      // Implement retry logic
    } else if (error.code === 'VALIDATION_ERROR') {
      console.log('Validation error - showing user feedback');
      // Show validation messages to user
    } else if (error.message.includes('timeout')) {
      console.log('Operation timed out - increasing timeout');
      // Handle timeout errors
    } else {
      console.log('Unexpected error occurred:', error);
      // Log for debugging and show generic error message
    }
  }
}

function performComplexOperation() {
  const scenarios = [
    () => { throw { code: 'NETWORK_ERROR', message: 'Failed to connect' }; },
    () => { throw { code: 'VALIDATION_ERROR', message: 'Invalid input data' }; },
    () => { throw new Error('Operation timeout exceeded'); },
    () => { throw new Error('Unexpected system error'); }
  ];
  
  const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
  randomScenario();
}

// Error handling with return values
function errorHandlingWithReturnValues() {
  function safeOperation() {
    try {
      const result = riskyCalculation();
      return { success: true, data: result, error: null };
    } catch (error) {
      return { success: false, data: null, error: error.message };
    }
  }
  
  function riskyCalculation() {
    const num = Math.random() * 10;
    if (num < 3) {
      throw new Error('Calculation failed: number too small');
    }
    return Math.sqrt(num);
  }
  
  // Usage
  const result = safeOperation();
  if (result.success) {
    console.log('Calculation result:', result.data);
  } else {
    console.log('Calculation failed:', result.error);
  }
}

// Async error handling with try/catch
async function asyncErrorHandling() {
  try {
    console.log('Starting async operation...');
    
    const result1 = await asyncOperation(1);
    console.log('First operation result:', result1);
    
    const result2 = await asyncOperation(2);
    console.log('Second operation result:', result2);
    
    return { result1, result2 };
    
  } catch (error) {
    console.error('Async operation failed:', error.message);
    throw error; // Re-throw to let caller handle it
  } finally {
    console.log('Async operation cleanup');
  }
}

async function asyncOperation(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve('Async result ' + id);
      } else {
        reject(new Error('Async operation ' + id + ' failed'));
      }
    }, 1000);
  });
}

// Error boundaries concept (manual implementation)
class ErrorBoundary {
  constructor() {
    this.hasError = false;
    this.error = null;
    this.errorInfo = null;
  }
  
  executeWithBoundary(operation, fallback = null) {
    try {
      this.hasError = false;
      this.error = null;
      const result = operation();
      return result;
    } catch (error) {
      this.hasError = true;
      this.error = error;
      this.errorInfo = {
        timestamp: new Date().toISOString(),
        stack: error.stack
      };
      
      console.error('Error boundary caught error:', error);
      
      if (typeof fallback === 'function') {
        return fallback(error);
      }
      
      return fallback;
    }
  }
  
  getError() {
    return {
      hasError: this.hasError,
      error: this.error,
      errorInfo: this.errorInfo
    };
  }
  
  reset() {
    this.hasError = false;
    this.error = null;
    this.errorInfo = null;
  }
}

// Usage of error boundary
function errorBoundaryExample() {
  const boundary = new ErrorBoundary();
  
  const result = boundary.executeWithBoundary(
    () => {
      // Some operation that might fail
      if (Math.random() < 0.5) {
        throw new Error('Boundary test error');
      }
      return 'Operation successful';
    },
    (error) => 'Fallback result due to: ' + error.message
  );
  
  console.log('Boundary result:', result);
  console.log('Boundary state:', boundary.getError());
}

// Performance considerations
function performanceConsiderations() {
  // Try/catch has minimal performance impact in modern JS engines
  // when no errors are thrown
  
  function measurePerformance(iterations = 1000000) {
    console.log('=== Performance Test ===');
    
    // Test without try/catch
    const start1 = performance.now();
    for (let i = 0; i < iterations; i++) {
      simpleOperation();
    }
    const end1 = performance.now();
    
    // Test with try/catch (no errors thrown)
    const start2 = performance.now();
    for (let i = 0; i < iterations; i++) {
      try {
        simpleOperation();
      } catch (error) {
        // This won't execute
      }
    }
    const end2 = performance.now();
    
    console.log('Without try/catch:', (end1 - start1).toFixed(2), 'ms');
    console.log('With try/catch:', (end2 - start2).toFixed(2), 'ms');
    console.log('Overhead:', ((end2 - start2) - (end1 - start1)).toFixed(2), 'ms');
  }
  
  function simpleOperation() {
    return Math.sqrt(Math.random() * 100);
  }
  
  measurePerformance();
  
  // Note: Throwing and catching errors IS expensive
  // Avoid using exceptions for control flow
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Errors */}
        <section className="js-topic-section">
          <h2>🔧 Custom Error Classes</h2>
          
          <div className="js-custom-error-examples">
            <div className="js-custom-error-card">
              <h3>Creating Custom Error Types</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic custom error class
class CustomError extends Error {
  constructor(message, code = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.timestamp = new Date().toISOString();
    
    // Maintains proper stack trace for where error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Specific error types
class ValidationError extends CustomError {
  constructor(field, value, message) {
    super(message || 'Validation failed');
    this.field = field;
    this.value = value;
    this.code = 'VALIDATION_ERROR';
  }
  
  getDetails() {
    return {
      field: this.field,
      value: this.value,
      message: this.message,
      code: this.code
    };
  }
}

class NetworkError extends CustomError {
  constructor(message, statusCode, response = null) {
    super(message || 'Network request failed');
    this.statusCode = statusCode;
    this.response = response;
    this.code = 'NETWORK_ERROR';
    this.isRetryable = this.determineRetryable(statusCode);
  }
  
  determineRetryable(statusCode) {
    // 5xx errors are typically retryable, 4xx are not
    return statusCode >= 500 && statusCode < 600;
  }
  
  getDetails() {
    return {
      statusCode: this.statusCode,
      response: this.response,
      isRetryable: this.isRetryable,
      message: this.message
    };
  }
}

class BusinessLogicError extends CustomError {
  constructor(message, operation, context = {}) {
    super(message);
    this.operation = operation;
    this.context = context;
    this.code = 'BUSINESS_LOGIC_ERROR';
  }
  
  getDetails() {
    return {
      operation: this.operation,
      context: this.context,
      message: this.message,
      code: this.code
    };
  }
}

// Usage examples
function customErrorExamples() {
  // Validation error example
  function validateUser(userData) {
    if (!userData.email) {
      throw new ValidationError('email', userData.email, 'Email is required');
    }
    
    if (!userData.email.includes('@')) {
      throw new ValidationError('email', userData.email, 'Invalid email format');
    }
    
    if (!userData.age || userData.age < 0 || userData.age > 150) {
      throw new ValidationError('age', userData.age, 'Age must be between 0 and 150');
    }
  }
  
  try {
    validateUser({ email: 'invalid-email', age: -5 });
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log('Validation failed:', error.getDetails());
    }
  }
  
  // Network error example
  async function simulateNetworkRequest() {
    // Simulate different response scenarios
    const scenarios = [
      { status: 200, success: true },
      { status: 404, success: false, message: 'Resource not found' },
      { status: 500, success: false, message: 'Internal server error' },
      { status: 403, success: false, message: 'Forbidden' }
    ];
    
    const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    
    if (!scenario.success) {
      throw new NetworkError(scenario.message, scenario.status, scenario);
    }
    
    return { data: 'Success response' };
  }
  
  simulateNetworkRequest().catch(error => {
    if (error instanceof NetworkError) {
      const details = error.getDetails();
      console.log('Network error:', details);
      
      if (details.isRetryable) {
        console.log('Error is retryable, scheduling retry...');
      } else {
        console.log('Error is not retryable, showing user message');
      }
    }
  });
  
  // Business logic error example
  function processOrder(order) {
    if (order.items.length === 0) {
      throw new BusinessLogicError(
        'Cannot process empty order',
        'processOrder',
        { orderId: order.id, userId: order.userId }
      );
    }
    
    const totalAmount = order.items.reduce((sum, item) => sum + item.price, 0);
    
    if (totalAmount > order.customerCreditLimit) {
      throw new BusinessLogicError(
        'Order amount exceeds customer credit limit',
        'creditCheck',
        {
          orderId: order.id,
          totalAmount: totalAmount,
          creditLimit: order.customerCreditLimit
        }
      );
    }
    
    return { success: true, orderId: order.id };
  }
  
  try {
    const order = {
      id: '12345',
      userId: 'user123',
      items: [{ price: 1000 }],
      customerCreditLimit: 500
    };
    
    processOrder(order);
  } catch (error) {
    if (error instanceof BusinessLogicError) {
      console.log('Business logic error:', error.getDetails());
    }
  }
}

// Error factory pattern
class ErrorFactory {
  static createValidationError(field, value, message) {
    return new ValidationError(field, value, message);
  }
  
  static createNetworkError(statusCode, message, response) {
    return new NetworkError(message, statusCode, response);
  }
  
  static createBusinessLogicError(message, operation, context) {
    return new BusinessLogicError(message, operation, context);
  }
  
  static fromHttpResponse(response) {
    if (response.status >= 400 && response.status < 500) {
      return new NetworkError(
        'Client error: ' + response.statusText,
        response.status,
        response
      );
    } else if (response.status >= 500) {
      return new NetworkError(
        'Server error: ' + response.statusText,
        response.status,
        response
      );
    }
    return null;
  }
}

// Error aggregation for multiple errors
class AggregateError extends Error {
  constructor(errors, message = 'Multiple errors occurred') {
    super(message);
    this.name = 'AggregateError';
    this.errors = Array.isArray(errors) ? errors : [errors];
    this.count = this.errors.length;
  }
  
  getErrors() {
    return this.errors.slice(); // Return copy
  }
  
  getErrorsByType(ErrorType) {
    return this.errors.filter(error => error instanceof ErrorType);
  }
  
  hasErrorType(ErrorType) {
    return this.errors.some(error => error instanceof ErrorType);
  }
  
  forEach(callback) {
    this.errors.forEach(callback);
  }
  
  toString() {
    const errorMessages = this.errors.map(error => error.message);
    return this.message + ': ' + errorMessages.join(', ');
  }
}

// Usage of aggregate error
function aggregateErrorExample() {
  function validateMultipleFields(data) {
    const errors = [];
    
    if (!data.name) {
      errors.push(new ValidationError('name', data.name, 'Name is required'));
    }
    
    if (!data.email || !data.email.includes('@')) {
      errors.push(new ValidationError('email', data.email, 'Valid email is required'));
    }
    
    if (!data.phone) {
      errors.push(new ValidationError('phone', data.phone, 'Phone is required'));
    }
    
    if (errors.length > 0) {
      throw new AggregateError(errors, 'Validation failed for multiple fields');
    }
    
    return true;
  }
  
  try {
    validateMultipleFields({ name: '', email: 'invalid', phone: '' });
  } catch (error) {
    if (error instanceof AggregateError) {
      console.log('Multiple validation errors occurred:');
      error.forEach((err, index) => {
        console.log((index + 1) + ':', err.message);
      });
      
      const validationErrors = error.getErrorsByType(ValidationError);
      console.log('Total validation errors:', validationErrors.length);
    }
  }
}

// Error serialization for logging
class SerializableError extends Error {
  constructor(message, metadata = {}) {
    super(message);
    this.name = this.constructor.name;
    this.metadata = metadata;
    this.timestamp = new Date().toISOString();
    this.id = this.generateId();
  }
  
  generateId() {
    return 'error_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
  
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      message: this.message,
      stack: this.stack,
      metadata: this.metadata,
      timestamp: this.timestamp
    };
  }
  
  static fromJSON(jsonData) {
    const error = new SerializableError(jsonData.message, jsonData.metadata);
    error.id = jsonData.id;
    error.name = jsonData.name;
    error.timestamp = jsonData.timestamp;
    if (jsonData.stack) {
      error.stack = jsonData.stack;
    }
    return error;
  }
  
  toString() {
    return JSON.stringify(this.toJSON(), null, 2);
  }
}

// Usage
function serializableErrorExample() {
  try {
    throw new SerializableError('Database connection failed', {
      host: 'localhost',
      port: 5432,
      database: 'myapp',
      attemptNumber: 3
    });
  } catch (error) {
    // Serialize for logging
    const serialized = JSON.stringify(error);
    console.log('Serialized error:', serialized);
    
    // Deserialize
    const parsed = JSON.parse(serialized);
    const reconstructed = SerializableError.fromJSON(parsed);
    console.log('Reconstructed error:', reconstructed.message);
  }
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Debugging Strategies */}
        <section className="js-topic-section">
          <h2>🔍 Debugging Strategies</h2>
          
          <div className="js-debugging-examples">
            <div className="js-debugging-card">
              <h3>Debugging Techniques and Tools</h3>
              <div className="js-code-example">
                <pre><code>
{`// Console debugging methods
function consoleDebugging() {
  console.log('Basic log message');
  console.info('Information message');
  console.warn('Warning message');
  console.error('Error message');
  
  // Styled console output
  console.log('%cStyled message', 'color: blue; font-size: 16px; font-weight: bold;');
  
  // Object inspection
  const user = { id: 1, name: 'John', email: 'john@example.com' };
  console.log('User object:', user);
  console.table(user); // Nice table format
  console.dir(user);   // Detailed object inspection
  
  // Grouping related logs
  console.group('User Operations');
  console.log('Fetching user data...');
  console.log('User data received:', user);
  console.log('Processing user data...');
  console.groupEnd();
  
  // Nested groups
  console.group('Application Startup');
    console.group('Database Connection');
      console.log('Connecting to database...');
      console.log('Database connected successfully');
    console.groupEnd();
    
    console.group('User Authentication');
      console.log('Loading authentication module...');
      console.log('Authentication ready');
    console.groupEnd();
  console.groupEnd();
  
  // Timing operations
  console.time('Operation Timer');
  setTimeout(() => {
    console.timeEnd('Operation Timer'); // Shows elapsed time
  }, 1000);
  
  // Counting occurrences
  for (let i = 0; i < 5; i++) {
    console.count('Loop iteration');
  }
  console.countReset('Loop iteration');
  
  // Assertions
  const x = 5;
  console.assert(x === 5, 'x should be 5'); // No output (assertion passes)
  console.assert(x === 10, 'x should be 10', { x: x }); // Shows error
  
  // Stack trace
  function level1() {
    level2();
  }
  
  function level2() {
    level3();
  }
  
  function level3() {
    console.trace('Stack trace from level 3');
  }
  
  level1();
}

// Breakpoint debugging with debugger statement
function debuggerExample() {
  let count = 0;
  
  for (let i = 0; i < 10; i++) {
    count += i;
    
    if (i === 5) {
      debugger; // Execution will pause here in dev tools
    }
  }
  
  return count;
}

// Conditional debugging
function conditionalDebugging() {
  const DEBUG = true; // Feature flag for debugging
  const DEBUG_LEVELS = {
    ERROR: 0,
    WARN: 1,
    INFO: 2,
    DEBUG: 3
  };
  
  let currentLevel = DEBUG_LEVELS.DEBUG;
  
  function debugLog(level, message, data = null) {
    if (!DEBUG || level > currentLevel) return;
    
    const levelNames = ['ERROR', 'WARN', 'INFO', 'DEBUG'];
    const levelColors = [
      'color: red; font-weight: bold;',
      'color: orange; font-weight: bold;',
      'color: blue;',
      'color: gray;'
    ];
    
    console.log(
      '%c[' + levelNames[level] + ']',
      levelColors[level],
      message,
      data || ''
    );
  }
  
  // Usage
  debugLog(DEBUG_LEVELS.ERROR, 'Critical error occurred', { errorCode: 500 });
  debugLog(DEBUG_LEVELS.WARN, 'Deprecated function used');
  debugLog(DEBUG_LEVELS.INFO, 'User logged in', { userId: 123 });
  debugLog(DEBUG_LEVELS.DEBUG, 'Variable state', { x: 10, y: 20 });
}

// Error tracking and reporting
class ErrorTracker {
  constructor() {
    this.errors = [];
    this.maxErrors = 100;
    this.listeners = [];
  }
  
  track(error, context = {}) {
    const errorEntry = {
      id: this.generateId(),
      error: this.serializeError(error),
      context: context,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      stackTrace: error.stack
    };
    
    this.errors.unshift(errorEntry);
    
    // Keep only recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(0, this.maxErrors);
    }
    
    // Notify listeners
    this.notifyListeners(errorEntry);
    
    // Log to console in development
    if (this.isDevelopment()) {
      console.group('🚨 Error Tracked');
      console.error('Error:', error);
      console.log('Context:', context);
      console.log('Full Entry:', errorEntry);
      console.groupEnd();
    }
  }
  
  serializeError(error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
      ...(error.code && { code: error.code }),
      ...(error.statusCode && { statusCode: error.statusCode })
    };
  }
  
  generateId() {
    return 'error_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
  
  isDevelopment() {
    return !window.location.host || window.location.host.includes('localhost');
  }
  
  addListener(callback) {
    this.listeners.push(callback);
  }
  
  notifyListeners(errorEntry) {
    this.listeners.forEach(callback => {
      try {
        callback(errorEntry);
      } catch (error) {
        console.error('Error in error tracker listener:', error);
      }
    });
  }
  
  getErrors() {
    return this.errors.slice();
  }
  
  getErrorsByType(errorType) {
    return this.errors.filter(entry => entry.error.name === errorType);
  }
  
  clear() {
    this.errors = [];
  }
  
  exportErrors() {
    return JSON.stringify({
      errors: this.errors,
      exportDate: new Date().toISOString(),
      userAgent: navigator.userAgent
    }, null, 2);
  }
  
  // Automatic error tracking setup
  setupGlobalHandlers() {
    // Catch unhandled JavaScript errors
    window.addEventListener('error', (event) => {
      this.track(event.error || new Error(event.message), {
        type: 'unhandled_error',
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
    });
    
    // Catch unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.track(
        event.reason instanceof Error ? event.reason : new Error(event.reason),
        {
          type: 'unhandled_rejection'
        }
      );
    });
  }
}

// Usage
const errorTracker = new ErrorTracker();
errorTracker.setupGlobalHandlers();

// Add custom error handler
errorTracker.addListener((errorEntry) => {
  // Send to analytics service in production
  if (!errorTracker.isDevelopment()) {
    // sendToAnalytics(errorEntry);
  }
});

// Performance debugging
class PerformanceTracker {
  constructor() {
    this.marks = new Map();
    this.measures = new Map();
  }
  
  mark(name) {
    const timestamp = performance.now();
    this.marks.set(name, timestamp);
    
    if (performance.mark) {
      performance.mark(name);
    }
    
    console.log('📍 Mark:', name, 'at', timestamp.toFixed(2) + 'ms');
  }
  
  measure(name, startMark, endMark = null) {
    if (!endMark) {
      endMark = 'temp_end_' + Date.now();
      this.mark(endMark);
    }
    
    const startTime = this.marks.get(startMark);
    const endTime = this.marks.get(endMark);
    
    if (startTime && endTime) {
      const duration = endTime - startTime;
      this.measures.set(name, duration);
      
      if (performance.measure) {
        try {
          performance.measure(name, startMark, endMark);
        } catch (error) {
          console.warn('Performance.measure failed:', error);
        }
      }
      
      console.log('⏱️ Measure:', name, duration.toFixed(2) + 'ms');
      return duration;
    } else {
      console.warn('Cannot measure: missing marks', { startMark, endMark });
      return null;
    }
  }
  
  getReport() {
    const report = {
      marks: Object.fromEntries(this.marks),
      measures: Object.fromEntries(this.measures),
      timestamp: new Date().toISOString()
    };
    
    console.table(this.measures);
    return report;
  }
  
  clear() {
    this.marks.clear();
    this.measures.clear();
    
    if (performance.clearMarks) {
      performance.clearMarks();
    }
    if (performance.clearMeasures) {
      performance.clearMeasures();
    }
  }
}

// Usage
const perfTracker = new PerformanceTracker();

function performanceExample() {
  perfTracker.mark('operation-start');
  
  // Simulate some work
  for (let i = 0; i < 100000; i++) {
    Math.sqrt(i);
  }
  
  perfTracker.mark('calculation-complete');
  
  // Simulate async work
  setTimeout(() => {
    perfTracker.mark('async-complete');
    
    perfTracker.measure('calculation-time', 'operation-start', 'calculation-complete');
    perfTracker.measure('total-time', 'operation-start', 'async-complete');
    
    console.log('Performance Report:');
    perfTracker.getReport();
  }, 100);
}

// Memory debugging
class MemoryTracker {
  constructor() {
    this.measurements = [];
    this.isTracking = false;
    this.intervalId = null;
  }
  
  start(interval = 1000) {
    if (this.isTracking) return;
    
    this.isTracking = true;
    this.intervalId = setInterval(() => {
      this.takeMeasurement();
    }, interval);
    
    console.log('🧠 Memory tracking started');
  }
  
  stop() {
    if (!this.isTracking) return;
    
    this.isTracking = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    
    console.log('🧠 Memory tracking stopped');
    this.generateReport();
  }
  
  takeMeasurement() {
    if (!performance.memory) {
      console.warn('Performance.memory not available');
      return;
    }
    
    const measurement = {
      timestamp: Date.now(),
      used: performance.memory.usedJSHeapSize,
      total: performance.memory.totalJSHeapSize,
      limit: performance.memory.jsHeapSizeLimit
    };
    
    this.measurements.push(measurement);
    
    // Keep only last 100 measurements
    if (this.measurements.length > 100) {
      this.measurements.shift();
    }
    
    // Log if significant change
    if (this.measurements.length > 1) {
      const previous = this.measurements[this.measurements.length - 2];
      const change = measurement.used - previous.used;
      
      if (Math.abs(change) > 1024 * 1024) { // > 1MB change
        console.log('📈 Memory change:', this.formatBytes(change));
      }
    }
  }
  
  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  
  generateReport() {
    if (this.measurements.length === 0) return;
    
    const latest = this.measurements[this.measurements.length - 1];
    const first = this.measurements[0];
    
    console.group('🧠 Memory Usage Report');
    console.log('Current Usage:', this.formatBytes(latest.used));
    console.log('Total Available:', this.formatBytes(latest.total));
    console.log('Heap Limit:', this.formatBytes(latest.limit));
    
    if (this.measurements.length > 1) {
      const change = latest.used - first.used;
      console.log('Change Since Start:', this.formatBytes(change));
    }
    
    console.log('Usage Percentage:', ((latest.used / latest.limit) * 100).toFixed(2) + '%');
    console.groupEnd();
  }
  
  getCurrentUsage() {
    if (!performance.memory) return null;
    
    return {
      used: this.formatBytes(performance.memory.usedJSHeapSize),
      total: this.formatBytes(performance.memory.totalJSHeapSize),
      limit: this.formatBytes(performance.memory.jsHeapSizeLimit)
    };
  }
}

// Development utilities
const DevUtils = {
  // Monkey patch functions for debugging
  patchFunction: function(object, methodName, callback) {
    const originalMethod = object[methodName];
    
    object[methodName] = function(...args) {
      callback('before', methodName, args);
      const result = originalMethod.apply(this, args);
      callback('after', methodName, args, result);
      return result;
    };
    
    return function unpatch() {
      object[methodName] = originalMethod;
    };
  },
  
  // Log all function calls on an object
  logAllCalls: function(object, prefix = '') {
    const logged = {};
    
    Object.getOwnPropertyNames(object).forEach(name => {
      if (typeof object[name] === 'function') {
        logged[name] = this.patchFunction(object, name, (when, method, args, result) => {
          if (when === 'before') {
            console.log(prefix + method + '(', ...args, ')');
          } else {
            console.log(prefix + method + ' returned:', result);
          }
        });
      }
    });
    
    return function unpatchAll() {
      Object.values(logged).forEach(unpatch => unpatch());
    };
  },
  
  // Measure function execution time
  timeFunction: function(func, ...args) {
    const start = performance.now();
    const result = func(...args);
    const end = performance.now();
    
    console.log('Function execution time:', (end - start).toFixed(2) + 'ms');
    return result;
  }
};

// Example usage
function debuggingExample() {
  // Track an operation
  try {
    errorTracker.track(new Error('Test error'), { 
      operation: 'debuggingExample',
      user: 'testUser'
    });
  } catch (error) {
    console.error('Error in debugging example:', error);
  }
  
  // Performance tracking
  performanceExample();
  
  // Memory tracking
  const memoryTracker = new MemoryTracker();
  memoryTracker.start(2000);
  
  setTimeout(() => {
    memoryTracker.stop();
  }, 10000);
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>⭐ Error Handling Best Practices</h2>
          
          <div className="js-error-practices">
            <div className="js-practice-group">
              <h3>✅ Design Guidelines</h3>
              <ul>
                <li><strong>Fail fast:</strong> Detect and report errors as early as possible</li>
                <li><strong>Be specific:</strong> Use custom error types for different error categories</li>
                <li><strong>Include context:</strong> Provide relevant information with error messages</li>
                <li><strong>Handle errors gracefully:</strong> Provide fallbacks and recovery options</li>
                <li><strong>Don't swallow errors:</strong> Always handle or propagate errors appropriately</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🔍 Debugging Tips</h3>
              <ul>
                <li><strong>Use descriptive error messages:</strong> Make errors easy to understand and fix</li>
                <li><strong>Log with context:</strong> Include relevant state information</li>
                <li><strong>Implement error boundaries:</strong> Contain errors to prevent cascading failures</li>
                <li><strong>Use debugging tools:</strong> Leverage browser dev tools and debugging utilities</li>
                <li><strong>Monitor in production:</strong> Track errors in live applications</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🚀 Performance Considerations</h3>
              <ul>
                <li><strong>Avoid exceptions for control flow:</strong> Use return values instead</li>
                <li><strong>Clean up resources:</strong> Use finally blocks for cleanup operations</li>
                <li><strong>Limit error tracking:</strong> Don't track every minor issue</li>
                <li><strong>Optimize error paths:</strong> Make error handling as efficient as normal paths</li>
                <li><strong>Use lazy evaluation:</strong> Generate expensive error data only when needed</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ErrorHandling;
import React from 'react';
import '../Navbarweb.css';

function TestingJavaScript() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🧪 Testing JavaScript</h1>
        <p className="js-topic-subtitle">
          Master JavaScript testing with Jest, unit tests, integration tests, and testing best practices
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction to Testing */}
        <section className="js-topic-section">
          <h2>🎯 Why Test Your Code?</h2>
          <p>
            Testing is the process of verifying that your code works as expected and continues 
            to work correctly as you make changes. Good tests catch bugs early, document 
            expected behavior, and give you confidence to refactor and add new features.
          </p>
          
          <div className="js-testing-benefits">
            <div className="js-benefit-card">
              <h3>🐛 Bug Prevention</h3>
              <ul>
                <li>Catch errors before they reach production</li>
                <li>Identify regressions when code changes</li>
                <li>Verify edge cases and error conditions</li>
                <li>Ensure consistent behavior across environments</li>
              </ul>
            </div>

            <div className="js-benefit-card">
              <h3>📚 Documentation</h3>
              <ul>
                <li>Tests serve as executable documentation</li>
                <li>Show how functions should be used</li>
                <li>Document expected inputs and outputs</li>
                <li>Clarify business requirements</li>
              </ul>
            </div>

            <div className="js-benefit-card">
              <h3>🔧 Refactoring Safety</h3>
              <ul>
                <li>Confidently restructure code</li>
                <li>Verify functionality after changes</li>
                <li>Enable aggressive optimization</li>
                <li>Support architectural improvements</li>
              </ul>
            </div>

            <div className="js-benefit-card">
              <h3>👥 Team Collaboration</h3>
              <ul>
                <li>Shared understanding of requirements</li>
                <li>Faster onboarding for new team members</li>
                <li>Reduced fear of changing others' code</li>
                <li>Clear definition of "done"</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Types of Tests */}
        <section className="js-topic-section">
          <h2>🏗️ Types of Tests</h2>
          
          <div className="js-test-types">
            <div className="js-test-pyramid">
              <h3>🔺 The Testing Pyramid</h3>
              <div className="js-pyramid-levels">
                <div className="js-pyramid-level" style={{backgroundColor: '#e8f5e8'}}>
                  <h4>🔬 Unit Tests (70%)</h4>
                  <p>Test individual functions or components in isolation</p>
                  <ul>
                    <li>Fast execution</li>
                    <li>Easy to write and maintain</li>
                    <li>Precise error location</li>
                    <li>Foundation of test suite</li>
                  </ul>
                </div>
                
                <div className="js-pyramid-level" style={{backgroundColor: '#fff3cd'}}>
                  <h4>🔗 Integration Tests (20%)</h4>
                  <p>Test how multiple parts work together</p>
                  <ul>
                    <li>Test component interactions</li>
                    <li>Verify data flow</li>
                    <li>Check API integrations</li>
                    <li>Database interactions</li>
                  </ul>
                </div>
                
                <div className="js-pyramid-level" style={{backgroundColor: '#f8d7da'}}>
                  <h4>🌐 End-to-End Tests (10%)</h4>
                  <p>Test complete user workflows</p>
                  <ul>
                    <li>User journey validation</li>
                    <li>Cross-browser compatibility</li>
                    <li>Production-like environment</li>
                    <li>High confidence, slower execution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jest Setup and Basics */}
        <section className="js-topic-section">
          <h2>🃏 Jest - JavaScript Testing Framework</h2>
          <p>
            <strong>Jest</strong> is a comprehensive testing framework that includes test runners, 
            assertions, mocking, and code coverage. It works great for both Node.js and browser JavaScript.
          </p>
          
          <div className="js-jest-guide">
            <div className="js-jest-card">
              <h3>🚀 Jest Setup</h3>
              <div className="js-code-example">
                <pre><code>
{`# Install Jest
npm install --save-dev jest

# For React projects
npm install --save-dev @testing-library/react @testing-library/jest-dom

# For TypeScript
npm install --save-dev @types/jest ts-jest

# Package.json scripts
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:debug": "node --inspect-brk node_modules/.bin/jest --runInBand"
  }
}

# Jest configuration (jest.config.js)
module.exports = {
  testEnvironment: 'jsdom', // or 'node' for backend
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.js',
    '!src/**/*.d.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};`}
                </code></pre>
              </div>
            </div>

            <div className="js-jest-card">
              <h3>✅ Basic Test Structure</h3>
              <div className="js-code-example">
                <pre><code>
{`// math.js - Functions to test
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

export function factorial(n) {
  if (n < 0) throw new Error('Negative numbers not supported');
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// math.test.js - Basic tests
import { add, multiply, divide, factorial } from './math';

describe('Math functions', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
    
    test('should handle negative numbers', () => {
      expect(add(-2, 3)).toBe(1);
      expect(add(-2, -3)).toBe(-5);
    });
    
    test('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });
    
    test('should handle decimal numbers', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('multiply', () => {
    test('should multiply two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });
    
    test('should handle multiplication by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
    
    test('should handle negative numbers', () => {
      expect(multiply(-3, 4)).toBe(-12);
      expect(multiply(-3, -4)).toBe(12);
    });
  });

  describe('divide', () => {
    test('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });
    
    test('should handle decimal results', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 3);
    });
    
    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('factorial', () => {
    test('should calculate factorial of positive numbers', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(5)).toBe(120);
    });
    
    test('should throw error for negative numbers', () => {
      expect(() => factorial(-1)).toThrow('Negative numbers not supported');
    });
  });
});`}
                </code></pre>
              </div>
            </div>

            <div className="js-jest-card">
              <h3>🔍 Jest Matchers</h3>
              <div className="js-code-example">
                <pre><code>
{`describe('Jest Matchers Examples', () => {
  // Equality matchers
  test('equality matchers', () => {
    expect(2 + 2).toBe(4); // Exact equality (===)
    expect({ name: 'John' }).toEqual({ name: 'John' }); // Deep equality
    expect({ name: 'John' }).not.toBe({ name: 'John' }); // Different objects
  });

  // Truthiness matchers
  test('truthiness matchers', () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect('Hello').toBeDefined();
  });

  // Number matchers
  test('number matchers', () => {
    expect(2 + 2).toBeGreaterThan(3);
    expect(2 + 2).toBeGreaterThanOrEqual(4);
    expect(2 + 2).toBeLessThan(5);
    expect(2 + 2).toBeLessThanOrEqual(4);
    expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
  });

  // String matchers
  test('string matchers', () => {
    expect('Hello World').toMatch(/World/);
    expect('Hello World').toMatch('World');
    expect('Hello World').toContain('World');
    expect('Hello World').toHaveLength(11);
  });

  // Array matchers
  test('array matchers', () => {
    expect(['Alice', 'Bob', 'Charlie']).toContain('Bob');
    expect(['Alice', 'Bob', 'Charlie']).toHaveLength(3);
    expect([1, 2, 3, 4]).toEqual(expect.arrayContaining([2, 3]));
  });

  // Object matchers
  test('object matchers', () => {
    const user = { 
      name: 'John', 
      age: 30, 
      address: { city: 'New York' }
    };
    
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('name', 'John');
    expect(user).toHaveProperty('address.city', 'New York');
    expect(user).toMatchObject({ name: 'John', age: 30 });
  });

  // Exception matchers
  test('exception matchers', () => {
    const throwError = () => {
      throw new Error('Something went wrong');
    };
    
    expect(throwError).toThrow();
    expect(throwError).toThrow('Something went wrong');
    expect(throwError).toThrow(/wrong/);
  });

  // Promise matchers
  test('promise matchers', async () => {
    const asyncFunction = () => Promise.resolve('Success');
    const rejectFunction = () => Promise.reject(new Error('Failed'));
    
    await expect(asyncFunction()).resolves.toBe('Success');
    await expect(rejectFunction()).rejects.toThrow('Failed');
  });
});`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Mocking */}
        <section className="js-topic-section">
          <h2>🎭 Mocking and Spies</h2>
          
          <div className="js-mocking-guide">
            <div className="js-mock-card">
              <h3>🎯 Function Mocking</h3>
              <div className="js-code-example">
                <pre><code>
{`// userService.js
export async function fetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}

export function processUserData(user) {
  return {
    ...user,
    fullName: \`\${user.firstName} \${user.lastName}\`,
    displayName: user.firstName
  };
}

// userService.test.js
import { fetchUser, processUserData } from './userService';

// Mock fetch globally
global.fetch = jest.fn();

describe('User Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchUser', () => {
    test('should fetch user data successfully', async () => {
      const mockUser = { id: 1, name: 'John Doe' };
      
      fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockUser)
      });

      const result = await fetchUser(1);

      expect(fetch).toHaveBeenCalledWith('/api/users/1');
      expect(result).toEqual(mockUser);
    });

    test('should handle fetch error', async () => {
      fetch.mockRejectedValue(new Error('Network error'));

      await expect(fetchUser(1)).rejects.toThrow('Network error');
    });
  });

  describe('processUserData', () => {
    test('should process user data correctly', () => {
      const user = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com'
      };

      const result = processUserData(user);

      expect(result).toMatchObject({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        fullName: 'John Doe',
        displayName: 'John'
      });
    });
  });
});

// Advanced mocking examples
describe('Advanced Mocking', () => {
  test('mock function with different return values', () => {
    const mockFn = jest.fn()
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call')
      .mockReturnValue('default');

    expect(mockFn()).toBe('first call');
    expect(mockFn()).toBe('second call');
    expect(mockFn()).toBe('default');
    expect(mockFn()).toBe('default');
  });

  test('mock function with implementation', () => {
    const mockCalculate = jest.fn((a, b) => a * 2 + b);

    expect(mockCalculate(3, 4)).toBe(10);
    expect(mockCalculate).toHaveBeenCalledWith(3, 4);
    expect(mockCalculate).toHaveBeenCalledTimes(1);
  });

  test('spy on existing methods', () => {
    const mathObject = {
      add: (a, b) => a + b,
      multiply: (a, b) => a * b
    };

    const addSpy = jest.spyOn(mathObject, 'add');
    const multiplySpy = jest.spyOn(mathObject, 'multiply')
      .mockReturnValue(100);

    expect(mathObject.add(2, 3)).toBe(5); // Original implementation
    expect(mathObject.multiply(4, 5)).toBe(100); // Mocked

    expect(addSpy).toHaveBeenCalledWith(2, 3);
    expect(multiplySpy).toHaveBeenCalledWith(4, 5);

    // Restore original implementation
    addSpy.mockRestore();
    multiplySpy.mockRestore();
  });
});`}
                </code></pre>
              </div>
            </div>

            <div className="js-mock-card">
              <h3>📦 Module Mocking</h3>
              <div className="js-code-example">
                <pre><code>
{`// logger.js
export function log(message) {
  console.log(\`[\${new Date().toISOString()}] \${message}\`);
}

export function error(message, err) {
  console.error(\`[\${new Date().toISOString()}] ERROR: \${message}\`, err);
}

// dataProcessor.js
import * as logger from './logger';

export function processData(data) {
  logger.log('Starting data processing');
  
  try {
    if (!data || data.length === 0) {
      throw new Error('No data provided');
    }
    
    const result = data.map(item => ({
      ...item,
      processed: true,
      timestamp: Date.now()
    }));
    
    logger.log(\`Processed \${result.length} items\`);
    return result;
  } catch (err) {
    logger.error('Data processing failed', err);
    throw err;
  }
}

// dataProcessor.test.js
import { processData } from './dataProcessor';
import * as logger from './logger';

// Mock the entire logger module
jest.mock('./logger');

describe('Data Processor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should process data successfully', () => {
    const inputData = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ];

    const result = processData(inputData);

    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({
      id: 1,
      name: 'Item 1',
      processed: true
    });
    
    expect(logger.log).toHaveBeenCalledWith('Starting data processing');
    expect(logger.log).toHaveBeenCalledWith('Processed 2 items');
  });

  test('should handle empty data', () => {
    expect(() => processData([])).toThrow('No data provided');
    
    expect(logger.log).toHaveBeenCalledWith('Starting data processing');
    expect(logger.error).toHaveBeenCalledWith(
      'Data processing failed',
      expect.any(Error)
    );
  });
});

// Partial module mocking
jest.mock('./logger', () => ({
  log: jest.fn(),
  error: jest.fn(),
  // Keep original implementation for other methods
  ...jest.requireActual('./logger')
}));

// Mock with factory function
jest.mock('./config', () => ({
  apiUrl: 'http://test-api.com',
  timeout: 5000,
  retries: 3
}));

// Dynamic mocking based on environment
jest.mock('./environment', () => ({
  isDevelopment: process.env.NODE_ENV === 'test',
  apiUrl: process.env.NODE_ENV === 'test' 
    ? 'http://localhost:3001' 
    : 'https://api.production.com'
}));`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Async Testing */}
        <section className="js-topic-section">
          <h2>⏱️ Testing Asynchronous Code</h2>
          
          <div className="js-async-testing">
            <div className="js-async-card">
              <h3>📡 Testing Promises and Async/Await</h3>
              <div className="js-code-example">
                <pre><code>
{`// api.js
export async function fetchUserData(userId) {
  const response = await fetch(\`/api/users/\${userId}\`);
  
  if (!response.ok) {
    throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
  }
  
  return response.json();
}

export function delayedOperation(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

export function rejectAfterDelay(ms, reason) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(reason)), ms);
  });
}

// api.test.js
import { fetchUserData, delayedOperation, rejectAfterDelay } from './api';

// Mock fetch for all tests
global.fetch = jest.fn();

describe('Async API Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchUserData', () => {
    test('should fetch user data successfully - async/await', async () => {
      const mockUser = { id: 1, name: 'John Doe' };
      
      fetch.mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUser)
      });

      const result = await fetchUserData(1);

      expect(result).toEqual(mockUser);
      expect(fetch).toHaveBeenCalledWith('/api/users/1');
    });

    test('should handle HTTP errors', async () => {
      fetch.mockResolvedValue({
        ok: false,
        status: 404,
        statusText: 'Not Found'
      });

      await expect(fetchUserData(999))
        .rejects
        .toThrow('HTTP 404: Not Found');
    });

    test('should handle network errors', async () => {
      fetch.mockRejectedValue(new Error('Network error'));

      await expect(fetchUserData(1))
        .rejects
        .toThrow('Network error');
    });
  });

  describe('delayedOperation', () => {
    test('should resolve after delay - async/await', async () => {
      const result = await delayedOperation(10, 'success');
      expect(result).toBe('success');
    });

    test('should resolve after delay - promises', () => {
      return delayedOperation(10, 'success').then(result => {
        expect(result).toBe('success');
      });
    });

    test('should resolve after delay - resolves matcher', async () => {
      await expect(delayedOperation(10, 'success'))
        .resolves
        .toBe('success');
    });
  });

  describe('rejectAfterDelay', () => {
    test('should reject after delay - async/await', async () => {
      try {
        await rejectAfterDelay(10, 'failure');
        fail('Promise should have rejected');
      } catch (error) {
        expect(error.message).toBe('failure');
      }
    });

    test('should reject after delay - rejects matcher', async () => {
      await expect(rejectAfterDelay(10, 'failure'))
        .rejects
        .toThrow('failure');
    });
  });

  // Testing multiple async operations
  test('should handle multiple concurrent requests', async () => {
    const mockUsers = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' }
    ];

    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUsers[0])
      })
      .mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUsers[1])
      })
      .mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUsers[2])
      });

    const promises = [
      fetchUserData(1),
      fetchUserData(2),
      fetchUserData(3)
    ];

    const results = await Promise.all(promises);

    expect(results).toEqual(mockUsers);
    expect(fetch).toHaveBeenCalledTimes(3);
  });
});`}
                </code></pre>
              </div>
            </div>

            <div className="js-async-card">
              <h3>⏰ Testing Timers and Delays</h3>
              <div className="js-code-example">
                <pre><code>
{`// timer.js
export function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

export class Timer {
  constructor(callback, interval) {
    this.callback = callback;
    this.interval = interval;
    this.intervalId = null;
  }

  start() {
    if (!this.intervalId) {
      this.intervalId = setInterval(this.callback, this.interval);
    }
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

// timer.test.js
import { debounce, throttle, Timer } from './timer';

describe('Timer Functions', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  describe('debounce', () => {
    test('should delay function execution', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn('test');
      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(50);
      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(50);
      expect(mockFn).toHaveBeenCalledWith('test');
    });

    test('should reset delay on multiple calls', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn('first');
      jest.advanceTimersByTime(50);
      
      debouncedFn('second'); // Reset timer
      jest.advanceTimersByTime(50);
      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(50);
      expect(mockFn).toHaveBeenCalledWith('second');
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('throttle', () => {
    test('should limit function calls', () => {
      const mockFn = jest.fn();
      const throttledFn = throttle(mockFn, 100);

      throttledFn('first');
      expect(mockFn).toHaveBeenCalledWith('first');

      throttledFn('second'); // Should be ignored
      expect(mockFn).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(100);
      
      throttledFn('third');
      expect(mockFn).toHaveBeenCalledWith('third');
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
  });

  describe('Timer class', () => {
    test('should start and stop timer', () => {
      const mockCallback = jest.fn();
      const timer = new Timer(mockCallback, 1000);

      timer.start();
      expect(mockCallback).not.toHaveBeenCalled();

      jest.advanceTimersByTime(1000);
      expect(mockCallback).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(1000);
      expect(mockCallback).toHaveBeenCalledTimes(2);

      timer.stop();
      jest.advanceTimersByTime(1000);
      expect(mockCallback).toHaveBeenCalledTimes(2);
    });

    test('should not start multiple intervals', () => {
      const mockCallback = jest.fn();
      const timer = new Timer(mockCallback, 1000);

      timer.start();
      timer.start(); // Should not create second interval

      jest.advanceTimersByTime(1000);
      expect(mockCallback).toHaveBeenCalledTimes(1);
    });
  });
});

// Testing real timers (when needed)
describe('Real Timer Tests', () => {
  test('should work with real timers', async () => {
    jest.useRealTimers();
    
    const start = Date.now();
    await new Promise(resolve => setTimeout(resolve, 100));
    const elapsed = Date.now() - start;
    
    expect(elapsed).toBeGreaterThanOrEqual(100);
    expect(elapsed).toBeLessThan(150); // Allow some variance
  });
});`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Component Testing */}
        <section className="js-topic-section">
          <h2>🧩 Testing React Components</h2>
          
          <div className="js-component-testing">
            <div className="js-component-card">
              <h3>⚛️ React Testing Library</h3>
              <div className="js-code-example">
                <pre><code>
{`// Counter.jsx
import React, { useState } from 'react';

export function Counter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => prev - step);
  const reset = () => setCount(initialValue);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+{step}</button>
      <button onClick={decrement}>-{step}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// UserProfile.jsx
import React, { useState, useEffect } from 'react';

export function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        if (!response.ok) throw new Error('User not found');
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div data-testid="user-profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

// Counter.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter Component', () => {
  test('renders with default initial value', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  test('renders with custom initial value', () => {
    render(<Counter initialValue={10} />);
    expect(screen.getByText('Count: 10')).toBeInTheDocument();
  });

  test('increments count when increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+1');
    
    fireEvent.click(incrementButton);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
    
    fireEvent.click(incrementButton);
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
  });

  test('decrements count when decrement button is clicked', () => {
    render(<Counter initialValue={5} />);
    const decrementButton = screen.getByText('-1');
    
    fireEvent.click(decrementButton);
    expect(screen.getByText('Count: 4')).toBeInTheDocument();
  });

  test('resets count when reset button is clicked', () => {
    render(<Counter initialValue={10} />);
    
    // Increment first
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('Count: 11')).toBeInTheDocument();
    
    // Then reset
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText('Count: 10')).toBeInTheDocument();
  });

  test('works with custom step value', () => {
    render(<Counter step={5} />);
    
    fireEvent.click(screen.getByText('+5'));
    expect(screen.getByText('Count: 5')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('-5'));
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
});

// UserProfile.test.jsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { UserProfile } from './UserProfile';

// Mock fetch
global.fetch = jest.fn();

describe('UserProfile Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('shows loading state initially', () => {
    fetch.mockImplementation(() => new Promise(() => {})); // Never resolves
    
    render(<UserProfile userId={1} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays user data after successful fetch', async () => {
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin'
    };

    fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockUser)
    });

    render(<UserProfile userId={1} />);

    await waitFor(() => {
      expect(screen.getByTestId('user-profile')).toBeInTheDocument();
    });

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Email: john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Role: Admin')).toBeInTheDocument();
  });

  test('displays error message when fetch fails', async () => {
    fetch.mockResolvedValue({
      ok: false,
      status: 404
    });

    render(<UserProfile userId={999} />);

    await waitFor(() => {
      expect(screen.getByText('Error: User not found')).toBeInTheDocument();
    });
  });

  test('does not fetch when userId is not provided', () => {
    render(<UserProfile />);
    expect(fetch).not.toHaveBeenCalled();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('refetches when userId changes', async () => {
    const mockUser1 = { id: 1, name: 'User 1', email: 'user1@example.com', role: 'User' };
    const mockUser2 = { id: 2, name: 'User 2', email: 'user2@example.com', role: 'Admin' };

    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUser1)
      })
      .mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUser2)
      });

    const { rerender } = render(<UserProfile userId={1} />);

    await waitFor(() => {
      expect(screen.getByText('User 1')).toBeInTheDocument();
    });

    rerender(<UserProfile userId={2} />);

    await waitFor(() => {
      expect(screen.getByText('User 2')).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenNthCalledWith(1, '/api/users/1');
    expect(fetch).toHaveBeenNthCalledWith(2, '/api/users/2');
  });
});`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Test Organization and Best Practices */}
        <section className="js-topic-section">
          <h2>⭐ Testing Best Practices</h2>
          
          <div className="js-best-practices">
            <div className="js-practice-group">
              <h3>📝 Test Structure</h3>
              <ul>
                <li><strong>Arrange-Act-Assert (AAA):</strong> Clear test structure</li>
                <li><strong>Descriptive test names:</strong> Explain what and why</li>
                <li><strong>Single responsibility:</strong> One assertion per test</li>
                <li><strong>Independent tests:</strong> Tests shouldn't depend on each other</li>
                <li><strong>Consistent naming:</strong> Use clear, predictable naming conventions</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🎯 Test Coverage</h3>
              <ul>
                <li><strong>Focus on behavior:</strong> Test what the code does, not how</li>
                <li><strong>Edge cases matter:</strong> Test boundary conditions</li>
                <li><strong>Error scenarios:</strong> Test failure paths</li>
                <li><strong>Coverage is a guide:</strong> 100% coverage ≠ perfect tests</li>
                <li><strong>Test the contract:</strong> Public API behavior over implementation</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🚀 Performance & Maintenance</h3>
              <ul>
                <li><strong>Fast feedback:</strong> Keep tests quick and focused</li>
                <li><strong>Minimal mocking:</strong> Mock only what you need</li>
                <li><strong>Clean setup/teardown:</strong> Proper test isolation</li>
                <li><strong>Readable assertions:</strong> Clear failure messages</li>
                <li><strong>Regular refactoring:</strong> Keep tests maintainable</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🔧 Test-Driven Development</h3>
              <ul>
                <li><strong>Red-Green-Refactor:</strong> Write failing test, make it pass, improve</li>
                <li><strong>Small steps:</strong> Incremental development</li>
                <li><strong>Design feedback:</strong> Tests guide better design</li>
                <li><strong>Living documentation:</strong> Tests document intended behavior</li>
                <li><strong>Confidence in changes:</strong> Refactor fearlessly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Code Coverage */}
        <section className="js-topic-section">
          <h2>📊 Code Coverage</h2>
          
          <div className="js-coverage-guide">
            <div className="js-coverage-card">
              <h3>📈 Understanding Coverage Metrics</h3>
              <div className="js-coverage-types">
                <div className="js-coverage-type">
                  <h4>Lines Coverage</h4>
                  <p>Percentage of code lines executed during tests</p>
                </div>
                <div className="js-coverage-type">
                  <h4>Functions Coverage</h4>
                  <p>Percentage of functions called during tests</p>
                </div>
                <div className="js-coverage-type">
                  <h4>Branches Coverage</h4>
                  <p>Percentage of code branches (if/else) tested</p>
                </div>
                <div className="js-coverage-type">
                  <h4>Statements Coverage</h4>
                  <p>Percentage of statements executed</p>
                </div>
              </div>
            </div>

            <div className="js-coverage-card">
              <h3>⚙️ Coverage Configuration</h3>
              <div className="js-code-example">
                <pre><code>
{`// jest.config.js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.js',
    '!src/**/*.d.ts',
    '!src/**/*.stories.js',
    '!src/setupTests.js'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'lcov',
    'html',
    'json-summary'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    },
    './src/utils/': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};

// Package.json scripts
{
  "scripts": {
    "test:coverage": "jest --coverage",
    "test:coverage:watch": "jest --coverage --watch",
    "test:coverage:html": "jest --coverage && open coverage/lcov-report/index.html"
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

export default TestingJavaScript;
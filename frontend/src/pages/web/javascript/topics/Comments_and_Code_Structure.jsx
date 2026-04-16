import React from 'react';
import '../Navbarweb.css';

function CommentsAndCodeStructure() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>💬 Comments and Code Structure</h1>
        <p className="js-topic-subtitle">
          Learn how to write clean, well-documented, and maintainable JavaScript code
        </p>
      </div>

      <div className="js-topic-content">
        {/* Types of Comments */}
        <section className="js-topic-section">
          <h2>📝 Types of Comments</h2>
          <p>Comments help document your code and make it more readable for yourself and others:</p>
          
          <div className="js-comment-types">
            <div className="js-comment-card">
              <h3>// Single-line Comments</h3>
              <div className="js-code-example">
                <pre><code>{`// This is a single-line comment
let userName = "John"; // Comment at end of line

// You can use multiple single-line comments
// to create multi-line explanations
// like this block of text

// TODO: Implement user authentication
// FIXME: Bug in calculation logic
// NOTE: This function is deprecated`}</code></pre>
              </div>
            </div>

            <div className="js-comment-card">
              <h3>/* Multi-line Comments */</h3>
              <div className="js-code-example">
                <pre><code>{`/*
  This is a multi-line comment
  that can span multiple lines
  and is useful for longer explanations
*/

let result = calculate(5, 3); /* inline multi-line comment */

/*
  Function: calculateTotal
  Purpose: Calculates the total with tax
  Parameters: 
    - subtotal: number
    - taxRate: number (percentage as decimal)
  Returns: number
*/`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* JSDoc Comments */}
        <section className="js-topic-section">
          <h2>📚 JSDoc Comments</h2>
          <p>Special documentation comments that can be processed by tools:</p>

          <div className="js-code-example">
            <h4>Function Documentation:</h4>
            <pre><code>{`/**
 * Calculates the area of a rectangle
 * @param {number} width - The width of the rectangle
 * @param {number} height - The height of the rectangle
 * @returns {number} The area of the rectangle
 * @example
 * // Calculate area of a 5x3 rectangle
 * const area = calculateRectangleArea(5, 3);
 * console.log(area); // 15
 */
function calculateRectangleArea(width, height) {
  return width * height;
}

/**
 * Represents a user in the system
 * @class
 * @param {string} name - The user's name
 * @param {string} email - The user's email
 */
class User {
  constructor(name, email) {
    /** @type {string} */
    this.name = name;
    /** @type {string} */
    this.email = email;
    /** @type {Date} */
    this.createdAt = new Date();
  }
}`}</code></pre>
          </div>

          <div className="js-jsdoc-tags">
            <h4>Common JSDoc Tags:</h4>
            <div className="js-comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Tag</th>
                    <th>Purpose</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>@param</code></td>
                    <td>Function parameter</td>
                    <td><code>@param &#123;string&#125; name</code></td>
                  </tr>
                  <tr>
                    <td><code>@returns</code></td>
                    <td>Return value</td>
                    <td><code>@returns &#123;boolean&#125;</code></td>
                  </tr>
                  <tr>
                    <td><code>@throws</code></td>
                    <td>Exception thrown</td>
                    <td><code>@throws &#123;Error&#125;</code></td>
                  </tr>
                  <tr>
                    <td><code>@example</code></td>
                    <td>Usage example</td>
                    <td><code>@example myFunc(5)</code></td>
                  </tr>
                  <tr>
                    <td><code>@deprecated</code></td>
                    <td>Mark as deprecated</td>
                    <td><code>@deprecated Since v2.0</code></td>
                  </tr>
                  <tr>
                    <td><code>@author</code></td>
                    <td>Author information</td>
                    <td><code>@author John Doe</code></td>
                  </tr>
                  <tr>
                    <td><code>@since</code></td>
                    <td>Version added</td>
                    <td><code>@since 1.5.0</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Code Structure */}
        <section className="js-topic-section">
          <h2>🏗️ Code Structure and Organization</h2>
          
          <div className="js-structure-grid">
            <div className="js-structure-card">
              <h3>📦 File Organization</h3>
              <div className="js-code-example">
                <pre><code>{`// user.js - Single responsibility
class User {
  // User-related methods only
}

// utils.js - Utility functions
function formatDate(date) { }
function validateEmail(email) { }

// config.js - Configuration
const API_URL = 'https://api.example.com';
const MAX_RETRY_ATTEMPTS = 3;

// main.js - Entry point
import { User } from './user.js';
import { formatDate } from './utils.js';`}</code></pre>
              </div>
            </div>

            <div className="js-structure-card">
              <h3>🎯 Function Structure</h3>
              <div className="js-code-example">
                <pre><code>{`function processUserData(userData) {
  // 1. Input validation
  if (!userData || !userData.email) {
    throw new Error('Invalid user data');
  }
  
  // 2. Data processing
  const normalizedEmail = userData.email.toLowerCase();
  const fullName = userData.firstName + " " + userData.lastName;
  
  // 3. Return result
  return {
    email: normalizedEmail,
    name: fullName,
    createdAt: new Date()
  };
}`}</code></pre>
              </div>
            </div>

            <div className="js-structure-card">
              <h3>🏛️ Class Structure</h3>
              <div className="js-code-example">
                <pre><code>{`class ShoppingCart {
  // 1. Constructor
  constructor() {
    this.items = [];
    this.total = 0;
  }
  
  // 2. Public methods
  addItem(item) { }
  removeItem(id) { }
  getTotal() { }
  
  // 3. Private methods (convention: prefix with _)
  _calculateTax() { }
  _applyDiscount() { }
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Naming Conventions */}
        <section className="js-topic-section">
          <h2>🏷️ Naming Conventions</h2>
          
          <div className="js-naming-examples">
            <div className="js-naming-section">
              <h3>✅ Good Naming Practices</h3>
              <div className="js-code-example">
                <pre><code>{`// Variables: camelCase, descriptive
let userName = "john_doe";
let isLoggedIn = true;
let shoppingCartItems = [];
let maxRetryAttempts = 3;

// Functions: camelCase, verb + noun
function calculateTotal() { }
function validateEmail() { }
function renderUserProfile() { }

// Classes: PascalCase
class UserManager { }
class PaymentProcessor { }

// Constants: SCREAMING_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com';
const MAX_FILE_SIZE = 1024 * 1024; // 1MB

// Private properties: prefix with underscore
class User {
  constructor() {
    this._id = generateId();
    this._createdAt = new Date();
  }
}`}</code></pre>
              </div>
            </div>

            <div className="js-naming-section">
              <h3>❌ Poor Naming Practices</h3>
              <div className="js-code-example">
                <pre><code>{`// Avoid these:
let a = "john_doe";           // Too short, unclear
let user_name = "john";       // snake_case (not JS convention)
let userData123 = {};         // Numbers without meaning
let temp = calculate();       // Generic names
let flag = true;              // Unclear boolean

function process() { }        // Too vague
function handleStuff() { }    // "Stuff" is not descriptive
function doIt() { }           // Completely unclear

class manager { }             // Should be PascalCase
class dataProcessor { }       // Should be PascalCase`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Code Formatting */}
        <section className="js-topic-section">
          <h2>🎨 Code Formatting and Style</h2>
          
          <div className="js-formatting-examples">
            <h3>Indentation and Spacing</h3>
            <div className="js-code-example">
              <pre><code>{`// Use consistent indentation (2 or 4 spaces)
function processOrder(order) {
  if (order.isValid) {
    const total = order.items.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
    
    return {
      orderId: order.id,
      total: total,
      status: 'processed'
    };
  }
  
  throw new Error('Invalid order');
}

// Consistent spacing around operators
let result = (a + b) * c;
let isValid = (age >= 18) && hasPermission;

// Line breaks for readability
const userConfig = {
  theme: 'dark',
  fontSize: 14,
  autoSave: true,
  notifications: {
    email: true,
    push: false
  }
};`}</code></pre>
            </div>
          </div>
        </section>

        {/* Error Handling Structure */}
        <section className="js-topic-section">
          <h2>⚠️ Error Handling Structure</h2>
          
          <div className="js-code-example">
            <h4>Try-Catch Structure:</h4>
            <pre><code>{`async function fetchUserData(userId) {
  try {
    // Attempt the operation
    const response = await fetch('/api/users/' + userId);
    
    if (!response.ok) {
      throw new Error('HTTP Error: ' + response.status);
    }
    
    const userData = await response.json();
    return userData;
    
  } catch (error) {
    // Handle specific error types
    if (error.name === 'TypeError') {
      console.error('Network error:', error.message);
    } else {
      console.error('General error:', error.message);
    }
    
    // Re-throw or return default
    throw error;
    
  } finally {
    // Cleanup code (always runs)
    console.log('Request completed');
  }
}`}</code></pre>
          </div>
        </section>

        {/* Code Documentation Standards */}
        <section className="js-topic-section">
          <h2>📖 Code Documentation Standards</h2>
          
          <div className="js-documentation-example">
            <div className="js-code-example">
              <h4>Well-Documented Module:</h4>
              <pre><code>{`/**
 * User Authentication Module
 * Handles user login, logout, and session management
 * @module UserAuth
 * @version 1.2.0
 * @author John Doe <john@example.com>
 * @since 2023-01-15
 */

/**
 * Configuration object for authentication
 * @typedef {Object} AuthConfig
 * @property {string} apiUrl - Base URL for authentication API
 * @property {number} sessionTimeout - Session timeout in milliseconds
 * @property {boolean} rememberMe - Whether to enable "remember me" functionality
 */

/**
 * Authenticates a user with email and password
 * @async
 * @function authenticateUser
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @param {AuthConfig} [config=defaultConfig] - Authentication configuration
 * @returns {Promise<Object>} Promise resolving to user object with token
 * @throws {AuthenticationError} When credentials are invalid
 * @throws {NetworkError} When API request fails
 * 
 * @example
 * try {
 *   const user = await authenticateUser('john@example.com', 'password123');
 *   console.log('Logged in:', user.name);
 * } catch (error) {
 *   console.error('Login failed:', error.message);
 * }
 */
async function authenticateUser(email, password, config = defaultConfig) {
  // Validate inputs
  if (!email || !password) {
    throw new AuthenticationError('Email and password are required');
  }
  
  // Implementation here...
}`}</code></pre>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>💡 Best Practices</h2>
          
          <div className="js-best-practices">
            <div className="js-practice-group">
              <h3>✅ Comment Best Practices</h3>
              <ul>
                <li><strong>Explain WHY, not WHAT:</strong> Code shows what it does, comments should explain the reasoning</li>
                <li><strong>Update comments with code:</strong> Keep documentation in sync with implementation</li>
                <li><strong>Use TODO/FIXME/NOTE:</strong> Mark items that need attention</li>
                <li><strong>Comment complex algorithms:</strong> Explain the logic behind complex code</li>
                <li><strong>Document public APIs:</strong> Use JSDoc for functions that others will use</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🏗️ Structure Best Practices</h3>
              <ul>
                <li><strong>Single Responsibility:</strong> Each function/class should have one clear purpose</li>
                <li><strong>Consistent formatting:</strong> Use tools like Prettier for automatic formatting</li>
                <li><strong>Logical grouping:</strong> Group related functionality together</li>
                <li><strong>Clear dependencies:</strong> Make imports/exports explicit and organized</li>
                <li><strong>Avoid deep nesting:</strong> Use early returns and guard clauses</li>
              </ul>
            </div>
          </div>

          <div className="js-code-example">
            <h4>Example: Clean Function Structure</h4>
            <pre><code>{`/**
 * Processes a payment and updates the order status
 */
function processPayment(order, paymentMethod) {
  // Early validation (guard clauses)
  if (!order) {
    throw new Error('Order is required');
  }
  
  if (!paymentMethod) {
    throw new Error('Payment method is required');
  }
  
  if (order.total <= 0) {
    throw new Error('Order total must be positive');
  }
  
  // Main processing logic
  const paymentResult = chargePayment(order.total, paymentMethod);
  
  if (paymentResult.success) {
    updateOrderStatus(order.id, 'paid');
    sendConfirmationEmail(order.customerEmail);
    return { success: true, transactionId: paymentResult.id };
  }
  
  // Handle payment failure
  logPaymentFailure(order.id, paymentResult.error);
  throw new PaymentError(paymentResult.error);
}`}</code></pre>
          </div>
        </section>

        {/* Tools and Linting */}
        <section className="js-topic-section">
          <h2>🛠️ Tools for Code Quality</h2>
          
          <div className="js-tools-grid">
            <div className="js-tool-card">
              <h3>ESLint - Code Linting</h3>
              <p>Identifies and fixes code quality issues</p>
              <div className="js-code-example">
                <pre><code>{`// .eslintrc.js configuration
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'prefer-const': 'error'
  }
};`}</code></pre>
              </div>
            </div>

            <div className="js-tool-card">
              <h3>Prettier - Code Formatting</h3>
              <p>Automatically formats code consistently</p>
              <div className="js-code-example">
                <pre><code>{`// .prettierrc configuration
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}`}</code></pre>
              </div>
            </div>

            <div className="js-tool-card">
              <h3>JSDoc - Documentation</h3>
              <p>Generates documentation from comments</p>
              <div className="js-code-example">
                <pre><code>{`// Command to generate docs
npm install -g jsdoc
jsdoc -d ./docs ./src/*.js

// Generates HTML documentation
// from JSDoc comments in your code`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Common Pitfalls */}
        <section className="js-topic-section">
          <h2>🚨 Common Pitfalls</h2>
          
          <div className="js-pitfalls">
            <div className="js-pitfall-item">
              <h4>❌ Over-commenting obvious code</h4>
              <div className="js-code-example">
                <pre><code>{`// Bad: States the obvious
let age = 25; // Set age to 25

// Good: Explains the reasoning
let age = 25; // Minimum age required for account approval`}</code></pre>
              </div>
            </div>

            <div className="js-pitfall-item">
              <h4>❌ Outdated comments</h4>
              <div className="js-code-example">
                <pre><code>{`// Bad: Comment doesn't match code
// Calculate discount for premium users
function calculateTax(amount) {  // Function name changed but comment didn't
  return amount * 0.08;
}`}</code></pre>
              </div>
            </div>

            <div className="js-pitfall-item">
              <h4>❌ Inconsistent naming</h4>
              <div className="js-code-example">
                <pre><code>{`// Bad: Mixed naming conventions
let userName = "john";
let user_age = 25;
let UserStatus = "active";

// Good: Consistent camelCase
let userName = "john";
let userAge = 25;
let userStatus = "active";`}</code></pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CommentsAndCodeStructure;
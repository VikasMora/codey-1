import React from 'react';
import '../Navbarweb.css';

function BrowserAPIs() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🌐 Browser APIs</h1>
        <p className="js-topic-subtitle">
          Master browser APIs: localStorage, sessionStorage, geolocation, notifications, and modern web features
        </p>
      </div>

      <div className="js-topic-content">
        {/* Local Storage and Session Storage */}
        <section className="js-topic-section">
          <h2>💾 Web Storage APIs</h2>
          <p>
            Web Storage APIs provide ways to store data in the user's browser. localStorage persists
            data across browser sessions, while sessionStorage only lasts for the current session.
            Both offer more storage capacity and better performance than cookies for client-side data.
          </p>
          
          <div className="js-storage-examples">
            <div className="js-storage-card">
              <h3>Local Storage</h3>
              <div className="js-code-example">
                <pre><code>
{`// Check if localStorage is supported
function isLocalStorageSupported() {
  try {
    const testKey = '__localStorage_test__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

if (isLocalStorageSupported()) {
  console.log('localStorage is supported');
} else {
  console.log('localStorage is not supported');
}

// Basic localStorage operations
function localStorageBasics() {
  // Storing data (always as strings)
  localStorage.setItem('username', 'john_doe');
  localStorage.setItem('userAge', '25');
  localStorage.setItem('isLoggedIn', 'true');
  
  // Alternative syntax
  localStorage.username = 'jane_doe';
  localStorage['userEmail'] = 'jane@example.com';
  
  // Retrieving data
  const username = localStorage.getItem('username');
  const userAge = localStorage.getItem('userAge');
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  console.log('Username:', username);
  console.log('Age:', userAge, typeof userAge); // Always string!
  console.log('Logged in:', isLoggedIn === 'true'); // Convert to boolean
  
  // Removing specific items
  localStorage.removeItem('userAge');
  
  // Check if key exists
  if (localStorage.getItem('username') !== null) {
    console.log('Username exists in storage');
  }
  
  // Get number of items
  console.log('Storage contains', localStorage.length, 'items');
  
  // Iterate through all items
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key, '=', value);
  }
  
  // Clear all localStorage
  // localStorage.clear(); // Uncomment to clear all data
}

// Working with complex data (objects and arrays)
function complexDataStorage() {
  // Storing objects (must be serialized)
  const user = {
    id: 123,
    name: 'John Doe',
    email: 'john@example.com',
    preferences: {
      theme: 'dark',
      notifications: true,
      language: 'en'
    },
    lastLogin: new Date().toISOString()
  };
  
  // Store object as JSON string
  localStorage.setItem('user', JSON.stringify(user));
  
  // Retrieve and parse object
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  console.log('Retrieved user:', storedUser);
  
  // Storing arrays
  const shoppingCart = [
    { id: 1, name: 'Laptop', price: 999.99, quantity: 1 },
    { id: 2, name: 'Mouse', price: 29.99, quantity: 2 },
    { id: 3, name: 'Keyboard', price: 79.99, quantity: 1 }
  ];
  
  localStorage.setItem('cart', JSON.stringify(shoppingCart));
  
  // Retrieve and parse array
  const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
  console.log('Shopping cart items:', storedCart.length);
  
  // Helper functions for safer storage
  function safeSetItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Failed to store data:', error);
      return false;
    }
  }
  
  function safeGetItem(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Failed to retrieve data:', error);
      return defaultValue;
    }
  }
  
  // Usage
  safeSetItem('settings', { theme: 'light', autoSave: true });
  const settings = safeGetItem('settings', { theme: 'dark', autoSave: false });
  console.log('Settings:', settings);
}

// Storage wrapper class
class LocalStorageManager {
  constructor(prefix = '') {
    this.prefix = prefix;
  }
  
  set(key, value, expiration = null) {
    try {
      const item = {
        value: value,
        timestamp: Date.now(),
        expiration: expiration
      };
      localStorage.setItem(this.prefix + key, JSON.stringify(item));
      return true;
    } catch (error) {
      console.error('Storage error:', error);
      return false;
    }
  }
  
  get(key, defaultValue = null) {
    try {
      const itemStr = localStorage.getItem(this.prefix + key);
      if (!itemStr) return defaultValue;
      
      const item = JSON.parse(itemStr);
      
      // Check expiration
      if (item.expiration && Date.now() > item.expiration) {
        this.remove(key);
        return defaultValue;
      }
      
      return item.value;
    } catch (error) {
      console.error('Storage retrieval error:', error);
      return defaultValue;
    }
  }
  
  remove(key) {
    localStorage.removeItem(this.prefix + key);
  }
  
  clear() {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(this.prefix)) {
        localStorage.removeItem(key);
      }
    });
  }
  
  has(key) {
    return localStorage.getItem(this.prefix + key) !== null;
  }
  
  size() {
    return Object.keys(localStorage).filter(key => 
      key.startsWith(this.prefix)
    ).length;
  }
  
  keys() {
    return Object.keys(localStorage)
      .filter(key => key.startsWith(this.prefix))
      .map(key => key.substring(this.prefix.length));
  }
}

// Usage of storage manager
const userStorage = new LocalStorageManager('user_');
const appStorage = new LocalStorageManager('app_');

// Set data with expiration (1 hour)
const oneHour = 60 * 60 * 1000;
userStorage.set('session', { token: 'abc123', userId: 456 }, Date.now() + oneHour);

// Get data
const session = userStorage.get('session');
console.log('Session data:', session);

// Session Storage (same API, different scope)
function sessionStorageExample() {
  // sessionStorage works exactly like localStorage
  // but data is cleared when the tab is closed
  
  sessionStorage.setItem('tabId', Math.random().toString(36));
  sessionStorage.setItem('startTime', Date.now().toString());
  
  // Store temporary form data
  const formData = {
    name: 'John',
    email: 'john@example.com',
    message: 'Hello world'
  };
  
  sessionStorage.setItem('formDraft', JSON.stringify(formData));
  
  // Retrieve form data
  const savedDraft = JSON.parse(sessionStorage.getItem('formDraft') || '{}');
  console.log('Form draft:', savedDraft);
}

// Storage events - listen for changes
function storageEventHandling() {
  // Listen for storage changes (only fires in other tabs/windows)
  window.addEventListener('storage', (event) => {
    console.log('Storage changed:', {
      key: event.key,
      oldValue: event.oldValue,
      newValue: event.newValue,
      url: event.url,
      storageArea: event.storageArea === localStorage ? 'localStorage' : 'sessionStorage'
    });
    
    // React to specific changes
    if (event.key === 'user') {
      console.log('User data changed in another tab');
      // Update UI accordingly
    }
  });
  
  // Simulate change from another tab
  setTimeout(() => {
    localStorage.setItem('testChange', 'Changed from current tab');
  }, 2000);
}

// Storage quota and usage
function checkStorageQuota() {
  // Estimate storage usage (modern browsers)
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    navigator.storage.estimate().then(estimate => {
      console.log('Storage quota:', {
        quota: Math.round(estimate.quota / (1024 * 1024)), // MB
        usage: Math.round(estimate.usage / (1024 * 1024)), // MB
        usagePercentage: Math.round((estimate.usage / estimate.quota) * 100)
      });
    });
  }
  
  // Test storage limits
  function testStorageLimit() {
    let i = 0;
    try {
      while (true) {
        localStorage.setItem('test' + i, new Array(1024).join('a')); // 1KB per item
        i++;
      }
    } catch (error) {
      console.log('Storage limit reached at approximately', i, 'KB');
      // Clean up test data
      for (let j = 0; j < i; j++) {
        localStorage.removeItem('test' + j);
      }
    }
  }
  
  // Uncomment to test storage limit
  // testStorageLimit();
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Fetch API and AJAX */}
        <section className="js-topic-section">
          <h2>🌍 Fetch API & AJAX</h2>
          
          <div className="js-fetch-examples">
            <div className="js-fetch-card">
              <h3>Modern HTTP Requests</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic fetch usage
async function basicFetchExample() {
  try {
    // Simple GET request
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    // Check if request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }
    
    const data = await response.json();
    console.log('Fetched data:', data);
    
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// Different response types
async function responseTypesExample() {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  
  try {
    // JSON response
    const jsonResponse = await fetch(baseUrl + '/users/1');
    const jsonData = await jsonResponse.json();
    console.log('JSON data:', jsonData);
    
    // Text response
    const textResponse = await fetch(baseUrl + '/posts/1');
    const textData = await textResponse.text();
    console.log('Text data:', textData);
    
    // Blob response (for binary data)
    const blobResponse = await fetch('https://via.placeholder.com/150');
    const blobData = await blobResponse.blob();
    console.log('Blob data:', blobData);
    
    // ArrayBuffer response
    const bufferResponse = await fetch('https://via.placeholder.com/150');
    const bufferData = await bufferResponse.arrayBuffer();
    console.log('Buffer data:', bufferData);
    
  } catch (error) {
    console.error('Response type error:', error);
  }
}

// HTTP methods and options
async function httpMethodsExample() {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  
  // GET with query parameters
  const params = new URLSearchParams({
    userId: '1',
    _limit: '5',
    _sort: 'id'
  });
  
  const getResponse = await fetch(baseUrl + '/posts?' + params);
  const posts = await getResponse.json();
  console.log('GET with params:', posts);
  
  // POST request
  const newPost = {
    title: 'New Post Title',
    body: 'This is the post body content',
    userId: 1
  };
  
  const postResponse = await fetch(baseUrl + '/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token123'
    },
    body: JSON.stringify(newPost)
  });
  
  const createdPost = await postResponse.json();
  console.log('Created post:', createdPost);
  
  // PUT request (full update)
  const updatedPost = {
    id: 1,
    title: 'Updated Title',
    body: 'Updated body content',
    userId: 1
  };
  
  const putResponse = await fetch(baseUrl + '/posts/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedPost)
  });
  
  const putResult = await putResponse.json();
  console.log('PUT result:', putResult);
  
  // PATCH request (partial update)
  const patchData = {
    title: 'Partially Updated Title'
  };
  
  const patchResponse = await fetch(baseUrl + '/posts/1', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(patchData)
  });
  
  const patchResult = await patchResponse.json();
  console.log('PATCH result:', patchResult);
  
  // DELETE request
  const deleteResponse = await fetch(baseUrl + '/posts/1', {
    method: 'DELETE'
  });
  
  console.log('DELETE status:', deleteResponse.status);
}

// Advanced fetch features
async function advancedFetchFeatures() {
  // Request with timeout
  async function fetchWithTimeout(url, options = {}, timeoutMs = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    
    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        throw new Error('Request timed out after ' + timeoutMs + 'ms');
      }
      throw error;
    }
  }
  
  // Usage
  try {
    const response = await fetchWithTimeout(
      'https://jsonplaceholder.typicode.com/posts/1',
      {},
      3000
    );
    const data = await response.json();
    console.log('Timeout fetch result:', data);
  } catch (error) {
    console.error('Timeout fetch error:', error);
  }
  
  // Request with retry logic
  async function fetchWithRetry(url, options = {}, maxRetries = 3) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log('Fetch attempt', attempt, 'of', maxRetries);
        
        const response = await fetch(url, options);
        
        // Retry on server errors (5xx)
        if (response.status >= 500) {
          throw new Error('Server error: ' + response.status);
        }
        
        return response;
        
      } catch (error) {
        lastError = error;
        
        if (attempt < maxRetries) {
          const delay = Math.pow(2, attempt - 1) * 1000; // Exponential backoff
          console.log('Retrying in', delay, 'ms...');
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    throw new Error('Max retries exceeded. Last error: ' + lastError.message);
  }
  
  // File upload with progress
  async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', 'Uploaded via fetch API');
    
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData // Don't set Content-Type header for FormData
      });
      
      if (!response.ok) {
        throw new Error('Upload failed: ' + response.statusText);
      }
      
      const result = await response.json();
      console.log('Upload successful:', result);
      return result;
      
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  }
  
  // Streaming response
  async function streamingFetch() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      let result = '';
      
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        result += chunk;
        console.log('Received chunk:', chunk.length, 'bytes');
      }
      
      console.log('Streaming complete:', result.length, 'total bytes');
      return JSON.parse(result);
      
    } catch (error) {
      console.error('Streaming error:', error);
    }
  }
}

// API client class
class APIClient {
  constructor(baseURL, defaultHeaders = {}) {
    this.baseURL = baseURL.replace(/\\/$/, ''); // Remove trailing slash
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders
    };
    this.interceptors = {
      request: [],
      response: []
    };
  }
  
  // Add request interceptor
  addRequestInterceptor(interceptor) {
    this.interceptors.request.push(interceptor);
  }
  
  // Add response interceptor
  addResponseInterceptor(interceptor) {
    this.interceptors.response.push(interceptor);
  }
  
  // Apply request interceptors
  async applyRequestInterceptors(config) {
    let modifiedConfig = { ...config };
    
    for (const interceptor of this.interceptors.request) {
      modifiedConfig = await interceptor(modifiedConfig);
    }
    
    return modifiedConfig;
  }
  
  // Apply response interceptors
  async applyResponseInterceptors(response) {
    let modifiedResponse = response;
    
    for (const interceptor of this.interceptors.response) {
      modifiedResponse = await interceptor(modifiedResponse);
    }
    
    return modifiedResponse;
  }
  
  async request(endpoint, options = {}) {
    const url = this.baseURL + endpoint;
    
    let config = {
      headers: { ...this.defaultHeaders, ...options.headers },
      ...options
    };
    
    // Apply request interceptors
    config = await this.applyRequestInterceptors(config);
    
    try {
      let response = await fetch(url, config);
      
      // Apply response interceptors
      response = await this.applyResponseInterceptors(response);
      
      return response;
      
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
  
  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? endpoint + '?' + queryString : endpoint;
    
    const response = await this.request(url);
    return response.json();
  }
  
  async post(endpoint, data) {
    const response = await this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
  async put(endpoint, data) {
    const response = await this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
  async patch(endpoint, data) {
    const response = await this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
  async delete(endpoint) {
    const response = await this.request(endpoint, {
      method: 'DELETE'
    });
    return response.ok;
  }
}

// Usage of API client
const apiClient = new APIClient('https://jsonplaceholder.typicode.com');

// Add authentication interceptor
apiClient.addRequestInterceptor(async (config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  return config;
});

// Add logging interceptor
apiClient.addResponseInterceptor(async (response) => {
  console.log('API Response:', response.status, response.url);
  return response;
});

// Use the client
async function apiClientExample() {
  try {
    const posts = await apiClient.get('/posts', { _limit: 5 });
    console.log('API Client - Posts:', posts);
    
    const newPost = await apiClient.post('/posts', {
      title: 'New Post',
      body: 'Post content',
      userId: 1
    });
    console.log('API Client - Created:', newPost);
    
  } catch (error) {
    console.error('API Client Error:', error);
  }
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* JSON Handling */}
        <section className="js-topic-section">
          <h2>📄 Working with JSON</h2>
          
          <div className="js-json-examples">
            <div className="js-json-card">
              <h3>JSON Parsing and Stringification</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic JSON operations
function jsonBasics() {
  // JavaScript object
  const user = {
    id: 123,
    name: 'John Doe',
    email: 'john@example.com',
    active: true,
    lastLogin: new Date(),
    preferences: {
      theme: 'dark',
      notifications: true
    },
    tags: ['developer', 'javascript', 'react']
  };
  
  // Convert to JSON string
  const jsonString = JSON.stringify(user);
  console.log('JSON String:', jsonString);
  
  // Parse JSON string back to object
  const parsedUser = JSON.parse(jsonString);
  console.log('Parsed User:', parsedUser);
  
  // Note: Date objects become strings when serialized
  console.log('Original date:', user.lastLogin instanceof Date);
  console.log('Parsed date:', typeof parsedUser.lastLogin);
}

// JSON.stringify with options
function jsonStringifyAdvanced() {
  const data = {
    name: 'John',
    age: 30,
    city: 'New York',
    hobbies: ['reading', 'gaming', 'coding'],
    address: {
      street: '123 Main St',
      zipCode: '10001'
    },
    password: 'secret123', // We want to exclude this
    internal_id: 'internal_value' // And this too
  };
  
  // Basic stringify
  console.log('Basic:', JSON.stringify(data));
  
  // Stringify with replacer function
  const jsonWithReplacer = JSON.stringify(data, (key, value) => {
    // Exclude sensitive data
    if (key === 'password' || key.startsWith('internal_')) {
      return undefined; // Exclude from output
    }
    
    // Transform specific values
    if (key === 'age') {
      return value + ' years old';
    }
    
    return value;
  });
  console.log('With replacer:', jsonWithReplacer);
  
  // Stringify with replacer array (include only specific keys)
  const jsonWithArray = JSON.stringify(data, ['name', 'age', 'city']);
  console.log('With array replacer:', jsonWithArray);
  
  // Stringify with space parameter (pretty printing)
  const prettyJson = JSON.stringify(data, null, 2); // 2 spaces indentation
  console.log('Pretty printed:', prettyJson);
  
  // Stringify with custom space character
  const customIndent = JSON.stringify(data, null, '    '); // 4 spaces
  console.log('Custom indent:', customIndent);
}

// JSON.parse with reviver function
function jsonParseAdvanced() {
  const jsonData = JSON.stringify({
    name: 'John',
    birthDate: '2023-01-15T10:30:00.000Z',
    score: '95.5',
    isActive: 'true',
    metadata: {
      createdAt: '2023-01-01T00:00:00.000Z',
      version: '1.2.3'
    }
  });
  
  // Parse with reviver function to transform values
  const parsed = JSON.parse(jsonData, (key, value) => {
    // Convert date strings back to Date objects
    if (key.includes('Date') || key.includes('At')) {
      return new Date(value);
    }
    
    // Convert numeric strings to numbers
    if (key === 'score' && typeof value === 'string') {
      return parseFloat(value);
    }
    
    // Convert boolean strings to booleans
    if (key === 'isActive' && typeof value === 'string') {
      return value === 'true';
    }
    
    return value;
  });
  
  console.log('Parsed with reviver:', parsed);
  console.log('birthDate is Date?', parsed.birthDate instanceof Date);
  console.log('score is number?', typeof parsed.score);
  console.log('isActive is boolean?', typeof parsed.isActive);
}

// Safe JSON operations
function safeJsonOperations() {
  // Safe JSON.parse with error handling
  function safeJsonParse(jsonString, defaultValue = null) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('JSON parse error:', error.message);
      return defaultValue;
    }
  }
  
  // Safe JSON.stringify with error handling
  function safeJsonStringify(data, defaultValue = '{}') {
    try {
      return JSON.stringify(data);
    } catch (error) {
      console.error('JSON stringify error:', error.message);
      return defaultValue;
    }
  }
  
  // Test with invalid JSON
  const invalidJson = '{ "name": "John", "age": 30, }'; // Trailing comma
  const result1 = safeJsonParse(invalidJson, { error: 'Invalid JSON' });
  console.log('Safe parse result:', result1);
  
  // Test with circular reference
  const circular = { name: 'John' };
  circular.self = circular; // Creates circular reference
  
  const result2 = safeJsonStringify(circular, '{"error":"Circular reference"}');
  console.log('Safe stringify result:', result2);
}

// Working with complex JSON structures
function complexJsonHandling() {
  // Deep object with various data types
  const complexData = {
    users: [
      {
        id: 1,
        profile: {
          name: 'John Doe',
          avatar: null,
          settings: {
            notifications: {
              email: true,
              push: false,
              sms: null
            }
          }
        },
        posts: [
          { id: 101, title: 'First Post', tags: ['js', 'web'] },
          { id: 102, title: 'Second Post', tags: ['react', 'frontend'] }
        ]
      }
    ],
    metadata: {
      version: '2.1.0',
      generatedAt: new Date().toISOString(),
      stats: {
        totalUsers: 1,
        totalPosts: 2
      }
    }
  };
  
  // Custom serialization for complex objects
  class JSONSerializer {
    static stringify(obj, options = {}) {
      const {
        includeNulls = false,
        dateFormat = 'iso',
        precision = null
      } = options;
      
      return JSON.stringify(obj, (key, value) => {
        // Handle null values
        if (value === null && !includeNulls) {
          return undefined;
        }
        
        // Handle Date objects
        if (value instanceof Date) {
          switch (dateFormat) {
            case 'timestamp':
              return value.getTime();
            case 'iso':
            default:
              return value.toISOString();
          }
        }
        
        // Handle numbers with precision
        if (typeof value === 'number' && precision !== null) {
          return parseFloat(value.toFixed(precision));
        }
        
        return value;
      }, 2);
    }
    
    static parse(jsonString, options = {}) {
      const { reviveDates = true } = options;
      
      return JSON.parse(jsonString, (key, value) => {
        // Revive date strings
        if (reviveDates && typeof value === 'string') {
          // Check if it looks like an ISO date string
          if (/^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}/.test(value)) {
            return new Date(value);
          }
        }
        
        return value;
      });
    }
  }
  
  // Usage
  const serialized = JSONSerializer.stringify(complexData, {
    includeNulls: false,
    dateFormat: 'iso'
  });
  console.log('Custom serialized:', serialized);
  
  const deserialized = JSONSerializer.parse(serialized, { reviveDates: true });
  console.log('Custom deserialized:', deserialized);
}

// JSON Schema validation (basic implementation)
function jsonSchemaValidation() {
  // Simple schema validator
  class SimpleValidator {
    static validate(data, schema) {
      const errors = [];
      
      function validateValue(value, schemaRule, path = '') {
        if (schemaRule.required && (value === undefined || value === null)) {
          errors.push(path + ' is required');
          return;
        }
        
        if (value === undefined || value === null) {
          return; // Skip validation for optional null/undefined values
        }
        
        if (schemaRule.type && typeof value !== schemaRule.type) {
          errors.push(path + ' must be of type ' + schemaRule.type);
          return;
        }
        
        if (schemaRule.minLength && value.length < schemaRule.minLength) {
          errors.push(path + ' must be at least ' + schemaRule.minLength + ' characters');
        }
        
        if (schemaRule.maxLength && value.length > schemaRule.maxLength) {
          errors.push(path + ' must be no more than ' + schemaRule.maxLength + ' characters');
        }
        
        if (schemaRule.pattern && !new RegExp(schemaRule.pattern).test(value)) {
          errors.push(path + ' does not match required pattern');
        }
        
        if (schemaRule.properties && typeof value === 'object') {
          Object.keys(schemaRule.properties).forEach(key => {
            validateValue(
              value[key],
              schemaRule.properties[key],
              path + (path ? '.' : '') + key
            );
          });
        }
      }
      
      validateValue(data, schema);
      
      return {
        valid: errors.length === 0,
        errors: errors
      };
    }
  }
  
  // Define schema
  const userSchema = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        required: true,
        minLength: 2,
        maxLength: 50
      },
      email: {
        type: 'string',
        required: true,
        pattern: '^[^@]+@[^@]+\\.[^@]+$'
      },
      age: {
        type: 'number',
        required: false
      }
    }
  };
  
  // Test data
  const validUser = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  };
  
  const invalidUser = {
    name: 'J', // Too short
    email: 'invalid-email', // Invalid format
    // age is optional, so it's okay to omit
  };
  
  console.log('Valid user validation:', SimpleValidator.validate(validUser, userSchema));
  console.log('Invalid user validation:', SimpleValidator.validate(invalidUser, userSchema));
}

// JSON data manipulation utilities
const JSONUtils = {
  // Deep merge JSON objects
  deepMerge: function(target, source) {
    const result = JSON.parse(JSON.stringify(target)); // Deep clone
    
    function merge(obj, src) {
      Object.keys(src).forEach(key => {
        if (src[key] && typeof src[key] === 'object' && !Array.isArray(src[key])) {
          if (!obj[key]) obj[key] = {};
          merge(obj[key], src[key]);
        } else {
          obj[key] = src[key];
        }
      });
    }
    
    merge(result, source);
    return result;
  },
  
  // Get nested property safely
  getNestedProperty: function(obj, path, defaultValue = undefined) {
    return path.split('.').reduce((current, key) => {
      return (current && current[key] !== undefined) ? current[key] : defaultValue;
    }, obj);
  },
  
  // Set nested property
  setNestedProperty: function(obj, path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((current, key) => {
      if (!current[key]) current[key] = {};
      return current[key];
    }, obj);
    target[lastKey] = value;
  },
  
  // Flatten nested object
  flatten: function(obj, prefix = '', result = {}) {
    Object.keys(obj).forEach(key => {
      const newKey = prefix ? prefix + '.' + key : key;
      if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        this.flatten(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    });
    return result;
  },
  
  // Unflatten object
  unflatten: function(obj) {
    const result = {};
    Object.keys(obj).forEach(key => {
      this.setNestedProperty(result, key, obj[key]);
    });
    return result;
  }
};

// Usage examples
function jsonUtilsExample() {
  const obj1 = { a: 1, b: { c: 2, d: 3 } };
  const obj2 = { b: { c: 4, e: 5 }, f: 6 };
  
  console.log('Deep merge:', JSONUtils.deepMerge(obj1, obj2));
  console.log('Nested property:', JSONUtils.getNestedProperty(obj1, 'b.c'));
  console.log('Flatten:', JSONUtils.flatten(obj1));
  
  const flattened = { 'a': 1, 'b.c': 2, 'b.d': 3 };
  console.log('Unflatten:', JSONUtils.unflatten(flattened));
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Geolocation and Other APIs */}
        <section className="js-topic-section">
          <h2>🌍 Geolocation & Modern APIs</h2>
          
          <div className="js-geolocation-examples">
            <div className="js-geo-card">
              <h3>Geolocation API</h3>
              <div className="js-code-example">
                <pre><code>
{`// Check geolocation support
function checkGeolocationSupport() {
  if ('geolocation' in navigator) {
    console.log('Geolocation is supported');
    return true;
  } else {
    console.log('Geolocation is not supported');
    return false;
  }
}

// Basic geolocation usage
function getCurrentLocation() {
  if (!checkGeolocationSupport()) return;
  
  navigator.geolocation.getCurrentPosition(
    // Success callback
    (position) => {
      const coords = position.coords;
      console.log('Current position:', {
        latitude: coords.latitude,
        longitude: coords.longitude,
        accuracy: coords.accuracy + ' meters',
        altitude: coords.altitude,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
        timestamp: new Date(position.timestamp)
      });
      
      // Use the coordinates
      displayLocationOnMap(coords.latitude, coords.longitude);
    },
    
    // Error callback
    (error) => {
      console.error('Geolocation error:', {
        code: error.code,
        message: error.message
      });
      
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log('User denied the request for geolocation');
          break;
        case error.POSITION_UNAVAILABLE:
          console.log('Location information is unavailable');
          break;
        case error.TIMEOUT:
          console.log('The request to get user location timed out');
          break;
        default:
          console.log('An unknown error occurred');
          break;
      }
    },
    
    // Options
    {
      enableHighAccuracy: true,  // Use GPS if available
      timeout: 10000,           // 10 seconds timeout
      maximumAge: 300000        // Accept cached position up to 5 minutes old
    }
  );
}

// Watch position changes
function watchUserLocation() {
  if (!checkGeolocationSupport()) return null;
  
  const watchId = navigator.geolocation.watchPosition(
    (position) => {
      const coords = position.coords;
      console.log('Position update:', {
        lat: coords.latitude,
        lng: coords.longitude,
        accuracy: coords.accuracy,
        timestamp: new Date(position.timestamp)
      });
      
      updateUserMarker(coords.latitude, coords.longitude);
    },
    
    (error) => {
      console.error('Watch position error:', error);
    },
    
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 60000
    }
  );
  
  // Return watch ID so it can be cleared later
  return watchId;
}

// Stop watching position
function stopWatchingLocation(watchId) {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    console.log('Stopped watching location');
  }
}

// Geolocation utilities
class LocationManager {
  constructor() {
    this.watchId = null;
    this.currentPosition = null;
    this.callbacks = {
      position: [],
      error: []
    };
  }
  
  isSupported() {
    return 'geolocation' in navigator;
  }
  
  async getCurrentPosition(options = {}) {
    return new Promise((resolve, reject) => {
      if (!this.isSupported()) {
        reject(new Error('Geolocation not supported'));
        return;
      }
      
      const defaultOptions = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      };
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentPosition = position;
          resolve(position);
        },
        (error) => {
          reject(error);
        },
        { ...defaultOptions, ...options }
      );
    });
  }
  
  startWatching(options = {}) {
    if (!this.isSupported() || this.watchId) return false;
    
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.currentPosition = position;
        this.callbacks.position.forEach(callback => {
          try {
            callback(position);
          } catch (error) {
            console.error('Position callback error:', error);
          }
        });
      },
      
      (error) => {
        this.callbacks.error.forEach(callback => {
          try {
            callback(error);
          } catch (err) {
            console.error('Error callback error:', err);
          }
        });
      },
      
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 60000,
        ...options
      }
    );
    
    return true;
  }
  
  stopWatching() {
    if (this.watchId) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
      return true;
    }
    return false;
  }
  
  onPosition(callback) {
    this.callbacks.position.push(callback);
  }
  
  onError(callback) {
    this.callbacks.error.push(callback);
  }
  
  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  }
  
  toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  
  formatCoordinates(latitude, longitude) {
    return {
      decimal: { lat: latitude, lng: longitude },
      dms: {
        lat: this.toDMS(latitude, 'lat'),
        lng: this.toDMS(longitude, 'lng')
      }
    };
  }
  
  toDMS(coordinate, type) {
    const absolute = Math.abs(coordinate);
    const degrees = Math.floor(absolute);
    const minutesNotTruncated = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = ((minutesNotTruncated - minutes) * 60).toFixed(2);
    
    let direction;
    if (type === 'lat') {
      direction = coordinate >= 0 ? 'N' : 'S';
    } else {
      direction = coordinate >= 0 ? 'E' : 'W';
    }
    
    return degrees + '° ' + minutes + "' " + seconds + '" ' + direction;
  }
}

// Notifications API
class NotificationManager {
  static async requestPermission() {
    if (!('Notification' in window)) {
      throw new Error('This browser does not support notifications');
    }
    
    let permission = Notification.permission;
    
    if (permission === 'default') {
      permission = await Notification.requestPermission();
    }
    
    return permission;
  }
  
  static async show(title, options = {}) {
    const permission = await this.requestPermission();
    
    if (permission !== 'granted') {
      throw new Error('Notification permission denied');
    }
    
    const defaultOptions = {
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [200, 100, 200],
      tag: 'default',
      renotify: true
    };
    
    const notification = new Notification(title, {
      ...defaultOptions,
      ...options
    });
    
    return notification;
  }
  
  static async showWithActions(title, options = {}) {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      const registration = await navigator.serviceWorker.ready;
      
      return registration.showNotification(title, {
        body: options.body,
        icon: options.icon || '/icon-192x192.png',
        badge: options.badge || '/badge-72x72.png',
        actions: options.actions || [],
        data: options.data,
        tag: options.tag || 'default',
        renotify: true,
        ...options
      });
    } else {
      return this.show(title, options);
    }
  }
}

// Usage examples
function modernAPIExamples() {
  // Location manager example
  const locationManager = new LocationManager();
  
  locationManager.onPosition((position) => {
    const coords = position.coords;
    console.log('New position:', coords.latitude, coords.longitude);
  });
  
  locationManager.onError((error) => {
    console.error('Location error:', error.message);
  });
  
  // Get current location
  locationManager.getCurrentPosition()
    .then(position => {
      console.log('Got position:', position);
    })
    .catch(error => {
      console.error('Failed to get position:', error);
    });
  
  // Notification example
  NotificationManager.show('Hello!', {
    body: 'This is a test notification',
    icon: '/icon.png',
    data: { url: '/dashboard' }
  }).then(notification => {
    notification.onclick = function(event) {
      console.log('Notification clicked:', event);
      window.open(notification.data.url);
      notification.close();
    };
  }).catch(error => {
    console.error('Notification error:', error);
  });
}

// Helper functions (would be implemented elsewhere)
function displayLocationOnMap(lat, lng) {
  console.log('Would display location on map:', lat, lng);
}

function updateUserMarker(lat, lng) {
  console.log('Would update user marker:', lat, lng);
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>⭐ Browser API Best Practices</h2>
          
          <div className="js-api-practices">
            <div className="js-practice-group">
              <h3>✅ Storage Guidelines</h3>
              <ul>
                <li><strong>Check availability:</strong> Always test if storage APIs are supported</li>
                <li><strong>Handle quota limits:</strong> Monitor storage usage and handle quota exceeded errors</li>
                <li><strong>Serialize safely:</strong> Use try/catch when parsing JSON from storage</li>
                <li><strong>Clean up regularly:</strong> Remove expired or unnecessary data</li>
                <li><strong>Use appropriate storage:</strong> localStorage for persistent data, sessionStorage for temporary</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🌐 Network Best Practices</h3>
              <ul>
                <li><strong>Handle errors gracefully:</strong> Provide meaningful error messages and fallbacks</li>
                <li><strong>Implement timeouts:</strong> Prevent hanging requests with reasonable timeouts</li>
                <li><strong>Use proper HTTP methods:</strong> GET for retrieval, POST for creation, etc.</li>
                <li><strong>Validate responses:</strong> Check response status and content before processing</li>
                <li><strong>Implement retry logic:</strong> Handle transient network failures gracefully</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🔒 Privacy & Security</h3>
              <ul>
                <li><strong>Request permissions responsibly:</strong> Explain why you need access before requesting</li>
                <li><strong>Handle permission denial:</strong> Provide fallbacks when users deny permissions</li>
                <li><strong>Secure sensitive data:</strong> Don't store sensitive information in localStorage</li>
                <li><strong>Validate user input:</strong> Always validate and sanitize data from forms</li>
                <li><strong>Use HTTPS:</strong> Ensure secure communication for sensitive operations</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BrowserAPIs;
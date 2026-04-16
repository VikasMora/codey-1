import React from 'react';
import '../Navbarweb.css';

function AsynchronousJavaScript() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🚀 Asynchronous JavaScript</h1>
        <p className="js-topic-subtitle">
          Master async programming: callbacks, promises, async/await, and handling concurrent operations
        </p>
      </div>

      <div className="js-topic-content">
        {/* Understanding Asynchronous Programming */}
        <section className="js-topic-section">
          <h2>🧠 Understanding Asynchronous Programming</h2>
          <p>
            JavaScript is single-threaded, but it can handle asynchronous operations through the event loop.
            Asynchronous programming allows your code to perform long-running operations without blocking
            the main thread, keeping your applications responsive and efficient.
          </p>
          
          <div className="js-async-basics">
            <div className="js-basic-example">
              <h3>💡 Synchronous vs Asynchronous</h3>
              <div className="js-code-example">
                <pre><code>
{`// Synchronous code - blocks execution
console.log('Start');

function synchronousDelay() {
  const start = Date.now();
  while (Date.now() - start < 2000) {
    // Block for 2 seconds - BAD!
  }
  console.log('Synchronous operation complete');
}

console.log('Before sync operation');
synchronousDelay(); // This blocks everything!
console.log('After sync operation');
console.log('End');

// Output:
// Start
// Before sync operation
// (2 second pause - UI freezes)
// Synchronous operation complete
// After sync operation
// End

// ============================================

// Asynchronous code - non-blocking
console.log('Start');

function asynchronousDelay() {
  setTimeout(() => {
    console.log('Asynchronous operation complete');
  }, 2000);
}

console.log('Before async operation');
asynchronousDelay(); // This doesn't block!
console.log('After async operation');
console.log('End');

// Output:
// Start
// Before async operation
// After async operation
// End
// (after 2 seconds) Asynchronous operation complete

// The Event Loop in action
console.log('1 - Start');

setTimeout(() => console.log('2 - Timeout 0ms'), 0);
setTimeout(() => console.log('3 - Timeout 100ms'), 100);

Promise.resolve().then(() => console.log('4 - Promise'));

console.log('5 - End');

// Output order:
// 1 - Start
// 5 - End
// 4 - Promise (microtask queue has priority)
// 2 - Timeout 0ms
// 3 - Timeout 100ms

// Understanding the call stack and event loop
function demonstrateEventLoop() {
  console.log('Call stack: Function start');
  
  // Macro task (setTimeout)
  setTimeout(() => {
    console.log('Macro task: setTimeout');
  }, 0);
  
  // Micro task (Promise)
  Promise.resolve().then(() => {
    console.log('Micro task: Promise.then');
  });
  
  // Another micro task
  queueMicrotask(() => {
    console.log('Micro task: queueMicrotask');
  });
  
  console.log('Call stack: Function end');
}

demonstrateEventLoop();

// Output:
// Call stack: Function start
// Call stack: Function end
// Micro task: Promise.then
// Micro task: queueMicrotask
// Macro task: setTimeout

// Web APIs and async operations
function webAPIExamples() {
  console.log('Starting Web API examples...');
  
  // DOM events (async)
  document.addEventListener('click', () => {
    console.log('Click event handled asynchronously');
  });
  
  // HTTP requests (async)
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log('HTTP request completed:', data))
    .catch(error => console.error('HTTP request failed:', error));
  
  // File reading (async)
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
      console.log('File read completed:', e.target.result);
    };
    
    reader.readAsText(file);
  });
  
  console.log('Web API calls initiated (non-blocking)');
}

// Simulating async operations
function simulateAsyncOperation(name, delay) {
  return new Promise((resolve) => {
    console.log('Starting', name, '...');
    setTimeout(() => {
      console.log(name, 'completed after', delay, 'ms');
      resolve('Result from ' + name);
    }, delay);
  });
}

// Sequential vs concurrent execution
async function demonstrateSequentialVsConcurrent() {
  console.log('=== Sequential Execution ===');
  const start1 = Date.now();
  
  await simulateAsyncOperation('Task 1', 1000);
  await simulateAsyncOperation('Task 2', 1500);
  await simulateAsyncOperation('Task 3', 800);
  
  console.log('Sequential total time:', Date.now() - start1, 'ms');
  
  console.log('\\n=== Concurrent Execution ===');
  const start2 = Date.now();
  
  await Promise.all([
    simulateAsyncOperation('Task A', 1000),
    simulateAsyncOperation('Task B', 1500),
    simulateAsyncOperation('Task C', 800)
  ]);
  
  console.log('Concurrent total time:', Date.now() - start2, 'ms');
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Callbacks */}
        <section className="js-topic-section">
          <h2>📞 Callbacks</h2>
          
          <div className="js-callback-examples">
            <div className="js-callback-card">
              <h3>Basic Callback Patterns</h3>
              <div className="js-code-example">
                <pre><code>
{`// Simple callback function
function processData(data, callback) {
  console.log('Processing data:', data);
  
  // Simulate async processing
  setTimeout(() => {
    const result = data.toUpperCase();
    callback(null, result); // Node.js convention: callback(error, result)
  }, 1000);
}

// Using the callback
processData('hello world', (error, result) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Processed result:', result);
  }
});

// Error handling with callbacks
function fetchUserData(userId, callback) {
  // Simulate API call
  setTimeout(() => {
    if (userId <= 0) {
      callback(new Error('Invalid user ID'), null);
      return;
    }
    
    if (userId === 999) {
      callback(new Error('User not found'), null);
      return;
    }
    
    const userData = {
      id: userId,
      name: 'User ' + userId,
      email: 'user' + userId + '@example.com'
    };
    
    callback(null, userData);
  }, Math.random() * 2000); // Random delay
}

// Multiple callback scenarios
function handleUserData() {
  fetchUserData(1, (error, user) => {
    if (error) {
      console.error('Failed to fetch user:', error.message);
      return;
    }
    
    console.log('User fetched:', user);
    
    // Fetch user posts
    fetchUserPosts(user.id, (error, posts) => {
      if (error) {
        console.error('Failed to fetch posts:', error.message);
        return;
      }
      
      console.log('Posts fetched:', posts.length, 'posts');
      
      // Fetch post comments
      if (posts.length > 0) {
        fetchPostComments(posts[0].id, (error, comments) => {
          if (error) {
            console.error('Failed to fetch comments:', error.message);
            return;
          }
          
          console.log('Comments fetched:', comments.length, 'comments');
          // This is starting to look like callback hell!
        });
      }
    });
  });
}

function fetchUserPosts(userId, callback) {
  setTimeout(() => {
    const posts = [
      { id: 1, title: 'Post 1', userId: userId },
      { id: 2, title: 'Post 2', userId: userId }
    ];
    callback(null, posts);
  }, 1000);
}

function fetchPostComments(postId, callback) {
  setTimeout(() => {
    const comments = [
      { id: 1, text: 'Great post!', postId: postId },
      { id: 2, text: 'Thanks for sharing', postId: postId }
    ];
    callback(null, comments);
  }, 800);
}

// Callback hell example
function callbackHellExample() {
  setTimeout(() => {
    console.log('Step 1 complete');
    setTimeout(() => {
      console.log('Step 2 complete');
      setTimeout(() => {
        console.log('Step 3 complete');
        setTimeout(() => {
          console.log('Step 4 complete');
          setTimeout(() => {
            console.log('All steps complete - but this is hard to read!');
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}

// Better callback organization
function organizedCallbacks() {
  function step1(callback) {
    setTimeout(() => {
      console.log('Step 1 complete');
      callback(null, 'Result 1');
    }, 500);
  }
  
  function step2(previousResult, callback) {
    setTimeout(() => {
      console.log('Step 2 complete, received:', previousResult);
      callback(null, 'Result 2');
    }, 500);
  }
  
  function step3(previousResult, callback) {
    setTimeout(() => {
      console.log('Step 3 complete, received:', previousResult);
      callback(null, 'Final Result');
    }, 500);
  }
  
  // Chain the steps
  step1((error, result1) => {
    if (error) return console.error('Step 1 failed:', error);
    
    step2(result1, (error, result2) => {
      if (error) return console.error('Step 2 failed:', error);
      
      step3(result2, (error, finalResult) => {
        if (error) return console.error('Step 3 failed:', error);
        
        console.log('All steps completed successfully:', finalResult);
      });
    });
  });
}

// Event-driven callbacks
function createEventEmitter() {
  const events = {};
  
  return {
    on: function(eventName, callback) {
      if (!events[eventName]) {
        events[eventName] = [];
      }
      events[eventName].push(callback);
    },
    
    emit: function(eventName, data) {
      if (events[eventName]) {
        events[eventName].forEach(callback => {
          try {
            callback(data);
          } catch (error) {
            console.error('Callback error:', error);
          }
        });
      }
    },
    
    off: function(eventName, callback) {
      if (events[eventName]) {
        events[eventName] = events[eventName].filter(cb => cb !== callback);
      }
    }
  };
}

// Usage
const emitter = createEventEmitter();

emitter.on('data-received', (data) => {
  console.log('Received data:', data);
});

emitter.on('data-received', (data) => {
  console.log('Processing data:', data.length, 'characters');
});

// Simulate async data reception
setTimeout(() => {
  emitter.emit('data-received', 'Hello from async operation!');
}, 1000);

// Callback with timeout
function withTimeout(asyncFunction, timeoutMs, callback) {
  let completed = false;
  
  // Set up timeout
  const timeoutId = setTimeout(() => {
    if (!completed) {
      completed = true;
      callback(new Error('Operation timed out after ' + timeoutMs + 'ms'));
    }
  }, timeoutMs);
  
  // Execute async function
  asyncFunction((error, result) => {
    if (!completed) {
      completed = true;
      clearTimeout(timeoutId);
      callback(error, result);
    }
  });
}

// Usage
function slowAsyncOperation(callback) {
  setTimeout(() => {
    callback(null, 'Slow operation completed');
  }, 3000); // 3 seconds
}

withTimeout(slowAsyncOperation, 2000, (error, result) => {
  if (error) {
    console.error('Operation failed:', error.message);
  } else {
    console.log('Operation succeeded:', result);
  }
});`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Promises */}
        <section className="js-topic-section">
          <h2>🤝 Promises</h2>
          
          <div className="js-promise-examples">
            <div className="js-promise-card">
              <h3>Promise Fundamentals</h3>
              <div className="js-code-example">
                <pre><code>
{`// Creating a basic Promise
const myPromise = new Promise((resolve, reject) => {
  // Async operation simulation
  setTimeout(() => {
    const success = Math.random() > 0.3; // 70% success rate
    
    if (success) {
      resolve('Operation successful!');
    } else {
      reject(new Error('Operation failed!'));
    }
  }, 1000);
});

// Using a Promise
myPromise
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('Promise completed (success or failure)');
  });

// Promise states demonstration
function demonstratePromiseStates() {
  // Pending Promise
  const pendingPromise = new Promise((resolve) => {
    setTimeout(() => resolve('Resolved after delay'), 2000);
  });
  
  console.log('Pending promise state:', pendingPromise); // Promise {<pending>}
  
  // Resolved Promise
  const resolvedPromise = Promise.resolve('Already resolved');
  console.log('Resolved promise state:', resolvedPromise); // Promise {<resolved>}
  
  // Rejected Promise
  const rejectedPromise = Promise.reject(new Error('Already rejected'));
  console.log('Rejected promise state:', rejectedPromise); // Promise {<rejected>}
  
  // Handle rejected promise to prevent unhandled rejection
  rejectedPromise.catch(() => {}); // Silent catch for demo
}

// Converting callback-based functions to Promises
function callbackToPromise() {
  // Original callback function
  function fetchDataCallback(url, callback) {
    setTimeout(() => {
      if (!url) {
        callback(new Error('URL is required'), null);
        return;
      }
      
      const data = { url: url, data: 'Fetched data from ' + url };
      callback(null, data);
    }, 1000);
  }
  
  // Promisified version
  function fetchDataPromise(url) {
    return new Promise((resolve, reject) => {
      fetchDataCallback(url, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
  
  // Usage
  fetchDataPromise('https://api.example.com/users')
    .then(data => {
      console.log('Fetched:', data);
      return fetchDataPromise('https://api.example.com/posts');
    })
    .then(data => {
      console.log('Fetched:', data);
      return fetchDataPromise('https://api.example.com/comments');
    })
    .then(data => {
      console.log('All data fetched successfully!');
    })
    .catch(error => {
      console.error('One of the requests failed:', error.message);
    });
}

// Promise chaining
function demonstrateChaining() {
  function processStep(stepName, inputData, delay = 1000) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = {
          step: stepName,
          input: inputData,
          output: stepName + ' processed: ' + inputData,
          timestamp: Date.now()
        };
        console.log('Completed step:', stepName);
        resolve(result);
      }, delay);
    });
  }
  
  // Chain multiple async operations
  processStep('Step 1', 'Initial Data', 500)
    .then(result1 => {
      console.log('Step 1 result:', result1.output);
      return processStep('Step 2', result1.output, 800);
    })
    .then(result2 => {
      console.log('Step 2 result:', result2.output);
      return processStep('Step 3', result2.output, 600);
    })
    .then(result3 => {
      console.log('Step 3 result:', result3.output);
      console.log('All processing completed!');
    })
    .catch(error => {
      console.error('Processing failed:', error);
    });
}

// Error handling and recovery
function errorHandlingExample() {
  function unreliableOperation(shouldFail = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error('Simulated failure'));
        } else {
          resolve('Success!');
        }
      }, 500);
    });
  }
  
  function retryOperation(operation, maxRetries = 3) {
    let attempts = 0;
    
    function attempt() {
      attempts++;
      console.log('Attempt', attempts, 'of', maxRetries);
      
      return operation().catch(error => {
        if (attempts < maxRetries) {
          console.log('Attempt failed, retrying...');
          return attempt();
        } else {
          throw new Error('Max retries exceeded: ' + error.message);
        }
      });
    }
    
    return attempt();
  }
  
  // Usage with retry logic
  retryOperation(() => unreliableOperation(Math.random() < 0.7), 3)
    .then(result => {
      console.log('Operation succeeded:', result);
    })
    .catch(error => {
      console.error('Operation failed after retries:', error.message);
    });
}

// Promise.all - concurrent execution
function demonstratePromiseAll() {
  function fetchResource(name, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.9) { // 90% success rate
          resolve({ name: name, data: 'Data from ' + name, delay: delay });
        } else {
          reject(new Error('Failed to fetch ' + name));
        }
      }, delay);
    });
  }
  
  console.log('Starting concurrent fetches...');
  const startTime = Date.now();
  
  Promise.all([
    fetchResource('User Data', 1000),
    fetchResource('Settings', 1500),
    fetchResource('Preferences', 800)
  ])
    .then(results => {
      const endTime = Date.now();
      console.log('All resources fetched in', endTime - startTime, 'ms');
      console.log('Results:', results);
    })
    .catch(error => {
      console.error('One or more fetches failed:', error.message);
    });
}

// Promise.allSettled - handle partial failures
function demonstratePromiseAllSettled() {
  function fetchResource(name, shouldFail = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error('Failed to fetch ' + name));
        } else {
          resolve('Data from ' + name);
        }
      }, Math.random() * 1000);
    });
  }
  
  Promise.allSettled([
    fetchResource('Resource 1'),
    fetchResource('Resource 2', true), // This will fail
    fetchResource('Resource 3'),
    fetchResource('Resource 4', true)  // This will also fail
  ])
    .then(results => {
      console.log('All promises settled:');
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log('Success', index + 1, ':', result.value);
        } else {
          console.log('Failed', index + 1, ':', result.reason.message);
        }
      });
    });
}

// Promise.race - first to complete wins
function demonstratePromiseRace() {
  function createDelayedPromise(name, delay, shouldFail = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error(name + ' failed'));
        } else {
          resolve(name + ' completed in ' + delay + 'ms');
        }
      }, delay);
    });
  }
  
  console.log('Racing promises...');
  
  Promise.race([
    createDelayedPromise('Fast', 800),
    createDelayedPromise('Medium', 1200),
    createDelayedPromise('Slow', 2000)
  ])
    .then(result => {
      console.log('First to complete:', result);
    })
    .catch(error => {
      console.error('First to complete failed:', error.message);
    });
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Async/Await */}
        <section className="js-topic-section">
          <h2>⚡ Async/Await</h2>
          
          <div className="js-async-await-examples">
            <div className="js-async-card">
              <h3>Modern Async Syntax</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic async/await syntax
async function basicAsyncExample() {
  console.log('Starting async function...');
  
  try {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Async operation completed!');
      }, 1000);
    });
    
    console.log('Result:', result);
    return result;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Call async function
basicAsyncExample()
  .then(result => console.log('Function returned:', result))
  .catch(error => console.error('Function failed:', error));

// Converting Promise chains to async/await
// Promise chain version
function promiseChainExample() {
  return fetch('/api/user')
    .then(response => response.json())
    .then(user => {
      console.log('User:', user);
      return fetch('/api/posts?userId=' + user.id);
    })
    .then(response => response.json())
    .then(posts => {
      console.log('Posts:', posts.length);
      return posts;
    })
    .catch(error => {
      console.error('Chain failed:', error);
      throw error;
    });
}

// Async/await version - much cleaner!
async function asyncAwaitExample() {
  try {
    const userResponse = await fetch('/api/user');
    const user = await userResponse.json();
    console.log('User:', user);
    
    const postsResponse = await fetch('/api/posts?userId=' + user.id);
    const posts = await postsResponse.json();
    console.log('Posts:', posts.length);
    
    return posts;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
}

// Error handling with async/await
async function errorHandlingExample() {
  async function riskyOperation(shouldFail = false) {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (shouldFail) {
      throw new Error('Operation failed as requested');
    }
    
    return 'Operation succeeded!';
  }
  
  try {
    console.log('Trying risky operation...');
    const result = await riskyOperation(false);
    console.log('Success:', result);
    
    console.log('Trying failing operation...');
    const result2 = await riskyOperation(true);
    console.log('This won\\'t be logged');
    
  } catch (error) {
    console.log('Caught error:', error.message);
  } finally {
    console.log('Cleanup operations here');
  }
}

// Multiple async operations - sequential vs parallel
async function sequentialVsParallel() {
  function simulateAsyncTask(name, duration) {
    return new Promise(resolve => {
      console.log('Starting', name);
      setTimeout(() => {
        console.log('Completed', name);
        resolve(name + ' result');
      }, duration);
    });
  }
  
  console.log('=== Sequential Execution ===');
  const start1 = Date.now();
  
  const result1 = await simulateAsyncTask('Task 1', 1000);
  const result2 = await simulateAsyncTask('Task 2', 1500);
  const result3 = await simulateAsyncTask('Task 3', 800);
  
  console.log('Sequential results:', [result1, result2, result3]);
  console.log('Sequential time:', Date.now() - start1, 'ms');
  
  console.log('\\n=== Parallel Execution ===');
  const start2 = Date.now();
  
  const [resultA, resultB, resultC] = await Promise.all([
    simulateAsyncTask('Task A', 1000),
    simulateAsyncTask('Task B', 1500),
    simulateAsyncTask('Task C', 800)
  ]);
  
  console.log('Parallel results:', [resultA, resultB, resultC]);
  console.log('Parallel time:', Date.now() - start2, 'ms');
}

// Async generators and iteration
async function* asyncGenerator() {
  for (let i = 1; i <= 5; i++) {
    await new Promise(resolve => setTimeout(resolve, 500));
    yield 'Item ' + i;
  }
}

async function consumeAsyncGenerator() {
  console.log('Starting async iteration...');
  
  for await (const item of asyncGenerator()) {
    console.log('Received:', item);
  }
  
  console.log('Async iteration completed!');
}

// Real-world example: Data processing pipeline
async function dataProcessingPipeline() {
  async function fetchData(source) {
    console.log('Fetching from', source, '...');
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      source: source,
      data: ['item1', 'item2', 'item3'],
      timestamp: Date.now()
    };
  }
  
  async function processData(rawData) {
    console.log('Processing data from', rawData.source, '...');
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return {
      ...rawData,
      processed: rawData.data.map(item => item.toUpperCase()),
      processedAt: Date.now()
    };
  }
  
  async function saveData(processedData) {
    console.log('Saving processed data from', processedData.source, '...');
    await new Promise(resolve => setTimeout(resolve, 400));
    
    return {
      ...processedData,
      saved: true,
      savedAt: Date.now()
    };
  }
  
  try {
    console.log('Starting data pipeline...');
    
    // Fetch data from multiple sources concurrently
    const [source1Data, source2Data] = await Promise.all([
      fetchData('Database'),
      fetchData('API')
    ]);
    
    // Process each dataset
    const [processed1, processed2] = await Promise.all([
      processData(source1Data),
      processData(source2Data)
    ]);
    
    // Save results
    const [saved1, saved2] = await Promise.all([
      saveData(processed1),
      saveData(processed2)
    ]);
    
    console.log('Pipeline completed successfully!');
    return [saved1, saved2];
    
  } catch (error) {
    console.error('Pipeline failed:', error.message);
    throw error;
  }
}

// Async function with timeout
async function withTimeout(asyncFunction, timeoutMs) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Operation timed out after ' + timeoutMs + 'ms'));
    }, timeoutMs);
  });
  
  return Promise.race([asyncFunction(), timeoutPromise]);
}

// Usage
async function timeoutExample() {
  async function slowOperation() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return 'Slow operation completed';
  }
  
  try {
    const result = await withTimeout(slowOperation, 2000);
    console.log('Result:', result);
  } catch (error) {
    console.log('Operation timed out:', error.message);
  }
}

// Async retry mechanism
async function retryAsync(asyncFunction, maxRetries = 3, delay = 1000) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log('Attempt', attempt, 'of', maxRetries);
      return await asyncFunction();
    } catch (error) {
      lastError = error;
      console.log('Attempt', attempt, 'failed:', error.message);
      
      if (attempt < maxRetries) {
        console.log('Retrying in', delay, 'ms...');
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw new Error('All retries failed. Last error: ' + lastError.message);
}

// Usage
async function retryExample() {
  async function unreliableFunction() {
    if (Math.random() < 0.7) {
      throw new Error('Random failure');
    }
    return 'Success!';
  }
  
  try {
    const result = await retryAsync(unreliableFunction, 5, 500);
    console.log('Final result:', result);
  } catch (error) {
    console.error('All attempts failed:', error.message);
  }
}

// Rate limiting async operations
async function rateLimitedOperations() {
  async function makeRequest(id) {
    console.log('Making request', id);
    await new Promise(resolve => setTimeout(resolve, 200));
    return 'Response ' + id;
  }
  
  async function processWithRateLimit(items, concurrency = 3) {
    const results = [];
    
    for (let i = 0; i < items.length; i += concurrency) {
      const batch = items.slice(i, i + concurrency);
      const batchPromises = batch.map(item => makeRequest(item));
      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults);
      
      console.log('Processed batch', Math.floor(i / concurrency) + 1);
      
      // Rate limiting delay
      if (i + concurrency < items.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    return results;
  }
  
  const items = Array.from({ length: 10 }, (_, i) => i + 1);
  const results = await processWithRateLimit(items, 3);
  console.log('All requests completed:', results.length, 'responses');
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Fetch API and HTTP Requests */}
        <section className="js-topic-section">
          <h2>🌐 Fetch API and HTTP Requests</h2>
          
          <div className="js-fetch-examples">
            <div className="js-fetch-card">
              <h3>Modern HTTP Client</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic fetch usage
async function basicFetch() {
  try {
    const response = await fetch('https://api.example.com/users');
    
    // Check if response is ok
    if (!response.ok) {
      throw new Error('HTTP error! status: ' + response.status);
    }
    
    const data = await response.json();
    console.log('Users:', data);
    return data;
  } catch (error) {
    console.error('Fetch failed:', error.message);
    throw error;
  }
}

// Different HTTP methods
async function httpMethods() {
  const baseUrl = 'https://api.example.com';
  
  // GET request (default)
  async function getUsers() {
    const response = await fetch(baseUrl + '/users');
    return response.json();
  }
  
  // POST request - create user
  async function createUser(userData) {
    const response = await fetch(baseUrl + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAuthToken()
      },
      body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to create user: ' + response.statusText);
    }
    
    return response.json();
  }
  
  // PUT request - update user
  async function updateUser(userId, userData) {
    const response = await fetch(baseUrl + '/users/' + userId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAuthToken()
      },
      body: JSON.stringify(userData)
    });
    
    return response.json();
  }
  
  // PATCH request - partial update
  async function patchUser(userId, partialData) {
    const response = await fetch(baseUrl + '/users/' + userId, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAuthToken()
      },
      body: JSON.stringify(partialData)
    });
    
    return response.json();
  }
  
  // DELETE request
  async function deleteUser(userId) {
    const response = await fetch(baseUrl + '/users/' + userId, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + getAuthToken()
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete user: ' + response.statusText);
    }
    
    return response.ok;
  }
  
  function getAuthToken() {
    return localStorage.getItem('authToken') || 'demo-token';
  }
}

// Advanced fetch with error handling
class APIClient {
  constructor(baseURL, defaultHeaders = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders
    };
  }
  
  async request(endpoint, options = {}) {
    const url = this.baseURL + endpoint;
    const config = {
      headers: { ...this.defaultHeaders, ...options.headers },
      ...options
    };
    
    try {
      console.log('Making request:', config.method || 'GET', url);
      
      const response = await fetch(url, config);
      
      // Handle different response types
      let data;
      const contentType = response.headers.get('Content-Type');
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else if (contentType && contentType.includes('text/')) {
        data = await response.text();
      } else {
        data = await response.blob();
      }
      
      if (!response.ok) {
        throw new APIError(
          'API request failed: ' + response.status + ' ' + response.statusText,
          response.status,
          data
        );
      }
      
      return {
        data,
        status: response.status,
        headers: Object.fromEntries(response.headers.entries())
      };
      
    } catch (error) {
      if (error instanceof APIError) {
        throw error;
      }
      
      // Network or other errors
      throw new APIError('Network error: ' + error.message, 0, null);
    }
  }
  
  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? endpoint + '?' + queryString : endpoint;
    return this.request(url);
  }
  
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
  
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }
  
  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE'
    });
  }
  
  // File upload
  async uploadFile(endpoint, file, additionalData = {}) {
    const formData = new FormData();
    formData.append('file', file);
    
    Object.keys(additionalData).forEach(key => {
      formData.append(key, additionalData[key]);
    });
    
    return this.request(endpoint, {
      method: 'POST',
      headers: {}, // Let browser set Content-Type for FormData
      body: formData
    });
  }
}

// Custom error class
class APIError extends Error {
  constructor(message, status, response) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.response = response;
  }
}

// Usage example
async function apiClientExample() {
  const client = new APIClient('https://api.example.com', {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  
  try {
    // GET with query parameters
    const users = await client.get('/users', { 
      page: 1, 
      limit: 10,
      sort: 'name'
    });
    console.log('Users:', users.data);
    
    // POST new user
    const newUser = await client.post('/users', {
      name: 'John Doe',
      email: 'john@example.com'
    });
    console.log('Created user:', newUser.data);
    
    // File upload
    const fileInput = document.querySelector('#file-input');
    if (fileInput.files[0]) {
      const uploadResult = await client.uploadFile('/upload', fileInput.files[0], {
        category: 'profile-picture'
      });
      console.log('Upload successful:', uploadResult.data);
    }
    
  } catch (error) {
    if (error instanceof APIError) {
      console.error('API Error:', error.message, 'Status:', error.status);
      console.error('Response:', error.response);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

// Request interceptors and retry logic
class AdvancedAPIClient extends APIClient {
  constructor(baseURL, options = {}) {
    super(baseURL, options.headers);
    this.retries = options.retries || 3;
    this.retryDelay = options.retryDelay || 1000;
    this.timeout = options.timeout || 30000;
  }
  
  async request(endpoint, options = {}) {
    let attempt = 0;
    let lastError;
    
    while (attempt < this.retries) {
      try {
        attempt++;
        
        // Add timeout to request
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);
        
        const requestOptions = {
          ...options,
          signal: controller.signal
        };
        
        const result = await super.request(endpoint, requestOptions);
        clearTimeout(timeoutId);
        
        return result;
        
      } catch (error) {
        lastError = error;
        
        // Don't retry on client errors (4xx)
        if (error instanceof APIError && error.status >= 400 && error.status < 500) {
          throw error;
        }
        
        if (attempt < this.retries) {
          console.log('Request failed, retrying in', this.retryDelay, 'ms... Attempt', attempt + 1);
          await new Promise(resolve => setTimeout(resolve, this.retryDelay));
        }
      }
    }
    
    throw lastError;
  }
}

// Concurrent request management
async function concurrentRequests() {
  const client = new APIClient('https://api.example.com');
  
  // Fetch multiple resources concurrently
  async function fetchUserProfile(userId) {
    const [user, posts, settings] = await Promise.all([
      client.get('/users/' + userId),
      client.get('/users/' + userId + '/posts'),
      client.get('/users/' + userId + '/settings')
    ]);
    
    return {
      user: user.data,
      posts: posts.data,
      settings: settings.data
    };
  }
  
  // Batch requests with rate limiting
  async function batchFetchUsers(userIds, batchSize = 5) {
    const results = [];
    
    for (let i = 0; i < userIds.length; i += batchSize) {
      const batch = userIds.slice(i, i + batchSize);
      const batchPromises = batch.map(id => 
        client.get('/users/' + id).catch(error => ({ error, id }))
      );
      
      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults);
      
      // Rate limiting delay
      if (i + batchSize < userIds.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    return results;
  }
  
  // Usage
  try {
    const profile = await fetchUserProfile(123);
    console.log('User profile:', profile);
    
    const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const batchResults = await batchFetchUsers(userIds, 3);
    console.log('Batch results:', batchResults);
    
  } catch (error) {
    console.error('Request failed:', error);
  }
}

// WebSocket for real-time communication
class WebSocketManager {
  constructor(url, options = {}) {
    this.url = url;
    this.options = options;
    this.ws = null;
    this.listeners = {};
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = options.maxReconnectAttempts || 5;
    this.reconnectDelay = options.reconnectDelay || 3000;
  }
  
  connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.url);
      
      this.ws.onopen = () => {
        console.log('WebSocket connected');
        this.reconnectAttempts = 0;
        this.emit('connected');
        resolve();
      };
      
      this.ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          this.emit('message', data);
          
          if (data.type) {
            this.emit(data.type, data);
          }
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error);
        }
      };
      
      this.ws.onclose = () => {
        console.log('WebSocket disconnected');
        this.emit('disconnected');
        this.handleReconnect();
      };
      
      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        this.emit('error', error);
        reject(error);
      };
    });
  }
  
  handleReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log('Reconnecting... Attempt', this.reconnectAttempts);
      
      setTimeout(() => {
        this.connect().catch(error => {
          console.error('Reconnect failed:', error);
        });
      }, this.reconnectDelay);
    } else {
      console.error('Max reconnection attempts reached');
      this.emit('maxReconnectAttempts');
    }
  }
  
  send(data) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    } else {
      console.error('WebSocket not connected');
    }
  }
  
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }
  
  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => callback(data));
    }
  }
  
  disconnect() {
    if (this.ws) {
      this.ws.close();
    }
  }
}

// Usage
async function websocketExample() {
  const ws = new WebSocketManager('ws://localhost:8080/websocket');
  
  ws.on('connected', () => {
    console.log('Connected to server');
    ws.send({ type: 'join', room: 'chat-room-1' });
  });
  
  ws.on('message', (data) => {
    console.log('Received message:', data);
  });
  
  ws.on('chat', (data) => {
    console.log('Chat message from', data.user, ':', data.message);
  });
  
  try {
    await ws.connect();
    
    // Send a chat message
    ws.send({
      type: 'chat',
      message: 'Hello, World!',
      user: 'John'
    });
    
  } catch (error) {
    console.error('Failed to connect:', error);
  }
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>⭐ Async Best Practices</h2>
          
          <div className="js-async-practices">
            <div className="js-practice-group">
              <h3>✅ Design Guidelines</h3>
              <ul>
                <li><strong>Prefer async/await:</strong> Use modern syntax over Promise chains when possible</li>
                <li><strong>Handle errors properly:</strong> Always use try/catch with async functions</li>
                <li><strong>Avoid blocking operations:</strong> Never use synchronous delays in production</li>
                <li><strong>Use Promise.all for concurrency:</strong> Run independent operations in parallel</li>
                <li><strong>Implement proper timeouts:</strong> Prevent hanging operations</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🚀 Performance Tips</h3>
              <ul>
                <li><strong>Batch API requests:</strong> Combine multiple requests when possible</li>
                <li><strong>Implement caching:</strong> Cache expensive async operations</li>
                <li><strong>Use AbortController:</strong> Cancel unnecessary requests</li>
                <li><strong>Rate limit requests:</strong> Avoid overwhelming servers</li>
                <li><strong>Monitor memory usage:</strong> Clean up async resources</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🛡️ Error Handling</h3>
              <ul>
                <li><strong>Implement retry logic:</strong> Handle transient failures gracefully</li>
                <li><strong>Use specific error types:</strong> Differentiate between error categories</li>
                <li><strong>Log errors appropriately:</strong> Provide useful debugging information</li>
                <li><strong>Fallback strategies:</strong> Provide alternatives when operations fail</li>
                <li><strong>User feedback:</strong> Keep users informed of async operation status</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AsynchronousJavaScript;
import React from 'react';
import '../Navbarweb.css';

function EventsAndEventHandling() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🎯 Event Handling in JavaScript</h1>
        <p className="js-topic-subtitle">
          Master JavaScript events, event listeners, and interactive web development
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction to Events */}
        <section className="js-topic-section">
          <h2>🔥 What are Events?</h2>
          <p>
            Events are actions or occurrences that happen in the browser, such as clicking a button,
            hovering over an element, submitting a form, or loading a page. JavaScript allows us to
            respond to these events and create interactive web experiences.
          </p>
          
          <div className="js-event-types">
            <div className="js-event-category">
              <h3>🖱️ Common Event Types</h3>
              <div className="js-event-grid">
                <div className="js-event-card">
                  <h4>Mouse Events</h4>
                  <ul>
                    <li>click, dblclick</li>
                    <li>mousedown, mouseup</li>
                    <li>mouseover, mouseout</li>
                    <li>mousemove, mouseenter, mouseleave</li>
                  </ul>
                </div>
                <div className="js-event-card">
                  <h4>Keyboard Events</h4>
                  <ul>
                    <li>keydown, keyup</li>
                    <li>keypress</li>
                    <li>input</li>
                  </ul>
                </div>
                <div className="js-event-card">
                  <h4>Form Events</h4>
                  <ul>
                    <li>submit, reset</li>
                    <li>change, input</li>
                    <li>focus, blur</li>
                  </ul>
                </div>
                <div className="js-event-card">
                  <h4>Window Events</h4>
                  <ul>
                    <li>load, unload</li>
                    <li>resize, scroll</li>
                    <li>beforeunload</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Listeners */}
        <section className="js-topic-section">
          <h2>👂 Event Listeners</h2>
          
          <div className="js-listener-examples">
            <div className="js-listener-card">
              <h3>addEventListener Method</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic event listener syntax
element.addEventListener(eventType, handler, options);

// Get elements
const button = document.getElementById('myButton');
const input = document.getElementById('textInput');
const form = document.getElementById('myForm');

// Click event handler
function handleButtonClick(event) {
  console.log('Button clicked!');
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
  console.log('Timestamp:', event.timeStamp);
}

// Add click event listener
button.addEventListener('click', handleButtonClick);

// Arrow function event handler
button.addEventListener('click', (event) => {
  console.log('Arrow function handler executed');
  console.log('Clicked element text:', event.target.textContent);
});

// Multiple event listeners on same element
button.addEventListener('mouseenter', () => {
  console.log('Mouse entered button');
  button.style.backgroundColor = 'lightblue';
});

button.addEventListener('mouseleave', () => {
  console.log('Mouse left button');
  button.style.backgroundColor = '';
});

// Keyboard events
input.addEventListener('keydown', (event) => {
  console.log('Key pressed:', event.key);
  console.log('Key code:', event.code);
  
  if (event.key === 'Enter') {
    console.log('Enter key pressed!');
  }
  
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault(); // Prevent browser save dialog
    console.log('Ctrl+S pressed - custom save action');
  }
});

// Input events
input.addEventListener('input', (event) => {
  console.log('Input value changed:', event.target.value);
  console.log('Input length:', event.target.value.length);
});

// Form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting normally
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  console.log('Form submitted with data:', data);
  
  // Custom form processing
  if (!data.email || !data.password) {
    console.log('Please fill all required fields');
    return;
  }
  
  console.log('Processing form submission...');
});

// Window events
window.addEventListener('load', () => {
  console.log('Page fully loaded');
});

window.addEventListener('resize', () => {
  console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
});

window.addEventListener('scroll', () => {
  console.log('Page scrolled to:', window.scrollY);
});`}
                </code></pre>
              </div>
            </div>

            <div className="js-listener-card">
              <h3>Event Handler Options</h3>
              <div className="js-code-example">
                <pre><code>
{`// Event listener options
const button = document.getElementById('optionsButton');

// Once option - handler runs only once
button.addEventListener('click', () => {
  console.log('This will only run once');
}, { once: true });

// Passive option - improves performance for scroll/touch events
document.addEventListener('scroll', () => {
  console.log('Scrolling...');
}, { passive: true });

// Capture option - runs during capture phase
document.addEventListener('click', () => {
  console.log('Document click (capture phase)');
}, { capture: true });

// Combined options
button.addEventListener('click', (event) => {
  console.log('Button clicked with multiple options');
}, {
  once: false,
  passive: false,
  capture: false
});

// Removing event listeners
function myHandler(event) {
  console.log('Handler to be removed');
}

button.addEventListener('click', myHandler);

// Remove the specific handler
button.removeEventListener('click', myHandler);

// AbortController for removing multiple listeners
const controller = new AbortController();

button.addEventListener('click', () => console.log('Click 1'), {
  signal: controller.signal
});

button.addEventListener('click', () => console.log('Click 2'), {
  signal: controller.signal
});

button.addEventListener('mouseenter', () => console.log('Mouse enter'), {
  signal: controller.signal
});

// Remove all listeners at once
controller.abort();

// Event listener with custom context
class ButtonManager {
  constructor(element) {
    this.element = element;
    this.clickCount = 0;
    
    // Bind context to maintain 'this'
    this.element.addEventListener('click', this.handleClick.bind(this));
  }
  
  handleClick(event) {
    this.clickCount++;
    console.log('Button clicked ' + this.clickCount + ' times');
    console.log('Manager context maintained:', this);
  }
  
  reset() {
    this.clickCount = 0;
    console.log('Click count reset');
  }
}

const manager = new ButtonManager(button);

// Event delegation for dynamic content
const container = document.getElementById('container');

container.addEventListener('click', (event) => {
  // Check if clicked element matches our criteria
  if (event.target.matches('.dynamic-button')) {
    console.log('Dynamic button clicked:', event.target.textContent);
  }
  
  if (event.target.matches('.delete-btn')) {
    const item = event.target.closest('.item');
    if (item) {
      item.remove();
      console.log('Item deleted');
    }
  }
});

// Add dynamic content
function addDynamicButton() {
  const newButton = document.createElement('button');
  newButton.className = 'dynamic-button';
  newButton.textContent = 'Dynamic Button ' + Date.now();
  container.appendChild(newButton);
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Event Object */}
        <section className="js-topic-section">
          <h2>📋 The Event Object</h2>
          
          <div className="js-event-object-examples">
            <div className="js-event-object-card">
              <h3>Event Properties and Methods</h3>
              <div className="js-code-example">
                <pre><code>
{`// Comprehensive event object exploration
function exploreEvent(event) {
  console.log('=== Event Object Properties ===');
  
  // Basic properties
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
  console.log('Current target:', event.currentTarget);
  console.log('Timestamp:', event.timeStamp);
  console.log('Bubbles:', event.bubbles);
  console.log('Cancelable:', event.cancelable);
  
  // Phase information
  console.log('Event phase:', event.eventPhase);
  // 1 = CAPTURING_PHASE, 2 = AT_TARGET, 3 = BUBBLING_PHASE
  
  // Mouse event properties
  if (event.type.startsWith('mouse') || event.type === 'click') {
    console.log('Mouse button:', event.button);
    // 0 = left, 1 = middle, 2 = right
    console.log('Buttons pressed:', event.buttons);
    console.log('Client coordinates:', event.clientX, event.clientY);
    console.log('Screen coordinates:', event.screenX, event.screenY);
    console.log('Page coordinates:', event.pageX, event.pageY);
    console.log('Offset coordinates:', event.offsetX, event.offsetY);
    
    // Modifier keys
    console.log('Ctrl key:', event.ctrlKey);
    console.log('Shift key:', event.shiftKey);
    console.log('Alt key:', event.altKey);
    console.log('Meta key:', event.metaKey);
  }
  
  // Keyboard event properties
  if (event.type.startsWith('key')) {
    console.log('Key:', event.key);
    console.log('Code:', event.code);
    console.log('Key code:', event.keyCode); // Deprecated
    console.log('Char code:', event.charCode); // Deprecated
    console.log('Repeat:', event.repeat);
    
    // Modifier keys
    console.log('Ctrl key:', event.ctrlKey);
    console.log('Shift key:', event.shiftKey);
    console.log('Alt key:', event.altKey);
    console.log('Meta key:', event.metaKey);
  }
}

// Attach to various elements
document.getElementById('testButton').addEventListener('click', exploreEvent);
document.getElementById('testInput').addEventListener('keydown', exploreEvent);

// Event methods
function demonstrateEventMethods(event) {
  console.log('=== Event Methods ===');
  
  // Prevent default behavior
  if (event.type === 'submit') {
    event.preventDefault();
    console.log('Form submission prevented');
  }
  
  // Stop event propagation
  if (event.target.classList.contains('stop-propagation')) {
    event.stopPropagation();
    console.log('Event propagation stopped');
  }
  
  // Stop immediate propagation (stops other listeners on same element)
  if (event.target.classList.contains('stop-immediate')) {
    event.stopImmediatePropagation();
    console.log('Immediate propagation stopped');
  }
}

// Custom event properties
function handleCustomEvent(event) {
  console.log('Custom event data:', event.detail);
  console.log('Custom property:', event.customProperty);
}

// Mouse coordinate tracking
function trackMousePosition(event) {
  const coords = {
    client: { x: event.clientX, y: event.clientY },
    page: { x: event.pageX, y: event.pageY },
    screen: { x: event.screenX, y: event.screenY },
    offset: { x: event.offsetX, y: event.offsetY }
  };
  
  console.log('Mouse coordinates:', coords);
  
  // Update position display
  document.getElementById('position-display').textContent = 
    'Client: (' + coords.client.x + ', ' + coords.client.y + ')';
}

document.addEventListener('mousemove', trackMousePosition);

// Keyboard key handling
function handleKeyboardInput(event) {
  const keyInfo = {
    key: event.key,
    code: event.code,
    keyCode: event.keyCode,
    ctrlKey: event.ctrlKey,
    shiftKey: event.shiftKey,
    altKey: event.altKey,
    metaKey: event.metaKey,
    repeat: event.repeat
  };
  
  console.log('Key info:', keyInfo);
  
  // Special key combinations
  if (event.ctrlKey && event.key === 'c') {
    console.log('Copy shortcut detected');
  }
  
  if (event.ctrlKey && event.key === 'v') {
    console.log('Paste shortcut detected');
  }
  
  if (event.key === 'Escape') {
    console.log('Escape key pressed - closing modal');
  }
  
  if (event.key === 'Enter' && event.shiftKey) {
    console.log('Shift+Enter - new line');
  } else if (event.key === 'Enter') {
    console.log('Enter - submit form');
  }
}

document.addEventListener('keydown', handleKeyboardInput);`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Event Bubbling and Capturing */}
        <section className="js-topic-section">
          <h2>🫧 Event Bubbling and Capturing</h2>
          
          <div className="js-bubble-examples">
            <div className="js-bubble-card">
              <h3>Event Propagation Phases</h3>
              <div className="js-code-example">
                <pre><code>
{`// Event propagation demonstration
// HTML structure: 
// <div id="grandparent">
//   <div id="parent">
//     <button id="child">Click Me</button>
//   </div>
// </div>

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Phase 1: Capturing phase (top to bottom)
grandparent.addEventListener('click', (event) => {
  console.log('Grandparent - Capturing phase');
  console.log('Event phase:', event.eventPhase); // 1 = CAPTURING_PHASE
}, { capture: true });

parent.addEventListener('click', (event) => {
  console.log('Parent - Capturing phase');
  console.log('Event phase:', event.eventPhase); // 1 = CAPTURING_PHASE
}, { capture: true });

child.addEventListener('click', (event) => {
  console.log('Child - Target phase');
  console.log('Event phase:', event.eventPhase); // 2 = AT_TARGET
}, { capture: true });

// Phase 3: Bubbling phase (bottom to top) - default behavior
child.addEventListener('click', (event) => {
  console.log('Child - Bubbling phase');
  console.log('Event phase:', event.eventPhase); // 2 = AT_TARGET or 3 = BUBBLING_PHASE
});

parent.addEventListener('click', (event) => {
  console.log('Parent - Bubbling phase');
  console.log('Event phase:', event.eventPhase); // 3 = BUBBLING_PHASE
  console.log('Target:', event.target.id); // Always 'child'
  console.log('Current target:', event.currentTarget.id); // 'parent'
});

grandparent.addEventListener('click', (event) => {
  console.log('Grandparent - Bubbling phase');
  console.log('Event phase:', event.eventPhase); // 3 = BUBBLING_PHASE
  console.log('Target:', event.target.id); // Always 'child'
  console.log('Current target:', event.currentTarget.id); // 'grandparent'
});

// Clicking child button will log:
// 1. Grandparent - Capturing phase
// 2. Parent - Capturing phase  
// 3. Child - Target phase
// 4. Child - Bubbling phase
// 5. Parent - Bubbling phase
// 6. Grandparent - Bubbling phase

// Stopping propagation
function stopBubbling(event) {
  console.log('Stopping propagation at:', event.currentTarget.id);
  event.stopPropagation(); // Prevents further bubbling
}

// Stopping immediate propagation
function stopImmediate(event) {
  console.log('Stopping immediate propagation');
  event.stopImmediatePropagation(); // Stops other listeners on same element
}

// Practical example: Modal dialog
class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.content = this.modal.querySelector('.modal-content');
    this.closeBtn = this.modal.querySelector('.close-btn');
    
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    // Close modal when clicking overlay
    this.modal.addEventListener('click', (event) => {
      if (event.target === this.modal) {
        this.close();
      }
    });
    
    // Prevent modal from closing when clicking content
    this.content.addEventListener('click', (event) => {
      event.stopPropagation();
    });
    
    // Close button
    this.closeBtn.addEventListener('click', () => {
      this.close();
    });
    
    // ESC key to close
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  }
  
  open() {
    this.modal.style.display = 'block';
    console.log('Modal opened');
  }
  
  close() {
    this.modal.style.display = 'none';
    console.log('Modal closed');
  }
  
  isOpen() {
    return this.modal.style.display === 'block';
  }
}

const modal = new Modal('myModal');`}
                </code></pre>
              </div>
            </div>

            <div className="js-bubble-card">
              <h3>Event Delegation</h3>
              <div className="js-code-example">
                <pre><code>
{`// Event delegation - handling events for dynamic content
const todoList = document.getElementById('todoList');
const addTodoBtn = document.getElementById('addTodo');
let todoCounter = 0;

// Single event listener handles all todo items (current and future)
todoList.addEventListener('click', (event) => {
  const target = event.target;
  
  // Handle different button clicks using event delegation
  if (target.classList.contains('complete-btn')) {
    const todoItem = target.closest('.todo-item');
    todoItem.classList.toggle('completed');
    
    const text = todoItem.querySelector('.todo-text');
    if (todoItem.classList.contains('completed')) {
      text.style.textDecoration = 'line-through';
      target.textContent = 'Undo';
    } else {
      text.style.textDecoration = 'none';
      target.textContent = 'Complete';
    }
  }
  
  if (target.classList.contains('delete-btn')) {
    const todoItem = target.closest('.todo-item');
    todoItem.style.animation = 'slideOut 0.3s ease-out';
    
    setTimeout(() => {
      todoItem.remove();
    }, 300);
  }
  
  if (target.classList.contains('edit-btn')) {
    const todoItem = target.closest('.todo-item');
    const textSpan = todoItem.querySelector('.todo-text');
    const currentText = textSpan.textContent;
    
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;
    input.className = 'edit-input';
    
    textSpan.replaceWith(input);
    input.focus();
    target.textContent = 'Save';
    target.classList.add('save-mode');
    
    // Handle saving
    function saveEdit() {
      const newSpan = document.createElement('span');
      newSpan.className = 'todo-text';
      newSpan.textContent = input.value || currentText;
      
      input.replaceWith(newSpan);
      target.textContent = 'Edit';
      target.classList.remove('save-mode');
    }
    
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') saveEdit();
      if (e.key === 'Escape') {
        input.value = currentText;
        saveEdit();
      }
    });
    
    input.addEventListener('blur', saveEdit);
  }
});

// Add new todo items dynamically
function addTodoItem(text) {
  todoCounter++;
  
  const todoItem = document.createElement('div');
  todoItem.className = 'todo-item';
  todoItem.innerHTML = 
    '<span class="todo-text">' + text + '</span>' +
    '<div class="todo-buttons">' +
      '<button class="complete-btn">Complete</button>' +
      '<button class="edit-btn">Edit</button>' +
      '<button class="delete-btn">Delete</button>' +
    '</div>';
  
  todoList.appendChild(todoItem);
  console.log('Added todo:', text);
}

addTodoBtn.addEventListener('click', () => {
  const todoText = prompt('Enter todo item:');
  if (todoText && todoText.trim()) {
    addTodoItem(todoText.trim());
  }
});

// Table row delegation example
const dataTable = document.getElementById('dataTable');

dataTable.addEventListener('click', (event) => {
  const target = event.target;
  const row = target.closest('tr');
  
  if (!row || !row.dataset.id) return; // Not a data row
  
  if (target.classList.contains('edit-row')) {
    console.log('Edit row:', row.dataset.id);
    editRow(row);
  }
  
  if (target.classList.contains('delete-row')) {
    console.log('Delete row:', row.dataset.id);
    if (confirm('Delete this row?')) {
      row.remove();
    }
  }
  
  if (target.classList.contains('view-details')) {
    console.log('View details for row:', row.dataset.id);
    showRowDetails(row);
  }
});

// Form delegation for dynamic forms
const formContainer = document.getElementById('formContainer');

formContainer.addEventListener('input', (event) => {
  const target = event.target;
  
  // Real-time validation
  if (target.type === 'email') {
    validateEmail(target);
  }
  
  if (target.type === 'password') {
    validatePassword(target);
  }
  
  if (target.classList.contains('required')) {
    validateRequired(target);
  }
});

formContainer.addEventListener('change', (event) => {
  const target = event.target;
  
  // Handle select changes
  if (target.tagName === 'SELECT') {
    console.log('Selection changed:', target.name, target.value);
  }
  
  // Handle checkbox/radio changes
  if (target.type === 'checkbox' || target.type === 'radio') {
    console.log('Input changed:', target.name, target.checked);
  }
});

function validateEmail(input) {
  const isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(input.value);
  input.classList.toggle('invalid', !isValid && input.value.length > 0);
  console.log('Email validation:', isValid);
}

function validatePassword(input) {
  const isValid = input.value.length >= 8;
  input.classList.toggle('invalid', !isValid && input.value.length > 0);
  console.log('Password validation:', isValid);
}

function validateRequired(input) {
  const isValid = input.value.trim().length > 0;
  input.classList.toggle('invalid', !isValid);
  console.log('Required validation:', isValid);
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Events */}
        <section className="js-topic-section">
          <h2>🎨 Custom Events</h2>
          
          <div className="js-custom-event-examples">
            <div className="js-custom-event-card">
              <h3>Creating and Dispatching Custom Events</h3>
              <div className="js-code-example">
                <pre><code>
{`// Creating custom events
function createCustomEvents() {
  // Simple custom event
  const simpleEvent = new Event('myCustomEvent');
  
  // Custom event with data
  const dataEvent = new CustomEvent('userAction', {
    detail: {
      action: 'login',
      userId: 12345,
      timestamp: new Date().toISOString(),
      extra: { source: 'mobile', version: '1.0' }
    },
    bubbles: true,
    cancelable: true
  });
  
  // Event with specific configuration
  const configEvent = new CustomEvent('notification', {
    detail: { 
      type: 'success', 
      message: 'Operation completed successfully' 
    },
    bubbles: false,
    cancelable: false
  });
  
  return { simpleEvent, dataEvent, configEvent };
}

// Event dispatcher class
class EventDispatcher {
  constructor(element = document) {
    this.element = element;
  }
  
  // Dispatch simple event
  dispatch(eventName, data = null) {
    const event = new CustomEvent(eventName, {
      detail: data,
      bubbles: true,
      cancelable: true
    });
    
    console.log('Dispatching event:', eventName, data);
    return this.element.dispatchEvent(event);
  }
  
  // Dispatch with full configuration
  dispatchAdvanced(eventName, options = {}) {
    const event = new CustomEvent(eventName, {
      detail: options.data || null,
      bubbles: options.bubbles !== false,
      cancelable: options.cancelable !== false
    });
    
    return this.element.dispatchEvent(event);
  }
  
  // Listen for events
  on(eventName, handler) {
    this.element.addEventListener(eventName, handler);
  }
  
  // Remove event listener
  off(eventName, handler) {
    this.element.removeEventListener(eventName, handler);
  }
}

// Usage example
const dispatcher = new EventDispatcher();

// Listen for custom events
dispatcher.on('userLogin', (event) => {
  console.log('User logged in:', event.detail);
  console.log('User ID:', event.detail.userId);
  console.log('Login time:', event.detail.timestamp);
});

dispatcher.on('dataUpdated', (event) => {
  console.log('Data updated:', event.detail);
  updateUI(event.detail);
});

dispatcher.on('notification', (event) => {
  showNotification(event.detail.type, event.detail.message);
});

// Dispatch events
dispatcher.dispatch('userLogin', {
  userId: 12345,
  username: 'john_doe',
  timestamp: new Date().toISOString(),
  loginMethod: 'password'
});

dispatcher.dispatch('dataUpdated', {
  collection: 'users',
  action: 'create',
  itemId: 'user_123',
  changes: { name: 'New User', email: 'new@example.com' }
});

// Component communication with custom events
class Component {
  constructor(element) {
    this.element = element;
    this.dispatcher = new EventDispatcher(this.element);
  }
  
  // Emit events to parent components
  emit(eventName, data) {
    return this.dispatcher.dispatch(eventName, data);
  }
  
  // Listen for events from child components
  listen(eventName, handler) {
    this.dispatcher.on(eventName, handler);
  }
}

class TodoApp extends Component {
  constructor(element) {
    super(element);
    this.todos = [];
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    // Listen for todo events from child components
    this.listen('todoAdded', (event) => {
      this.addTodo(event.detail);
    });
    
    this.listen('todoCompleted', (event) => {
      this.completeTodo(event.detail.id);
    });
    
    this.listen('todoDeleted', (event) => {
      this.deleteTodo(event.detail.id);
    });
  }
  
  addTodo(todoData) {
    const todo = {
      id: Date.now(),
      ...todoData,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    this.todos.push(todo);
    console.log('Todo added:', todo);
    
    // Emit to notify other components
    this.emit('todosUpdated', {
      action: 'add',
      todo: todo,
      totalCount: this.todos.length
    });
  }
  
  completeTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      console.log('Todo completed:', todo);
      
      this.emit('todosUpdated', {
        action: 'complete',
        todo: todo,
        totalCount: this.todos.length
      });
    }
  }
  
  deleteTodo(id) {
    const index = this.todos.findIndex(t => t.id === id);
    if (index > -1) {
      const deletedTodo = this.todos.splice(index, 1)[0];
      console.log('Todo deleted:', deletedTodo);
      
      this.emit('todosUpdated', {
        action: 'delete',
        todo: deletedTodo,
        totalCount: this.todos.length
      });
    }
  }
}

class TodoItem extends Component {
  constructor(element, todoData) {
    super(element);
    this.todo = todoData;
    this.render();
    this.setupEvents();
  }
  
  setupEvents() {
    const completeBtn = this.element.querySelector('.complete-btn');
    const deleteBtn = this.element.querySelector('.delete-btn');
    
    completeBtn.addEventListener('click', () => {
      this.emit('todoCompleted', { id: this.todo.id });
    });
    
    deleteBtn.addEventListener('click', () => {
      this.emit('todoDeleted', { id: this.todo.id });
    });
  }
  
  render() {
    this.element.innerHTML = 
      '<span class="todo-text">' + this.todo.text + '</span>' +
      '<button class="complete-btn">Complete</button>' +
      '<button class="delete-btn">Delete</button>';
  }
}

// Event-driven application architecture
class AppEventBus {
  constructor() {
    this.events = new Map();
  }
  
  // Subscribe to events
  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push(callback);
    
    // Return unsubscribe function
    return () => {
      const callbacks = this.events.get(eventName);
      if (callbacks) {
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      }
    };
  }
  
  // Publish events
  publish(eventName, data) {
    const callbacks = this.events.get(eventName);
    if (callbacks) {
      callbacks.forEach(callback => {
        try {
          callback(data);
        } catch (error) {
          console.error('Error in event callback:', error);
        }
      });
    }
  }
  
  // One-time subscription
  once(eventName, callback) {
    const unsubscribe = this.subscribe(eventName, (data) => {
      callback(data);
      unsubscribe();
    });
    return unsubscribe;
  }
}

// Global event bus
const eventBus = new AppEventBus();

// Application modules using event bus
class UserModule {
  constructor() {
    this.currentUser = null;
  }
  
  login(userData) {
    this.currentUser = userData;
    eventBus.publish('user:login', userData);
  }
  
  logout() {
    const userData = this.currentUser;
    this.currentUser = null;
    eventBus.publish('user:logout', userData);
  }
}

class NotificationModule {
  constructor() {
    // Subscribe to user events
    eventBus.subscribe('user:login', (user) => {
      this.showNotification('Welcome back, ' + user.name + '!');
    });
    
    eventBus.subscribe('user:logout', (user) => {
      this.showNotification('Goodbye, ' + user.name + '!');
    });
  }
  
  showNotification(message) {
    console.log('Notification:', message);
  }
}

// Initialize modules
const userModule = new UserModule();
const notificationModule = new NotificationModule();

// Simulate user actions
userModule.login({ id: 1, name: 'John Doe', email: 'john@example.com' });
userModule.logout();`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="js-topic-section">
          <h2>🛠️ Practical Event Handling Examples</h2>
          
          <div className="js-practical-examples">
            <div className="js-practical-card">
              <h3>Image Gallery with Events</h3>
              <div className="js-code-example">
                <pre><code>
{`class ImageGallery {
  constructor(container) {
    this.container = container;
    this.images = [];
    this.currentIndex = 0;
    this.isFullscreen = false;
    
    this.createElements();
    this.setupEventListeners();
  }
  
  createElements() {
    this.container.innerHTML = 
      '<div class="gallery-main">' +
        '<img class="main-image" alt="Main gallery image">' +
        '<div class="image-overlay">' +
          '<button class="prev-btn">❮</button>' +
          '<button class="next-btn">❯</button>' +
          '<button class="fullscreen-btn">⛶</button>' +
        '</div>' +
      '</div>' +
      '<div class="thumbnail-container"></div>';
    
    this.mainImage = this.container.querySelector('.main-image');
    this.thumbnailContainer = this.container.querySelector('.thumbnail-container');
    this.prevBtn = this.container.querySelector('.prev-btn');
    this.nextBtn = this.container.querySelector('.next-btn');
    this.fullscreenBtn = this.container.querySelector('.fullscreen-btn');
  }
  
  setupEventListeners() {
    // Navigation buttons
    this.prevBtn.addEventListener('click', () => this.previousImage());
    this.nextBtn.addEventListener('click', () => this.nextImage());
    this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    
    // Keyboard navigation
    document.addEventListener('keydown', (event) => {
      if (!this.isFullscreen) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          this.previousImage();
          break;
        case 'ArrowRight':
          event.preventDefault();
          this.nextImage();
          break;
        case 'Escape':
          event.preventDefault();
          this.exitFullscreen();
          break;
        case ' ':
          event.preventDefault();
          this.toggleSlideshow();
          break;
      }
    });
    
    // Mouse and touch events for swiping
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    
    this.mainImage.addEventListener('mousedown', (event) => {
      startX = event.clientX;
      startY = event.clientY;
      isDragging = true;
      event.preventDefault();
    });
    
    this.mainImage.addEventListener('mousemove', (event) => {
      if (!isDragging) return;
      
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      
      // Simple swipe detection
      if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          this.previousImage();
        } else {
          this.nextImage();
        }
        isDragging = false;
      }
    });
    
    this.mainImage.addEventListener('mouseup', () => {
      isDragging = false;
    });
    
    // Touch events for mobile
    this.mainImage.addEventListener('touchstart', (event) => {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    });
    
    this.mainImage.addEventListener('touchend', (event) => {
      const endX = event.changedTouches[0].clientX;
      const endY = event.changedTouches[0].clientY;
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      
      if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
        event.preventDefault();
        if (deltaX > 0) {
          this.previousImage();
        } else {
          this.nextImage();
        }
      }
    });
    
    // Thumbnail clicks using event delegation
    this.thumbnailContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('thumbnail')) {
        const index = parseInt(event.target.dataset.index);
        this.showImage(index);
      }
    });
    
    // Image loading events
    this.mainImage.addEventListener('load', () => {
      console.log('Image loaded successfully');
      this.mainImage.classList.add('loaded');
    });
    
    this.mainImage.addEventListener('error', () => {
      console.log('Image failed to load');
      this.mainImage.src = '/images/placeholder.jpg';
    });
  }
  
  addImages(imageUrls) {
    this.images = imageUrls.map((url, index) => ({
      url: url,
      index: index,
      thumbnail: url.replace('.jpg', '_thumb.jpg')
    }));
    
    this.renderThumbnails();
    if (this.images.length > 0) {
      this.showImage(0);
    }
  }
  
  renderThumbnails() {
    this.thumbnailContainer.innerHTML = this.images
      .map((img, index) => 
        '<img class="thumbnail" src="' + img.thumbnail + '" ' +
        'data-index="' + index + '" alt="Thumbnail ' + (index + 1) + '">'
      ).join('');
  }
  
  showImage(index) {
    if (index < 0 || index >= this.images.length) return;
    
    this.currentIndex = index;
    this.mainImage.src = this.images[index].url;
    
    // Update thumbnail selection
    const thumbnails = this.thumbnailContainer.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });
    
    // Custom event for image change
    this.container.dispatchEvent(new CustomEvent('imageChanged', {
      detail: { 
        index: index, 
        image: this.images[index],
        total: this.images.length
      }
    }));
  }
  
  nextImage() {
    this.showImage((this.currentIndex + 1) % this.images.length);
  }
  
  previousImage() {
    this.showImage((this.currentIndex - 1 + this.images.length) % this.images.length);
  }
  
  toggleFullscreen() {
    if (this.isFullscreen) {
      this.exitFullscreen();
    } else {
      this.enterFullscreen();
    }
  }
  
  enterFullscreen() {
    this.container.classList.add('fullscreen');
    this.isFullscreen = true;
    document.body.style.overflow = 'hidden';
    
    this.container.dispatchEvent(new CustomEvent('fullscreenEntered'));
  }
  
  exitFullscreen() {
    this.container.classList.remove('fullscreen');
    this.isFullscreen = false;
    document.body.style.overflow = '';
    
    this.container.dispatchEvent(new CustomEvent('fullscreenExited'));
  }
}

// Usage
const galleryContainer = document.getElementById('imageGallery');
const gallery = new ImageGallery(galleryContainer);

// Add event listeners for gallery events
gallery.container.addEventListener('imageChanged', (event) => {
  console.log('Image changed to:', event.detail.index + 1, '/', event.detail.total);
});

gallery.container.addEventListener('fullscreenEntered', () => {
  console.log('Gallery entered fullscreen mode');
});

gallery.container.addEventListener('fullscreenExited', () => {
  console.log('Gallery exited fullscreen mode');
});

// Load images
gallery.addImages([
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg'
]);`}
                </code></pre>
              </div>
            </div>

            <div className="js-practical-card">
              <h3>Real-time Search with Debouncing</h3>
              <div className="js-code-example">
                <pre><code>
{`class SearchComponent {
  constructor(inputElement, resultsElement, options = {}) {
    this.input = inputElement;
    this.results = resultsElement;
    this.options = {
      debounceDelay: options.debounceDelay || 300,
      minLength: options.minLength || 2,
      maxResults: options.maxResults || 10,
      placeholder: options.placeholder || 'No results found'
    };
    
    this.debounceTimer = null;
    this.isLoading = false;
    this.currentQuery = '';
    this.cache = new Map();
    
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    // Input events with debouncing
    this.input.addEventListener('input', (event) => {
      const query = event.target.value.trim();
      
      // Clear previous timer
      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
      }
      
      // Set new timer
      this.debounceTimer = setTimeout(() => {
        this.handleSearch(query);
      }, this.options.debounceDelay);
    });
    
    // Handle keyboard navigation
    this.input.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          this.navigateResults('down');
          break;
        case 'ArrowUp':
          event.preventDefault();
          this.navigateResults('up');
          break;
        case 'Enter':
          event.preventDefault();
          this.selectCurrentResult();
          break;
        case 'Escape':
          event.preventDefault();
          this.clearResults();
          this.input.blur();
          break;
      }
    });
    
    // Focus and blur events
    this.input.addEventListener('focus', () => {
      if (this.currentQuery && this.results.children.length > 0) {
        this.showResults();
      }
    });
    
    this.input.addEventListener('blur', (event) => {
      // Delay hiding results to allow clicking
      setTimeout(() => {
        this.hideResults();
      }, 150);
    });
    
    // Result clicks using event delegation
    this.results.addEventListener('click', (event) => {
      const resultItem = event.target.closest('.search-result-item');
      if (resultItem) {
        const value = resultItem.dataset.value;
        const text = resultItem.textContent;
        this.selectResult(value, text);
      }
    });
    
    // Mouse hover for result highlighting
    this.results.addEventListener('mouseover', (event) => {
      const resultItem = event.target.closest('.search-result-item');
      if (resultItem) {
        this.highlightResult(resultItem);
      }
    });
  }
  
  async handleSearch(query) {
    this.currentQuery = query;
    
    // Clear results if query too short
    if (query.length < this.options.minLength) {
      this.clearResults();
      return;
    }
    
    // Check cache first
    if (this.cache.has(query)) {
      this.displayResults(this.cache.get(query));
      return;
    }
    
    // Show loading state
    this.setLoading(true);
    
    try {
      const results = await this.searchFunction(query);
      
      // Cache results
      this.cache.set(query, results);
      
      // Display results if query hasn't changed
      if (query === this.currentQuery) {
        this.displayResults(results);
      }
    } catch (error) {
      console.error('Search error:', error);
      this.displayError('Search failed. Please try again.');
    } finally {
      this.setLoading(false);
    }
  }
  
  // Override this method to provide custom search logic
  async searchFunction(query) {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockResults = [
          { id: 1, title: 'Result 1 for ' + query, description: 'Description 1' },
          { id: 2, title: 'Result 2 for ' + query, description: 'Description 2' },
          { id: 3, title: 'Result 3 for ' + query, description: 'Description 3' }
        ].filter(item => 
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        resolve(mockResults);
      }, 100);
    });
  }
  
  displayResults(results) {
    if (results.length === 0) {
      this.results.innerHTML = 
        '<div class="search-no-results">' + this.options.placeholder + '</div>';
    } else {
      const limitedResults = results.slice(0, this.options.maxResults);
      this.results.innerHTML = limitedResults
        .map((result, index) => 
          '<div class="search-result-item" data-value="' + result.id + '" data-index="' + index + '">' +
            '<div class="result-title">' + this.highlightMatch(result.title, this.currentQuery) + '</div>' +
            '<div class="result-description">' + result.description + '</div>' +
          '</div>'
        ).join('');
    }
    
    this.showResults();
  }
  
  highlightMatch(text, query) {
    if (!query) return text;
    
    // Simple case-insensitive highlighting without regex
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);
    
    if (index === -1) return text;
    
    return text.substring(0, index) + 
           '<mark>' + text.substring(index, index + query.length) + '</mark>' + 
           text.substring(index + query.length);
  }
  
  displayError(message) {
    this.results.innerHTML = 
      '<div class="search-error">' + message + '</div>';
    this.showResults();
  }
  
  setLoading(loading) {
    this.isLoading = loading;
    
    if (loading) {
      this.results.innerHTML = 
        '<div class="search-loading">Searching...</div>';
      this.showResults();
    }
  }
  
  showResults() {
    this.results.style.display = 'block';
    this.results.classList.add('visible');
  }
  
  hideResults() {
    this.results.style.display = 'none';
    this.results.classList.remove('visible');
  }
  
  clearResults() {
    this.results.innerHTML = '';
    this.hideResults();
  }
  
  navigateResults(direction) {
    const items = this.results.querySelectorAll('.search-result-item');
    if (items.length === 0) return;
    
    let currentIndex = -1;
    const highlighted = this.results.querySelector('.highlighted');
    
    if (highlighted) {
      currentIndex = parseInt(highlighted.dataset.index);
      highlighted.classList.remove('highlighted');
    }
    
    if (direction === 'down') {
      currentIndex = Math.min(currentIndex + 1, items.length - 1);
    } else {
      currentIndex = Math.max(currentIndex - 1, 0);
    }
    
    items[currentIndex].classList.add('highlighted');
    items[currentIndex].scrollIntoView({ block: 'nearest' });
  }
  
  highlightResult(item) {
    const highlighted = this.results.querySelector('.highlighted');
    if (highlighted) {
      highlighted.classList.remove('highlighted');
    }
    item.classList.add('highlighted');
  }
  
  selectCurrentResult() {
    const highlighted = this.results.querySelector('.highlighted');
    if (highlighted) {
      const value = highlighted.dataset.value;
      const text = highlighted.textContent;
      this.selectResult(value, text);
    }
  }
  
  selectResult(value, text) {
    this.input.value = text;
    this.clearResults();
    
    // Emit custom event
    this.input.dispatchEvent(new CustomEvent('resultSelected', {
      detail: { value: value, text: text }
    }));
  }
}

// Usage
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

const search = new SearchComponent(searchInput, searchResults, {
  debounceDelay: 250,
  minLength: 3,
  maxResults: 8
});

// Listen for selection events
searchInput.addEventListener('resultSelected', (event) => {
  console.log('Selected:', event.detail);
});

// Custom search function
search.searchFunction = async (query) => {
  const response = await fetch('/api/search?q=' + encodeURIComponent(query));
  return response.json();
};`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>⭐ Event Handling Best Practices</h2>
          
          <div className="js-event-practices">
            <div className="js-practice-card">
              <h3>✅ Performance and Memory</h3>
              <ul>
                <li><strong>Use event delegation</strong> for dynamic content</li>
                <li><strong>Remove event listeners</strong> when elements are destroyed</li>
                <li><strong>Debounce expensive operations</strong> like search or resize</li>
                <li><strong>Use passive listeners</strong> for scroll and touch events</li>
                <li><strong>Avoid anonymous functions</strong> when you need to remove listeners</li>
              </ul>
            </div>

            <div className="js-practice-card">
              <h3>🔧 Code Organization</h3>
              <ul>
                <li><strong>Separate event logic</strong> from business logic</li>
                <li><strong>Use custom events</strong> for component communication</li>
                <li><strong>Name event handlers descriptively</strong> (handleClick, onSubmit)</li>
                <li><strong>Group related event listeners</strong> in setup methods</li>
                <li><strong>Document event contracts</strong> and expected data formats</li>
              </ul>
            </div>

            <div className="js-practice-card">
              <h3>🛡️ Error Handling</h3>
              <ul>
                <li><strong>Wrap event handlers</strong> in try-catch blocks</li>
                <li><strong>Validate event data</strong> before processing</li>
                <li><strong>Prevent default carefully</strong> - only when needed</li>
                <li><strong>Handle edge cases</strong> like rapid clicking or invalid input</li>
                <li><strong>Provide user feedback</strong> for failed operations</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EventsAndEventHandling;
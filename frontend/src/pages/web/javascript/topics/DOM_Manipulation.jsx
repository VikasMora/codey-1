import React from 'react';
import '../Navbarweb.css';

function DOMManipulation() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🌐 DOM Manipulation</h1>
        <p className="js-topic-subtitle">
          Master the Document Object Model: selecting, modifying, creating, and traversing DOM elements
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction to DOM */}
        <section className="js-topic-section">
          <h2>📜 What is the DOM?</h2>
          <p>
            The Document Object Model (DOM) is a programming interface for HTML documents. 
            It represents the page structure as a tree of nodes, allowing JavaScript to 
            dynamically change the content, structure, and style of web pages.
          </p>
          
          <div className="js-dom-structure">
            <div className="js-dom-example">
              <h3>🌳 DOM Tree Structure</h3>
              <div className="js-code-example">
                <pre><code>
{`Document
  └── html
      ├── head
      │   ├── title (text: "My Page")
      │   └── meta
      └── body
          ├── h1 (text: "Welcome")
          ├── div (class: "container")
          │   ├── p (text: "Paragraph")
          │   └── button (text: "Click me")
          └── script`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Selecting Elements */}
        <section className="js-topic-section">
          <h2>🎯 Selecting DOM Elements</h2>
          
          <div className="js-selection-examples">
            <div className="js-selection-card">
              <h3>Basic Selection Methods</h3>
              <div className="js-code-example">
                <pre><code>
{`// By ID (returns single element or null)
const header = document.getElementById('main-header');
const sidebar = document.getElementById('sidebar');

// By class name (returns HTMLCollection - live collection)
const buttons = document.getElementsByClassName('btn');
const cards = document.getElementsByClassName('card');

// By tag name (returns HTMLCollection)
const paragraphs = document.getElementsByTagName('p');
const images = document.getElementsByTagName('img');
const divs = document.getElementsByTagName('div');

// By attribute name (returns NodeList)
const requiredFields = document.getElementsByName('required');

// Modern query selectors (returns single element or null)
const firstButton = document.querySelector('.btn');
const navMenu = document.querySelector('#navigation ul');
const activeItem = document.querySelector('.item.active');

// Query selector all (returns NodeList - static collection)
const allButtons = document.querySelectorAll('.btn');
const listItems = document.querySelectorAll('li');
const inputs = document.querySelectorAll('input[type="text"]');

// Advanced selectors
const evenRows = document.querySelectorAll('tr:nth-child(even)');
const firstChild = document.querySelector('.container > :first-child');
const lastParagraph = document.querySelector('p:last-of-type');
const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

// Pseudo-selectors
const focusedElement = document.querySelector(':focus');
const hoveredElements = document.querySelectorAll(':hover');
const enabledInputs = document.querySelectorAll('input:enabled');

// Attribute selectors
const externalLinks = document.querySelectorAll('a[href^="http"]');
const pdfLinks = document.querySelectorAll('a[href$=".pdf"]');
const dataElements = document.querySelectorAll('[data-id]');
const emailInputs = document.querySelectorAll('input[type="email"]');

// Complex selectors
const nestedItems = document.querySelectorAll('.menu li > a');
const siblingElements = document.querySelectorAll('h2 + p');
const descendantSpans = document.querySelectorAll('.content span');

console.log('Found elements:');
console.log('Buttons:', allButtons.length);
console.log('Paragraphs:', paragraphs.length);
console.log('First button text:', firstButton?.textContent);

// Working with collections
console.log('Button collection type:', buttons.constructor.name);
console.log('Query result type:', allButtons.constructor.name);

// Converting collections to arrays
const buttonArray = Array.from(buttons);
const paragraphArray = [...paragraphs]; // ES6 spread
const imageArray = Array.prototype.slice.call(images);

console.log('Button array:', buttonArray);`}
                </code></pre>
              </div>
            </div>

            <div className="js-selection-card">
              <h3>Element Relationships and Traversal</h3>
              <div className="js-code-example">
                <pre><code>
{`// Get reference element
const currentElement = document.getElementById('main-content');

// Parent relationships
console.log('Parent node:', currentElement.parentNode);
console.log('Parent element:', currentElement.parentElement);
console.log('Offset parent:', currentElement.offsetParent);

// Child relationships
console.log('Child nodes (includes text):', currentElement.childNodes);
console.log('Children (elements only):', currentElement.children);
console.log('First child node:', currentElement.firstChild);
console.log('First child element:', currentElement.firstElementChild);
console.log('Last child node:', currentElement.lastChild);
console.log('Last child element:', currentElement.lastElementChild);

// Sibling relationships
console.log('Previous sibling:', currentElement.previousSibling);
console.log('Previous element sibling:', currentElement.previousElementSibling);
console.log('Next sibling:', currentElement.nextSibling);
console.log('Next element sibling:', currentElement.nextElementSibling);

// Tree traversal functions
function walkDOM(node, callback) {
  callback(node);
  
  for (let child of node.childNodes) {
    if (child.nodeType === Node.ELEMENT_NODE) {
      walkDOM(child, callback);
    }
  }
}

// Find all elements with specific criteria
function findElementsByCondition(root, condition) {
  const results = [];
  
  function traverse(node) {
    if (node.nodeType === Node.ELEMENT_NODE && condition(node)) {
      results.push(node);
    }
    
    for (let child of node.childNodes) {
      traverse(child);
    }
  }
  
  traverse(root);
  return results;
}

// Usage examples
walkDOM(document.body, (node) => {
  if (node.nodeType === Node.ELEMENT_NODE) {
    console.log('Element:', node.tagName.toLowerCase());
  }
});

// Find all elements with specific data attributes
const elementsWithData = findElementsByCondition(document.body, (element) => {
  return element.hasAttribute('data-id');
});

console.log('Elements with data-id:', elementsWithData);

// Find parent with specific class
function findAncestorByClass(element, className) {
  let current = element.parentElement;
  
  while (current && current !== document.body) {
    if (current.classList.contains(className)) {
      return current;
    }
    current = current.parentElement;
  }
  
  return null;
}

// Find closest element matching selector (modern alternative)
const closestForm = currentElement.closest('form');
const closestContainer = currentElement.closest('.container');

console.log('Closest form:', closestForm);
console.log('Closest container:', closestContainer);

// Check element relationships
function isDescendantOf(child, parent) {
  return parent.contains(child);
}

function isDirectChild(child, parent) {
  return child.parentElement === parent;
}

const button = document.querySelector('#submit-btn');
const form = document.querySelector('#user-form');

console.log('Button in form:', isDescendantOf(button, form));
console.log('Button direct child of form:', isDirectChild(button, form));

// Get all siblings
function getAllSiblings(element) {
  const siblings = [];
  const parent = element.parentElement;
  
  if (parent) {
    for (let child of parent.children) {
      if (child !== element) {
        siblings.push(child);
      }
    }
  }
  
  return siblings;
}

const siblings = getAllSiblings(currentElement);
console.log('All siblings:', siblings);`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Modifying Content */}
        <section className="js-topic-section">
          <h2>✏️ Modifying Element Content</h2>
          
          <div className="js-content-examples">
            <div className="js-content-card">
              <h3>Text and HTML Content</h3>
              <div className="js-code-example">
                <pre><code>
{`// Get elements to modify
const titleElement = document.getElementById('page-title');
const contentDiv = document.getElementById('content');
const messageSpan = document.querySelector('.message');

// Text content manipulation
console.log('Current title:', titleElement.textContent);
titleElement.textContent = 'New Page Title'; // Sets text, escapes HTML

// Inner text (considers styling and visibility)
console.log('Visible text:', titleElement.innerText);
titleElement.innerText = 'Visible Title Text';

// HTML content manipulation
console.log('Current HTML:', contentDiv.innerHTML);
contentDiv.innerHTML = '<p>New <strong>HTML</strong> content</p>';

// Outer HTML (includes the element itself)
console.log('Element HTML:', messageSpan.outerHTML);
messageSpan.outerHTML = '<div class="new-message">Replaced element</div>';

// Safe HTML insertion methods (prevents XSS)
function safeInsertHTML(element, html) {
  // Create template element
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  
  // Clear current content and append new
  element.textContent = '';
  element.appendChild(template.content.cloneNode(true));
}

// Text manipulation utilities
function appendText(element, text) {
  element.textContent += text;
}

function prependText(element, text) {
  element.textContent = text + element.textContent;
}

function replaceText(element, oldText, newText) {
  element.textContent = element.textContent.replace(oldText, newText);
}

// Usage examples
const paragraph = document.createElement('p');
paragraph.textContent = 'Original text';

appendText(paragraph, ' - appended');
console.log('After append:', paragraph.textContent);

prependText(paragraph, 'Prepended - ');
console.log('After prepend:', paragraph.textContent);

replaceText(paragraph, 'Original', 'Modified');
console.log('After replace:', paragraph.textContent);

// Working with form elements
const textInput = document.getElementById('username');
const textarea = document.getElementById('description');
const checkbox = document.getElementById('agree');
const select = document.getElementById('country');

// Input values
console.log('Input value:', textInput.value);
textInput.value = 'new username';

console.log('Textarea value:', textarea.value);
textarea.value = 'Updated description text';

// Checkbox state
console.log('Checkbox checked:', checkbox.checked);
checkbox.checked = true;

// Select element
console.log('Selected value:', select.value);
console.log('Selected index:', select.selectedIndex);
select.value = 'US'; // Set by value
select.selectedIndex = 2; // Set by index

// Working with select options
const newOption = document.createElement('option');
newOption.value = 'CA';
newOption.textContent = 'Canada';
select.appendChild(newOption);

// Content validation and sanitization
function sanitizeText(text) {
  // Remove HTML tags and normalize whitespace
  return text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\\s+/g, ' ')    // Normalize whitespace
    .trim();                 // Remove leading/trailing spaces
}

function validateAndSetContent(element, content, maxLength = 1000) {
  const sanitized = sanitizeText(content);
  
  if (sanitized.length > maxLength) {
    element.textContent = sanitized.substring(0, maxLength) + '...';
    console.warn('Content truncated to', maxLength, 'characters');
  } else {
    element.textContent = sanitized;
  }
  
  return sanitized;
}

// Safe content updates
const userContent = '<script>alert("XSS")</script>Hello World!';
const safeContent = validateAndSetContent(contentDiv, userContent);
console.log('Sanitized content:', safeContent);

// Batch content updates
function updateMultipleElements(updates) {
  updates.forEach(({ element, content, type = 'text' }) => {
    if (type === 'text') {
      element.textContent = content;
    } else if (type === 'html') {
      element.innerHTML = content;
    } else if (type === 'value') {
      element.value = content;
    }
  });
}

// Usage
updateMultipleElements([
  { element: titleElement, content: 'Batch Updated Title' },
  { element: textInput, content: 'batch_user', type: 'value' },
  { element: contentDiv, content: '<p>Batch HTML update</p>', type: 'html' }
]);`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Modifying Attributes and Properties */}
        <section className="js-topic-section">
          <h2>🏷️ Attributes and Properties</h2>
          
          <div className="js-attribute-examples">
            <div className="js-attribute-card">
              <h3>Working with Attributes</h3>
              <div className="js-code-example">
                <pre><code>
{`// Get elements for attribute manipulation
const link = document.querySelector('a');
const image = document.querySelector('img');
const button = document.querySelector('button');
const input = document.querySelector('input');

// Basic attribute methods
console.log('Link href:', link.getAttribute('href'));
link.setAttribute('href', 'https://example.com');
link.setAttribute('target', '_blank');

console.log('Has title:', link.hasAttribute('title'));
link.removeAttribute('title');

// Get all attributes
function getAllAttributes(element) {
  const attrs = {};
  
  for (let attr of element.attributes) {
    attrs[attr.name] = attr.value;
  }
  
  return attrs;
}

console.log('All link attributes:', getAllAttributes(link));

// Data attributes
const dataElement = document.querySelector('[data-id]');

// Set data attributes
dataElement.setAttribute('data-user-id', '12345');
dataElement.setAttribute('data-role', 'admin');
dataElement.setAttribute('data-last-login', new Date().toISOString());

// Get data attributes (two ways)
console.log('Data ID (getAttribute):', dataElement.getAttribute('data-id'));
console.log('Data ID (dataset):', dataElement.dataset.id);

console.log('User ID:', dataElement.dataset.userId); // Camel case conversion
console.log('Role:', dataElement.dataset.role);
console.log('Last login:', dataElement.dataset.lastLogin);

// Set via dataset (automatically converts to kebab-case)
dataElement.dataset.sessionToken = 'abc123';
dataElement.dataset.isActive = 'true';

console.log('Session token attr:', dataElement.getAttribute('data-session-token'));

// Class manipulation
const element = document.querySelector('.example');

// ClassList methods
console.log('Current classes:', element.classList);
console.log('Has class active:', element.classList.contains('active'));

element.classList.add('new-class');
element.classList.add('class1', 'class2', 'class3'); // Multiple classes

element.classList.remove('old-class');
element.classList.remove('class1', 'class2'); // Multiple classes

element.classList.toggle('active'); // Add if not present, remove if present
element.classList.toggle('hidden', false); // Force remove
element.classList.toggle('visible', true); // Force add

// Replace class
element.classList.replace('old-name', 'new-name');

// Class utilities
function hasAnyClass(element, classes) {
  return classes.some(cls => element.classList.contains(cls));
}

function hasAllClasses(element, classes) {
  return classes.every(cls => element.classList.contains(cls));
}

console.log('Has any of [active, visible]:', hasAnyClass(element, ['active', 'visible']));
console.log('Has all of [example, new-class]:', hasAllClasses(element, ['example', 'new-class']));

// Style manipulation
const styledElement = document.querySelector('.styled');

// Direct style properties
styledElement.style.backgroundColor = 'lightblue';
styledElement.style.fontSize = '16px';
styledElement.style.margin = '10px';
styledElement.style.border = '2px solid red';

// CSS custom properties
styledElement.style.setProperty('--main-color', '#3498db');
styledElement.style.setProperty('--font-size', '18px');

// Get computed styles
const computedStyles = window.getComputedStyle(styledElement);
console.log('Computed background:', computedStyles.backgroundColor);
console.log('Computed font size:', computedStyles.fontSize);
console.log('Computed margin:', computedStyles.margin);

// Style utilities
function setStyles(element, styles) {
  Object.assign(element.style, styles);
}

function getStyles(element, properties) {
  const computed = window.getComputedStyle(element);
  const result = {};
  
  properties.forEach(prop => {
    result[prop] = computed[prop];
  });
  
  return result;
}

// Usage
setStyles(styledElement, {
  color: 'white',
  backgroundColor: 'navy',
  padding: '20px',
  borderRadius: '5px'
});

const currentStyles = getStyles(styledElement, ['color', 'backgroundColor', 'padding']);
console.log('Current styles:', currentStyles);

// Form element properties
const formInput = document.querySelector('input[type="text"]');
const checkbox = document.querySelector('input[type="checkbox"]');
const select = document.querySelector('select');

// Common form properties
formInput.disabled = false;
formInput.required = true;
formInput.placeholder = 'Enter your name';
formInput.maxLength = 50;

checkbox.checked = true;
checkbox.indeterminate = false;

select.disabled = false;
select.multiple = false;

// Element state properties
console.log('Input focused:', document.activeElement === formInput);
console.log('Input disabled:', formInput.disabled);
console.log('Checkbox checked:', checkbox.checked);
console.log('Element hidden:', styledElement.hidden);

// Boolean attribute handling
function setBooleanAttribute(element, attr, value) {
  if (value) {
    element.setAttribute(attr, '');
  } else {
    element.removeAttribute(attr);
  }
}

// Set boolean attributes
setBooleanAttribute(formInput, 'required', true);
setBooleanAttribute(formInput, 'readonly', false);
setBooleanAttribute(button, 'disabled', true);

console.log('Input required:', formInput.hasAttribute('required'));
console.log('Button disabled:', button.hasAttribute('disabled'));`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Creating Elements */}
        <section className="js-topic-section">
          <h2>🏗️ Creating and Inserting Elements</h2>
          
          <div className="js-creation-examples">
            <div className="js-creation-card">
              <h3>Element Creation Methods</h3>
              <div className="js-code-example">
                <pre><code>
{`// Basic element creation
const newDiv = document.createElement('div');
const newParagraph = document.createElement('p');
const newButton = document.createElement('button');
const newImage = document.createElement('img');

// Set attributes and content
newDiv.className = 'container';
newDiv.id = 'dynamic-container';

newParagraph.textContent = 'This is a dynamically created paragraph.';
newParagraph.classList.add('text-content');

newButton.textContent = 'Click Me';
newButton.type = 'button';
newButton.addEventListener('click', () => {
  console.log('Dynamic button clicked!');
});

newImage.src = 'https://via.placeholder.com/200x100';
newImage.alt = 'Placeholder image';
newImage.loading = 'lazy';

// Create complex structures
function createCard(title, content, imageUrl) {
  const card = document.createElement('div');
  card.className = 'card';
  
  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  
  const cardTitle = document.createElement('h3');
  cardTitle.textContent = title;
  cardTitle.className = 'card-title';
  
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  
  const cardText = document.createElement('p');
  cardText.textContent = content;
  cardText.className = 'card-text';
  
  if (imageUrl) {
    const cardImage = document.createElement('img');
    cardImage.src = imageUrl;
    cardImage.className = 'card-image';
    cardImage.alt = title;
    cardBody.appendChild(cardImage);
  }
  
  cardHeader.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  
  return card;
}

// Create multiple elements
function createList(items, listType = 'ul') {
  const list = document.createElement(listType);
  
  items.forEach((item, index) => {
    const listItem = document.createElement('li');
    
    if (typeof item === 'string') {
      listItem.textContent = item;
    } else {
      listItem.textContent = item.text || item.content || '';
      if (item.class) listItem.className = item.class;
      if (item.id) listItem.id = item.id;
      if (item.data) {
        Object.keys(item.data).forEach(key => {
          listItem.dataset[key] = item.data[key];
        });
      }
    }
    
    list.appendChild(listItem);
  });
  
  return list;
}

// Usage
const myCard = createCard(
  'Dynamic Card', 
  'This card was created with JavaScript!',
  'https://via.placeholder.com/300x200'
);

const todoItems = [
  'Learn JavaScript',
  'Build a project',
  { text: 'Deploy to production', class: 'priority-high', data: { priority: 'high' } }
];
const todoList = createList(todoItems);

// Text node creation
const textNode = document.createTextNode('This is a text node');
const commentNode = document.createComment('This is a comment');

// Document fragments for efficient DOM updates
const fragment = document.createDocumentFragment();

// Add multiple elements to fragment
for (let i = 1; i <= 5; i++) {
  const item = document.createElement('div');
  item.textContent = 'Item ' + i;
  item.className = 'fragment-item';
  fragment.appendChild(item);
}

// Cloning elements
const originalButton = document.querySelector('#template-button');
const clonedButton = originalButton.cloneNode(true); // Deep clone
const shallowClone = originalButton.cloneNode(false); // Shallow clone

// Update cloned element
clonedButton.id = 'cloned-button';
clonedButton.textContent = 'Cloned Button';

// Template element for reusable structures
const template = document.createElement('template');
template.innerHTML = [
  '<div class="user-card">',
  '  <img class="avatar" src="" alt="Avatar">',
  '  <div class="user-info">',
  '    <h4 class="username"></h4>',
  '    <p class="email"></p>',
  '    <span class="status"></span>',
  '  </div>',
  '</div>'
].join('\\n');

function createUserCard(userData) {
  const clone = template.content.cloneNode(true);
  
  clone.querySelector('.avatar').src = userData.avatar || '/default-avatar.png';
  clone.querySelector('.username').textContent = userData.name;
  clone.querySelector('.email').textContent = userData.email;
  clone.querySelector('.status').textContent = userData.status || 'Active';
  
  return clone;
}

// Batch element creation
function createElements(config) {
  return config.map(item => {
    const element = document.createElement(item.tag);
    
    if (item.content) element.textContent = item.content;
    if (item.html) element.innerHTML = item.html;
    if (item.attributes) {
      Object.keys(item.attributes).forEach(attr => {
        element.setAttribute(attr, item.attributes[attr]);
      });
    }
    if (item.properties) {
      Object.assign(element, item.properties);
    }
    if (item.styles) {
      Object.assign(element.style, item.styles);
    }
    if (item.classes) {
      element.className = Array.isArray(item.classes) 
        ? item.classes.join(' ') 
        : item.classes;
    }
    
    return element;
  });
}

// Usage
const elementsConfig = [
  {
    tag: 'h2',
    content: 'Dynamic Heading',
    classes: ['heading', 'primary'],
    styles: { color: 'blue', fontSize: '24px' }
  },
  {
    tag: 'p',
    content: 'Dynamic paragraph with styling.',
    attributes: { 'data-type': 'content' },
    styles: { marginBottom: '15px' }
  },
  {
    tag: 'button',
    content: 'Dynamic Button',
    properties: { type: 'button', disabled: false },
    classes: 'btn btn-primary'
  }
];

const dynamicElements = createElements(elementsConfig);

console.log('Created card:', myCard);
console.log('Created list:', todoList);
console.log('Dynamic elements:', dynamicElements);`}
                </code></pre>
              </div>
            </div>

            <div className="js-creation-card">
              <h3>Insertion Methods</h3>
              <div className="js-code-example">
                <pre><code>
{`// Get target container
const container = document.getElementById('main-container');
const targetElement = document.querySelector('.insert-target');

// Basic insertion methods
container.appendChild(newDiv); // Add as last child
container.insertBefore(newParagraph, container.firstElementChild); // Insert before first child

// Modern insertion methods
targetElement.prepend(newButton); // Add as first child
targetElement.append(newImage); // Add as last child

targetElement.before(myCard); // Insert before the element
targetElement.after(todoList); // Insert after the element

// Insert adjacent HTML/elements
targetElement.insertAdjacentHTML('beforebegin', '<p>Before the element</p>');
targetElement.insertAdjacentHTML('afterbegin', '<span>At the beginning</span>');
targetElement.insertAdjacentHTML('beforeend', '<span>At the end</span>');
targetElement.insertAdjacentHTML('afterend', '<p>After the element</p>');

// Insert adjacent elements
const beforeElement = document.createElement('div');
beforeElement.textContent = 'Inserted before';

const afterElement = document.createElement('div');
afterElement.textContent = 'Inserted after';

targetElement.insertAdjacentElement('beforebegin', beforeElement);
targetElement.insertAdjacentElement('afterend', afterElement);

// Insert adjacent text
targetElement.insertAdjacentText('afterbegin', 'Text at start ');
targetElement.insertAdjacentText('beforeend', ' Text at end');

// Batch insertion with document fragment
const listContainer = document.getElementById('list-container');
const fragment = document.createDocumentFragment();

const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  li.className = 'fruit-item';
  fragment.appendChild(li);
});

listContainer.appendChild(fragment); // Single DOM update

// Replace elements
const oldElement = document.querySelector('.old-element');
const newElement = document.createElement('div');
newElement.textContent = 'Replacement element';
newElement.className = 'new-element';

oldElement.replaceWith(newElement);

// Replace with multiple elements
const multipleElements = [
  document.createElement('p'),
  document.createElement('span'),
  document.createElement('strong')
];

multipleElements[0].textContent = 'First replacement';
multipleElements[1].textContent = 'Second replacement';
multipleElements[2].textContent = 'Third replacement';

// Replace one element with multiple
const elementToReplace = document.querySelector('.replace-target');
elementToReplace.replaceWith(...multipleElements);

// Conditional insertion
function insertIfNotExists(parent, element, selector) {
  if (!parent.querySelector(selector)) {
    parent.appendChild(element);
    return true;
  }
  return false;
}

// Position-based insertion
function insertAtPosition(parent, element, position) {
  const children = parent.children;
  
  if (position >= children.length) {
    parent.appendChild(element);
  } else {
    parent.insertBefore(element, children[position]);
  }
}

// Smart insertion utilities
class DOMInserter {
  static insertSorted(parent, element, compareFunction) {
    const children = Array.from(parent.children);
    const insertIndex = children.findIndex(child => 
      compareFunction(element, child) < 0
    );
    
    if (insertIndex === -1) {
      parent.appendChild(element);
    } else {
      parent.insertBefore(element, children[insertIndex]);
    }
  }
  
  static insertWithAnimation(parent, element, animationClass = 'fade-in') {
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.3s ease';
    
    parent.appendChild(element);
    
    // Trigger reflow
    element.offsetHeight;
    
    element.style.opacity = '1';
    element.classList.add(animationClass);
  }
  
  static batchInsert(parent, elements, batchSize = 10) {
    const fragment = document.createDocumentFragment();
    let processed = 0;
    
    function processBatch() {
      const endIndex = Math.min(processed + batchSize, elements.length);
      
      for (let i = processed; i < endIndex; i++) {
        fragment.appendChild(elements[i]);
      }
      
      if (fragment.children.length > 0) {
        parent.appendChild(fragment);
      }
      
      processed = endIndex;
      
      if (processed < elements.length) {
        requestAnimationFrame(processBatch);
      }
    }
    
    processBatch();
  }
}

// Usage examples
const sortedList = document.getElementById('sorted-list');
const newItem = document.createElement('li');
newItem.textContent = 'Banana';

// Insert in alphabetical order
DOMInserter.insertSorted(sortedList, newItem, (a, b) => 
  a.textContent.localeCompare(b.textContent)
);

// Animated insertion
const animatedContainer = document.getElementById('animated-container');
const animatedElement = document.createElement('div');
animatedElement.textContent = 'Animated element';
animatedElement.className = 'animated-item';

DOMInserter.insertWithAnimation(animatedContainer, animatedElement);

// Batch insertion of many elements
const manyElements = [];
for (let i = 1; i <= 1000; i++) {
  const item = document.createElement('div');
  item.textContent = 'Item ' + i;
  item.className = 'batch-item';
  manyElements.push(item);
}

const batchContainer = document.getElementById('batch-container');
DOMInserter.batchInsert(batchContainer, manyElements, 50);

console.log('Elements inserted successfully');`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Removing Elements */}
        <section className="js-topic-section">
          <h2>🗑️ Removing and Replacing Elements</h2>
          
          <div className="js-removal-examples">
            <div className="js-removal-card">
              <h3>Element Removal Methods</h3>
              <div className="js-code-example">
                <pre><code>
{`// Get elements for removal
const elementToRemove = document.querySelector('.remove-me');
const parentContainer = document.getElementById('parent-container');

// Modern removal (IE11+)
elementToRemove.remove();

// Traditional removal (older browsers)
if (elementToRemove.parentNode) {
  elementToRemove.parentNode.removeChild(elementToRemove);
}

// Remove all children
function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// Modern approach - clear all children
function clearElement(element) {
  element.innerHTML = ''; // Fast but doesn't remove event listeners
  // OR
  element.textContent = ''; // Safer, removes all content
}

// Safe removal with event cleanup
function safeRemove(element) {
  // Remove event listeners if needed
  element.removeEventListener('click', element.clickHandler);
  
  // Clear references
  element.customData = null;
  
  // Remove from DOM
  element.remove();
}

// Remove multiple elements
function removeElements(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => element.remove());
}

// Conditional removal
function removeIf(selector, condition) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    if (condition(element)) {
      element.remove();
    }
  });
}

// Usage examples
removeElements('.temporary'); // Remove all elements with class 'temporary'

removeIf('.item', element => {
  return element.dataset.expired === 'true';
}); // Remove expired items

// Animated removal
function removeWithAnimation(element, animationClass = 'fade-out', duration = 300) {
  element.classList.add(animationClass);
  
  setTimeout(() => {
    element.remove();
  }, duration);
}

// Slide out removal
function slideOutAndRemove(element) {
  element.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
  element.style.transform = 'translateX(-100%)';
  element.style.opacity = '0';
  
  setTimeout(() => {
    element.remove();
  }, 300);
}

// Batch removal with confirmation
function batchRemoveWithConfirm(selector, confirmMessage) {
  const elements = document.querySelectorAll(selector);
  
  if (elements.length === 0) {
    console.log('No elements found to remove');
    return;
  }
  
  const confirmed = confirm(
    confirmMessage + ' This will remove ' + elements.length + ' elements.'
  );
  
  if (confirmed) {
    elements.forEach((element, index) => {
      setTimeout(() => {
        removeWithAnimation(element);
      }, index * 50); // Staggered removal
    });
  }
}

// Remove and return removed elements (for undo functionality)
function removeAndStore(selector) {
  const elements = document.querySelectorAll(selector);
  const removedElements = [];
  
  elements.forEach(element => {
    const elementData = {
      element: element.cloneNode(true),
      parent: element.parentNode,
      nextSibling: element.nextElementSibling
    };
    removedElements.push(elementData);
    element.remove();
  });
  
  return removedElements;
}

// Restore removed elements
function restoreElements(removedElements) {
  removedElements.forEach(({ element, parent, nextSibling }) => {
    if (nextSibling) {
      parent.insertBefore(element, nextSibling);
    } else {
      parent.appendChild(element);
    }
  });
}

// Memory-efficient removal for large lists
function efficientListRemoval(listContainer, itemsToRemove) {
  // Create document fragment with remaining items
  const fragment = document.createDocumentFragment();
  const allItems = Array.from(listContainer.children);
  
  allItems.forEach(item => {
    if (!itemsToRemove.includes(item)) {
      fragment.appendChild(item);
    }
  });
  
  // Clear container and add remaining items
  listContainer.innerHTML = '';
  listContainer.appendChild(fragment);
}

// Usage examples
const itemsToDelete = removeAndStore('.delete-queue');
console.log('Removed items:', itemsToDelete.length);

// Restore if needed
// restoreElements(itemsToDelete);

// Remove with animation
const fadeElement = document.querySelector('.fade-target');
if (fadeElement) {
  removeWithAnimation(fadeElement, 'fade-out', 500);
}

// Batch removal
batchRemoveWithConfirm(
  '.batch-remove', 
  'Are you sure you want to remove all selected items?'
);

console.log('Removal operations completed');`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Performance and Best Practices */}
        <section className="js-topic-section">
          <h2>⚡ Performance Optimization</h2>
          
          <div className="js-performance-examples">
            <div className="js-performance-card">
              <h3>Efficient DOM Operations</h3>
              <div className="js-code-example">
                <pre><code>
{`// Performance measurement utilities
function measurePerformance(operation, name) {
  const start = performance.now();
  operation();
  const end = performance.now();
  console.log(name + ' took ' + (end - start).toFixed(2) + ' milliseconds');
}

// Avoid repeated DOM queries
// ❌ Inefficient
function inefficientStyling() {
  for (let i = 0; i < 100; i++) {
    document.getElementById('target').style.color = 'red';
    document.getElementById('target').style.fontSize = '16px';
    document.getElementById('target').style.margin = '10px';
  }
}

// ✅ Efficient
function efficientStyling() {
  const target = document.getElementById('target');
  for (let i = 0; i < 100; i++) {
    target.style.color = 'red';
    target.style.fontSize = '16px';
    target.style.margin = '10px';
  }
}

// Batch DOM updates with DocumentFragment
// ❌ Causes multiple reflows
function inefficientListCreation(items) {
  const list = document.getElementById('list');
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li); // Reflow on each append
  });
}

// ✅ Single reflow
function efficientListCreation(items) {
  const list = document.getElementById('list');
  const fragment = document.createDocumentFragment();
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);
  });
  
  list.appendChild(fragment); // Single reflow
}

// CSS class manipulation instead of individual styles
// ❌ Multiple style updates
function inefficientStylingUpdates(elements) {
  elements.forEach(element => {
    element.style.color = 'blue';
    element.style.backgroundColor = 'lightgray';
    element.style.border = '1px solid black';
    element.style.padding = '10px';
  });
}

// ✅ Single class update
function efficientStylingUpdates(elements) {
  elements.forEach(element => {
    element.classList.add('styled-element');
  });
}

// Efficient element measurement
function getElementDimensions(element) {
  // Batch all measurements to avoid multiple reflows
  const rect = element.getBoundingClientRect();
  const computed = window.getComputedStyle(element);
  
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    marginTop: parseFloat(computed.marginTop),
    marginLeft: parseFloat(computed.marginLeft),
    paddingTop: parseFloat(computed.paddingTop),
    paddingLeft: parseFloat(computed.paddingLeft)
  };
}

// Virtual scrolling for large lists
class VirtualList {
  constructor(container, items, itemHeight = 50) {
    this.container = container;
    this.items = items;
    this.itemHeight = itemHeight;
    this.visibleCount = Math.ceil(container.clientHeight / itemHeight) + 2;
    this.startIndex = 0;
    
    this.setupContainer();
    this.setupScrollHandler();
    this.render();
  }
  
  setupContainer() {
    this.container.style.overflow = 'auto';
    this.container.style.position = 'relative';
    
    this.viewport = document.createElement('div');
    this.viewport.style.height = (this.items.length * this.itemHeight) + 'px';
    this.viewport.style.position = 'relative';
    
    this.container.appendChild(this.viewport);
  }
  
  setupScrollHandler() {
    this.container.addEventListener('scroll', () => {
      const newStartIndex = Math.floor(this.container.scrollTop / this.itemHeight);
      if (newStartIndex !== this.startIndex) {
        this.startIndex = newStartIndex;
        this.render();
      }
    });
  }
  
  render() {
    // Clear existing items
    this.viewport.innerHTML = '';
    
    const endIndex = Math.min(
      this.startIndex + this.visibleCount,
      this.items.length
    );
    
    for (let i = this.startIndex; i < endIndex; i++) {
      const item = document.createElement('div');
      item.textContent = this.items[i];
      item.style.position = 'absolute';
      item.style.top = (i * this.itemHeight) + 'px';
      item.style.height = this.itemHeight + 'px';
      item.style.width = '100%';
      item.style.boxSizing = 'border-box';
      
      this.viewport.appendChild(item);
    }
  }
}

// Debounced DOM operations
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced search example
const searchInput = document.getElementById('search');
const searchResults = document.getElementById('results');

const debouncedSearch = debounce((query) => {
  // Expensive DOM operation
  console.log('Searching for:', query);
  // Update results...
}, 300);

searchInput.addEventListener('input', (event) => {
  debouncedSearch(event.target.value);
});

// RequestAnimationFrame for smooth animations
function smoothElementUpdate(element, targetValue, currentValue, property) {
  const difference = targetValue - currentValue;
  const step = difference * 0.1; // Easing factor
  
  currentValue += step;
  element.style[property] = currentValue + 'px';
  
  if (Math.abs(difference) > 0.1) {
    requestAnimationFrame(() => {
      smoothElementUpdate(element, targetValue, currentValue, property);
    });
  }
}

// Intersection Observer for lazy loading
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      imageObserver.unobserve(img);
    }
  });
});

// Observe all lazy images
document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});

// Performance monitoring
class DOMPerformanceMonitor {
  constructor() {
    this.measurements = [];
  }
  
  measure(name, operation) {
    const start = performance.now();
    const result = operation();
    const end = performance.now();
    
    this.measurements.push({
      name: name,
      duration: end - start,
      timestamp: Date.now()
    });
    
    return result;
  }
  
  getStats() {
    const stats = {};
    
    this.measurements.forEach(measurement => {
      if (!stats[measurement.name]) {
        stats[measurement.name] = {
          count: 0,
          totalTime: 0,
          avgTime: 0,
          maxTime: 0,
          minTime: Infinity
        };
      }
      
      const stat = stats[measurement.name];
      stat.count++;
      stat.totalTime += measurement.duration;
      stat.maxTime = Math.max(stat.maxTime, measurement.duration);
      stat.minTime = Math.min(stat.minTime, measurement.duration);
      stat.avgTime = stat.totalTime / stat.count;
    });
    
    return stats;
  }
}

const monitor = new DOMPerformanceMonitor();

// Usage
const testItems = Array.from({ length: 1000 }, (_, i) => 'Item ' + (i + 1));

measurePerformance(() => inefficientListCreation(testItems.slice(0, 10)), 'Inefficient');
measurePerformance(() => efficientListCreation(testItems.slice(0, 10)), 'Efficient');

// Monitor specific operations
monitor.measure('Element Creation', () => {
  const elements = [];
  for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.textContent = 'Element ' + i;
    elements.push(div);
  }
  return elements;
});

console.log('Performance stats:', monitor.getStats());

// Virtual list example
const virtualContainer = document.getElementById('virtual-list');
if (virtualContainer) {
  const largeList = Array.from({ length: 10000 }, (_, i) => 'Large List Item ' + (i + 1));
  new VirtualList(virtualContainer, largeList);
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>⭐ DOM Manipulation Best Practices</h2>
          
          <div className="js-dom-practices">
            <div className="js-practice-group">
              <h3>✅ Performance Guidelines</h3>
              <ul>
                <li><strong>Cache DOM references:</strong> Store frequently accessed elements in variables</li>
                <li><strong>Batch operations:</strong> Use DocumentFragment for multiple insertions</li>
                <li><strong>Minimize reflows:</strong> Group style changes and use CSS classes</li>
                <li><strong>Use event delegation:</strong> Attach listeners to parent elements for dynamic content</li>
                <li><strong>Debounce expensive operations:</strong> Like search, resize, scroll handlers</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🛡️ Security and Safety</h3>
              <ul>
                <li><strong>Sanitize user input:</strong> Never use innerHTML with untrusted content</li>
                <li><strong>Use textContent:</strong> For plain text to prevent XSS attacks</li>
                <li><strong>Validate data:</strong> Check element existence before manipulation</li>
                <li><strong>Clean up references:</strong> Remove event listeners when elements are destroyed</li>
                <li><strong>Handle errors gracefully:</strong> DOM operations can fail</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🧹 Code Organization</h3>
              <ul>
                <li><strong>Separate concerns:</strong> Keep DOM manipulation logic separate from business logic</li>
                <li><strong>Use consistent naming:</strong> Clear variable names for DOM elements</li>
                <li><strong>Create reusable functions:</strong> For common DOM operations</li>
                <li><strong>Document complex operations:</strong> Comment non-obvious DOM manipulations</li>
                <li><strong>Test thoroughly:</strong> DOM operations across different browsers</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DOMManipulation;
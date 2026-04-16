import React from 'react';
import '../Navbarweb.css';

function FormHandlingAndValidation() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>📝 Form Handling and Validation</h1>
        <p className="js-topic-subtitle">
          Master form interactions, data collection, validation, and user experience in web forms
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction to Forms */}
        <section className="js-topic-section">
          <h2>📋 Understanding Web Forms</h2>
          <p>
            Forms are the primary way users interact with web applications, providing input fields,
            buttons, and other controls for data collection. JavaScript enhances forms with dynamic
            validation, user experience improvements, and custom behaviors.
          </p>
          
          <div className="js-form-basics">
            <div className="js-form-types">
              <h3>🎯 Common Form Elements</h3>
              <div className="js-element-grid">
                <div className="js-element-card">
                  <h4>Input Types</h4>
                  <ul>
                    <li>text, password, email</li>
                    <li>number, tel, url</li>
                    <li>date, time, datetime-local</li>
                    <li>checkbox, radio, file</li>
                  </ul>
                </div>
                <div className="js-element-card">
                  <h4>Selection Elements</h4>
                  <ul>
                    <li>select (dropdown)</li>
                    <li>textarea (multiline)</li>
                    <li>option, optgroup</li>
                  </ul>
                </div>
                <div className="js-element-card">
                  <h4>Action Elements</h4>
                  <ul>
                    <li>button (submit, reset)</li>
                    <li>input[type="submit"]</li>
                    <li>input[type="reset"]</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Access and Manipulation */}
        <section className="js-topic-section">
          <h2>🔍 Accessing Form Elements</h2>
          
          <div className="js-form-access-examples">
            <div className="js-form-access-card">
              <h3>Form and Field Selection</h3>
              <div className="js-code-example">
                <pre><code>
{`// Get form elements
const contactForm = document.getElementById('contact-form');
const registrationForm = document.forms['registration']; // By name attribute
const firstForm = document.forms[0]; // By index

// Access form fields - multiple ways
const nameField = document.getElementById('name');
const emailField = contactForm.elements['email']; // By name
const phoneField = contactForm.elements.phone; // Dot notation
const messageField = contactForm.querySelector('textarea[name="message"]');

// Get all form fields
const allFields = contactForm.elements;
console.log('Form has', allFields.length, 'elements');

// Iterate through form fields
for (let field of allFields) {
  console.log('Field:', field.name, 'Type:', field.type, 'Value:', field.value);
}

// Form field collections
const textInputs = contactForm.querySelectorAll('input[type="text"]');
const requiredFields = contactForm.querySelectorAll('[required]');
const checkboxes = contactForm.querySelectorAll('input[type="checkbox"]');
const radioButtons = contactForm.querySelectorAll('input[type="radio"]');

// Working with field properties
console.log('Name field properties:');
console.log('Name:', nameField.name);
console.log('Type:', nameField.type);
console.log('Value:', nameField.value);
console.log('Required:', nameField.required);
console.log('Disabled:', nameField.disabled);
console.log('Readonly:', nameField.readOnly);
console.log('Placeholder:', nameField.placeholder);

// Field state checking
function checkFieldState(field) {
  return {
    name: field.name,
    value: field.value,
    valid: field.checkValidity(),
    touched: field.matches(':focus') || field.value !== field.defaultValue,
    empty: field.value.trim() === '',
    focused: document.activeElement === field
  };
}

// Monitor all form fields
function getFormState(form) {
  const state = {
    isValid: form.checkValidity(),
    fields: {},
    values: {},
    errors: []
  };
  
  for (let field of form.elements) {
    if (field.name) {
      state.fields[field.name] = checkFieldState(field);
      state.values[field.name] = field.value;
      
      if (!field.checkValidity()) {
        state.errors.push({
          field: field.name,
          message: field.validationMessage
        });
      }
    }
  }
  
  return state;
}

// Usage
console.log('Current form state:', getFormState(contactForm));

// Dynamic field discovery
function findFormFields(form, criteria) {
  const fields = [];
  
  for (let element of form.elements) {
    let match = true;
    
    if (criteria.type && element.type !== criteria.type) match = false;
    if (criteria.required !== undefined && element.required !== criteria.required) match = false;
    if (criteria.name && !element.name.includes(criteria.name)) match = false;
    if (criteria.hasValue !== undefined) {
      const hasValue = element.value.trim() !== '';
      if (hasValue !== criteria.hasValue) match = false;
    }
    
    if (match) fields.push(element);
  }
  
  return fields;
}

// Find specific fields
const emptyRequiredFields = findFormFields(contactForm, { 
  required: true, 
  hasValue: false 
});

const passwordFields = findFormFields(contactForm, { 
  type: 'password' 
});

console.log('Empty required fields:', emptyRequiredFields.length);
console.log('Password fields:', passwordFields.length);`}
                </code></pre>
              </div>
            </div>

            <div className="js-form-access-card">
              <h3>Form Data Collection</h3>
              <div className="js-code-example">
                <pre><code>
{`// Modern FormData API
function collectFormData(form) {
  const formData = new FormData(form);
  const data = {};
  
  // Convert FormData to plain object
  for (let [key, value] of formData.entries()) {
    // Handle multiple values (checkboxes, multi-select)
    if (data[key]) {
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
    } else {
      data[key] = value;
    }
  }
  
  return data;
}

// Manual data collection with type conversion
function collectFormDataTyped(form) {
  const data = {};
  
  for (let element of form.elements) {
    if (!element.name) continue;
    
    switch (element.type) {
      case 'text':
      case 'email':
      case 'tel':
      case 'url':
      case 'password':
      case 'textarea':
        data[element.name] = element.value.trim();
        break;
        
      case 'number':
      case 'range':
        data[element.name] = element.value ? Number(element.value) : null;
        break;
        
      case 'checkbox':
        if (data[element.name]) {
          // Multiple checkboxes with same name
          if (Array.isArray(data[element.name])) {
            if (element.checked) data[element.name].push(element.value);
          } else {
            data[element.name] = [data[element.name]];
            if (element.checked) data[element.name].push(element.value);
          }
        } else {
          data[element.name] = element.checked ? element.value || true : false;
        }
        break;
        
      case 'radio':
        if (element.checked) {
          data[element.name] = element.value;
        }
        break;
        
      case 'select-one':
        data[element.name] = element.value;
        break;
        
      case 'select-multiple':
        data[element.name] = Array.from(element.selectedOptions)
          .map(option => option.value);
        break;
        
      case 'date':
      case 'datetime-local':
        data[element.name] = element.value ? new Date(element.value) : null;
        break;
        
      case 'file':
        data[element.name] = element.files.length > 0 
          ? Array.from(element.files) 
          : null;
        break;
    }
  }
  
  return data;
}

// JSON serialization
function serializeForm(form) {
  const data = collectFormDataTyped(form);
  
  // Handle special cases for JSON serialization
  Object.keys(data).forEach(key => {
    const value = data[key];
    
    if (value instanceof Date) {
      data[key] = value.toISOString();
    } else if (value instanceof FileList || Array.isArray(value) && value[0] instanceof File) {
      // Files can't be serialized, store metadata
      data[key] = Array.from(value).map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified
      }));
    }
  });
  
  return JSON.stringify(data, null, 2);
}

// URL encoding (for GET requests or application/x-www-form-urlencoded)
function serializeFormAsURL(form) {
  const formData = new FormData(form);
  const params = new URLSearchParams();
  
  for (let [key, value] of formData.entries()) {
    params.append(key, value);
  }
  
  return params.toString();
}

// Populate form with data
function populateForm(form, data) {
  Object.keys(data).forEach(key => {
    const elements = form.elements[key];
    
    if (!elements) return;
    
    // Handle NodeList (multiple elements with same name)
    const elementList = elements.length !== undefined ? elements : [elements];
    
    for (let element of elementList) {
      const value = data[key];
      
      switch (element.type) {
        case 'text':
        case 'email':
        case 'tel':
        case 'url':
        case 'password':
        case 'number':
        case 'date':
        case 'textarea':
          element.value = value || '';
          break;
          
        case 'checkbox':
          if (Array.isArray(value)) {
            element.checked = value.includes(element.value);
          } else {
            element.checked = Boolean(value);
          }
          break;
          
        case 'radio':
          element.checked = element.value === String(value);
          break;
          
        case 'select-one':
          element.value = value || '';
          break;
          
        case 'select-multiple':
          if (Array.isArray(value)) {
            Array.from(element.options).forEach(option => {
              option.selected = value.includes(option.value);
            });
          }
          break;
      }
    }
  });
  
  // Trigger change events for populated fields
  for (let element of form.elements) {
    if (element.name && data.hasOwnProperty(element.name)) {
      element.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
}

// Usage examples
const form = document.getElementById('user-form');

// Collect data
const formData = collectFormData(form);
const typedData = collectFormDataTyped(form);
const jsonData = serializeForm(form);
const urlData = serializeFormAsURL(form);

console.log('Form Data:', formData);
console.log('Typed Data:', typedData);
console.log('JSON Data:', jsonData);
console.log('URL Data:', urlData);

// Populate form with existing data
const existingUserData = {
  name: 'John Doe',
  email: 'john@example.com',
  age: 30,
  newsletter: true,
  interests: ['technology', 'sports'],
  country: 'US'
};

populateForm(form, existingUserData);`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Form Validation */}
        <section className="js-topic-section">
          <h2>✅ Form Validation</h2>
          
          <div className="js-validation-examples">
            <div className="js-validation-card">
              <h3>Built-in HTML5 Validation</h3>
              <div className="js-code-example">
                <pre><code>
{`// HTML5 validation attributes and JavaScript integration
function setupHTML5Validation(form) {
  // Check individual field validity
  form.addEventListener('input', (event) => {
    const field = event.target;
    
    if (field.checkValidity()) {
      field.classList.remove('invalid');
      field.classList.add('valid');
      hideFieldError(field);
    } else {
      field.classList.remove('valid');
      field.classList.add('invalid');
      showFieldError(field, field.validationMessage);
    }
  });
  
  // Form submission validation
  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      
      // Focus first invalid field
      const firstInvalidField = form.querySelector(':invalid');
      if (firstInvalidField) {
        firstInvalidField.focus();
      }
      
      // Show all field errors
      showAllFieldErrors(form);
    }
  });
}

// Custom validation messages
function setCustomValidationMessages(form) {
  const fields = form.querySelectorAll('[required], [pattern], [type="email"]');
  
  fields.forEach(field => {
    field.addEventListener('invalid', () => {
      if (field.validity.valueMissing) {
        field.setCustomValidity(getRequiredMessage(field));
      } else if (field.validity.patternMismatch) {
        field.setCustomValidity(getPatternMessage(field));
      } else if (field.validity.typeMismatch) {
        field.setCustomValidity(getTypeMessage(field));
      } else if (field.validity.tooShort) {
        field.setCustomValidity(getTooShortMessage(field));
      } else if (field.validity.tooLong) {
        field.setCustomValidity(getTooLongMessage(field));
      } else if (field.validity.rangeUnderflow) {
        field.setCustomValidity(getRangeUnderflowMessage(field));
      } else if (field.validity.rangeOverflow) {
        field.setCustomValidity(getRangeOverflowMessage(field));
      }
    });
    
    // Clear custom message on input
    field.addEventListener('input', () => {
      field.setCustomValidity('');
    });
  });
}

// Custom validation message helpers
function getRequiredMessage(field) {
  const fieldName = getFieldDisplayName(field);
  return fieldName + ' is required.';
}

function getPatternMessage(field) {
  const pattern = field.getAttribute('data-pattern-message');
  if (pattern) return pattern;
  
  const fieldName = getFieldDisplayName(field);
  return fieldName + ' format is invalid.';
}

function getTypeMessage(field) {
  const fieldName = getFieldDisplayName(field);
  
  switch (field.type) {
    case 'email':
      return 'Please enter a valid email address.';
    case 'url':
      return 'Please enter a valid URL.';
    case 'number':
      return 'Please enter a valid number.';
    case 'tel':
      return 'Please enter a valid phone number.';
    default:
      return fieldName + ' is invalid.';
  }
}

function getTooShortMessage(field) {
  const fieldName = getFieldDisplayName(field);
  const minLength = field.minLength;
  return fieldName + ' must be at least ' + minLength + ' characters long.';
}

function getTooLongMessage(field) {
  const fieldName = getFieldDisplayName(field);
  const maxLength = field.maxLength;
  return fieldName + ' must be no more than ' + maxLength + ' characters long.';
}

function getRangeUnderflowMessage(field) {
  const fieldName = getFieldDisplayName(field);
  const min = field.min;
  return fieldName + ' must be at least ' + min + '.';
}

function getRangeOverflowMessage(field) {
  const fieldName = getFieldDisplayName(field);
  const max = field.max;
  return fieldName + ' must be no more than ' + max + '.';
}

function getFieldDisplayName(field) {
  // Try to get display name from various sources
  const label = document.querySelector('label[for="' + field.id + '"]');
  if (label) return label.textContent.replace('*', '').trim();
  
  if (field.getAttribute('data-display-name')) {
    return field.getAttribute('data-display-name');
  }
  
  if (field.placeholder) {
    return field.placeholder;
  }
  
  // Fallback to field name with title case
  return field.name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
}

// Validation state management
function showFieldError(field, message) {
  // Remove existing error
  hideFieldError(field);
  
  // Create error element
  const errorElement = document.createElement('div');
  errorElement.className = 'field-error';
  errorElement.textContent = message;
  errorElement.setAttribute('data-field', field.name);
  
  // Insert error after field or its wrapper
  const wrapper = field.closest('.field-wrapper') || field.parentNode;
  wrapper.appendChild(errorElement);
  
  // Add ARIA attributes for accessibility
  field.setAttribute('aria-invalid', 'true');
  field.setAttribute('aria-describedby', 'error-' + field.name);
  errorElement.id = 'error-' + field.name;
}

function hideFieldError(field) {
  const existingError = document.querySelector('.field-error[data-field="' + field.name + '"]');
  if (existingError) {
    existingError.remove();
  }
  
  field.removeAttribute('aria-invalid');
  field.removeAttribute('aria-describedby');
}

function showAllFieldErrors(form) {
  const invalidFields = form.querySelectorAll(':invalid');
  
  invalidFields.forEach(field => {
    if (!field.checkValidity()) {
      showFieldError(field, field.validationMessage);
    }
  });
}

// Real-time validation setup
function setupRealTimeValidation(form) {
  const fields = form.querySelectorAll('input, textarea, select');
  
  fields.forEach(field => {
    let validationTimeout;
    
    // Validate on input with debouncing
    field.addEventListener('input', () => {
      clearTimeout(validationTimeout);
      validationTimeout = setTimeout(() => {
        validateField(field);
      }, 300);
    });
    
    // Immediate validation on blur
    field.addEventListener('blur', () => {
      clearTimeout(validationTimeout);
      validateField(field);
    });
    
    // Clear errors on focus
    field.addEventListener('focus', () => {
      field.classList.remove('invalid', 'valid');
      hideFieldError(field);
    });
  });
}

function validateField(field) {
  // Built-in validation
  const isValid = field.checkValidity();
  
  // Custom validation
  const customValidation = runCustomValidation(field);
  
  const finalValid = isValid && customValidation.valid;
  
  field.classList.toggle('valid', finalValid);
  field.classList.toggle('invalid', !finalValid);
  
  if (!finalValid) {
    const message = customValidation.message || field.validationMessage;
    showFieldError(field, message);
  } else {
    hideFieldError(field);
  }
  
  return finalValid;
}

// Usage
const userForm = document.getElementById('user-form');
setupHTML5Validation(userForm);
setCustomValidationMessages(userForm);
setupRealTimeValidation(userForm);`}
                </code></pre>
              </div>
            </div>

            <div className="js-validation-card">
              <h3>Custom Validation Rules</h3>
              <div className="js-code-example">
                <pre><code>
{`// Custom validation rule system
class FormValidator {
  constructor(form) {
    this.form = form;
    this.rules = new Map();
    this.customRules = new Map();
    
    this.setupValidation();
  }
  
  // Add validation rule for a field
  addRule(fieldName, ruleName, ruleFunction, message) {
    if (!this.rules.has(fieldName)) {
      this.rules.set(fieldName, []);
    }
    
    this.rules.get(fieldName).push({
      name: ruleName,
      validate: ruleFunction,
      message: message
    });
    
    return this;
  }
  
  // Add custom validation function
  addCustomRule(name, validationFunction) {
    this.customRules.set(name, validationFunction);
    return this;
  }
  
  // Built-in validation rules
  static RULES = {
    required: (value) => value.trim() !== '',
    
    email: (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
      return !value || emailRegex.test(value);
    },
    
    strongPassword: (value) => {
      // At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
      const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;
      return !value || strongRegex.test(value);
    },
    
    phone: (value) => {
      const phoneRegex = /^[\\+]?[1-9]?[0-9]{7,15}$/;
      return !value || phoneRegex.test(value.replace(/[\\s\\-\\(\\)]/g, ''));
    },
    
    url: (value) => {
      try {
        return !value || new URL(value);
      } catch {
        return false;
      }
    },
    
    minLength: (min) => (value) => !value || value.length >= min,
    maxLength: (max) => (value) => !value || value.length <= max,
    min: (min) => (value) => !value || Number(value) >= min,
    max: (max) => (value) => !value || Number(value) <= max,
    
    match: (fieldName) => (value, form) => {
      const matchField = form.elements[fieldName];
      return !value || !matchField || value === matchField.value;
    },
    
    unique: (existingValues) => (value) => {
      return !value || !existingValues.includes(value.toLowerCase());
    },
    
    fileSize: (maxSizeBytes) => (files) => {
      if (!files || files.length === 0) return true;
      return Array.from(files).every(file => file.size <= maxSizeBytes);
    },
    
    fileType: (allowedTypes) => (files) => {
      if (!files || files.length === 0) return true;
      return Array.from(files).every(file => 
        allowedTypes.some(type => 
          file.type.match(new RegExp(type.replace('*', '.*')))
        )
      );
    }
  };
  
  setupValidation() {
    // Real-time validation
    this.form.addEventListener('input', (event) => {
      const field = event.target;
      if (field.name && this.rules.has(field.name)) {
        this.validateField(field.name);
      }
    });
    
    // Form submission validation
    this.form.addEventListener('submit', (event) => {
      if (!this.validateForm()) {
        event.preventDefault();
        event.stopPropagation();
      }
    });
  }
  
  validateField(fieldName) {
    const field = this.form.elements[fieldName];
    if (!field) return true;
    
    const rules = this.rules.get(fieldName) || [];
    let isValid = true;
    let errorMessage = '';
    
    // Get field value
    let value = this.getFieldValue(field);
    
    // Run validation rules
    for (let rule of rules) {
      let ruleValid;
      
      if (typeof rule.validate === 'function') {
        ruleValid = rule.validate(value, this.form);
      } else if (this.customRules.has(rule.validate)) {
        ruleValid = this.customRules.get(rule.validate)(value, field);
      } else {
        console.warn('Unknown validation rule:', rule.validate);
        continue;
      }
      
      if (!ruleValid) {
        isValid = false;
        errorMessage = rule.message;
        break; // Stop at first error
      }
    }
    
    // Update field UI
    this.updateFieldUI(field, isValid, errorMessage);
    
    return isValid;
  }
  
  validateForm() {
    let isValid = true;
    const errors = {};
    
    // Validate all fields with rules
    for (let fieldName of this.rules.keys()) {
      const fieldValid = this.validateField(fieldName);
      if (!fieldValid) {
        isValid = false;
        errors[fieldName] = this.getFieldError(fieldName);
      }
    }
    
    // Emit validation event
    this.form.dispatchEvent(new CustomEvent('formValidated', {
      detail: { valid: isValid, errors: errors }
    }));
    
    return isValid;
  }
  
  getFieldValue(field) {
    switch (field.type) {
      case 'checkbox':
        return field.checked;
      case 'radio':
        const checked = this.form.querySelector('input[name="' + field.name + '"]:checked');
        return checked ? checked.value : null;
      case 'file':
        return field.files;
      case 'select-multiple':
        return Array.from(field.selectedOptions).map(o => o.value);
      default:
        return field.value;
    }
  }
  
  updateFieldUI(field, isValid, errorMessage) {
    field.classList.toggle('valid', isValid);
    field.classList.toggle('invalid', !isValid);
    
    // Remove existing error
    const existingError = field.parentNode.querySelector('.validation-error');
    if (existingError) {
      existingError.remove();
    }
    
    // Add error if invalid
    if (!isValid && errorMessage) {
      const errorElement = document.createElement('div');
      errorElement.className = 'validation-error';
      errorElement.textContent = errorMessage;
      field.parentNode.appendChild(errorElement);
    }
  }
  
  getFieldError(fieldName) {
    const errorElement = this.form.querySelector('.validation-error');
    return errorElement ? errorElement.textContent : null;
  }
  
  // Utility methods
  reset() {
    this.form.reset();
    
    // Clear validation state
    const fields = this.form.querySelectorAll('.valid, .invalid');
    fields.forEach(field => {
      field.classList.remove('valid', 'invalid');
    });
    
    // Remove error messages
    const errors = this.form.querySelectorAll('.validation-error');
    errors.forEach(error => error.remove());
  }
  
  setFieldValue(fieldName, value) {
    const field = this.form.elements[fieldName];
    if (field) {
      field.value = value;
      this.validateField(fieldName);
    }
  }
  
  getFormData() {
    const data = {};
    
    for (let element of this.form.elements) {
      if (element.name) {
        data[element.name] = this.getFieldValue(element);
      }
    }
    
    return data;
  }
}

// Usage example
const form = document.getElementById('registration-form');
const validator = new FormValidator(form);

// Add validation rules
validator
  .addRule('username', 'required', FormValidator.RULES.required, 'Username is required')
  .addRule('username', 'minLength', FormValidator.RULES.minLength(3), 'Username must be at least 3 characters')
  .addRule('username', 'unique', FormValidator.RULES.unique(['admin', 'root', 'user']), 'Username is not available')
  
  .addRule('email', 'required', FormValidator.RULES.required, 'Email is required')
  .addRule('email', 'email', FormValidator.RULES.email, 'Please enter a valid email address')
  
  .addRule('password', 'required', FormValidator.RULES.required, 'Password is required')
  .addRule('password', 'strongPassword', FormValidator.RULES.strongPassword, 'Password must contain uppercase, lowercase, number and special character')
  
  .addRule('confirmPassword', 'required', FormValidator.RULES.required, 'Please confirm your password')
  .addRule('confirmPassword', 'match', FormValidator.RULES.match('password'), 'Passwords do not match')
  
  .addRule('age', 'required', FormValidator.RULES.required, 'Age is required')
  .addRule('age', 'min', FormValidator.RULES.min(18), 'You must be at least 18 years old')
  .addRule('age', 'max', FormValidator.RULES.max(120), 'Please enter a valid age')
  
  .addRule('avatar', 'fileSize', FormValidator.RULES.fileSize(2 * 1024 * 1024), 'File size must be less than 2MB')
  .addRule('avatar', 'fileType', FormValidator.RULES.fileType(['image/*']), 'Only image files are allowed');

// Custom validation rules
validator.addCustomRule('businessEmail', (value, field) => {
  if (!value) return true;
  const businessDomains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
  const domain = value.split('@')[1];
  return !businessDomains.includes(domain);
});

validator.addRule('workEmail', 'businessEmail', 'businessEmail', 'Please use your business email address');

// Listen for validation events
form.addEventListener('formValidated', (event) => {
  const { valid, errors } = event.detail;
  console.log('Form validation result:', valid);
  if (!valid) {
    console.log('Validation errors:', errors);
  }
});`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Form Submission */}
        <section className="js-topic-section">
          <h2>📤 Form Submission Handling</h2>
          
          <div className="js-submission-examples">
            <div className="js-submission-card">
              <h3>AJAX Form Submission</h3>
              <div className="js-code-example">
                <pre><code>
{`// Modern fetch-based form submission
class FormSubmitter {
  constructor(form, options = {}) {
    this.form = form;
    this.options = {
      url: options.url || form.action || '/submit',
      method: options.method || form.method || 'POST',
      showLoading: options.showLoading !== false,
      showSuccess: options.showSuccess !== false,
      showErrors: options.showErrors !== false,
      resetOnSuccess: options.resetOnSuccess !== false,
      redirectOnSuccess: options.redirectOnSuccess || null,
      ...options
    };
    
    this.setupSubmission();
  }
  
  setupSubmission() {
    this.form.addEventListener('submit', async (event) => {
      event.preventDefault();
      await this.submitForm();
    });
  }
  
  async submitForm() {
    try {
      // Show loading state
      if (this.options.showLoading) {
        this.showLoading();
      }
      
      // Prepare form data
      const formData = this.prepareFormData();
      
      // Make request
      const response = await this.makeRequest(formData);
      
      // Handle response
      await this.handleResponse(response);
      
    } catch (error) {
      console.error('Form submission error:', error);
      this.handleError(error);
    } finally {
      this.hideLoading();
    }
  }
  
  prepareFormData() {
    const formData = new FormData(this.form);
    
    // Add additional data if specified
    if (this.options.additionalData) {
      Object.entries(this.options.additionalData).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }
    
    // Convert to JSON if required
    if (this.options.contentType === 'application/json') {
      const object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      return JSON.stringify(object);
    }
    
    return formData;
  }
  
  async makeRequest(data) {
    const headers = {};
    
    if (this.options.contentType === 'application/json') {
      headers['Content-Type'] = 'application/json';
    }
    
    // Add CSRF token if available
    const csrfToken = document.querySelector('meta[name="csrf-token"]');
    if (csrfToken) {
      headers['X-CSRF-Token'] = csrfToken.getAttribute('content');
    }
    
    const requestOptions = {
      method: this.options.method,
      headers: headers,
      body: data
    };
    
    // Add credentials for same-origin requests
    if (this.options.credentials) {
      requestOptions.credentials = this.options.credentials;
    }
    
    return fetch(this.options.url, requestOptions);
  }
  
  async handleResponse(response) {
    const contentType = response.headers.get('content-type');
    let responseData;
    
    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }
    
    if (response.ok) {
      this.handleSuccess(responseData, response);
    } else {
      this.handleServerError(responseData, response);
    }
  }
  
  handleSuccess(data, response) {
    console.log('Form submitted successfully:', data);
    
    // Emit success event
    this.form.dispatchEvent(new CustomEvent('formSuccess', {
      detail: { data, response }
    }));
    
    // Show success message
    if (this.options.showSuccess) {
      this.showSuccess(data.message || 'Form submitted successfully!');
    }
    
    // Reset form if configured
    if (this.options.resetOnSuccess) {
      this.form.reset();
    }
    
    // Redirect if configured
    if (this.options.redirectOnSuccess) {
      setTimeout(() => {
        window.location.href = this.options.redirectOnSuccess;
      }, 2000);
    }
    
    // Call success callback if provided
    if (typeof this.options.onSuccess === 'function') {
      this.options.onSuccess(data, response);
    }
  }
  
  handleServerError(data, response) {
    console.error('Server error:', response.status, data);
    
    // Emit error event
    this.form.dispatchEvent(new CustomEvent('formError', {
      detail: { data, response, type: 'server' }
    }));
    
    // Show field errors if provided
    if (data.errors && typeof data.errors === 'object') {
      this.showFieldErrors(data.errors);
    }
    
    // Show general error message
    if (this.options.showErrors) {
      const message = data.message || 'An error occurred. Please try again.';
      this.showError(message);
    }
    
    // Call error callback if provided
    if (typeof this.options.onError === 'function') {
      this.options.onError(data, response);
    }
  }
  
  handleError(error) {
    console.error('Network or other error:', error);
    
    // Emit error event
    this.form.dispatchEvent(new CustomEvent('formError', {
      detail: { error, type: 'network' }
    }));
    
    if (this.options.showErrors) {
      this.showError('Network error. Please check your connection and try again.');
    }
    
    // Call error callback if provided
    if (typeof this.options.onError === 'function') {
      this.options.onError(error);
    }
  }
  
  showLoading() {
    // Disable form inputs
    const inputs = this.form.querySelectorAll('input, textarea, select, button');
    inputs.forEach(input => {
      input.disabled = true;
    });
    
    // Show loading indicator
    const submitBtn = this.form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.originalText = submitBtn.textContent;
      submitBtn.textContent = 'Submitting...';
      submitBtn.classList.add('loading');
    }
    
    // Add loading class to form
    this.form.classList.add('submitting');
  }
  
  hideLoading() {
    // Re-enable form inputs
    const inputs = this.form.querySelectorAll('input, textarea, select, button');
    inputs.forEach(input => {
      input.disabled = false;
    });
    
    // Hide loading indicator
    const submitBtn = this.form.querySelector('[type="submit"]');
    if (submitBtn && submitBtn.originalText) {
      submitBtn.textContent = submitBtn.originalText;
      submitBtn.classList.remove('loading');
    }
    
    // Remove loading class from form
    this.form.classList.remove('submitting');
  }
  
  showSuccess(message) {
    this.showNotification(message, 'success');
  }
  
  showError(message) {
    this.showNotification(message, 'error');
  }
  
  showNotification(message, type) {
    // Remove existing notifications
    const existing = this.form.querySelector('.form-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'form-notification notification-' + type;
    notification.textContent = message;
    
    // Insert at top of form
    this.form.insertBefore(notification, this.form.firstChild);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 5000);
  }
  
  showFieldErrors(errors) {
    // Clear existing field errors
    const existingErrors = this.form.querySelectorAll('.field-error');
    existingErrors.forEach(error => error.remove());
    
    // Show new field errors
    Object.entries(errors).forEach(([fieldName, fieldErrors]) => {
      const field = this.form.elements[fieldName];
      if (field) {
        const errorMessages = Array.isArray(fieldErrors) ? fieldErrors : [fieldErrors];
        errorMessages.forEach(errorMessage => {
          this.showFieldError(field, errorMessage);
        });
      }
    });
  }
  
  showFieldError(field, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    
    // Insert after field or field wrapper
    const wrapper = field.closest('.field-wrapper') || field.parentNode;
    wrapper.appendChild(errorElement);
    
    // Mark field as invalid
    field.classList.add('invalid');
  }
}

// Usage examples
const contactForm = document.getElementById('contact-form');
const contactSubmitter = new FormSubmitter(contactForm, {
  url: '/api/contact',
  method: 'POST',
  contentType: 'application/json',
  showSuccess: true,
  showErrors: true,
  resetOnSuccess: true,
  
  onSuccess: (data) => {
    console.log('Contact form submitted:', data);
    // Additional success handling
  },
  
  onError: (error) => {
    console.error('Contact form error:', error);
    // Additional error handling
  }
});

// File upload form
const uploadForm = document.getElementById('upload-form');
const uploadSubmitter = new FormSubmitter(uploadForm, {
  url: '/api/upload',
  method: 'POST',
  // FormData will be used automatically for file uploads
  
  additionalData: {
    userId: getCurrentUserId(),
    timestamp: new Date().toISOString()
  }
});

// Listen for form events
contactForm.addEventListener('formSuccess', (event) => {
  const { data } = event.detail;
  console.log('Form success event:', data);
});

contactForm.addEventListener('formError', (event) => {
  const { error, type } = event.detail;
  console.log('Form error event:', type, error);
});

function getCurrentUserId() {
  return document.body.dataset.userId || null;
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Form Features */}
        <section className="js-topic-section">
          <h2>🚀 Advanced Form Features</h2>
          
          <div className="js-advanced-examples">
            <div className="js-advanced-card">
              <h3>Dynamic Form Fields</h3>
              <div className="js-code-example">
                <pre><code>
{`// Dynamic field management
class DynamicForm {
  constructor(container) {
    this.container = container;
    this.fieldTemplates = new Map();
    this.fieldCount = 0;
    
    this.setupEventListeners();
  }
  
  // Register field template
  addTemplate(name, template) {
    this.fieldTemplates.set(name, template);
  }
  
  // Add dynamic field
  addField(templateName, data = {}) {
    const template = this.fieldTemplates.get(templateName);
    if (!template) {
      console.error('Template not found:', templateName);
      return null;
    }
    
    this.fieldCount++;
    const fieldId = templateName + '_' + this.fieldCount;
    
    // Create field from template
    const fieldElement = this.createFieldFromTemplate(template, fieldId, data);
    
    // Add to container
    this.container.appendChild(fieldElement);
    
    // Setup field events
    this.setupFieldEvents(fieldElement);
    
    // Emit field added event
    this.container.dispatchEvent(new CustomEvent('fieldAdded', {
      detail: { fieldId, templateName, element: fieldElement }
    }));
    
    return fieldElement;
  }
  
  createFieldFromTemplate(template, fieldId, data) {
    const wrapper = document.createElement('div');
    wrapper.className = 'dynamic-field';
    wrapper.dataset.fieldId = fieldId;
    
    // Replace template variables
    let html = template.html;
    html = html.replace(/{{id}}/g, fieldId);
    html = html.replace(/{{index}}/g, this.fieldCount);
    
    // Replace data variables
    Object.entries(data).forEach(([key, value]) => {
      const regex = new RegExp('{{' + key + '}}', 'g');
      html = html.replace(regex, value);
    });
    
    wrapper.innerHTML = html;
    
    // Add remove button if not present
    if (!wrapper.querySelector('.remove-field')) {
      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'remove-field';
      removeBtn.textContent = 'Remove';
      wrapper.appendChild(removeBtn);
    }
    
    return wrapper;
  }
  
  setupFieldEvents(fieldElement) {
    // Remove field functionality
    const removeBtn = fieldElement.querySelector('.remove-field');
    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        this.removeField(fieldElement);
      });
    }
    
    // Field change events
    const inputs = fieldElement.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('change', (event) => {
        this.handleFieldChange(fieldElement, event.target);
      });
    });
  }
  
  removeField(fieldElement) {
    const fieldId = fieldElement.dataset.fieldId;
    
    // Animate removal
    fieldElement.style.transition = 'opacity 0.3s ease';
    fieldElement.style.opacity = '0';
    
    setTimeout(() => {
      fieldElement.remove();
      
      // Emit field removed event
      this.container.dispatchEvent(new CustomEvent('fieldRemoved', {
        detail: { fieldId }
      }));
    }, 300);
  }
  
  handleFieldChange(fieldElement, changedInput) {
    // Emit field change event
    this.container.dispatchEvent(new CustomEvent('fieldChanged', {
      detail: { 
        fieldId: fieldElement.dataset.fieldId,
        fieldName: changedInput.name,
        value: changedInput.value,
        element: fieldElement 
      }
    }));
  }
  
  setupEventListeners() {
    // Add field buttons
    this.container.addEventListener('click', (event) => {
      if (event.target.matches('.add-field')) {
        const templateName = event.target.dataset.template;
        if (templateName) {
          this.addField(templateName);
        }
      }
    });
  }
  
  // Get all field data
  getFieldsData() {
    const fields = this.container.querySelectorAll('.dynamic-field');
    const data = [];
    
    fields.forEach(field => {
      const fieldData = {};
      const inputs = field.querySelectorAll('input, select, textarea');
      
      inputs.forEach(input => {
        if (input.name) {
          fieldData[input.name] = input.value;
        }
      });
      
      data.push(fieldData);
    });
    
    return data;
  }
  
  // Clear all fields
  clearFields() {
    const fields = this.container.querySelectorAll('.dynamic-field');
    fields.forEach(field => field.remove());
  }
  
  // Load fields from data
  loadFields(fieldsData, templateName) {
    this.clearFields();
    
    fieldsData.forEach(data => {
      this.addField(templateName, data);
    });
  }
}

// Multi-step form wizard
class FormWizard {
  constructor(form) {
    this.form = form;
    this.steps = Array.from(form.querySelectorAll('.form-step'));
    this.currentStep = 0;
    this.stepData = new Map();
    
    this.setupWizard();
  }
  
  setupWizard() {
    // Hide all steps except first
    this.steps.forEach((step, index) => {
      step.style.display = index === 0 ? 'block' : 'none';
    });
    
    // Setup navigation buttons
    this.setupNavigation();
    
    // Setup step validation
    this.setupStepValidation();
  }
  
  setupNavigation() {
    // Next buttons
    this.form.addEventListener('click', (event) => {
      if (event.target.matches('.next-step')) {
        event.preventDefault();
        this.nextStep();
      }
      
      if (event.target.matches('.prev-step')) {
        event.preventDefault();
        this.prevStep();
      }
    });
  }
  
  setupStepValidation() {
    this.steps.forEach((step, index) => {
      const inputs = step.querySelectorAll('input, select, textarea');
      
      inputs.forEach(input => {
        input.addEventListener('blur', () => {
          this.validateStepField(index, input);
        });
      });
    });
  }
  
  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      if (this.validateCurrentStep()) {
        this.saveStepData();
        this.currentStep++;
        this.showStep(this.currentStep);
      }
    } else {
      // Final submission
      this.submitWizard();
    }
  }
  
  prevStep() {
    if (this.currentStep > 0) {
      this.saveStepData();
      this.currentStep--;
      this.showStep(this.currentStep);
    }
  }
  
  showStep(stepIndex) {
    this.steps.forEach((step, index) => {
      step.style.display = index === stepIndex ? 'block' : 'none';
    });
    
    // Update progress indicator
    this.updateProgress();
    
    // Focus first input in new step
    const firstInput = this.steps[stepIndex].querySelector('input, select, textarea');
    if (firstInput) {
      firstInput.focus();
    }
    
    // Emit step change event
    this.form.dispatchEvent(new CustomEvent('stepChanged', {
      detail: { 
        currentStep: stepIndex, 
        totalSteps: this.steps.length,
        stepElement: this.steps[stepIndex]
      }
    }));
  }
  
  validateCurrentStep() {
    const currentStepElement = this.steps[this.currentStep];
    const inputs = currentStepElement.querySelectorAll('input, select, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!this.validateStepField(this.currentStep, input)) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  validateStepField(stepIndex, field) {
    // Use built-in validation
    const isValid = field.checkValidity();
    
    // Update field UI
    field.classList.toggle('valid', isValid);
    field.classList.toggle('invalid', !isValid);
    
    return isValid;
  }
  
  saveStepData() {
    const stepElement = this.steps[this.currentStep];
    const stepData = new FormData();
    
    const inputs = stepElement.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      if (input.name) {
        stepData.append(input.name, input.value);
      }
    });
    
    this.stepData.set(this.currentStep, stepData);
  }
  
  updateProgress() {
    const progressBar = this.form.querySelector('.progress-bar');
    if (progressBar) {
      const progress = ((this.currentStep + 1) / this.steps.length) * 100;
      progressBar.style.width = progress + '%';
    }
    
    const stepIndicators = this.form.querySelectorAll('.step-indicator');
    stepIndicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentStep);
      indicator.classList.toggle('completed', index < this.currentStep);
    });
  }
  
  submitWizard() {
    // Combine all step data
    const allData = new FormData();
    
    this.stepData.forEach((stepData) => {
      for (let [key, value] of stepData.entries()) {
        allData.append(key, value);
      }
    });
    
    // Add current step data
    this.saveStepData();
    const currentData = this.stepData.get(this.currentStep);
    for (let [key, value] of currentData.entries()) {
      allData.append(key, value);
    }
    
    // Emit submit event with all data
    this.form.dispatchEvent(new CustomEvent('wizardSubmit', {
      detail: { data: allData, allStepData: this.stepData }
    }));
  }
  
  // Navigation methods
  goToStep(stepIndex) {
    if (stepIndex >= 0 && stepIndex < this.steps.length) {
      this.saveStepData();
      this.currentStep = stepIndex;
      this.showStep(this.currentStep);
    }
  }
  
  reset() {
    this.currentStep = 0;
    this.stepData.clear();
    this.showStep(0);
    this.form.reset();
  }
}

// Usage examples
const dynamicContainer = document.getElementById('dynamic-fields');
const dynamicForm = new DynamicForm(dynamicContainer);

// Add field templates
dynamicForm.addTemplate('contact', {
  html: [
    '<div class="field-group">',
    '  <input type="text" name="contact_name_{{index}}" placeholder="Name" required>',
    '  <input type="email" name="contact_email_{{index}}" placeholder="Email" required>',
    '  <input type="tel" name="contact_phone_{{index}}" placeholder="Phone">',
    '</div>'
  ].join('')
});

dynamicForm.addTemplate('address', {
  html: [
    '<div class="field-group">',
    '  <input type="text" name="address_street_{{index}}" placeholder="Street Address" required>',
    '  <input type="text" name="address_city_{{index}}" placeholder="City" required>',
    '  <select name="address_country_{{index}}">',
    '    <option value="">Select Country</option>',
    '    <option value="US">United States</option>',
    '    <option value="CA">Canada</option>',
    '  </select>',
    '</div>'
  ].join('')
});

// Multi-step form
const wizardForm = document.getElementById('wizard-form');
const wizard = new FormWizard(wizardForm);

wizard.form.addEventListener('wizardSubmit', (event) => {
  const { data } = event.detail;
  console.log('Wizard submitted with data:', data);
});

wizard.form.addEventListener('stepChanged', (event) => {
  const { currentStep, totalSteps } = event.detail;
  console.log('Step changed to:', currentStep + 1, 'of', totalSteps);
});`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>⭐ Form Handling Best Practices</h2>
          
          <div className="js-form-practices">
            <div className="js-practice-group">
              <h3>✅ User Experience</h3>
              <ul>
                <li><strong>Real-time validation:</strong> Provide immediate feedback on field errors</li>
                <li><strong>Clear error messages:</strong> Tell users exactly what needs to be fixed</li>
                <li><strong>Progressive enhancement:</strong> Ensure forms work without JavaScript</li>
                <li><strong>Loading states:</strong> Show progress during form submission</li>
                <li><strong>Accessibility:</strong> Use proper labels, ARIA attributes, and keyboard navigation</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🛡️ Security and Validation</h3>
              <ul>
                <li><strong>Server-side validation:</strong> Never trust client-side validation alone</li>
                <li><strong>CSRF protection:</strong> Include tokens to prevent cross-site request forgery</li>
                <li><strong>Input sanitization:</strong> Clean user input before processing</li>
                <li><strong>File upload limits:</strong> Validate file types, sizes, and scan for malware</li>
                <li><strong>Rate limiting:</strong> Prevent spam and abuse through submission limits</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>⚡ Performance</h3>
              <ul>
                <li><strong>Debounce validation:</strong> Avoid excessive validation calls during typing</li>
                <li><strong>Lazy loading:</strong> Load form components only when needed</li>
                <li><strong>Optimize file uploads:</strong> Use chunked uploads for large files</li>
                <li><strong>Form state management:</strong> Save progress to prevent data loss</li>
                <li><strong>Efficient DOM updates:</strong> Batch form field updates</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FormHandlingAndValidation;
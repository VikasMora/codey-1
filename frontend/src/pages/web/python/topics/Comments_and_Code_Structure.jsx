import React from 'react';
import '../Navbarweb.css';

function CommentsAndCodeStructure() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>💬 Comments and Code Structure</h1>
        <p className="py-topic-subtitle">Learn to write clean, well-documented Python code</p>
      </div>
      <div className="py-topic-content">
        {/* Why Comments Matter */}
        <section className="py-topic-section">
          <h2>🎯 Why Comments and Code Structure Matter</h2>
          <p>
            Good code is not just about functionality—it's about readability, maintainability, and 
            collaboration. Comments and proper code structure make your code understandable to others 
            (and to yourself when you return to it months later).
          </p>
          
          <div className="py-highlight-box">
            <h3>Benefits of Good Code Documentation:</h3>
            <ul>
              <li><strong>Clarity:</strong> Explains complex logic and business requirements</li>
              <li><strong>Maintenance:</strong> Makes debugging and updates easier</li>
              <li><strong>Collaboration:</strong> Helps team members understand your code</li>
              <li><strong>Learning:</strong> Serves as documentation for future reference</li>
              <li><strong>Professional Growth:</strong> Demonstrates good programming practices</li>
            </ul>
          </div>
        </section>

        {/* Types of Comments */}
        <section className="py-topic-section">
          <h2>💬 Types of Comments in Python</h2>
          
          <h3>Single-Line Comments</h3>
          <p>Use the hash symbol (#) to create single-line comments. Everything after # is ignored by Python.</p>
          
          <div className="py-code-block">
            <pre>{`# This is a single-line comment
print("Hello, World!")  # This is an inline comment

# You can use multiple single-line comments
# to create multi-line explanations
# like this block of text

# Comments can be used to temporarily disable code
# print("This line won't execute")
print("This line will execute")

# Use comments to explain complex calculations
radius = 5
# Calculate area using the formula: π × r²
area = 3.14159 * radius ** 2
print(f"Area: {{area}}")  # Display the result`}</pre>
          </div>

          <h3>Multi-Line Comments (Docstrings)</h3>
          <p>Python uses triple quotes (""" or ''') for multi-line strings, which can serve as comments or documentation.</p>
          
          <div className="py-code-block">
            <pre>{`"""
This is a multi-line comment (docstring).
It can span multiple lines and is often used
for module, class, and function documentation.
"""

def calculate_factorial(n):
    """
    Calculate the factorial of a given number.
    
    Args:
        n (int): A non-negative integer
        
    Returns:
        int: The factorial of n
        
    Raises:
        ValueError: If n is negative
    """
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    if n == 0 or n == 1:
        return 1
    return n * calculate_factorial(n - 1)

# Alternative multi-line comment style
'''
This is another way to write multi-line comments.
Both triple single quotes and triple double quotes work.
Choose one style and be consistent throughout your project.
'''`}</pre>
          </div>
        </section>

        {/* Comment Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Comment Best Practices</h2>
          
          <h3>When to Write Comments</h3>
          <div className="py-code-block">
            <pre>{`# ✅ GOOD: Explain WHY, not WHAT
# Calculate tax based on progressive tax brackets
if income &lt; 50000:
    tax_rate = 0.15
else:
    tax_rate = 0.25

# ✅ GOOD: Explain complex business logic
# Apply discount only for premium customers with orders over $100
if customer.is_premium and order_total &gt; 100:
    discount = order_total * 0.1

# ✅ GOOD: Explain non-obvious code
# Use bit shifting for fast division by 2
result = number &gt;&gt; 1

# ❌ BAD: Stating the obvious
age = 25  # Set age to 25
x = x + 1  # Increment x by 1

# ❌ BAD: Outdated comments
# Calculate area of circle
area = length * width  # This is actually calculating rectangle area!`}</pre>
          </div>

          <h3>Writing Effective Comments</h3>
          <div className="py-info-box">
            <h3>💡 Guidelines for Good Comments:</h3>
            <ul>
              <li><strong>Be concise:</strong> Keep comments short and to the point</li>
              <li><strong>Be accurate:</strong> Update comments when code changes</li>
              <li><strong>Explain why:</strong> Focus on the reasoning, not the mechanics</li>
              <li><strong>Use proper grammar:</strong> Write in complete sentences</li>
              <li><strong>Be consistent:</strong> Follow a consistent style throughout your project</li>
            </ul>
          </div>

          <div className="py-code-block">
            <pre>{`# ✅ GOOD EXAMPLES

# TODO: Optimize this algorithm for large datasets
def search_users(query):
    # Temporary workaround until API v2 is available
    return legacy_search(query)

# FIXME: Handle edge case where user has no email
def send_notification(user):
    email = user.email  # This might be None
    # ... rest of the function

# NOTE: This function assumes input is already validated
def process_payment(amount, card_number):
    # Implementation here
    pass

# HACK: Quick fix for deadline - refactor later
# This bypasses the normal validation for admin users
if user.role == "admin":
    return True  # Skip all other checks`}</pre>
          </div>
        </section>

        {/* Docstrings and Documentation */}
        <section className="py-topic-section">
          <h2>📚 Docstrings and Documentation</h2>
          <p>
            Docstrings are special comments that document modules, classes, and functions. 
            They're accessible at runtime and used by documentation tools.
          </p>
          
          <h3>Function Docstrings</h3>
          <div className="py-code-block">
            <pre>{`def calculate_bmi(weight, height):
    """
    Calculate Body Mass Index (BMI) from weight and height.
    
    BMI is calculated as weight in kilograms divided by 
    the square of height in meters.
    
    Parameters:
    -----------
    weight : float
        Weight in kilograms
    height : float  
        Height in meters
        
    Returns:
    --------
    float
        BMI value rounded to 2 decimal places
        
    Raises:
    -------
    ValueError
        If weight or height is negative or zero
        
    Examples:
    ---------
    &gt;&gt;&gt; calculate_bmi(70, 1.75)
    22.86
    
    &gt;&gt;&gt; calculate_bmi(0, 1.75)
    ValueError: Weight must be positive
    """
    if weight &lt;= 0:
        raise ValueError("Weight must be positive")
    if height &lt;= 0:
        raise ValueError("Height must be positive")
        
    bmi = weight / (height ** 2)
    return round(bmi, 2)

# Access docstring at runtime
print(calculate_bmi.__doc__)`}</pre>
          </div>

          <h3>Class Docstrings</h3>
          <div className="py-code-block">
            <pre>{`class BankAccount:
    """
    A simple bank account class for managing balance and transactions.
    
    This class provides basic banking operations including deposits,
    withdrawals, and balance inquiries with transaction history.
    
    Attributes:
    -----------
    account_number : str
        Unique identifier for the account
    balance : float
        Current account balance
    transactions : list
        History of all account transactions
        
    Methods:
    --------
    deposit(amount)
        Add money to the account
    withdraw(amount)
        Remove money from the account if sufficient funds
    get_balance()
        Return current account balance
        
    Examples:
    ---------
    &gt;&gt;&gt; account = BankAccount("12345", 1000.0)
    &gt;&gt;&gt; account.deposit(500.0)
    &gt;&gt;&gt; account.get_balance()
    1500.0
    """
    
    def __init__(self, account_number, initial_balance=0.0):
        """
        Initialize a new bank account.
        
        Parameters:
        -----------
        account_number : str
            Unique account identifier
        initial_balance : float, optional
            Starting balance (default is 0.0)
        """
        self.account_number = account_number
        self.balance = initial_balance
        self.transactions = []`}</pre>
          </div>

          <h3>Module Docstrings</h3>
          <div className="py-code-block">
            <pre>{`#!/usr/bin/env python3
"""
Financial Calculator Module

This module provides various financial calculation functions including
compound interest, loan payments, and investment returns.

Author: Your Name
Date: October 2025
Version: 1.0

Dependencies:
- math (standard library)
- datetime (standard library)

Usage:
    import financial_calculator as fc
    
    # Calculate compound interest
    result = fc.compound_interest(1000, 0.05, 10)
    
    # Calculate monthly loan payment
    payment = fc.loan_payment(200000, 0.04, 30)

Functions:
- compound_interest: Calculate compound interest
- loan_payment: Calculate monthly loan payment
- investment_growth: Project investment growth over time
"""

import math
from datetime import datetime

def compound_interest(principal, rate, years):
    """Calculate compound interest."""
    # Function implementation here
    pass`}</pre>
          </div>
        </section>

        {/* Code Structure and Formatting */}
        <section className="py-topic-section">
          <h2>🏗️ Code Structure and Formatting</h2>
          
          <h3>PEP 8 - Python Style Guide</h3>
          <p>
            PEP 8 is the official style guide for Python code. Following these conventions 
            makes your code more readable and professional.
          </p>
          
          <div className="py-code-block">
            <pre>{`# ✅ GOOD: PEP 8 compliant formatting

# Imports at the top, grouped properly
import os
import sys
from collections import defaultdict

# Constants in UPPER_CASE
MAX_USERS = 1000
DEFAULT_TIMEOUT = 30

# Class names in PascalCase  
class UserManager:
    """Manages user accounts and authentication."""
    
    # Method and variable names in snake_case
    def create_user_account(self, username, email):
        """Create a new user account."""
        user_data = {{
            'username': username,
            'email': email,
            'created_at': datetime.now()
        }}
        return self._save_user(user_data)
    
    def _save_user(self, user_data):
        """Private method to save user data."""
        # Implementation here
        pass

# Function names in snake_case
def calculate_monthly_payment(loan_amount, interest_rate, years):
    """Calculate monthly loan payment."""
    # Two blank lines before top-level functions
    monthly_rate = interest_rate / 12
    num_payments = years * 12
    
    # Use meaningful variable names
    payment = (loan_amount * monthly_rate * 
              (1 + monthly_rate) ** num_payments) / (
              (1 + monthly_rate) ** num_payments - 1)
    
    return round(payment, 2)`}</pre>
          </div>

          <h3>Indentation and Spacing</h3>
          <div className="py-code-block">
            <pre>{`# ✅ GOOD: Proper indentation (4 spaces per level)
def process_orders(orders):
    """Process a list of orders."""
    for order in orders:
        if order.is_valid():
            # Process valid orders
            if order.amount &gt; 100:
                # Apply discount for large orders
                order.apply_discount(0.1)
            order.process()
        else:
            # Log invalid orders
            print(f"Invalid order: {{order.id}}")

# ✅ GOOD: Proper spacing around operators
result = (a + b) * (c - d)
items = [1, 2, 3, 4, 5]
user_info = {{'name': 'John', 'age': 30}}

# ✅ GOOD: Line breaks for long lines (max 79 characters)
long_function_name(argument_one, argument_two,
                  argument_three, argument_four)

# Or use parentheses for natural line breaking
result = (first_variable + second_variable +
          third_variable + fourth_variable)

# ✅ GOOD: Blank lines for logical separation
def function_one():
    """First function."""
    pass


def function_two():  # Two blank lines between functions
    """Second function."""  
    pass


class MyClass:  # Two blank lines before classes
    """Example class."""
    
    def method_one(self):  # One blank line between methods
        """First method."""
        pass
    
    def method_two(self):
        """Second method."""
        pass`}</pre>
          </div>
        </section>

        {/* Organizing Code */}
        <section className="py-topic-section">
          <h2>📁 Organizing Your Code</h2>
          
          <h3>File Structure</h3>
          <div className="py-code-block">
            <pre>{`# ✅ GOOD: Recommended file organization

#!/usr/bin/env python3
"""
Module docstring explaining the purpose of this file.
"""

# Standard library imports
import os
import sys
import json
from datetime import datetime

# Third-party imports  
import requests
import pandas as pd

# Local application imports
from . import config
from .models import User, Order
from .utils import validate_email

# Module-level constants
VERSION = "1.0.0"
MAX_RETRY_ATTEMPTS = 3

# Module-level variables (if needed)
_cache = {{}}

# Classes
class OrderProcessor:
    """Process customer orders."""
    pass

# Functions
def main():
    """Main entry point of the program."""
    pass

# Script execution
if __name__ == "__main__":
    main()`}</pre>
          </div>

          <h3>Breaking Down Large Functions</h3>
          <div className="py-code-block">
            <pre>{`# ❌ BAD: Large, monolithic function
def process_user_registration(data):
    """Process user registration - TOO COMPLEX!"""
    # Validate email
    if '@' not in data['email']:
        return False
    # Validate password
    if len(data['password']) &lt; 8:
        return False
    # Check if user exists  
    existing = database.find_user(data['email'])
    if existing:
        return False
    # Hash password
    hashed = hash_password(data['password'])
    # Create user
    user = User(data['username'], data['email'], hashed)
    # Save to database
    database.save_user(user)
    # Send welcome email
    send_email(user.email, "Welcome!")
    # Log registration
    logger.info(f"New user: {{user.email}}")
    return True

# ✅ GOOD: Broken into smaller, focused functions
def validate_registration_data(data):
    """Validate user registration data."""
    if not validate_email(data.get('email', '')):
        raise ValueError("Invalid email format")
    
    if not validate_password(data.get('password', '')):
        raise ValueError("Password too weak")

def check_user_exists(email):
    """Check if user already exists."""
    return database.find_user(email) is not None

def create_new_user(username, email, password):
    """Create a new user account."""
    hashed_password = hash_password(password)
    user = User(username, email, hashed_password)
    database.save_user(user)
    return user

def send_welcome_notification(user):
    """Send welcome email and log registration."""
    send_email(user.email, "Welcome!")
    logger.info(f"New user registered: {{user.email}}")

def process_user_registration(data):
    """Process user registration with proper error handling."""
    try:
        validate_registration_data(data)
        
        if check_user_exists(data['email']):
            raise ValueError("User already exists")
        
        user = create_new_user(
            data['username'], 
            data['email'], 
            data['password']
        )
        
        send_welcome_notification(user)
        return True
        
    except ValueError as e:
        logger.error(f"Registration failed: {{e}}")
        return False`}</pre>
          </div>
        </section>

        {/* Code Documentation Tools */}
        <section className="py-topic-section">
          <h2>🛠️ Documentation Tools and Techniques</h2>
          
          <h3>Type Hints for Better Documentation</h3>
          <div className="py-code-block">
            <pre>{`from typing import List, Dict, Optional, Union

def calculate_grade_average(grades: List[float]) -&gt; float:
    """
    Calculate the average of a list of grades.
    
    Args:
        grades: List of grade values (0.0 to 100.0)
        
    Returns:
        Average grade as a float
    """
    return sum(grades) / len(grades)

def find_user_by_id(user_id: int) -&gt; Optional[Dict[str, Union[str, int]]]:
    """
    Find a user by their ID.
    
    Args:
        user_id: Unique identifier for the user
        
    Returns:
        User dictionary if found, None otherwise
    """
    # Implementation here
    pass

class Calculator:
    """A simple calculator class with type hints."""
    
    def __init__(self, precision: int = 2) -&gt; None:
        """Initialize calculator with specified precision."""
        self.precision = precision
    
    def add(self, a: Union[int, float], b: Union[int, float]) -&gt; float:
        """Add two numbers and return result."""
        return round(a + b, self.precision)`}</pre>
          </div>

          <h3>Inline Documentation Techniques</h3>
          <div className="py-code-block">
            <pre>{`def complex_algorithm(data):
    """
    Implement a complex data processing algorithm.
    
    This function performs multiple steps to clean and transform data.
    """
    # Step 1: Clean the input data
    # Remove null values and normalize strings
    cleaned_data = []
    for item in data:
        if item is not None:
            # Convert to lowercase and strip whitespace
            cleaned_item = str(item).lower().strip()
            cleaned_data.append(cleaned_item)
    
    # Step 2: Apply business logic transformation
    # Group items by first character for faster processing
    grouped_data = {{}}
    for item in cleaned_data:
        first_char = item[0] if item else '_'
        if first_char not in grouped_data:
            grouped_data[first_char] = []
        grouped_data[first_char].append(item)
    
    # Step 3: Generate final results
    # Sort each group and flatten the results
    results = []
    for char in sorted(grouped_data.keys()):
        # Sort items within each group
        sorted_group = sorted(grouped_data[char])
        results.extend(sorted_group)
    
    return results

# Example of documenting tricky code
def mysterious_calculation(x, y):
    """
    Calculate result using the Fibonacci-based formula.
    
    This implements the mathematical formula:
    result = (x * fib(y)) + (y * fib(x))
    where fib() is the Fibonacci function.
    """
    # Cache Fibonacci values to avoid recalculation
    # Using memoization for performance optimization
    fib_cache = {{0: 0, 1: 1}}
    
    def fibonacci(n):
        if n not in fib_cache:
            fib_cache[n] = fibonacci(n-1) + fibonacci(n-2)
        return fib_cache[n]
    
    # Apply the formula: (x * fib(y)) + (y * fib(x))
    result = (x * fibonacci(y)) + (y * fibonacci(x))
    return result`}</pre>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-topic-section">
          <h2>❌ Common Documentation Mistakes</h2>
          
          <div className="py-info-box warning">
            <h3>⚠️ Mistakes to Avoid:</h3>
            <ul>
              <li><strong>Over-commenting:</strong> Explaining obvious code</li>
              <li><strong>Outdated comments:</strong> Comments that don't match the code</li>
              <li><strong>Misleading comments:</strong> Comments that are incorrect</li>
              <li><strong>No comments:</strong> Complex code with zero explanation</li>
              <li><strong>Poor grammar:</strong> Typos and unclear language</li>
            </ul>
          </div>

          <div className="py-code-block">
            <pre>{`# ❌ BAD EXAMPLES

# This function adds two numbers
def add(a, b):  # Obviously adds two numbers!
    return a + b

# Increment counter  
counter = counter + 1  # States the obvious

# This is wrong - function actually multiplies!
def add_numbers(x, y):
    return x * y  # Comment doesn't match code

# No explanation for complex logic
def weird_function(lst):
    return [x for x in lst if x % 2 == 0 and x &gt; 10 and x &lt; 100]

# ✅ BETTER EXAMPLES

def add(a, b):
    """Add two numbers with overflow protection."""
    # Handle potential overflow for very large numbers
    if abs(a) &gt; 10**15 or abs(b) &gt; 10**15:
        return float(a) + float(b)
    return a + b

# Track user sessions for analytics
session_counter += 1

def multiply_numbers(x, y):
    """Multiply two numbers using the standard algorithm."""
    return x * y

def filter_valid_scores(scores):
    """
    Filter scores to include only valid test results.
    
    Valid scores are even numbers between 10 and 100 (exclusive).
    This matches our testing criteria where odd scores indicate
    incomplete tests and scores outside the range are errors.
    """
    return [score for score in scores 
           if score % 2 == 0 and 10 &lt; score &lt; 100]`}</pre>
          </div>
        </section>

        {/* Best Practices Summary */}
        <section className="py-topic-section">
          <h2>⭐ Best Practices Summary</h2>
          
          <div className="py-highlight-box">
            <h3>Code Documentation Checklist:</h3>
            <ul>
              <li>✅ Write docstrings for all modules, classes, and functions</li>
              <li>✅ Follow PEP 8 style guidelines consistently</li>
              <li>✅ Use meaningful variable and function names</li>
              <li>✅ Comment complex business logic and algorithms</li>
              <li>✅ Keep comments up-to-date with code changes</li>
              <li>✅ Use type hints for better code understanding</li>
              <li>✅ Organize code into logical sections with blank lines</li>
              <li>✅ Include examples in docstrings when helpful</li>
              <li>✅ Use TODO, FIXME, NOTE for special comments</li>
              <li>✅ Review and refactor comments during code reviews</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Take a piece of uncommented code and add appropriate comments</li>
              <li>Write comprehensive docstrings for a class with multiple methods</li>
              <li>Refactor a large function into smaller, well-documented functions</li>
              <li>Create a module with proper PEP 8 formatting and documentation</li>
              <li>Review existing code and identify documentation improvements</li>
              <li>Write type hints for a complex function with multiple parameters</li>
              <li>Document an algorithm with step-by-step comments</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CommentsAndCodeStructure;
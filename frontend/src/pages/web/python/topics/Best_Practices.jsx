import React from 'react';
import '../Navbarweb.css';

function BestPractices() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>⭐ Best Practices</h1>
        <p className="py-topic-subtitle">
          Learn Python coding standards and best practices
        </p>
      </div>
      <div className="py-topic-content">
        
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>📖 Why Best Practices Matter</h2>
          <p>
            Following best practices in Python development leads to more readable, maintainable, 
            and efficient code. These conventions help teams collaborate effectively and reduce bugs.
          </p>
          
          <h3>Benefits of Good Coding Practices</h3>
          <ul>
            <li><strong>Readability:</strong> Code is easier to understand and modify</li>
            <li><strong>Maintainability:</strong> Easier to debug and extend functionality</li>
            <li><strong>Collaboration:</strong> Team members can work together more effectively</li>
            <li><strong>Performance:</strong> Well-written code often runs more efficiently</li>
            <li><strong>Professionalism:</strong> Shows expertise and attention to detail</li>
          </ul>

          <h3>The Zen of Python</h3>
          <div className="code-example">
            <pre><code>{`import this

# The Zen of Python, by Tim Peters
# 
# Beautiful is better than ugly.
# Explicit is better than implicit.
# Simple is better than complex.
# Complex is better than complicated.
# Flat is better than nested.
# Sparse is better than dense.
# Readability counts.
# Special cases aren't special enough to break the rules.
# Although practicality beats purity.
# Errors should never pass silently.
# Unless explicitly silenced.
# In the face of ambiguity, refuse the temptation to guess.
# There should be one-- and preferably only one --obvious way to do it.
# Although that way may not be obvious at first unless you're Dutch.
# Now is better than never.
# Although never is often better than *right* now.
# If the implementation is hard to explain, it's a bad idea.
# If the implementation is easy to explain, it may be a good idea.
# Namespaces are one honking great idea -- let's do more of those!`}</code></pre>
          </div>
        </section>

        {/* PEP 8 Style Guide */}
        <section className="py-topic-section">
          <h2>📏 PEP 8 - Style Guide for Python Code</h2>
          <p>
            PEP 8 is the official style guide for Python code. Following these conventions 
            makes your code more readable and consistent with the broader Python community.
          </p>

          <h3>🔤 Naming Conventions</h3>
          <div className="code-example">
            <h4>Good Naming Examples:</h4>
            <pre><code>{`# Variables and functions: lowercase with underscores
user_name = "alice"
total_count = 42
file_path = "/path/to/file.txt"

def calculate_total_price(items):
    return sum(item.price for item in items)

def get_user_by_id(user_id):
    return database.find_user(user_id)

# Constants: uppercase with underscores
MAX_RETRY_ATTEMPTS = 3
DEFAULT_TIMEOUT = 30
API_BASE_URL = "https://api.example.com"

# Classes: PascalCase (CapWords)
class UserAccount:
    pass

class DatabaseConnection:
    pass

class HTTPResponseHandler:
    pass

# Modules and packages: lowercase, short names
# user_utils.py
# data_processing.py
# web_scraper.py

# Private variables/methods: single leading underscore
class BankAccount:
    def __init__(self, balance):
        self._balance = balance  # Protected
        self.__account_number = self._generate_account_number()  # Private
    
    def _validate_amount(self, amount):  # Protected method
        return amount > 0
    
    def __generate_account_number(self):  # Private method
        return "ACC" + str(random.randint(100000, 999999))`}</code></pre>
          </div>

          <h3>📐 Code Layout and Indentation</h3>
          <div className="code-example">
            <h4>Proper Indentation and Spacing:</h4>
            <pre><code>{`# Use 4 spaces per indentation level
def process_data(data_list):
    result = []
    for item in data_list:
        if item.is_valid():
            processed_item = item.process()
            result.append(processed_item)
    return result

# Maximum line length: 79 characters for code, 72 for docstrings
def long_function_name_with_many_parameters(
    parameter_one, parameter_two, parameter_three,
    parameter_four, parameter_five
):
    # Function body here
    pass

# Blank lines: 2 before top-level functions/classes, 1 between methods
class MyClass:
    """Class docstring."""
    
    def __init__(self):
        self.value = 0
    
    def method_one(self):
        """Method docstring."""
        pass
    
    def method_two(self):
        """Another method."""
        pass


def standalone_function():
    """Standalone function with 2 blank lines above."""
    pass

# Imports: at the top, grouped and sorted
import os
import sys
from pathlib import Path

import numpy as np
import pandas as pd
import requests

from mypackage import mymodule
from mypackage.subpackage import another_module`}</code></pre>
          </div>

          <h3>🔧 Operators and Expressions</h3>
          <div className="code-example">
            <pre><code>{`# Good spacing around operators
x = 1
y = 2
z = x + y

total = price * quantity + tax
is_valid = (age >= 18) and (age <= 65)

# Function calls - no space before parentheses
result = function_name(arg1, arg2, keyword_arg=value)

# List comprehensions - readable spacing
squares = [x**2 for x in range(10)]
filtered = [item for item in items if item.is_active]

# Dictionary and list literals
my_dict = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3'
}

my_list = [
    'item1',
    'item2',  # Trailing comma is okay
]

# Bad examples to avoid:
# x=1  # No space around =
# function_name ( arg1 , arg2 )  # Unnecessary spaces
# my_dict = { 'key' : 'value' }  # Spaces around : in dict`}</code></pre>
          </div>
        </section>

        {/* Documentation and Comments */}
        <section className="py-topic-section">
          <h2>📝 Documentation and Comments</h2>
          
          <h3>📚 Docstrings</h3>
          <div className="code-example">
            <h4>Well-written Docstrings:</h4>
            <pre><code>{`def calculate_compound_interest(principal, rate, time, n=1):
    """
    Calculate compound interest.
    
    Args:
        principal (float): The initial amount of money
        rate (float): Annual interest rate as a decimal (0.05 for 5%)
        time (float): Time period in years
        n (int, optional): Number of times interest is compounded per year.
                          Defaults to 1 (annually).
    
    Returns:
        float: The final amount after compound interest
        
    Raises:
        ValueError: If principal, rate, or time is negative
        
    Examples:
        >>> calculate_compound_interest(1000, 0.05, 2)
        1102.5
        >>> calculate_compound_interest(1000, 0.05, 2, 12)
        1104.89
    """
    if principal < 0 or rate < 0 or time < 0:
        raise ValueError("Principal, rate, and time must be non-negative")
    
    return principal * (1 + rate / n) ** (n * time)


class BankAccount:
    """
    A class to represent a bank account.
    
    Attributes:
        account_number (str): The unique account identifier
        balance (float): Current account balance
        account_type (str): Type of account (checking, savings, etc.)
    
    Methods:
        deposit(amount): Add money to the account
        withdraw(amount): Remove money from the account
        get_balance(): Return current balance
    """
    
    def __init__(self, account_number, initial_balance=0, account_type="checking"):
        """
        Initialize a new bank account.
        
        Args:
            account_number (str): Unique account identifier
            initial_balance (float, optional): Starting balance. Defaults to 0.
            account_type (str, optional): Account type. Defaults to "checking".
        """
        self.account_number = account_number
        self.balance = initial_balance
        self.account_type = account_type
    
    def deposit(self, amount):
        """
        Deposit money into the account.
        
        Args:
            amount (float): Amount to deposit
            
        Returns:
            float: New balance after deposit
            
        Raises:
            ValueError: If amount is negative or zero
        """
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        
        self.balance += amount
        return self.balance`}</code></pre>
          </div>

          <h3>💬 Comments Best Practices</h3>
          <div className="code-example">
            <pre><code>{`# Good comments explain WHY, not WHAT
def process_payment(amount, payment_method):
    # Apply discount for premium customers
    # This business rule was added per requirement #1234
    if customer.is_premium() and amount > 100:
        amount *= 0.95  # 5% discount
    
    # Use secure payment gateway for credit cards
    if payment_method == "credit_card":
        return secure_gateway.process(amount)
    else:
        return standard_processor.process(amount)

# TODO: Implement caching for frequently accessed data
# FIXME: Handle edge case when user has no payment methods
# NOTE: This algorithm is based on the Smith-Jones paper (2019)

# Bad comments to avoid:
x = x + 1  # Increment x by 1 (states the obvious)
# This function adds two numbers (redundant with function name)
def add_numbers(a, b):
    return a + b

# Good: Explain complex logic
def calculate_shipping_cost(weight, distance, is_express):
    base_cost = weight * 0.5  # $0.50 per pound base rate
    
    # Distance surcharge: $0.10 per mile over 100 miles
    if distance > 100:
        base_cost += (distance - 100) * 0.10
    
    # Express shipping doubles the cost
    if is_express:
        base_cost *= 2
    
    return round(base_cost, 2)`}</code></pre>
          </div>
        </section>

        {/* Error Handling */}
        <section className="py-topic-section">
          <h2>🚨 Error Handling Best Practices</h2>
          
          <div className="code-example">
            <h4>Proper Exception Handling:</h4>
            <pre><code>{`import logging
from typing import Optional

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def read_config_file(file_path: str) -> Optional[dict]:
    """
    Read and parse a JSON configuration file.
    
    Args:
        file_path: Path to the configuration file
        
    Returns:
        Dictionary with configuration data, or None if failed
    """
    try:
        with open(file_path, 'r') as file:
            config = json.load(file)
        logger.info(f"Successfully loaded config from {file_path}")
        return config
        
    except FileNotFoundError:
        logger.error(f"Configuration file not found: {file_path}")
        return None
        
    except json.JSONDecodeError as e:
        logger.error(f"Invalid JSON in config file {file_path}: {e}")
        return None
        
    except PermissionError:
        logger.error(f"Permission denied reading {file_path}")
        return None
        
    except Exception as e:
        # Catch-all for unexpected errors
        logger.error(f"Unexpected error reading config file: {e}")
        return None

# Custom exceptions for specific use cases
class InsufficientFundsError(Exception):
    """Raised when account has insufficient funds for withdrawal."""
    def __init__(self, requested_amount, available_balance):
        self.requested_amount = requested_amount
        self.available_balance = available_balance
        message = (f"Cannot withdraw \${requested_amount}. "
                  f"Available balance: \${available_balance}")
        super().__init__(message)

class BankAccount:
    def __init__(self, initial_balance):
        self.balance = initial_balance
    
    def withdraw(self, amount):
        """
        Withdraw money from account.
        
        Raises:
            InsufficientFundsError: If withdrawal amount exceeds balance
            ValueError: If amount is negative
        """
        if amount < 0:
            raise ValueError("Withdrawal amount cannot be negative")
        
        if amount > self.balance:
            raise InsufficientFundsError(amount, self.balance)
        
        self.balance -= amount
        return self.balance

# Using context managers for resource management
def process_large_file(file_path):
    """Process a large file safely."""
    try:
        with open(file_path, 'r') as file:
            for line_num, line in enumerate(file, 1):
                try:
                    # Process each line
                    result = process_line(line.strip())
                    save_result(result)
                    
                except ProcessingError as e:
                    logger.warning(f"Skipping line {line_num}: {e}")
                    continue
                    
    except IOError as e:
        logger.error(f"Could not process file {file_path}: {e}")
        raise

# Validation with clear error messages
def validate_email(email: str) -> bool:
    """Validate email address format."""
    if not isinstance(email, str):
        raise TypeError(f"Email must be string, got {type(email)}")
    
    if not email:
        raise ValueError("Email cannot be empty")
    
    if '@' not in email:
        raise ValueError("Email must contain @ symbol")
    
    if '.' not in email.split('@')[1]:
        raise ValueError("Email domain must contain a dot")
    
    return True`}</code></pre>
          </div>
        </section>

        {/* Code Organization */}
        <section className="py-topic-section">
          <h2>🗂️ Code Organization and Structure</h2>
          
          <h3>📁 Project Structure</h3>
          <div className="code-example">
            <pre><code>{`# Recommended project structure
myproject/
├── README.md              # Project description and setup instructions
├── requirements.txt       # Python dependencies
├── setup.py              # Package installation script
├── .gitignore            # Git ignore rules
├── .env.example          # Environment variables template
├── tests/                # Test files
│   ├── __init__.py
│   ├── test_models.py
│   ├── test_utils.py
│   └── conftest.py       # Pytest configuration
├── docs/                 # Documentation
│   ├── api.md
│   └── user_guide.md
├── myproject/            # Main package
│   ├── __init__.py
│   ├── main.py           # Entry point
│   ├── config.py         # Configuration settings
│   ├── models/           # Data models
│   │   ├── __init__.py
│   │   ├── user.py
│   │   └── product.py
│   ├── services/         # Business logic
│   │   ├── __init__.py
│   │   ├── user_service.py
│   │   └── payment_service.py
│   ├── utils/            # Utility functions
│   │   ├── __init__.py
│   │   ├── helpers.py
│   │   └── validators.py
│   └── api/              # API endpoints
│       ├── __init__.py
│       ├── routes.py
│       └── middleware.py
└── scripts/              # Utility scripts
    ├── deploy.sh
    └── backup.py`}</code></pre>
          </div>

          <h3>🏗️ Module Design</h3>
          <div className="code-example">
            <pre><code>{`# Good module design - user_service.py
"""
User management service.

This module provides functionality for creating, updating, and managing user accounts.
"""

from typing import List, Optional
from datetime import datetime
import logging

from myproject.models.user import User
from myproject.utils.validators import validate_email
from myproject.exceptions import UserNotFoundError, ValidationError

logger = logging.getLogger(__name__)


class UserService:
    """Service for managing user operations."""
    
    def __init__(self, database_connection):
        self._db = database_connection
    
    def create_user(self, email: str, name: str, password: str) -> User:
        """
        Create a new user account.
        
        Args:
            email: User's email address
            name: User's full name
            password: Raw password (will be hashed)
            
        Returns:
            Created User object
            
        Raises:
            ValidationError: If input validation fails
        """
        # Validate inputs
        self._validate_user_data(email, name, password)
        
        # Check if user already exists
        if self.get_user_by_email(email):
            raise ValidationError(f"User with email {email} already exists")
        
        # Create user
        user = User(
            email=email,
            name=name,
            password_hash=self._hash_password(password),
            created_at=datetime.utcnow()
        )
        
        # Save to database
        user_id = self._db.save_user(user)
        user.id = user_id
        
        logger.info(f"Created new user: {email}")
        return user
    
    def get_user_by_email(self, email: str) -> Optional[User]:
        """Get user by email address."""
        return self._db.find_user_by_email(email)
    
    def _validate_user_data(self, email: str, name: str, password: str) -> None:
        """Validate user input data."""
        if not validate_email(email):
            raise ValidationError("Invalid email format")
        
        if len(name.strip()) < 2:
            raise ValidationError("Name must be at least 2 characters")
        
        if len(password) < 8:
            raise ValidationError("Password must be at least 8 characters")
    
    def _hash_password(self, password: str) -> str:
        """Hash password securely."""
        # Implementation here
        pass


# Module-level functions for simple utilities
def format_username(email: str) -> str:
    """Extract username from email address."""
    return email.split('@')[0]


def is_valid_user_age(age: int) -> bool:
    """Check if user age is valid."""
    return 13 <= age <= 120


# Module constants
MIN_PASSWORD_LENGTH = 8
MAX_LOGIN_ATTEMPTS = 3
SESSION_TIMEOUT = 3600  # seconds`}</code></pre>
          </div>
        </section>

        {/* Type Hints and Modern Python */}
        <section className="py-topic-section">
          <h2>🏷️ Type Hints and Modern Python Features</h2>
          
          <div className="code-example">
            <h4>Using Type Hints Effectively:</h4>
            <pre><code>{`from typing import List, Dict, Optional, Union, Tuple, Callable
from datetime import datetime
from dataclasses import dataclass
from enum import Enum

# Type hints for basic types
def calculate_discount(price: float, discount_percent: float) -> float:
    """Calculate discounted price."""
    return price * (1 - discount_percent / 100)

def process_items(items: List[str]) -> Dict[str, int]:
    """Count items and return frequency dictionary."""
    return {item: items.count(item) for item in set(items)}

# Optional and Union types
def find_user(user_id: int) -> Optional[Dict[str, str]]:
    """Find user by ID, return None if not found."""
    # Implementation here
    pass

def parse_value(value: Union[str, int, float]) -> float:
    """Parse value to float."""
    return float(value)

# Function types
def apply_operation(numbers: List[float], operation: Callable[[float], float]) -> List[float]:
    """Apply operation to each number in the list."""
    return [operation(num) for num in numbers]

# Custom type aliases for clarity
UserId = int
EmailAddress = str
Timestamp = datetime

def send_notification(user_id: UserId, email: EmailAddress, sent_at: Timestamp) -> bool:
    """Send notification to user."""
    # Implementation here
    pass

# Dataclasses for structured data
@dataclass
class Product:
    """Represents a product in the inventory."""
    id: int
    name: str
    price: float
    category: str
    in_stock: bool = True
    created_at: datetime = None
    
    def __post_init__(self):
        if self.created_at is None:
            self.created_at = datetime.utcnow()
    
    @property
    def is_available(self) -> bool:
        """Check if product is available for purchase."""
        return self.in_stock and self.price > 0

# Enums for constants
class OrderStatus(Enum):
    """Order status enumeration."""
    PENDING = "pending"
    CONFIRMED = "confirmed"
    SHIPPED = "shipped"
    DELIVERED = "delivered"
    CANCELLED = "cancelled"

@dataclass
class Order:
    """Represents a customer order."""
    id: int
    customer_email: EmailAddress
    products: List[Product]
    status: OrderStatus = OrderStatus.PENDING
    
    @property
    def total_amount(self) -> float:
        """Calculate total order amount."""
        return sum(product.price for product in self.products)

# Generic types for reusable components
from typing import TypeVar, Generic

T = TypeVar('T')

class Repository(Generic[T]):
    """Generic repository pattern."""
    
    def __init__(self):
        self._items: List[T] = []
    
    def add(self, item: T) -> None:
        """Add item to repository."""
        self._items.append(item)
    
    def find_by_id(self, item_id: int) -> Optional[T]:
        """Find item by ID."""
        # Implementation depends on the type T
        pass
    
    def get_all(self) -> List[T]:
        """Get all items."""
        return self._items.copy()

# Usage
user_repo = Repository[User]()
product_repo = Repository[Product]()`}</code></pre>
          </div>
        </section>

        {/* Performance Best Practices */}
        <section className="py-topic-section">
          <h2>⚡ Performance Best Practices</h2>
          
          <div className="code-example">
            <h4>Efficient Code Patterns:</h4>
            <pre><code>{`import time
from collections import defaultdict, Counter
from functools import lru_cache
import itertools

# Use list comprehensions for simple transformations
# Good
squared = [x**2 for x in range(1000)]

# Less efficient
squared = []
for x in range(1000):
    squared.append(x**2)

# Use generator expressions for large datasets
# Memory efficient
sum_of_squares = sum(x**2 for x in range(1000000))

# Dictionary methods for lookups
# Good - O(1) average case
user_ids = {user.email: user.id for user in users}
user_id = user_ids.get(email)

# Avoid - O(n)
user_id = None
for user in users:
    if user.email == email:
        user_id = user.id
        break

# Use collections for specialized data structures
# Count items efficiently
from collections import Counter
word_counts = Counter(words)
most_common = word_counts.most_common(10)

# Group items efficiently
from collections import defaultdict
grouped = defaultdict(list)
for item in items:
    grouped[item.category].append(item)

# Caching expensive computations
@lru_cache(maxsize=128)
def fibonacci(n):
    """Cached fibonacci calculation."""
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# String operations
# Good - join is efficient for multiple strings
message = " ".join(words)

# Avoid - string concatenation in loops is slow
message = ""
for word in words:
    message += " " + word

# Use f-strings for formatting (Python 3.6+)
# Good
message = f"Hello {name}, you have {count} messages"

# Less efficient
message = "Hello {}, you have {} messages".format(name, count)
message = "Hello %s, you have %d messages" % (name, count)

# Efficient file reading
# For large files, read line by line
def process_large_file(filename):
    with open(filename, 'r') as file:
        for line in file:  # Memory efficient
            yield process_line(line.strip())

# Use itertools for efficient iterations
# Batch processing
def batch_process(items, batch_size=100):
    iterator = iter(items)
    while True:
        batch = list(itertools.islice(iterator, batch_size))
        if not batch:
            break
        yield batch

# Efficient set operations
# Use sets for membership testing
valid_ids = {1, 2, 3, 4, 5}
if user_id in valid_ids:  # O(1) average case
    process_user()

# Find intersection/difference efficiently
common_interests = set(user1.interests) & set(user2.interests)
unique_to_user1 = set(user1.interests) - set(user2.interests)`}</code></pre>
          </div>

          <h3>⏱️ Profiling and Optimization</h3>
          <div className="code-example">
            <pre><code>{`import cProfile
import pstats
from functools import wraps
import time

def profile_function(func):
    """Decorator to profile function execution time."""
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} took {end_time - start_time:.4f} seconds")
        return result
    return wrapper

@profile_function
def slow_function():
    """Example function to profile."""
    time.sleep(0.1)
    return sum(range(100000))

# Using cProfile for detailed analysis
def profile_code():
    """Profile a piece of code."""
    pr = cProfile.Profile()
    pr.enable()
    
    # Code to profile
    result = some_expensive_function()
    
    pr.disable()
    
    # Print stats
    stats = pstats.Stats(pr)
    stats.sort_stats('cumulative')
    stats.print_stats(10)  # Top 10 functions

# Memory profiling (requires memory_profiler package)
# pip install memory_profiler
from memory_profiler import profile

@profile
def memory_intensive_function():
    """Function to check memory usage."""
    big_list = [i for i in range(1000000)]
    big_dict = {i: i**2 for i in range(100000)}
    return len(big_list) + len(big_dict)

# Run with: python -m memory_profiler script.py`}</code></pre>
          </div>
        </section>

        {/* Security Best Practices */}
        <section className="py-topic-section">
          <h2>🔐 Security Best Practices</h2>
          
          <div className="code-example">
            <h4>Secure Coding Patterns:</h4>
            <pre><code>{`import secrets
import hashlib
import os
from pathlib import Path
import subprocess

# Secure password handling
def hash_password(password: str, salt: bytes = None) -> tuple[bytes, bytes]:
    """Hash password securely with salt."""
    if salt is None:
        salt = secrets.token_bytes(32)  # Generate random salt
    
    # Use PBKDF2 for password hashing
    password_hash = hashlib.pbkdf2_hmac(
        'sha256',
        password.encode('utf-8'),
        salt,
        100000  # iterations
    )
    return password_hash, salt

def verify_password(password: str, stored_hash: bytes, salt: bytes) -> bool:
    """Verify password against stored hash."""
    password_hash, _ = hash_password(password, salt)
    return secrets.compare_digest(password_hash, stored_hash)

# Secure random generation
def generate_secure_token(length: int = 32) -> str:
    """Generate cryptographically secure random token."""
    return secrets.token_urlsafe(length)

def generate_session_id() -> str:
    """Generate secure session ID."""
    return secrets.token_hex(16)

# Input validation and sanitization
def validate_and_sanitize_filename(filename: str) -> str:
    """Validate and sanitize user-provided filename."""
    if not filename:
        raise ValueError("Filename cannot be empty")
    
    # Remove dangerous characters
    dangerous_chars = ['..', '/', '\\\\', ':', '*', '?', '"', '<', '>', '|']
    sanitized = filename
    for char in dangerous_chars:
        sanitized = sanitized.replace(char, '')
    
    # Limit length
    if len(sanitized) > 255:
        sanitized = sanitized[:255]
    
    if not sanitized:
        raise ValueError("Invalid filename")
    
    return sanitized

# Safe file operations
def safe_file_read(file_path: str, max_size: int = 10**6) -> str:
    """Safely read file with size limits."""
    path = Path(file_path).resolve()
    
    # Check if file is within allowed directory
    allowed_dir = Path("/allowed/directory").resolve()
    if not str(path).startswith(str(allowed_dir)):
        raise ValueError("File access denied")
    
    # Check file size
    if path.stat().st_size > max_size:
        raise ValueError("File too large")
    
    with open(path, 'r', encoding='utf-8') as file:
        return file.read()

# SQL injection prevention (using parameterized queries)
def safe_database_query(cursor, user_id: int):
    """Example of safe database query."""
    # Good - parameterized query
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    
    # NEVER do this - vulnerable to SQL injection
    # cursor.execute(f"SELECT * FROM users WHERE id = {user_id}")

# Command injection prevention
def safe_system_command(filename: str):
    """Safely execute system command."""
    # Validate input
    if not filename.isalnum():
        raise ValueError("Invalid filename")
    
    # Use subprocess with list (not shell=True)
    try:
        result = subprocess.run(
            ['ls', '-la', filename],
            capture_output=True,
            text=True,
            timeout=30,
            check=True
        )
        return result.stdout
    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"Command failed: {e}")

# Environment variable handling
def get_secret_key() -> str:
    """Get secret key from environment."""
    secret_key = os.getenv('SECRET_KEY')
    if not secret_key:
        raise RuntimeError("SECRET_KEY environment variable not set")
    return secret_key

# Secure configuration
class SecurityConfig:
    """Security configuration settings."""
    
    def __init__(self):
        self.secret_key = get_secret_key()
        self.debug = os.getenv('DEBUG', 'False').lower() == 'true'
        self.allowed_hosts = os.getenv('ALLOWED_HOSTS', '').split(',')
        
        # Ensure debug is False in production
        if not self.debug and not self.allowed_hosts:
            raise RuntimeError("ALLOWED_HOSTS must be set in production")

# Rate limiting (conceptual)
from collections import defaultdict
from time import time

class RateLimiter:
    """Simple rate limiter implementation."""
    
    def __init__(self, max_requests: int, time_window: int):
        self.max_requests = max_requests
        self.time_window = time_window
        self.requests = defaultdict(list)
    
    def is_allowed(self, identifier: str) -> bool:
        """Check if request is allowed."""
        now = time()
        user_requests = self.requests[identifier]
        
        # Remove old requests
        user_requests[:] = [req_time for req_time in user_requests 
                          if now - req_time < self.time_window]
        
        # Check limit
        if len(user_requests) >= self.max_requests:
            return False
        
        # Add current request
        user_requests.append(now)
        return True`}</code></pre>
          </div>
        </section>

        {/* Testing Best Practices */}
        <section className="py-topic-section">
          <h2>🧪 Testing Best Practices</h2>
          
          <div className="code-example">
            <h4>Writing Effective Tests:</h4>
            <pre><code>{`import pytest
from unittest.mock import Mock, patch
from datetime import datetime, timedelta

# Test naming and organization
class TestUserService:
    """Test cases for UserService class."""
    
    def test_create_user_with_valid_data_success(self):
        """Test successful user creation with valid data."""
        # Arrange
        service = UserService(mock_database)
        email = "test@example.com"
        name = "Test User"
        password = "secure_password123"
        
        # Act
        user = service.create_user(email, name, password)
        
        # Assert
        assert user.email == email
        assert user.name == name
        assert user.password_hash != password  # Should be hashed
        assert user.created_at is not None
    
    def test_create_user_with_existing_email_raises_error(self):
        """Test that creating user with existing email raises ValidationError."""
        # Arrange
        service = UserService(mock_database)
        existing_email = "existing@example.com"
        mock_database.find_user_by_email.return_value = Mock()  # User exists
        
        # Act & Assert
        with pytest.raises(ValidationError, match="already exists"):
            service.create_user(existing_email, "Name", "password123")
    
    @pytest.mark.parametrize("invalid_email", [
        "",
        "notanemail",
        "@example.com",
        "test@",
        None
    ])
    def test_create_user_with_invalid_email_raises_error(self, invalid_email):
        """Test that invalid emails raise ValidationError."""
        service = UserService(mock_database)
        
        with pytest.raises(ValidationError):
            service.create_user(invalid_email, "Name", "password123")

# Fixtures for reusable test data
@pytest.fixture
def mock_database():
    """Mock database for testing."""
    db = Mock()
    db.find_user_by_email.return_value = None  # No existing users by default
    db.save_user.return_value = 123  # Mock user ID
    return db

@pytest.fixture
def sample_user():
    """Sample user for testing."""
    return User(
        id=1,
        email="test@example.com",
        name="Test User",
        created_at=datetime.utcnow()
    )

# Mocking external dependencies
class TestPaymentProcessor:
    """Test payment processing with external API mocking."""
    
    @patch('payment_service.stripe_api.charge')
    def test_process_payment_success(self, mock_stripe_charge):
        """Test successful payment processing."""
        # Arrange
        mock_stripe_charge.return_value = {'id': 'ch_123', 'status': 'succeeded'}
        processor = PaymentProcessor()
        
        # Act
        result = processor.process_payment(100.00, 'card_token')
        
        # Assert
        assert result['success'] is True
        assert result['charge_id'] == 'ch_123'
        mock_stripe_charge.assert_called_once_with(
            amount=10000,  # cents
            currency='usd',
            source='card_token'
        )
    
    @patch('payment_service.stripe_api.charge')
    def test_process_payment_failure(self, mock_stripe_charge):
        """Test payment processing failure."""
        # Arrange
        mock_stripe_charge.side_effect = PaymentError("Card declined")
        processor = PaymentProcessor()
        
        # Act
        result = processor.process_payment(100.00, 'invalid_card')
        
        # Assert
        assert result['success'] is False
        assert 'Card declined' in result['error']

# Testing async code
import asyncio

@pytest.mark.asyncio
async def test_async_user_fetch():
    """Test async user fetching."""
    service = AsyncUserService()
    
    user = await service.fetch_user_async(user_id=123)
    
    assert user is not None
    assert user.id == 123

# Property-based testing with Hypothesis
from hypothesis import given, strategies as st

@given(st.text(min_size=1, max_size=100))
def test_username_validation_with_random_strings(username):
    """Property-based test for username validation."""
    # Test that validation function handles any string input gracefully
    try:
        result = validate_username(username)
        assert isinstance(result, bool)
    except ValidationError:
        # ValidationError is acceptable
        pass

# Performance testing
def test_large_dataset_processing_performance():
    """Test that processing large dataset completes within time limit."""
    large_dataset = list(range(100000))
    
    start_time = time.time()
    result = process_dataset(large_dataset)
    end_time = time.time()
    
    # Should complete within 1 second
    assert end_time - start_time < 1.0
    assert len(result) == len(large_dataset)

# Testing with temporary files
import tempfile

def test_file_processing_with_temp_file():
    """Test file processing using temporary file."""
    with tempfile.NamedTemporaryFile(mode='w', delete=False) as temp_file:
        temp_file.write("test data\\nmore test data\\n")
        temp_file_path = temp_file.name
    
    try:
        result = process_file(temp_file_path)
        assert result['lines_processed'] == 2
    finally:
        os.unlink(temp_file_path)  # Cleanup`}</code></pre>
          </div>
        </section>

        {/* Code Quality Tools */}
        <section className="py-topic-section">
          <h2>🛠️ Code Quality Tools</h2>
          
          <div className="code-example">
            <h4>Essential Development Tools:</h4>
            <pre><code>{`# requirements-dev.txt
# Code formatting
black>=22.0.0
isort>=5.10.0

# Linting
flake8>=4.0.0
pylint>=2.12.0

# Type checking
mypy>=0.900

# Testing
pytest>=6.0.0
pytest-cov>=3.0.0
pytest-mock>=3.6.0

# Security
bandit>=1.7.0

# Documentation
sphinx>=4.0.0

# Pre-commit hooks
pre-commit>=2.15.0`}</code></pre>
          </div>

          <h3>⚙️ Configuration Files</h3>
          <div className="code-example">
            <pre><code>{`# .flake8
[flake8]
max-line-length = 88
extend-ignore = E203, W503
exclude = 
    .git,
    __pycache__,
    .venv,
    migrations/

# pyproject.toml
[tool.black]
line-length = 88
target-version = ['py38']
include = '\\.pyi?$'

[tool.isort]
profile = "black"
multi_line_output = 3
line_length = 88
known_first_party = ["myproject"]

[tool.mypy]
python_version = "3.8"
warn_return_any = true
warn_unused_configs = true
disallow_untyped_defs = true
ignore_missing_imports = true

# pytest.ini
[tool:pytest]
testpaths = tests
python_files = test_*.py
python_classes = Test*
python_functions = test_*
addopts = 
    --strict-markers
    --strict-config
    --cov=myproject
    --cov-report=html
    --cov-report=term-missing

# .pre-commit-config.yaml
repos:
  - repo: https://github.com/psf/black
    rev: 22.3.0
    hooks:
      - id: black
  
  - repo: https://github.com/pycqa/isort
    rev: 5.10.1
    hooks:
      - id: isort
  
  - repo: https://github.com/pycqa/flake8
    rev: 4.0.1
    hooks:
      - id: flake8
  
  - repo: https://github.com/pre-commit/mirrors-mypy
    rev: v0.942
    hooks:
      - id: mypy`}</code></pre>
          </div>

          <h3>🔧 Automation Scripts</h3>
          <div className="code-example">
            <pre><code>{`# Makefile for common tasks
.PHONY: install test lint format type-check security clean

install:
	pip install -r requirements.txt
	pip install -r requirements-dev.txt

test:
	pytest tests/ -v --cov=myproject --cov-report=html

lint:
	flake8 myproject tests
	pylint myproject

format:
	black myproject tests
	isort myproject tests

type-check:
	mypy myproject

security:
	bandit -r myproject

clean:
	find . -type f -name "*.pyc" -delete
	find . -type d -name "__pycache__" -delete
	rm -rf .coverage htmlcov/ .pytest_cache/

all: format lint type-check test security

# setup_dev.py - Development environment setup
import subprocess
import sys

def run_command(command):
    """Run shell command and handle errors."""
    try:
        result = subprocess.run(command, shell=True, check=True)
        return result.returncode == 0
    except subprocess.CalledProcessError:
        return False

def setup_development_environment():
    """Setup development environment."""
    print("Setting up development environment...")
    
    # Install dependencies
    if not run_command("pip install -r requirements.txt"):
        print("Failed to install requirements")
        sys.exit(1)
    
    if not run_command("pip install -r requirements-dev.txt"):
        print("Failed to install development requirements")
        sys.exit(1)
    
    # Install pre-commit hooks
    if not run_command("pre-commit install"):
        print("Failed to install pre-commit hooks")
        sys.exit(1)
    
    print("Development environment setup complete!")

if __name__ == "__main__":
    setup_development_environment()`}</code></pre>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🏋️ Practice Exercises</h2>
          
          <div className="exercise-box">
            <h3>Exercise 1: Code Refactoring</h3>
            <p>Refactor a piece of poorly written code to follow best practices:</p>
            <ul>
              <li>Take existing code with multiple violations</li>
              <li>Apply PEP 8 formatting standards</li>
              <li>Add proper type hints and docstrings</li>
              <li>Implement proper error handling</li>
              <li>Add unit tests for all functions</li>
              <li>Use code quality tools to validate improvements</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>Exercise 2: Project Structure</h3>
            <p>Create a well-organized Python project from scratch:</p>
            <ul>
              <li>Set up proper project structure with packages</li>
              <li>Configure all development tools (black, flake8, mypy, pytest)</li>
              <li>Write comprehensive tests with good coverage</li>
              <li>Add proper documentation and README</li>
              <li>Set up CI/CD pipeline configuration</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>Exercise 3: Security Review</h3>
            <p>Perform a security review of existing code:</p>
            <ul>
              <li>Identify security vulnerabilities in sample code</li>
              <li>Implement secure alternatives</li>
              <li>Add input validation and sanitization</li>
              <li>Use security scanning tools (bandit)</li>
              <li>Document security best practices used</li>
            </ul>
          </div>
        </section>

        {/* Resources */}
        <section className="py-topic-section">
          <h2>📚 Additional Resources</h2>
          
          <h3>Official Documentation</h3>
          <ul>
            <li><a href="https://pep8.org/" target="_blank" rel="noopener noreferrer">PEP 8 - Style Guide for Python Code</a></li>
            <li><a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener noreferrer">Python Tutorial</a></li>
            <li><a href="https://docs.python.org/3/library/typing.html" target="_blank" rel="noopener noreferrer">Python Typing Documentation</a></li>
            <li><a href="https://docs.python.org/3/library/dataclasses.html" target="_blank" rel="noopener noreferrer">Dataclasses Documentation</a></li>
          </ul>

          <h3>Code Quality Tools</h3>
          <ul>
            <li><a href="https://black.readthedocs.io/" target="_blank" rel="noopener noreferrer">Black - Code Formatter</a></li>
            <li><a href="https://flake8.pycqa.org/" target="_blank" rel="noopener noreferrer">Flake8 - Linter</a></li>
            <li><a href="https://mypy.readthedocs.io/" target="_blank" rel="noopener noreferrer">MyPy - Static Type Checker</a></li>
            <li><a href="https://bandit.readthedocs.io/" target="_blank" rel="noopener noreferrer">Bandit - Security Linter</a></li>
          </ul>

          <h3>Books and Guides</h3>
          <ul>
            <li>"Clean Code" by Robert C. Martin</li>
            <li>"Effective Python" by Brett Slatkin</li>
            <li>"Architecture Patterns with Python" by Harry Percival</li>
            <li>"Python Tricks: A Buffet of Awesome Python Features" by Dan Bader</li>
          </ul>

          <h3>Community Resources</h3>
          <ul>
            <li>Python Enhancement Proposals (PEPs)</li>
            <li>Real Python tutorials and articles</li>
            <li>Python subreddit and Stack Overflow</li>
            <li>PyPI - Python Package Index for exploring well-written packages</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default BestPractices;
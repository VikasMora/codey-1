import React from 'react';
import '../Navbarweb.css';

function TestingPythonCode() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>🧪 Testing Python Code</h1>
        <p className="py-topic-subtitle">
          Learn unit testing, test-driven development, and debugging
        </p>
      </div>
      <div className="py-topic-content">
        
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>📖 Introduction to Testing Python Code</h2>
          <p>
            Testing is a crucial part of software development that ensures your code works correctly,
            catches bugs early, and makes your code more maintainable and reliable.
          </p>
          
          <h3>Why Test Your Code?</h3>
          <ul>
            <li><strong>Bug Detection:</strong> Catch errors before they reach production</li>
            <li><strong>Code Quality:</strong> Ensure code meets requirements and specifications</li>
            <li><strong>Refactoring Safety:</strong> Confidently modify code without breaking functionality</li>
            <li><strong>Documentation:</strong> Tests serve as living documentation</li>
            <li><strong>Team Confidence:</strong> Collaborative development with fewer conflicts</li>
          </ul>

          <h3>Types of Testing</h3>
          <ul>
            <li><strong>Unit Testing:</strong> Test individual functions or methods</li>
            <li><strong>Integration Testing:</strong> Test how different parts work together</li>
            <li><strong>Functional Testing:</strong> Test complete features from user perspective</li>
            <li><strong>Performance Testing:</strong> Test speed, responsiveness, and stability</li>
          </ul>
        </section>

        {/* Unit Testing with unittest */}
        <section className="py-topic-section">
          <h2>🔬 Unit Testing with unittest</h2>
          <p>
            Python's built-in <code>unittest</code> module provides a framework for writing and running tests.
          </p>

          <div className="code-example">
            <h4>Basic Unit Test Example:</h4>
            <pre><code>{`# math_operations.py
def add(a, b):
    """Add two numbers"""
    return a + b

def multiply(a, b):
    """Multiply two numbers"""
    return a * b

def divide(a, b):
    """Divide two numbers"""
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

# test_math_operations.py
import unittest
from math_operations import add, multiply, divide

class TestMathOperations(unittest.TestCase):
    
    def test_add_positive_numbers(self):
        result = add(5, 3)
        self.assertEqual(result, 8)
    
    def test_add_negative_numbers(self):
        result = add(-5, -3)
        self.assertEqual(result, -8)
    
    def test_multiply_positive_numbers(self):
        result = multiply(4, 3)
        self.assertEqual(result, 12)
    
    def test_divide_positive_numbers(self):
        result = divide(10, 2)
        self.assertEqual(result, 5)
    
    def test_divide_by_zero_raises_error(self):
        with self.assertRaises(ValueError):
            divide(10, 0)

if __name__ == '__main__':
    unittest.main()`}</code></pre>
          </div>

          <h3>unittest Assertion Methods</h3>
          <div className="code-example">
            <pre><code>{`# Common assertion methods
self.assertEqual(a, b)        # a == b
self.assertNotEqual(a, b)     # a != b
self.assertTrue(x)            # bool(x) is True
self.assertFalse(x)           # bool(x) is False
self.assertIsNone(x)          # x is None
self.assertIsNotNone(x)       # x is not None
self.assertIn(a, b)           # a in b
self.assertNotIn(a, b)        # a not in b
self.assertIsInstance(a, b)   # isinstance(a, b)
self.assertRaises(exc, fun, *args)  # fun(*args) raises exc`}</code></pre>
          </div>

          <div className="code-example">
            <h4>Test Fixtures - setUp and tearDown:</h4>
            <pre><code>{`import unittest
import tempfile
import os

class TestFileOperations(unittest.TestCase):
    
    def setUp(self):
        """Set up test fixtures before each test method."""
        self.test_dir = tempfile.mkdtemp()
        self.test_file = os.path.join(self.test_dir, 'test.txt')
        
    def tearDown(self):
        """Clean up after each test method."""
        if os.path.exists(self.test_file):
            os.remove(self.test_file)
        os.rmdir(self.test_dir)
    
    def test_file_creation(self):
        with open(self.test_file, 'w') as f:
            f.write('Hello, World!')
        
        self.assertTrue(os.path.exists(self.test_file))
        
        with open(self.test_file, 'r') as f:
            content = f.read()
        
        self.assertEqual(content, 'Hello, World!')`}</code></pre>
          </div>
        </section>

        {/* pytest Framework */}
        <section className="py-topic-section">
          <h2>🚀 Testing with pytest</h2>
          <p>
            <code>pytest</code> is a popular third-party testing framework that makes writing tests easier
            and more readable than unittest.
          </p>

          <div className="code-example">
            <h4>Installing pytest:</h4>
            <pre><code>{`pip install pytest`}</code></pre>
          </div>

          <div className="code-example">
            <h4>pytest Basic Example:</h4>
            <pre><code>{`# test_calculator.py
import pytest

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        raise ValueError("Cannot divide by zero")
    return x / y

# Test functions (no class needed!)
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0

def test_subtract():
    assert subtract(5, 3) == 2
    assert subtract(0, 5) == -5

def test_multiply():
    assert multiply(3, 4) == 12
    assert multiply(-2, 3) == -6

def test_divide():
    assert divide(10, 2) == 5
    assert divide(7, 2) == 3.5

def test_divide_by_zero():
    with pytest.raises(ValueError, match="Cannot divide by zero"):
        divide(10, 0)

# Run with: pytest test_calculator.py`}</code></pre>
          </div>

          <h3>pytest Fixtures</h3>
          <div className="code-example">
            <pre><code>{`import pytest
import tempfile
import os

@pytest.fixture
def temp_file():
    """Create a temporary file for testing"""
    fd, path = tempfile.mkstemp()
    yield path  # This is where the testing happens
    os.close(fd)
    os.unlink(path)  # Cleanup

@pytest.fixture
def sample_data():
    """Provide sample data for tests"""
    return {
        'users': ['Alice', 'Bob', 'Charlie'],
        'scores': [95, 87, 92],
        'active': True
    }

def test_file_operations(temp_file):
    # Use the temp_file fixture
    with open(temp_file, 'w') as f:
        f.write('Test content')
    
    with open(temp_file, 'r') as f:
        content = f.read()
    
    assert content == 'Test content'

def test_data_processing(sample_data):
    # Use the sample_data fixture
    assert len(sample_data['users']) == 3
    assert max(sample_data['scores']) == 95
    assert sample_data['active'] is True`}</code></pre>
          </div>

          <h3>Parametrized Tests</h3>
          <div className="code-example">
            <pre><code>{`import pytest

@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (0, 0, 0),
    (-1, 1, 0),
    (10, -5, 5),
])
def test_add_parametrized(a, b, expected):
    assert add(a, b) == expected

@pytest.mark.parametrize("input_value,expected", [
    ("hello", 5),
    ("python", 6),
    ("", 0),
    ("a", 1),
])
def test_string_length(input_value, expected):
    assert len(input_value) == expected`}</code></pre>
          </div>
        </section>

        {/* Test-Driven Development (TDD) */}
        <section className="py-topic-section">
          <h2>🔄 Test-Driven Development (TDD)</h2>
          <p>
            TDD is a development approach where you write tests before writing the actual code.
            It follows the Red-Green-Refactor cycle.
          </p>

          <h3>TDD Cycle</h3>
          <ol>
            <li><strong>Red:</strong> Write a failing test</li>
            <li><strong>Green:</strong> Write minimal code to make the test pass</li>
            <li><strong>Refactor:</strong> Improve the code while keeping tests green</li>
          </ol>

          <div className="code-example">
            <h4>TDD Example - Building a Shopping Cart:</h4>
            <pre><code>{`# Step 1: Write failing tests first
import pytest

class ShoppingCart:
    pass  # Empty class initially

class TestShoppingCart:
    
    def test_new_cart_is_empty(self):
        cart = ShoppingCart()
        assert len(cart.items) == 0
    
    def test_add_item_to_cart(self):
        cart = ShoppingCart()
        cart.add_item("Apple", 1.50)
        assert len(cart.items) == 1
        assert cart.items[0]["name"] == "Apple"
        assert cart.items[0]["price"] == 1.50
    
    def test_calculate_total_empty_cart(self):
        cart = ShoppingCart()
        assert cart.total() == 0
    
    def test_calculate_total_with_items(self):
        cart = ShoppingCart()
        cart.add_item("Apple", 1.50)
        cart.add_item("Banana", 0.75)
        assert cart.total() == 2.25

# Step 2: Implement minimal code to pass tests
class ShoppingCart:
    def __init__(self):
        self.items = []
    
    def add_item(self, name, price):
        self.items.append({"name": name, "price": price})
    
    def total(self):
        return sum(item["price"] for item in self.items)

# Step 3: Refactor and add more features
class ShoppingCart:
    def __init__(self):
        self.items = []
    
    def add_item(self, name, price, quantity=1):
        self.items.append({
            "name": name, 
            "price": price, 
            "quantity": quantity
        })
    
    def remove_item(self, name):
        self.items = [item for item in self.items if item["name"] != name]
    
    def total(self):
        return sum(item["price"] * item["quantity"] for item in self.items)
    
    def item_count(self):
        return sum(item["quantity"] for item in self.items)`}</code></pre>
          </div>
        </section>

        {/* Mocking and Patching */}
        <section className="py-topic-section">
          <h2>🎭 Mocking and Patching</h2>
          <p>
            Mocking allows you to replace parts of your system with mock objects during testing,
            useful for testing external dependencies like APIs, databases, or file systems.
          </p>

          <div className="code-example">
            <h4>Using unittest.mock:</h4>
            <pre><code>{`import unittest
from unittest.mock import Mock, patch, MagicMock
import requests

# Function to test
def get_user_data(user_id):
    response = requests.get(f"https://api.example.com/users/{user_id}")
    if response.status_code == 200:
        return response.json()
    return None

class TestUserAPI(unittest.TestCase):
    
    @patch('requests.get')
    def test_get_user_data_success(self, mock_get):
        # Mock successful API response
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            'id': 1, 
            'name': 'Alice', 
            'email': 'alice@example.com'
        }
        mock_get.return_value = mock_response
        
        result = get_user_data(1)
        
        assert result['name'] == 'Alice'
        assert result['email'] == 'alice@example.com'
        mock_get.assert_called_once_with("https://api.example.com/users/1")
    
    @patch('requests.get')
    def test_get_user_data_failure(self, mock_get):
        # Mock failed API response
        mock_response = Mock()
        mock_response.status_code = 404
        mock_get.return_value = mock_response
        
        result = get_user_data(999)
        
        assert result is None
        mock_get.assert_called_once_with("https://api.example.com/users/999")`}</code></pre>
          </div>

          <div className="code-example">
            <h4>pytest with pytest-mock:</h4>
            <pre><code>{`# Install: pip install pytest-mock

def test_get_user_data_with_mocker(mocker):
    # Mock using pytest-mock
    mock_get = mocker.patch('requests.get')
    mock_response = mocker.Mock()
    mock_response.status_code = 200
    mock_response.json.return_value = {'id': 1, 'name': 'Bob'}
    mock_get.return_value = mock_response
    
    result = get_user_data(1)
    
    assert result['name'] == 'Bob'
    mock_get.assert_called_once()`}</code></pre>
          </div>

          <h3>Database Mocking Example</h3>
          <div className="code-example">
            <pre><code>{`import sqlite3
from unittest.mock import patch, MagicMock

class UserRepository:
    def __init__(self, db_path):
        self.db_path = db_path
    
    def get_user(self, user_id):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
        result = cursor.fetchone()
        conn.close()
        return result

class TestUserRepository:
    
    @patch('sqlite3.connect')
    def test_get_user(self, mock_connect):
        # Mock database connection and cursor
        mock_conn = MagicMock()
        mock_cursor = MagicMock()
        mock_connect.return_value = mock_conn
        mock_conn.cursor.return_value = mock_cursor
        mock_cursor.fetchone.return_value = (1, 'Alice', 'alice@example.com')
        
        repo = UserRepository('/fake/path/db.sqlite')
        result = repo.get_user(1)
        
        assert result[1] == 'Alice'  # Name
        assert result[2] == 'alice@example.com'  # Email
        mock_cursor.execute.assert_called_once_with(
            "SELECT * FROM users WHERE id = ?", (1,)
        )`}</code></pre>
          </div>
        </section>

        {/* Testing Web Applications */}
        <section className="py-topic-section">
          <h2>🌐 Testing Web Applications</h2>
          
          <h3>Testing Flask Applications</h3>
          <div className="code-example">
            <pre><code>{`# app.py
from flask import Flask, jsonify, request

app = Flask(__name__)

users = [
    {'id': 1, 'name': 'Alice'},
    {'id': 2, 'name': 'Bob'}
]

@app.route('/users')
def get_users():
    return jsonify(users)

@app.route('/users/<int:user_id>')
def get_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    if user:
        return jsonify(user)
    return jsonify({'error': 'User not found'}), 404

# test_app.py
import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_get_users(client):
    response = client.get('/users')
    assert response.status_code == 200
    data = response.get_json()
    assert len(data) == 2
    assert data[0]['name'] == 'Alice'

def test_get_user_exists(client):
    response = client.get('/users/1')
    assert response.status_code == 200
    data = response.get_json()
    assert data['name'] == 'Alice'

def test_get_user_not_found(client):
    response = client.get('/users/999')
    assert response.status_code == 404
    data = response.get_json()
    assert 'error' in data`}</code></pre>
          </div>

          <h3>Testing FastAPI Applications</h3>
          <div className="code-example">
            <pre><code>{`# main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    id: int
    name: str
    email: str

users_db = [
    User(id=1, name="Alice", email="alice@example.com"),
    User(id=2, name="Bob", email="bob@example.com")
]

@app.get("/users", response_model=list[User])
def get_users():
    return users_db

@app.get("/users/{user_id}", response_model=User)
def get_user(user_id: int):
    user = next((u for u in users_db if u.id == user_id), None)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# test_main.py
import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_users():
    response = client.get("/users")
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 2
    assert data[0]["name"] == "Alice"

def test_get_user_exists():
    response = client.get("/users/1")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Alice"

def test_get_user_not_found():
    response = client.get("/users/999")
    assert response.status_code == 404
    assert response.json()["detail"] == "User not found"`}</code></pre>
          </div>
        </section>

        {/* Debugging Techniques */}
        <section className="py-topic-section">
          <h2>🐛 Debugging Techniques</h2>
          
          <h3>Python Debugger (pdb)</h3>
          <div className="code-example">
            <pre><code>{`import pdb

def calculate_average(numbers):
    pdb.set_trace()  # Debugger will stop here
    total = sum(numbers)
    count = len(numbers)
    return total / count

# Common pdb commands:
# n (next) - Execute next line
# s (step) - Step into function calls
# c (continue) - Continue execution
# l (list) - Show current code
# p <variable> - Print variable value
# pp <variable> - Pretty print variable
# q (quit) - Quit debugger

numbers = [1, 2, 3, 4, 5]
result = calculate_average(numbers)
print(f"Average: {result}")`}</code></pre>
          </div>

          <h3>Logging for Debugging</h3>
          <div className="code-example">
            <pre><code>{`import logging

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

logger = logging.getLogger(__name__)

def process_data(data):
    logger.debug(f"Processing data: {data}")
    
    try:
        result = []
        for item in data:
            logger.debug(f"Processing item: {item}")
            processed_item = item * 2
            result.append(processed_item)
            logger.info(f"Item processed successfully: {processed_item}")
        
        logger.info(f"All data processed. Result: {result}")
        return result
    
    except Exception as e:
        logger.error(f"Error processing data: {e}")
        raise

# Usage
data = [1, 2, 3, 4, 5]
result = process_data(data)`}</code></pre>
          </div>

          <h3>IDE Debugging</h3>
          <div className="code-example">
            <pre><code>{`# VS Code debugging configuration (.vscode/launch.json)
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python: Current File",
            "type": "python",
            "request": "launch",
            "program": "\${file}",
            "console": "integratedTerminal",
            "justMyCode": true
        },
        {
            "name": "Python: pytest",
            "type": "python",
            "request": "launch",
            "module": "pytest",
            "args": ["\${workspaceFolder}/tests"],
            "console": "integratedTerminal",
            "justMyCode": true
        }
    ]
}

# PyCharm debugging:
# - Set breakpoints by clicking in the gutter
# - Right-click and select "Debug" to run in debug mode
# - Use the debug toolbar to step through code`}</code></pre>
          </div>
        </section>

        {/* Code Coverage */}
        <section className="py-topic-section">
          <h2>📊 Code Coverage</h2>
          <p>
            Code coverage measures how much of your code is executed during testing.
            It helps identify untested parts of your codebase.
          </p>

          <div className="code-example">
            <h4>Installing and using coverage.py:</h4>
            <pre><code>{`# Install coverage
pip install coverage

# Run tests with coverage
coverage run -m pytest

# Generate coverage report
coverage report

# Generate HTML coverage report
coverage html

# View coverage in browser
# Open htmlcov/index.html`}</code></pre>
          </div>

          <div className="code-example">
            <h4>pytest-cov plugin:</h4>
            <pre><code>{`# Install pytest-cov
pip install pytest-cov

# Run tests with coverage
pytest --cov=myproject

# Generate HTML coverage report
pytest --cov=myproject --cov-report=html

# Set coverage threshold (fail if below 90%)
pytest --cov=myproject --cov-fail-under=90`}</code></pre>
          </div>

          <h3>Coverage Configuration</h3>
          <div className="code-example">
            <pre><code>{`# .coveragerc file
[run]
source = .
omit = 
    */venv/*
    */env/*
    */tests/*
    setup.py

[report]
exclude_lines =
    pragma: no cover
    def __repr__
    raise AssertionError
    raise NotImplementedError

[html]
directory = htmlcov`}</code></pre>
          </div>
        </section>

        {/* Performance Testing */}
        <section className="py-topic-section">
          <h2>⚡ Performance Testing</h2>
          
          <div className="code-example">
            <h4>Timing with pytest-benchmark:</h4>
            <pre><code>{`# Install pytest-benchmark
pip install pytest-benchmark

import pytest

def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

def fibonacci_optimized(n, memo={}):
    if n in memo:
        return memo[n]
    if n < 2:
        return n
    memo[n] = fibonacci_optimized(n-1, memo) + fibonacci_optimized(n-2, memo)
    return memo[n]

def test_fibonacci_performance(benchmark):
    result = benchmark(fibonacci, 20)
    assert result == 6765

def test_fibonacci_optimized_performance(benchmark):
    result = benchmark(fibonacci_optimized, 20)
    assert result == 6765`}</code></pre>
          </div>

          <div className="code-example">
            <h4>Memory profiling with memory_profiler:</h4>
            <pre><code>{`# Install memory_profiler
pip install memory_profiler

from memory_profiler import profile

@profile
def memory_heavy_function():
    # Create large lists
    big_list = [i for i in range(1000000)]
    big_dict = {i: i**2 for i in range(100000)}
    
    # Process data
    result = sum(big_list) + sum(big_dict.values())
    
    return result

if __name__ == '__main__':
    result = memory_heavy_function()
    print(f"Result: {result}")

# Run with: python -m memory_profiler script.py`}</code></pre>
          </div>
        </section>

        {/* Testing Best Practices */}
        <section className="py-topic-section">
          <h2>💡 Testing Best Practices</h2>
          
          <h3>Test Organization</h3>
          <ul>
            <li><strong>Test Structure:</strong> Follow AAA pattern (Arrange, Act, Assert)</li>
            <li><strong>Test Names:</strong> Use descriptive names that explain what is being tested</li>
            <li><strong>Test Independence:</strong> Each test should be independent and isolated</li>
            <li><strong>Test Data:</strong> Use fixtures and factories for test data</li>
            <li><strong>File Organization:</strong> Mirror your project structure in tests</li>
          </ul>

          <div className="code-example">
            <h4>Test Structure Example:</h4>
            <pre><code>{`def test_user_registration_with_valid_data():
    # Arrange
    user_data = {
        'username': 'testuser',
        'email': 'test@example.com',
        'password': 'securepassword'
    }
    
    # Act
    user = create_user(user_data)
    
    # Assert
    assert user.username == 'testuser'
    assert user.email == 'test@example.com'
    assert user.password != 'securepassword'  # Should be hashed
    assert user.is_active is True`}</code></pre>
          </div>

          <h3>Project Structure for Tests</h3>
          <div className="code-example">
            <pre><code>{`myproject/
├── src/
│   ├── __init__.py
│   ├── models/
│   │   ├── __init__.py
│   │   └── user.py
│   ├── services/
│   │   ├── __init__.py
│   │   └── auth.py
│   └── utils/
│       ├── __init__.py
│       └── validators.py
├── tests/
│   ├── __init__.py
│   ├── conftest.py          # pytest fixtures
│   ├── test_models/
│   │   ├── __init__.py
│   │   └── test_user.py
│   ├── test_services/
│   │   ├── __init__.py
│   │   └── test_auth.py
│   └── test_utils/
│       ├── __init__.py
│       └── test_validators.py
├── pytest.ini
└── requirements.txt`}</code></pre>
          </div>

          <h3>Configuration Files</h3>
          <div className="code-example">
            <pre><code>{`# pytest.ini
[tool:pytest]
testpaths = tests
python_files = test_*.py
python_classes = Test*
python_functions = test_*
addopts = 
    --strict-markers
    --disable-warnings
    --cov=src
    --cov-report=html
    --cov-report=term-missing
markers =
    slow: marks tests as slow
    integration: marks tests as integration tests
    unit: marks tests as unit tests`}</code></pre>
          </div>
        </section>

        {/* Continuous Integration */}
        <section className="py-topic-section">
          <h2>🔄 Continuous Integration</h2>
          
          <div className="code-example">
            <h4>GitHub Actions Configuration:</h4>
            <pre><code>{`# .github/workflows/tests.yml
name: Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: [3.8, 3.9, '3.10', '3.11']

    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Python \${{ matrix.python-version }}
      uses: actions/setup-python@v3
      with:
        python-version: \${{ matrix.python-version }}
    
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        pip install pytest pytest-cov
    
    - name: Run tests
      run: |
        pytest --cov=src --cov-report=xml
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage.xml
        flags: unittests
        name: codecov-umbrella`}</code></pre>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🏋️ Practice Exercises</h2>
          
          <div className="exercise-box">
            <h3>Exercise 1: Basic Testing</h3>
            <p>Create a simple calculator class with methods for basic operations. Write comprehensive tests using both unittest and pytest:</p>
            <ul>
              <li>Addition, subtraction, multiplication, division</li>
              <li>Handle edge cases (division by zero, negative numbers)</li>
              <li>Test with parametrized inputs</li>
              <li>Achieve 100% code coverage</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>Exercise 2: TDD Practice</h3>
            <p>Use TDD to build a simple library management system:</p>
            <ul>
              <li>Book class with title, author, ISBN</li>
              <li>Library class to manage books</li>
              <li>Methods: add_book, remove_book, find_book, list_books</li>
              <li>Write tests first, then implement functionality</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>Exercise 3: Web API Testing</h3>
            <p>Create a Flask/FastAPI application with a RESTful API and write comprehensive tests:</p>
            <ul>
              <li>CRUD operations for a resource (users, products, etc.)</li>
              <li>Test all endpoints with different scenarios</li>
              <li>Mock external dependencies (database, APIs)</li>
              <li>Test authentication and error handling</li>
            </ul>
          </div>
        </section>

        {/* Resources */}
        <section className="py-topic-section">
          <h2>📚 Additional Resources</h2>
          
          <h3>Documentation and Guides</h3>
          <ul>
            <li><a href="https://docs.python.org/3/library/unittest.html" target="_blank" rel="noopener noreferrer">Python unittest Documentation</a></li>
            <li><a href="https://docs.pytest.org/" target="_blank" rel="noopener noreferrer">pytest Documentation</a></li>
            <li><a href="https://coverage.readthedocs.io/" target="_blank" rel="noopener noreferrer">Coverage.py Documentation</a></li>
            <li><a href="https://docs.python.org/3/library/pdb.html" target="_blank" rel="noopener noreferrer">Python Debugger Documentation</a></li>
          </ul>

          <h3>Testing Libraries and Tools</h3>
          <ul>
            <li><strong>pytest-mock:</strong> Mock objects for pytest</li>
            <li><strong>pytest-django:</strong> Django testing with pytest</li>
            <li><strong>pytest-flask:</strong> Flask testing utilities</li>
            <li><strong>factory_boy:</strong> Test data generation</li>
            <li><strong>responses:</strong> Mock HTTP requests</li>
            <li><strong>freezegun:</strong> Mock datetime for testing</li>
          </ul>

          <h3>Learning Resources</h3>
          <ul>
            <li>Test-Driven Development with Python (Book by Harry Percival)</li>
            <li>Python Testing course on Test Automation University</li>
            <li>Real Python testing tutorials</li>
            <li>YouTube: Python testing tutorials by Corey Schafer</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default TestingPythonCode;
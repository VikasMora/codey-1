import React from 'react';
import '../Navbarweb.css';

function Decorators() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>✨ Decorators</h1>
        <p className="py-topic-subtitle">
          Learn about function decorators and their applications
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>✨ What are Decorators?</h2>
          <p>
            Decorators in Python are a powerful feature that allows you to modify or enhance the behavior 
            of functions, methods, or classes without permanently modifying their code. They provide a clean, 
            readable way to wrap functionality around existing code, implementing cross-cutting concerns 
            like logging, authentication, caching, and timing. Decorators use the @ symbol and are applied 
            above the function or class definition.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Decorator Concepts:</h3>
            <ul>
              <li><strong>Higher-Order Functions:</strong> Functions that take other functions as arguments</li>
              <li><strong>Wrapper Functions:</strong> Inner functions that wrap around the original function</li>
              <li><strong>@ Syntax:</strong> Syntactic sugar for applying decorators</li>
              <li><strong>Function Metadata:</strong> Preserving original function information</li>
              <li><strong>Decorator Stacking:</strong> Applying multiple decorators to one function</li>
              <li><strong>Parameterized Decorators:</strong> Decorators that accept arguments</li>
            </ul>
          </div>
        </section>

        {/* Basic Function Decorators */}
        <section className="py-topic-section">
          <h2>🎯 Basic Function Decorators</h2>
          
          <div className="py-code-block">
            <pre>{`# Basic function decorators
print("Basic Function Decorators:")

# Simple decorator without arguments
def simple_decorator(func):
    """A basic decorator that wraps a function."""
    def wrapper(*args, **kwargs):
        print(f"Before calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"After calling {func.__name__}")
        return result
    return wrapper

# Apply decorator using @ syntax
@simple_decorator
def greet(name):
    """Greet someone by name."""
    print(f"Hello, {name}!")
    return f"Greeting for {name}"

# Test the decorated function
print("\\nTesting simple decorator:")
result = greet("Alice")
print(f"Function returned: {result}")

# Equivalent without @ syntax (less readable)
def greet_manual(name):
    print(f"Hello, {name}!")
    return f"Greeting for {name}"

greet_manual = simple_decorator(greet_manual)
print("\\nManual decoration (equivalent):")
greet_manual("Bob")

# Timing decorator
import time
import functools

def timing_decorator(func):
    """Decorator to measure function execution time."""
    @functools.wraps(func)  # Preserves original function metadata
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        execution_time = end_time - start_time
        print(f"{func.__name__} executed in {execution_time:.4f} seconds")
        return result
    return wrapper

@timing_decorator
def slow_function():
    """Simulate a slow operation."""
    time.sleep(0.1)  # Sleep for 100ms
    return "Operation completed"

print("\\nTesting timing decorator:")
result = slow_function()

@timing_decorator
def calculate_fibonacci(n):
    """Calculate nth Fibonacci number (inefficient recursive version)."""
    if n <= 1:
        return n
    return calculate_fibonacci(n - 1) + calculate_fibonacci(n - 2)

print("\\nFibonacci with timing:")
fib_result = calculate_fibonacci(10)
print(f"Fibonacci(10) = {fib_result}")

# Logging decorator
def logging_decorator(func):
    """Decorator to log function calls and results."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # Log function call
        args_str = ', '.join([str(arg) for arg in args])
        kwargs_str = ', '.join([f"{k}={v}" for k, v in kwargs.items()])
        all_args = ', '.join(filter(None, [args_str, kwargs_str]))
        
        print(f"📞 Calling {func.__name__}({all_args})")
        
        try:
            result = func(*args, **kwargs)
            print(f"✅ {func.__name__} returned: {result}")
            return result
        except Exception as e:
            print(f"❌ {func.__name__} raised exception: {e}")
            raise
    return wrapper

@logging_decorator
def divide(a, b):
    """Divide two numbers."""
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

@logging_decorator
def multiply(a, b, precision=2):
    """Multiply two numbers with specified precision."""
    result = a * b
    return round(result, precision)

print("\\nTesting logging decorator:")
print("Valid division:")
divide_result = divide(10, 2)

print("\\nMultiplication with keyword args:")
multiply_result = multiply(3.14159, 2, precision=3)

print("\\nError handling:")
try:
    divide(10, 0)
except ValueError as e:
    print(f"Caught error: {e}")

# Validation decorator
def validate_types(*expected_types):
    """Decorator factory to validate function argument types."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Check positional arguments
            for i, (arg, expected_type) in enumerate(zip(args, expected_types)):
                if not isinstance(arg, expected_type):
                    raise TypeError(
                        f"Argument {i+1} of {func.__name__} must be {expected_type.__name__}, "
                        f"got {type(arg).__name__}"
                    )
            
            return func(*args, **kwargs)
        return wrapper
    return decorator

@validate_types(str, int)
def repeat_string(text, count):
    """Repeat a string a specified number of times."""
    return text * count

@validate_types(int, int)
def add_numbers(a, b):
    """Add two integers."""
    return a + b

print("\\nTesting validation decorator:")
print("Valid calls:")
result1 = repeat_string("Hello ", 3)
print(f"repeat_string('Hello ', 3) = '{result1}'")

result2 = add_numbers(5, 7)
print(f"add_numbers(5, 7) = {result2}")

print("\\nInvalid calls:")
try:
    repeat_string(123, 3)  # First arg should be string
except TypeError as e:
    print(f"Type error: {e}")

try:
    add_numbers("5", 7)  # First arg should be int
except TypeError as e:
    print(f"Type error: {e}")

# Caching decorator (simple memoization)
def memoize(func):
    """Simple memoization decorator."""
    cache = {}
    
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # Create cache key from arguments
        key = str(args) + str(sorted(kwargs.items()))
        
        if key in cache:
            print(f"💾 Cache hit for {func.__name__}{args}")
            return cache[key]
        
        print(f"🔄 Computing {func.__name__}{args}")
        result = func(*args, **kwargs)
        cache[key] = result
        return result
    
    # Add cache inspection methods
    wrapper.cache = cache
    wrapper.cache_clear = cache.clear
    
    return wrapper

@memoize
def expensive_calculation(n):
    """Simulate an expensive calculation."""
    time.sleep(0.1)  # Simulate processing time
    return n ** 2 + 2 * n + 1

print("\\nTesting memoization decorator:")
print("First calls (will compute):")
result1 = expensive_calculation(5)
result2 = expensive_calculation(10)
print(f"expensive_calculation(5) = {result1}")
print(f"expensive_calculation(10) = {result2}")

print("\\nSecond calls (will use cache):")
result3 = expensive_calculation(5)  # Cache hit
result4 = expensive_calculation(10) # Cache hit
print(f"expensive_calculation(5) = {result3}")
print(f"expensive_calculation(10) = {result4}")

print(f"\\nCache contents: {expensive_calculation.cache}")

# Retry decorator
def retry(max_attempts=3, delay=1):
    """Decorator to retry function calls on failure."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            last_exception = None
            
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    last_exception = e
                    if attempt < max_attempts - 1:
                        print(f"🔄 Attempt {attempt + 1} failed: {e}. Retrying in {delay}s...")
                        time.sleep(delay)
                    else:
                        print(f"❌ All {max_attempts} attempts failed.")
            
            raise last_exception
        return wrapper
    return decorator

# Simulate unreliable function
import random

@retry(max_attempts=3, delay=0.1)
def unreliable_function():
    """Function that randomly fails."""
    if random.random() < 0.7:  # 70% chance of failure
        raise ConnectionError("Network connection failed")
    return "Success!"

print("\\nTesting retry decorator:")
try:
    result = unreliable_function()
    print(f"Function succeeded: {result}")
except ConnectionError as e:
    print(f"Function failed after all retries: {e}")

# Authentication decorator
def require_auth(required_role="user"):
    """Decorator to check user authentication and authorization."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Simulate getting current user (in real app, this would check session/token)
            current_user = kwargs.get('current_user') or getattr(wrapper, '_test_user', None)
            
            if not current_user:
                raise PermissionError("Authentication required")
            
            if required_role == "admin" and current_user.get("role") != "admin":
                raise PermissionError("Admin access required")
            
            return func(*args, **kwargs)
        return wrapper
    return decorator

@require_auth()
def view_profile(user_id, current_user=None):
    """View user profile (requires authentication)."""
    return f"Profile for user {user_id}"

@require_auth("admin")
def delete_user(user_id, current_user=None):
    """Delete user (requires admin role)."""
    return f"User {user_id} deleted"

print("\\nTesting authentication decorator:")

# Set up test users
regular_user = {"id": 1, "name": "Alice", "role": "user"}
admin_user = {"id": 2, "name": "Bob", "role": "admin"}

print("Regular user accessing profile:")
try:
    result = view_profile(123, current_user=regular_user)
    print(f"✅ {result}")
except PermissionError as e:
    print(f"❌ {e}")

print("\\nRegular user trying admin action:")
try:
    result = delete_user(456, current_user=regular_user)
    print(f"✅ {result}")
except PermissionError as e:
    print(f"❌ {e}")

print("\\nAdmin user performing admin action:")
try:
    result = delete_user(456, current_user=admin_user)
    print(f"✅ {result}")
except PermissionError as e:
    print(f"❌ {e}")

print("\\nUnauthenticated access:")
try:
    result = view_profile(789)
    print(f"✅ {result}")
except PermissionError as e:
    print(f"❌ {e}")`}</pre>
          </div>
        </section>

        {/* Decorator Patterns */}
        <section className="py-topic-section">
          <h2>🏗️ Advanced Decorator Patterns</h2>
          
          <div className="py-code-block">
            <pre>{`# Advanced decorator patterns and techniques
print("Advanced Decorator Patterns:")

# Decorator with optional arguments
def debug(enabled=True):
    """Decorator with optional arguments for debugging."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            if enabled:
                print(f"🐛 DEBUG: Calling {func.__name__} with args={args}, kwargs={kwargs}")
            
            result = func(*args, **kwargs)
            
            if enabled:
                print(f"🐛 DEBUG: {func.__name__} returned {result}")
            
            return result
        return wrapper
    
    # Handle both @debug and @debug() syntax
    if callable(enabled):
        func = enabled
        enabled = True
        return decorator(func)
    
    return decorator

# Can be used with or without parentheses
@debug  # Same as @debug()
def function1(x, y):
    return x + y

@debug(enabled=True)
def function2(x, y):
    return x * y

@debug(enabled=False)
def function3(x, y):
    return x - y

print("\\nTesting optional argument decorator:")
print("Debug enabled (default):")
result1 = function1(3, 4)

print("\\nDebug explicitly enabled:")
result2 = function2(3, 4)

print("\\nDebug disabled:")
result3 = function3(3, 4)

# Decorator factory with configuration
class RateLimiter:
    """Rate limiting decorator with configurable limits."""
    
    def __init__(self, max_calls=5, time_window=60):
        self.max_calls = max_calls
        self.time_window = time_window
        self.calls = []
    
    def __call__(self, func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            current_time = time.time()
            
            # Remove old calls outside the time window
            self.calls = [call_time for call_time in self.calls 
                         if current_time - call_time < self.time_window]
            
            # Check if limit exceeded
            if len(self.calls) >= self.max_calls:
                raise RuntimeError(
                    f"Rate limit exceeded: {self.max_calls} calls per {self.time_window} seconds"
                )
            
            # Record this call
            self.calls.append(current_time)
            
            print(f"🚦 Rate limit: {len(self.calls)}/{self.max_calls} calls used")
            return func(*args, **kwargs)
        
        return wrapper

# Apply rate limiting
@RateLimiter(max_calls=3, time_window=5)
def api_call(data):
    """Simulate an API call."""
    return f"API response for: {data}"

print("\\nTesting rate limiter:")
try:
    for i in range(5):
        result = api_call(f"request_{i+1}")
        print(f"✅ {result}")
        time.sleep(0.1)
except RuntimeError as e:
    print(f"❌ {e}")

# Property-like decorator for methods
def lazy_property(func):
    """Decorator that makes a method behave like a cached property."""
    attr_name = '_lazy_' + func.__name__
    
    @property
    @functools.wraps(func)
    def wrapper(self):
        if not hasattr(self, attr_name):
            setattr(self, attr_name, func(self))
        return getattr(self, attr_name)
    
    return wrapper

class DataProcessor:
    """Example class using lazy properties."""
    
    def __init__(self, data):
        self.data = data
    
    @lazy_property
    def processed_data(self):
        """Expensive data processing (computed only once)."""
        print("🔄 Processing data (this should only happen once)...")
        time.sleep(0.1)  # Simulate processing time
        return [x * 2 for x in self.data]
    
    @lazy_property
    def data_summary(self):
        """Data summary statistics."""
        print("📊 Computing summary statistics...")
        processed = self.processed_data  # This will use cached value
        return {
            'count': len(processed),
            'sum': sum(processed),
            'avg': sum(processed) / len(processed) if processed else 0
        }

print("\\nTesting lazy property decorator:")
processor = DataProcessor([1, 2, 3, 4, 5])

print("First access to processed_data:")
result1 = processor.processed_data
print(f"Processed data: {result1}")

print("\\nSecond access to processed_data (should use cache):")
result2 = processor.processed_data
print(f"Processed data: {result2}")

print("\\nAccessing data summary:")
summary = processor.data_summary
print(f"Summary: {summary}")

# Context manager decorator
from contextlib import contextmanager

def contextual_decorator(enter_msg="Entering", exit_msg="Exiting"):
    """Decorator that provides context management around function calls."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            print(f"🚪 {enter_msg} {func.__name__}")
            try:
                result = func(*args, **kwargs)
                print(f"✅ {func.__name__} completed successfully")
                return result
            except Exception as e:
                print(f"❌ {func.__name__} failed with error: {e}")
                raise
            finally:
                print(f"🚪 {exit_msg} {func.__name__}")
        
        return wrapper
    return decorator

@contextual_decorator("Starting operation", "Operation finished")
def risky_operation(success=True):
    """Operation that might fail."""
    if not success:
        raise ValueError("Operation failed")
    return "Operation successful"

print("\\nTesting contextual decorator:")
print("Successful operation:")
result = risky_operation(True)

print("\\nFailing operation:")
try:
    risky_operation(False)
except ValueError:
    pass

# Decorator chaining and order
def decorator_a(func):
    """First decorator."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print("🔵 Decorator A - Before")
        result = func(*args, **kwargs)
        print("🔵 Decorator A - After")
        return result
    return wrapper

def decorator_b(func):
    """Second decorator."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print("🟡 Decorator B - Before")
        result = func(*args, **kwargs)
        print("🟡 Decorator B - After")
        return result
    return wrapper

def decorator_c(func):
    """Third decorator."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print("🟢 Decorator C - Before")
        result = func(*args, **kwargs)
        print("🟢 Decorator C - After")
        return result
    return wrapper

# Multiple decorators are applied bottom-to-top
@decorator_a
@decorator_b
@decorator_c
def decorated_function():
    """Function with multiple decorators."""
    print("🎯 Original function executing")
    return "Function result"

print("\\nTesting decorator chaining (order matters!):")
print("Decorators applied: @decorator_a @decorator_b @decorator_c")
print("Execution order: C -> B -> A -> function -> A -> B -> C")
result = decorated_function()
print(f"Final result: {result}")

# Parameterized decorator with validation
def validate_and_convert(*type_converters, **named_converters):
    """Decorator that validates and converts function arguments."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Convert positional arguments
            converted_args = []
            for i, (arg, converter) in enumerate(zip(args, type_converters)):
                try:
                    converted_args.append(converter(arg))
                except (ValueError, TypeError) as e:
                    raise TypeError(f"Cannot convert argument {i+1} to {converter.__name__}: {e}")
            
            # Convert remaining positional arguments as-is
            converted_args.extend(args[len(type_converters):])
            
            # Convert keyword arguments
            converted_kwargs = {}
            for key, value in kwargs.items():
                if key in named_converters:
                    try:
                        converted_kwargs[key] = named_converters[key](value)
                    except (ValueError, TypeError) as e:
                        raise TypeError(f"Cannot convert {key} to {named_converters[key].__name__}: {e}")
                else:
                    converted_kwargs[key] = value
            
            return func(*converted_args, **converted_kwargs)
        return wrapper
    return decorator

@validate_and_convert(int, float, precision=int)
def calculate_power(base, exponent, precision=2):
    """Calculate base^exponent with specified decimal precision."""
    result = base ** exponent
    return round(result, precision)

print("\\nTesting validation and conversion decorator:")
print("String inputs that will be converted:")
result1 = calculate_power("2", "3.5", precision="4")
print(f"calculate_power('2', '3.5', precision='4') = {result1}")

print("\\nDirect numeric inputs:")
result2 = calculate_power(3, 2.5, precision=1)
print(f"calculate_power(3, 2.5, precision=1) = {result2}")

try:
    # This will fail conversion
    calculate_power("invalid", 2)
except TypeError as e:
    print(f"\\nConversion error: {e}")

# Decorator registry pattern
class DecoratorRegistry:
    """Registry for managing and applying multiple decorators."""
    
    def __init__(self):
        self.decorators = []
    
    def register(self, decorator):
        """Register a decorator."""
        self.decorators.append(decorator)
        return decorator
    
    def apply_all(self, func):
        """Apply all registered decorators to a function."""
        for decorator in reversed(self.decorators):  # Apply in reverse order
            func = decorator(func)
        return func
    
    def __call__(self, func):
        """Allow the registry to be used as a decorator."""
        return self.apply_all(func)

# Create registry and register decorators
api_decorators = DecoratorRegistry()

@api_decorators.register
def json_response(func):
    """Convert return value to JSON-like string."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return f"JSON: {{'data': {result}}}"
    return wrapper

@api_decorators.register
def log_request(func):
    """Log API requests."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"📝 API Request: {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

# Apply all registered decorators
@api_decorators
def get_user_data(user_id):
    """Get user data from API."""
    return f"User data for ID: {user_id}"

print("\\nTesting decorator registry:")
result = get_user_data(12345)
print(f"API Response: {result}")

print("\\nRegistered decorators:")
for i, decorator in enumerate(api_decorators.decorators):
    print(f"  {i+1}. {decorator.__name__}")`}</pre>
          </div>
        </section>

        {/* Class Decorators */}
        <section className="py-topic-section">
          <h2>🏛️ Class Decorators</h2>
          
          <div className="py-code-block">
            <pre>{`# Class decorators and method decorators
print("Class Decorators and Method Decorators:")

# Built-in method decorators
class BankAccount:
    """Example class demonstrating built-in decorators."""
    
    def __init__(self, owner, balance=0):
        self._owner = owner
        self._balance = balance
        self._transaction_history = []
    
    @property
    def balance(self):
        """Get account balance."""
        return self._balance
    
    @balance.setter
    def balance(self, amount):
        """Set account balance with validation."""
        if amount < 0:
            raise ValueError("Balance cannot be negative")
        old_balance = self._balance
        self._balance = amount
        self._transaction_history.append(f"Balance changed from {old_balance} to {amount}")
    
    @property
    def owner(self):
        """Get account owner (read-only)."""
        return self._owner
    
    @staticmethod
    def calculate_interest(principal, rate, time):
        """Calculate simple interest (utility function)."""
        return principal * rate * time / 100
    
    @classmethod
    def create_savings_account(cls, owner, initial_deposit=100):
        """Create a savings account with minimum deposit."""
        if initial_deposit < 100:
            raise ValueError("Savings account requires minimum $100 deposit")
        return cls(owner, initial_deposit)
    
    def deposit(self, amount):
        """Deposit money to account."""
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        self._balance += amount
        self._transaction_history.append(f"Deposited {amount}")
        return self._balance
    
    def withdraw(self, amount):
        """Withdraw money from account."""
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")
        if amount > self._balance:
            raise ValueError("Insufficient funds")
        self._balance -= amount
        self._transaction_history.append(f"Withdrew {amount}")
        return self._balance
    
    @property
    def transaction_history(self):
        """Get transaction history."""
        return self._transaction_history.copy()

print("Testing built-in decorators:")

# Test property decorators
account = BankAccount("Alice", 1000)
print(f"Owner: {account.owner}")
print(f"Initial balance: {account.balance}")

# Test property setter
account.balance = 1500
print(f"Updated balance: {account.balance}")

try:
    account.balance = -100  # Should raise error
except ValueError as e:
    print(f"Balance validation error: {e}")

# Test static method
interest = BankAccount.calculate_interest(1000, 5, 2)
print(f"Interest calculation: {interest}")

# Test class method
savings = BankAccount.create_savings_account("Bob", 500)
print(f"Savings account created for {savings.owner} with balance {savings.balance}")

# Custom class decorator
def singleton(cls):
    """Decorator to make a class a singleton."""
    instances = {}
    
    @functools.wraps(cls)
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    
    return get_instance

@singleton
class DatabaseConnection:
    """Singleton database connection."""
    
    def __init__(self, host="localhost", port=5432):
        self.host = host
        self.port = port
        self.connected = False
        print(f"🔌 Creating database connection to {host}:{port}")
    
    def connect(self):
        """Connect to database."""
        self.connected = True
        print(f"📡 Connected to {self.host}:{self.port}")
    
    def disconnect(self):
        """Disconnect from database."""
        self.connected = False
        print(f"📡 Disconnected from {self.host}:{self.port}")

print("\\nTesting singleton decorator:")
print("Creating first connection:")
db1 = DatabaseConnection()
db1.connect()

print("\\nCreating second connection (should be same instance):")
db2 = DatabaseConnection("different-host", 3306)  # Args ignored for existing instance
print(f"Same instance? {db1 is db2}")
print(f"Connection host: {db2.host}")  # Still localhost from first instance

# Dataclass-like decorator
def dataclass_like(cls):
    """Simple dataclass-like decorator."""
    
    # Get type hints for automatic __init__
    if hasattr(cls, '__annotations__'):
        annotations = cls.__annotations__
    else:
        annotations = {}
    
    # Create __init__ method
    def __init__(self, **kwargs):
        for field_name, field_type in annotations.items():
            if field_name in kwargs:
                value = kwargs[field_name]
                # Basic type checking
                if not isinstance(value, field_type):
                    raise TypeError(f"{field_name} must be {field_type.__name__}")
                setattr(self, field_name, value)
            else:
                # Set default value based on type
                if field_type == str:
                    setattr(self, field_name, "")
                elif field_type == int:
                    setattr(self, field_name, 0)
                elif field_type == list:
                    setattr(self, field_name, [])
                else:
                    setattr(self, field_name, None)
    
    # Create __repr__ method
    def __repr__(self):
        field_strs = []
        for field_name in annotations:
            value = getattr(self, field_name, None)
            field_strs.append(f"{field_name}={value!r}")
        return f"{cls.__name__}({', '.join(field_strs)})"
    
    # Create __eq__ method
    def __eq__(self, other):
        if not isinstance(other, cls):
            return False
        for field_name in annotations:
            if getattr(self, field_name) != getattr(other, field_name):
                return False
        return True
    
    # Attach methods to class
    cls.__init__ = __init__
    cls.__repr__ = __repr__
    cls.__eq__ = __eq__
    
    return cls

@dataclass_like
class Person:
    """Person class with automatic methods."""
    name: str
    age: int
    email: str

@dataclass_like
class Product:
    """Product class with automatic methods."""
    name: str
    price: int
    tags: list

print("\\nTesting dataclass-like decorator:")
person1 = Person(name="Alice", age=30, email="alice@example.com")
person2 = Person(name="Bob", age=25, email="bob@example.com")
person3 = Person(name="Alice", age=30, email="alice@example.com")

print(f"Person 1: {person1}")
print(f"Person 2: {person2}")
print(f"Person 1 == Person 3: {person1 == person3}")
print(f"Person 1 == Person 2: {person1 == person2}")

product = Product(name="Laptop", price=999, tags=["electronics", "computers"])
print(f"Product: {product}")

# Method decorator for timing
def time_method(func):
    """Decorator specifically for timing class methods."""
    @functools.wraps(func)
    def wrapper(self, *args, **kwargs):
        start_time = time.time()
        result = func(self, *args, **kwargs)
        end_time = time.time()
        class_name = self.__class__.__name__
        print(f"⏱️  {class_name}.{func.__name__} took {end_time - start_time:.4f}s")
        return result
    return wrapper

class DataAnalyzer:
    """Example class with timed methods."""
    
    def __init__(self, data):
        self.data = data
    
    @time_method
    def calculate_sum(self):
        """Calculate sum of data."""
        time.sleep(0.01)  # Simulate processing
        return sum(self.data)
    
    @time_method
    def calculate_average(self):
        """Calculate average of data."""
        time.sleep(0.02)  # Simulate processing
        return sum(self.data) / len(self.data) if self.data else 0
    
    @time_method
    def find_max(self):
        """Find maximum value."""
        time.sleep(0.015)  # Simulate processing
        return max(self.data) if self.data else None

print("\\nTesting method timing decorator:")
analyzer = DataAnalyzer([1, 2, 3, 4, 5, 10, 15, 20])
total = analyzer.calculate_sum()
avg = analyzer.calculate_average()
maximum = analyzer.find_max()

print(f"Sum: {total}, Average: {avg:.2f}, Max: {maximum}")

# Deprecation decorator
import warnings

def deprecated(reason="This function is deprecated"):
    """Decorator to mark functions as deprecated."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            warnings.warn(
                f"{func.__name__} is deprecated: {reason}",
                category=DeprecationWarning,
                stacklevel=2
            )
            return func(*args, **kwargs)
        return wrapper
    return decorator

class Calculator:
    """Calculator with some deprecated methods."""
    
    def add(self, a, b):
        """Add two numbers."""
        return a + b
    
    @deprecated("Use add() method instead")
    def sum_numbers(self, a, b):
        """Old method for adding numbers."""
        return self.add(a, b)
    
    @deprecated("This method has security issues. Use secure_divide() instead")
    def divide(self, a, b):
        """Unsafe division method."""
        return a / b  # No error checking
    
    def secure_divide(self, a, b):
        """Safe division with error checking."""
        if b == 0:
            raise ValueError("Division by zero")
        return a / b

print("\\nTesting deprecation decorator:")
calc = Calculator()

# These will show deprecation warnings
with warnings.catch_warnings(record=True) as w:
    warnings.simplefilter("always")  # Cause all warnings to always be triggered
    
    result1 = calc.sum_numbers(5, 3)
    result2 = calc.divide(10, 2)
    
    for warning in w:
        print(f"⚠️  Warning: {warning.message}")

print(f"Results: {result1}, {result2}")

# Class decorator for automatic string representation
def auto_repr(*fields):
    """Decorator to automatically generate __repr__ for specified fields."""
    def decorator(cls):
        def __repr__(self):
            if fields:
                # Use specified fields
                field_values = []
                for field in fields:
                    if hasattr(self, field):
                        value = getattr(self, field)
                        field_values.append(f"{field}={value!r}")
                field_str = ", ".join(field_values)
            else:
                # Use all public attributes
                field_values = []
                for attr_name in dir(self):
                    if not attr_name.startswith('_') and not callable(getattr(self, attr_name)):
                        value = getattr(self, attr_name)
                        field_values.append(f"{attr_name}={value!r}")
                field_str = ", ".join(field_values)
            
            return f"{cls.__name__}({field_str})"
        
        cls.__repr__ = __repr__
        return cls
    
    return decorator

@auto_repr("name", "version")
class SoftwarePackage:
    """Software package with automatic repr."""
    
    def __init__(self, name, version, description=""):
        self.name = name
        self.version = version
        self.description = description
        self._internal_id = id(self)  # Private attribute (won't be shown)
    
    def install(self):
        """Install the package."""
        return f"Installing {self.name} v{self.version}"

@auto_repr()  # Show all public attributes
class Configuration:
    """Configuration class with all public attributes shown."""
    
    def __init__(self):
        self.debug = False
        self.port = 8080
        self.host = "localhost"
        self._secret_key = "hidden"  # Won't be shown

print("\\nTesting auto repr decorator:")
package = SoftwarePackage("MyApp", "1.2.3", "A sample application")
print(f"Package: {package}")

config = Configuration()
config.timeout = 30  # Add another public attribute
print(f"Configuration: {config}")

# Validation decorator for class methods
def validate_method(*validators):
    """Decorator to validate method arguments."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(self, *args, **kwargs):
            # Apply validators to arguments
            for i, (arg, validator) in enumerate(zip(args, validators)):
                if not validator(arg):
                    raise ValueError(f"Argument {i+1} failed validation in {func.__name__}")
            
            return func(self, *args, **kwargs)
        return wrapper
    return decorator

class UserManager:
    """User management class with validated methods."""
    
    def __init__(self):
        self.users = {}
    
    @validate_method(
        lambda name: isinstance(name, str) and len(name) > 0,
        lambda age: isinstance(age, int) and 0 <= age <= 150,
        lambda email: isinstance(email, str) and '@' in email
    )
    def add_user(self, name, age, email):
        """Add user with validation."""
        user_id = len(self.users) + 1
        self.users[user_id] = {"name": name, "age": age, "email": email}
        return user_id
    
    @validate_method(lambda user_id: isinstance(user_id, int) and user_id > 0)
    def get_user(self, user_id):
        """Get user by ID with validation."""
        return self.users.get(user_id)

print("\\nTesting method validation decorator:")
user_manager = UserManager()

print("Valid user addition:")
user_id = user_manager.add_user("Alice", 30, "alice@example.com")
print(f"Added user with ID: {user_id}")

print("\\nInvalid user additions:")
try:
    user_manager.add_user("", 30, "alice@example.com")  # Empty name
except ValueError as e:
    print(f"❌ Validation error: {e}")

try:
    user_manager.add_user("Bob", 200, "bob@example.com")  # Invalid age
except ValueError as e:
    print(f"❌ Validation error: {e}")

try:
    user_manager.add_user("Charlie", 25, "invalid-email")  # Invalid email
except ValueError as e:
    print(f"❌ Validation error: {e}")

print("\\nValid user retrieval:")
user = user_manager.get_user(1)
print(f"Retrieved user: {user}")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Decorator Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Best Practices:</h3>
            <ul>
              <li><strong>Use functools.wraps:</strong> Preserve original function metadata</li>
              <li><strong>Handle *args and **kwargs:</strong> Make decorators flexible for any function signature</li>
              <li><strong>Keep decorators simple:</strong> Each decorator should have a single responsibility</li>
              <li><strong>Document decorator behavior:</strong> Clear docstrings and examples</li>
              <li><strong>Consider performance:</strong> Minimize overhead in frequently called functions</li>
              <li><strong>Use appropriate patterns:</strong> Choose between function, class, or parameterized decorators</li>
              <li><strong>Test decorated functions:</strong> Ensure decorators don't break original functionality</li>
              <li><strong>Be mindful of order:</strong> When stacking decorators, order matters</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a decorator that measures and logs function execution time</li>
              <li>Build a caching decorator with TTL (time-to-live) expiration</li>
              <li>Design a rate limiting decorator for API endpoints</li>
              <li>Create a decorator that automatically retries failed functions</li>
              <li>Build a validation decorator that checks function argument types</li>
              <li>Design a decorator for access control and authentication</li>
              <li>Create a decorator that converts function output to JSON</li>
              <li>Build a profiling decorator that tracks memory usage</li>
              <li>Design a decorator registry system for plugin architecture</li>
              <li>Create a decorator that automatically logs function calls to a database</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Decorators;
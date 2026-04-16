import React from 'react';
import '../Navbarweb.css';

function ErrorHandling() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>⚠️ Error Handling</h1>
        <p className="py-topic-subtitle">
          Master exception handling and debugging in Python
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>⚠️ What is Error Handling?</h2>
          <p>
            Error handling in Python allows you to gracefully manage and respond to runtime errors 
            that occur during program execution. Instead of letting your program crash when something 
            goes wrong, you can catch exceptions, handle them appropriately, and continue execution 
            or provide meaningful error messages to users.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Concepts:</h3>
            <ul>
              <li><strong>Exception:</strong> An error that occurs during program execution</li>
              <li><strong>try/except:</strong> Blocks used to catch and handle exceptions</li>
              <li><strong>finally:</strong> Code that runs regardless of whether an exception occurred</li>
              <li><strong>raise:</strong> Manually trigger an exception</li>
              <li><strong>Custom Exceptions:</strong> Creating your own exception types</li>
              <li><strong>Exception Hierarchy:</strong> How Python organizes different exception types</li>
            </ul>
          </div>
        </section>

        {/* Basic Exception Handling */}
        <section className="py-topic-section">
          <h2>🛡️ Basic Exception Handling</h2>
          
          <div className="py-code-block">
            <pre>{`# Basic try/except structure
print("Basic Exception Handling Examples:")

# Example 1: Division by zero
try:
    result = 10 / 0
    print(f"Result: {{result}}")
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")

# Example 2: Invalid type conversion
try:
    number = int("hello")
    print(f"Number: {{number}}")
except ValueError:
    print("Error: Cannot convert 'hello' to integer!")

# Example 3: List index out of range
numbers = [1, 2, 3]
try:
    print(f"Element at index 5: {{numbers[5]}}")
except IndexError:
    print("Error: Index is out of range!")

# Example 4: Key not found in dictionary
student_grades = {{"alice": 85, "bob": 92}}
try:
    grade = student_grades["charlie"]
    print(f"Charlie's grade: {{grade}}")
except KeyError:
    print("Error: Student 'charlie' not found!")

# Example 5: File not found
try:
    with open("nonexistent_file.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("Error: File not found!")

# Multiple exception types
def safe_division(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("Error: Cannot divide by zero")
        return None
    except TypeError:
        print("Error: Invalid types for division")
        return None

print(f"\\nSafe Division Examples:")
print(f"10 / 2 = {{safe_division(10, 2)}}")
print(f"10 / 0 = {{safe_division(10, 0)}}")
print(f"'10' / 2 = {{safe_division('10', 2)}}")

# Catching multiple exceptions in one block
def process_data(data, index):
    try:
        value = data[index]
        result = int(value) * 2
        return result
    except (IndexError, ValueError, TypeError) as e:
        print(f"Error processing data: {{type(e).__name__}} - {{e}}")
        return None

print(f"\\nData Processing Examples:")
test_data = ["5", "10", "invalid", "20"]
for i in range(6):  # Will go out of bounds
    result = process_data(test_data, i)
    print(f"Index {{i}}: {{result}}")

# Using else clause - executes if no exception occurs
def safe_file_read(filename):
    try:
        file = open(filename, "r")
    except FileNotFoundError:
        print(f"File {{filename}} not found")
        return None
    else:
        print(f"File {{filename}} opened successfully")
        content = file.read()
        file.close()
        return content

print(f"\\nFile Reading with else clause:")
content = safe_file_read("example.txt")

# Using finally clause - always executes
def database_operation():
    connection = None
    try:
        # Simulate database connection
        print("Connecting to database...")
        connection = "db_connection_object"
        
        # Simulate some operation that might fail
        result = 1 / 0  # This will raise ZeroDivisionError
        return result
    except ZeroDivisionError:
        print("Database operation failed: Division by zero")
        return None
    finally:
        if connection:
            print("Closing database connection...")
        print("Database operation completed")

print(f"\\nDatabase Operation Example:")
result = database_operation()

# Exception information
import sys

def detailed_error_handling():
    try:
        result = int("not_a_number")
    except ValueError as e:
        print(f"Exception type: {{type(e).__name__}}")
        print(f"Exception message: {{e}}")
        print(f"Exception args: {{e.args}}")
        
        # Get traceback information
        import traceback
        print("Full traceback:")
        traceback.print_exc()

print(f"\\nDetailed Error Information:")
detailed_error_handling()`}</pre>
          </div>
        </section>

        {/* Exception Hierarchy */}
        <section className="py-topic-section">
          <h2>🏗️ Exception Hierarchy</h2>
          
          <div className="py-code-block">
            <pre>{`# Understanding Python's exception hierarchy
print("Python Exception Hierarchy Examples:")

# BaseException (root of all exceptions)
# ├── SystemExit
# ├── KeyboardInterrupt  
# ├── GeneratorExit
# └── Exception (most user-defined exceptions inherit from this)
#     ├── ArithmeticError
#     │   ├── ZeroDivisionError
#     │   ├── OverflowError
#     │   └── FloatingPointError
#     ├── LookupError
#     │   ├── IndexError
#     │   └── KeyError
#     ├── ValueError
#     ├── TypeError
#     ├── NameError
#     ├── AttributeError
#     ├── IOError / OSError
#     │   └── FileNotFoundError
#     └── ... many others

# Catching parent exceptions
def demonstrate_hierarchy():
    test_cases = [
        lambda: [1, 2, 3][10],           # IndexError
        lambda: {{"a": 1}}["b"],           # KeyError  
        lambda: int("hello"),             # ValueError
        lambda: "string" + 5,             # TypeError
        lambda: 10 / 0,                   # ZeroDivisionError
    ]
    
    for i, test_case in enumerate(test_cases):
        try:
            result = test_case()
        except LookupError as e:  # Catches IndexError and KeyError
            print(f"Test {{i+1}}: LookupError caught - {{type(e).__name__}}: {{e}}")
        except ArithmeticError as e:  # Catches ZeroDivisionError
            print(f"Test {{i+1}}: ArithmeticError caught - {{type(e).__name__}}: {{e}}")
        except Exception as e:  # Catches all other exceptions
            print(f"Test {{i+1}}: General Exception caught - {{type(e).__name__}}: {{e}}")

demonstrate_hierarchy()

# Order matters in exception handling
def exception_order_example(value):
    try:
        if value == "zero":
            result = 10 / 0
        elif value == "type":
            result = "string" + 5
        elif value == "index":
            result = [1, 2, 3][10]
        else:
            result = int(value)
    except Exception as e:  # This catches everything
        print(f"Caught by Exception: {{type(e).__name__}}")
    except ZeroDivisionError as e:  # This will never execute!
        print(f"Caught by ZeroDivisionError: {{e}}")
    except TypeError as e:  # This will never execute!
        print(f"Caught by TypeError: {{e}}")

print(f"\\nException Order (Wrong Way):")
exception_order_example("zero")
exception_order_example("type")

# Correct order - specific to general
def correct_exception_order(value):
    try:
        if value == "zero":
            result = 10 / 0
        elif value == "type":
            result = "string" + 5
        elif value == "index":
            result = [1, 2, 3][10]
        else:
            result = int(value)
    except ZeroDivisionError as e:
        print(f"Caught by ZeroDivisionError: {{e}}")
    except TypeError as e:
        print(f"Caught by TypeError: {{e}}")
    except IndexError as e:
        print(f"Caught by IndexError: {{e}}")
    except ValueError as e:
        print(f"Caught by ValueError: {{e}}")
    except Exception as e:  # Catch-all for unexpected exceptions
        print(f"Caught by Exception: {{type(e).__name__}}: {{e}}")

print(f"\\nException Order (Correct Way):")
correct_exception_order("zero")
correct_exception_order("type")
correct_exception_order("index")
correct_exception_order("hello")

# Built-in exception examples
def builtin_exceptions_demo():
    exceptions_to_demo = [
        ("AttributeError", lambda: "string".nonexistent_method()),
        ("NameError", lambda: undefined_variable),
        ("ImportError", lambda: __import__("nonexistent_module")),
        ("MemoryError", lambda: " " * (10**20)),  # Might not work on all systems
        ("RecursionError", lambda: (lambda f: f(f))(lambda f: f(f))),  # Infinite recursion
        ("StopIteration", lambda: next(iter([]))),
    ]
    
    for exception_name, test_func in exceptions_to_demo:
        try:
            test_func()
        except Exception as e:
            if type(e).__name__ == exception_name:
                print(f"✓ {{exception_name}}: {{e}}")
            else:
                print(f"✗ Expected {{exception_name}}, got {{type(e).__name__}}")
        except:
            print(f"✗ {{exception_name}}: Unexpected error type")

print(f"\\nBuilt-in Exceptions Demo:")
builtin_exceptions_demo()`}</pre>
          </div>
        </section>

        {/* Custom Exceptions */}
        <section className="py-topic-section">
          <h2>🎯 Custom Exceptions</h2>
          
          <div className="py-code-block">
            <pre>{`# Creating custom exceptions
print("Custom Exceptions Examples:")

# Basic custom exception
class CustomError(Exception):
    pass

def function_that_fails():
    raise CustomError("Something went wrong in the custom function!")

try:
    function_that_fails()
except CustomError as e:
    print(f"Caught custom exception: {{e}}")

# Custom exception with additional data
class ValidationError(Exception):
    def __init__(self, message, field_name, invalid_value):
        super().__init__(message)
        self.field_name = field_name
        self.invalid_value = invalid_value

def validate_age(age):
    if not isinstance(age, int):
        raise ValidationError(
            f"Age must be an integer, got {{type(age).__name__}}",
            "age",
            age
        )
    if age < 0:
        raise ValidationError(
            f"Age cannot be negative, got {{age}}",
            "age", 
            age
        )
    if age > 150:
        raise ValidationError(
            f"Age seems unrealistic, got {{age}}",
            "age",
            age
        )
    return True

def test_age_validation():
    test_ages = [25, -5, 200, "thirty", 45.5]
    
    for age in test_ages:
        try:
            validate_age(age)
            print(f"✓ Age {{age}} is valid")
        except ValidationError as e:
            print(f"✗ Validation failed for field '{{e.field_name}}': {{e}}")

print(f"\\nAge Validation Examples:")
test_age_validation()

# Exception hierarchy for domain-specific errors
class BankingError(Exception):
    """Base exception for banking operations"""
    pass

class InsufficientFundsError(BankingError):
    def __init__(self, account_id, requested_amount, available_balance):
        self.account_id = account_id
        self.requested_amount = requested_amount
        self.available_balance = available_balance
        super().__init__(
            f"Insufficient funds in account {{account_id}}: "
            f"requested {{requested_amount}}, available {{available_balance}}"
        )

class AccountNotFoundError(BankingError):
    def __init__(self, account_id):
        self.account_id = account_id
        super().__init__(f"Account {{account_id}} not found")

class InvalidTransactionError(BankingError):
    def __init__(self, reason, transaction_details=None):
        self.reason = reason
        self.transaction_details = transaction_details
        super().__init__(f"Invalid transaction: {{reason}}")

class BankAccount:
    def __init__(self, account_id, initial_balance=0):
        self.account_id = account_id
        self.balance = initial_balance
    
    def withdraw(self, amount):
        if amount <= 0:
            raise InvalidTransactionError("Withdrawal amount must be positive")
        if amount > self.balance:
            raise InsufficientFundsError(self.account_id, amount, self.balance)
        
        self.balance -= amount
        return self.balance
    
    def deposit(self, amount):
        if amount <= 0:
            raise InvalidTransactionError("Deposit amount must be positive")
        
        self.balance += amount
        return self.balance

# Banking system simulation
def banking_simulation():
    accounts = {{
        "ACC001": BankAccount("ACC001", 1000),
        "ACC002": BankAccount("ACC002", 500)
    }}
    
    def get_account(account_id):
        if account_id not in accounts:
            raise AccountNotFoundError(account_id)
        return accounts[account_id]
    
    transactions = [
        ("withdraw", "ACC001", 200),    # Valid
        ("deposit", "ACC002", 300),     # Valid  
        ("withdraw", "ACC001", 2000),   # Insufficient funds
        ("withdraw", "ACC003", 100),    # Account not found
        ("deposit", "ACC001", -50),     # Invalid transaction
    ]
    
    for operation, account_id, amount in transactions:
        try:
            account = get_account(account_id)
            if operation == "withdraw":
                new_balance = account.withdraw(amount)
                print(f"✓ Withdrew {{amount}} from {{account_id}}. New balance: {{new_balance}}")
            elif operation == "deposit":
                new_balance = account.deposit(amount)
                print(f"✓ Deposited {{amount}} to {{account_id}}. New balance: {{new_balance}}")
        except AccountNotFoundError as e:
            print(f"✗ Account Error: {{e}}")
        except InsufficientFundsError as e:
            print(f"✗ Insufficient Funds: {{e}}")
        except InvalidTransactionError as e:
            print(f"✗ Invalid Transaction: {{e}}")
        except BankingError as e:  # Catch any other banking errors
            print(f"✗ Banking Error: {{e}}")
        except Exception as e:  # Catch unexpected errors
            print(f"✗ Unexpected Error: {{type(e).__name__}}: {{e}}")

print(f"\\nBanking System Simulation:")
banking_simulation()

# Exception chaining (raise from)
class DataProcessingError(Exception):
    pass

def process_user_data(data):
    try:
        # Simulate data processing that might fail
        processed = {{
            "id": data["user_id"],
            "name": data["full_name"].title(),
            "age": int(data["age"]),
            "email": data["email_address"].lower()
        }}
        return processed
    except KeyError as e:
        # Chain the original exception
        raise DataProcessingError(f"Missing required field: {{e.args[0]}}") from e
    except ValueError as e:
        # Chain the original exception  
        raise DataProcessingError(f"Invalid data format: {{e}}") from e

def test_exception_chaining():
    test_cases = [
        {{"user_id": 1, "full_name": "john doe", "age": "25", "email_address": "JOHN@EMAIL.COM"}},  # Valid
        {{"user_id": 2, "full_name": "jane smith", "age": "invalid"}},  # Missing email, invalid age
        {{"full_name": "bob wilson"}},  # Missing multiple fields
    ]
    
    for i, data in enumerate(test_cases):
        try:
            result = process_user_data(data)
            print(f"✓ User {{i+1}} processed: {{result}}")
        except DataProcessingError as e:
            print(f"✗ Processing failed for user {{i+1}}: {{e}}")
            print(f"  Original error: {{type(e.__cause__).__name__}}: {{e.__cause__}}")

print(f"\\nException Chaining Examples:")
test_exception_chaining()`}</pre>
          </div>
        </section>

        {/* Advanced Error Handling */}
        <section className="py-topic-section">
          <h2>🚀 Advanced Error Handling Techniques</h2>
          
          <div className="py-code-block">
            <pre>{`# Advanced error handling patterns
print("Advanced Error Handling Patterns:")

# Context managers for resource management
class DatabaseConnection:
    def __init__(self, connection_string):
        self.connection_string = connection_string
        self.connected = False
    
    def __enter__(self):
        print(f"Connecting to database: {{self.connection_string}}")
        self.connected = True
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is not None:
            print(f"Exception occurred: {{exc_type.__name__}}: {{exc_val}}")
            print("Rolling back transaction...")
        print("Closing database connection...")
        self.connected = False
        return False  # Don't suppress the exception
    
    def execute_query(self, query):
        if not self.connected:
            raise RuntimeError("Not connected to database")
        
        if "DROP TABLE users" in query:  # Simulate dangerous operation
            raise RuntimeError("Dangerous operation detected!")
        
        print(f"Executing query: {{query}}")
        return "Query result"

def database_operations():
    # Successful operation
    try:
        with DatabaseConnection("postgresql://localhost/mydb") as db:
            result = db.execute_query("SELECT * FROM users")
            print(f"Result: {{result}}")
    except Exception as e:
        print(f"Database operation failed: {{e}}")
    
    print()
    
    # Failed operation
    try:
        with DatabaseConnection("postgresql://localhost/mydb") as db:
            result = db.execute_query("DROP TABLE users")  # This will fail
            print(f"Result: {{result}}")
    except Exception as e:
        print(f"Database operation failed: {{e}}")

print("Database Context Manager:")
database_operations()

# Retry mechanism with exponential backoff
import time
import random

class NetworkError(Exception):
    pass

def unreliable_network_call():
    """Simulates an unreliable network call"""
    if random.random() < 0.7:  # 70% chance of failure
        raise NetworkError("Network timeout")
    return "Success: Data retrieved"

def retry_with_backoff(func, max_retries=3, base_delay=1, backoff_factor=2):
    """Retry function with exponential backoff"""
    for attempt in range(max_retries + 1):
        try:
            result = func()
            if attempt > 0:
                print(f"  ✓ Success on attempt {{attempt + 1}}")
            return result
        except Exception as e:
            if attempt == max_retries:
                print(f"  ✗ Failed after {{max_retries + 1}} attempts: {{e}}")
                raise
            
            delay = base_delay * (backoff_factor ** attempt)
            print(f"  ✗ Attempt {{attempt + 1}} failed: {{e}}. Retrying in {{delay}}s...")
            time.sleep(delay)

def test_retry_mechanism():
    print("\\nRetry Mechanism with Exponential Backoff:")
    
    for test_num in range(3):
        print(f"Test {{test_num + 1}}:")
        try:
            result = retry_with_backoff(unreliable_network_call, max_retries=3)
            print(f"  Final result: {{result}}")
        except NetworkError as e:
            print(f"  Final failure: {{e}}")
        print()

test_retry_mechanism()

# Error aggregation and batch processing
class BatchProcessingError(Exception):
    def __init__(self, message, errors):
        super().__init__(message)
        self.errors = errors

def process_batch_items(items):
    """Process items in batch, collecting all errors"""
    results = []
    errors = []
    
    for i, item in enumerate(items):
        try:
            # Simulate processing that might fail
            if isinstance(item, str) and item.startswith("error"):
                raise ValueError(f"Invalid item: {{item}}")
            elif isinstance(item, (int, float)) and item < 0:
                raise ValueError(f"Negative values not allowed: {{item}}")
            else:
                processed = item * 2 if isinstance(item, (int, float)) else item.upper()
                results.append({{"index": i, "item": item, "result": processed}})
        except Exception as e:
            errors.append({{"index": i, "item": item, "error": str(e)}})
    
    if errors:
        error_msg = f"{{len(errors)}} out of {{len(items)}} items failed processing"
        raise BatchProcessingError(error_msg, errors)
    
    return results

def batch_processing_example():
    test_batches = [
        [1, 2, 3, 4, 5],  # All valid
        ["hello", "world", "python"],  # All valid strings
        [1, -2, 3, "error_item", 5, "valid"],  # Mixed with errors
        ["error_start", "error_end", -10, -20],  # All errors
    ]
    
    for batch_num, batch in enumerate(test_batches):
        print(f"\\nBatch {{batch_num + 1}}: {{batch}}")
        try:
            results = process_batch_items(batch)
            print("✓ All items processed successfully:")
            for result in results:
                print(f"  Index {{result['index']}}: {{result['item']}} -> {{result['result']}}")
        except BatchProcessingError as e:
            print(f"✗ Batch processing failed: {{e}}")
            print("Successful items:")
            # Re-process to get partial results
            partial_results = []
            for i, item in enumerate(batch):
                try:
                    if isinstance(item, str) and item.startswith("error"):
                        raise ValueError(f"Invalid item: {{item}}")
                    elif isinstance(item, (int, float)) and item < 0:
                        raise ValueError(f"Negative values not allowed: {{item}}")
                    else:
                        processed = item * 2 if isinstance(item, (int, float)) else item.upper()
                        partial_results.append({{"index": i, "item": item, "result": processed}})
                except:
                    pass
            
            for result in partial_results:
                print(f"  ✓ Index {{result['index']}}: {{result['item']}} -> {{result['result']}}")
            
            print("Failed items:")
            for error in e.errors:
                print(f"  ✗ Index {{error['index']}}: {{error['item']}} - {{error['error']}}")

batch_processing_example()

# Logging and error tracking
import logging
from datetime import datetime

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

logger = logging.getLogger(__name__)

class ErrorTracker:
    def __init__(self):
        self.errors = []
    
    def log_error(self, operation, error, context=None):
        error_record = {{
            "timestamp": datetime.now(),
            "operation": operation,
            "error_type": type(error).__name__,
            "error_message": str(error),
            "context": context or {{}}
        }}
        self.errors.append(error_record)
        
        # Log to standard logging
        logger.error(f"{{operation}} failed: {{error_record['error_type']}}: {{error_record['error_message']}}")
        
        return error_record
    
    def get_error_summary(self):
        if not self.errors:
            return "No errors recorded"
        
        error_counts = {{}}
        for error in self.errors:
            error_type = error["error_type"]
            error_counts[error_type] = error_counts.get(error_type, 0) + 1
        
        summary = f"Total errors: {{len(self.errors)}}\\n"
        for error_type, count in error_counts.items():
            summary += f"  {{error_type}}: {{count}}\\n"
        
        return summary.strip()

def error_tracking_example():
    tracker = ErrorTracker()
    
    operations = [
        ("divide", lambda: 10 / 0),
        ("convert", lambda: int("hello")),
        ("access", lambda: [][0]),
        ("lookup", lambda: {{}["missing_key"]},
        ("success", lambda: 42),
    ]
    
    print("\\nError Tracking Example:")
    for op_name, operation in operations:
        try:
            result = operation()
            print(f"✓ {{op_name}}: {{result}}")
        except Exception as e:
            tracker.log_error(op_name, e, {{"input": "various"}})
    
    print("\\nError Summary:")
    print(tracker.get_error_summary())

error_tracking_example()`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Error Handling Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Best Practices:</h3>
            <ul>
              <li><strong>Be Specific:</strong> Catch specific exceptions rather than using broad except clauses</li>
              <li><strong>Fail Fast:</strong> Validate inputs early and raise exceptions for invalid states</li>
              <li><strong>Use Finally:</strong> Ensure cleanup code runs regardless of exceptions</li>
              <li><strong>Log Errors:</strong> Always log exceptions with context for debugging</li>
              <li><strong>Don't Ignore Exceptions:</strong> Always handle or re-raise exceptions appropriately</li>
              <li><strong>Custom Exceptions:</strong> Create domain-specific exceptions for better error handling</li>
              <li><strong>Exception Chaining:</strong> Use 'raise from' to preserve original error context</li>
              <li><strong>Resource Management:</strong> Use context managers for proper resource cleanup</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a robust input validation system with custom exceptions</li>
              <li>Build a file processing system with comprehensive error handling</li>
              <li>Implement a web API client with retry logic and error recovery</li>
              <li>Design a configuration loader with detailed error reporting</li>
              <li>Create a data processing pipeline with error aggregation</li>
              <li>Build a database connection pool with connection error handling</li>
              <li>Implement a task scheduler with exception handling and logging</li>
              <li>Design a plugin system with safe module loading</li>
              <li>Create a multi-threaded application with thread-safe error handling</li>
              <li>Build a testing framework with custom assertion exceptions</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ErrorHandling;
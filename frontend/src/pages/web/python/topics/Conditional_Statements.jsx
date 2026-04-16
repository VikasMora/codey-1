import React from 'react';
import '../Navbarweb.css';

function ConditionalStatements() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>🔀 Conditional Statements</h1>
        <p className="py-topic-subtitle">
          Master if, elif, and else statements in Python
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>🎯 What are Conditional Statements?</h2>
          <p>
            Conditional statements allow your program to make decisions and execute different 
            blocks of code based on certain conditions. Python uses <strong>if</strong>, 
            <strong>elif</strong> (else if), and <strong>else</strong> statements to control 
            the flow of program execution based on whether conditions are true or false.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Concepts:</h3>
            <ul>
              <li><strong>Boolean Expressions:</strong> Conditions that evaluate to True or False</li>
              <li><strong>Indentation:</strong> Python uses indentation to define code blocks</li>
              <li><strong>Logical Flow:</strong> How programs make decisions and branch execution</li>
              <li><strong>Comparison Operators:</strong> Tools for comparing values</li>
            </ul>
          </div>
        </section>

        {/* Basic If Statement */}
        <section className="py-topic-section">
          <h2>📝 Basic If Statement</h2>
          <p>The if statement executes code only when a condition is True.</p>
          
          <div className="py-code-block">
            <pre>{`# Basic if statement syntax
age = 18

if age >= 18:
    print("You are an adult!")
    print("You can vote!")

print("This line always executes")

# Example with different conditions
temperature = 75

if temperature > 80:
    print("It's hot outside!")

if temperature < 60:
    print("It's cold outside!")

if 60 <= temperature <= 80:
    print("Perfect weather!")

# Using boolean variables
is_raining = True
has_umbrella = False

if is_raining:
    print("It's raining!")
    if has_umbrella:
        print("Good thing you have an umbrella!")

# Checking for empty collections
shopping_list = ["milk", "bread", "eggs"]
empty_list = []

if shopping_list:  # Non-empty lists are truthy
    print(f"You have {{len(shopping_list)}} items to buy")

if not empty_list:  # Empty lists are falsy
    print("Your list is empty!")

# Checking string content
username = "alice"
password = ""

if username:
    print(f"Welcome, {{username}}!")

if password:
    print("Password is set")
else:
    print("Please set a password")`}</pre>
          </div>

          <div className="py-info-box">
            <h3>💡 Important Notes:</h3>
            <ul>
              <li>Python uses <strong>indentation</strong> (usually 4 spaces) to define code blocks</li>
              <li>The colon (:) at the end of the if statement is required</li>
              <li>All lines with the same indentation level belong to the same block</li>
              <li>Empty strings, lists, and zero are considered "falsy" in boolean contexts</li>
            </ul>
          </div>
        </section>

        {/* If-Else Statement */}
        <section className="py-topic-section">
          <h2>🔄 If-Else Statement</h2>
          <p>The else statement provides an alternative path when the if condition is False.</p>
          
          <div className="py-code-block">
            <pre>{`# Basic if-else structure
age = 16

if age >= 18:
    print("You can vote!")
    status = "adult"
else:
    print("You cannot vote yet")
    status = "minor"

print(f"Status: {{status}}")

# Even/Odd checker
number = 7

if number % 2 == 0:
    print(f"{{number}} is even")
else:
    print(f"{{number}} is odd")

# Login validation
username = input("Enter username: ")
correct_password = "python123"
entered_password = input("Enter password: ")

if entered_password == correct_password:
    print(f"Welcome back, {{username}}!")
    print("Access granted")
else:
    print("Invalid password")
    print("Access denied")

# Grade calculator
score = 85

if score >= 60:
    print("You passed!")
    print("Congratulations!")
else:
    print("You failed")
    print("Better luck next time")

print(f"Your score: {{score}}")

# Boolean logic example
is_weekend = True
is_sunny = False

if is_weekend and is_sunny:
    print("Perfect day for a picnic!")
else:
    print("Maybe stay inside today")

# Membership testing
fruits = ["apple", "banana", "orange"]
fruit = "banana"

if fruit in fruits:
    print(f"{{fruit}} is available")
else:
    print(f"{{fruit}} is not available")

# Comparison with None
user_input = None

if user_input is not None:
    print(f"You entered: {{user_input}}")
else:
    print("No input provided")`}</pre>
          </div>
        </section>

        {/* If-Elif-Else Statement */}
        <section className="py-topic-section">
          <h2>🎭 If-Elif-Else Statement</h2>
          <p>The elif (else if) statement allows you to check multiple conditions in sequence.</p>
          
          <div className="py-code-block">
            <pre>{`# Grade classification system
score = 87

if score >= 90:
    grade = "A"
    print("Excellent work!")
elif score >= 80:
    grade = "B"  
    print("Good job!")
elif score >= 70:
    grade = "C"
    print("Satisfactory")
elif score >= 60:
    grade = "D"
    print("Needs improvement")
else:
    grade = "F"
    print("Failed")

print(f"Your grade: {{grade}}")

# Weather decision system
temperature = 25  # Celsius
weather_condition = "sunny"

if temperature > 30:
    if weather_condition == "sunny":
        activity = "Go swimming"
    else:
        activity = "Stay in air conditioning"
elif temperature > 20:
    if weather_condition == "sunny":
        activity = "Go for a walk"
    elif weather_condition == "rainy":
        activity = "Read a book inside"
    else:
        activity = "Do some gardening"
elif temperature > 10:
    activity = "Wear a jacket and go out"
else:
    activity = "Stay warm inside"

print(f"Today's activity: {{activity}}")

# Traffic light system
light_color = "yellow"

if light_color == "green":
    print("Go!")
    action = "drive"
elif light_color == "yellow":
    print("Caution! Prepare to stop")
    action = "slow_down"
elif light_color == "red":
    print("Stop!")
    action = "stop"
else:
    print("Invalid traffic light color")
    action = "call_maintenance"

print(f"Action: {{action}}")

# Age group classifier
age = 25

if age < 0:
    print("Invalid age")
elif age < 2:
    category = "Baby"
elif age < 13:
    category = "Child"
elif age < 20:
    category = "Teenager"
elif age < 65:
    category = "Adult"
else:
    category = "Senior"

if age >= 0:
    print(f"Age category: {{category}}")

# User menu system
print("\\nChoose an option:")
print("1. Create account")
print("2. Login")  
print("3. Reset password")
print("4. Exit")

choice = input("Enter your choice (1-4): ")

if choice == "1":
    print("Creating new account...")
    print("Please fill out the registration form")
elif choice == "2":
    print("Logging in...")
    print("Please enter your credentials")
elif choice == "3":
    print("Resetting password...")
    print("Check your email for reset link")
elif choice == "4":
    print("Goodbye!")
else:
    print("Invalid choice. Please try again.")`}</pre>
          </div>
        </section>

        {/* Comparison Operators */}
        <section className="py-topic-section">
          <h2>⚖️ Comparison Operators</h2>
          <p>Comparison operators are used to compare values and create boolean expressions.</p>
          
          <div className="py-code-block">
            <pre>{`# All comparison operators
a = 10
b = 20
c = 10

# Equality operators
print(f"a == c: {{a == c}}")    # True (equal to)
print(f"a != b: {{a != b}}")    # True (not equal to)

# Relational operators  
print(f"a < b: {{a < b}}")      # True (less than)
print(f"b > a: {{b > a}}")      # True (greater than)
print(f"a <= c: {{a <= c}}")    # True (less than or equal)
print(f"b >= a: {{b >= a}}")    # True (greater than or equal)

# Identity operators
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

print(f"list1 == list2: {{list1 == list2}}")  # True (same content)
print(f"list1 is list2: {{list1 is list2}}")  # False (different objects)
print(f"list1 is list3: {{list1 is list3}}")  # True (same object)

# Membership operators
fruits = ["apple", "banana", "cherry"]
print(f"'apple' in fruits: {{'apple' in fruits}}")      # True
print(f"'grape' not in fruits: {{'grape' not in fruits}}")  # True

# String comparisons
name1 = "Alice"
name2 = "Bob"
name3 = "alice"

print(f"name1 < name2: {{name1 < name2}}")  # True (alphabetical)
print(f"name1 == name3: {{name1 == name3}}")  # False (case sensitive)
print(f"name1.lower() == name3: {{name1.lower() == name3}}")  # True

# Practical examples
password = "mypassword"
min_length = 8

if len(password) >= min_length:
    print("Password length is acceptable")
else:
    print(f"Password must be at least {{min_length}} characters")

# Multiple comparisons
exam_score = 85
homework_score = 90
attendance = 95

if exam_score >= 80 and homework_score >= 85 and attendance >= 90:
    print("Excellent performance!")
elif exam_score >= 70 or homework_score >= 75:
    print("Good performance")
else:
    print("Needs improvement")

# Chained comparisons (Pythonic way)
temperature = 22

# Instead of: temperature >= 20 and temperature <= 30
if 20 <= temperature <= 30:
    print("Comfortable temperature")

# Range checking
age = 25
if 18 <= age <= 65:
    print("Working age")

# Multiple range checks
grade = 85
if 90 <= grade <= 100:
    level = "Excellent"
elif 80 <= grade < 90:
    level = "Good"
elif 70 <= grade < 80:
    level = "Satisfactory"
else:
    level = "Needs work"

print(f"Performance level: {{level}}")`}</pre>
          </div>
        </section>

        {/* Logical Operators */}
        <section className="py-topic-section">
          <h2>🔗 Logical Operators</h2>
          <p>Logical operators combine multiple boolean expressions.</p>
          
          <div className="py-code-block">
            <pre>{`# AND operator - both conditions must be True
age = 25
has_license = True
has_car = False

if age >= 18 and has_license:
    print("Can drive legally")
else:
    print("Cannot drive legally")

if age >= 18 and has_license and has_car:
    print("Ready to drive!")
else:
    print("Missing something to drive")

# OR operator - at least one condition must be True  
is_weekend = False
is_holiday = True
is_vacation = False

if is_weekend or is_holiday or is_vacation:
    print("No work today!")
else:
    print("Work day")

# NOT operator - reverses the boolean value
is_raining = False

if not is_raining:
    print("Good weather for outdoor activities")
else:
    print("Stay inside")

# Complex logical expressions
username = "admin"
password = "secret123"
is_locked = False
failed_attempts = 2

if (username == "admin" and password == "secret123") and not is_locked:
    print("Login successful")
elif is_locked:
    print("Account is locked")
elif failed_attempts >= 3:
    print("Too many failed attempts")
else:
    print("Invalid credentials")

# Short-circuit evaluation
def expensive_check():
    print("Expensive operation performed")
    return True

# This won't call expensive_check() because first condition is False
if False and expensive_check():
    print("This won't print")

# This will call expensive_check() because first condition is True  
if True or expensive_check():
    print("This will print, but expensive_check won't be called")

# Practical example: Form validation
email = "user@example.com"
password = "mypass123"
terms_accepted = True
age = 20

if (email and "@" in email and 
    password and len(password) >= 8 and
    terms_accepted and 
    age >= 13):
    print("Registration successful!")
else:
    print("Please check your registration details")
    
    # Detailed error checking
    if not email or "@" not in email:
        print("- Invalid email address")
    if not password or len(password) < 8:
        print("- Password must be at least 8 characters")
    if not terms_accepted:
        print("- You must accept terms and conditions")
    if age < 13:
        print("- You must be at least 13 years old")

# Operator precedence example
a = True
b = False
c = True

# Parentheses make the intent clear
result1 = a and (b or c)  # True and (False or True) = True and True = True
result2 = (a and b) or c  # (True and False) or True = False or True = True

print(f"a and (b or c): {{result1}}")
print(f"(a and b) or c: {{result2}}")

# Without parentheses (and has higher precedence than or)
result3 = a and b or c    # Same as (a and b) or c
print(f"a and b or c: {{result3}}")`}</pre>
          </div>
        </section>

        {/* Nested Conditionals */}
        <section className="py-topic-section">
          <h2>🏢 Nested Conditionals</h2>
          <p>You can place if statements inside other if statements to create more complex decision trees.</p>
          
          <div className="py-code-block">
            <pre>{`# Simple nested conditionals
weather = "sunny"
temperature = 75

if weather == "sunny":
    print("It's sunny outside!")
    if temperature > 80:
        print("Perfect for swimming")
    elif temperature > 60:
        print("Great for a walk")
    else:
        print("A bit chilly, but still nice")
else:
    print("Not sunny today")
    if weather == "rainy":
        print("Don't forget your umbrella!")

# Student grade system with extra credit
base_score = 85
extra_credit = 10
participation = True

if base_score >= 60:
    print("You passed the base requirements")
    
    if extra_credit > 0:
        total_score = base_score + extra_credit
        print(f"With extra credit: {{total_score}}")
        
        if total_score >= 95:
            print("Outstanding performance!")
            if participation:
                print("Perfect student award!")
        elif total_score >= 85:
            print("Excellent work!")
    else:
        print(f"Final score: {{base_score}}")
else:
    print("Unfortunately, you did not pass")
    
    if base_score >= 50:
        print("You were close. Consider retaking the exam")
    else:
        print("Significant improvement needed")

# ATM transaction system
account_balance = 1000
pin_entered = "1234"
correct_pin = "1234"
transaction_type = "withdraw"
withdrawal_amount = 200

if pin_entered == correct_pin:
    print("PIN accepted")
    
    if transaction_type == "withdraw":
        print(f"Withdrawal request: ${{withdrawal_amount}}")
        
        if withdrawal_amount &lt;= account_balance:
            if withdrawal_amount % 20 == 0:  # ATM only dispenses $20 bills
                new_balance = account_balance - withdrawal_amount
                print(f"Transaction successful!")
                print(f"Dispensing ${{withdrawal_amount}}")
                print(f"New balance: ${{new_balance}}")
            else:
                print("Amount must be a multiple of $20")
        else:
            print("Insufficient funds")
            print(f"Available balance: ${{account_balance}}")
            
    elif transaction_type == "deposit":
        new_balance = account_balance + withdrawal_amount
        print(f"Deposit successful!")
        print(f"New balance: ${{new_balance}}")
        
    elif transaction_type == "balance":
        print(f"Current balance: ${{account_balance}}")
        
else:
    print("Invalid PIN")
    print("Card blocked after 3 failed attempts")

# Game character status
char_level = 15
char_class = "warrior"
has_special_weapon = True
enemy_type = "dragon"

if char_level &gt;= 10:
    print("High-level character!")
    
    if char_class == "warrior":
        print("Warrior abilities available")
        
        if has_special_weapon:
            print("Special weapon equipped")
            
            if enemy_type == "dragon":
                print("Dragon slayer mode activated!")
                multiplier = 2.5
            else:
                multiplier = 2.0
                
        else:
            print("Using standard weapon")
            multiplier = 1.5
            
    elif char_class == "mage":
        print("Magic abilities available")
        multiplier = 2.0 if has_special_weapon else 1.8
        
    else:
        print("Basic abilities only")
        multiplier = 1.0
        
else:
    print("Low-level character")
    multiplier = 1.0

print(f"Damage multiplier: {{multiplier}}x")`}</pre>
          </div>

          <div className="py-info-box warning">
            <h3>⚠️ Avoiding Deep Nesting:</h3>
            <p>
              While nested conditionals are powerful, too many levels can make code hard to read. 
              Consider using functions, early returns, or restructuring logic when nesting gets deep.
            </p>
          </div>
        </section>

        {/* Conditional Expressions (Ternary) */}
        <section className="py-topic-section">
          <h2>🎯 Conditional Expressions (Ternary Operator)</h2>
          <p>Python's conditional expression provides a concise way to write simple if-else statements.</p>
          
          <div className="py-code-block">
            <pre>{`# Ternary operator syntax: value_if_true if condition else value_if_false

# Basic examples
age = 20
status = "adult" if age >= 18 else "minor"
print(f"Status: {{status}}")

# Number comparison
a = 10
b = 20
max_value = a if a > b else b
print(f"Maximum value: {{max_value}}")

# String operations
name = ""
display_name = name if name else "Anonymous"
print(f"Hello, {{display_name}}!")

# Even/odd check
number = 7
parity = "even" if number % 2 == 0 else "odd"
print(f"{{number}} is {{parity}}")

# Grade assignment
score = 85
grade = "Pass" if score >= 60 else "Fail"
print(f"Result: {{grade}}")

# List operations
numbers = [1, 2, 3, 4, 5]
result = "has items" if numbers else "empty"
print(f"List {{result}}")

# Multiple ternary operators (use sparingly)
temperature = 75
weather_desc = ("hot" if temperature > 80 else 
                "warm" if temperature > 60 else 
                "cool" if temperature > 40 else 
                "cold")
print(f"Weather: {{weather_desc}}")

# Practical examples
def calculate_discount(price, is_member):
    # Using ternary for simple calculations
    discount_rate = 0.1 if is_member else 0.05
    discount = price * discount_rate
    final_price = price - discount
    
    return final_price, discount

price = 100
membership = True
final, saved = calculate_discount(price, membership)
print(f"Final price: ${{final}}, Saved: ${{saved}}")

# Function parameter defaults
def greet_user(name=None):
    greeting = f"Hello, {{name}}!" if name else "Hello, stranger!"
    return greeting

print(greet_user("Alice"))
print(greet_user())

# List comprehension with conditional
numbers = range(1, 11)
categorized = [("even" if n % 2 == 0 else "odd") for n in numbers]
print(f"Categories: {{categorized}}")

# Dictionary operations  
users = {{"alice": 25, "bob": 17, "charlie": 30}}

# Create new dict with voting eligibility
voting_status = {{
    name: ("can vote" if age &gt;= 18 else "cannot vote") 
    for name, age in users.items()
}}
print(f"Voting status: {{voting_status}}")

# Nested ternary (avoid if possible - hard to read)
score = 85
complex_grade = (
    "A" if score &gt;= 90 else
    "B" if score &gt;= 80 else  
    "C" if score &gt;= 70 else
    "D" if score &gt;= 60 else
    "F"
)
print(f"Grade: {{complex_grade}}")

# Better alternative using functions
def get_letter_grade(score):
    if score &gt;= 90:
        return "A"
    elif score &gt;= 80:
        return "B"
    elif score &gt;= 70:
        return "C" 
    elif score &gt;= 60:
        return "D"
    else:
        return "F"

print(f"Better grade: {{get_letter_grade(85)}}")`}</pre>
          </div>
        </section>

        {/* Common Pitfalls */}
        <section className="py-topic-section">
          <h2>⚠️ Common Pitfalls and Best Practices</h2>
          
          <div className="py-info-box warning">
            <h3>🚨 Watch Out For These Mistakes:</h3>
            <ul>
              <li><strong>Indentation Errors:</strong> Python is sensitive to whitespace</li>
              <li><strong>Missing Colons:</strong> Every if/elif/else needs a colon</li>
              <li><strong>Assignment vs Comparison:</strong> Use == for comparison, = for assignment</li>
              <li><strong>Floating Point Comparisons:</strong> Be careful with decimal precision</li>
            </ul>
          </div>

          <div className="py-code-block">
            <pre>{`# Common mistakes and fixes

# 1. Indentation errors
age = 20

# Wrong - inconsistent indentation
# if age >= 18:
#     print("You can vote")
#  print("You are an adult")  # Error: inconsistent indentation

# Correct - consistent indentation  
if age >= 18:
    print("You can vote")
    print("You are an adult")

# 2. Missing colon
score = 85

# Wrong - missing colon
# if score >= 60
#     print("You passed")

# Correct - colon present
if score >= 60:
    print("You passed")

# 3. Assignment vs comparison
username = "admin"

# Wrong - assignment instead of comparison
# if username = "admin":  # SyntaxError
#     print("Welcome admin")

# Correct - comparison operator
if username == "admin":
    print("Welcome admin")

# 4. Floating point precision issues
price = 0.1 + 0.2  # Results in 0.30000000000000004

# Problematic - direct floating point comparison
if price == 0.3:
    print("This might not print!")

# Better - use round() or tolerance
if round(price, 2) == 0.3:
    print("This will print!")

# Or use tolerance for comparison
tolerance = 0.0001
if abs(price - 0.3) < tolerance:
    print("Close enough!")

# 5. Boolean value mistakes
empty_list = []
zero_value = 0
empty_string = ""

# These are all falsy values
if not empty_list:
    print("List is empty")

if not zero_value:
    print("Value is zero")
    
if not empty_string:
    print("String is empty")

# Be explicit when checking for None
value = None

# Good - explicit None check
if value is None:
    print("Value is None")

# Less clear - relies on None being falsy
if not value:
    print("This works but is less clear")

# 6. Chained comparisons gotcha
x = 5

# This works as expected
if 1 < x < 10:
    print("x is between 1 and 10")

# This might be confusing
if False == False in [False]:  # True! 
    print("This prints - be careful with complex chains")

# 7. Mutable default arguments in functions with conditionals
def add_item(item, target_list=None):
    # Good practice - create new list if None
    if target_list is None:
        target_list = []
    
    target_list.append(item)
    return target_list

# Safe to call multiple times
list1 = add_item("apple")
list2 = add_item("banana") 
print(f"List 1: {{list1}}, List 2: {{list2}}")  # Separate lists

# 8. Proper error handling
user_input = "25"

# Basic validation
if user_input.isdigit():
    age = int(user_input)
    if age >= 18:
        print("Adult")
    else:
        print("Minor")
else:
    print("Please enter a valid number")

# More robust validation
def validate_age(input_str):
    try:
        age = int(input_str)
        if age < 0:
            return None, "Age cannot be negative"
        elif age > 150:
            return None, "Age seems unrealistic"
        else:
            return age, None
    except ValueError:
        return None, "Please enter a valid number"

age, error = validate_age("25")
if error:
    print(f"Error: {{error}}")
else:
    category = "adult" if age >= 18 else "minor"
    print(f"Age {{age}} - {{category}}")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Conditional Statement Best Practices:</h3>
            <ul>
              <li><strong>Use consistent indentation:</strong> Stick to 4 spaces per level</li>
              <li><strong>Keep conditions simple:</strong> Break complex logic into functions</li>
              <li><strong>Use meaningful variable names:</strong> Make conditions self-documenting</li>
              <li><strong>Avoid deep nesting:</strong> Consider early returns or guard clauses</li>
              <li><strong>Use elif instead of multiple ifs:</strong> When conditions are mutually exclusive</li>
              <li><strong>Handle edge cases:</strong> Consider None, empty values, and invalid input</li>
            </ul>
          </div>

          <div className="py-code-block">
            <pre>{`# Best practices examples

# 1. Good variable names make conditions clear
is_logged_in = True
has_premium_subscription = False
account_balance = 1500

if is_logged_in and (has_premium_subscription or account_balance > 1000):
    print("Access granted to premium features")

# 2. Extract complex conditions into functions
def is_valid_email(email):
    return email and "@" in email and "." in email.split("@")[1]

def is_strong_password(password):
    return (len(password) >= 8 and 
            any(c.isupper() for c in password) and
            any(c.islower() for c in password) and
            any(c.isdigit() for c in password))

email = "user@example.com"  
password = "MyPass123"

if is_valid_email(email) and is_strong_password(password):
    print("Registration successful")

# 3. Use guard clauses to reduce nesting
def process_user_data(user_data):
    # Guard clauses - handle edge cases first
    if not user_data:
        return "No user data provided"
    
    if "email" not in user_data:
        return "Email is required"
    
    if not is_valid_email(user_data["email"]):
        return "Invalid email format"
    
    # Main logic with less nesting
    welcome_message = f"Welcome, {{user_data.get('name', 'User')}}!"
    return welcome_message

# 4. Use enums for multiple choice conditions
from enum import Enum

class UserRole(Enum):
    ADMIN = "admin"
    MODERATOR = "moderator"  
    USER = "user"

def check_permissions(user_role, action):
    if user_role == UserRole.ADMIN:
        return True  # Admins can do anything
    elif user_role == UserRole.MODERATOR:
        return action in ["moderate", "view"]
    elif user_role == UserRole.USER:
        return action == "view"
    else:
        return False

# 5. Configuration-driven conditionals
SETTINGS = {{
    "min_password_length": 8,
    "max_login_attempts": 3,
    "session_timeout": 3600
}}

def validate_login(password, attempts):
    if len(password) < SETTINGS["min_password_length"]:
        return False, "Password too short"
    
    if attempts >= SETTINGS["max_login_attempts"]:
        return False, "Too many failed attempts"
    
    return True, "Login allowed"

# 6. Readable chain of elif statements
def get_shipping_cost(weight, distance, priority):
    base_cost = 5.00
    
    # Weight-based pricing
    if weight <= 1:
        weight_cost = 2.00
    elif weight <= 5:
        weight_cost = 5.00
    elif weight <= 10:
        weight_cost = 10.00
    else:
        weight_cost = 15.00
    
    # Distance multiplier
    if distance <= 100:
        distance_multiplier = 1.0
    elif distance <= 500:
        distance_multiplier = 1.5
    else:
        distance_multiplier = 2.0
    
    # Priority surcharge
    priority_cost = 10.00 if priority == "express" else 0.00
    
    total_cost = (base_cost + weight_cost) * distance_multiplier + priority_cost
    return round(total_cost, 2)

print(f"Shipping cost example: $15.50")`}</pre>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Write a program that determines if a year is a leap year</li>
              <li>Create a simple calculator that handles different operations</li>
              <li>Build a grade classifier that assigns letter grades based on scores</li>
              <li>Implement a user authentication system with multiple validation checks</li>
              <li>Create a weather recommendation system based on temperature and conditions</li>
              <li>Write a program that categorizes people by age groups</li>
              <li>Build a simple game where players make choices that affect outcomes</li>
              <li>Create a password strength checker with multiple criteria</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ConditionalStatements;
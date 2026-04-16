import React from 'react';
import '../Navbarweb.css';

function StringManipulation() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>📝 String Manipulation</h1>
        <p className="py-topic-subtitle">
          Master string operations and formatting in Python
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>🎯 What is String Manipulation?</h2>
          <p>
            String manipulation involves modifying, formatting, and processing text data in Python. 
            Strings are immutable in Python, meaning that operations create new strings rather than 
            modifying existing ones. Python provides extensive built-in methods and techniques for 
            working with strings efficiently.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key String Manipulation Concepts:</h3>
            <ul>
              <li><strong>Immutability:</strong> Strings cannot be changed in place</li>
              <li><strong>Indexing and Slicing:</strong> Access parts of strings using indices</li>
              <li><strong>Built-in Methods:</strong> Rich set of string methods for common operations</li>
              <li><strong>Formatting:</strong> Multiple ways to format and template strings</li>
              <li><strong>Encoding:</strong> Handle different character encodings</li>
              <li><strong>Pattern Matching:</strong> Search and replace using patterns</li>
            </ul>
          </div>
        </section>

        {/* Basic String Operations */}
        <section className="py-topic-section">
          <h2>🛠️ Basic String Operations</h2>
          
          <div className="py-code-block">
            <pre>{`# Basic string operations and methods

print("Basic String Operations:")

# String creation and basic operations
text = "Hello, World!"
print(f"Original string: '{{text}}'")
print(f"Length: {{len(text)}}")
print(f"First character: '{{text[0]}}'")
print(f"Last character: '{{text[-1]}}'")

# String slicing
print(f"\\nString Slicing:")
sample = "Python Programming"
print(f"Full string: '{{sample}}'")
print(f"First 6 chars: '{{sample[:6]}}'")
print(f"Last 11 chars: '{{sample[7:]}}'")
print(f"Middle section: '{{sample[7:18]}}'")
print(f"Every 2nd char: '{{sample[::2]}}'")
print(f"Reverse string: '{{sample[::-1]}}'")

# Case operations
print(f"\\nCase Operations:")
mixed_case = "Hello World Python"
print(f"Original: '{{mixed_case}}'")
print(f"Upper: '{{mixed_case.upper()}}'")
print(f"Lower: '{{mixed_case.lower()}}'")
print(f"Title: '{{mixed_case.title()}}'")
print(f"Capitalize: '{{mixed_case.capitalize()}}'")
print(f"Swap case: '{{mixed_case.swapcase()}}'")

# Check case methods
print(f"\\nCase Checking:")
print(f"Is upper? {{mixed_case.isupper()}}")
print(f"Is lower? {{mixed_case.islower()}}")
print(f"Is title? {{mixed_case.istitle()}}")

# String concatenation and repetition
print(f"\\nConcatenation and Repetition:")
first = "Hello"
second = "World"
print(f"Concatenation: '{{first + ' ' + second}}'")
print(f"Repetition: '{{first * 3}}'")
print(f"Using join: '{{\' \'.join([first, second])}}'")

# String membership
print(f"\\nMembership Testing:")
sentence = "Python is awesome"
print(f"'Python' in sentence: {{'Python' in sentence}}")
print(f"'Java' in sentence: {{'Java' in sentence}}")
print(f"'python' in sentence (case-sensitive): {{'python' in sentence}}")
print(f"'python' in sentence.lower(): {{'python' in sentence.lower()}}")

# Basic string methods
print(f"\\nBasic String Methods:")
text = "  Hello, World!  "
print(f"Original with spaces: '{{text}}'")
print(f"Strip whitespace: '{{text.strip()}}'")
print(f"Left strip: '{{text.lstrip()}}'")
print(f"Right strip: '{{text.rstrip()}}'")

# Count and find operations
print(f"\\nCount and Find Operations:")
sample = "hello world hello python hello"
print(f"Sample text: '{{sample}}'")
print(f"Count 'hello': {{sample.count('hello')}}")
print(f"Count 'o': {{sample.count('o')}}")
print(f"Find 'world': {{sample.find('world')}}")
print(f"Find 'java' (not found): {{sample.find('java')}}")
print(f"Index of 'python': {{sample.index('python')}}")

# Replace operations
print(f"\\nReplace Operations:")
original = "I love Java programming"
print(f"Original: '{{original}}'")
print(f"Replace Java with Python: '{{original.replace('Java', 'Python')}}'")
print(f"Replace 'a' with '@': '{{original.replace('a', '@')}}'")
print(f"Replace only first 'a': '{{original.replace('a', '@', 1)}}'")

# Split and join operations
print(f"\\nSplit and Join Operations:")
sentence = "apple,banana,cherry,date"
fruits = sentence.split(',')
print(f"Original: '{{sentence}}'")
print(f"Split by comma: {{fruits}}")
print(f"Join with ' | ': '{{\' | \'.join(fruits)}}'")

# Split with different separators
text = "apple banana cherry\\tdate\\nelderberry"
print(f"\\nSplit variations:")
print(f"Split by space: {{text.split(' ')}}")
print(f"Split by whitespace: {{text.split()}}")
print(f"Split lines: {{text.splitlines()}}")

# Partition operations
print(f"\\nPartition Operations:")
email = "user@example.com"
parts = email.partition('@')
print(f"Email: '{{email}}'")
print(f"Partition by '@': {{parts}}")
print(f"Username: '{{parts[0]}}'")
print(f"Domain: '{{parts[2]}}'")

# String validation methods
print(f"\\nString Validation Methods:")
test_strings = ["Hello123", "12345", "Hello", "hello world", "Hello_World", ""]

for s in test_strings:
    print(f"\\nTesting: '{{s}}'")
    print(f"  isalnum(): {{s.isalnum()}}")
    print(f"  isalpha(): {{s.isalpha()}}")
    print(f"  isdigit(): {{s.isdigit()}}")
    print(f"  isspace(): {{s.isspace()}}")
    print(f"  isidentifier(): {{s.isidentifier()}}")
    if s:  # Only test if string is not empty
        print(f"  startswith('H'): {{s.startswith('H')}}")
        print(f"  endswith('d'): {{s.endswith('d')}}")

# Advanced string operations
print(f"\\nAdvanced String Operations:")

# Center, ljust, rjust
text = "Python"
print(f"Original: '{{text}}'")
print(f"Center in 20: '{{text.center(20)}}'")
print(f"Center with *: '{{text.center(20, '*')}}'")
print(f"Left justify: '{{text.ljust(15, '-')}}'")
print(f"Right justify: '{{text.rjust(15, '-')}}'")

# Zero fill
number_str = "42"
print(f"\\nZero fill examples:")
print(f"Original: '{{number_str}}'")
print(f"Zero fill to 5: '{{number_str.zfill(5)}}'")
print(f"Zero fill to 8: '{{number_str.zfill(8)}}'")

# Translate and maketrans
print(f"\\nTranslate Operations:")
text = "hello world"
translation = text.maketrans("aeiou", "12345")
translated = text.translate(translation)
print(f"Original: '{{text}}'")
print(f"Vowels to numbers: '{{translated}}'")

# Remove characters
remove_digits = text.maketrans("", "", "0123456789")
text_with_nums = "hello123world456"
cleaned = text_with_nums.translate(remove_digits)
print(f"With numbers: '{{text_with_nums}}'")
print(f"Digits removed: '{{cleaned}}'")

# Encoding and decoding
print(f"\\nEncoding Operations:")
unicode_text = "Hello 世界 🌍"
print(f"Original: '{{unicode_text}}'")

# Encode to bytes
encoded_utf8 = unicode_text.encode('utf-8')
encoded_ascii = unicode_text.encode('ascii', errors='ignore')

print(f"UTF-8 encoded: {{encoded_utf8}}")
print(f"ASCII encoded (ignore errors): {{encoded_ascii}}")

# Decode back to string
decoded = encoded_utf8.decode('utf-8')
print(f"Decoded back: '{{decoded}}'")

# String comparison
print(f"\\nString Comparison:")
str1 = "apple"
str2 = "Apple"
str3 = "banana"

print(f"'{{str1}}' == '{{str2}}': {{str1 == str2}}")
print(f"'{{str1}}' < '{{str3}}': {{str1 < str3}}")
print(f"Case-insensitive compare: {{str1.lower() == str2.lower()}}")

# Lexicographic comparison
words = ["zebra", "apple", "Banana", "cherry"]
print(f"\\nOriginal list: {{words}}")
print(f"Sorted: {{sorted(words)}}")
print(f"Sorted case-insensitive: {{sorted(words, key=str.lower)}}")

# String formatting basics
print(f"\\nBasic String Formatting:")
name = "Alice"
age = 30
score = 85.75

# Old style formatting
print("Old style: Hello %s, you are %d years old" % (name, age))

# .format() method
print("Format method: Hello {{}}, you are {{}} years old".format(name, age))
print("With indices: Hello {{1}}, you scored {{0}}%".format(score, name))
print("With names: Hello {{name}}, you scored {{score}}%".format(name=name, score=score))

# f-strings (Python 3.6+)
print(f"f-string: Hello {{name}}, you are {{age}} years old and scored {{score}}%")

# Working with special characters
print(f"\\nSpecial Characters:")
special_text = "Line 1\\nLine 2\\tTabbed\\\\Backslash\\'Single\\\"Double"
print(f"Raw string: {{repr(special_text)}}")
print("Processed:")
print(special_text)

# Raw strings
raw_text = r"C:\\Users\\Documents\\file.txt"
print(f"\\nRaw string path: {{raw_text}}")

# Triple quoted strings
multi_line = \"\"\"This is a
multi-line string
that preserves formatting
    and indentation\"\"\"

print(f"\\nMulti-line string:")
print(multi_line)`}</pre>
          </div>
        </section>

        {/* Advanced String Formatting */}
        <section className="py-topic-section">
          <h2>📝 Advanced String Formatting</h2>
          
          <div className="py-code-block">
            <pre>{`# Advanced string formatting techniques

print("Advanced String Formatting:")

# F-string formatting options
name = "Alice"
age = 25
pi = 3.14159
large_number = 1234567.89
percentage = 0.856

print(f"Basic f-strings:")
print(f"Name: {{name}}")
print(f"Age: {{age}}")

# Number formatting
print(f"\\nNumber Formatting:")
print(f"Pi with 2 decimals: {{pi}}")
print(f"Pi with 4 decimals: {{pi}}")
print(f"Large number with commas: {{large_number:,}}")
print(f"Percentage: {{percentage:%}}")
print(f"Percentage with 1 decimal: {{percentage}}")

# Field width and alignment
print(f"\\nField Width and Alignment:")
items = ["apple", "banana", "cherry"]
prices = [1.20, 0.75, 2.50]

print("Product    | Price")
print("-" * 15)
for item, price in zip(items, prices):
    print(f"{{item:<10}} | $" + f"{{price:>6}}")

# Advanced alignment
print(f"\\nAlignment Examples:")
text = "Python"
print(f"Left align:   '{{text:<15}}'")
print(f"Right align:  '{{text:>15}}'")
print(f"Center align: '{{text:^15}}'")
print(f"Fill with *:  '{{text:*^15}}'")

# Number base formatting
number = 42
print(f"\\nNumber Base Formatting:")
print(f"Decimal: {{number}}")
print(f"Binary: {{number:b}}")
print(f"Octal: {{number:o}}")
print(f"Hexadecimal: {{number:x}}")
print(f"Hexadecimal (upper): {{number:X}}")

# Padding with zeros
print(f"\\nZero Padding:")
print(f"Number with leading zeros: {{number:05d}}")
print(f"Float with leading zeros: {{pi:08}}")

# Sign formatting
positive = 42
negative = -42
print(f"\\nSign Formatting:")
print(f"Default positive: {{positive}}")
print(f"Force sign positive: {{positive:+}}")
print(f"Space for positive: {{positive: }}")
print(f"Negative: {{negative}}")

# Scientific notation
big_number = 1234567890
small_number = 0.000001234
print(f"\\nScientific Notation:")
print(f"Big number: {{big_number:e}}")
print(f"Small number: {{small_number:E}}")
print(f"With 2 decimals: {{big_number}}")

# .format() method advanced usage
print(f"\\n.format() Method Advanced:")

# Positional and keyword arguments
template = "Hello {0}, you have {1} {message}"
result = template.format("Bob", 5, message="notifications")
print(result)

# Nested formatting
template = "{{greeting}}, {{name:>10}}! Score: {{score}}"
result = template.format(greeting="Hello", name="Charlie", score=95.5)
print(result)

# Attribute and item access
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("Diana", 28)
data = {{"city": "New York", "country": "USA"}}

print(f"\\nAttribute and Item Access:")
print("Person: {p.name} ({p.age} years old)".format(p=person))
print("Location: {location[city]}, {location[country]}".format(location=data))

# Format specification mini-language
print(f"\\nFormat Specification Examples:")
values = [123.456, -789.123, 0.001, 1000000]

for val in values:
    print(f"Value: {{val:>10}}")
    print(f"  2 decimals: {{val:>10}}")
    print(f"  Percentage: {{val:>10%}}")
    print(f"  Scientific: {{val:>10e}}")
    print()

# Template strings (from string module)
print("Template Strings:")
from string import Template

# Safe substitution
template = Template("Hello $name, welcome to $place!")
try:
    result = template.substitute(name="Eve", place="Python World")
    print(result)
except KeyError as e:
    print(f"Missing variable: {{e}}")

# Safe substitute (won't raise error for missing variables)
result = template.safe_substitute(name="Eve")
print(f"Safe substitute: {{result}}")

# Custom delimiters
class CustomTemplate(Template):
    delimiter = '#'

custom_template = CustomTemplate("Hello #name, today is #day!")
result = custom_template.substitute(name="Frank", day="Monday")
print(f"Custom template: {{result}}")

# String interpolation with locals() and globals()
print(f"\\nInterpolation with locals():")

def greet_user(username, score):
    message = "Congratulations {{username}}! Your score is {{score}}.".format(**locals())
    return message

greeting = greet_user("Grace", 98)
print(greeting)

# Advanced formatting with datetime
from datetime import datetime
now = datetime.now()

print(f"\\nDatetime Formatting:")
print(f"Default: {{now}}")
print(f"Date only: {{now:%Y-%m-%d}}")
print(f"Time only: {{now:%H:%M:%S}}")
print(f"Custom format: {{now:%B %d, %Y at %I:%M %p}}")

# Locale-specific formatting (requires locale setup)
print(f"\\nNumber Formatting Examples:")
large_num = 1234567.89
print(f"Default: {{large_num}}")
print(f"With commas: {{large_num:,}}")
print(f"Currency style: $" + f"{{large_num:,.2f}}")

# Multi-line string formatting
print(f"\\nMulti-line String Formatting:")
data = {{
    "name": "Henry",
    "department": "Engineering", 
    "salary": 75000,
    "years": 3,
    "bonus": 7500
}}

report = \"\"\"
Employee Report
================
Name: {{name}}
Department: {{department}}

\"\"\".format(**data)

print(report)

# Conditional formatting
print(f"\\nConditional Formatting:")
students = [
    {{"name": "Alice", "score": 95}},
    {{"name": "Bob", "score": 78}}, 
    {{"name": "Charlie", "score": 88}},
    {{"name": "Diana", "score": 65}}
]

for student in students:
    grade = "A" if student["score"] >= 90 else "B" if student["score"] >= 80 else "C" if student["score"] >= 70 else "F"
    status = "Pass" if student["score"] >= 70 else "Fail"
    
    print(f"{{student['name']:<10}} | Score: {{student['score']:>3}} | Grade: {{grade}} | Status: {{status}}")

# Dynamic field width
print(f"\\nDynamic Field Width:")
names = ["Al", "Bobby", "Christopher", "D"]
max_width = max(len(name) for name in names)

print(f"Names with dynamic width ({{max_width}} chars):")
for name in names:
    print(f"'{{name:<{{max_width}}}}'")

# Nested format expressions
print(f"\\nNested Format Expressions:")
precision = 3
number = 3.14159265359

print(f"Pi to {{precision}} places: {{number}}")
print("Pi to {{}} places: {{:.{{}}f}}".format(precision, number, precision))

# Format with functions
def format_currency(amount):
    return f"$" + f"{{amount:,.2f}}"

def format_percentage(decimal):
    return f"{{decimal:%}}"

amounts = [1234.56, 9876.54, 100.00]
rates = [0.05, 0.125, 0.08]

print(f"\\nFormatting with Functions:")
for amount, rate in zip(amounts, rates):
    print(f"Amount: {{format_currency(amount)}}, Rate: {{format_percentage(rate)}}")`}</pre>
          </div>
        </section>

        {/* String Processing and Parsing */}
        <section className="py-topic-section">
          <h2>🔍 String Processing and Parsing</h2>
          
          <div className="py-code-block">
            <pre>{`# Advanced string processing and parsing techniques

print("String Processing and Parsing:")

# Text cleaning and normalization
import re
import unicodedata

def clean_text(text):
    # Remove extra whitespace
    text = ' '.join(text.split())
    
    # Normalize unicode characters
    text = unicodedata.normalize('NFKD', text)
    
    # Remove non-printable characters
    text = ''.join(char for char in text if char.isprintable())
    
    return text.strip()

messy_text = "  Hello\\t\\tWorld!  \\n\\n  Extra   spaces   "
cleaned = clean_text(messy_text)
print(f"Original: {{repr(messy_text)}}")
print(f"Cleaned: '{{cleaned}}'")

# Regular expressions for pattern matching
print(f"\\nRegular Expression Patterns:")

# Email validation
email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{{2,}}$'
emails = ["user@example.com", "invalid.email", "test@domain.co.uk", "@invalid.com"]

for email in emails:
    is_valid = re.match(email_pattern, email) is not None
    print(f"{{email:<20}} : {{'Valid' if is_valid else 'Invalid'}}")

# Phone number extraction
text_with_phones = \"\"\"
Contact John at (555) 123-4567 or Mary at 555.987.6543.
You can also reach Bob at 555-111-2222 or use 5551234567.
\"\"\"

phone_patterns = [
    r'\\(\\d{{3}}\\) \\d{{3}}-\\d{{4}}',  # (555) 123-4567
    r'\\d{{3}}\\.\\d{{3}}\\.\\d{{4}}',     # 555.123.4567  
    r'\\d{{3}}-\\d{{3}}-\\d{{4}}',         # 555-123-4567
    r'\\d{{10}}'                         # 5551234567
]

print(f"\\nPhone number extraction:")
print(f"Text: {{text_with_phones.strip()}}")
print("\\nFound phone numbers:")

all_phones = []
for pattern in phone_patterns:
    matches = re.findall(pattern, text_with_phones)
    all_phones.extend(matches)

for phone in all_phones:
    print(f"  {{phone}}")

# Data extraction from structured text
log_entry = "2023-10-15 14:30:25 ERROR [DatabaseConnection] Connection timeout after 30 seconds"
log_pattern = r'(\\d{{4}}-\\d{{2}}-\\d{{2}}) (\\d{{2}}:\\d{{2}}:\\d{{2}}) (\\w+) \\[([^\\]]+)\\] (.+)'

match = re.match(log_pattern, log_entry)
if match:
    date, time, level, component, message = match.groups()
    print(f"\\nLog entry parsing:")
    print(f"  Date: {{date}}")
    print(f"  Time: {{time}}")
    print(f"  Level: {{level}}")
    print(f"  Component: {{component}}")
    print(f"  Message: {{message}}")

# CSV-like data parsing
csv_data = \"\"\"name,age,city,salary
Alice,25,"New York",75000
Bob,30,"Los Angeles",80000
Charlie,35,"Chicago, IL",90000
\"\"\"

def parse_csv_line(line):
    # Simple CSV parser handling quoted fields
    fields = []
    current_field = ""
    in_quotes = False
    
    for char in line:
        if char == '"':
            in_quotes = not in_quotes
        elif char == ',' and not in_quotes:
            fields.append(current_field.strip())
            current_field = ""
        else:
            current_field += char
    
    fields.append(current_field.strip())
    return fields

print(f"\\nCSV Data Parsing:")
lines = csv_data.strip().split('\\n')
headers = parse_csv_line(lines[0])
print(f"Headers: {{headers}}")

for i, line in enumerate(lines[1:], 1):
    values = parse_csv_line(line)
    print(f"Row {{i}}: {{dict(zip(headers, values))}}")

# URL parsing and manipulation
urls = [
    "https://www.example.com/path/to/page?param1=value1&param2=value2#section",
    "http://subdomain.site.org:8080/api/v1/users/123",
    "ftp://user:pass@ftp.site.com/files/document.pdf"
]

url_pattern = r'(https?|ftp)://(?:([^:@]+)(?::([^@]+))?@)?([^:/]+)(?::(\\d+))?(/[^?#]*)?(?:\\?([^#]*))?(?:#(.*))?'

print(f"\\nURL Parsing:")
for url in urls:
    match = re.match(url_pattern, url)
    if match:
        scheme, user, password, host, port, path, query, fragment = match.groups()
        print(f"\\nURL: {{url}}")
        print(f"  Scheme: {{scheme}}")
        print(f"  Host: {{host}}")
        print(f"  Port: {{port or 'default'}}")
        print(f"  Path: {{path or '/'}}")
        print(f"  Query: {{query or 'none'}}")

# Text tokenization
def tokenize_text(text):
    # Remove punctuation and convert to lowercase
    import string
    translator = str.maketrans('', '', string.punctuation)
    cleaned = text.translate(translator).lower()
    
    # Split into words and filter empty strings
    words = [word for word in cleaned.split() if word]
    
    return words

def word_frequency(text):
    tokens = tokenize_text(text)
    frequency = {{}}
    
    for token in tokens:
        frequency[token] = frequency.get(token, 0) + 1
    
    return frequency

sample_text = \"\"\"
Python is a powerful programming language. Python is used for web development,
data analysis, artificial intelligence, and more. Many developers love Python
because Python is easy to learn and very versatile.
\"\"\"

print(f"\\nText Analysis:")
print(f"Sample text: {{sample_text.strip()}}")

tokens = tokenize_text(sample_text)
freq = word_frequency(sample_text)

print(f"\\nTokens: {{tokens}}")
print(f"\\nWord frequencies:")
for word, count in sorted(freq.items(), key=lambda x: x[1], reverse=True):
    print(f"  {{word}}: {{count}}")

# String similarity and distance
def levenshtein_distance(s1, s2):
    if len(s1) < len(s2):
        return levenshtein_distance(s2, s1)
    
    if len(s2) == 0:
        return len(s1)
    
    previous_row = range(len(s2) + 1)
    for i, c1 in enumerate(s1):
        current_row = [i + 1]
        for j, c2 in enumerate(s2):
            insertions = previous_row[j + 1] + 1
            deletions = current_row[j] + 1
            substitutions = previous_row[j] + (c1 != c2)
            current_row.append(min(insertions, deletions, substitutions))
        previous_row = current_row
    
    return previous_row[-1]

def similarity_ratio(s1, s2):
    max_len = max(len(s1), len(s2))
    if max_len == 0:
        return 1.0
    distance = levenshtein_distance(s1, s2)
    return 1.0 - (distance / max_len)

print(f"\\nString Similarity:")
word_pairs = [
    ("python", "python"),
    ("python", "pythom"), 
    ("hello", "helo"),
    ("programming", "programing"),
    ("different", "words")
]

for word1, word2 in word_pairs:
    distance = levenshtein_distance(word1, word2)
    similarity = similarity_ratio(word1, word2)
    print(f"'{{word1}}' vs '{{word2}}': distance={{distance}}, similarity={{similarity}}")

# Configuration file parsing
config_text = \"\"\"
[database]
host = localhost
port = 5432
username = admin
password = secret123

[logging]
level = INFO
file = /var/log/app.log
max_size = 10MB

[features]
enable_cache = true
max_connections = 100
debug_mode = false
\"\"\"

def parse_config(config_text):
    config = {{}}
    current_section = None
    
    for line in config_text.strip().split('\\n'):
        line = line.strip()
        
        # Skip empty lines and comments
        if not line or line.startswith('#'):
            continue
            
        # Section header
        if line.startswith('[') and line.endswith(']'):
            current_section = line[1:-1]
            config[current_section] = {{}}
        
        # Key-value pair
        elif '=' in line and current_section:
            key, value = line.split('=', 1)
            key = key.strip()
            value = value.strip()
            
            # Convert value types
            if value.lower() in ['true', 'false']:
                value = value.lower() == 'true'
            elif value.isdigit():
                value = int(value)
            elif value.replace('.', '').isdigit():
                value = float(value)
            
            config[current_section][key] = value
    
    return config

print(f"\\nConfiguration Parsing:")
parsed_config = parse_config(config_text)

for section, settings in parsed_config.items():
    print(f"\\n[{{section}}]")
    for key, value in settings.items():
        print(f"  {{key}} = {{value}} ({{type(value).__name__}})")

# Template processing
def process_template(template, variables):
    # Simple template processor using {{variable}} syntax
    import re
    
    def replace_variable(match):
        var_name = match.group(1)
        return str(variables.get(var_name, f"{{{{var_name}}}}"))  # Keep placeholder if not found
    
    pattern = r'\\{{([^}}]+)\\}}'
    return re.sub(pattern, replace_variable, template)

template = \"\"\"
Hello {{name}},

Thank you for your order #{{order_id}}. 
Your total is and it will be shipped to {{address}}.

Best regards,
{{company}}
\"\"\"

template_vars = {{
    "name": "John Doe",
    "order_id": "12345",
    "total": "99.99",
    "address": "123 Main St, City, State",
    "company": "Example Corp"
}}

print(f"\\nTemplate Processing:")
processed = process_template(template, template_vars)
print(processed)

# Advanced text search
def fuzzy_search(query, text_list, threshold=0.6):
    results = []
    query_lower = query.lower()
    
    for text in text_list:
        text_lower = text.lower()
        
        # Exact match
        if query_lower == text_lower:
            results.append((text, 1.0, "exact"))
        
        # Substring match
        elif query_lower in text_lower:
            ratio = len(query) / len(text)
            results.append((text, ratio, "substring"))
        
        # Similarity match
        else:
            sim = similarity_ratio(query_lower, text_lower)
            if sim >= threshold:
                results.append((text, sim, "similar"))
    
    # Sort by similarity score descending
    results.sort(key=lambda x: x[1], reverse=True)
    return results

print(f"\\nFuzzy Search:")
search_list = [
    "Python programming", "Java development", "JavaScript coding",
    "Python scripting", "Web development", "Data science with Python",
    "Machine learning", "Artificial intelligence"
]

query = "Python"
matches = fuzzy_search(query, search_list, threshold=0.3)

print(f"Search query: '{{query}}'")
print("Results:")
for text, score, match_type in matches:
    print(f"  {{score}} - {{text}} ({{match_type}})")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>String Manipulation Best Practices:</h3>
            <ul>
              <li><strong>Use f-strings for formatting:</strong> More readable and efficient than % or .format()</li>
              <li><strong>Remember string immutability:</strong> Operations create new strings, not modify existing ones</li>
              <li><strong>Use join() for concatenation:</strong> More efficient than + for multiple strings</li>
              <li><strong>Validate input data:</strong> Always check and clean user input</li>
              <li><strong>Handle encoding properly:</strong> Specify encoding when working with files or external data</li>
              <li><strong>Use raw strings for patterns:</strong> Avoid escaping issues in regex patterns</li>
              <li><strong>Consider performance:</strong> String operations can be expensive for large texts</li>
              <li><strong>Use appropriate methods:</strong> Choose the right string method for your specific need</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a function to validate and format phone numbers</li>
              <li>Build a simple text-based word counter with frequency analysis</li>
              <li>Implement a function to clean and normalize user input</li>
              <li>Create a template system for generating personalized messages</li>
              <li>Build a URL parser that extracts all components</li>
              <li>Implement a simple CSV parser that handles quoted fields</li>
              <li>Create a function to find and highlight keywords in text</li>
              <li>Build a password strength validator using string methods</li>
              <li>Implement a simple text-based search with fuzzy matching</li>
              <li>Create a log file parser that extracts structured information</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StringManipulation;
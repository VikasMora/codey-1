import React from 'react';
import '../Navbarweb.css';

function RegularExpressions() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>🔍 Regular Expressions</h1>
        <p className="py-topic-subtitle">
          Learn pattern matching and text processing with regex
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>🔍 What are Regular Expressions?</h2>
          <p>
            Regular expressions (regex) are powerful pattern-matching tools used for searching, matching, 
            and manipulating text. They provide a concise and flexible way to identify patterns in strings, 
            making them invaluable for tasks like data validation, text parsing, search and replace operations, 
            and data extraction. Python's `re` module provides comprehensive support for regular expressions 
            with various functions and methods for pattern matching.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Regex Concepts:</h3>
            <ul>
              <li><strong>Pattern:</strong> A sequence of characters that defines a search pattern</li>
              <li><strong>Metacharacters:</strong> Special characters with special meaning (., *, +, ?, etc.)</li>
              <li><strong>Character Classes:</strong> Sets of characters to match ([abc], \\d, \\w, etc.)</li>
              <li><strong>Anchors:</strong> Position markers (^, $, \\b) that specify where matches should occur</li>
              <li><strong>Groups:</strong> Parentheses () used to group patterns and capture matches</li>
              <li><strong>Quantifiers:</strong> Specify how many times a pattern should repeat</li>
            </ul>
          </div>
        </section>

        {/* Basic Regex Patterns */}
        <section className="py-topic-section">
          <h2>🎯 Basic Regular Expression Patterns</h2>
          
          <div className="py-code-block">
            <pre>{`# Basic regular expression patterns
import re

print("Basic Regular Expression Patterns:")

# Literal character matching
text = "Hello, world! This is a test string."
print(f"Text: {text}")

# Simple literal matches
patterns = ["Hello", "world", "test", "Python"]
for pattern in patterns:
    match = re.search(pattern, text)
    if match:
        print(f"Found '{pattern}' at position {match.start()}-{match.end()}")
    else:
        print(f"'{pattern}' not found")

print("\\n" + "="*50)
print("Metacharacters:")

# Dot (.) - matches any character except newline
sample_text = "cat, bat, hat, rat, mat"
pattern = "c.t"
matches = re.findall(pattern, sample_text)
print(f"Pattern '{pattern}' in '{sample_text}':")
print(f"Matches: {matches}")

# Caret (^) - matches start of string
lines = ["apple pie", "banana cake", "apple sauce", "cherry tart"]
pattern = "^apple"
print(f"\\nPattern '{pattern}' (start of string):")
for line in lines:
    if re.search(pattern, line):
        print(f"  '{line}' matches")
    else:
        print(f"  '{line}' doesn't match")

# Dollar sign ($) - matches end of string
pattern = "cake$"
print(f"\\nPattern '{pattern}' (end of string):")
for line in lines:
    if re.search(pattern, line):
        print(f"  '{line}' matches")
    else:
        print(f"  '{line}' doesn't match")

# Asterisk (*) - zero or more repetitions
text = "a aa aaa aaaa b bb bbb"
pattern = "a*"
matches = re.findall(pattern, text)
print(f"\\nPattern '{pattern}' (zero or more 'a'):")
print(f"Text: '{text}'")
print(f"Matches: {matches}")

# Plus (+) - one or more repetitions
pattern = "a+"
matches = re.findall(pattern, text)
print(f"\\nPattern '{pattern}' (one or more 'a'):")
print(f"Matches: {matches}")

# Question mark (?) - zero or one repetition
text = "color colour colors colours"
pattern = "colou?r"
matches = re.findall(pattern, text)
print(f"\\nPattern '{pattern}' (optional 'u'):")
print(f"Text: '{text}'")
print(f"Matches: {matches}")

print("\\n" + "="*50)
print("Character Classes:")

# Square brackets [] - character class
text = "The quick brown fox jumps over the lazy dog 123"
patterns = {
    "[aeiou]": "vowels",
    "[A-Z]": "uppercase letters",
    "[0-9]": "digits",
    "[a-z]": "lowercase letters",
    "[^aeiou]": "non-vowels"
}

for pattern, description in patterns.items():
    matches = re.findall(pattern, text)
    print(f"Pattern '{pattern}' ({description}):")
    print(f"  First 10 matches: {matches[:10]}")

# Predefined character classes
text = "Hello World 123! @#$%"
predefined = {
    r"\\d": "digits",
    r"\\w": "word characters (letters, digits, underscore)",
    r"\\s": "whitespace characters",
    r"\\D": "non-digits",
    r"\\W": "non-word characters", 
    r"\\S": "non-whitespace characters"
}

print("\\nPredefined character classes:")
for pattern, description in predefined.items():
    matches = re.findall(pattern, text)
    print(f"Pattern '{pattern}' ({description}): {matches}")

print("\\n" + "="*50)
print("Quantifiers:")

text = "a ab abc abcd abcde"

quantifiers = {
    "ab{2}": "exactly 2 'b's after 'a'",
    "ab{2,4}": "2 to 4 'b's after 'a'",
    "ab{2,}": "2 or more 'b's after 'a'",
    "ab*": "zero or more 'b's after 'a'",
    "ab+": "one or more 'b's after 'a'",
    "ab?": "zero or one 'b' after 'a'"
}

for pattern, description in quantifiers.items():
    matches = re.findall(pattern, text)
    print(f"Pattern '{pattern}' ({description}): {matches}")

print("\\n" + "="*50)
print("Groups and Capturing:")

# Basic grouping with parentheses
text = "Contact: John Doe (555) 123-4567, Jane Smith (555) 987-6543"

# Capture phone numbers
phone_pattern = r"\\((\\d{3})\\) (\\d{3})-(\\d{4})"
matches = re.findall(phone_pattern, text)
print("Phone number pattern with groups:")
print(f"Pattern: {phone_pattern}")
for match in matches:
    area, exchange, number = match
    print(f"  Area: {area}, Exchange: {exchange}, Number: {number}")

# Named groups
email_text = "Contact emails: john@example.com, jane.doe@company.org"
email_pattern = r"(?P<username>[a-zA-Z0-9._%+-]+)@(?P<domain>[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})"

matches = re.finditer(email_pattern, email_text)
print("\\nEmail pattern with named groups:")
for match in matches:
    print(f"  Username: {match.group('username')}, Domain: {match.group('domain')}")
    print(f"  Full email: {match.group()}")

# Non-capturing groups
text = "I have 3 cats and 5 dogs"
pattern = r"(?:\\d+) (cats|dogs)"  # Non-capturing group for the number
matches = re.findall(pattern, text)
print(f"\\nNon-capturing groups - animals: {matches}")

print("\\n" + "="*50)
print("Anchors and Word Boundaries:")

text = "The cat in the cathedral catches catfish"

# Word boundary \\b
patterns = {
    r"\\bcat\\b": "whole word 'cat'",
    r"cat": "'cat' anywhere",
    r"\\Bcat\\B": "'cat' not at word boundary"
}

for pattern, description in patterns.items():
    matches = re.findall(pattern, text)
    count = len(matches)
    print(f"Pattern '{pattern}' ({description}): {count} matches")
    
    # Show positions
    for match in re.finditer(pattern, text):
        start, end = match.span()
        print(f"  Found at position {start}-{end}: '{text[start:end]}'")

# Multi-line text with anchors
multiline_text = """apple
banana apple
apple pie
grape"""

print(f"\\nMulti-line text:")
print(multiline_text)

multiline_patterns = {
    r"^apple": "lines starting with 'apple'",
    r"apple$": "lines ending with 'apple'", 
    r"^apple$": "lines containing only 'apple'"
}

for pattern, description in multiline_patterns.items():
    matches = re.findall(pattern, multiline_text, re.MULTILINE)
    print(f"Pattern '{pattern}' ({description}): {matches}")

print("\\n" + "="*50)
print("Alternation and Optional Groups:")

# Alternation with |
text = "I like cats and dogs, but not birds or fish"
pattern = r"(cats|dogs|birds|fish)"
matches = re.findall(pattern, text)
print(f"Animals mentioned: {matches}")

# Optional groups
dates = ["12/25/2023", "2023-12-25", "25-Dec-2023", "Dec 25, 2023"]
date_patterns = [
    r"(\\d{1,2})/(\\d{1,2})/(\\d{4})",           # MM/DD/YYYY
    r"(\\d{4})-(\\d{2})-(\\d{2})",               # YYYY-MM-DD
    r"(\\d{1,2})-(\\w{3})-(\\d{4})",             # DD-MMM-YYYY
    r"(\\w{3}) (\\d{1,2}), (\\d{4})"            # MMM DD, YYYY
]

pattern_names = ["US format", "ISO format", "European format", "Long format"]

print("\\nDate format matching:")
for date in dates:
    print(f"Date: '{date}'")
    for pattern, name in zip(date_patterns, pattern_names):
        if re.match(pattern, date):
            print(f"  Matches {name}")
            break
    else:
        print(f"  No pattern matched")

# Complex alternation
text = "Supported formats: jpg, jpeg, png, gif, bmp, tiff"
image_pattern = r"\\b(jpe?g|png|gif|bmp|tiff?)\\b"
matches = re.findall(image_pattern, text, re.IGNORECASE)
print(f"\\nImage formats found: {matches}")

print("\\n" + "="*50)
print("Escape Characters and Special Cases:")

# Escaping metacharacters
text = "Price: $19.99 (was $24.99)"
pattern = r"\\$\\d+\\.\\d{2}"  # Escape $ and . 
matches = re.findall(pattern, text)
print(f"Prices found: {matches}")

# Raw strings vs regular strings
pattern_regular = "\\d+\\.\\d{2}"    # Need double backslashes
pattern_raw = r"\\d+\\.\\d{2}"       # Raw string - preferred
print(f"Regular string pattern: {repr(pattern_regular)}")
print(f"Raw string pattern: {repr(pattern_raw)}")

# Both patterns are equivalent
matches1 = re.findall(pattern_regular, "Price: 19.99")
matches2 = re.findall(pattern_raw, "Price: 19.99") 
print(f"Regular pattern matches: {matches1}")
print(f"Raw pattern matches: {matches2}")

# Matching literal square brackets and other special chars
text = "Array[0] = 42, Dict{'key': 'value'}"
patterns = {
    r"\\[\\d+\\]": "array indices",
    r"\\{.*?\\}": "dictionary literals", 
    r"\\w+\\(.*?\\)": "function calls"
}

for pattern, description in patterns.items():
    matches = re.findall(pattern, text)
    if matches:
        print(f"{description.capitalize()}: {matches}")

# Case sensitivity
text = "Python, python, PYTHON, PyThOn"
patterns = {
    "python": "case-sensitive",
    "(?i)python": "case-insensitive (inline flag)",
}

for pattern, description in patterns.items():
    matches = re.findall(pattern, text)
    print(f"Pattern '{pattern}' ({description}): {matches}")

# Using flags parameter
matches_case_insensitive = re.findall("python", text, re.IGNORECASE)
print(f"Using re.IGNORECASE flag: {matches_case_insensitive}")

print("\\n" + "="*50)
print("Greedy vs Non-Greedy Matching:")

html = "<p>First paragraph</p><p>Second paragraph</p>"

# Greedy matching (default)
greedy_pattern = r"<p>.*</p>"
greedy_match = re.findall(greedy_pattern, html)
print(f"Greedy pattern '{greedy_pattern}': {greedy_match}")

# Non-greedy (lazy) matching  
lazy_pattern = r"<p>.*?</p>"
lazy_matches = re.findall(lazy_pattern, html)
print(f"Non-greedy pattern '{lazy_pattern}': {lazy_matches}")

# More examples of greedy vs non-greedy
text = 'He said "Hello" and she said "Goodbye"'

greedy_quotes = re.findall(r'".*"', text)
lazy_quotes = re.findall(r'".*?"', text)
print(f"\\nQuoted text:")
print(f"Greedy: {greedy_quotes}")
print(f"Non-greedy: {lazy_quotes}")

# Demonstrating different quantifier types
text = "aaaaaa"
patterns = {
    "a+": "greedy one-or-more",
    "a+?": "non-greedy one-or-more", 
    "a*": "greedy zero-or-more",
    "a*?": "non-greedy zero-or-more",
    "a{2,5}": "greedy 2-5 repetitions",
    "a{2,5}?": "non-greedy 2-5 repetitions"
}

print(f"\\nQuantifier comparison with text '{text}':")
for pattern, description in patterns.items():
    match = re.search(pattern, text)
    if match:
        print(f"{pattern:8} ({description}): '{match.group()}'")

# Practical example: extracting content between tags
xml_text = "<name>John</name><age>30</age><city>New York</city>"

# Extract tag content
tag_pattern = r"<(\\w+)>(.*?)</\\1>"  # \\1 refers to first group
matches = re.findall(tag_pattern, xml_text)
print(f"\\nXML tag extraction:")
for tag, content in matches:
    print(f"  {tag}: {content}")

print("\\n" + "="*50)
print("Look-ahead and Look-behind (Advanced):")

# Positive look-ahead (?=...)
text = "password123, username456, email789"
pattern = r"\\w+(?=\\d+)"  # Word followed by digits
matches = re.findall(pattern, text)
print(f"Words followed by digits: {matches}")

# Negative look-ahead (?!...)
text = "cat, dog, caterpillar, dogma"
pattern = r"cat(?!erpillar)"  # 'cat' not followed by 'erpillar'
matches = re.findall(pattern, text)
print(f"'cat' not followed by 'erpillar': {matches}")

# Positive look-behind (?<=...)
text = "USD100, EUR200, GBP150"
pattern = r"(?<=USD)\\d+"  # Digits preceded by 'USD'
matches = re.findall(pattern, text)
print(f"Numbers after 'USD': {matches}")

# Negative look-behind (?<!...)
text = "pre-test, test, post-test"
pattern = r"(?<!pre-)test"  # 'test' not preceded by 'pre-'
matches = re.findall(pattern, text)
print(f"'test' not preceded by 'pre-': {matches}")

# Complex example: validating passwords
passwords = ["Abc123!", "password", "ABC123", "abc123!", "Abcdef1!"]
# Password must have: uppercase, lowercase, digit, special char, 8+ chars
password_pattern = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).{8,}$"

print("\\nPassword validation:")
for pwd in passwords:
    if re.match(password_pattern, pwd):
        print(f"  '{pwd}': Valid ✓")
    else:
        print(f"  '{pwd}': Invalid ✗")`}</pre>
          </div>
        </section>

        {/* Python re Module */}
        <section className="py-topic-section">
          <h2>🐍 Python re Module Functions</h2>
          
          <div className="py-code-block">
            <pre>{`# Python re module functions and methods
import re

print("Python re Module Functions:")

# Sample text for demonstrations
sample_text = """
John Doe: john.doe@email.com, Phone: (555) 123-4567
Jane Smith: jane.smith@company.org, Phone: (555) 987-6543
Bob Johnson: bob@example.net, Phone: (555) 456-7890
Alice Brown: alice.brown@test.edu, Phone: (555) 321-0987
"""

print("Sample text:")
print(sample_text)

print("\\n" + "="*50)
print("re.search() - Find first match:")

# re.search() finds the first occurrence
email_pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
match = re.search(email_pattern, sample_text)

if match:
    print(f"First email found: {match.group()}")
    print(f"Position: {match.start()}-{match.end()}")
    print(f"Text before match: '{sample_text[:match.start()][-20:]}'")
    print(f"Text after match: '{sample_text[match.end():][:20]}'")
else:
    print("No email found")

print("\\n" + "="*50)
print("re.match() - Match at string beginning:")

# re.match() only matches at the beginning of string
text_samples = [
    "john.doe@email.com is my email",
    "My email is john.doe@email.com",
    "Contact: john.doe@email.com"
]

for text in text_samples:
    match = re.match(email_pattern, text)
    if match:
        print(f"✓ '{text[:30]}...' starts with email")
    else:
        print(f"✗ '{text[:30]}...' doesn't start with email")

print("\\n" + "="*50)
print("re.findall() - Find all matches:")

# Find all emails
emails = re.findall(email_pattern, sample_text)
print(f"All emails found: {emails}")

# Find all phone numbers with groups
phone_pattern = r"\\((\\d{3})\\) (\\d{3})-(\\d{4})"
phones = re.findall(phone_pattern, sample_text)
print(f"All phone numbers (as tuples): {phones}")

# Without groups - returns full matches
phone_pattern_full = r"\\(\\d{3}\\) \\d{3}-\\d{4}"
phones_full = re.findall(phone_pattern_full, sample_text)
print(f"Full phone number matches: {phones_full}")

print("\\n" + "="*50)
print("re.finditer() - Find all matches with match objects:")

# Find all emails with detailed information
email_matches = re.finditer(email_pattern, sample_text)
print("Email matches with positions:")
for i, match in enumerate(email_matches, 1):
    print(f"  {i}. '{match.group()}' at position {match.start()}-{match.end()}")

# Find names (word before colon)
name_pattern = r"(\\w+ \\w+):"
name_matches = re.finditer(name_pattern, sample_text)
print("\\nName matches:")
for match in name_matches:
    full_match = match.group()
    name_only = match.group(1)
    print(f"  Full match: '{full_match}', Name: '{name_only}'")

print("\\n" + "="*50)
print("re.sub() - Search and replace:")

# Basic substitution
text = "The quick brown fox jumps over the lazy dog"
new_text = re.sub(r"\\bquick\\b", "fast", text)
print(f"Original: {text}")
print(f"Modified: {new_text}")

# Multiple substitutions
phone_text = "Call me at (555) 123-4567 or (555) 987-6543"
# Replace phone format
formatted_phones = re.sub(r"\\((\\d{3})\\) (\\d{3})-(\\d{4})", 
                         r"\\1.\\2.\\3", phone_text)
print(f"\\nOriginal phones: {phone_text}")
print(f"Reformatted: {formatted_phones}")

# Case-insensitive replacement
text = "Python is great. PYTHON rocks! python rules."
new_text = re.sub(r"python", "Java", text, flags=re.IGNORECASE)
print(f"\\nOriginal: {text}")
print(f"Replaced: {new_text}")

# Limit number of replacements
text = "apple apple apple apple"
limited_replace = re.sub(r"apple", "orange", text, count=2)
print(f"\\nLimited replacement: {limited_replace}")

print("\\n" + "="*50)
print("re.subn() - Replace and count:")

# re.subn() returns tuple (new_string, number_of_replacements)
text = "The cat in the hat sat on the mat"
result, count = re.subn(r"\\b\\w*at\\b", "DOG", text)
print(f"Original: {text}")
print(f"Result: {result}")
print(f"Replacements made: {count}")

print("\\n" + "="*50)
print("re.split() - Split by pattern:")

# Split by whitespace
text = "apple,banana;orange:grape|cherry"
# Split by various delimiters
parts = re.split(r"[,;:|]", text)
print(f"Split by delimiters: {parts}")

# Split with capture groups (keeps delimiters)
parts_with_delims = re.split(r"([,;:|])", text)
print(f"Split keeping delimiters: {parts_with_delims}")

# Split text into sentences
paragraph = "Hello world. How are you? I am fine! Great weather today."
sentences = re.split(r"[.!?]+", paragraph)
sentences = [s.strip() for s in sentences if s.strip()]  # Clean up
print(f"\\nSentences: {sentences}")

# Limit splits
text = "one-two-three-four-five"
limited_split = re.split(r"-", text, maxsplit=2)
print(f"Limited split: {limited_split}")

print("\\n" + "="*50)
print("re.compile() - Compiled patterns:")

# Compile pattern for reuse
email_regex = re.compile(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}")
phone_regex = re.compile(r"\\((\\d{3})\\) (\\d{3})-(\\d{4})")

# Use compiled patterns
test_strings = [
    "Contact john@example.com",
    "Call (555) 123-4567",
    "Email: alice@test.org, Phone: (555) 987-6543"
]

print("Using compiled patterns:")
for text in test_strings:
    email_match = email_regex.search(text)
    phone_match = phone_regex.search(text)
    
    print(f"Text: '{text}'")
    if email_match:
        print(f"  Email: {email_match.group()}")
    if phone_match:
        print(f"  Phone: {phone_match.group()}")
    if not (email_match or phone_match):
        print(f"  No matches found")

# Performance benefit of compilation (for repeated use)
import time

pattern = r"\\b\\w{5}\\b"  # 5-letter words
text = "The quick brown fox jumps over the lazy dog " * 1000

# Without compilation
start_time = time.time()
for _ in range(100):
    matches = re.findall(pattern, text)
end_time = time.time()
time_no_compile = end_time - start_time

# With compilation
compiled_pattern = re.compile(pattern)
start_time = time.time()
for _ in range(100):
    matches = compiled_pattern.findall(text)
end_time = time.time()
time_compiled = end_time - start_time

print(f"\\nPerformance comparison (100 iterations):")
print(f"Without compilation: {time_no_compile:.4f} seconds")
print(f"With compilation: {time_compiled:.4f} seconds")
print(f"Speedup: {time_no_compile/time_compiled:.2f}x")

print("\\n" + "="*50)
print("Match object methods and properties:")

text = "Contact John Doe at john.doe@example.com or call (555) 123-4567"
pattern = r"(?P<name>\\w+ \\w+) at (?P<email>\\S+@\\S+) or call (?P<phone>\\([^)]+\\) [\\d-]+)"

match = re.search(pattern, text)
if match:
    print("Match object methods:")
    print(f"  .group(): '{match.group()}'")  # Full match
    print(f"  .group(0): '{match.group(0)}'")  # Same as .group()
    print(f"  .group(1): '{match.group(1)}'")  # First group
    print(f"  .group(2): '{match.group(2)}'")  # Second group
    print(f"  .group(3): '{match.group(3)}'")  # Third group
    
    print(f"\\n  Named groups:")
    print(f"  .group('name'): '{match.group('name')}'")
    print(f"  .group('email'): '{match.group('email')}'")
    print(f"  .group('phone'): '{match.group('phone')}'")
    
    print(f"\\n  Position methods:")
    print(f"  .start(): {match.start()}")
    print(f"  .end(): {match.end()}")
    print(f"  .span(): {match.span()}")
    
    print(f"\\n  .groups(): {match.groups()}")
    print(f"  .groupdict(): {match.groupdict()}")

print("\\n" + "="*50)
print("Regex flags:")

text = """
Line 1: Hello World
Line 2: HELLO world
Line 3: goodbye WORLD
"""

# Different flags demonstration
flags_demo = {
    "No flags": (r"hello", 0),
    "IGNORECASE": (r"hello", re.IGNORECASE),
    "MULTILINE": (r"^Line", re.MULTILINE),
    "DOTALL": (r"Line.*World", re.DOTALL),
    "VERBOSE": (r"""
        \\b              # word boundary
        [Hh]ello         # Hello or hello  
        \\s              # whitespace
        [Ww]orld         # World or world
        \\b              # word boundary
    """, re.VERBOSE)
}

for description, (pattern, flags) in flags_demo.items():
    matches = re.findall(pattern, text, flags)
    print(f"{description}: {matches}")

# Combining flags
combined_flags = re.IGNORECASE | re.MULTILINE
pattern = r"^line.*world$"
matches = re.findall(pattern, text, combined_flags)
print(f"\\nCombined flags (IGNORECASE | MULTILINE): {matches}")

print("\\n" + "="*50)
print("Advanced substitution with functions:")

def format_phone(match):
    """Function to format phone numbers."""
    area = match.group(1)
    exchange = match.group(2)
    number = match.group(3)
    return f"+1-{area}-{exchange}-{number}"

phone_text = "Call (555) 123-4567 or (555) 987-6543 for assistance"
formatted = re.sub(r"\\((\\d{3})\\) (\\d{3})-(\\d{4})", format_phone, phone_text)
print(f"Original: {phone_text}")
print(f"Formatted: {formatted}")

# Using lambda for simple transformations
text = "I have 5 apples and 10 oranges"
# Double all numbers
doubled = re.sub(r"\\d+", lambda m: str(int(m.group()) * 2), text)
print(f"\\nOriginal: {text}")
print(f"Doubled numbers: {doubled}")

# Complex transformation example
log_entry = "2023-12-25 10:30:15 INFO User logged in successfully"
def format_log(match):
    date = match.group(1)
    time = match.group(2)
    level = match.group(3)
    message = match.group(4)
    return f"[{level}] {date} at {time}: {message}"

log_pattern = r"(\\d{4}-\\d{2}-\\d{2}) (\\d{2}:\\d{2}:\\d{2}) (\\w+) (.*)"
formatted_log = re.sub(log_pattern, format_log, log_entry)
print(f"\\nOriginal log: {log_entry}")
print(f"Formatted log: {formatted_log}")

print("\\n" + "="*50)
print("Error handling and validation:")

# Handling invalid patterns
invalid_patterns = [
    r"[unclosed bracket",
    r"(?P<unclosed group",
    r"\\k<invalid_reference>",
    r"(?P<>empty_name)"
]

print("Testing invalid patterns:")
for pattern in invalid_patterns:
    try:
        re.compile(pattern)
        print(f"  '{pattern}': Valid")
    except re.error as e:
        print(f"  '{pattern}': Error - {e}")

# Safe pattern testing function
def safe_regex_test(pattern, text):
    """Safely test a regex pattern."""
    try:
        compiled = re.compile(pattern)
        matches = compiled.findall(text)
        return matches, None
    except re.error as e:
        return None, str(e)

test_cases = [
    (r"\\d+", "abc 123 def"),
    (r"[invalid", "test string"),
    (r"(?P<num>\\d+)", "number 42")
]

print("\\nSafe regex testing:")
for pattern, text in test_cases:
    matches, error = safe_regex_test(pattern, text)
    if error:
        print(f"  Pattern '{pattern}': Error - {error}")
    else:
        print(f"  Pattern '{pattern}': Matches - {matches}")

# Input validation using regex
def validate_input(value, pattern, description):
    """Validate input against regex pattern."""
    if re.match(pattern, value):
        return True, f"Valid {description}"
    else:
        return False, f"Invalid {description}"

# Validation examples
validations = [
    ("john@example.com", r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", "email"),
    ("invalid-email", r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", "email"),
    ("(555) 123-4567", r"^\\(\\d{3}\\) \\d{3}-\\d{4}$", "phone number"),
    ("555-123-4567", r"^\\(\\d{3}\\) \\d{3}-\\d{4}$", "phone number")
]

print("\\nInput validation:")
for value, pattern, description in validations:
    is_valid, message = validate_input(value, pattern, description)
    status = "✓" if is_valid else "✗"
    print(f"  {status} '{value}': {message}")`}</pre>
          </div>
        </section>

        {/* Practical Applications */}
        <section className="py-topic-section">
          <h2>🛠️ Practical Applications</h2>
          
          <div className="py-code-block">
            <pre>{`# Practical regex applications
import re
import json
from datetime import datetime

print("Practical Regular Expression Applications:")

print("\\n" + "="*50)
print("1. Data Extraction and Parsing:")

# Log file parsing
log_data = """
2023-12-25 10:30:15 INFO [UserService] User 'alice' logged in successfully from IP 192.168.1.100
2023-12-25 10:31:22 ERROR [DatabaseService] Connection timeout to database server db.example.com:5432
2023-12-25 10:32:05 WARN [AuthService] Failed login attempt for user 'bob' from IP 10.0.0.50
2023-12-25 10:33:18 INFO [PaymentService] Payment of $25.99 processed for order #12345
2023-12-25 10:34:30 ERROR [EmailService] Failed to send email to invalid.email@domain
"""

# Extract structured information from logs
log_pattern = r"(\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}) (\\w+) \\[(\\w+)\\] (.*)"

print("Parsing log entries:")
log_entries = []
for line in log_data.strip().split('\\n'):
    match = re.match(log_pattern, line)
    if match:
        timestamp, level, service, message = match.groups()
        log_entries.append({
            'timestamp': timestamp,
            'level': level,
            'service': service,
            'message': message
        })
        print(f"  {timestamp} [{level}] {service}: {message[:50]}...")

# Extract specific information
ip_pattern = r"IP (\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})"
payment_pattern = r"\\$(\\d+\\.\\d{2})"
order_pattern = r"order #(\\d+)"

print("\\nExtracted specific data:")
for entry in log_entries:
    message = entry['message']
    
    # Find IP addresses
    ip_matches = re.findall(ip_pattern, message)
    if ip_matches:
        print(f"  IP addresses: {ip_matches}")
    
    # Find payment amounts
    payment_matches = re.findall(payment_pattern, message)
    if payment_matches:
        print(f"  Payment amounts: {', $'.join(payment_matches)}")
    
    # Find order numbers
    order_matches = re.findall(order_pattern, message)
    if order_matches:
        print(f"  Order numbers: {', '.join(order_matches)}")

print("\\n" + "="*50)
print("2. Data Validation:")

def create_validator(pattern, error_message):
    """Create a validation function from a regex pattern."""
    compiled_pattern = re.compile(pattern)
    
    def validator(value):
        if compiled_pattern.match(value):
            return True, "Valid"
        return False, error_message
    
    return validator

# Create various validators
validators = {
    'email': create_validator(
        r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        "Invalid email format"
    ),
    'phone': create_validator(
        r"^\\(?\\d{3}\\)?[-\\s]?\\d{3}[-\\s]?\\d{4}$",
        "Phone must be in format: (XXX) XXX-XXXX or XXX-XXX-XXXX"
    ),
    'ssn': create_validator(
        r"^\\d{3}-\\d{2}-\\d{4}$",
        "SSN must be in format: XXX-XX-XXXX"
    ),
    'credit_card': create_validator(
        r"^\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}$",
        "Credit card must be 16 digits with optional spaces or dashes"
    ),
    'postal_code': create_validator(
        r"^\\d{5}(-\\d{4})?$",
        "Postal code must be XXXXX or XXXXX-XXXX"
    )
}

# Test data
test_data = {
    'email': ['john@example.com', 'invalid.email', 'user@domain.org'],
    'phone': ['(555) 123-4567', '555-123-4567', '5551234567', 'invalid'],
    'ssn': ['123-45-6789', '123456789', '12-345-6789'],
    'credit_card': ['1234 5678 9012 3456', '1234-5678-9012-3456', '1234567890123456', '123'],
    'postal_code': ['12345', '12345-6789', '1234', '12345-67890']
}

print("Data validation results:")
for data_type, values in test_data.items():
    print(f"\\n{data_type.replace('_', ' ').title()}:")
    validator = validators[data_type]
    for value in values:
        is_valid, message = validator(value)
        status = "✓" if is_valid else "✗"
        print(f"  {status} '{value}': {message}")

print("\\n" + "="*50)
print("3. Text Processing and Cleaning:")

# Clean and normalize text data
messy_text = """
  Hello,    World!   This   is    some    messy     text.
It has   extra   spaces,  weird   punctuation!!!   
And...   inconsistent   formatting???
"""

def clean_text(text):
    """Clean and normalize text using regex."""
    # Remove extra whitespace
    text = re.sub(r'\\s+', ' ', text)
    
    # Normalize punctuation
    text = re.sub(r'[!]{2,}', '!', text)  # Multiple exclamations
    text = re.sub(r'[?]{2,}', '?', text)  # Multiple question marks
    text = re.sub(r'[.]{2,}', '...', text)  # Multiple periods to ellipsis
    
    # Fix spacing around punctuation
    text = re.sub(r'\\s+([,.!?;:])', r'\\1', text)  # Remove space before
    text = re.sub(r'([,.!?;:])(?!\\s)', r'\\1 ', text)  # Add space after
    
    # Clean up
    text = text.strip()
    
    return text

print("Text cleaning:")
print(f"Original: {repr(messy_text)}")
cleaned = clean_text(messy_text)
print(f"Cleaned: {repr(cleaned)}")

# Extract and format information
contact_text = """
John Doe - johndoe@email.com - (555)123-4567 - 123 Main St, Anytown, ST 12345
Jane Smith - jane.smith@company.org - 555.987.6543 - 456 Oak Ave, Somewhere, ST 67890
Bob Johnson - bob@example.net - (555) 456-7890 - 789 Pine Rd, Nowhere, ST 54321
"""

def extract_contact_info(text):
    """Extract structured contact information."""
    pattern = r"([^-]+) - ([^-]+) - ([^-]+) - (.*)"
    
    contacts = []
    for line in text.strip().split('\\n'):
        match = re.match(pattern, line)
        if match:
            name, email, phone, address = [g.strip() for g in match.groups()]
            
            # Clean phone number
            clean_phone = re.sub(r'[^\\d]', '', phone)
            formatted_phone = f"({clean_phone[:3]}) {clean_phone[3:6]}-{clean_phone[6:]}"
            
            contacts.append({
                'name': name,
                'email': email,
                'phone': formatted_phone,
                'address': address
            })
    
    return contacts

print("\\nContact information extraction:")
contacts = extract_contact_info(contact_text)
for contact in contacts:
    print(f"  Name: {contact['name']}")
    print(f"  Email: {contact['email']}")
    print(f"  Phone: {contact['phone']}")
    print(f"  Address: {contact['address']}")
    print()

print("\\n" + "="*50)
print("4. Configuration File Processing:")

config_content = """
# Database Configuration
database.host = localhost
database.port = 5432
database.name = myapp_db
database.user = dbuser
database.password = secret123

# Application Settings
app.debug = true
app.max_connections = 100
app.timeout = 30

# Feature Flags
feature.new_ui = enabled
feature.experimental = disabled
"""

def parse_config(content):
    """Parse configuration file using regex."""
    config = {}
    
    # Pattern for key-value pairs
    kv_pattern = r"^([a-zA-Z_][a-zA-Z0-9_.]*)\\s*=\\s*(.*)$"
    
    for line in content.split('\\n'):
        line = line.strip()
        
        # Skip comments and empty lines
        if not line or line.startswith('#'):
            continue
        
        match = re.match(kv_pattern, line)
        if match:
            key, value = match.groups()
            value = value.strip()
            
            # Convert values to appropriate types
            if value.lower() in ('true', 'false'):
                value = value.lower() == 'true'
            elif value.isdigit():
                value = int(value)
            elif re.match(r'^\\d+\\.\\d+$', value):
                value = float(value)
            
            config[key] = value
    
    return config

print("Configuration parsing:")
config = parse_config(config_content)
for key, value in config.items():
    print(f"  {key}: {value} ({type(value).__name__})")

print("\\n" + "="*50)
print("5. URL and HTML Processing:")

html_content = """
<html>
<body>
    <h1>Welcome to My Site</h1>
    <p>Visit our <a href="https://www.example.com">main site</a></p>
    <p>Contact us at <a href="mailto:info@example.com">info@example.com</a></p>
    <p>Call us: <a href="tel:+15551234567">(555) 123-4567</a></p>
    <img src="/images/logo.png" alt="Company Logo">
    <script src="https://cdn.example.com/js/app.js"></script>
</body>
</html>
"""

def extract_links(html):
    """Extract various types of links from HTML."""
    results = {
        'http_links': [],
        'email_links': [],
        'phone_links': [],
        'images': [],
        'scripts': []
    }
    
    # HTTP/HTTPS links
    http_pattern = r'href=["\'](https?://[^"\']+)["\']'
    results['http_links'] = re.findall(http_pattern, html, re.IGNORECASE)
    
    # Email links
    email_pattern = r'href=["\']mailto:([^"\']+)["\']'
    results['email_links'] = re.findall(email_pattern, html, re.IGNORECASE)
    
    # Phone links
    phone_pattern = r'href=["\']tel:([^"\']+)["\']'
    results['phone_links'] = re.findall(phone_pattern, html, re.IGNORECASE)
    
    # Images
    img_pattern = r'<img[^>]+src=["\'](([^"\']+))["\'][^>]*>'
    results['images'] = re.findall(img_pattern, html, re.IGNORECASE)
    
    # Scripts
    script_pattern = r'<script[^>]+src=["\'](([^"\']+))["\'][^>]*>'
    results['scripts'] = re.findall(script_pattern, html, re.IGNORECASE)
    
    return results

print("HTML link extraction:")
links = extract_links(html_content)
for link_type, urls in links.items():
    if urls:
        print(f"  {link_type.replace('_', ' ').title()}:")
        for url in urls:
            # Handle tuple results from some patterns
            if isinstance(url, tuple):
                url = url[0]
            print(f"    {url}")

# URL validation and parsing
urls_to_test = [
    "https://www.example.com/path?query=value#section",
    "http://subdomain.example.org:8080/api/v1/users",
    "ftp://files.example.com/download.zip",
    "invalid-url",
    "https://example.com/path with spaces"
]

url_pattern = r"^(https?|ftp)://[^\\s/$.?#].[^\\s]*$"

print("\\nURL validation:")
for url in urls_to_test:
    is_valid = bool(re.match(url_pattern, url))
    status = "✓" if is_valid else "✗"
    print(f"  {status} {url}")

print("\\n" + "="*50)
print("6. Code Analysis and Processing:")

python_code = '''
def calculate_area(radius):
    """Calculate circle area."""
    import math
    return math.pi * radius ** 2

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

# TODO: Add validation
# FIXME: Handle edge cases
x = 42  # Magic number
'''

def analyze_code(code):
    """Analyze Python code for various patterns."""
    analysis = {
        'functions': [],
        'classes': [],
        'imports': [],
        'comments': [],
        'todos': [],
        'magic_numbers': []
    }
    
    # Function definitions
    func_pattern = r"def\\s+(\\w+)\\s*\\([^)]*\\):"
    analysis['functions'] = re.findall(func_pattern, code)
    
    # Class definitions
    class_pattern = r"class\\s+(\\w+)\\s*(?:\\([^)]*\\))?:"
    analysis['classes'] = re.findall(class_pattern, code)
    
    # Import statements
    import_pattern = r"^\\s*(?:from\\s+\\w+\\s+)?import\\s+([\\w., ]+)"
    analysis['imports'] = re.findall(import_pattern, code, re.MULTILINE)
    
    # Comments
    comment_pattern = r"#(.*)$"
    analysis['comments'] = [c.strip() for c in re.findall(comment_pattern, code, re.MULTILINE)]
    
    # TODO/FIXME items
    todo_pattern = r"#\\s*(TODO|FIXME|HACK|XXX):?\\s*(.*)"
    analysis['todos'] = re.findall(todo_pattern, code, re.IGNORECASE)
    
    # Magic numbers (numbers that aren't 0, 1, or obvious constants)
    number_pattern = r"\\b(\\d{2,}|[2-9])\\b"
    potential_magic = re.findall(number_pattern, code)
    # Filter out obvious non-magic numbers
    analysis['magic_numbers'] = [n for n in potential_magic if n not in ['10', '100']]
    
    return analysis

print("Code analysis:")
analysis = analyze_code(python_code)
for category, items in analysis.items():
    if items:
        print(f"  {category.replace('_', ' ').title()}: {items}")

print("\\n" + "="*50)
print("7. Performance Optimization:")

# Demonstrate performance difference between compiled and non-compiled patterns
import time

large_text = "The quick brown fox jumps over the lazy dog. " * 10000
pattern = r"\\b\\w{5}\\b"  # 5-letter words

# Test without compilation
def test_without_compilation():
    start = time.time()
    for _ in range(50):
        matches = re.findall(pattern, large_text)
    return time.time() - start

# Test with compilation
def test_with_compilation():
    compiled_pattern = re.compile(pattern)
    start = time.time()
    for _ in range(50):
        matches = compiled_pattern.findall(large_text)
    return time.time() - start

print("Performance comparison (50 iterations on large text):")
time_no_compile = test_without_compilation()
time_compiled = test_with_compilation()

print(f"  Without compilation: {time_no_compile:.4f} seconds")
print(f"  With compilation: {time_compiled:.4f} seconds")
if time_no_compile > 0:
    speedup = time_no_compile / time_compiled
    print(f"  Speedup factor: {speedup:.2f}x")

# Efficient pattern design
inefficient_pattern = r"(a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z)+"
efficient_pattern = r"[a-z]+"

test_text = "abcdefghijklmnopqrstuvwxyz" * 100

print("\\nPattern efficiency comparison:")
start = time.time()
for _ in range(1000):
    re.findall(inefficient_pattern, test_text)
time_inefficient = time.time() - start

start = time.time()
for _ in range(1000):
    re.findall(efficient_pattern, test_text)
time_efficient = time.time() - start

print(f"  Inefficient pattern: {time_inefficient:.4f} seconds")
print(f"  Efficient pattern: {time_efficient:.4f} seconds")
if time_inefficient > 0:
    improvement = time_inefficient / time_efficient
    print(f"  Improvement factor: {improvement:.2f}x")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Regular Expression Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Best Practices:</h3>
            <ul>
              <li><strong>Use raw strings:</strong> Prefix with 'r' to avoid escaping issues (r"\\d+" vs "\\\\d+")</li>
              <li><strong>Compile patterns for reuse:</strong> Use re.compile() for patterns used multiple times</li>
              <li><strong>Be specific:</strong> Use precise patterns instead of overly broad ones</li>
              <li><strong>Use non-greedy quantifiers:</strong> When appropriate, use *?, +?, ?? for better control</li>
              <li><strong>Validate user input:</strong> Always validate regex patterns from user input</li>
              <li><strong>Use character classes:</strong> [0-9] instead of (0|1|2|3|4|5|6|7|8|9)</li>
              <li><strong>Comment complex patterns:</strong> Use re.VERBOSE flag for readable complex patterns</li>
              <li><strong>Test thoroughly:</strong> Include edge cases and invalid input in your tests</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a regex to validate international phone numbers in various formats</li>
              <li>Build a log parser that extracts timestamps, IP addresses, and error codes</li>
              <li>Write a regex to find and extract email addresses from any text</li>
              <li>Create a password strength validator with specific criteria</li>
              <li>Build a URL parser that extracts protocol, domain, path, and query parameters</li>
              <li>Write a regex to clean and normalize whitespace in text</li>
              <li>Create a markdown link extractor [text](url)</li>
              <li>Build a CSV parser using regex (handle quoted fields with commas)</li>
              <li>Write a regex to extract function definitions from Python code</li>
              <li>Create a data masking tool that replaces sensitive information with asterisks</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default RegularExpressions;
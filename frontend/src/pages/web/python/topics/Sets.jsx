import React from 'react';
import '../Navbarweb.css';

function Sets() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>🎯 Sets</h1>
        <p className="py-topic-subtitle">
          Learn about unique collections and set operations
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>🎯 What are Sets?</h2>
          <p>
            Sets are unordered collections of unique elements in Python. They are mutable, meaning you 
            can add and remove items, but they cannot contain duplicate values. Sets are perfect for 
            removing duplicates from sequences, testing membership, and performing mathematical set operations 
            like unions, intersections, and differences.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Characteristics of Sets:</h3>
            <ul>
              <li><strong>Unordered:</strong> Items have no defined order and no index</li>
              <li><strong>Unique Elements:</strong> Cannot contain duplicate values</li>
              <li><strong>Mutable:</strong> Can add and remove items after creation</li>
              <li><strong>Hashable Elements Only:</strong> Can only contain immutable types</li>
              <li><strong>Fast Membership Testing:</strong> O(1) average time complexity</li>
              <li><strong>Mathematical Operations:</strong> Support union, intersection, difference, etc.</li>
            </ul>
          </div>
        </section>

        {/* Creating Sets */}
        <section className="py-topic-section">
          <h2>🛠️ Creating Sets</h2>
          
          <div className="py-code-block">
            <pre>{`# Different ways to create sets
# Empty set (note: {{}} creates a dictionary, not a set!)
empty_set = set()
print(f"Empty set: {{empty_set}}")
print(f"Type: {{type(empty_set)}}")

# Set with initial values using curly braces
fruits = {{"apple", "banana", "cherry", "apple"}}  # Note: duplicate "apple" ignored
print(f"Fruits set: {{fruits}}")

# Set from a list (removes duplicates)
numbers_list = [1, 2, 3, 3, 4, 4, 5]
numbers_set = set(numbers_list)
print(f"Numbers from list: {{numbers_set}}")

# Set from a string (each character becomes an element)
char_set = set("hello")
print(f"Characters from 'hello': {{char_set}}")

# Set from a range
range_set = set(range(1, 6))
print(f"Set from range(1, 6): {{range_set}}")

# Set with mixed data types
mixed_set = {{1, "hello", 3.14, (1, 2), True}}
print(f"Mixed set: {{mixed_set}}")

# Set comprehension
squares_set = {{x**2 for x in range(1, 6)}}
print(f"Squares set: {{squares_set}}")

# Conditional set comprehension
even_squares = {{x**2 for x in range(1, 11) if x % 2 == 0}}
print(f"Even squares: {{even_squares}}")

# Set from dictionary keys
student_grades = {{"alice": 85, "bob": 92, "charlie": 78}}
students_set = set(student_grades.keys())
print(f"Students set: {{students_set}}")

# Nested data - only hashable types allowed
valid_set = {{1, 2, "hello", (1, 2, 3)}}         # Valid
# invalid_set = {{1, 2, [1, 2, 3]}}               # Would raise TypeError!
print(f"Valid set with tuple: {{valid_set}}")

# Creating sets from multiple iterables
list1 = [1, 2, 3]
list2 = [3, 4, 5]
combined_set = set(list1) | set(list2)
print(f"Combined sets: {{combined_set}}")

# Frozen sets (immutable sets)
frozen_fruits = frozenset(["apple", "banana", "cherry"])
print(f"Frozen set: {{frozen_fruits}}")
print(f"Frozen set type: {{type(frozen_fruits)}}")

# Set of frozensets (nested sets)
set_of_sets = {{
    frozenset([1, 2, 3]),
    frozenset([4, 5, 6]),
    frozenset([1, 2, 3])  # Duplicate - will be ignored
}}
print(f"Set of frozensets: {{set_of_sets}}")

# Converting other data types to sets
tuple_to_set = set((1, 2, 3, 2, 1))
string_to_set = set("programming")  # Unique characters
print(f"Tuple to set: {{tuple_to_set}}")
print(f"String to set: {{string_to_set}}")`}</pre>
          </div>
        </section>

        {/* Set Operations */}
        <section className="py-topic-section">
          <h2>🔢 Mathematical Set Operations</h2>
          
          <div className="py-code-block">
            <pre>{`# Set mathematical operations
set_a = {{1, 2, 3, 4, 5}}
set_b = {{4, 5, 6, 7, 8}}
set_c = {{1, 2, 3}}

print(f"Set A: {{set_a}}")
print(f"Set B: {{set_b}}")
print(f"Set C: {{set_c}}")

# Union - all elements from both sets
union_method = set_a.union(set_b)
union_operator = set_a | set_b
print(f"\\nUnion (A ∪ B):")
print(f"Using union(): {{union_method}}")
print(f"Using | operator: {{union_operator}}")

# Multiple set union
set_d = {{9, 10}}
multiple_union = set_a | set_b | set_d
print(f"Multiple union (A ∪ B ∪ D): {{multiple_union}}")

# Intersection - common elements
intersection_method = set_a.intersection(set_b)
intersection_operator = set_a & set_b
print(f"\\nIntersection (A ∩ B):")
print(f"Using intersection(): {{intersection_method}}")
print(f"Using & operator: {{intersection_operator}}")

# Difference - elements in first set but not in second
difference_method = set_a.difference(set_b)
difference_operator = set_a - set_b
print(f"\\nDifference (A - B):")
print(f"Using difference(): {{difference_method}}")
print(f"Using - operator: {{difference_operator}}")

# Symmetric difference - elements in either set but not both
sym_diff_method = set_a.symmetric_difference(set_b)
sym_diff_operator = set_a ^ set_b
print(f"\\nSymmetric Difference (A ⊕ B):")
print(f"Using symmetric_difference(): {{sym_diff_method}}")
print(f"Using ^ operator: {{sym_diff_operator}}")

# Set relationships
print(f"\\nSet Relationships:")

# Subset - all elements of one set are in another
is_subset = set_c.issubset(set_a)
print(f"C is subset of A: {{is_subset}}")  # True

# Superset - one set contains all elements of another
is_superset = set_a.issuperset(set_c)
print(f"A is superset of C: {{is_superset}}")  # True

# Disjoint - no common elements
set_e = {{10, 11, 12}}
is_disjoint = set_a.isdisjoint(set_e)
print(f"A and E are disjoint: {{is_disjoint}}")  # True

# Proper subset/superset
is_proper_subset = set_c < set_a    # Proper subset
is_proper_superset = set_a > set_c  # Proper superset
print(f"C is proper subset of A: {{is_proper_subset}}")
print(f"A is proper superset of C: {{is_proper_superset}}")

# Set equality
set_copy = {{1, 2, 3, 4, 5}}
print(f"A equals copy: {{set_a == set_copy}}")

# Practical examples
print(f"\\nPractical Examples:")

# Finding common courses between students
alice_courses = {{"math", "physics", "chemistry", "biology"}}
bob_courses = {{"math", "computer_science", "physics", "art"}}
charlie_courses = {{"chemistry", "biology", "math", "history"}}

# Common courses for all three students
common_all = alice_courses & bob_courses & charlie_courses
print(f"Courses taken by all students: {{common_all}}")

# Courses taken by Alice or Bob but not Charlie
alice_or_bob = (alice_courses | bob_courses) - charlie_courses
print(f"Courses by Alice or Bob but not Charlie: {{alice_or_bob}}")

# Unique courses (taken by exactly one student)
all_courses = alice_courses | bob_courses | charlie_courses
shared_courses = (alice_courses & bob_courses) | (alice_courses & charlie_courses) | (bob_courses & charlie_courses)
unique_courses = all_courses - shared_courses
print(f"Unique courses (taken by exactly one student): {{unique_courses}}")

# Finding programming languages known by developers
dev1_languages = {{"python", "java", "javascript", "go"}}
dev2_languages = {{"python", "c++", "rust", "javascript"}}
dev3_languages = {{"java", "scala", "python", "kotlin"}}

# Languages known by all developers
common_languages = dev1_languages & dev2_languages & dev3_languages
print(f"\\nLanguages known by all developers: {{common_languages}}")

# Languages known by at least two developers
at_least_two = ((dev1_languages & dev2_languages) | 
                (dev1_languages & dev3_languages) | 
                (dev2_languages & dev3_languages))
print(f"Languages known by at least two developers: {{at_least_two}}")

# Update operations (modify sets in place)
print(f"\\nUpdate Operations:")
original_set = {{1, 2, 3}}
print(f"Original set: {{original_set}}")

# Update (union in place)
original_set.update({{4, 5, 6}})
print(f"After update with {{4, 5, 6}}: {{original_set}}")

# Intersection update (keep only common elements)
original_set.intersection_update({{2, 3, 4, 5}})
print(f"After intersection_update with {{2, 3, 4, 5}}: {{original_set}}")

# Difference update (remove common elements)
original_set.difference_update({{3, 4}})
print(f"After difference_update with {{3, 4}}: {{original_set}}")

# Symmetric difference update
original_set.symmetric_difference_update({{1, 6, 7}})
print(f"After symmetric_difference_update with {{1, 6, 7}}: {{original_set}}")

# Chaining operations
result = {{1, 2, 3, 4}}.union({{5, 6}}).difference({{2, 3}}).intersection({{1, 4, 5, 6}})
print(f"\\nChained operations result: {{result}}")

# Set operations with multiple types
numbers = {{1, 2, 3, 4, 5}}
strings = {{"1", "2", "3", "a", "b"}}

# This won't find matches because types are different
no_matches = numbers & strings
print(f"\\nNumbers & strings (different types): {{no_matches}}")

# Convert for comparison
str_numbers = {{str(x) for x in numbers}}
matches = str_numbers & strings
print(f"Converted numbers & strings: {{matches}}")

# Performance comparison
import time

large_list = list(range(100000)) * 2  # List with duplicates
large_set = set(large_list)

# Test membership
start_time = time.time()
for _ in range(1000):
    result = 50000 in large_list
list_time = time.time() - start_time

start_time = time.time()
for _ in range(1000):
    result = 50000 in large_set
set_time = time.time() - start_time

print(f"\\nPerformance (1000 membership tests):")
print(f"List time: {{list_time}} seconds")
print(f"Set time: {{set_time}} seconds")
print(f"Set is {{list_time / set_time if set_time > 0 else 'much'}} times faster")`}</pre>
          </div>
        </section>

        {/* Set Methods and Manipulation */}
        <section className="py-topic-section">
          <h2>⚙️ Set Methods and Manipulation</h2>
          
          <div className="py-code-block">
            <pre>{`# Set manipulation methods
fruits = {{"apple", "banana", "cherry"}}
print(f"Original fruits: {{fruits}}")

# Adding elements
fruits.add("orange")
print(f"After add('orange'): {{fruits}}")

# Add multiple elements
fruits.update(["grape", "kiwi", "mango"])
print(f"After update(['grape', 'kiwi', 'mango']): {{fruits}}")

# Update with another set
more_fruits = {{"pineapple", "strawberry"}}
fruits.update(more_fruits)
print(f"After update with set: {{fruits}}")

# Removing elements
# remove() - raises KeyError if element doesn't exist
fruits.remove("banana")
print(f"After remove('banana'): {{fruits}}")

# discard() - doesn't raise error if element doesn't exist
fruits.discard("grape")
fruits.discard("nonexistent")  # No error
print(f"After discard operations: {{fruits}}")

# pop() - removes and returns arbitrary element
popped_fruit = fruits.pop()
print(f"Popped fruit: {{popped_fruit}}")
print(f"After pop(): {{fruits}}")

# clear() - removes all elements
temp_set = {{1, 2, 3, 4, 5}}
print(f"Before clear: {{temp_set}}")
temp_set.clear()
print(f"After clear: {{temp_set}}")

# Set copying
original_set = {{1, 2, 3, 4, 5}}
shallow_copy = original_set.copy()
set_copy = set(original_set)

print(f"\\nSet Copying:")
print(f"Original: {{original_set}}")
print(f"Shallow copy: {{shallow_copy}}")
print(f"Set constructor copy: {{set_copy}}")

# Modify original and check copies
original_set.add(6)
print(f"After modifying original: {{original_set}}")
print(f"Shallow copy unchanged: {{shallow_copy}}")

# Set length and membership
numbers = {{1, 3, 5, 7, 9, 11}}
print(f"\\nSet Information:")
print(f"Set: {{numbers}}")
print(f"Length: {{len(numbers)}}")
print(f"Is 5 in set: {{5 in numbers}}")
print(f"Is 6 in set: {{6 in numbers}}")
print(f"Is empty: {{len(numbers) == 0}}")

# Converting sets to other types
print(f"\\nSet Conversions:")
number_set = {{3, 1, 4, 1, 5, 9, 2, 6}}
to_list = list(number_set)
to_tuple = tuple(number_set)
to_sorted_list = sorted(number_set)

print(f"Original set: {{number_set}}")
print(f"To list: {{to_list}}")
print(f"To tuple: {{to_tuple}}")
print(f"To sorted list: {{to_sorted_list}}")

# Finding min, max, sum
print(f"\\nSet Statistics:")
print(f"Min: {{min(number_set)}}")
print(f"Max: {{max(number_set)}}")
print(f"Sum: {{sum(number_set)}}")
print(f"Average: {{sum(number_set) / len(number_set)}}")

# Set iteration
print(f"\\nIterating through set:")
colors = {{"red", "green", "blue", "yellow"}}

# Simple iteration (order not guaranteed)
for color in colors:
    print(f"  Color: {{color}}")

# Sorted iteration
print("Sorted iteration:")
for color in sorted(colors):
    print(f"  Color: {{color}}")

# Enumerate with sets (order not guaranteed)
print("With enumerate:")
for i, color in enumerate(sorted(colors)):
    print(f"  {{i}}: {{color}}")

# Conditional operations
students_present = {{"alice", "bob", "charlie", "diana"}}
students_enrolled = {{"alice", "bob", "charlie", "diana", "eve", "frank"}}

# Find absent students
absent_students = students_enrolled - students_present
print(f"\\nAbsent students: {{absent_students}}")

# Check if all enrolled students are present
all_present = students_enrolled.issubset(students_present)
print(f"All students present: {{all_present}}")

# Add late arrivals
late_arrivals = {{"eve"}}
students_present.update(late_arrivals)
print(f"After late arrivals: {{students_present}}")

# Bulk operations
print(f"\\nBulk Operations:")
set1 = {{1, 2, 3, 4, 5}}
set2 = {{4, 5, 6, 7, 8}}
set3 = {{6, 7, 8, 9, 10}}

# Multiple unions
all_numbers = set1 | set2 | set3
print(f"All numbers (union): {{all_numbers}}")

# Multiple intersections
common_to_all = set1 & set2 & set3
print(f"Common to all: {{common_to_all}}")

# Working with set of strings
words = {{"python", "java", "javascript", "go", "rust"}}
print(f"\\nString Set Operations:")
print(f"Programming languages: {{words}}")

# Filter by length
short_names = {{word for word in words if len(word) <= 4}}
print(f"Short names (≤4 chars): {{short_names}}")

# Filter by starting letter
j_languages = {{word for word in words if word.startswith('j')}}
print(f"Languages starting with 'j': {{j_languages}}")

# Transform set elements
uppercase_words = {{word.upper() for word in words}}
print(f"Uppercase: {{uppercase_words}}")

# Set validation
def validate_email_domains(emails):
    """Extract and validate email domains."""
    domains = set()
    valid_domains = {{"gmail.com", "yahoo.com", "company.com", "university.edu"}}
    
    for email in emails:
        if "@" in email:
            domain = email.split("@")[1]
            domains.add(domain)
    
    valid = domains & valid_domains
    invalid = domains - valid_domains
    
    return valid, invalid

email_list = [
    "alice@gmail.com",
    "bob@yahoo.com", 
    "charlie@company.com",
    "diana@suspicious.net",
    "eve@university.edu",
    "frank@unknown.org"
]

valid_domains, invalid_domains = validate_email_domains(email_list)
print(f"\\nEmail Domain Validation:")
print(f"Valid domains: {{valid_domains}}")
print(f"Invalid domains: {{invalid_domains}}")

# Set-based deduplication
print(f"\\nDeduplication Examples:")

# Remove duplicates while preserving some order
original_list = [1, 2, 3, 2, 4, 3, 5, 1, 6]
# Method 1: Simple deduplication (order not preserved)
deduplicated_simple = list(set(original_list))

# Method 2: Preserve order
def dedupe_preserve_order(sequence):
    seen = set()
    result = []
    for item in sequence:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

deduplicated_ordered = dedupe_preserve_order(original_list)

print(f"Original list: {{original_list}}")
print(f"Simple dedup: {{deduplicated_simple}}")
print(f"Order-preserving dedup: {{deduplicated_ordered}}")

# Working with nested data using sets
print(f"\\nNested Data with Sets:")

# Set of tuples (coordinates)
coordinates = {{(0, 0), (1, 1), (2, 2), (1, 1)}}  # Duplicate (1,1) removed
print(f"Unique coordinates: {{coordinates}}")

# Check if point exists
target_point = (1, 1)
point_exists = target_point in coordinates
print(f"Point {{target_point}} exists: {{point_exists}}")

# Set operations with tuples
path1 = {{(0, 0), (1, 0), (2, 0), (3, 0)}}
path2 = {{(0, 0), (0, 1), (0, 2), (0, 3)}}

# Find intersection points
intersection_points = path1 & path2
print(f"Path intersection points: {{intersection_points}}")

# All points visited
all_points = path1 | path2
print(f"All points visited: {{all_points}}")

# Error handling with sets
print(f"\\nError Handling:")

def safe_set_operations(set_a, set_b, operation):
    """Safely perform set operations with error handling."""
    try:
        if operation == "union":
            return set_a | set_b
        elif operation == "intersection":
            return set_a & set_b
        elif operation == "difference":
            return set_a - set_b
        elif operation == "symmetric_difference":
            return set_a ^ set_b
        else:
            raise ValueError(f"Unknown operation: {{operation}}")
    except TypeError as e:
        return f"Type error: {{e}}"
    except Exception as e:
        return f"Error: {{e}}"

# Test with valid sets
result = safe_set_operations({{1, 2, 3}}, {{3, 4, 5}}, "intersection")
print(f"Valid operation result: {{result}}")

# Test with invalid operation
result = safe_set_operations({{1, 2, 3}}, {{3, 4, 5}}, "invalid")
print(f"Invalid operation result: {{result}}")`}</pre>
          </div>
        </section>

        {/* Practical Applications */}
        <section className="py-topic-section">
          <h2>🚀 Practical Applications</h2>
          
          <div className="py-code-block">
            <pre>{`# Real-world applications of sets

# 1. Data Cleaning and Deduplication
print("1. Data Cleaning Example:")

def clean_user_data(users):
    """Clean and deduplicate user data."""
    cleaned_users = set()
    
    for user in users:
        # Normalize email to lowercase
        cleaned_email = user.lower().strip()
        cleaned_users.add(cleaned_email)
    
    return sorted(list(cleaned_users))

raw_users = [
    "Alice@GMAIL.com",
    "  bob@yahoo.com  ",
    "alice@gmail.com",  # Duplicate (different case)
    "Charlie@Company.COM",
    "BOB@yahoo.com",     # Duplicate (different case)
    "diana@university.edu"
]

cleaned = clean_user_data(raw_users)
print(f"Original count: {{len(raw_users)}}")
print(f"Cleaned count: {{len(cleaned)}}")
print(f"Cleaned users: {{cleaned}}")

# 2. Access Control System
print(f"\\n2. Access Control System:")

class AccessControl:
    def __init__(self):
        self.admin_users = {{"admin", "root", "supervisor"}}
        self.regular_users = {{"alice", "bob", "charlie", "diana"}}
        self.guest_users = {{"guest1", "guest2", "temporary"}}
        
        self.admin_permissions = {{"read", "write", "delete", "execute", "admin"}}
        self.regular_permissions = {{"read", "write", "execute"}}
        self.guest_permissions = {{"read"}}
    
    def get_user_permissions(self, username):
        if username in self.admin_users:
            return self.admin_permissions
        elif username in self.regular_users:
            return self.regular_permissions
        elif username in self.guest_users:
            return self.guest_permissions
        else:
            return set()  # No permissions
    
    def can_user_perform(self, username, action):
        user_permissions = self.get_user_permissions(username)
        return action in user_permissions
    
    def add_user_to_group(self, username, group):
        if group == "admin":
            self.admin_users.add(username)
        elif group == "regular":
            self.regular_users.add(username)
        elif group == "guest":
            self.guest_users.add(username)
    
    def get_users_with_permission(self, permission):
        users_with_permission = set()
        
        all_users = self.admin_users | self.regular_users | self.guest_users
        
        for user in all_users:
            if permission in self.get_user_permissions(user):
                users_with_permission.add(user)
        
        return users_with_permission

# Test access control
ac = AccessControl()

test_users = ["admin", "alice", "guest1", "unknown"]
test_actions = ["read", "write", "delete", "admin"]

print("Access Control Matrix:")
for user in test_users:
    permissions = ac.get_user_permissions(user)
    print(f"{{user}}: {{permissions}}")

print(f"\\nUsers who can delete: {{ac.get_users_with_permission('delete')}}")
print(f"Users who can read: {{ac.get_users_with_permission('read')}}")

# 3. Inventory Management
print(f"\\n3. Inventory Management:")

class InventoryManager:
    def __init__(self):
        self.in_stock = set()
        self.out_of_stock = set()
        self.discontinued = set()
    
    def add_items(self, items):
        self.in_stock.update(items)
        # Remove from out of stock if they're now available
        self.out_of_stock.difference_update(items)
    
    def mark_out_of_stock(self, items):
        self.out_of_stock.update(items)
        self.in_stock.difference_update(items)
    
    def discontinue_items(self, items):
        self.discontinued.update(items)
        self.in_stock.difference_update(items)
        self.out_of_stock.difference_update(items)
    
    def get_available_items(self):
        return self.in_stock
    
    def get_unavailable_items(self):
        return self.out_of_stock | self.discontinued
    
    def can_fulfill_order(self, order_items):
        return set(order_items).issubset(self.in_stock)
    
    def get_missing_items(self, order_items):
        return set(order_items) - self.in_stock

# Test inventory management
inventory = InventoryManager()

# Add initial stock
inventory.add_items(["laptop", "mouse", "keyboard", "monitor", "webcam"])
print(f"Initial stock: {{inventory.get_available_items()}}")

# Mark some items out of stock
inventory.mark_out_of_stock(["webcam", "monitor"])
print(f"After marking items out of stock:")
print(f"  In stock: {{inventory.get_available_items()}}")
print(f"  Out of stock: {{inventory.out_of_stock}}")

# Test order fulfillment
order1 = ["laptop", "mouse"]
order2 = ["laptop", "webcam", "headphones"]

print(f"\\nOrder fulfillment:")
print(f"Order 1 {{order1}}: {{inventory.can_fulfill_order(order1)}}")
print(f"Order 2 {{order2}}: {{inventory.can_fulfill_order(order2)}}")
print(f"Missing for order 2: {{inventory.get_missing_items(order2)}}")

# 4. Social Network Analysis
print(f"\\n4. Social Network Analysis:")

class SocialNetwork:
    def __init__(self):
        self.friendships = {{}}
    
    def add_friendship(self, user1, user2):
        if user1 not in self.friendships:
            self.friendships[user1] = set()
        if user2 not in self.friendships:
            self.friendships[user2] = set()
        
        self.friendships[user1].add(user2)
        self.friendships[user2].add(user1)
    
    def get_friends(self, user):
        return self.friendships.get(user, set())
    
    def get_mutual_friends(self, user1, user2):
        friends1 = self.get_friends(user1)
        friends2 = self.get_friends(user2)
        return friends1 & friends2
    
    def suggest_friends(self, user):
        """Suggest friends based on mutual connections."""
        user_friends = self.get_friends(user)
        suggestions = set()
        
        # Find friends of friends
        for friend in user_friends:
            friend_friends = self.get_friends(friend)
            suggestions.update(friend_friends)
        
        # Remove user themselves and existing friends
        suggestions.discard(user)
        suggestions.difference_update(user_friends)
        
        return suggestions
    
    def get_network_stats(self):
        all_users = set(self.friendships.keys())
        total_friendships = sum(len(friends) for friends in self.friendships.values()) // 2
        
        return {{
            "total_users": len(all_users),
            "total_friendships": total_friendships,
            "users": all_users
        }}

# Test social network
network = SocialNetwork()

# Add friendships
friendships = [
    ("alice", "bob"),
    ("alice", "charlie"),
    ("bob", "diana"),
    ("charlie", "diana"),
    ("diana", "eve"),
    ("charlie", "eve")
]

for user1, user2 in friendships:
    network.add_friendship(user1, user2)

print("Social Network Analysis:")
print(f"Alice's friends: {{network.get_friends('alice')}}")
print(f"Mutual friends of Alice and Diana: {{network.get_mutual_friends('alice', 'diana')}}")
print(f"Friend suggestions for Alice: {{network.suggest_friends('alice')}}")
print(f"Network stats: {{network.get_network_stats()}}")

# 5. Text Analysis and Processing
print(f"\\n5. Text Analysis:")

def analyze_text(text):
    """Analyze text for various statistics."""
    words = text.lower().split()
    
    # Unique words
    unique_words = set(words)
    
    # Character analysis
    all_chars = set(text.lower())
    letters = set(char for char in all_chars if char.isalpha())
    digits = set(char for char in all_chars if char.isdigit())
    
    # Word length analysis
    word_lengths = set(len(word.strip(".,!?;:")) for word in words)
    
    return {{
        "total_words": len(words),
        "unique_words": len(unique_words),
        "unique_word_list": sorted(unique_words),
        "unique_letters": sorted(letters),
        "unique_digits": sorted(digits),
        "word_lengths": sorted(word_lengths),
        "vocabulary_richness": len(unique_words) / len(words) if words else 0
    }}

sample_text = """
Python is a high-level programming language. Python is easy to learn and use.
It has elegant syntax and powerful libraries. Python 3.9 introduced many new features.
"""

analysis = analyze_text(sample_text)
print("Text Analysis Results:")
for key, value in analysis.items():
    print(f"{{key}}: {{value}}")

# 6. Database Query Optimization
print(f"\\n6. Database Query Simulation:")

def simulate_database_query(table_data, filters):
    """Simulate database query using sets for optimization."""
    
    # Convert records to sets for fast lookups
    records_by_field = {{}}
    
    for field in filters.keys():
        records_by_field[field] = {{}}
        for i, record in enumerate(table_data):
            field_value = record.get(field)
            if field_value not in records_by_field[field]:
                records_by_field[field][field_value] = set()
            records_by_field[field][field_value].add(i)
    
    # Find records matching all filters (intersection)
    matching_indices = None
    
    for field, value in filters.items():
        field_matches = records_by_field[field].get(value, set())
        
        if matching_indices is None:
            matching_indices = field_matches
        else:
            matching_indices &= field_matches
    
    return [table_data[i] for i in (matching_indices or [])]

# Sample data
employees = [
    {{"id": 1, "name": "Alice", "department": "IT", "level": "senior"}},
    {{"id": 2, "name": "Bob", "department": "HR", "level": "junior"}},
    {{"id": 3, "name": "Charlie", "department": "IT", "level": "junior"}},
    {{"id": 4, "name": "Diana", "department": "Finance", "level": "senior"}},
    {{"id": 5, "name": "Eve", "department": "IT", "level": "senior"}}
]

# Query: Find senior IT employees
query_result = simulate_database_query(
    employees, 
    {{"department": "IT", "level": "senior"}}
)

print("Database Query Results:")
print("Query: Senior IT employees")
for employee in query_result:
    print(f"  {{employee}}")

print(f"\\nFound {{len(query_result)}} matching records")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Set Best Practices:</h3>
            <ul>
              <li><strong>Use sets for uniqueness:</strong> Perfect for removing duplicates and ensuring unique collections</li>
              <li><strong>Leverage fast membership testing:</strong> Sets provide O(1) average lookup time</li>
              <li><strong>Choose appropriate operations:</strong> Use mathematical operations for clear, readable code</li>
              <li><strong>Consider frozensets for hashability:</strong> When you need sets as dictionary keys or set elements</li>
              <li><strong>Use set comprehensions:</strong> More readable than loops for creating filtered sets</li>
              <li><strong>Remember immutability requirements:</strong> Set elements must be hashable (immutable)</li>
              <li><strong>Prefer methods over operators for clarity:</strong> Sometimes `set.union()` is clearer than `|`</li>
              <li><strong>Handle empty sets correctly:</strong> Use `set()` not `{'{}'}{'}'}` for empty sets</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Build a duplicate detection system for large datasets</li>
              <li>Create a permission management system using set operations</li>
              <li>Implement a social network friend suggestion algorithm</li>
              <li>Design an inventory management system with stock tracking</li>
              <li>Build a text analysis tool for finding unique words and characters</li>
              <li>Create a course enrollment system with conflict detection</li>
              <li>Implement a voting system that prevents duplicate votes</li>
              <li>Design a tag-based content filtering system</li>
              <li>Build a network security system for IP address filtering</li>
              <li>Create a recommendation engine using set similarity</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sets;
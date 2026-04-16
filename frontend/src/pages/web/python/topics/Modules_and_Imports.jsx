import React from 'react';
import '../Navbarweb.css';

function ModulesAndImports() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>📋 Modules and Imports</h1>
        <p className="py-topic-subtitle">
          Learn to organize code with modules and imports
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>📋 What are Modules and Imports?</h2>
          <p>
            Modules in Python are files containing Python code that can define functions, classes, and variables. 
            They allow you to organize your code into separate files for better maintainability, reusability, 
            and namespace management. The import system lets you use code from other modules in your programs, 
            enabling code reuse and modular programming.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Module Concepts:</h3>
            <ul>
              <li><strong>Module:</strong> A single Python file (.py) containing code</li>
              <li><strong>Package:</strong> A directory containing multiple modules with __init__.py</li>
              <li><strong>Import Statement:</strong> Brings code from other modules into current namespace</li>
              <li><strong>Namespace:</strong> Container where names are mapped to objects</li>
              <li><strong>Module Path:</strong> sys.path determines where Python looks for modules</li>
              <li><strong>Built-in Modules:</strong> Modules that come with Python installation</li>
            </ul>
          </div>
        </section>

        {/* Basic Imports */}
        <section className="py-topic-section">
          <h2>📥 Basic Import Statements</h2>
          
          <div className="py-code-block">
            <pre>{`# Basic import statements and usage
print("Basic Import Examples:")

# Import entire module
import math
print(f"Square root of 16: {math.sqrt(16)}")
print(f"Value of pi: {math.pi}")
print(f"Sine of 30 degrees: {math.sin(math.radians(30))}")

# Import with alias
import datetime as dt
current_time = dt.datetime.now()
print(f"Current time: {current_time}")
print(f"Today's date: {current_time.date()}")

# Import specific functions/classes
from random import randint, choice, shuffle
print(f"Random integer between 1-10: {randint(1, 10)}")
print(f"Random choice from list: {choice(['apple', 'banana', 'orange'])}")

numbers = [1, 2, 3, 4, 5]
shuffle(numbers)
print(f"Shuffled list: {numbers}")

# Import all (not recommended in production)
from math import *
print(f"Cosine of 0: {cos(0)}")  # Note: no math. prefix needed
print(f"Value of e: {e}")

# Multiple imports from same module
from os import getcwd, listdir, path
print(f"Current directory: {getcwd()}")
print(f"Directory exists: {path.exists('.')}")

# Importing with different names
from collections import defaultdict as dd, Counter as count_items
word_count = count_items("hello world")
print(f"Character count: {dict(word_count)}")

default_dict = dd(list)
default_dict['fruits'].append('apple')
print(f"Default dict: {dict(default_dict)}")

# Conditional imports
try:
    import numpy as np
    has_numpy = True
    print("NumPy is available")
except ImportError:
    has_numpy = False
    print("NumPy is not installed")

# Import within functions (delayed import)
def get_current_weather():
    try:
        import requests  # Import only when needed
        # Simulate weather API call
        print("Weather module imported and ready")
        return "Sunny, 25°C"
    except ImportError:
        return "Weather service unavailable (requests not installed)"

weather = get_current_weather()
print(f"Weather: {weather}")

# Exploring module attributes
print("\\nModule Exploration:")
print(f"Math module file location: {math.__file__}")
print(f"Math module name: {math.__name__}")
print(f"Available functions in math: {[name for name in dir(math) if not name.startswith('_')][:10]}...")

# Using __all__ to see public interface
import json
if hasattr(json, '__all__'):
    print(f"JSON module public interface: {json.__all__[:5]}...")

# Module documentation
print(f"\\nMath module documentation preview:")
print(f"sqrt function doc: {math.sqrt.__doc__}")

# Checking if module/attribute exists
def safe_import_and_use():
    modules_to_try = [
        ('sys', 'version'),
        ('os', 'name'),
        ('platform', 'system'),
        ('nonexistent', 'attribute')
    ]
    
    for module_name, attr_name in modules_to_try:
        try:
            module = __import__(module_name)
            if hasattr(module, attr_name):
                value = getattr(module, attr_name)
                if callable(value):
                    result = value()
                else:
                    result = value
                print(f"{module_name}.{attr_name}: {result}")
            else:
                print(f"{module_name} doesn't have {attr_name}")
        except ImportError:
            print(f"Module {module_name} not found")

safe_import_and_use()

# Import from different locations
import sys
print(f"\\nPython path (first 5 entries): {sys.path[:5]}")

# Relative imports simulation (normally used within packages)
# Note: This is just for demonstration
print("\\nRelative import concepts:")
print("In a package structure:")
print("  mypackage/")
print("    __init__.py")
print("    module1.py")
print("    subpackage/")
print("      __init__.py") 
print("      module2.py")
print("")
print("module2.py could use:")
print("  from . import __init__        # from current package")
print("  from .. import module1       # from parent package")
print("  from ..module1 import func   # specific import from parent")

# Star imports and namespace pollution
print("\\nNamespace demonstration:")
before_import = set(globals().keys())
print(f"Variables before star import: {len(before_import)}")

# Import a module with many names (just for demo)
from string import *
after_import = set(globals().keys())
new_names = after_import - before_import
print(f"New names added by 'from string import *': {len(new_names)}")
print(f"Sample new names: {list(new_names)[:10]}...")

# Demonstrate name conflicts
from math import pi as math_pi
from decimal import Decimal
decimal_pi = Decimal('3.14159265358979323846')

print(f"\\nName conflict resolution:")
print(f"Math pi: {math_pi}")
print(f"Decimal pi: {decimal_pi}")
print(f"Built-in vars before conflict: 'pi' in globals() = {'pi' in globals()}")

# Import and reload (for development)
import importlib

def demonstrate_reload():
    # This would normally reload a module you're developing
    print("Module reloading is useful during development:")
    print("  import importlib")
    print("  importlib.reload(my_module)")
    print("  # Changes to my_module.py are now reflected")

demonstrate_reload()`}</pre>
          </div>
        </section>

        {/* Creating Custom Modules */}
        <section className="py-topic-section">
          <h2>🛠️ Creating Custom Modules</h2>
          
          <div className="py-code-block">
            <pre>{`# Creating and using custom modules
print("Custom Module Examples:")

# Simulating module creation (normally done in separate files)
print("Creating a math utilities module...")

# This would be in a file called 'math_utils.py'
math_utils_code = '''
"""
Math Utilities Module
Provides additional mathematical functions and constants.
"""

# Module-level constants
GOLDEN_RATIO = 1.618033988749
EULER_MASCHERONI = 0.5772156649015329

# Module-level variable
_calculation_count = 0

def fibonacci(n):
    """Generate Fibonacci sequence up to n terms."""
    global _calculation_count
    _calculation_count += 1
    
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    sequence = [0, 1]
    for i in range(2, n):
        sequence.append(sequence[i-1] + sequence[i-2])
    
    return sequence

def factorial(n):
    """Calculate factorial of n."""
    global _calculation_count
    _calculation_count += 1
    
    if n < 0:
        raise ValueError("Factorial not defined for negative numbers")
    elif n == 0 or n == 1:
        return 1
    else:
        result = 1
        for i in range(2, n + 1):
            result *= i
        return result

def is_prime(n):
    """Check if a number is prime."""
    global _calculation_count
    _calculation_count += 1
    
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def get_calculation_count():
    """Return the number of calculations performed."""
    return _calculation_count

def reset_calculation_count():
    """Reset the calculation counter."""
    global _calculation_count
    _calculation_count = 0

# Module initialization code
print(f"Math utils module loaded. Golden ratio: {GOLDEN_RATIO}")

# This would run when module is imported
if __name__ == "__main__":
    # Code that runs only when module is executed directly
    print("Testing math_utils module:")
    print(f"Fibonacci(10): {fibonacci(10)}")
    print(f"Factorial(5): {factorial(5)}")
    print(f"Is 17 prime: {is_prime(17)}")
    print(f"Calculations performed: {get_calculation_count()}")
'''

print("Math utils module would contain:")
print("  - Constants: GOLDEN_RATIO, EULER_MASCHERONI")
print("  - Functions: fibonacci, factorial, is_prime")
print("  - Internal state: _calculation_count")
print("  - Module initialization and __name__ check")

# Simulating another module - 'string_utils.py'
string_utils_code = '''
"""
String Utilities Module
Provides string manipulation and analysis functions.
"""

import re
from collections import Counter

# Module constants
VOWELS = 'aeiouAEIOU'
CONSONANTS = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'

def count_words(text):
    """Count words in text."""
    return len(text.split())

def count_vowels(text):
    """Count vowels in text."""
    return sum(1 for char in text if char in VOWELS)

def count_consonants(text):
    """Count consonants in text."""
    return sum(1 for char in text if char in CONSONANTS)

def reverse_words(text):
    """Reverse the order of words in text."""
    return ' '.join(text.split()[::-1])

def capitalize_words(text):
    """Capitalize first letter of each word."""
    return ' '.join(word.capitalize() for word in text.split())

def remove_punctuation(text):
    """Remove punctuation from text."""
    return re.sub(r'[^\\w\\s]', '', text)

def get_character_frequency(text):
    """Get frequency count of characters."""
    return dict(Counter(text.lower()))

def is_palindrome(text):
    """Check if text is a palindrome (ignoring spaces and case)."""
    cleaned = re.sub(r'[^a-zA-Z0-9]', '', text.lower())
    return cleaned == cleaned[::-1]

class TextAnalyzer:
    """A class for analyzing text properties."""
    
    def __init__(self, text):
        self.text = text
        self.word_count = count_words(text)
        self.vowel_count = count_vowels(text)
        self.consonant_count = count_consonants(text)
    
    def get_summary(self):
        return {
            'text': self.text,
            'words': self.word_count,
            'vowels': self.vowel_count,
            'consonants': self.consonant_count,
            'characters': len(self.text),
            'is_palindrome': is_palindrome(self.text)
        }

# Module-level variable
module_usage_count = 0

def increment_usage():
    global module_usage_count
    module_usage_count += 1

# List of functions available for import
__all__ = [
    'count_words', 'count_vowels', 'count_consonants',
    'reverse_words', 'capitalize_words', 'remove_punctuation',
    'get_character_frequency', 'is_palindrome', 'TextAnalyzer'
]
'''

print("\\nString utils module would contain:")
print("  - Constants: VOWELS, CONSONANTS")
print("  - Functions: count_words, reverse_words, etc.")
print("  - Class: TextAnalyzer")
print("  - __all__ list for controlled imports")

# Demonstrating module attributes and introspection
print("\\nModule introspection examples:")

# Simulating what would happen with our custom modules
print("If we imported math_utils:")
print("  math_utils.__name__ would be 'math_utils'")
print("  math_utils.__doc__ would be the module docstring")
print("  math_utils.fibonacci(5) would return [0, 1, 1, 2, 3]")
print("  math_utils.GOLDEN_RATIO would be 1.618...")

print("\\nIf we imported string_utils:")
print("  from string_utils import TextAnalyzer")
print("  analyzer = TextAnalyzer('Hello World')")
print("  analyzer.get_summary() would return analysis dict")

# Module search and path manipulation
import sys
print(f"\\nModule search paths:")
for i, path in enumerate(sys.path[:5]):
    print(f"  {i+1}. {path}")

print("\\nTo add custom module paths:")
print("  sys.path.append('/path/to/my/modules')")
print("  sys.path.insert(0, '/priority/path')")

# Package structure example
print("\\nPackage structure example:")
package_structure = '''
myproject/
├── __init__.py          # Makes it a package
├── main.py             # Main application
├── config.py           # Configuration
├── utils/              # Utilities package
│   ├── __init__.py
│   ├── math_utils.py   # Math utilities
│   ├── string_utils.py # String utilities
│   └── file_utils.py   # File utilities
├── models/             # Data models package
│   ├── __init__.py
│   ├── user.py
│   └── product.py
└── tests/              # Test package
    ├── __init__.py
    ├── test_utils.py
    └── test_models.py
'''

print(package_structure)

print("Imports in such a structure:")
print("  from utils.math_utils import fibonacci")
print("  from utils.string_utils import TextAnalyzer")
print("  from models.user import User")
print("  from . import config  # relative import")

# Module caching demonstration
print("\\nModule caching:")
print("Modules are cached in sys.modules:")
import sys
cached_modules = [name for name in sys.modules.keys() if not name.startswith('_')]
print(f"Currently cached modules (sample): {cached_modules[:10]}...")
print(f"Total cached modules: {len(sys.modules)}")

print("\\nFirst import loads and caches the module")
print("Subsequent imports use the cached version")
print("This is why module-level code runs only once")

# Namespace packages (Python 3.3+)
print("\\nNamespace packages (advanced):")
print("Allow splitting a package across multiple directories")
print("No __init__.py required in namespace package directories")
print("Useful for plugin systems and distributed packages")

# Module best practices
print("\\nModule design best practices:")
practices = [
    "Use descriptive module names (lowercase, underscores)",
    "Include a docstring at the top of the module",
    "Define __all__ to control what gets imported with *",
    "Use __name__ == '__main__' for module testing code",
    "Keep module-level code minimal",
    "Group related functions and classes together",
    "Use private names (underscore prefix) for internal items",
    "Handle imports gracefully with try/except when needed"
]

for i, practice in enumerate(practices, 1):
    print(f"  {i}. {practice}")

# Circular imports and how to avoid them
print("\\nCircular import issues:")
print("Problem: module_a imports module_b, module_b imports module_a")
print("Solutions:")
print("  1. Restructure code to remove circular dependency")
print("  2. Use import inside functions (delayed import)")
print("  3. Use 'if TYPE_CHECKING:' for type hints only")
print("  4. Import at module level, use in functions")

# Performance considerations
print("\\nPerformance considerations:")
print("  - Import statements have overhead")
print("  - Module loading is cached after first import")
print("  - 'from module import name' is slightly faster than 'module.name'")
print("  - Avoid importing inside loops")
print("  - Use local imports in functions for optional dependencies")`}</pre>
          </div>
        </section>

        {/* Advanced Import Patterns */}
        <section className="py-topic-section">
          <h2>🔧 Advanced Import Patterns</h2>
          
          <div className="py-code-block">
            <pre>{`# Advanced import patterns and techniques
print("Advanced Import Patterns:")

# Dynamic imports using importlib
import importlib
import sys

def dynamic_import_demo():
    """Demonstrate dynamic importing of modules."""
    modules_to_import = ['json', 'csv', 'xml.etree.ElementTree']
    
    loaded_modules = {}
    
    for module_name in modules_to_import:
        try:
            # Dynamic import
            module = importlib.import_module(module_name)
            loaded_modules[module_name] = module
            print(f"Successfully imported {module_name}")
            
            # Get module info
            if hasattr(module, '__version__'):
                print(f"  Version: {module.__version__}")
            
            # List some attributes
            attrs = [name for name in dir(module) if not name.startswith('_')]
            print(f"  Sample attributes: {attrs[:5]}...")
            
        except ImportError as e:
            print(f"Failed to import {module_name}: {e}")
    
    return loaded_modules

loaded = dynamic_import_demo()

# Plugin system using dynamic imports
def plugin_system_demo():
    """Simulate a plugin system with dynamic imports."""
    print("\\nPlugin System Demo:")
    
    # Simulated plugin discovery
    available_plugins = [
        'json',      # Built-in JSON plugin
        'csv',       # Built-in CSV plugin
        'sqlite3',   # Built-in SQLite plugin
    ]
    
    plugins = {}
    
    for plugin_name in available_plugins:
        try:
            plugin_module = importlib.import_module(plugin_name)
            plugins[plugin_name] = plugin_module
            print(f"✓ Loaded plugin: {plugin_name}")
            
            # Check for plugin interface
            if hasattr(plugin_module, 'load') or hasattr(plugin_module, 'loads'):
                print(f"  - Has load capability")
            if hasattr(plugin_module, 'dump') or hasattr(plugin_module, 'dumps'):
                print(f"  - Has dump capability")
                
        except ImportError:
            print(f"✗ Plugin {plugin_name} not available")
    
    return plugins

plugins = plugin_system_demo()

# Conditional imports with fallbacks
def conditional_imports_demo():
    """Demonstrate conditional imports with fallbacks."""
    print("\\nConditional Imports with Fallbacks:")
    
    # Try to import performance library, fallback to standard
    try:
        import ujson as json_lib
        json_lib_name = "ujson (fast)"
    except ImportError:
        import json as json_lib
        json_lib_name = "json (standard)"
    
    print(f"Using JSON library: {json_lib_name}")
    
    # Test the library
    test_data = {"name": "Alice", "age": 30, "city": "New York"}
    json_str = json_lib.dumps(test_data)
    print(f"Serialized: {json_str}")
    
    # Try advanced libraries with multiple fallbacks
    print("\\nMultiple fallback example:")
    
    # HTTP library with fallbacks
    http_lib = None
    http_lib_name = None
    
    for lib_name, import_name in [("httpx", "httpx"), ("requests", "requests"), ("urllib", "urllib.request")]:
        try:
            http_lib = importlib.import_module(import_name)
            http_lib_name = lib_name
            break
        except ImportError:
            continue
    
    if http_lib:
        print(f"Using HTTP library: {http_lib_name}")
    else:
        print("No HTTP library available")

conditional_imports_demo()

# Module aliasing and namespace management
def namespace_management_demo():
    """Demonstrate namespace management techniques."""
    print("\\nNamespace Management:")
    
    # Create controlled namespace
    math_ns = {}
    
    # Import specific functions into custom namespace
    from math import sin, cos, tan, pi, e
    math_ns.update({'sin': sin, 'cos': cos, 'tan': tan, 'pi': pi, 'e': e})
    
    from statistics import mean, median, mode
    stats_ns = {'mean': mean, 'median': median, 'mode': mode}
    
    # Combine namespaces
    combined_ns = {'math': math_ns, 'stats': stats_ns}
    
    print(f"Math namespace: {list(math_ns.keys())}")
    print(f"Stats namespace: {list(stats_ns.keys())}")
    
    # Use functions from custom namespace
    angle = math_ns['pi'] / 4
    result = math_ns['sin'](angle)
    print(f"sin(π/4) = {result}")
    
    data = [1, 2, 3, 4, 5]
    avg = stats_ns['mean'](data)
    print(f"Mean of {data} = {avg}")

namespace_management_demo()

# Import hooks and customization
def import_hooks_demo():
    """Demonstrate import hooks and customization."""
    print("\\nImport Hooks and Customization:")
    
    # Show current import hooks
    print("Current meta path finders:")
    for i, finder in enumerate(sys.meta_path):
        print(f"  {i+1}. {type(finder).__name__}")
    
    # Custom module finder (simplified example)
    class CustomModuleFinder:
        """A custom module finder for demonstration."""
        
        def find_spec(self, name, path, target=None):
            if name.startswith('custom_'):
                print(f"Custom finder: Looking for {name}")
                # In real implementation, would return a ModuleSpec
                return None
            return None
    
    # Note: In real usage, you'd add this to sys.meta_path
    print("\\nCustom finder example (not actually installed):")
    finder = CustomModuleFinder()
    result = finder.find_spec('custom_module', None)
    print(f"Custom finder result: {result}")

import_hooks_demo()

# Module reloading for development
def module_reloading_demo():
    """Demonstrate module reloading techniques."""
    print("\\nModule Reloading (Development):")
    
    # Show how to reload a module
    print("To reload a module during development:")
    print("  import importlib")
    print("  importlib.reload(module_name)")
    
    # Reload warnings
    print("\\nReloading caveats:")
    print("  - Existing objects from old module remain unchanged")
    print("  - Only affects future imports and references")
    print("  - Some modules don't reload cleanly")
    print("  - Better to restart Python for complex changes")
    
    # Auto-reload example (for IPython/Jupyter)
    print("\\nAuto-reload in IPython/Jupyter:")
    print("  %load_ext autoreload")
    print("  %autoreload 2")

module_reloading_demo()

# Package initialization and __init__.py
def package_init_demo():
    """Demonstrate package initialization concepts."""
    print("\\nPackage Initialization (__init__.py):")
    
    # Show different __init__.py patterns
    init_examples = {
        "Empty __init__.py": "# Just marks directory as package",
        
        "Import shortcuts": '''
# Make submodule contents available at package level
from .submodule import important_function
from .another_module import UsefulClass

__all__ = ['important_function', 'UsefulClass']
''',
        
        "Package initialization": '''
# Initialize package-level resources
print("Initializing mypackage...")

# Package-level constants
VERSION = "1.0.0"
DEFAULT_CONFIG = {"debug": False}

# Initialize shared resources
_shared_cache = {}

def get_cache():
    return _shared_cache
''',
        
        "Lazy imports": '''
# Lazy imports to avoid import time overhead
def get_heavy_module():
    import heavy_computation_module
    return heavy_computation_module

# Only import when actually needed
'''
    }
    
    for title, code in init_examples.items():
        print(f"\\n{title}:")
        print(code)

package_init_demo()

# Import performance optimization
def import_performance_demo():
    """Demonstrate import performance considerations."""
    print("\\nImport Performance Optimization:")
    
    import time
    
    # Measure import time
    def time_import(module_name):
        start_time = time.time()
        try:
            importlib.import_module(module_name)
            end_time = time.time()
            return end_time - start_time
        except ImportError:
            return None
    
    # Test import times for different modules
    test_modules = ['sys', 'os', 'json', 'datetime', 'collections']
    
    print("Import timing test:")
    for module in test_modules:
        import_time = time_import(module)
        if import_time is not None:
            print(f"  {module}: {import_time*1000:.2f} ms")
        else:
            print(f"  {module}: Failed to import")
    
    # Best practices for performance
    print("\\nPerformance best practices:")
    practices = [
        "Import at module level, not in functions (usually)",
        "Use 'from module import name' for frequently used items",
        "Avoid star imports (*) for performance and clarity",
        "Use lazy imports for optional heavy dependencies",
        "Group related imports together",
        "Consider using importlib for dynamic imports"
    ]
    
    for practice in practices:
        print(f"  • {practice}")

import_performance_demo()

# Security considerations with imports
def import_security_demo():
    """Demonstrate import security considerations."""
    print("\\nImport Security Considerations:")
    
    security_tips = [
        "Never import modules from untrusted sources",
        "Be careful with dynamic imports using user input",
        "Validate module names before dynamic import",
        "Use virtual environments to isolate dependencies",
        "Regular security audits of installed packages",
        "Pin specific versions in requirements.txt",
        "Be aware of typosquatting in package names"
    ]
    
    for tip in security_tips:
        print(f"  ⚠️  {tip}")
    
    # Safe dynamic import example
    def safe_dynamic_import(module_name, allowed_modules):
        """Safely import a module with whitelist."""
        if module_name not in allowed_modules:
            raise ImportError(f"Module {module_name} not in allowed list")
        
        try:
            return importlib.import_module(module_name)
        except ImportError:
            raise ImportError(f"Module {module_name} not found")
    
    # Example usage
    allowed = ['json', 'csv', 'datetime']
    try:
        safe_module = safe_dynamic_import('json', allowed)
        print(f"\\nSafely imported: {safe_module.__name__}")
    except ImportError as e:
        print(f"Safe import failed: {e}")

import_security_demo()`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Module and Import Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Best Practices:</h3>
            <ul>
              <li><strong>Import at module level:</strong> Place imports at the top of files for clarity</li>
              <li><strong>Use descriptive names:</strong> Choose clear, meaningful module and package names</li>
              <li><strong>Avoid circular imports:</strong> Design modules to minimize interdependencies</li>
              <li><strong>Use __all__ lists:</strong> Control what gets exported with star imports</li>
              <li><strong>Handle import errors gracefully:</strong> Use try/except for optional dependencies</li>
              <li><strong>Follow PEP 8 import order:</strong> Standard library, third-party, local imports</li>
              <li><strong>Use relative imports in packages:</strong> Make packages more portable</li>
              <li><strong>Document module interfaces:</strong> Clear docstrings and examples</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Create a utility package with math, string, and file helper modules</li>
              <li>Build a plugin system that dynamically loads modules from a directory</li>
              <li>Design a configuration system using modules for different environments</li>
              <li>Create a custom import hook for a specific file format</li>
              <li>Build a module that provides fallbacks for optional dependencies</li>
              <li>Design a namespace package for distributed functionality</li>
              <li>Create a module with both CLI and library interfaces</li>
              <li>Build a caching system for expensive module imports</li>
              <li>Design a module versioning and compatibility system</li>
              <li>Create a testing framework using dynamic module discovery</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ModulesAndImports;
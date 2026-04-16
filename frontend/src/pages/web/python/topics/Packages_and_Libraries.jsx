import React from 'react';
import '../Navbarweb.css';

function PackagesAndLibraries() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>📚 Packages and Libraries</h1>
        <p className="py-topic-subtitle">
          Explore Python packages and popular libraries
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>📦 What are Packages and Libraries?</h2>
          <p>
            Python packages and libraries are collections of modules that provide additional functionality 
            beyond what's built into Python. Packages are directories containing multiple modules, while 
            libraries refer to the broader ecosystem of third-party code available through the Python 
            Package Index (PyPI). Package management tools like pip help install, upgrade, and manage 
            these dependencies in your projects.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Package Concepts:</h3>
            <ul>
              <li><strong>PyPI:</strong> Python Package Index - the official repository for Python packages</li>
              <li><strong>pip:</strong> Package installer for Python, used to install packages from PyPI</li>
              <li><strong>Virtual Environment:</strong> Isolated Python environment for project dependencies</li>
              <li><strong>Requirements File:</strong> Text file listing package dependencies and versions</li>
              <li><strong>Package Distribution:</strong> How packages are packaged and shared</li>
              <li><strong>Dependency Management:</strong> Handling package dependencies and conflicts</li>
            </ul>
          </div>
        </section>

        {/* Package Management with pip */}
        <section className="py-topic-section">
          <h2>🛠️ Package Management with pip</h2>
          
          <div className="py-code-block">
            <pre>{`# Package management with pip
print("Package Management with pip:")

# Note: These commands would typically be run in terminal/command prompt
# Here we simulate the output and demonstrate the concepts

import subprocess
import sys
import json

def run_pip_command(command, description):
    """Simulate running pip commands and show expected output."""
    print(f"\\n{description}")
    print(f"Command: pip {command}")
    print("Expected output:")
    
    if command == "list":
        print("Package         Version")
        print("-" * 30)
        print("certifi         2023.7.22")
        print("charset-normalizer 3.2.0")
        print("idna            3.4")
        print("pip             23.2.1")
        print("requests        2.31.0")
        print("setuptools      68.0.0")
        print("urllib3         2.0.4")
        
    elif command == "show requests":
        print("Name: requests")
        print("Version: 2.31.0")
        print("Summary: Python HTTP for Humans.")
        print("Home-page: https://requests.readthedocs.io")
        print("Author: Kenneth Reitz")
        print("License: Apache 2.0")
        print("Location: /usr/local/lib/python3.9/site-packages")
        print("Requires: certifi, charset-normalizer, idna, urllib3")
        print("Required-by: ")
        
    elif command == "install requests":
        print("Collecting requests")
        print("  Downloading requests-2.31.0-py3-none-any.whl (62 kB)")
        print("Collecting charset-normalizer<4,>=2")
        print("  Downloading charset_normalizer-3.2.0-cp39-cp39-win_amd64.whl")
        print("Installing collected packages: charset-normalizer, requests")
        print("Successfully installed charset-normalizer-3.2.0 requests-2.31.0")
        
    elif command == "uninstall requests":
        print("Found existing installation: requests 2.31.0")
        print("Uninstalling requests-2.31.0:")
        print("  Would remove:")
        print("    c:\\python39\\lib\\site-packages\\requests\\*")
        print("Proceed (Y/n)? y")
        print("Successfully uninstalled requests-2.31.0")

# Basic pip operations
print("Basic pip operations:")

commands_and_descriptions = [
    ("list", "List installed packages"),
    ("show requests", "Show package information"),
    ("install requests", "Install a package"),
    ("uninstall requests", "Uninstall a package")
]

for cmd, desc in commands_and_descriptions:
    run_pip_command(cmd, desc)

# Advanced pip usage
print("\\n" + "="*50)
print("Advanced pip usage:")

advanced_commands = {
    "pip install requests==2.30.0": "Install specific version",
    "pip install 'requests>=2.25.0,<3.0.0'": "Install version range",
    "pip install --upgrade requests": "Upgrade package",
    "pip install --user requests": "Install for current user only",
    "pip install --no-deps requests": "Install without dependencies",
    "pip install -e .": "Install package in development mode",
    "pip install git+https://github.com/user/repo.git": "Install from Git repository",
    "pip install package.tar.gz": "Install from local archive",
    "pip freeze": "List installed packages with versions",
    "pip freeze > requirements.txt": "Save requirements to file",
    "pip install -r requirements.txt": "Install from requirements file",
    "pip check": "Check for dependency conflicts",
    "pip search keyword": "Search PyPI (deprecated)",
    "pip cache purge": "Clear pip cache"
}

for cmd, desc in advanced_commands.items():
    print(f"\\n{desc}:")
    print(f"  {cmd}")

# Demonstrate pip programmatically
def check_package_installed(package_name):
    """Check if a package is installed."""
    try:
        __import__(package_name)
        return True
    except ImportError:
        return False

def get_installed_packages():
    """Get list of installed packages (simulation)."""
    # In real implementation, you might use pkg_resources or importlib.metadata
    return {
        'pip': '23.2.1',
        'setuptools': '68.0.0',
        'wheel': '0.41.1'
    }

print("\\n" + "="*50)
print("Programmatic package checking:")

test_packages = ['sys', 'os', 'json', 'requests', 'numpy', 'pandas']
for package in test_packages:
    installed = check_package_installed(package)
    status = "✓ Installed" if installed else "✗ Not installed"
    print(f"{package:.<20} {status}")

installed_packages = get_installed_packages()
print(f"\\nSample installed packages: {list(installed_packages.keys())}")

# Requirements file examples
print("\\n" + "="*50)
print("Requirements file examples:")

requirements_examples = {
    "Basic requirements.txt": '''# Basic requirements
requests==2.31.0
flask==2.3.2
numpy>=1.20.0
pandas<2.0.0''',
    
    "requirements-dev.txt": '''# Development requirements
-r requirements.txt
pytest>=7.0.0
black==23.3.0
flake8==6.0.0
mypy==1.4.1''',
    
    "requirements-prod.txt": '''# Production requirements  
-r requirements.txt
gunicorn==20.1.0
psycopg2-binary==2.9.6
redis==4.5.5''',
    
    "Detailed requirements.txt": '''# Web framework
flask==2.3.2
flask-sqlalchemy==3.0.5

# HTTP requests
requests>=2.25.0,<3.0.0

# Data processing
pandas>=1.5.0,<2.0.0
numpy>=1.20.0

# Development tools (commented for production)
# pytest>=7.0.0
# black>=22.0.0

# Install from git
# git+https://github.com/user/private-package.git@v1.0.0

# Install with extras
# requests[security]>=2.25.0'''
}

for title, content in requirements_examples.items():
    print(f"\\n{title}:")
    print(content)

# Package installation strategies
print("\\n" + "="*50)
print("Package Installation Strategies:")

strategies = {
    "Exact versions (production)": {
        "description": "Pin exact versions for reproducible builds",
        "example": "requests==2.31.0\\nflask==2.3.2",
        "pros": ["Reproducible builds", "No surprise updates"],
        "cons": ["Security updates require manual intervention", "Dependency conflicts"]
    },
    
    "Version ranges (development)": {
        "description": "Allow compatible version updates",
        "example": "requests>=2.25.0,<3.0.0\\nflask>=2.0.0,<3.0.0",
        "pros": ["Automatic security updates", "Easier maintenance"],
        "cons": ["Potential breaking changes", "Less predictable"]
    },
    
    "Minimum versions": {
        "description": "Specify minimum required versions",
        "example": "requests>=2.25.0\\nflask>=2.0.0",
        "pros": ["Maximum flexibility", "Easy upgrades"],
        "cons": ["Least predictable", "Potential conflicts"]
    }
}

for strategy, details in strategies.items():
    print(f"\\n{strategy}:")
    print(f"  Description: {details['description']}")
    print(f"  Example: {details['example'].replace(chr(10), ', ')}")
    print(f"  Pros: {', '.join(details['pros'])}")
    print(f"  Cons: {', '.join(details['cons'])}")

# Dependency resolution
print("\\n" + "="*50)
print("Dependency Resolution:")

dependency_example = '''
Example dependency chain:
  my-app
  ├── requests>=2.25.0
  │   ├── certifi>=2017.4.17
  │   ├── charset-normalizer>=2,<4
  │   ├── idna>=2.5,<4
  │   └── urllib3>=1.21.1,<3
  ├── flask>=2.0.0
  │   ├── Werkzeug>=2.2.2
  │   ├── Jinja2>=3.0
  │   ├── itsdangerous>=2.0
  │   ├── click>=8.0
  │   └── blinker>=1.6.2
  └── pandas>=1.5.0
      ├── python-dateutil>=2.8.1
      ├── pytz>=2020.1
      ├── numpy>=1.21.0
      └── six>=1.12.0
'''
print(dependency_example)

print("Conflict resolution example:")
print("  Package A requires numpy>=1.20.0,<1.25.0")
print("  Package B requires numpy>=1.24.0,<2.0.0")
print("  Resolution: numpy>=1.24.0,<1.25.0")
print("  If no overlap exists, installation fails")

# Security considerations
print("\\n" + "="*50)
print("Security Considerations:")

security_tips = [
    "Regularly update packages: pip install --upgrade package",
    "Use pip-audit or safety to check for vulnerabilities",
    "Pin versions in production for consistency",
    "Review package dependencies before installation",
    "Use virtual environments to isolate projects",
    "Verify package sources and maintainers",
    "Monitor security advisories for your dependencies",
    "Use requirements.txt to track all dependencies"
]

for i, tip in enumerate(security_tips, 1):
    print(f"  {i}. {tip}")

# Alternative package managers
print("\\n" + "="*50)
print("Alternative Package Managers:")

alternatives = {
    "conda": {
        "description": "Package manager from Anaconda, handles non-Python dependencies",
        "commands": ["conda install package", "conda create -n env python=3.9", "conda list"],
        "strengths": ["Binary packages", "Non-Python dependencies", "Scientific computing"]
    },
    
    "poetry": {
        "description": "Modern dependency management and packaging tool",
        "commands": ["poetry add package", "poetry install", "poetry build"],
        "strengths": ["Lock files", "Virtual environments", "Build system"]
    },
    
    "pipenv": {
        "description": "Higher-level pip wrapper with virtual environments",
        "commands": ["pipenv install package", "pipenv shell", "pipenv graph"],
        "strengths": ["Pipfile format", "Automatic virtual envs", "Dependency graphs"]
    }
}

for manager, details in alternatives.items():
    print(f"\\n{manager}:")
    print(f"  Description: {details['description']}")
    print(f"  Key commands: {', '.join(details['commands'])}")
    print(f"  Strengths: {', '.join(details['strengths'])}")

# Package distribution basics
print("\\n" + "="*50)
print("Package Distribution Basics:")

print("Creating a distributable package:")
distribution_structure = '''
my_package/
├── setup.py              # Package configuration
├── setup.cfg              # Additional configuration
├── pyproject.toml         # Modern configuration
├── README.md              # Package documentation
├── LICENSE                # License file
├── MANIFEST.in            # Include/exclude files
├── my_package/            # Source code directory
│   ├── __init__.py
│   ├── module1.py
│   └── module2.py
├── tests/                 # Test directory
│   ├── __init__.py
│   ├── test_module1.py
│   └── test_module2.py
└── docs/                  # Documentation
    └── index.md
'''
print(distribution_structure)

print("Basic setup.py example:")
setup_py_example = '''
from setuptools import setup, find_packages

setup(
    name="my-awesome-package",
    version="1.0.0",
    author="Your Name",
    author_email="your.email@example.com",
    description="A short description of the package",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/yourusername/my-awesome-package",
    packages=find_packages(),
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
    ],
    python_requires=">=3.8",
    install_requires=[
        "requests>=2.25.0",
        "click>=7.0",
    ],
    extras_require={
        "dev": ["pytest>=6.0", "black>=22.0"],
        "docs": ["sphinx>=4.0"],
    },
    entry_points={
        "console_scripts": [
            "myapp=my_package.cli:main",
        ],
    },
)
'''
print(setup_py_example)

print("\\nBuilding and uploading:")
print("  python setup.py sdist bdist_wheel  # Build distribution")
print("  pip install twine                   # Install upload tool")
print("  twine check dist/*                  # Check distributions")
print("  twine upload dist/*                 # Upload to PyPI")

print("\\nModern approach with pyproject.toml:")
pyproject_example = '''
[build-system]
requires = ["setuptools>=45", "wheel", "setuptools_scm[toml]>=6.2"]
build-backend = "setuptools.build_meta"

[project]
name = "my-awesome-package"
version = "1.0.0"
authors = [{name = "Your Name", email = "your.email@example.com"}]
description = "A short description of the package"
readme = "README.md"
license = {text = "MIT"}
requires-python = ">=3.8"
dependencies = [
    "requests>=2.25.0",
    "click>=7.0",
]

[project.optional-dependencies]
dev = ["pytest>=6.0", "black>=22.0"]
docs = ["sphinx>=4.0"]

[project.scripts]
myapp = "my_package.cli:main"
'''
print(pyproject_example)`}</pre>
          </div>
        </section>

        {/* Virtual Environments */}
        <section className="py-topic-section">
          <h2>🏠 Virtual Environments</h2>
          
          <div className="py-code-block">
            <pre>{`# Virtual environments for project isolation
print("Virtual Environments for Project Isolation:")

import os
import sys

# Understanding virtual environments
print("What are virtual environments?")
print("  • Isolated Python environments for different projects")
print("  • Prevent package conflicts between projects")
print("  • Allow different Python versions per project")
print("  • Essential for professional Python development")

print("\\nWhy use virtual environments?")
reasons = [
    "Avoid package version conflicts between projects",
    "Reproduce exact development environments",
    "Test packages without affecting system Python",
    "Deploy with specific package versions",
    "Collaborate with consistent dependencies"
]

for i, reason in enumerate(reasons, 1):
    print(f"  {i}. {reason}")

# Virtual environment tools
print("\\n" + "="*50)
print("Virtual Environment Tools:")

venv_tools = {
    "venv (built-in)": {
        "description": "Built into Python 3.3+, basic virtual environment creation",
        "create": "python -m venv myenv",
        "activate_win": "myenv\\\\Scripts\\\\activate",
        "activate_unix": "source myenv/bin/activate",
        "deactivate": "deactivate",
        "pros": ["Built-in", "Lightweight", "Standard"],
        "cons": ["Basic features", "Manual dependency management"]
    },
    
    "virtualenv": {
        "description": "Third-party tool, more features than venv",
        "create": "virtualenv myenv",
        "activate_win": "myenv\\\\Scripts\\\\activate",
        "activate_unix": "source myenv/bin/activate",
        "deactivate": "deactivate",
        "pros": ["More Python versions", "Better performance", "More options"],
        "cons": ["Requires installation", "More complex"]
    },
    
    "conda": {
        "description": "Anaconda package manager with environment management",
        "create": "conda create -n myenv python=3.9",
        "activate_win": "conda activate myenv",
        "activate_unix": "conda activate myenv",
        "deactivate": "conda deactivate",
        "pros": ["Non-Python packages", "Different Python versions", "Scientific packages"],
        "cons": ["Large installation", "Slower", "Complex"]
    },
    
    "pipenv": {
        "description": "Combines pip and virtualenv with Pipfile",
        "create": "pipenv install",
        "activate_win": "pipenv shell",
        "activate_unix": "pipenv shell", 
        "deactivate": "exit",
        "pros": ["Pipfile format", "Automatic activation", "Dependency graphs"],
        "cons": ["Slower", "Additional learning curve", "Less universal"]
    }
}

for tool, details in venv_tools.items():
    print(f"\\n{tool}:")
    print(f"  Description: {details['description']}")
    print(f"  Create: {details['create']}")
    print(f"  Activate (Windows): {details['activate_win']}")
    print(f"  Activate (Unix/Mac): {details['activate_unix']}")
    print(f"  Deactivate: {details['deactivate']}")
    print(f"  Pros: {', '.join(details['pros'])}")
    print(f"  Cons: {', '.join(details['cons'])}")

# Virtual environment workflow
print("\\n" + "="*50)
print("Typical Virtual Environment Workflow:")

workflow_steps = [
    "1. Create project directory: mkdir my_project && cd my_project",
    "2. Create virtual environment: python -m venv venv",
    "3. Activate environment: venv\\\\Scripts\\\\activate (Windows) or source venv/bin/activate (Unix)",
    "4. Install packages: pip install requests flask pytest",
    "5. Work on project with isolated dependencies",
    "6. Save requirements: pip freeze > requirements.txt",
    "7. Deactivate when done: deactivate",
    "8. Share project: include requirements.txt, exclude venv folder"
]

for step in workflow_steps:
    print(f"  {step}")

# Environment detection and management
print("\\n" + "="*50)
print("Environment Detection and Management:")

def detect_virtual_environment():
    """Detect if running in a virtual environment."""
    # Check for virtual environment indicators
    in_venv = False
    venv_type = "None"
    
    # Check for venv/virtualenv
    if hasattr(sys, 'real_prefix'):
        in_venv = True
        venv_type = "virtualenv (old style)"
    elif sys.prefix != sys.base_prefix:
        in_venv = True
        venv_type = "venv or virtualenv"
    
    # Check for conda
    if 'CONDA_DEFAULT_ENV' in os.environ:
        in_venv = True
        venv_type = f"conda ({os.environ.get('CONDA_DEFAULT_ENV')})"
    
    return in_venv, venv_type

def get_environment_info():
    """Get detailed environment information."""
    info = {
        'python_version': sys.version,
        'python_executable': sys.executable,
        'python_prefix': sys.prefix,
        'python_base_prefix': getattr(sys, 'base_prefix', sys.prefix),
        'virtual_env': os.environ.get('VIRTUAL_ENV'),
        'conda_env': os.environ.get('CONDA_DEFAULT_ENV'),
        'path_entries': len(sys.path),
        'installed_packages_estimate': 'Use pip list to see actual packages'
    }
    return info

# Demonstrate environment detection
in_venv, venv_type = detect_virtual_environment()
print(f"Running in virtual environment: {in_venv}")
print(f"Environment type: {venv_type}")

env_info = get_environment_info()
print("\\nEnvironment Information:")
for key, value in env_info.items():
    if key == 'python_version':
        # Show only first line of version for brevity
        value = value.split('\\n')[0]
    print(f"  {key.replace('_', ' ').title()}: {value}")

# Requirements management
print("\\n" + "="*50)
print("Requirements Management:")

print("Creating requirements files:")
requirements_commands = [
    "pip freeze > requirements.txt                    # All packages",
    "pip freeze | grep -E '^(requests|flask)' > req.txt  # Specific packages",
    "pipreqs . --force                                # Based on imports (needs pipreqs)",
    "pip-chill > requirements-min.txt                 # Top-level only (needs pip-chill)"
]

for cmd in requirements_commands:
    print(f"  {cmd}")

print("\\nInstalling from requirements:")
install_commands = [
    "pip install -r requirements.txt               # Standard install",
    "pip install -r requirements.txt --upgrade     # Upgrade all",
    "pip install -r requirements.txt --user        # User install",
    "pip install -r requirements.txt --no-deps     # Skip dependencies"
]

for cmd in install_commands:
    print(f"  {cmd}")

# Environment synchronization
print("\\nEnvironment Synchronization:")
print("Problem: Ensuring all team members have same environment")
print("Solutions:")
print("  1. requirements.txt with exact versions")
print("  2. Pipfile.lock (pipenv) or poetry.lock (poetry)")
print("  3. Docker containers for complete isolation")
print("  4. conda environment.yml files")

# Best practices
print("\\n" + "="*50)
print("Virtual Environment Best Practices:")

best_practices = [
    "Always use virtual environments for projects",
    "Name environments descriptively (project-name-env)",
    "Keep requirements.txt updated and version controlled",
    "Never commit virtual environment folders to git",
    "Use .gitignore to exclude venv, env, __pycache__ folders",
    "Document environment setup in README.md",
    "Use exact versions in production, ranges in development",
    "Regularly update and test with newer package versions",
    "Consider using Docker for complex deployment scenarios",
    "Use environment variables for configuration, not hardcoded values"
]

for i, practice in enumerate(best_practices, 1):
    print(f"  {i:2d}. {practice}")

# Troubleshooting common issues
print("\\n" + "="*50) 
print("Troubleshooting Common Issues:")

issues_solutions = {
    "Virtual environment not activating": [
        "Check if activation script exists",
        "Use full path to activation script", 
        "Ensure proper shell (bash vs cmd vs powershell)",
        "Check file permissions on Unix systems"
    ],
    
    "Packages not found after activation": [
        "Verify environment is actually activated (check prompt)",
        "Check if pip is using correct environment: which pip",
        "Reinstall packages if environment was moved",
        "Clear pip cache: pip cache purge"
    ],
    
    "ImportError despite package installation": [
        "Check if correct environment is activated",
        "Verify package installed: pip list | grep package_name",
        "Check for name conflicts with local files",
        "Try importing with full module path"
    ],
    
    "Permission errors": [
        "Use virtual environment instead of system Python",
        "Use --user flag for user-level installs",
        "Check directory permissions",
        "Run as administrator (Windows) or use sudo (Unix) if necessary"
    ],
    
    "SSL/Certificate errors": [
        "Update pip: python -m pip install --upgrade pip",
        "Update certificates: pip install --upgrade certifi",
        "Use trusted hosts: pip install --trusted-host pypi.org package",
        "Check corporate firewall settings"
    ]
}

for issue, solutions in issues_solutions.items():
    print(f"\\n{issue}:")
    for solution in solutions:
        print(f"  • {solution}")

# Environment migration
print("\\n" + "="*50)
print("Environment Migration and Backup:")

print("Backing up environment:")
backup_commands = [
    "pip freeze > requirements-backup.txt",
    "pip list --format=json > packages.json",  
    "conda env export > environment.yml        # For conda",
    "pipenv requirements > requirements.txt    # For pipenv"
]

for cmd in backup_commands:
    print(f"  {cmd}")

print("\\nMigrating to new environment:")
migration_steps = [
    "1. Create new environment with desired Python version",
    "2. Activate new environment", 
    "3. Install from backed up requirements",
    "4. Test application functionality",
    "5. Update any version-specific code",
    "6. Update documentation and CI/CD pipelines"
]

for step in migration_steps:
    print(f"  {step}")

# Performance considerations
print("\\n" + "="*50)
print("Performance Considerations:")

performance_tips = [
    "Use wheel packages when available (faster install)",
    "Consider pip install --no-cache-dir for clean installs",
    "Use pip install --pre for pre-release versions",
    "Parallelize installs: pip install package1 package2 package3",
    "Use local package index for corporate environments", 
    "Consider conda for heavy scientific computing packages",
    "Use pip-tools for dependency management and updates",
    "Cache wheels locally for repeated installations"
]

for tip in performance_tips:
    print(f"  • {tip}")

print("\\nEnvironment size optimization:")
optimization_tips = [
    "Only install necessary packages",
    "Use pip install --no-deps to skip unneeded dependencies",
    "Consider lightweight alternatives (e.g., httpx vs requests)",
    "Use virtual environments instead of conda for simple projects",
    "Regular cleanup: pip uninstall unused-package",
    "Use pip-autoremove to clean orphaned dependencies"
]

for tip in optimization_tips:
    print(f"  • {tip}")`}</pre>
          </div>
        </section>

        {/* Popular Python Libraries */}
        <section className="py-topic-section">
          <h2>🌟 Popular Python Libraries</h2>
          
          <div className="py-code-block">
            <pre>{`# Popular Python libraries and their uses
print("Popular Python Libraries by Category:")

# Standard library highlights (built-in)
print("Standard Library (Built-in):")
standard_lib = {
    "os": "Operating system interface (file paths, environment variables)",
    "sys": "System-specific parameters and functions", 
    "json": "JSON encoder and decoder",
    "datetime": "Date and time handling",
    "re": "Regular expressions",
    "collections": "Specialized container datatypes",
    "itertools": "Functions for creating iterators",
    "functools": "Higher-order functions and operations on callable objects",
    "pathlib": "Object-oriented filesystem paths",
    "urllib": "URL handling modules",
    "sqlite3": "DB-API interface for SQLite databases",
    "logging": "Logging facility for Python",
    "argparse": "Command-line argument parser",
    "csv": "CSV file reading and writing",
    "xml": "XML processing modules",
    "html": "HTML processing modules",
    "http": "HTTP modules",
    "email": "Email handling package",
    "gzip": "Support for gzip files",
    "zipfile": "Work with ZIP archives",
    "tarfile": "Read and write tar archive files",
    "shutil": "High-level file operations",
    "subprocess": "Subprocess management",
    "threading": "Thread-based parallelism",
    "multiprocessing": "Process-based parallelism",
    "asyncio": "Asynchronous I/O"
}

for module, description in list(standard_lib.items())[:10]:
    print(f"  {module:<15}: {description}")
print(f"  ... and {len(standard_lib)-10} more modules")

# Web development libraries
print("\\n" + "="*60)
print("Web Development:")
web_libraries = {
    "Flask": {
        "description": "Micro web framework for building web applications",
        "install": "pip install flask",
        "use_case": "Small to medium web apps, APIs, prototyping",
        "example": "from flask import Flask; app = Flask(__name__)"
    },
    "Django": {
        "description": "High-level web framework with batteries included",
        "install": "pip install django",
        "use_case": "Large web applications, CMS, admin interfaces",
        "example": "django-admin startproject mysite"
    },
    "FastAPI": {
        "description": "Modern, fast web framework for building APIs",
        "install": "pip install fastapi uvicorn",
        "use_case": "REST APIs, microservices, automatic API docs",
        "example": "from fastapi import FastAPI; app = FastAPI()"
    },
    "Streamlit": {
        "description": "Framework for building data science web apps",
        "install": "pip install streamlit",
        "use_case": "Data dashboards, ML model demos, quick prototypes",
        "example": "import streamlit as st; st.write('Hello World')"
    },
    "Tornado": {
        "description": "Scalable, non-blocking web server and framework", 
        "install": "pip install tornado",
        "use_case": "Real-time web services, WebSockets, high concurrency",
        "example": "import tornado.web; import tornado.ioloop"
    }
}

for lib, details in web_libraries.items():
    print(f"\\n{lib}:")
    print(f"  Description: {details['description']}")
    print(f"  Install: {details['install']}")
    print(f"  Use case: {details['use_case']}")
    print(f"  Example: {details['example']}")

# Data science and analysis
print("\\n" + "="*60)
print("Data Science and Analysis:")
data_libraries = {
    "NumPy": {
        "description": "Fundamental package for scientific computing with arrays",
        "install": "pip install numpy",
        "use_case": "Numerical computations, array operations, linear algebra",
        "example": "import numpy as np; arr = np.array([1, 2, 3])"
    },
    "Pandas": {
        "description": "Data manipulation and analysis library",
        "install": "pip install pandas", 
        "use_case": "Data cleaning, analysis, CSV/Excel processing",
        "example": "import pandas as pd; df = pd.read_csv('data.csv')"
    },
    "Matplotlib": {
        "description": "2D plotting library for creating static visualizations",
        "install": "pip install matplotlib",
        "use_case": "Charts, graphs, scientific plotting",
        "example": "import matplotlib.pyplot as plt; plt.plot([1,2,3])"
    },
    "Seaborn": {
        "description": "Statistical data visualization based on matplotlib",
        "install": "pip install seaborn",
        "use_case": "Statistical plots, attractive default styles",
        "example": "import seaborn as sns; sns.scatterplot(x, y)"
    },
    "Plotly": {
        "description": "Interactive plotting library for web-based visualizations",
        "install": "pip install plotly",
        "use_case": "Interactive charts, dashboards, 3D plots",
        "example": "import plotly.express as px; px.scatter(df, x='a', y='b')"
    },
    "SciPy": {
        "description": "Scientific computing library with algorithms and functions",
        "install": "pip install scipy",
        "use_case": "Optimization, statistics, signal processing",
        "example": "from scipy import stats; stats.norm.pdf(0)"
    },
    "Scikit-learn": {
        "description": "Machine learning library with algorithms and tools",
        "install": "pip install scikit-learn",
        "use_case": "Classification, regression, clustering, ML pipelines", 
        "example": "from sklearn.linear_model import LinearRegression"
    }
}

for lib, details in data_libraries.items():
    print(f"\\n{lib}:")
    print(f"  Description: {details['description']}")
    print(f"  Install: {details['install']}")
    print(f"  Use case: {details['use_case']}")
    print(f"  Example: {details['example']}")

# Machine learning and AI
print("\\n" + "="*60)
print("Machine Learning and AI:")
ml_libraries = {
    "TensorFlow": {
        "description": "Open-source machine learning framework by Google",
        "install": "pip install tensorflow",
        "use_case": "Deep learning, neural networks, production ML",
        "example": "import tensorflow as tf; model = tf.keras.Sequential()"
    },
    "PyTorch": {
        "description": "Dynamic neural network framework by Facebook",
        "install": "pip install torch torchvision",
        "use_case": "Research, dynamic neural networks, computer vision",
        "example": "import torch; x = torch.tensor([1, 2, 3])"
    },
    "Keras": {
        "description": "High-level neural networks API (now part of TensorFlow)",
        "install": "pip install keras (or use tf.keras)",
        "use_case": "Rapid prototyping of neural networks",
        "example": "from keras.models import Sequential"
    },
    "OpenCV": {
        "description": "Computer vision and image processing library",
        "install": "pip install opencv-python",
        "use_case": "Image processing, computer vision, video analysis",
        "example": "import cv2; img = cv2.imread('image.jpg')"
    },
    "NLTK": {
        "description": "Natural language processing toolkit",
        "install": "pip install nltk",
        "use_case": "Text processing, sentiment analysis, language modeling",
        "example": "import nltk; nltk.download('punkt')"
    },
    "spaCy": {
        "description": "Industrial-strength natural language processing",
        "install": "pip install spacy",
        "use_case": "NLP pipelines, named entity recognition, POS tagging",
        "example": "import spacy; nlp = spacy.load('en_core_web_sm')"
    }
}

for lib, details in ml_libraries.items():
    print(f"\\n{lib}:")
    print(f"  Description: {details['description']}")
    print(f"  Install: {details['install']}")
    print(f"  Use case: {details['use_case']}")
    print(f"  Example: {details['example']}")

# Database and storage
print("\\n" + "="*60)
print("Database and Storage:")
db_libraries = {
    "SQLAlchemy": {
        "description": "SQL toolkit and Object-Relational Mapping (ORM)",
        "install": "pip install sqlalchemy",
        "use_case": "Database abstraction, ORM, complex queries",
        "example": "from sqlalchemy import create_engine"
    },
    "psycopg2": {
        "description": "PostgreSQL adapter for Python",
        "install": "pip install psycopg2-binary",
        "use_case": "PostgreSQL database connectivity",
        "example": "import psycopg2; conn = psycopg2.connect(db_url)"
    },
    "PyMongo": {
        "description": "MongoDB driver for Python",
        "install": "pip install pymongo", 
        "use_case": "MongoDB database operations",
        "example": "from pymongo import MongoClient; client = MongoClient()"
    },
    "Redis-py": {
        "description": "Redis client for Python",
        "install": "pip install redis",
        "use_case": "Redis caching, pub/sub, data structures",
        "example": "import redis; r = redis.Redis(host='localhost')"
    },
    "Boto3": {
        "description": "AWS SDK for Python",
        "install": "pip install boto3",
        "use_case": "AWS services, S3, DynamoDB, EC2",
        "example": "import boto3; s3 = boto3.client('s3')"
    }
}

for lib, details in db_libraries.items():
    print(f"\\n{lib}:")
    print(f"  Description: {details['description']}")
    print(f"  Install: {details['install']}")
    print(f"  Use case: {details['use_case']}")
    print(f"  Example: {details['example']}")

# HTTP and networking
print("\\n" + "="*60)
print("HTTP and Networking:")
http_libraries = {
    "Requests": {
        "description": "Elegant HTTP library for humans",
        "install": "pip install requests",
        "use_case": "HTTP requests, API calls, web scraping",
        "example": "import requests; r = requests.get('https://api.github.com')"
    },
    "httpx": {
        "description": "Next generation HTTP client with async support",
        "install": "pip install httpx",
        "use_case": "Async HTTP requests, HTTP/2 support",
        "example": "import httpx; async with httpx.AsyncClient() as client: ..."
    },
    "aiohttp": {
        "description": "Async HTTP client/server framework",
        "install": "pip install aiohttp",
        "use_case": "Async web applications, WebSocket support",
        "example": "from aiohttp import web; app = web.Application()"
    },
    "urllib3": {
        "description": "HTTP library with thread-safe connection pooling",
        "install": "pip install urllib3",
        "use_case": "Lower-level HTTP operations, connection pooling",
        "example": "import urllib3; http = urllib3.PoolManager()"
    }
}

for lib, details in http_libraries.items():
    print(f"\\n{lib}:")
    print(f"  Description: {details['description']}")
    print(f"  Install: {details['install']}")
    print(f"  Use case: {details['use_case']}")
    print(f"  Example: {details['example']}")

# Testing and development tools
print("\\n" + "="*60)
print("Testing and Development Tools:")
dev_libraries = {
    "pytest": {
        "description": "Testing framework that makes it easy to write small tests",
        "install": "pip install pytest",
        "use_case": "Unit testing, integration testing, test automation",
        "example": "def test_addition(): assert 1 + 1 == 2"
    },
    "unittest": {
        "description": "Built-in unit testing framework (standard library)",
        "install": "Built-in",
        "use_case": "Unit testing with class-based approach",
        "example": "import unittest; class TestCase(unittest.TestCase): ..."
    },
    "Black": {
        "description": "Uncompromising code formatter",
        "install": "pip install black",
        "use_case": "Automatic code formatting, PEP 8 compliance",
        "example": "black my_script.py  # Command line usage"
    },
    "Flake8": {
        "description": "Code linting tool for style guide enforcement",
        "install": "pip install flake8",
        "use_case": "Code quality checks, style violations",
        "example": "flake8 my_project/  # Command line usage"
    },
    "mypy": {
        "description": "Static type checker for Python",
        "install": "pip install mypy",
        "use_case": "Type checking, catching type errors",
        "example": "mypy my_script.py  # Command line usage"
    },
    "Sphinx": {
        "description": "Documentation generator", 
        "install": "pip install sphinx",
        "use_case": "Creating project documentation from docstrings",
        "example": "sphinx-quickstart docs/  # Initialize documentation"
    }
}

for lib, details in dev_libraries.items():
    print(f"\\n{lib}:")
    print(f"  Description: {details['description']}")
    print(f"  Install: {details['install']}")
    print(f"  Use case: {details['use_case']}")
    print(f"  Example: {details['example']}")

# GUI and desktop applications
print("\\n" + "="*60) 
print("GUI and Desktop Applications:")
gui_libraries = {
    "Tkinter": {
        "description": "Built-in GUI toolkit (standard library)",
        "install": "Built-in",
        "use_case": "Simple desktop GUIs, rapid prototyping",
        "example": "import tkinter as tk; root = tk.Tk()"
    },
    "PyQt5/PyQt6": {
        "description": "Cross-platform GUI toolkit",
        "install": "pip install PyQt5 or PyQt6",
        "use_case": "Professional desktop applications",
        "example": "from PyQt5.QtWidgets import QApplication, QWidget"
    },
    "Kivy": {
        "description": "Cross-platform GUI framework for multi-touch apps",
        "install": "pip install kivy",
        "use_case": "Mobile apps, games, multi-touch interfaces",
        "example": "from kivy.app import App; from kivy.uix.label import Label"
    },
    "Dear PyGui": {
        "description": "Fast and powerful GUI framework",
        "install": "pip install dearpygui",
        "use_case": "Tools, utilities, data visualization GUIs",
        "example": "import dearpygui.dearpygui as dpg"
    }
}

for lib, details in gui_libraries.items():
    print(f"\\n{lib}:")
    print(f"  Description: {details['description']}")
    print(f"  Install: {details['install']}")
    print(f"  Use case: {details['use_case']}")
    print(f"  Example: {details['example']}")

# Utility and productivity libraries
print("\\n" + "="*60)
print("Utility and Productivity:")
utility_libraries = {
    "Click": {
        "description": "Command line interface creation toolkit",
        "install": "pip install click",
        "use_case": "Building command-line tools and scripts",
        "example": "@click.command(); def hello(): click.echo('Hello!')"
    },
    "Rich": {
        "description": "Rich text and beautiful formatting for the terminal",
        "install": "pip install rich",
        "use_case": "Pretty console output, progress bars, tables",
        "example": "from rich.console import Console; console = Console()"
    },
    "Typer": {
        "description": "Build command line apps with Python type hints",
        "install": "pip install typer",
        "use_case": "Modern CLI apps with automatic help generation",
        "example": "import typer; def main(name: str): typer.echo(f'Hello {name}')"
    },
    "Pillow (PIL)": {
        "description": "Python Imaging Library for image processing",
        "install": "pip install Pillow",
        "use_case": "Image manipulation, format conversion, filters",
        "example": "from PIL import Image; img = Image.open('photo.jpg')"
    },
    "openpyxl": {
        "description": "Read/write Excel 2010 xlsx/xlsm/xltx/xltm files",
        "install": "pip install openpyxl",
        "use_case": "Excel file manipulation without Excel installed",
        "example": "from openpyxl import Workbook; wb = Workbook()"
    }
}

for lib, details in utility_libraries.items():
    print(f"\\n{lib}:")
    print(f"  Description: {details['description']}")
    print(f"  Install: {details['install']}")
    print(f"  Use case: {details['use_case']}")
    print(f"  Example: {details['example']}")

# Library selection guidelines
print("\\n" + "="*60)
print("Library Selection Guidelines:")

selection_criteria = [
    "Active maintenance and regular updates",
    "Good documentation and community support", 
    "Compatible with your Python version",
    "Performance requirements for your use case",
    "License compatibility with your project",
    "Size and dependency footprint",
    "Learning curve and team expertise",
    "Long-term stability and backward compatibility"
]

print("When choosing a library, consider:")
for i, criterion in enumerate(selection_criteria, 1):
    print(f"  {i}. {criterion}")

print("\\nResearch methods:")
research_methods = [
    "Check PyPI statistics and download numbers",
    "Read documentation and examples",
    "Look at GitHub stars, forks, and recent commits",
    "Check for security vulnerabilities",
    "Read reviews and comparisons",
    "Try small proof-of-concept implementations",
    "Consider alternatives and trade-offs",
    "Evaluate community and ecosystem"
]

for method in research_methods:
    print(f"  • {method}")

# Creating your own packages
print("\\n" + "="*60)
print("Creating Your Own Packages:")

print("When to create your own package:")
package_reasons = [
    "Code is used across multiple projects",
    "Functionality is generic and reusable",
    "You want to share with the community", 
    "Need version control for shared code",
    "Want to practice packaging skills",
    "Building a library or framework"
]

for reason in package_reasons:
    print(f"  • {reason}")

print("\\nPackage development workflow:")
dev_workflow = [
    "1. Plan package structure and API",
    "2. Create package directory with __init__.py",
    "3. Write modules and functions",
    "4. Add tests with pytest or unittest",
    "5. Create setup.py or pyproject.toml",
    "6. Write documentation and README",
    "7. Test installation in clean environment", 
    "8. Publish to PyPI (optional)",
    "9. Maintain and update as needed"
]

for step in dev_workflow:
    print(f"  {step}")

print("\\nPackage quality checklist:")
quality_checklist = [
    "✓ Clear and descriptive name",
    "✓ Comprehensive documentation",
    "✓ Unit tests with good coverage",
    "✓ Semantic versioning",
    "✓ Proper error handling",
    "✓ Type hints (Python 3.5+)",
    "✓ Code formatting (Black/autopep8)",
    "✓ Linting (flake8/pylint)",
    "✓ Security considerations",
    "✓ Performance optimization"
]

for item in quality_checklist:
    print(f"  {item}")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ Package Management Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Best Practices:</h3>
            <ul>
              <li><strong>Use virtual environments:</strong> Always isolate project dependencies</li>
              <li><strong>Pin versions in production:</strong> Use exact versions for reproducible deployments</li>
              <li><strong>Keep requirements updated:</strong> Regularly update and test with newer versions</li>
              <li><strong>Minimize dependencies:</strong> Only install what you actually need</li>
              <li><strong>Document dependencies:</strong> Maintain clear requirements files and documentation</li>
              <li><strong>Security scanning:</strong> Regularly check for security vulnerabilities</li>
              <li><strong>Version control requirements:</strong> Track requirements.txt in your repository</li>
              <li><strong>Test dependency updates:</strong> Always test before updating production dependencies</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Set up a virtual environment and create a requirements.txt file for a web project</li>
              <li>Create a package manager script that installs different dependency sets for dev/prod</li>
              <li>Build a dependency analyzer that shows package relationships and sizes</li>
              <li>Create a package version checker that alerts for outdated dependencies</li>
              <li>Design a multi-environment setup (development, testing, production)</li>
              <li>Build a simple package and publish it to Test PyPI</li>
              <li>Create a Docker container with your Python application and dependencies</li>
              <li>Set up automated dependency updates with testing</li>
              <li>Create a package compatibility checker for different Python versions</li>
              <li>Build a custom package index for internal company packages</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PackagesAndLibraries;
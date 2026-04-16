import React from 'react';
import '../Navbarweb.css';

function FileIOOperations() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>📁 File I/O Operations</h1>
        <p className="py-topic-subtitle">
          Learn to read from and write to files in Python
        </p>
      </div>
      <div className="py-topic-content">
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>📁 What are File I/O Operations?</h2>
          <p>
            File Input/Output (I/O) operations in Python allow you to read from and write to files 
            on your system. This is essential for data persistence, configuration management, logging, 
            data processing, and many other real-world applications. Python provides powerful and 
            intuitive tools for working with various file formats and handling different types of data.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Concepts:</h3>
            <ul>
              <li><strong>File Objects:</strong> Python objects that represent files and provide methods for file operations</li>
              <li><strong>File Modes:</strong> How to open files (read, write, append, binary, text)</li>
              <li><strong>Context Managers:</strong> Using 'with' statement for safe file handling</li>
              <li><strong>File Paths:</strong> Working with file and directory paths</li>
              <li><strong>Text vs Binary:</strong> Different modes for different types of data</li>
              <li><strong>File Encoding:</strong> Handling different character encodings</li>
              <li><strong>Exception Handling:</strong> Managing file operation errors</li>
            </ul>
          </div>
        </section>

        {/* Basic File Operations */}
        <section className="py-topic-section">
          <h2>📖 Basic File Reading</h2>
          
          <div className="py-code-block">
            <pre>{`# Basic file reading operations
print("Basic File Reading Examples:")

# Reading entire file content
def read_entire_file():
    try:
        # Method 1: Using with statement (recommended)
        with open("sample.txt", "r") as file:
            content = file.read()
            print("File content:")
            print(content)
            return content
    except FileNotFoundError:
        print("File 'sample.txt' not found. Creating sample file...")
        # Create a sample file for demonstration
        with open("sample.txt", "w") as file:
            file.write("Hello, World!\\nThis is line 2.\\nThis is line 3.")
        
        # Now read it
        with open("sample.txt", "r") as file:
            content = file.read()
            print("File content:")
            print(content)
            return content

sample_content = read_entire_file()

# Reading file line by line
def read_line_by_line():
    print("\\nReading file line by line:")
    try:
        with open("sample.txt", "r") as file:
            line_number = 1
            for line in file:
                print(f"Line {{line_number}}: {{line.strip()}}")  # strip() removes newline
                line_number += 1
    except FileNotFoundError:
        print("File not found")

read_line_by_line()

# Reading all lines into a list
def read_all_lines():
    print("\\nReading all lines into a list:")
    try:
        with open("sample.txt", "r") as file:
            lines = file.readlines()
            for i, line in enumerate(lines, 1):
                print(f"Line {{i}}: {{repr(line)}}")  # repr() shows the actual string including \\n
    except FileNotFoundError:
        print("File not found")

read_all_lines()

# Reading specific number of characters
def read_characters():
    print("\\nReading specific number of characters:")
    try:
        with open("sample.txt", "r") as file:
            # Read first 10 characters
            chunk = file.read(10)
            print(f"First 10 characters: '{{chunk}}'")
            
            # Read next 5 characters
            chunk = file.read(5)
            print(f"Next 5 characters: '{{chunk}}'")
            
            # Read rest of the file
            rest = file.read()
            print(f"Rest of file: '{{rest}}'")
    except FileNotFoundError:
        print("File not found")

read_characters()

# Reading one line at a time
def read_single_lines():
    print("\\nReading one line at a time:")
    try:
        with open("sample.txt", "r") as file:
            first_line = file.readline()
            print(f"First line: {{repr(first_line)}}")
            
            second_line = file.readline()
            print(f"Second line: {{repr(second_line)}}")
            
            # Continue reading until end of file
            line_count = 2
            while True:
                line = file.readline()
                if not line:  # Empty string means end of file
                    break
                line_count += 1
                print(f"Line {{line_count}}: {{repr(line)}}")
    except FileNotFoundError:
        print("File not found")

read_single_lines()

# File reading with different encodings
def read_with_encoding():
    print("\\nReading with different encodings:")
    
    # Create file with special characters
    text_with_accents = "Café, naïve, résumé, piñata"
    
    # Write with UTF-8 encoding
    with open("encoded_sample.txt", "w", encoding="utf-8") as file:
        file.write(text_with_accents)
    
    # Read with UTF-8 encoding
    with open("encoded_sample.txt", "r", encoding="utf-8") as file:
        content = file.read()
        print(f"UTF-8 content: {{content}}")
    
    # Try reading with different encoding (might cause issues)
    try:
        with open("encoded_sample.txt", "r", encoding="ascii") as file:
            content = file.read()
            print(f"ASCII content: {{content}}")
    except UnicodeDecodeError as e:
        print(f"Encoding error: {{e}}")

read_with_encoding()

# Reading large files efficiently
def read_large_file_efficiently():
    print("\\nReading large files efficiently:")
    
    # Create a larger sample file
    with open("large_sample.txt", "w") as file:
        for i in range(1000):
            file.write(f"This is line number {{i+1}} with some sample data.\\n")
    
    # Read in chunks
    chunk_size = 100  # Read 100 characters at a time
    with open("large_sample.txt", "r") as file:
        chunk_count = 0
        while True:
            chunk = file.read(chunk_size)
            if not chunk:
                break
            chunk_count += 1
            if chunk_count <= 3:  # Show only first 3 chunks
                print(f"Chunk {{chunk_count}}: {{chunk[:50]}}...")  # Show first 50 chars
        print(f"Total chunks read: {{chunk_count}}")
    
    # Read and process line by line (memory efficient)
    print("\\nProcessing line by line:")
    word_count = 0
    line_count = 0
    with open("large_sample.txt", "r") as file:
        for line in file:
            line_count += 1
            word_count += len(line.split())
            if line_count <= 3:  # Show only first 3 lines
                print(f"Line {{line_count}}: {{line.strip()}}")
    
    print(f"Total lines: {{line_count}}")
    print(f"Total words: {{word_count}}")

read_large_file_efficiently()

# File reading with error handling
def safe_file_reading(filename):
    print(f"\\nSafe reading of {{filename}}:")
    try:
        with open(filename, "r") as file:
            content = file.read()
            print(f"Successfully read {{len(content)}} characters")
            return content
    except FileNotFoundError:
        print(f"Error: File '{{filename}}' not found")
        return None
    except PermissionError:
        print(f"Error: Permission denied to read '{{filename}}'")
        return None
    except UnicodeDecodeError as e:
        print(f"Error: Cannot decode file '{{filename}}': {{e}}")
        return None
    except Exception as e:
        print(f"Unexpected error reading '{{filename}}': {{type(e).__name__}}: {{e}}")
        return None

# Test safe reading
safe_file_reading("sample.txt")
safe_file_reading("nonexistent.txt")

# Reading different file types
def read_different_formats():
    print("\\nReading different file formats:")
    
    # CSV-like data
    csv_data = "Name,Age,City\\nAlice,25,New York\\nBob,30,London\\nCharlie,35,Tokyo"
    with open("data.csv", "w") as file:
        file.write(csv_data)
    
    # Read and parse CSV manually
    print("Manual CSV parsing:")
    with open("data.csv", "r") as file:
        lines = file.readlines()
        headers = lines[0].strip().split(",")
        print(f"Headers: {{headers}}")
        
        for i, line in enumerate(lines[1:], 1):
            values = line.strip().split(",")
            record = dict(zip(headers, values))
            print(f"Record {{i}}: {{record}}")
    
    # JSON-like data (as string)
    json_data = '{{"users": [{{"name": "Alice", "age": 25}}, {{"name": "Bob", "age": 30}}]}}'
    with open("data.json", "w") as file:
        file.write(json_data)
    
    print("\\nReading JSON-like file:")
    with open("data.json", "r") as file:
        json_content = file.read()
        print(f"JSON content: {{json_content}}")

read_different_formats()`}</pre>
          </div>
        </section>

        {/* File Writing */}
        <section className="py-topic-section">
          <h2>✍️ File Writing Operations</h2>
          
          <div className="py-code-block">
            <pre>{`# File writing operations
print("File Writing Examples:")

# Basic file writing
def basic_file_writing():
    print("Basic file writing:")
    
    # Write text to a file (overwrites existing content)
    with open("output.txt", "w") as file:
        file.write("Hello, World!\\n")
        file.write("This is the second line.\\n")
        file.write("This is the third line.")
    
    # Read back to verify
    with open("output.txt", "r") as file:
        content = file.read()
        print("Written content:")
        print(content)

basic_file_writing()

# Appending to files
def append_to_file():
    print("\\nAppending to files:")
    
    # Append to existing file
    with open("output.txt", "a") as file:
        file.write("\\nThis line was appended.")
        file.write("\\nAnother appended line.")
    
    # Read back to verify
    with open("output.txt", "r") as file:
        content = file.read()
        print("Content after appending:")
        print(content)

append_to_file()

# Writing lists and multiple lines
def write_multiple_lines():
    print("\\nWriting multiple lines:")
    
    lines = [
        "Line 1: Python File I/O",
        "Line 2: Writing multiple lines",
        "Line 3: Using writelines() method",
        "Line 4: Don't forget newlines!"
    ]
    
    # Method 1: Using writelines() - doesn't add newlines automatically
    with open("multiple_lines1.txt", "w") as file:
        file.writelines([line + "\\n" for line in lines])
    
    # Method 2: Using loop with write()
    with open("multiple_lines2.txt", "w") as file:
        for line in lines:
            file.write(line + "\\n")
    
    # Method 3: Using join()
    with open("multiple_lines3.txt", "w") as file:
        file.write("\\n".join(lines))
    
    # Verify all methods produce same result
    for i in range(1, 4):
        with open(f"multiple_lines{{i}}.txt", "r") as file:
            content = file.read()
            print(f"Method {{i}} result:")
            print(repr(content))
            print()

write_multiple_lines()

# Writing different data types
def write_different_data_types():
    print("Writing different data types:")
    
    # Prepare data
    data = {{
        "name": "Alice",
        "age": 25,
        "scores": [85, 92, 78, 96],
        "is_student": True
    }}
    
    with open("data_types.txt", "w") as file:
        # Write strings directly
        file.write(f"Name: {{data['name']}}\\n")
        
        # Convert numbers to strings
        file.write(f"Age: {{data['age']}}\\n")
        
        # Convert boolean to string
        file.write(f"Is Student: {{data['is_student']}}\\n")
        
        # Write list (convert to string)
        file.write(f"Scores: {{', '.join(map(str, data['scores']))}}\\n")
        
        # Write the entire dictionary
        file.write(f"Full Data: {{data}}\\n")
    
    # Read back and display
    with open("data_types.txt", "r") as file:
        content = file.read()
        print("Data types file content:")
        print(content)

write_different_data_types()

# Writing formatted data
def write_formatted_data():
    print("\\nWriting formatted data:")
    
    students = [
        {{"name": "Alice", "age": 20, "grade": 85.5}},
        {{"name": "Bob", "age": 21, "grade": 92.0}},
        {{"name": "Charlie", "age": 19, "grade": 78.3}},
        {{"name": "Diana", "age": 22, "grade": 96.7}}
    ]
    
    with open("formatted_data.txt", "w") as file:
        # Write header
        file.write("Student Report\\n")
        file.write("=" * 40 + "\\n")
        file.write(f"{{'Name':<12}} {{'Age':<5}} {{'Grade':<8}}\\n")
        file.write("-" * 40 + "\\n")
        
        # Write student data
        for student in students:
            file.write(f"{{student['name']:<12}} {{student['age']:<5}} {{student['grade']:<8.1f}}\\n")
        
        # Write summary
        file.write("-" * 40 + "\\n")
        avg_grade = sum(s['grade'] for s in students) / len(students)
        file.write(f"Average Grade: {{avg_grade:.2f}}\\n")
    
    # Display the formatted output
    with open("formatted_data.txt", "r") as file:
        content = file.read()
        print("Formatted data:")
        print(content)

write_formatted_data()

# Writing CSV data
def write_csv_data():
    print("\\nWriting CSV data:")
    
    # Sample data
    employees = [
        ["Name", "Department", "Salary", "Years"],  # Header
        ["Alice Johnson", "Engineering", 75000, 3],
        ["Bob Smith", "Marketing", 65000, 5],
        ["Charlie Brown", "HR", 55000, 2],
        ["Diana Wilson", "Engineering", 80000, 4]
    ]
    
    with open("employees.csv", "w") as file:
        for row in employees:
            # Convert all items to strings and join with commas
            csv_line = ",".join(str(item) for item in row)
            file.write(csv_line + "\\n")
    
    print("CSV file created. Content:")
    with open("employees.csv", "r") as file:
        content = file.read()
        print(content)

write_csv_data()

# Writing with different encodings
def write_with_encodings():
    print("\\nWriting with different encodings:")
    
    text_with_unicode = "Special characters: café, naïve, résumé, 你好, こんにちは"
    
    # Write with UTF-8
    with open("unicode_utf8.txt", "w", encoding="utf-8") as file:
        file.write(text_with_unicode)
    
    # Write with UTF-16
    with open("unicode_utf16.txt", "w", encoding="utf-16") as file:
        file.write(text_with_unicode)
    
    # Read both back
    print("UTF-8 version:")
    with open("unicode_utf8.txt", "r", encoding="utf-8") as file:
        content = file.read()
        print(content)
    
    print("UTF-16 version:")
    with open("unicode_utf16.txt", "r", encoding="utf-16") as file:
        content = file.read()
        print(content)

write_with_encodings()

# Safe file writing with error handling
def safe_file_writing(filename, data):
    print(f"\\nSafe writing to {{filename}}:")
    try:
        with open(filename, "w") as file:
            if isinstance(data, (list, tuple)):
                for item in data:
                    file.write(str(item) + "\\n")
            else:
                file.write(str(data))
        print(f"Successfully wrote to {{filename}}")
        return True
    except PermissionError:
        print(f"Error: Permission denied to write to {{filename}}")
        return False
    except IOError as e:
        print(f"Error: I/O error writing to {{filename}}: {{e}}")
        return False
    except Exception as e:
        print(f"Unexpected error writing to {{filename}}: {{type(e).__name__}}: {{e}}")
        return False

# Test safe writing
safe_file_writing("safe_output.txt", "This is safe content")
safe_file_writing("safe_list.txt", ["Item 1", "Item 2", "Item 3"])

# Atomic file writing (write to temp file, then rename)
def atomic_file_write(filename, content):
    """Write to a temporary file, then rename it to ensure atomicity."""
    import os
    temp_filename = filename + ".tmp"
    
    try:
        # Write to temporary file
        with open(temp_filename, "w") as file:
            file.write(content)
        
        # If write successful, rename temp file to actual filename
        os.rename(temp_filename, filename)
        print(f"Atomically wrote to {{filename}}")
        return True
    except Exception as e:
        # Clean up temp file if it exists
        try:
            os.remove(temp_filename)
        except:
            pass
        print(f"Atomic write failed: {{e}}")
        return False

print("\\nAtomic file writing:")
atomic_file_write("atomic_output.txt", "This content was written atomically")

# Backup before writing
def write_with_backup(filename, content):
    """Create backup before writing new content."""
    import os
    import shutil
    from datetime import datetime
    
    backup_name = None
    try:
        # Create backup if file exists
        if os.path.exists(filename):
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            backup_name = f"{{filename}}.backup.{{timestamp}}"
            shutil.copy2(filename, backup_name)
            print(f"Created backup: {{backup_name}}")
        
        # Write new content
        with open(filename, "w") as file:
            file.write(content)
        
        print(f"Successfully wrote to {{filename}}")
        return True
        
    except Exception as e:
        # If writing failed and we created a backup, restore it
        if backup_name and os.path.exists(backup_name):
            try:
                shutil.copy2(backup_name, filename)
                print(f"Restored from backup due to error: {{e}}")
            except:
                pass
        print(f"Write with backup failed: {{e}}")
        return False

print("\\nWriting with backup:")
# First create a file
with open("backup_test.txt", "w") as f:
    f.write("Original content")

# Now update it with backup
write_with_backup("backup_test.txt", "New content with backup protection")`}</pre>
          </div>
        </section>

        {/* Binary Files and Advanced Operations */}
        <section className="py-topic-section">
          <h2>🔧 Binary Files and Advanced Operations</h2>
          
          <div className="py-code-block">
            <pre>{`# Binary file operations and advanced techniques
print("Binary File Operations:")

# Working with binary files
def binary_file_operations():
    print("Binary file operations:")
    
    # Write binary data
    binary_data = b"\\x48\\x65\\x6c\\x6c\\x6f"  # "Hello" in bytes
    with open("binary_data.bin", "wb") as file:
        file.write(binary_data)
        file.write(b" World!")
    
    # Read binary data
    with open("binary_data.bin", "rb") as file:
        data = file.read()
        print(f"Binary data: {{data}}")
        print(f"Decoded: {{data.decode('utf-8')}}")
    
    # Working with integers as binary
    numbers = [1, 256, 65536, 16777216]
    with open("numbers.bin", "wb") as file:
        for num in numbers:
            # Convert to 4-byte integer (little-endian)
            file.write(num.to_bytes(4, byteorder='little'))
    
    # Read integers back
    with open("numbers.bin", "rb") as file:
        print("\\nReading integers from binary file:")
        while True:
            data = file.read(4)  # Read 4 bytes at a time
            if not data:
                break
            num = int.from_bytes(data, byteorder='little')
            print(f"Read integer: {{num}}")

binary_file_operations()

# File positioning and seeking
def file_positioning():
    print("\\nFile positioning and seeking:")
    
    # Create a sample file
    with open("positioning.txt", "w") as file:
        file.write("0123456789ABCDEFGHIJ")
    
    # Demonstrate file positioning
    with open("positioning.txt", "r") as file:
        # Read first 5 characters
        data = file.read(5)
        print(f"First 5 chars: {{data}}")
        print(f"Current position: {{file.tell()}}")
        
        # Seek to position 10
        file.seek(10)
        print(f"After seek(10), position: {{file.tell()}}")
        
        # Read next 5 characters
        data = file.read(5)
        print(f"Next 5 chars from position 10: {{data}}")
        
        # Seek from current position (relative)
        file.seek(-3, 1)  # Go back 3 positions from current
        print(f"After seek(-3, 1), position: {{file.tell()}}")
        
        # Read from new position
        data = file.read(3)
        print(f"3 chars from new position: {{data}}")
        
        # Seek from end of file
        file.seek(-5, 2)  # 5 positions from end
        print(f"After seek(-5, 2), position: {{file.tell()}}")
        
        # Read to end
        data = file.read()
        print(f"Last 5 chars: {{data}}")

file_positioning()

# Working with large files efficiently
def efficient_large_file_processing():
    print("\\nEfficient large file processing:")
    
    # Create a large file for demonstration
    with open("large_file.txt", "w") as file:
        for i in range(10000):
            file.write(f"Line {{i:05d}}: This is a sample line with some data {{i*2}}\\n")
    
    # Process line by line (memory efficient)
    def process_large_file_line_by_line():
        line_count = 0
        total_chars = 0
        with open("large_file.txt", "r") as file:
            for line in file:
                line_count += 1
                total_chars += len(line)
                # Process every 1000th line
                if line_count % 1000 == 0:
                    print(f"Processed {{line_count}} lines, {{total_chars}} characters")
        
        print(f"Total: {{line_count}} lines, {{total_chars}} characters")
    
    process_large_file_line_by_line()
    
    # Process in chunks
    def process_in_chunks():
        chunk_size = 8192  # 8KB chunks
        chunk_count = 0
        total_size = 0
        
        with open("large_file.txt", "r") as file:
            while True:
                chunk = file.read(chunk_size)
                if not chunk:
                    break
                chunk_count += 1
                total_size += len(chunk)
                
                # Process chunk (count lines in this example)
                lines_in_chunk = chunk.count('\\n')
                if chunk_count <= 3:  # Show first 3 chunks
                    print(f"Chunk {{chunk_count}}: {{len(chunk)}} chars, {{lines_in_chunk}} lines")
        
        print(f"Processed {{chunk_count}} chunks, {{total_size}} total characters")
    
    print("\\nProcessing in chunks:")
    process_in_chunks()

efficient_large_file_processing()

# File system operations
def file_system_operations():
    print("\\nFile system operations:")
    import os
    import stat
    from datetime import datetime
    
    # Get file information
    def get_file_info(filename):
        try:
            if os.path.exists(filename):
                file_stat = os.stat(filename)
                print(f"File: {{filename}}")
                print(f"  Size: {{file_stat.st_size}} bytes")
                print(f"  Created: {{datetime.fromtimestamp(file_stat.st_ctime)}}")
                print(f"  Modified: {{datetime.fromtimestamp(file_stat.st_mtime)}}")
                print(f"  Permissions: {{oct(file_stat.st_mode)}}")
                print(f"  Is file: {{os.path.isfile(filename)}}")
                print(f"  Is directory: {{os.path.isdir(filename)}}")
            else:
                print(f"File {{filename}} does not exist")
        except Exception as e:
            print(f"Error getting info for {{filename}}: {{e}}")
    
    # Check files we created
    get_file_info("sample.txt")
    get_file_info("large_file.txt")
    
    # Directory operations
    print("\\nDirectory operations:")
    
    # Create directory
    test_dir = "test_directory"
    if not os.path.exists(test_dir):
        os.makedirs(test_dir)
        print(f"Created directory: {{test_dir}}")
    
    # Create file in directory
    test_file_path = os.path.join(test_dir, "test_file.txt")
    with open(test_file_path, "w") as file:
        file.write("This is a test file in a subdirectory")
    
    # List directory contents
    print(f"Contents of {{test_dir}}:")
    for item in os.listdir(test_dir):
        item_path = os.path.join(test_dir, item)
        if os.path.isfile(item_path):
            print(f"  File: {{item}}")
        elif os.path.isdir(item_path):
            print(f"  Directory: {{item}}")
    
    # Walk through directory tree
    print("\\nWalking through current directory:")
    for root, dirs, files in os.walk("."):
        level = root.replace(".", "").count(os.sep)
        indent = " " * 2 * level
        print(f"{{indent}}{{os.path.basename(root)}}/")
        subindent = " " * 2 * (level + 1)
        for file in files[:3]:  # Show only first 3 files
            print(f"{{subindent}}{{file}}")
        if len(files) > 3:
            print(f"{{subindent}}... and {{len(files) - 3}} more files")

file_system_operations()

# Working with different file formats
def work_with_file_formats():
    print("\\nWorking with different file formats:")
    
    # JSON-like handling (manual)
    def write_json_like(data, filename):
        import json
        with open(filename, "w") as file:
            json.dump(data, file, indent=2)
    
    def read_json_like(filename):
        import json
        with open(filename, "r") as file:
            return json.load(file)
    
    # Sample data
    data = {{
        "users": [
            {{"id": 1, "name": "Alice", "email": "alice@example.com"}},
            {{"id": 2, "name": "Bob", "email": "bob@example.com"}}
        ],
        "metadata": {{
            "version": "1.0",
            "created": "2024-01-01"
        }}
    }}
    
    # Write and read JSON
    write_json_like(data, "data.json")
    read_data = read_json_like("data.json")
    print(f"JSON data: {{read_data}}")
    
    # Configuration file format
    def write_config(config_data, filename):
        with open(filename, "w") as file:
            file.write("# Configuration File\\n")
            file.write(f"# Generated on {{datetime.now()}}\\n\\n")
            
            for section, settings in config_data.items():
                file.write(f"[{{section}}]\\n")
                for key, value in settings.items():
                    file.write(f"{{key}} = {{value}}\\n")
                file.write("\\n")
    
    config = {{
        "database": {{
            "host": "localhost",
            "port": 5432,
            "name": "mydb"
        }},
        "logging": {{
            "level": "INFO",
            "file": "app.log"
        }}
    }}
    
    write_config(config, "app.config")
    
    print("\\nConfiguration file created:")
    with open("app.config", "r") as file:
        print(file.read())

work_with_file_formats()

# File locking and concurrent access
def demonstrate_file_locking():
    print("\\nFile locking and concurrent access:")
    import fcntl
    import time
    
    def write_with_lock(filename, content, process_id):
        try:
            with open(filename, "a") as file:
                # Try to acquire exclusive lock
                fcntl.flock(file.fileno(), fcntl.LOCK_EX | fcntl.LOCK_NB)
                print(f"Process {{process_id}} acquired lock")
                
                # Simulate some work
                file.write(f"Process {{process_id}} writing at {{datetime.now()}}\\n")
                time.sleep(0.1)  # Simulate work
                
                print(f"Process {{process_id}} finished writing")
                # Lock is automatically released when file is closed
        except BlockingIOError:
            print(f"Process {{process_id}} could not acquire lock")
        except Exception as e:
            print(f"Process {{process_id}} error: {{e}}")
    
    # This is a demonstration - in real use you'd have multiple processes
    print("Demonstrating file locking (single process simulation):")
    for i in range(3):
        write_with_lock("locked_file.txt", f"Content {{i}}", i)

# Note: File locking may not work on all systems
try:
    demonstrate_file_locking()
except ImportError:
    print("File locking not available on this system")`}</pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>⭐ File I/O Best Practices</h2>
          
          <div className="py-highlight-box">
            <h3>Best Practices:</h3>
            <ul>
              <li><strong>Always use context managers:</strong> Use 'with' statement to ensure files are properly closed</li>
              <li><strong>Handle exceptions:</strong> Always wrap file operations in try/except blocks</li>
              <li><strong>Specify encoding:</strong> Explicitly specify encoding for text files to avoid issues</li>
              <li><strong>Use appropriate modes:</strong> Choose the right file mode (r, w, a, x, b, t) for your needs</li>
              <li><strong>Process large files efficiently:</strong> Read large files in chunks or line by line</li>
              <li><strong>Validate file paths:</strong> Check if files and directories exist before operations</li>
              <li><strong>Use atomic operations:</strong> For critical files, write to temp file and rename</li>
              <li><strong>Create backups:</strong> Backup important files before modifying them</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🎯 Practice Exercises</h2>
          
          <div className="py-highlight-box">
            <h3>Try These Exercises:</h3>
            <ol>
              <li>Build a log file analyzer that processes large log files efficiently</li>
              <li>Create a configuration manager that reads and writes config files</li>
              <li>Implement a simple database using files for data persistence</li>
              <li>Build a file backup system with versioning</li>
              <li>Create a CSV processor for data analysis</li>
              <li>Implement a text file encryption/decryption tool</li>
              <li>Build a file synchronization system between directories</li>
              <li>Create a template engine that processes template files</li>
              <li>Implement a simple content management system using files</li>
              <li>Build a file monitoring system that tracks changes</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FileIOOperations;
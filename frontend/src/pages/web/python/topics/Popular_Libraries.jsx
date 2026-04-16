import React from 'react';
import '../Navbarweb.css';

function PopularLibraries() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>📚 Popular Libraries</h1>
        <p className="py-topic-subtitle">
          Explore essential Python libraries and frameworks
        </p>
      </div>
      <div className="py-topic-content">
        
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>📖 Introduction to Python Libraries</h2>
          <p>
            Python's rich ecosystem of libraries and frameworks is one of its greatest strengths.
            These pre-built tools help you accomplish complex tasks quickly and efficiently.
          </p>
          
          <h3>What are Python Libraries?</h3>
          <ul>
            <li><strong>Standard Library:</strong> Built into Python (no installation needed)</li>
            <li><strong>Third-party Libraries:</strong> Installed via pip or conda</li>
            <li><strong>Frameworks:</strong> Comprehensive platforms for specific domains</li>
            <li><strong>Packages:</strong> Collections of related modules</li>
          </ul>

          <h3>Installing Libraries</h3>
          <div className="code-example">
            <pre><code>{`# Using pip (Python Package Installer)
pip install library_name

# Install specific version
pip install library_name==1.2.3

# Install from requirements file
pip install -r requirements.txt

# Using conda (for Anaconda/Miniconda)
conda install library_name

# Install multiple libraries
pip install requests numpy pandas matplotlib`}</code></pre>
          </div>
        </section>

        {/* Web Development Libraries */}
        <section className="py-topic-section">
          <h2>🌐 Web Development Libraries</h2>
          
          <h3>🔥 Flask - Micro Web Framework</h3>
          <div className="code-example">
            <h4>Installation and Basic Usage:</h4>
            <pre><code>{`pip install Flask

from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return '<h1>Hello, Flask!</h1>'

@app.route('/api/users')
def get_users():
    users = [{'id': 1, 'name': 'Alice'}, {'id': 2, 'name': 'Bob'}]
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)`}</code></pre>
          </div>

          <h3>🎯 Django - Full-Stack Framework</h3>
          <div className="code-example">
            <pre><code>{`pip install Django

# Create new project
django-admin startproject mysite

# Django model example
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name`}</code></pre>
          </div>

          <h3>⚡ FastAPI - Modern API Framework</h3>
          <div className="code-example">
            <pre><code>{`pip install fastapi uvicorn

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    name: str
    email: str

@app.get("/")
def read_root():
    return {"message": "Hello FastAPI"}

@app.post("/users/")
def create_user(user: User):
    return {"message": f"User {user.name} created"}

# Run with: uvicorn main:app --reload`}</code></pre>
          </div>

          <h3>🌐 Requests - HTTP Library</h3>
          <div className="code-example">
            <pre><code>{`pip install requests

import requests

# GET request
response = requests.get('https://api.github.com/users/octocat')
data = response.json()
print(data['name'])

# POST request with data
payload = {'key1': 'value1', 'key2': 'value2'}
response = requests.post('https://httpbin.org/post', data=payload)

# Headers and authentication
headers = {'Authorization': 'Bearer token123'}
response = requests.get('https://api.example.com/data', headers=headers)

# Download files
url = 'https://example.com/file.pdf'
response = requests.get(url)
with open('file.pdf', 'wb') as f:
    f.write(response.content)`}</code></pre>
          </div>
        </section>

        {/* Data Science Libraries */}
        <section className="py-topic-section">
          <h2>📊 Data Science Libraries</h2>
          
          <h3>🔢 NumPy - Numerical Computing</h3>
          <div className="code-example">
            <pre><code>{`pip install numpy

import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4]])

# Array operations
print(arr * 2)        # [2 4 6 8 10]
print(np.sum(arr))    # 15
print(np.mean(arr))   # 3.0

# Mathematical functions
print(np.sqrt(arr))   # Square root
print(np.sin(arr))    # Sine function

# Random numbers
random_array = np.random.randint(0, 10, size=(3, 3))
print(random_array)

# Array reshaping and indexing
arr_2d = np.arange(12).reshape(3, 4)
print(arr_2d[0, :])   # First row
print(arr_2d[:, 1])   # Second column`}</code></pre>
          </div>

          <h3>🐼 Pandas - Data Manipulation</h3>
          <div className="code-example">
            <pre><code>{`pip install pandas

import pandas as pd

# Create DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'London', 'Tokyo']
}
df = pd.DataFrame(data)

# Read from files
df = pd.read_csv('data.csv')
df = pd.read_excel('data.xlsx')

# Data exploration
print(df.head())        # First 5 rows
print(df.describe())    # Statistical summary
print(df.info())        # Data types and info

# Data filtering
young_people = df[df['Age'] < 30]
ny_people = df[df['City'] == 'New York']

# Data aggregation
age_groups = df.groupby('City')['Age'].mean()

# Data cleaning
df.dropna()             # Remove missing values
df.fillna(0)            # Fill missing values
df.drop_duplicates()    # Remove duplicates`}</code></pre>
          </div>

          <h3>📈 Matplotlib - Data Visualization</h3>
          <div className="code-example">
            <pre><code>{`pip install matplotlib

import matplotlib.pyplot as plt
import numpy as np

# Line plot
x = np.linspace(0, 10, 100)
y = np.sin(x)
plt.plot(x, y)
plt.title('Sine Wave')
plt.xlabel('X values')
plt.ylabel('Y values')
plt.show()

# Multiple plots
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 4))

# Bar chart
categories = ['A', 'B', 'C', 'D']
values = [3, 7, 2, 5]
ax1.bar(categories, values)
ax1.set_title('Bar Chart')

# Scatter plot
x = np.random.randn(50)
y = np.random.randn(50)
ax2.scatter(x, y)
ax2.set_title('Scatter Plot')

plt.tight_layout()
plt.show()`}</code></pre>
          </div>

          <h3>🌊 Seaborn - Statistical Visualization</h3>
          <div className="code-example">
            <pre><code>{`pip install seaborn

import seaborn as sns
import matplotlib.pyplot as plt

# Load sample dataset
tips = sns.load_dataset('tips')

# Correlation heatmap
correlation_matrix = tips.corr()
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm')
plt.title('Correlation Matrix')
plt.show()

# Box plot
sns.boxplot(x='day', y='total_bill', data=tips)
plt.title('Total Bill by Day')
plt.show()

# Pair plot
sns.pairplot(tips, hue='sex')
plt.show()`}</code></pre>
          </div>
        </section>

        {/* Machine Learning Libraries */}
        <section className="py-topic-section">
          <h2>🤖 Machine Learning Libraries</h2>
          
          <h3>🧠 Scikit-learn - Machine Learning</h3>
          <div className="code-example">
            <pre><code>{`pip install scikit-learn

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, mean_squared_error
from sklearn.datasets import load_iris, load_boston

# Linear Regression Example
boston = load_boston()
X_train, X_test, y_train, y_test = train_test_split(
    boston.data, boston.target, test_size=0.3, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)
mse = mean_squared_error(y_test, predictions)
print(f"Mean Squared Error: {mse}")

# Classification Example
iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.3, random_state=42
)

classifier = RandomForestClassifier()
classifier.fit(X_train, y_train)
predictions = classifier.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy}")`}</code></pre>
          </div>

          <h3>🔥 TensorFlow - Deep Learning</h3>
          <div className="code-example">
            <pre><code>{`pip install tensorflow

import tensorflow as tf
from tensorflow import keras

# Simple neural network
model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Load and preprocess data
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()
x_train = x_train.reshape(60000, 784).astype('float32') / 255
x_test = x_test.reshape(10000, 784).astype('float32') / 255

# Train model
model.fit(x_train, y_train, epochs=5, batch_size=32, validation_split=0.2)

# Evaluate model
test_loss, test_accuracy = model.evaluate(x_test, y_test)
print(f"Test accuracy: {test_accuracy}")`}</code></pre>
          </div>

          <h3>🔥 PyTorch - Deep Learning Framework</h3>
          <div className="code-example">
            <pre><code>{`pip install torch torchvision

import torch
import torch.nn as nn
import torch.optim as optim

# Define a simple neural network
class SimpleNet(nn.Module):
    def __init__(self):
        super(SimpleNet, self).__init__()
        self.fc1 = nn.Linear(784, 128)
        self.fc2 = nn.Linear(128, 64)
        self.fc3 = nn.Linear(64, 10)
        self.relu = nn.ReLU()
        self.dropout = nn.Dropout(0.2)
    
    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.dropout(x)
        x = self.relu(self.fc2(x))
        x = self.fc3(x)
        return x

# Create model instance
model = SimpleNet()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop (simplified)
for epoch in range(5):
    # Forward pass, loss calculation, backpropagation
    # ... training code here
    pass`}</code></pre>
          </div>
        </section>

        {/* Database Libraries */}
        <section className="py-topic-section">
          <h2>🗄️ Database Libraries</h2>
          
          <h3>💾 SQLite3 - Built-in Database</h3>
          <div className="code-example">
            <pre><code>{`import sqlite3

# Connect to database (creates file if doesn't exist)
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# Create table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE
    )
''')

# Insert data
cursor.execute("INSERT INTO users (name, email) VALUES (?, ?)", 
               ("Alice", "alice@example.com"))

# Fetch data
cursor.execute("SELECT * FROM users")
users = cursor.fetchall()
for user in users:
    print(user)

# Close connection
conn.commit()
conn.close()`}</code></pre>
          </div>

          <h3>🔗 SQLAlchemy - ORM Framework</h3>
          <div className="code-example">
            <pre><code>{`pip install sqlalchemy

from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    email = Column(String(120), unique=True)

# Create database and tables
engine = create_engine('sqlite:///example.db')
Base.metadata.create_all(engine)

# Create session
Session = sessionmaker(bind=engine)
session = Session()

# Add new user
new_user = User(name='Alice', email='alice@example.com')
session.add(new_user)
session.commit()

# Query users
users = session.query(User).all()
for user in users:
    print(f"{user.name}: {user.email}")

session.close()`}</code></pre>
          </div>

          <h3>🍃 PyMongo - MongoDB Driver</h3>
          <div className="code-example">
            <pre><code>{`pip install pymongo

from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase']
collection = db['users']

# Insert document
user = {
    'name': 'Alice',
    'email': 'alice@example.com',
    'age': 25
}
result = collection.insert_one(user)
print(f"Inserted document with ID: {result.inserted_id}")

# Find documents
users = collection.find({'age': {'$gte': 18}})
for user in users:
    print(user['name'])

# Update document
collection.update_one(
    {'name': 'Alice'},
    {'$set': {'age': 26}}
)

# Delete document
collection.delete_one({'name': 'Alice'})`}</code></pre>
          </div>
        </section>

        {/* GUI Libraries */}
        <section className="py-topic-section">
          <h2>🖥️ GUI Libraries</h2>
          
          <h3>🎨 Tkinter - Built-in GUI Framework</h3>
          <div className="code-example">
            <pre><code>{`import tkinter as tk
from tkinter import messagebox

# Create main window
root = tk.Tk()
root.title("My Application")
root.geometry("300x200")

# Create widgets
label = tk.Label(root, text="Hello, Tkinter!")
label.pack(pady=10)

entry = tk.Entry(root)
entry.pack(pady=5)

def button_click():
    text = entry.get()
    messagebox.showinfo("Info", f"You entered: {text}")

button = tk.Button(root, text="Click Me", command=button_click)
button.pack(pady=10)

# Start GUI event loop
root.mainloop()`}</code></pre>
          </div>

          <h3>🎯 PyQt5/PySide2 - Advanced GUI</h3>
          <div className="code-example">
            <pre><code>{`pip install PyQt5

import sys
from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QLabel, QPushButton

class MainWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("PyQt5 Example")
        self.setGeometry(100, 100, 300, 200)
        
        layout = QVBoxLayout()
        
        self.label = QLabel("Hello, PyQt5!")
        layout.addWidget(self.label)
        
        button = QPushButton("Click Me")
        button.clicked.connect(self.button_clicked)
        layout.addWidget(button)
        
        self.setLayout(layout)
    
    def button_clicked(self):
        self.label.setText("Button was clicked!")

if __name__ == '__main__':
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec_())`}</code></pre>
          </div>

          <h3>🌟 Streamlit - Web Apps for Data Science</h3>
          <div className="code-example">
            <pre><code>{`pip install streamlit

import streamlit as st
import pandas as pd
import numpy as np

# Page configuration
st.set_page_config(page_title="My App", page_icon="📊")

# Title and header
st.title("📊 Data Analysis App")
st.header("Welcome to my Streamlit app!")

# Sidebar
st.sidebar.header("Settings")
num_points = st.sidebar.slider("Number of points", 10, 1000, 100)

# Generate data
data = np.random.randn(num_points, 2)
df = pd.DataFrame(data, columns=['x', 'y'])

# Display data
st.subheader("Generated Data")
st.dataframe(df.head())

# Plot data
st.subheader("Scatter Plot")
st.scatter_chart(df)

# Interactive widgets
if st.button("Generate New Data"):
    st.balloons()
    st.success("New data generated!")

# Run with: streamlit run app.py`}</code></pre>
          </div>
        </section>

        {/* Utility Libraries */}
        <section className="py-topic-section">
          <h2>🛠️ Utility Libraries</h2>
          
          <h3>📅 DateTime - Date and Time</h3>
          <div className="code-example">
            <pre><code>{`from datetime import datetime, timedelta, date
import calendar

# Current date and time
now = datetime.now()
print(f"Current time: {now}")

# Create specific date
birthday = datetime(1990, 5, 15, 14, 30)
print(f"Birthday: {birthday}")

# Date arithmetic
tomorrow = now + timedelta(days=1)
last_week = now - timedelta(weeks=1)

# Format dates
formatted = now.strftime("%Y-%m-%d %H:%M:%S")
print(f"Formatted: {formatted}")

# Parse string to date
date_str = "2023-12-25"
christmas = datetime.strptime(date_str, "%Y-%m-%d")

# Working with timezones
from datetime import timezone
utc_now = datetime.now(timezone.utc)
print(f"UTC time: {utc_now}")`}</code></pre>
          </div>

          <h3>🔄 JSON - Data Interchange</h3>
          <div className="code-example">
            <pre><code>{`import json

# Python object to JSON
data = {
    'name': 'Alice',
    'age': 25,
    'hobbies': ['reading', 'coding', 'hiking']
}

# Convert to JSON string
json_string = json.dumps(data, indent=2)
print(json_string)

# Save to file
with open('data.json', 'w') as f:
    json.dump(data, f, indent=2)

# Read from file
with open('data.json', 'r') as f:
    loaded_data = json.load(f)
    print(loaded_data['name'])

# Parse JSON string
json_str = '{"x": 1, "y": 2}'
parsed = json.loads(json_str)
print(parsed['x'])`}</code></pre>
          </div>

          <h3>📁 OS and Pathlib - File System</h3>
          <div className="code-example">
            <pre><code>{`import os
from pathlib import Path

# Current directory
current_dir = os.getcwd()
print(f"Current directory: {current_dir}")

# List files
files = os.listdir('.')
print("Files in current directory:")
for file in files:
    print(f"  {file}")

# Path operations with pathlib (recommended)
path = Path('data/files/document.txt')
print(f"Parent directory: {path.parent}")
print(f"Filename: {path.name}")
print(f"Extension: {path.suffix}")

# Create directories
Path('new_folder').mkdir(exist_ok=True)

# Check if path exists
if path.exists():
    print("File exists")
else:
    print("File does not exist")

# Join paths
full_path = Path.home() / 'Documents' / 'myfile.txt'
print(full_path)`}</code></pre>
          </div>

          <h3>🔍 Regular Expressions (re)</h3>
          <div className="code-example">
            <pre><code>{`import re

# Pattern matching
text = "The quick brown fox jumps over the lazy dog"
pattern = r"\\b\\w{5}\\b"  # Words with exactly 5 letters
matches = re.findall(pattern, text)
print(f"5-letter words: {matches}")

# Email validation
email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
emails = ['valid@example.com', 'invalid.email', 'test@domain.org']

for email in emails:
    if re.match(email_pattern, email):
        print(f"{email} is valid")
    else:
        print(f"{email} is invalid")

# Find and replace
text = "Hello world, hello universe"
new_text = re.sub(r'hello', 'hi', text, flags=re.IGNORECASE)
print(new_text)  # "hi world, hi universe"

# Extract data
log_line = "2023-10-01 14:30:15 ERROR: Database connection failed"
pattern = r'(\\d{4}-\\d{2}-\\d{2}) (\\d{2}:\\d{2}:\\d{2}) (\\w+): (.+)'
match = re.match(pattern, log_line)
if match:
    date, time, level, message = match.groups()
    print(f"Date: {date}, Time: {time}, Level: {level}, Message: {message}")`}</code></pre>
          </div>
        </section>

        {/* Testing Libraries */}
        <section className="py-topic-section">
          <h2>🧪 Testing Libraries</h2>
          
          <h3>✅ pytest - Testing Framework</h3>
          <div className="code-example">
            <pre><code>{`pip install pytest

# test_calculator.py
def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

def test_add_strings():
    assert add("hello", "world") == "helloworld"

# Run tests with: pytest test_calculator.py`}</code></pre>
          </div>

          <h3>🎭 unittest.mock - Mocking</h3>
          <div className="code-example">
            <pre><code>{`from unittest.mock import Mock, patch
import requests

def get_weather(city):
    response = requests.get(f"http://api.weather.com/{city}")
    return response.json()['temperature']

# Test with mocking
@patch('requests.get')
def test_get_weather(mock_get):
    mock_response = Mock()
    mock_response.json.return_value = {'temperature': 25}
    mock_get.return_value = mock_response
    
    temp = get_weather('London')
    assert temp == 25
    mock_get.assert_called_once_with("http://api.weather.com/London")`}</code></pre>
          </div>
        </section>

        {/* Web Scraping Libraries */}
        <section className="py-topic-section">
          <h2>🕷️ Web Scraping Libraries</h2>
          
          <h3>🍲 BeautifulSoup - HTML Parsing</h3>
          <div className="code-example">
            <pre><code>{`pip install beautifulsoup4 requests

import requests
from bs4 import BeautifulSoup

# Fetch web page
url = "https://example.com"
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Find elements
title = soup.find('title').text
print(f"Page title: {title}")

# Find all links
links = soup.find_all('a')
for link in links:
    href = link.get('href')
    text = link.text
    print(f"Link: {text} -> {href}")

# Find by CSS selector
articles = soup.select('div.article')
for article in articles:
    headline = article.find('h2').text
    print(f"Article: {headline}")

# Extract data from table
table = soup.find('table')
rows = table.find_all('tr')
for row in rows[1:]:  # Skip header row
    cells = row.find_all('td')
    data = [cell.text.strip() for cell in cells]
    print(data)`}</code></pre>
          </div>

          <h3>🎭 Selenium - Browser Automation</h3>
          <div className="code-example">
            <pre><code>{`pip install selenium

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Setup Chrome driver
driver = webdriver.Chrome()  # Make sure chromedriver is in PATH

try:
    # Navigate to page
    driver.get("https://example.com")
    
    # Find elements
    search_box = driver.find_element(By.NAME, "search")
    search_box.send_keys("Python")
    
    # Click button
    search_button = driver.find_element(By.ID, "search-button")
    search_button.click()
    
    # Wait for results
    results = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "results"))
    )
    
    # Extract data
    items = driver.find_elements(By.CLASS_NAME, "result-item")
    for item in items:
        title = item.find_element(By.TAG_NAME, "h3").text
        print(f"Result: {title}")
        
finally:
    driver.quit()`}</code></pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>💡 Best Practices for Using Libraries</h2>
          
          <h3>Virtual Environments</h3>
          <div className="code-example">
            <pre><code>{`# Create virtual environment
python -m venv myenv

# Activate (Windows)
myenv\\Scripts\\activate

# Activate (macOS/Linux)
source myenv/bin/activate

# Install libraries
pip install requests pandas numpy

# Create requirements file
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt

# Deactivate
deactivate`}</code></pre>
          </div>

          <h3>Managing Dependencies</h3>
          <div className="code-example">
            <pre><code>{`# requirements.txt
requests>=2.25.1
pandas>=1.3.0
numpy>=1.21.0
matplotlib>=3.4.0

# Or with exact versions for reproducibility
requests==2.28.1
pandas==1.5.2
numpy==1.24.1

# Development dependencies (requirements-dev.txt)
pytest>=6.0.0
black>=21.0.0
flake8>=3.9.0`}</code></pre>
          </div>

          <h3>Import Best Practices</h3>
          <div className="code-example">
            <pre><code>{`# Good practices
import os
import sys
from pathlib import Path
import numpy as np
import pandas as pd

# Avoid these patterns
from numpy import *  # Don't import everything
import numpy  # Use standard abbreviation (np)

# Group imports
# 1. Standard library imports
import os
import json
from datetime import datetime

# 2. Third-party imports
import requests
import pandas as pd
import numpy as np

# 3. Local application imports
from myapp.models import User
from myapp.utils import helper_function`}</code></pre>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🏋️ Practice Exercises</h2>
          
          <div className="exercise-box">
            <h3>Exercise 1: Data Analysis with Pandas</h3>
            <p>Create a data analysis script using pandas and matplotlib:</p>
            <ul>
              <li>Load a CSV dataset (sales data, weather data, etc.)</li>
              <li>Clean and preprocess the data</li>
              <li>Perform statistical analysis</li>
              <li>Create visualizations with matplotlib/seaborn</li>
              <li>Generate a summary report</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>Exercise 2: Web API Client</h3>
            <p>Build a web API client using requests and json:</p>
            <ul>
              <li>Connect to a public API (weather, news, GitHub)</li>
              <li>Handle authentication and rate limiting</li>
              <li>Parse and process JSON responses</li>
              <li>Implement error handling and retries</li>
              <li>Save results to a database using SQLAlchemy</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>Exercise 3: GUI Application</h3>
            <p>Create a desktop application with Tkinter or PyQt:</p>
            <ul>
              <li>Design a user-friendly interface</li>
              <li>Implement file operations (open, save, edit)</li>
              <li>Add data visualization capabilities</li>
              <li>Include error handling and user feedback</li>
              <li>Package the application for distribution</li>
            </ul>
          </div>
        </section>

        {/* Popular Library Ecosystem */}
        <section className="py-topic-section">
          <h2>🌟 Notable Mentions</h2>
          
          <h3>🔐 Security Libraries</h3>
          <ul>
            <li><strong>cryptography:</strong> Modern cryptographic library</li>
            <li><strong>passlib:</strong> Password hashing utilities</li>
            <li><strong>pyjwt:</strong> JSON Web Token implementation</li>
          </ul>

          <h3>📊 Specialized Data Libraries</h3>
          <ul>
            <li><strong>openpyxl:</strong> Excel file handling</li>
            <li><strong>pillow (PIL):</strong> Image processing</li>
            <li><strong>opencv-python:</strong> Computer vision</li>
            <li><strong>spacy:</strong> Natural language processing</li>
          </ul>

          <h3>🚀 Performance Libraries</h3>
          <ul>
            <li><strong>numba:</strong> JIT compiler for numerical functions</li>
            <li><strong>cython:</strong> C extensions for Python</li>
            <li><strong>asyncio:</strong> Asynchronous programming</li>
          </ul>

          <h3>🧪 Development Tools</h3>
          <ul>
            <li><strong>black:</strong> Code formatter</li>
            <li><strong>flake8:</strong> Code linter</li>
            <li><strong>mypy:</strong> Static type checker</li>
            <li><strong>sphinx:</strong> Documentation generator</li>
          </ul>
        </section>

        {/* Resources */}
        <section className="py-topic-section">
          <h2>📚 Additional Resources</h2>
          
          <h3>Package Discovery</h3>
          <ul>
            <li><a href="https://pypi.org/" target="_blank" rel="noopener noreferrer">Python Package Index (PyPI)</a></li>
            <li><a href="https://github.com/vinta/awesome-python" target="_blank" rel="noopener noreferrer">Awesome Python - Curated List</a></li>
            <li><a href="https://python-graph-gallery.com/" target="_blank" rel="noopener noreferrer">Python Graph Gallery</a></li>
          </ul>

          <h3>Documentation</h3>
          <ul>
            <li><a href="https://docs.python.org/3/library/" target="_blank" rel="noopener noreferrer">Python Standard Library</a></li>
            <li><a href="https://pandas.pydata.org/docs/" target="_blank" rel="noopener noreferrer">Pandas Documentation</a></li>
            <li><a href="https://numpy.org/doc/" target="_blank" rel="noopener noreferrer">NumPy Documentation</a></li>
            <li><a href="https://matplotlib.org/stable/" target="_blank" rel="noopener noreferrer">Matplotlib Documentation</a></li>
          </ul>

          <h3>Learning Platforms</h3>
          <ul>
            <li>Kaggle Learn - Free data science courses</li>
            <li>Real Python - In-depth tutorials and articles</li>
            <li>Python.org tutorial and documentation</li>
            <li>YouTube channels focusing on Python libraries</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default PopularLibraries;
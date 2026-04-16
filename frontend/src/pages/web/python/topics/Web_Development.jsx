import React from 'react';
import '../Navbarweb.css';

function WebDevelopment() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>🌐 Web Development</h1>
        <p className="py-topic-subtitle">
          Build web applications with Django, Flask, and FastAPI
        </p>
      </div>
      <div className="py-topic-content">
        
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>📖 Introduction to Python Web Development</h2>
          <p>
            Python is one of the most popular languages for web development, offering powerful frameworks
            and libraries that make building web applications efficient and enjoyable.
          </p>
          
          <h3>Why Python for Web Development?</h3>
          <ul>
            <li><strong>Rapid Development:</strong> Clean syntax and extensive libraries</li>
            <li><strong>Scalability:</strong> Handle everything from small sites to large applications</li>
            <li><strong>Rich Ecosystem:</strong> Thousands of packages and tools available</li>
            <li><strong>Community Support:</strong> Large, active developer community</li>
            <li><strong>Versatility:</strong> Full-stack development capabilities</li>
          </ul>
        </section>

        {/* Flask Framework */}
        <section className="py-topic-section">
          <h2>🔥 Flask - Micro Web Framework</h2>
          <p>
            Flask is a lightweight, flexible micro-framework that's perfect for beginners and small to medium applications.
          </p>

          <h3>Flask Basics</h3>
          <div className="code-example">
            <h4>Installing Flask:</h4>
            <pre><code>{`pip install flask`}</code></pre>
          </div>

          <div className="code-example">
            <h4>Hello World Flask App:</h4>
            <pre><code>{`from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '<h1>Hello, World!</h1>'

@app.route('/user/<name>')
def user_profile(name):
    return f'<h1>Welcome, {name}!</h1>'

if __name__ == '__main__':
    app.run(debug=True)`}</code></pre>
          </div>

          <h3>Flask Features</h3>
          <ul>
            <li><strong>Routing:</strong> URL routing with decorators</li>
            <li><strong>Templates:</strong> Jinja2 templating engine</li>
            <li><strong>Request Handling:</strong> Easy access to request data</li>
            <li><strong>Sessions:</strong> Built-in session management</li>
            <li><strong>Extensions:</strong> Rich ecosystem of extensions</li>
          </ul>

          <div className="code-example">
            <h4>Flask with Templates:</h4>
            <pre><code>{`from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    users = ['Alice', 'Bob', 'Charlie']
    return render_template('index.html', users=users)

# templates/index.html
"""
<!DOCTYPE html>
<html>
<head>
    <title>Users</title>
</head>
<body>
    <h1>User List</h1>
    <ul>
    {% for user in users %}
        <li>{{ user }}</li>
    {% endfor %}
    </ul>
</body>
</html>
"""`}</code></pre>
          </div>
        </section>

        {/* Django Framework */}
        <section className="py-topic-section">
          <h2>🎯 Django - Full-Featured Framework</h2>
          <p>
            Django is a high-level Python web framework that encourages rapid development and clean design.
            It follows the "batteries included" philosophy.
          </p>

          <h3>Django Features</h3>
          <ul>
            <li><strong>ORM:</strong> Built-in Object-Relational Mapping</li>
            <li><strong>Admin Interface:</strong> Automatic admin panel</li>
            <li><strong>Authentication:</strong> User management system</li>
            <li><strong>Security:</strong> Built-in security features</li>
            <li><strong>Scalability:</strong> Designed for high-traffic sites</li>
          </ul>

          <div className="code-example">
            <h4>Installing Django:</h4>
            <pre><code>{`pip install django`}</code></pre>
          </div>

          <div className="code-example">
            <h4>Creating a Django Project:</h4>
            <pre><code>{`# Create project
django-admin startproject mysite

# Create app
cd mysite
python manage.py startapp blog

# Run development server
python manage.py runserver`}</code></pre>
          </div>

          <div className="code-example">
            <h4>Django Models:</h4>
            <pre><code>{`# models.py
from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
        
    class Meta:
        ordering = ['-created_at']`}</code></pre>
          </div>

          <div className="code-example">
            <h4>Django Views:</h4>
            <pre><code>{`# views.py
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Post

def post_list(request):
    posts = Post.objects.all()
    return render(request, 'blog/post_list.html', {'posts': posts})

def post_detail(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    return render(request, 'blog/post_detail.html', {'post': post})

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('post/<int:post_id>/', views.post_detail, name='post_detail'),
]`}</code></pre>
          </div>
        </section>

        {/* FastAPI Framework */}
        <section className="py-topic-section">
          <h2>⚡ FastAPI - Modern API Framework</h2>
          <p>
            FastAPI is a modern, fast web framework for building APIs with Python 3.6+ based on standard Python type hints.
          </p>

          <h3>FastAPI Features</h3>
          <ul>
            <li><strong>Fast:</strong> Very high performance, on par with NodeJS and Go</li>
            <li><strong>Type Hints:</strong> Based on standard Python type hints</li>
            <li><strong>Automatic Documentation:</strong> Interactive API docs</li>
            <li><strong>Data Validation:</strong> Automatic request/response validation</li>
            <li><strong>Modern:</strong> Built for modern Python features</li>
          </ul>

          <div className="code-example">
            <h4>Installing FastAPI:</h4>
            <pre><code>{`pip install fastapi uvicorn`}</code></pre>
          </div>

          <div className="code-example">
            <h4>Basic FastAPI App:</h4>
            <pre><code>{`from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: Optional[bool] = None

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

@app.post("/items/")
def create_item(item: Item):
    return item

# Run with: uvicorn main:app --reload`}</code></pre>
          </div>

          <div className="code-example">
            <h4>FastAPI with Database:</h4>
            <pre><code>{`from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)

Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/")
def create_user(name: str, email: str, db: Session = Depends(get_db)):
    db_user = User(name=name, email=email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user`}</code></pre>
          </div>
        </section>

        {/* Database Integration */}
        <section className="py-topic-section">
          <h2>🗄️ Database Integration</h2>
          
          <h3>SQLAlchemy ORM</h3>
          <div className="code-example">
            <pre><code>{`# Installing SQLAlchemy
pip install sqlalchemy

# Basic SQLAlchemy setup
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    username = Column(String(50), unique=True)
    email = Column(String(120), unique=True)

# Create engine and session
engine = create_engine('sqlite:///example.db')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()`}</code></pre>
          </div>

          <h3>Working with Different Databases</h3>
          <ul>
            <li><strong>SQLite:</strong> <code>sqlite:///path/to/database.db</code></li>
            <li><strong>PostgreSQL:</strong> <code>postgresql://user:password@host:port/dbname</code></li>
            <li><strong>MySQL:</strong> <code>mysql://user:password@host:port/dbname</code></li>
            <li><strong>MongoDB:</strong> Use PyMongo or MongoEngine</li>
          </ul>
        </section>

        {/* Authentication & Security */}
        <section className="py-topic-section">
          <h2>🔐 Authentication & Security</h2>
          
          <h3>JWT Authentication with FastAPI</h3>
          <div className="code-example">
            <pre><code>{`from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from passlib.context import CryptContext
import jwt
from datetime import datetime, timedelta

app = FastAPI()
security = HTTPBearer()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(hours=24)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        payload = jwt.decode(credentials.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        return username
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

@app.post("/login")
def login(username: str, password: str):
    # Verify user credentials here
    if verify_credentials(username, password):
        access_token = create_access_token(data={"sub": username})
        return {"access_token": access_token, "token_type": "bearer"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.get("/protected")
def protected_route(current_user: str = Depends(verify_token)):
    return {"message": f"Hello, {current_user}!"}`}</code></pre>
          </div>

          <h3>Security Best Practices</h3>
          <ul>
            <li><strong>Password Hashing:</strong> Always hash passwords using bcrypt or similar</li>
            <li><strong>HTTPS:</strong> Use SSL/TLS in production</li>
            <li><strong>Input Validation:</strong> Validate and sanitize all inputs</li>
            <li><strong>CSRF Protection:</strong> Implement CSRF tokens</li>
            <li><strong>Rate Limiting:</strong> Prevent abuse with rate limiting</li>
          </ul>
        </section>

        {/* RESTful APIs */}
        <section className="py-topic-section">
          <h2>🌐 Building RESTful APIs</h2>
          
          <h3>REST API Design Principles</h3>
          <ul>
            <li><strong>Stateless:</strong> Each request contains all necessary information</li>
            <li><strong>Resource-based:</strong> URLs represent resources, not actions</li>
            <li><strong>HTTP Methods:</strong> Use appropriate HTTP verbs (GET, POST, PUT, DELETE)</li>
            <li><strong>Status Codes:</strong> Return meaningful HTTP status codes</li>
            <li><strong>JSON:</strong> Use JSON for data exchange</li>
          </ul>

          <div className="code-example">
            <h4>Complete REST API with FastAPI:</h4>
            <pre><code>{`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Book API", version="1.0.0")

class Book(BaseModel):
    id: Optional[int] = None
    title: str
    author: str
    isbn: str
    published_year: int

class BookUpdate(BaseModel):
    title: Optional[str] = None
    author: Optional[str] = None
    isbn: Optional[str] = None
    published_year: Optional[int] = None

# In-memory database
books_db = []
next_id = 1

@app.get("/books", response_model=List[Book])
def get_books():
    return books_db

@app.get("/books/{book_id}", response_model=Book)
def get_book(book_id: int):
    book = next((b for b in books_db if b.id == book_id), None)
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    return book

@app.post("/books", response_model=Book, status_code=201)
def create_book(book: Book):
    global next_id
    book.id = next_id
    next_id += 1
    books_db.append(book)
    return book

@app.put("/books/{book_id}", response_model=Book)
def update_book(book_id: int, book_update: BookUpdate):
    book = next((b for b in books_db if b.id == book_id), None)
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    
    update_data = book_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(book, field, value)
    
    return book

@app.delete("/books/{book_id}")
def delete_book(book_id: int):
    global books_db
    books_db = [b for b in books_db if b.id != book_id]
    return {"message": "Book deleted successfully"}`}</code></pre>
          </div>
        </section>

        {/* Deployment */}
        <section className="py-topic-section">
          <h2>🚀 Deployment</h2>
          
          <h3>Deployment Options</h3>
          <ul>
            <li><strong>Heroku:</strong> Easy deployment with git integration</li>
            <li><strong>AWS:</strong> EC2, Elastic Beanstalk, Lambda</li>
            <li><strong>Google Cloud:</strong> App Engine, Cloud Run</li>
            <li><strong>DigitalOcean:</strong> Droplets and App Platform</li>
            <li><strong>Docker:</strong> Containerized deployment</li>
          </ul>

          <div className="code-example">
            <h4>Dockerfile for Python Web App:</h4>
            <pre><code>{`FROM python:3.9

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`}</code></pre>
          </div>

          <div className="code-example">
            <h4>requirements.txt:</h4>
            <pre><code>{`fastapi==0.68.0
uvicorn==0.15.0
sqlalchemy==1.4.22
pydantic==1.8.2
python-jose==3.3.0
passlib==1.7.4
bcrypt==3.2.0`}</code></pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>💡 Best Practices</h2>
          
          <h3>Code Organization</h3>
          <ul>
            <li><strong>Project Structure:</strong> Organize code into logical modules</li>
            <li><strong>Configuration:</strong> Use environment variables for settings</li>
            <li><strong>Error Handling:</strong> Implement proper exception handling</li>
            <li><strong>Logging:</strong> Add comprehensive logging</li>
            <li><strong>Testing:</strong> Write unit and integration tests</li>
          </ul>

          <div className="code-example">
            <h4>Project Structure:</h4>
            <pre><code>{`myproject/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── models/
│   │   ├── __init__.py
│   │   └── user.py
│   ├── routers/
│   │   ├── __init__.py
│   │   └── users.py
│   ├── core/
│   │   ├── __init__.py
│   │   ├── config.py
│   │   └── security.py
│   └── tests/
│       ├── __init__.py
│       └── test_users.py
├── requirements.txt
├── Dockerfile
└── README.md`}</code></pre>
          </div>

          <h3>Performance Tips</h3>
          <ul>
            <li><strong>Database Optimization:</strong> Use proper indexing and query optimization</li>
            <li><strong>Caching:</strong> Implement Redis or Memcached for caching</li>
            <li><strong>Async/Await:</strong> Use asynchronous programming for I/O operations</li>
            <li><strong>Connection Pooling:</strong> Use database connection pooling</li>
            <li><strong>Load Balancing:</strong> Use reverse proxies like Nginx</li>
          </ul>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🏋️ Practice Exercises</h2>
          
          <div className="exercise-box">
            <h3>Exercise 1: Flask Blog</h3>
            <p>Create a simple blog application using Flask with the following features:</p>
            <ul>
              <li>User registration and login</li>
              <li>Create, read, update, delete posts</li>
              <li>Comment system</li>
              <li>SQLite database integration</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>Exercise 2: FastAPI Task Manager</h3>
            <p>Build a task management API using FastAPI:</p>
            <ul>
              <li>CRUD operations for tasks</li>
              <li>User authentication with JWT</li>
              <li>Task categories and priorities</li>
              <li>Automatic API documentation</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>Exercise 3: Django E-commerce</h3>
            <p>Create an e-commerce site using Django:</p>
            <ul>
              <li>Product catalog with categories</li>
              <li>Shopping cart functionality</li>
              <li>User profiles and order history</li>
              <li>Admin interface for managing products</li>
            </ul>
          </div>
        </section>

        {/* Resources */}
        <section className="py-topic-section">
          <h2>📚 Additional Resources</h2>
          
          <h3>Official Documentation</h3>
          <ul>
            <li><a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer">Flask Documentation</a></li>
            <li><a href="https://docs.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django Documentation</a></li>
            <li><a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer">FastAPI Documentation</a></li>
            <li><a href="https://docs.sqlalchemy.org/" target="_blank" rel="noopener noreferrer">SQLAlchemy Documentation</a></li>
          </ul>

          <h3>Learning Resources</h3>
          <ul>
            <li>Python Web Development courses on platforms like Coursera, Udemy</li>
            <li>Real Python tutorials and articles</li>
            <li>Mozilla Developer Network (MDN) web development guides</li>
            <li>YouTube channels: Corey Schafer, Tech With Tim</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default WebDevelopment;
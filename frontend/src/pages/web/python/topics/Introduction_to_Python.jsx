import React from 'react';
import '../Navbarweb.css';

function IntroductionToPython() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>📚 Introduction to Python</h1>
        <p className="py-topic-subtitle">
          Welcome to Python - the language that makes programming fun and accessible!
        </p>
      </div>

      <div className="py-topic-content">
        {/* What is Python Section */}
        <section className="py-topic-section">
          <h2>🐍 What is Python?</h2>
          <p>
            Python is a high-level, interpreted programming language known for its simplicity and readability. 
            Created by Guido van Rossum and first released in 1991, Python emphasizes code readability and 
            allows developers to express concepts in fewer lines of code than languages like C++ or Java.
          </p>
          
          <div className="py-highlight-box">
            <h3>Key Characteristics:</h3>
            <ul>
              <li><strong>Easy to Learn:</strong> Simple, readable syntax that resembles natural language</li>
              <li><strong>Interpreted:</strong> No compilation step required - run code directly</li>
              <li><strong>Cross-platform:</strong> Runs on Windows, macOS, Linux, and more</li>
              <li><strong>Object-oriented:</strong> Supports object-oriented programming principles</li>
              <li><strong>Versatile:</strong> Used for web development, data science, AI, automation, and more</li>
              <li><strong>Large Standard Library:</strong> "Batteries included" philosophy</li>
            </ul>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-topic-section">
          <h2>📅 Python History Timeline</h2>
          <div className="py-timeline">
            <div className="py-timeline-item">
              <div className="py-timeline-year">1989</div>
              <div className="py-timeline-content">
                <h4>Python's Conception</h4>
                <p>Guido van Rossum started working on Python as a successor to ABC language</p>
              </div>
            </div>
            <div className="py-timeline-item">
              <div className="py-timeline-year">1991</div>
              <div className="py-timeline-content">
                <h4>Python 0.9.0 Released</h4>
                <p>First version released to alt.sources newsgroup</p>
              </div>
            </div>
            <div className="py-timeline-item">
              <div className="py-timeline-year">1994</div>
              <div className="py-timeline-content">
                <h4>Python 1.0</h4>
                <p>First major release with lambda, map, filter, and reduce</p>
              </div>
            </div>
            <div className="py-timeline-item">
              <div className="py-timeline-year">2000</div>
              <div className="py-timeline-content">
                <h4>Python 2.0</h4>
                <p>Introduced list comprehensions and garbage collection</p>
              </div>
            </div>
            <div className="py-timeline-item">
              <div className="py-timeline-year">2008</div>
              <div className="py-timeline-content">
                <h4>Python 3.0</h4>
                <p>Major revision that broke backward compatibility to fix design flaws</p>
              </div>
            </div>
            <div className="py-timeline-item">
              <div className="py-timeline-year">2020</div>
              <div className="py-timeline-content">
                <h4>Python 2 End of Life</h4>
                <p>Official end of support for Python 2.x</p>
              </div>
            </div>
          </div>
        </section>

        {/* Python Philosophy */}
        <section className="py-topic-section">
          <h2>🎯 The Zen of Python</h2>
          <p>
            Python's design philosophy is captured in "The Zen of Python" by Tim Peters. 
            These principles guide Python development and explain why Python code is so readable and elegant.
          </p>
          
          <div className="py-code-block">
            <pre>{`import this

# The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!`}</pre>
          </div>
        </section>

        {/* Python Applications */}
        <section className="py-topic-section">
          <h2>🚀 What Can You Do with Python?</h2>
          <div className="py-feature-grid">
            <div className="py-feature-card">
              <h3>🌐 Web Development</h3>
              <p>Django, Flask, FastAPI for building web applications and APIs</p>
            </div>
            <div className="py-feature-card">
              <h3>📊 Data Science</h3>
              <p>NumPy, Pandas, Matplotlib for data analysis and visualization</p>
            </div>
            <div className="py-feature-card">
              <h3>🤖 Machine Learning</h3>
              <p>TensorFlow, PyTorch, Scikit-learn for AI and ML projects</p>
            </div>
            <div className="py-feature-card">
              <h3>🔧 Automation</h3>
              <p>Scripting, web scraping, task automation, and DevOps tools</p>
            </div>
            <div className="py-feature-card">
              <h3>🎮 Game Development</h3>
              <p>Pygame for 2D games and prototyping</p>
            </div>
            <div className="py-feature-card">
              <h3>💻 Desktop Applications</h3>
              <p>Tkinter, PyQt, Kivy for cross-platform desktop apps</p>
            </div>
          </div>
        </section>

        {/* Installation and Setup */}
        <section className="py-topic-section">
          <h2>⚙️ Getting Started</h2>
          <p>
            To start programming in Python, you need to install Python on your system. 
            Visit <strong>python.org</strong> to download the latest version of Python.
          </p>
          
          <div className="py-info-box">
            <h3>💡 Recommended Tools:</h3>
            <ul>
              <li><strong>Python 3.8+:</strong> Latest stable version</li>
              <li><strong>VS Code:</strong> Popular code editor with great Python support</li>
              <li><strong>PyCharm:</strong> Full-featured Python IDE</li>
              <li><strong>Jupyter Notebook:</strong> Interactive development environment</li>
            </ul>
          </div>

          <h3>Your First Python Program</h3>
          <p>Let's start with the traditional "Hello, World!" program:</p>
          
          <div className="py-code-block">
            <pre>{`# This is a comment
print("Hello, World!")
print("Welcome to Python programming!")

# You can also use variables
message = "Python is awesome!"
print(message)`}</pre>
          </div>
        </section>

        {/* Why Learn Python */}
        <section className="py-topic-section">
          <h2>💪 Why Learn Python?</h2>
          <div className="py-highlight-box">
            <h3>Advantages of Python:</h3>
            <ul>
              <li><strong>Beginner-friendly:</strong> Easy syntax makes it perfect for new programmers</li>
              <li><strong>High demand:</strong> One of the most popular programming languages</li>
              <li><strong>Versatile:</strong> Can be used for almost any type of programming task</li>
              <li><strong>Large community:</strong> Extensive documentation and community support</li>
              <li><strong>Rich ecosystem:</strong> Thousands of third-party libraries available</li>
              <li><strong>Career opportunities:</strong> High-paying jobs in many industries</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default IntroductionToPython;
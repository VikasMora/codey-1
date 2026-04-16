import React from 'react';
import '../Navbarweb.css';

function FrameworksOverview() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>🚀 JavaScript Frameworks & Libraries Overview</h1>
        <p className="js-topic-subtitle">
          Explore popular JavaScript frameworks and libraries that power modern web development
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction */}
        <section className="js-topic-section">
          <h2>🌟 Why Use Frameworks?</h2>
          <p>
            JavaScript frameworks and libraries provide pre-written code, patterns, and tools that help developers 
            build complex applications more efficiently. They offer structure, reusable components, and solve 
            common development challenges.
          </p>
          
          <div className="js-framework-benefits">
            <div className="js-benefit-card">
              <h3>⚡ Faster Development</h3>
              <p>Pre-built components and utilities accelerate development time</p>
            </div>
            <div className="js-benefit-card">
              <h3>🏗️ Better Structure</h3>
              <p>Established patterns and conventions for organized code</p>
            </div>
            <div className="js-benefit-card">
              <h3>🔧 Reusable Components</h3>
              <p>Modular architecture promotes code reusability</p>
            </div>
            <div className="js-benefit-card">
              <h3>🛡️ Tested Solutions</h3>
              <p>Battle-tested code with extensive community support</p>
            </div>
          </div>
        </section>

        {/* React */}
        <section className="js-topic-section">
          <h2>⚛️ React</h2>
          <p>
            <strong>React</strong> is a library for building user interfaces, developed by Facebook. 
            It uses a component-based architecture and virtual DOM for efficient updates.
          </p>
          
          <div className="js-framework-details">
            <div className="js-framework-card">
              <h3>Key Features</h3>
              <ul>
                <li><strong>Virtual DOM:</strong> Efficient UI updates through virtual representation</li>
                <li><strong>Component-Based:</strong> Encapsulated components that manage their own state</li>
                <li><strong>JSX:</strong> JavaScript syntax extension for writing HTML-like code</li>
                <li><strong>One-Way Data Binding:</strong> Predictable data flow</li>
                <li><strong>Hooks:</strong> Function components with state and lifecycle methods</li>
              </ul>
            </div>

            <div className="js-framework-card">
              <h3>Example Code</h3>
              <div className="js-code-example">
                <pre><code>
{`// React Component Example
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data when component mounts
    fetchUser(userId)
      .then(userData => {
        setUser(userData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="user-profile">
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>Joined: {new Date(user.joinDate).toLocaleDateString()}</p>
    </div>
  );
}

// Usage
function App() {
  return (
    <div>
      <UserProfile userId={123} />
    </div>
  );
}

export default App;`}
                </code></pre>
              </div>
            </div>

            <div className="js-framework-card">
              <h3>Pros & Cons</h3>
              <div className="js-pros-cons">
                <div className="js-pros">
                  <h4>✅ Pros</h4>
                  <ul>
                    <li>Large ecosystem and community</li>
                    <li>Excellent performance with Virtual DOM</li>
                    <li>Flexible and unopinionated</li>
                    <li>Great developer tools</li>
                    <li>Strong job market demand</li>
                  </ul>
                </div>
                <div className="js-cons">
                  <h4>❌ Cons</h4>
                  <ul>
                    <li>Steep learning curve for beginners</li>
                    <li>Requires additional libraries for full framework features</li>
                    <li>Fast-paced updates can be overwhelming</li>
                    <li>JSX syntax can be confusing initially</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vue.js */}
        <section className="js-topic-section">
          <h2>💚 Vue.js</h2>
          <p>
            <strong>Vue.js</strong> is a progressive framework for building user interfaces. 
            It's designed to be incrementally adoptable and focuses on the view layer.
          </p>
          
          <div className="js-framework-details">
            <div className="js-framework-card">
              <h3>Key Features</h3>
              <ul>
                <li><strong>Progressive Framework:</strong> Can be adopted incrementally</li>
                <li><strong>Template Syntax:</strong> HTML-based template syntax</li>
                <li><strong>Reactive Data Binding:</strong> Automatic UI updates when data changes</li>
                <li><strong>Component System:</strong> Reusable and composable components</li>
                <li><strong>Vue CLI:</strong> Powerful development tooling</li>
              </ul>
            </div>

            <div className="js-framework-card">
              <h3>Example Code</h3>
              <div className="js-code-example">
                <pre><code>
{`<!-- Vue Component Template -->
<template>
  <div class="todo-app">
    <h1>{{ title }}</h1>
    <form @submit.prevent="addTodo">
      <input 
        v-model="newTodo" 
        placeholder="Enter a new todo" 
        required 
      />
      <button type="submit">Add Todo</button>
    </form>
    
    <ul class="todo-list">
      <li 
        v-for="todo in todos" 
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        <input 
          type="checkbox" 
          v-model="todo.completed"
        />
        <span>{{ todo.text }}</span>
        <button @click="removeTodo(todo.id)">Delete</button>
      </li>
    </ul>
    
    <p>Total: {{ totalTodos }} | Completed: {{ completedTodos }}</p>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      title: 'My Todo List',
      newTodo: '',
      todos: [
        { id: 1, text: 'Learn Vue.js', completed: false },
        { id: 2, text: 'Build an app', completed: true }
      ]
    };
  },
  computed: {
    totalTodos() {
      return this.todos.length;
    },
    completedTodos() {
      return this.todos.filter(todo => todo.completed).length;
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          id: Date.now(),
          text: this.newTodo.trim(),
          completed: false
        });
        this.newTodo = '';
      }
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>`}
                </code></pre>
              </div>
            </div>

            <div className="js-framework-card">
              <h3>Pros & Cons</h3>
              <div className="js-pros-cons">
                <div className="js-pros">
                  <h4>✅ Pros</h4>
                  <ul>
                    <li>Gentle learning curve</li>
                    <li>Excellent documentation</li>
                    <li>Progressive adoption</li>
                    <li>Great performance</li>
                    <li>Small bundle size</li>
                  </ul>
                </div>
                <div className="js-cons">
                  <h4>❌ Cons</h4>
                  <ul>
                    <li>Smaller community compared to React</li>
                    <li>Less job market demand</li>
                    <li>Fewer third-party libraries</li>
                    <li>Language barrier (Chinese origins)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Angular */}
        <section className="js-topic-section">
          <h2>🅰️ Angular</h2>
          <p>
            <strong>Angular</strong> is a full-featured framework for building dynamic web applications, 
            developed by Google. It uses TypeScript by default and provides a complete development platform.
          </p>
          
          <div className="js-framework-details">
            <div className="js-framework-card">
              <h3>Key Features</h3>
              <ul>
                <li><strong>TypeScript:</strong> Built with and for TypeScript</li>
                <li><strong>Dependency Injection:</strong> Built-in DI system</li>
                <li><strong>Two-Way Data Binding:</strong> Automatic synchronization</li>
                <li><strong>CLI:</strong> Powerful command-line interface</li>
                <li><strong>Full Framework:</strong> Everything included out of the box</li>
              </ul>
            </div>

            <div className="js-framework-card">
              <h3>Example Code</h3>
              <div className="js-code-example">
                <pre><code>
{`// Angular Component (TypeScript)
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-user-list',
  template: \`
    <div class="user-list">
      <h2>Users</h2>
      <div *ngIf="loading">Loading users...</div>
      <div *ngIf="error" class="error">{{ error }}</div>
      
      <div class="user-grid" *ngIf="!loading && !error">
        <div 
          class="user-card" 
          *ngFor="let user of users; trackBy: trackByUserId"
        >
          <h3>{{ user.name }}</h3>
          <p>{{ user.email }}</p>
          <p>{{ user.phone }}</p>
          <button (click)="selectUser(user)">View Details</button>
        </div>
      </div>
      
      <div *ngIf="selectedUser" class="user-details">
        <h3>Selected: {{ selectedUser.name }}</h3>
        <button (click)="clearSelection()">Clear</button>
      </div>
    </div>
  \`,
  styles: [\`
    .user-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }
    .user-card {
      border: 1px solid #ddd;
      padding: 1rem;
      border-radius: 4px;
    }
    .error {
      color: red;
      font-weight: bold;
    }
  \`]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.error = null;
    
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (users) => {
          this.users = users;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load users';
          this.loading = false;
          console.error('Error loading users:', err);
        }
      });
  }

  selectUser(user: User): void {
    this.selectedUser = user;
  }

  clearSelection(): void {
    this.selectedUser = null;
  }

  trackByUserId(index: number, user: User): number {
    return user.id;
  }
}`}
                </code></pre>
              </div>
            </div>

            <div className="js-framework-card">
              <h3>Pros & Cons</h3>
              <div className="js-pros-cons">
                <div className="js-pros">
                  <h4>✅ Pros</h4>
                  <ul>
                    <li>Complete framework with everything included</li>
                    <li>Strong typing with TypeScript</li>
                    <li>Excellent tooling and CLI</li>
                    <li>Great for large applications</li>
                    <li>Strong corporate backing (Google)</li>
                  </ul>
                </div>
                <div className="js-cons">
                  <h4>❌ Cons</h4>
                  <ul>
                    <li>Steep learning curve</li>
                    <li>Large bundle size</li>
                    <li>Verbose syntax</li>
                    <li>Frequent major updates</li>
                    <li>Overkill for simple projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Popular Libraries */}
        <section className="js-topic-section">
          <h2>📚 Other Popular Libraries & Frameworks</h2>
          
          <div className="js-other-frameworks">
            <div className="js-framework-card">
              <h3>⚡ Svelte</h3>
              <p>
                <strong>Svelte</strong> is a compile-time framework that generates vanilla JavaScript. 
                No virtual DOM, smaller bundles, and excellent performance.
              </p>
              <div className="js-code-example">
                <pre><code>
{`<!-- Svelte Component -->
<script>
  let count = 0;
  let name = 'Svelte';

  function increment() {
    count += 1;
  }

  $: doubled = count * 2;
  $: greeting = \`Hello \${name}!\`;
</script>

<main>
  <h1>{greeting}</h1>
  
  <button on:click={increment}>
    Count: {count}
  </button>
  
  <p>Doubled: {doubled}</p>
  
  <input bind:value={name} placeholder="Enter name">
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  
  button {
    background: #ff3e00;
    color: white;
    border: none;
    padding: 0.5em 1em;
    border-radius: 4px;
    cursor: pointer;
  }
</style>`}
                </code></pre>
              </div>
              <p><strong>Best for:</strong> Performance-critical apps, small to medium projects</p>
            </div>

            <div className="js-framework-card">
              <h3>🎯 Alpine.js</h3>
              <p>
                <strong>Alpine.js</strong> is a lightweight framework for adding behavior to HTML. 
                Great for enhancing existing websites without a build step.
              </p>
              <div className="js-code-example">
                <pre><code>
{`<!-- Alpine.js Example -->
<div x-data="{ 
  open: false, 
  items: ['Apple', 'Banana', 'Cherry'],
  newItem: '' 
}">
  <button @click="open = !open" x-text="open ? 'Hide' : 'Show'">
    Show
  </button>
  
  <div x-show="open" x-transition>
    <h3>Fruit List</h3>
    
    <ul>
      <template x-for="item in items" :key="item">
        <li x-text="item"></li>
      </template>
    </ul>
    
    <form @submit.prevent="items.push(newItem); newItem = ''">
      <input x-model="newItem" placeholder="Add fruit" required>
      <button type="submit">Add</button>
    </form>
    
    <p>Total items: <span x-text="items.length"></span></p>
  </div>
</div>`}
                </code></pre>
              </div>
              <p><strong>Best for:</strong> Adding interactivity to existing sites, prototyping</p>
            </div>

            <div className="js-framework-card">
              <h3>🎨 Lit</h3>
              <p>
                <strong>Lit</strong> is a simple library for building web components using modern standards. 
                Fast, lightweight, and works everywhere.
              </p>
              <div className="js-code-example">
                <pre><code>
{`// Lit Web Component
import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';

export class CounterElement extends LitElement {
  static styles = css\`
    :host {
      display: block;
      padding: 16px;
      text-align: center;
    }
    button {
      background: #1976d2;
      color: white;
      border: none;
      padding: 8px 16px;
      margin: 0 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  \`;

  @property({ type: Number })
  count = 0;

  @state()
  private _step = 1;

  render() {
    return html\`
      <h2>Counter: \${this.count}</h2>
      <button @click=\${this._decrement}>-\${this._step}</button>
      <button @click=\${this._increment}>+\${this._step}</button>
      
      <div>
        <label>Step: 
          <input 
            type="number" 
            .value=\${this._step.toString()}
            @input=\${this._onStepChange}
          >
        </label>
      </div>
    \`;
  }

  private _increment() {
    this.count += this._step;
  }

  private _decrement() {
    this.count -= this._step;
  }

  private _onStepChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this._step = parseInt(input.value) || 1;
  }
}

customElements.define('counter-element', CounterElement);`}
                </code></pre>
              </div>
              <p><strong>Best for:</strong> Web components, design systems, micro-frontends</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="js-topic-section">
          <h2>📊 Framework Comparison</h2>
          
          <div className="js-comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Framework</th>
                  <th>Learning Curve</th>
                  <th>Performance</th>
                  <th>Bundle Size</th>
                  <th>Community</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>React</strong></td>
                  <td>Medium</td>
                  <td>High</td>
                  <td>Medium</td>
                  <td>Very Large</td>
                  <td>Complex SPAs, Mobile apps</td>
                </tr>
                <tr>
                  <td><strong>Vue.js</strong></td>
                  <td>Easy</td>
                  <td>High</td>
                  <td>Small</td>
                  <td>Large</td>
                  <td>Progressive enhancement, SPAs</td>
                </tr>
                <tr>
                  <td><strong>Angular</strong></td>
                  <td>Hard</td>
                  <td>High</td>
                  <td>Large</td>
                  <td>Large</td>
                  <td>Enterprise applications</td>
                </tr>
                <tr>
                  <td><strong>Svelte</strong></td>
                  <td>Medium</td>
                  <td>Very High</td>
                  <td>Very Small</td>
                  <td>Growing</td>
                  <td>Performance-critical apps</td>
                </tr>
                <tr>
                  <td><strong>Alpine.js</strong></td>
                  <td>Very Easy</td>
                  <td>Medium</td>
                  <td>Very Small</td>
                  <td>Small</td>
                  <td>Adding interactivity to existing sites</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Selection Guidelines */}
        <section className="js-topic-section">
          <h2>🎯 How to Choose a Framework</h2>
          
          <div className="js-selection-guide">
            <div className="js-guide-card">
              <h3>🚀 For Beginners</h3>
              <ul>
                <li><strong>Start with Vue.js</strong> - gentle learning curve</li>
                <li><strong>Try Alpine.js</strong> - minimal setup required</li>
                <li>Focus on understanding core JavaScript first</li>
                <li>Build simple projects to learn concepts</li>
              </ul>
            </div>

            <div className="js-guide-card">
              <h3>💼 For Job Market</h3>
              <ul>
                <li><strong>React</strong> - highest demand globally</li>
                <li><strong>Angular</strong> - popular in enterprise</li>
                <li><strong>Vue.js</strong> - growing opportunities</li>
                <li>Check local job market trends</li>
              </ul>
            </div>

            <div className="js-guide-card">
              <h3>🏢 For Enterprise</h3>
              <ul>
                <li><strong>Angular</strong> - comprehensive tooling</li>
                <li><strong>React</strong> - mature ecosystem</li>
                <li>Consider team expertise and existing tech stack</li>
                <li>Evaluate long-term support and updates</li>
              </ul>
            </div>

            <div className="js-guide-card">
              <h3>⚡ For Performance</h3>
              <ul>
                <li><strong>Svelte</strong> - compile-time optimization</li>
                <li><strong>Lit</strong> - lightweight web components</li>
                <li><strong>Alpine.js</strong> - minimal overhead</li>
                <li>Consider bundle size and runtime performance</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FrameworksOverview;
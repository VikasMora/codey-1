import React from 'react';
import '../Navbarweb.css';

function LintingCodeStyle() {
  return (
    <div className="js-topic-container">
      <div className="js-topic-header">
        <h1>✅ Linting and Code Style</h1>
        <p className="js-topic-subtitle">
          Improve code quality with automated linting, formatting, and style enforcement tools
        </p>
      </div>

      <div className="js-topic-content">
        {/* Introduction to Linting */}
        <section className="js-topic-section">
          <h2>🎯 What is Linting?</h2>
          <p>
            Linting is the process of running a program that analyzes code for potential errors, 
            style violations, and suspicious constructs. Linters help maintain code quality, 
            consistency, and can catch bugs before they make it to production.
          </p>
          
          <div className="js-linting-benefits">
            <div className="js-benefit-card">
              <h3>🐛 Error Prevention</h3>
              <ul>
                <li>Catch syntax errors before runtime</li>
                <li>Identify potential logic errors</li>
                <li>Detect unused variables and imports</li>
                <li>Find unreachable code</li>
              </ul>
            </div>

            <div className="js-benefit-card">
              <h3>📐 Code Consistency</h3>
              <ul>
                <li>Enforce consistent formatting</li>
                <li>Standardize naming conventions</li>
                <li>Maintain uniform code style</li>
                <li>Ensure team coding standards</li>
              </ul>
            </div>

            <div className="js-benefit-card">
              <h3>🚀 Developer Experience</h3>
              <ul>
                <li>Real-time feedback in editors</li>
                <li>Automated code formatting</li>
                <li>Reduced code review discussions</li>
                <li>Faster development cycles</li>
              </ul>
            </div>

            <div className="js-benefit-card">
              <h3>🏢 Team Benefits</h3>
              <ul>
                <li>Onboard new developers faster</li>
                <li>Reduce debugging time</li>
                <li>Improve code maintainability</li>
                <li>Standardize across projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ESLint */}
        <section className="js-topic-section">
          <h2>🔍 ESLint - JavaScript Linting</h2>
          <p>
            <strong>ESLint</strong> is the most popular JavaScript linter. It's highly configurable 
            and can be customized to enforce your team's coding standards and catch common mistakes.
          </p>
          
          <div className="js-eslint-guide">
            <div className="js-eslint-card">
              <h3>🚀 Getting Started with ESLint</h3>
              <div className="js-code-example">
                <pre><code>
{`# Install ESLint globally
npm install -g eslint

# Or install locally in your project
npm install --save-dev eslint

# Initialize ESLint configuration
npx eslint --init

# Run ESLint on your files
npx eslint yourfile.js

# Run ESLint on all JavaScript files
npx eslint src/

# Fix automatically fixable issues
npx eslint src/ --fix

# Check specific file extensions
npx eslint src/ --ext .js,.jsx,.ts,.tsx`}
                </code></pre>
              </div>
            </div>

            <div className="js-eslint-card">
              <h3>⚙️ ESLint Configuration (.eslintrc.json)</h3>
              <div className="js-code-example">
                <pre><code>
{`{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  "rules": {
    // Error prevention
    "no-unused-vars": "error",
    "no-undef": "error",
    "no-console": "warn",
    "no-debugger": "error",
    
    // Best practices
    "eqeqeq": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-new-wrappers": "error",
    
    // Style rules
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "comma-dangle": ["error", "never"],
    
    // React specific
    "react/prop-types": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "ignorePatterns": [
    "node_modules/",
    "dist/",
    "build/",
    "*.min.js"
  ]
}`}
                </code></pre>
              </div>
            </div>

            <div className="js-eslint-card">
              <h3>📋 Common ESLint Rules</h3>
              <div className="js-rules-grid">
                <div className="js-rule-category">
                  <h4>🚨 Error Prevention</h4>
                  <ul>
                    <li><code>no-unused-vars</code> - Unused variables</li>
                    <li><code>no-undef</code> - Undefined variables</li>
                    <li><code>no-unreachable</code> - Unreachable code</li>
                    <li><code>no-duplicate-keys</code> - Duplicate object keys</li>
                    <li><code>no-dupe-args</code> - Duplicate function parameters</li>
                  </ul>
                </div>
                
                <div className="js-rule-category">
                  <h4>✨ Best Practices</h4>
                  <ul>
                    <li><code>eqeqeq</code> - Require === and !==</li>
                    <li><code>no-eval</code> - Disallow eval()</li>
                    <li><code>no-var</code> - Require let/const</li>
                    <li><code>prefer-const</code> - Use const when possible</li>
                    <li><code>no-implicit-globals</code> - No implicit globals</li>
                  </ul>
                </div>
                
                <div className="js-rule-category">
                  <h4>🎨 Style Rules</h4>
                  <ul>
                    <li><code>indent</code> - Consistent indentation</li>
                    <li><code>quotes</code> - Quote style</li>
                    <li><code>semi</code> - Semicolon usage</li>
                    <li><code>comma-dangle</code> - Trailing commas</li>
                    <li><code>brace-style</code> - Brace placement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prettier */}
        <section className="js-topic-section">
          <h2>💅 Prettier - Code Formatting</h2>
          <p>
            <strong>Prettier</strong> is an opinionated code formatter that enforces consistent 
            style by parsing and reprinting code. It integrates seamlessly with ESLint and most editors.
          </p>
          
          <div className="js-prettier-guide">
            <div className="js-prettier-card">
              <h3>🛠️ Prettier Setup</h3>
              <div className="js-code-example">
                <pre><code>
{`# Install Prettier
npm install --save-dev prettier

# Install ESLint-Prettier integration
npm install --save-dev eslint-config-prettier eslint-plugin-prettier

# Format all files
npx prettier --write .

# Check if files are formatted
npx prettier --check .

# Format specific file types
npx prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,md}"`}
                </code></pre>
              </div>
            </div>

            <div className="js-prettier-card">
              <h3>📝 Prettier Configuration (.prettierrc)</h3>
              <div className="js-code-example">
                <pre><code>
{`{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "quoteProps": "as-needed",
  "jsxSingleQuote": true,
  "proseWrap": "preserve"
}`}
                </code></pre>
              </div>
            </div>

            <div className="js-prettier-card">
              <h3>🚫 Prettier Ignore (.prettierignore)</h3>
              <div className="js-code-example">
                <pre><code>
{`# Dependencies
node_modules/

# Build outputs
build/
dist/
*.min.js
*.min.css

# Generated files
coverage/
.nyc_output/

# Logs
*.log

# Package files
package-lock.json
yarn.lock

# Environment files
.env
.env.local

# Editor files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Editor Integration */}
        <section className="js-topic-section">
          <h2>🖥️ Editor Integration</h2>
          
          <div className="js-editor-integration">
            <div className="js-editor-card">
              <h3>💼 VS Code Setup</h3>
              <div className="js-setup-content">
                <h4>Required Extensions</h4>
                <ul>
                  <li><strong>ESLint:</strong> Real-time linting in editor</li>
                  <li><strong>Prettier:</strong> Code formatting on save</li>
                  <li><strong>Error Lens:</strong> Inline error highlighting</li>
                </ul>
                
                <h4>VS Code Settings (settings.json)</h4>
                <div className="js-code-example">
                  <pre><code>
{`{
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "prettier.requireConfig": true,
  "emmet.includeLanguages": {
    "javascriptreact": "html"
  }
}`}
                  </code></pre>
                </div>
              </div>
            </div>

            <div className="js-editor-card">
              <h3>⚡ Automatic Formatting Workflow</h3>
              <div className="js-workflow-steps">
                <ol>
                  <li><strong>Write Code:</strong> Focus on logic, not formatting</li>
                  <li><strong>Save File:</strong> Prettier automatically formats</li>
                  <li><strong>ESLint Fixes:</strong> Auto-fixable issues resolved</li>
                  <li><strong>Review Warnings:</strong> Address remaining ESLint warnings</li>
                  <li><strong>Commit:</strong> Consistent, clean code ready for version control</li>
                </ol>
                
                <div className="js-code-example">
                  <pre><code>
{`// Before formatting (messy)
function   calculateTotal(items,taxRate){
let total=0
for(let i=0;i<items.length;i++){
total+=items[i].price*items[i].quantity
}
return total*(1+taxRate)
}

// After Prettier + ESLint (clean)
function calculateTotal(items, taxRate) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total * (1 + taxRate);
}

// Even better with ESLint suggestions
function calculateTotal(items, taxRate = 0.1) {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0) * (1 + taxRate);
}`}
                  </code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Configuration */}
        <section className="js-topic-section">
          <h2>🔧 Advanced Configuration</h2>
          
          <div className="js-advanced-config">
            <div className="js-config-card">
              <h3>🎯 Project-Specific Rules</h3>
              <div className="js-code-example">
                <pre><code>
{`// Different rules for different file types
module.exports = {
  // Base configuration
  extends: ['eslint:recommended'],
  
  // Global rules
  rules: {
    'no-console': 'warn'
  },
  
  // Override rules for specific files/directories
  overrides: [
    {
      // Stricter rules for production code
      files: ['src/**/*.js'],
      excludedFiles: ['src/**/*.test.js', 'src/**/*.spec.js'],
      rules: {
        'no-console': 'error',
        'no-debugger': 'error'
      }
    },
    {
      // Relaxed rules for test files
      files: ['**/*.test.js', '**/*.spec.js'],
      env: {
        jest: true
      },
      rules: {
        'no-console': 'off',
        'no-unused-expressions': 'off'
      }
    },
    {
      // Configuration files
      files: ['.eslintrc.js', 'webpack.config.js', '*.config.js'],
      env: {
        node: true
      },
      rules: {
        'no-console': 'off'
      }
    }
  ]
};`}
                </code></pre>
              </div>
            </div>

            <div className="js-config-card">
              <h3>📦 Custom ESLint Rules</h3>
              <div className="js-code-example">
                <pre><code>
{`// Custom rule to enforce specific naming conventions
module.exports = {
  rules: {
    // Custom rule example
    'custom-naming-convention': {
      create(context) {
        return {
          VariableDeclarator(node) {
            const name = node.id.name;
            
            // Enforce camelCase for variables
            if (!/^[a-z][a-zA-Z0-9]*$/.test(name)) {
              context.report({
                node: node.id,
                message: 'Variable names must be camelCase'
              });
            }
          },
          
          FunctionDeclaration(node) {
            const name = node.id.name;
            
            // Enforce specific prefixes for handlers
            if (name.startsWith('handle') && !/^handle[A-Z]/.test(name)) {
              context.report({
                node: node.id,
                message: 'Handler functions should start with "handle" followed by PascalCase'
              });
            }
          }
        };
      }
    }
  }
};

// Usage in .eslintrc.js
module.exports = {
  plugins: ['./custom-rules'],
  rules: {
    'custom-rules/custom-naming-convention': 'error'
  }
};`}
                </code></pre>
              </div>
            </div>

            <div className="js-config-card">
              <h3>🚀 Performance Optimization</h3>
              <div className="js-code-example">
                <pre><code>
{`// .eslintrc.js - Optimized for large projects
module.exports = {
  // Cache results for faster subsequent runs
  cache: true,
  cacheLocation: './node_modules/.cache/eslint/',
  
  // Only check changed files in CI
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  
  // Ignore patterns for better performance
  ignorePatterns: [
    'node_modules/',
    'build/',
    'dist/',
    '*.min.js',
    'coverage/',
    '*.config.js'
  ],
  
  // Use faster parser when possible
  parser: 'espree', // Default, fastest for JS
  
  // Selective rule enabling
  rules: {
    // Only enable rules you actually need
    'no-unused-vars': 'error',
    'no-console': 'warn'
    // Avoid expensive rules like 'complexity' in large codebases
  }
};

// Package.json scripts for efficiency
{
  "scripts": {
    "lint": "eslint src/ --cache --cache-location node_modules/.cache/eslint/",
    "lint:fix": "eslint src/ --fix --cache",
    "lint:changed": "eslint $(git diff --name-only --diff-filter=ACMR | grep -E '\\.(js|jsx|ts|tsx)$' | xargs)"
  }
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Git Hooks & CI/CD */}
        <section className="js-topic-section">
          <h2>🔄 Git Hooks & CI/CD Integration</h2>
          
          <div className="js-hooks-guide">
            <div className="js-hook-card">
              <h3>🎣 Husky + lint-staged Setup</h3>
              <div className="js-code-example">
                <pre><code>
{`# Install dependencies
npm install --save-dev husky lint-staged

# Initialize husky
npx husky install

# Add pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"

# Add pre-push hook
npx husky add .husky/pre-push "npm run lint && npm run test"

# Package.json configuration
{
  "scripts": {
    "prepare": "husky install",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "format": "prettier --write src/"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ],
    "*.{json,css,md}": [
      "prettier --write",
      "git add"
    ]
  }
}`}
                </code></pre>
              </div>
            </div>

            <div className="js-hook-card">
              <h3>🚀 GitHub Actions Workflow</h3>
              <div className="js-code-example">
                <pre><code>
{`# .github/workflows/code-quality.yml
name: Code Quality

on:
  pull_request:
    branches: [main, develop]
  push:
    branches: [main]

jobs:
  lint-and-format:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run ESLint
        run: npm run lint
      
      - name: Check Prettier formatting
        run: npm run format:check
      
      - name: Run tests
        run: npm test
      
      - name: Check build
        run: npm run build

  # Auto-fix formatting on push to feature branches
  auto-fix:
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && !contains(github.ref, 'main')
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        with:
          token: \${{ secrets.GITHUB_TOKEN }}
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Fix ESLint issues
        run: npm run lint:fix
      
      - name: Format with Prettier
        run: npm run format
      
      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add .
          git diff --staged --quiet || git commit -m "Auto-fix linting and formatting"
          git push`}
                </code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="js-topic-section">
          <h2>⭐ Linting Best Practices</h2>
          
          <div className="js-best-practices">
            <div className="js-practice-group">
              <h3>🎯 Configuration Guidelines</h3>
              <ul>
                <li><strong>Start with recommended configs:</strong> Use eslint:recommended as base</li>
                <li><strong>Add rules incrementally:</strong> Don't overwhelm team with too many rules at once</li>
                <li><strong>Document custom rules:</strong> Explain why specific rules are needed</li>
                <li><strong>Use comments to disable rules sparingly:</strong> Prefer fixing issues over ignoring</li>
                <li><strong>Review and update regularly:</strong> Keep configurations current with best practices</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>👥 Team Adoption</h3>
              <ul>
                <li><strong>Get team buy-in:</strong> Explain benefits and address concerns</li>
                <li><strong>Provide editor setup guide:</strong> Help team configure their environments</li>
                <li><strong>Start with warnings:</strong> Gradually promote to errors as team adapts</li>
                <li><strong>Make it automatic:</strong> Use git hooks and CI/CD for enforcement</li>
                <li><strong>Lead by example:</strong> Champions should model good practices</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🔧 Maintenance Tips</h3>
              <ul>
                <li><strong>Regular audits:</strong> Review and update rules quarterly</li>
                <li><strong>Monitor performance:</strong> Watch for slow linting in large codebases</li>
                <li><strong>Stay updated:</strong> Keep linting tools and configs current</li>
                <li><strong>Measure impact:</strong> Track bug reduction and developer satisfaction</li>
                <li><strong>Gather feedback:</strong> Listen to team input on rules and processes</li>
              </ul>
            </div>

            <div className="js-practice-group">
              <h3>🚀 Advanced Techniques</h3>
              <ul>
                <li><strong>Gradual migration:</strong> Use .eslintrc overrides for legacy code</li>
                <li><strong>Custom rules for business logic:</strong> Enforce domain-specific patterns</li>
                <li><strong>Integration with testing:</strong> Lint test files with appropriate rules</li>
                <li><strong>Performance monitoring:</strong> Use cache and parallel processing</li>
                <li><strong>Metrics tracking:</strong> Monitor code quality improvements over time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Issues & Solutions */}
        <section className="js-topic-section">
          <h2>🔧 Common Issues & Solutions</h2>
          
          <div className="js-troubleshooting">
            <div className="js-issue-card">
              <h3>❌ ESLint Not Working in Editor</h3>
              <div className="js-solution">
                <h4>Possible Causes & Solutions:</h4>
                <ul>
                  <li><strong>Extension not installed:</strong> Install ESLint extension</li>
                  <li><strong>Config not found:</strong> Ensure .eslintrc file exists</li>
                  <li><strong>Wrong working directory:</strong> Open project root in editor</li>
                  <li><strong>File not included:</strong> Check ignorePatterns and file extensions</li>
                </ul>
                <div className="js-code-example">
                  <pre><code>
{`// Debug ESLint configuration
npx eslint --print-config src/myfile.js

// Check what files ESLint is processing
npx eslint src/ --debug

// Validate configuration file
npx eslint --validate-config .eslintrc.json`}
                  </code></pre>
                </div>
              </div>
            </div>

            <div className="js-issue-card">
              <h3>⚡ Slow Linting Performance</h3>
              <div className="js-solution">
                <h4>Optimization Strategies:</h4>
                <ul>
                  <li><strong>Enable caching:</strong> Use --cache flag</li>
                  <li><strong>Reduce rule complexity:</strong> Disable expensive rules</li>
                  <li><strong>Limit file scope:</strong> Use better ignore patterns</li>
                  <li><strong>Parallel processing:</strong> Use tools like eslint-parallel</li>
                </ul>
              </div>
            </div>

            <div className="js-issue-card">
              <h3>🔄 Prettier vs ESLint Conflicts</h3>
              <div className="js-solution">
                <h4>Resolution Steps:</h4>
                <ol>
                  <li>Install eslint-config-prettier to disable conflicting rules</li>
                  <li>Add "prettier" to extends array (must be last)</li>
                  <li>Use eslint-plugin-prettier for integration</li>
                  <li>Configure editor to run Prettier first, then ESLint</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LintingCodeStyle;
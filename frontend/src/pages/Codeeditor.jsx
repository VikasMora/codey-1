import React, { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import axios from 'axios'
import './Codeeditor.css'

// Judge0 Language IDs mapping
const languageMap = {
  javascript: 63, // Node.js (Judge0)
  python: 71,
  cpp: 54, // C++ (GCC)
  java: 62,
  c: 50, // C (GCC)
  csharp: 51, // C# (Mono)
}

function Codeeditor() {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')
  const [code, setCode] = useState(getDefaultCode('javascript'))
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [files, setFiles] = useState([
    { id: 1, name: 'main.js', language: 'javascript', content: getDefaultCode('javascript'), active: true }
  ])
  const [activeFileId, setActiveFileId] = useState(1)
  const [problem, setProblem] = useState(null)
  const [mode, setMode] = useState('editor') // 'editor' or 'practice'
  const [testResults, setTestResults] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const editorRef = useRef(null)

  const languages = [
    { id: 'javascript', name: 'JavaScript', extension: 'js' },
    { id: 'python', name: 'Python', extension: 'py' },
    { id: 'java', name: 'Java', extension: 'java' },
    { id: 'cpp', name: 'C++', extension: 'cpp' },
    { id: 'c', name: 'C', extension: 'c' },
    { id: 'csharp', name: 'C#', extension: 'cs' },
    { id: 'html', name: 'HTML', extension: 'html' },
    { id: 'css', name: 'CSS', extension: 'css' },
    { id: 'sql', name: 'SQL', extension: 'sql' }
  ]

  function getDefaultCode(language) {
    const defaults = {
      javascript: `// Welcome to JavaScript Code Editor
console.log("Hello, World!");

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));`,
      python: `# Welcome to Python Code Editor
print("Hello, World!")

def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print("Factorial of 5:", factorial(5))`,
      java: `// Welcome to Java Code Editor
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Factorial of 5: " + factorial(5));
    }
    
    public static int factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
}`,
      cpp: `// Welcome to C++ Code Editor
#include <iostream>
using namespace std;

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    cout << "Hello, World!" << endl;
    cout << "Factorial of 5: " << factorial(5) << endl;
    return 0;
}`,
      c: `// Welcome to C Code Editor
#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    printf("Hello, World!\\n");
    printf("Factorial of 5: %d\\n", factorial(5));
    return 0;
}`,
      csharp: `// Welcome to C# Code Editor
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
        Console.WriteLine("Factorial of 5: " + Factorial(5));
    }
    
    static int Factorial(int n) {
        if (n <= 1) return 1;
        return n * Factorial(n - 1);
    }
}`,
      html: `<!-- Welcome to HTML Editor -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>Welcome to HTML coding!</p>
</body>
</html>`,
      css: `/* Welcome to CSS Editor */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

h1 {
    color: white;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}`,
      sql: `-- Welcome to SQL Editor
SELECT 'Hello, World!' AS message;

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO users VALUES 
(1, 'John Doe', 'john@example.com'),
(2, 'Jane Smith', 'jane@example.com');

SELECT * FROM users;`
    }
    return defaults[language] || '// Start coding here...'
  }

  // Initialize with practice problem if provided
  useEffect(() => {
    if (location.state && location.state.problem) {
      const problemData = location.state.problem
      setProblem(problemData)
      setMode('practice')
      
      // Set language to match problem language
      const problemLanguage = problemData.language.toLowerCase()
      setSelectedLanguage(problemLanguage)
      
      // Create initial code template for the problem
      const problemCode = getProblemTemplate(problemData, problemLanguage)
      setCode(problemCode)
      
      // Update files
      const language = languages.find(lang => lang.id === problemLanguage)
      const fileName = `${problemData.questionId}.${language?.extension || 'js'}`
      
      setFiles([{
        id: 1,
        name: fileName,
        language: problemLanguage,
        content: problemCode,
        active: true
      }])
    }
  }, [location.state])

  // Generate problem template based on language
  const getProblemTemplate = (problem, language) => {
    const templates = {
      javascript: `// ${problem.title}
// Difficulty: ${problem.difficulty}
// ${problem.question.split('\\n')[0]}

${problem.requiredAnswer || 'function solution() {\n    // Write your solution here\n    \n}'}

// Test your solution
console.log(solution());`,
      
      python: `# ${problem.title}
# Difficulty: ${problem.difficulty}  
# ${problem.question.split('\\n')[0]}

${problem.requiredAnswer || 'def solution():\n    # Write your solution here\n    pass'}

# Test your solution
print(solution())`,
      
      java: `// ${problem.title}
// Difficulty: ${problem.difficulty}
// ${problem.question.split('\\n')[0]}

${problem.requiredAnswer || 'public class Solution {\n    public static void main(String[] args) {\n        // Write your solution here\n        \n    }\n}'}`,
      
      cpp: `// ${problem.title}
// Difficulty: ${problem.difficulty}
// ${problem.question.split('\\n')[0]}

#include <iostream>
using namespace std;

${problem.requiredAnswer || 'int main() {\n    // Write your solution here\n    \n    return 0;\n}'}`,
      
      c: `// ${problem.title}
// Difficulty: ${problem.difficulty}
// ${problem.question.split('\\n')[0]}

#include <stdio.h>

${problem.requiredAnswer || 'int main() {\n    // Write your solution here\n    \n    return 0;\n}'}`,
      
      csharp: `// ${problem.title}
// Difficulty: ${problem.difficulty}
// ${problem.question.split('\\n')[0]}

using System;

${problem.requiredAnswer || 'class Program {\n    static void Main() {\n        // Write your solution here\n        \n    }\n}'}`
    }
    
    return templates[language] || `// ${problem.title}\n// Write your solution here\n`
  }

  // Submit solution for practice problems
  const submitSolution = async () => {
    if (!problem || mode !== 'practice') return
    
    setIsSubmitting(true)
    setTestResults(null)
    
    try {
      const response = await fetch(`http://localhost:5000/api/problems/${problem._id}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          solution: code,
          username: localStorage.getItem('username') || 'anonymous'
        })
      })
      
      const result = await response.json()
      
      if (response.ok) {
        setTestResults(result)
        setOutput(`Submission Result: ${result.message}\nTest Cases Passed: ${result.testCasesPassed}/${result.totalTestCases}`)
      } else {
        setOutput(`Error: ${result.error}`)
      }
    } catch (error) {
      setOutput(`Error submitting solution: ${error.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Run code using Judge0 API for supported languages
  const runWithJudge0 = async (code, language) => {
    const langId = languageMap[language]
    if (!langId) throw new Error('Unsupported language')

    // Submit code for execution
    const { data: tokenData } = await axios.post(
      'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=false',
      {
        source_code: code,
        language_id: langId,
        stdin: '',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': '01d7f3e484msh5c2e08b5f646bc1p1f21a6jsnd572ad2be1bc', // Replace with your RapidAPI key
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        },
      }
    )

    const token = tokenData.token

    // Poll for result
    return new Promise((resolve, reject) => {
      let tries = 0
      const interval = setInterval(async () => {
        tries++
        try {
          const res = await axios.get(
            `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=false`,
            {
              headers: {
                'X-RapidAPI-Key': '01d7f3e484msh5c2e08b5f646bc1p1f21a6jsnd572ad2be1bc', // Use your real key here too
                'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
              },
            }
          )
          if (res.data.status.id >= 3) {
            clearInterval(interval)
            if (res.data.stdout) resolve(res.data.stdout)
            else if (res.data.stderr) resolve(res.data.stderr)
            else if (res.data.compile_output) resolve(res.data.compile_output)
            else resolve('No output')
          } else if (tries > 20) {
            clearInterval(interval)
            reject(new Error('Timeout waiting for Judge0'))
          }
        } catch (err) {
          clearInterval(interval)
          reject(err)
        }
      }, 1500)
    })
  }

  const handleLanguageChange = (langId) => {
    const language = languages.find(lang => lang.id === langId)
    const newFileName = `main.${language.extension}`
    
    // Update current file
    const updatedFiles = files.map(file => 
      file.id === activeFileId 
        ? { ...file, language: langId, name: newFileName, content: code }
        : file
    )
    
    setFiles(updatedFiles)
    setSelectedLanguage(langId)
    setCode(getDefaultCode(langId))
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput('Running code...')
    
    try {
      // Check if the language is supported by Judge0
      if (languageMap[selectedLanguage]) {
        try {
          const result = await runWithJudge0(code, selectedLanguage)
          setOutput(result)
        } catch (error) {
          setOutput(`Execution failed: ${error.message || error}`)
        }
      } else {
        // For languages not supported by Judge0 (HTML, CSS, SQL), use simulation
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        const simulateOutput = () => {
          switch (selectedLanguage) {
            case 'html':
              return simulateHtmlExecution(code)
            
            case 'css':
              return simulateCssExecution(code)
            
            case 'sql':
              return simulateSqlExecution(code)
            
            default:
              return `Code compiled successfully for ${selectedLanguage}!\n\nNote: This is a simulation. In production, this would be executed on a secure server environment.`
          }
        }
        
        setOutput(simulateOutput())
      }
    } catch (error) {
      setOutput(`Execution Error: ${error.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  const simulateHtmlExecution = (code) => {
    const output = []
    
    // Count HTML elements
    const elementCount = (code.match(/<[^/][^>]*>/g) || []).length
    const hasDoctype = code.includes('<!DOCTYPE')
    const hasTitle = code.includes('<title>')
    const hasH1 = code.includes('<h1>')
    const hasP = code.includes('<p>')
    
    output.push('HTML Document Analysis:')
    output.push(`✓ Elements found: ${elementCount}`)
    output.push(`✓ DOCTYPE declaration: ${hasDoctype ? 'Present' : 'Missing'}`)
    output.push(`✓ Title tag: ${hasTitle ? 'Present' : 'Missing'}`)
    
    if (hasH1) {
      const h1Content = code.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1]
      if (h1Content) output.push(`✓ Main heading: "${h1Content}"`)
    }
    
    if (hasP) {
      const pContent = code.match(/<p[^>]*>(.*?)<\/p>/)?.[1]
      if (pContent) output.push(`✓ Paragraph: "${pContent}"`)
    }
    
    output.push('\nDocument would render in browser with above elements.')
    
    return output.join('\n')
  }

  const simulateCssExecution = (code) => {
    const output = []
    
    // Analyze CSS rules
    const ruleMatches = code.match(/[^{}]*{[^}]*}/g) || []
    const selectorCount = ruleMatches.length
    const properties = code.match(/[a-zA-Z-]+\s*:/g) || []
    
    output.push('CSS Stylesheet Analysis:')
    output.push(`✓ CSS Rules: ${selectorCount}`)
    output.push(`✓ Properties: ${properties.length}`)
    
    // Extract specific selectors and properties
    if (code.includes('body')) {
      output.push('✓ Body styles defined')
    }
    if (code.includes('h1')) {
      output.push('✓ Heading styles defined')
    }
    if (code.includes('background')) {
      output.push('✓ Background styling applied')
    }
    if (code.includes('color')) {
      output.push('✓ Color properties set')
    }
    
    output.push('\nStyles compiled and ready for HTML application.')
    
    return output.join('\n')
  }

  const simulateSqlExecution = (code) => {
    const output = []
    const lines = code.split('\n').filter(line => line.trim())
    
    lines.forEach(line => {
      const trimmedLine = line.trim()
      
      // Handle SELECT statements
      if (trimmedLine.toUpperCase().startsWith('SELECT')) {
        if (trimmedLine.includes("'Hello, World!'")) {
          output.push('Query Result:')
          output.push('| message       |')
          output.push('|---------------|')
          output.push('| Hello, World! |')
          output.push('')
        } else if (trimmedLine.includes('SELECT * FROM users')) {
          output.push('Query Result:')
          output.push('| id | name       | email            |')
          output.push('|----|------------|------------------|')
          output.push('| 1  | John Doe   | john@example.com |')
          output.push('| 2  | Jane Smith | jane@example.com |')
          output.push('')
        } else {
          const columns = trimmedLine.match(/SELECT\s+(.*?)\s+FROM/i)?.[1] || '*'
          const table = trimmedLine.match(/FROM\s+(\w+)/i)?.[1] || 'table'
          output.push(`✓ Selected ${columns} from ${table}`)
        }
      }
      
      // Handle CREATE TABLE
      else if (trimmedLine.toUpperCase().startsWith('CREATE TABLE')) {
        const tableName = trimmedLine.match(/CREATE TABLE\s+(\w+)/i)?.[1]
        if (tableName) {
          output.push(`✓ Table "${tableName}" created successfully`)
        }
      }
      
      // Handle INSERT
      else if (trimmedLine.toUpperCase().startsWith('INSERT')) {
        const tableName = trimmedLine.match(/INSERT INTO\s+(\w+)/i)?.[1]
        const values = trimmedLine.match(/VALUES\s*\(/g)?.length || 1
        if (tableName) {
          output.push(`✓ ${values} row(s) inserted into "${tableName}"`)
        }
      }
      
      // Handle other SQL commands
      else if (trimmedLine.toUpperCase().startsWith('UPDATE')) {
        const tableName = trimmedLine.match(/UPDATE\s+(\w+)/i)?.[1]
        output.push(`✓ Table "${tableName}" updated`)
      }
      else if (trimmedLine.toUpperCase().startsWith('DELETE')) {
        const tableName = trimmedLine.match(/DELETE FROM\s+(\w+)/i)?.[1]
        output.push(`✓ Records deleted from "${tableName}"`)
      }
    })
    
    return output.length > 0 ? output.join('\n') : 'SQL commands executed successfully'
  }

  const createNewFile = () => {
    const language = languages.find(lang => lang.id === selectedLanguage)
    const newFile = {
      id: Date.now(),
      name: `untitled.${language.extension}`,
      language: selectedLanguage,
      content: getDefaultCode(selectedLanguage),
      active: true
    }
    
    // Update files and set new file as active
    const updatedFiles = files.map(f => ({ ...f, active: false }))
    setFiles([...updatedFiles, newFile])
    setActiveFileId(newFile.id)
    setCode(newFile.content)
  }

  const switchFile = (fileId) => {
    // Save current file content
    const updatedFiles = files.map(file => 
      file.id === activeFileId 
        ? { ...file, content: code, active: false }
        : { ...file, active: file.id === fileId }
    )
    
    const newActiveFile = updatedFiles.find(f => f.id === fileId)
    setFiles(updatedFiles)
    setActiveFileId(fileId)
    setCode(newActiveFile.content)
    setSelectedLanguage(newActiveFile.language)
  }

  const closeFile = (fileId, event) => {
    event.stopPropagation()
    
    if (files.length === 1) return // Don't close the last file
    
    const updatedFiles = files.filter(f => f.id !== fileId)
    
    if (fileId === activeFileId) {
      const newActiveFile = updatedFiles[0]
      setActiveFileId(newActiveFile.id)
      setCode(newActiveFile.content)
      setSelectedLanguage(newActiveFile.language)
    }
    
    setFiles(updatedFiles)
  }

  return (
    <div className="code-editor">

      {/* Editor Header */}
      <div className="editor-header">
        <div className="editor-info">
          <button 
            className="back-btn" 
            onClick={() => navigate(mode === 'practice' ? '/practice' : '/')}
          >
            ← Back to {mode === 'practice' ? 'Practice' : 'Home'}
          </button>
          <div className="editor-title-section">
            <div className="editor-icon">💻</div>
            <div className="title-info">
              <h1>{mode === 'practice' && problem ? problem.title : 'Codey Editor'}</h1>
              <p>{mode === 'practice' && problem ? 
                `${problem.difficulty} • ${problem.category}` : 
                'Professional Code Editor'
              }</p>
            </div>
          </div>
        </div>
        <div className="editor-controls">
          <div className="language-badge">
            <span className="language-dot"></span>
            {languages.find(l => l.id === selectedLanguage)?.name || 'JavaScript'}
          </div>
          {mode === 'practice' && (
            <button 
              onClick={submitSolution} 
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? 'Submitting...' : '🚀 Submit'}
            </button>
          )}
          <button 
            onClick={runCode} 
            disabled={isRunning}
            className="run-btn"
          >
            {isRunning ? 'Running...' : 'Run'}
          </button>
          <button className="save-btn">💾 Save</button>
          <button className="settings-btn">⚙️</button>
        </div>
      </div>

      {/* Problem Description (Practice Mode) */}
      {mode === 'practice' && problem && (
        <div className="problem-panel">
          <div className="problem-content">
            <div className="problem-header">
              <h2>{problem.title}</h2>
              <div className="problem-meta">
                <span className={`difficulty-tag ${problem.difficulty.toLowerCase()}`}>
                  {problem.difficulty}
                </span>
                <span className="category-tag">{problem.category}</span>
                <span className="language-tag">{problem.language}</span>
              </div>
            </div>
            
            <div className="problem-description">
              <h3>Problem Statement</h3>
              <div className="description-text">
                {problem.question.split('\\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
            
            <div className="test-cases-section">
              <h3>Test Cases</h3>
              <div className="test-cases">
                {problem.testCases.filter(tc => !tc.isHidden).map((testCase, index) => (
                  <div key={index} className="test-case">
                    <div className="test-input">
                      <strong>Input:</strong> {testCase.input}
                    </div>
                    <div className="test-output">
                      <strong>Expected Output:</strong> {testCase.expectedOutput}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {problem.hints && problem.hints.length > 0 && (
              <div className="hints-section">
                <h3>💡 Hints</h3>
                <div className="hints">
                  {problem.hints.map((hint, index) => (
                    <div key={index} className="hint">
                      <span className="hint-number">{index + 1}.</span>
                      <span className="hint-text">{hint}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {testResults && (
              <div className={`test-results ${testResults.correct ? 'success' : 'error'}`}>
                <h3>🧪 Test Results</h3>
                <div className="result-summary">
                  <span className="result-message">{testResults.message}</span>
                  <span className="result-stats">
                    {testResults.testCasesPassed}/{testResults.totalTestCases} test cases passed
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="editor-content">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="files-section">
              <h3>📁 Files</h3>
              <button onClick={createNewFile} className="add-file-btn">+</button>
            </div>
          </div>
          <div className="file-explorer">
            {files.map(file => (
              <div 
                key={file.id}
                className={`file-item ${file.active ? 'active' : ''}`}
                onClick={() => switchFile(file.id)}
              >
                <div className="file-info">
                  <span className={`file-icon ${file.language}`}>
                    {file.language === 'javascript' ? '🟨' : 
                     file.language === 'python' ? '🐍' : 
                     file.language === 'java' ? '☕' : 
                     file.language === 'html' ? '🌐' : 
                     file.language === 'css' ? '🎨' : '📄'}
                  </span>
                  <span className="file-name">{file.name}</span>
                </div>
                {files.length > 1 && (
                  <button 
                    className="close-file-btn"
                    onClick={(e) => closeFile(file.id, e)}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
          
          {/* File Actions */}
          <div className="file-actions">
            <button className="action-btn">📤 Upload</button>
            <button className="action-btn">📥 Download</button>
          </div>
        </div>

        {/* Editor Area */}
        <div className="editor-area">
          {/* Editor Header Bar */}
          <div className="editor-bar">
            <div className="editor-tab">
              <span className="tab-name">{files.find(f => f.id === activeFileId)?.name}</span>
            </div>
            <div className="editor-actions">
              <select 
                value={selectedLanguage} 
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="language-selector"
              >
                {languages.map(lang => (
                  <option key={lang.id} value={lang.id}>{lang.name}</option>
                ))}
              </select>
              <button className="share-btn">🔗 Share</button>
              <button className="hide-output-btn">👁️ Hide Output</button>
            </div>
          </div>

          {/* Monaco Editor */}
          <div className="monaco-editor-container">
            <Editor
              height="100%"
              language={selectedLanguage}
              value={code}
              onChange={(value) => setCode(value || '')}
              onMount={(editor) => {
                editorRef.current = editor
              }}
              theme="vs-light"
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                wordWrap: 'on',
                lineNumbers: 'on',
                folding: true,
                renderWhitespace: 'selection'
              }}
            />
          </div>
        </div>
      </div>

      {/* Output Panel */}
      <div className="output-panel">
        <div className="output-header">
          <div className="output-title">
            <span className="output-icon">▷</span>
            <span>Output</span>
          </div>
          <button onClick={() => setOutput('')} className="clear-btn">Clear</button>
        </div>
        <div className="output-content">
          {output ? (
            <pre className="output-text">{output}</pre>
          ) : (
            <div className="output-placeholder">
              <p>No output yet. Run your code to see results here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Codeeditor
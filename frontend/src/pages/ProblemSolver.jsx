import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import axios from 'axios'
import './ProblemSolver.css'

// Judge0 Language IDs mapping
const languageMap = {
  javascript: 63,
  python: 71,
  cpp: 54,
  java: 62,
  c: 50,
  csharp: 51,
}

function ProblemSolver() {
  const location = useLocation()
  const navigate = useNavigate()
  const [problem, setProblem] = useState(null)
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [testResults, setTestResults] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')

  // Get available languages from problem preload data or use default set
  const getAvailableLanguages = () => {
    if (problem && problem.preload && Array.isArray(problem.preload)) {
      return problem.preload.map(p => ({
        id: p.language.toLowerCase(),
        name: p.language
      }))
    }
    
    // Default languages if no preload data
    return [
      { id: 'javascript', name: 'JavaScript' },
      { id: 'python', name: 'Python' },
      { id: 'java', name: 'Java' },
      { id: 'cpp', name: 'C++' },
      { id: 'c', name: 'C' },
      { id: 'csharp', name: 'C#' }
    ]
  }

  const languages = getAvailableLanguages()

  // Initialize with problem data
  useEffect(() => {
    if (location.state && location.state.problem) {
      const problemData = location.state.problem
      setProblem(problemData)
      
      // Set language to match problem language
      const problemLanguage = problemData.language.toLowerCase()
      setSelectedLanguage(problemLanguage)
      
      // Set initial code template
      setCode(getProblemTemplate(problemData, problemLanguage))
    } else {
      // Redirect back to practice if no problem data
      navigate('/practice')
    }
  }, [location.state, navigate])

  // Get preload code template based on problem and language
  const getProblemTemplate = (problem, language) => {
    // First, try to get preload code from the problem data
    if (problem.preload && Array.isArray(problem.preload)) {
      const preloadForLanguage = problem.preload.find(
        p => p.language.toLowerCase() === language.toLowerCase()
      )
      
      if (preloadForLanguage && preloadForLanguage.code) {
        return preloadForLanguage.code
      }
    }
    
    // Fallback to existing template generation if preload not available
    const problemTitle = problem.title
    
    // Determine function signature based on problem title - LeetCode style
    const getFunctionSignature = (lang) => {
      const title = problemTitle.toLowerCase()
      
      if (title.includes('two sum')) {
        switch(lang) {
          case 'javascript':
            return 'var twoSum = function(nums, target) {\n    \n};'
          case 'python':
            return 'def twoSum(self, nums, target):\n    '
          case 'java':
            return 'public int[] twoSum(int[] nums, int target) {\n        \n    }'
          case 'cpp':
            return 'vector<int> twoSum(vector<int>& nums, int target) {\n        \n    }'
          case 'c':
            return 'int* twoSum(int* nums, int numsSize, int target, int* returnSize) {\n    \n}'
          case 'csharp':
            return 'public int[] TwoSum(int[] nums, int target) {\n        \n    }'
          default:
            return 'function twoSum(nums, target) {\n    \n}'
        }
      } else if (title.includes('reverse')) {
        switch(lang) {
          case 'javascript':
            return 'var reverseString = function(s) {\n    \n};'
          case 'python':
            return 'def reverseString(self, s):\n    '
          case 'java':
            return 'public void reverseString(char[] s) {\n        \n    }'
          case 'cpp':
            return 'void reverseString(vector<char>& s) {\n        \n    }'
          case 'c':
            return 'void reverseString(char* s, int sSize) {\n    \n}'
          case 'csharp':
            return 'public void ReverseString(char[] s) {\n        \n    }'
          default:
            return 'function reverseString(s) {\n    \n}'
        }
      } else {
        // Generic solution function
        switch(lang) {
          case 'javascript':
            return 'var solution = function() {\n    \n};'
          case 'python':
            return 'def solution(self):\n    '
          case 'java':
            return 'public int solution() {\n        \n    }'
          case 'cpp':
            return 'int solution() {\n        \n    }'
          case 'c':
            return 'int solution() {\n    \n}'
          case 'csharp':
            return 'public int Solution() {\n        \n    }'
          default:
            return 'function solution() {\n    \n}'
        }
      }
    }
    
    return getFunctionSignature(language)
  }

  // Run test cases against user code
  const runCode = async () => {
    setIsRunning(true)
    setOutput('Running test cases...')
    setTestResults(null)
    
    try {
      if (!problem || !problem.testCases || problem.testCases.length === 0) {
        setOutput('No test cases available for this problem')
        setIsRunning(false)
        return
      }

      // Run test cases for the problem
      const results = await runTestCases(code, problem.testCases)
      setTestResults(results)
      
      // Display results
      displayTestResults(results)
      
    } catch (error) {
      setOutput(`Error running test cases: ${error.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  // Function to run test cases
  const runTestCases = async (userCode, testCases) => {
    const results = {
      passed: 0,
      total: testCases.length,
      details: []
    }

    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i]
      try {
        const result = await executeTestCase(userCode, testCase, i + 1)
        results.details.push(result)
        if (result.passed) {
          results.passed++
        }
      } catch (error) {
        results.details.push({
          testCase: i + 1,
          passed: false,
          input: testCase.input,
          expected: testCase.expectedOutput,
          actual: 'Runtime Error',
          error: error.message,
          isHidden: testCase.isHidden
        })
      }
    }

    return results
  }

  // Execute individual test case - LeetCode style
  const executeTestCase = async (userCode, testCase, testNumber) => {
    return new Promise((resolve) => {
      try {
        let wrapperCode = ''
        
        if (selectedLanguage === 'javascript') {
          // Safely escape input and expected output
          const safeInput = testCase.input.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')
          const safeExpected = testCase.expectedOutput.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')
          
          wrapperCode = `
// User's function implementation
${userCode}

// Test case execution wrapper
try {
  const inputStr = "${safeInput}";
  const expectedStr = "${safeExpected}";
  
  let result;
  ${generateTestExecution(testCase, selectedLanguage, problem)}
  
  // Parse expected output to proper format
  let expectedResult;
  try {
    // Try to parse as JSON first (for arrays, objects)
    expectedResult = JSON.parse(expectedStr);
  } catch {
    // If not JSON, treat as string and try to evaluate
    try {
      expectedResult = eval('(' + expectedStr + ')');
    } catch {
      expectedResult = expectedStr;
    }
  }
  
  // Compare results - handle arrays specially
  let passed = false;
  if (Array.isArray(result) && Array.isArray(expectedResult)) {
    // Compare arrays element by element
    passed = result.length === expectedResult.length && 
             result.every((val, index) => val === expectedResult[index]);
  } else {
    // For non-arrays, use JSON comparison
    passed = JSON.stringify(result) === JSON.stringify(expectedResult);
  }
  
  console.log(JSON.stringify({
    testCase: ${testNumber},
    input: inputStr,
    expected: expectedStr,
    actual: JSON.stringify(result),
    passed: passed
  }));
  
} catch (error) {
  console.log(JSON.stringify({
    testCase: ${testNumber},
    input: "${safeInput}",
    expected: "${safeExpected}",
    actual: "Runtime Error",
    passed: false,
    error: error.message
  }));
}
          `
        } else if (selectedLanguage === 'python') {
          const safeInput = testCase.input.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')
          const safeExpected = testCase.expectedOutput.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')
          
          wrapperCode = `
# User's function implementation
${userCode}

# Test case execution wrapper
try:
    import json
    input_str = "${safeInput}"
    expected_str = "${safeExpected}"
    
    ${generateTestExecution(testCase, selectedLanguage, problem)}
    
    # Parse expected output
    try:
        expected_result = json.loads(expected_str)
    except:
        try:
            expected_result = eval(expected_str)
        except:
            expected_result = expected_str
    
    # Compare results - handle lists specially
    if isinstance(result, list) and isinstance(expected_result, list):
        passed = len(result) == len(expected_result) and all(a == b for a, b in zip(result, expected_result))
    else:
        passed = json.dumps(result, sort_keys=True) == json.dumps(expected_result, sort_keys=True)
    
    print(json.dumps({
        "testCase": ${testNumber},
        "input": input_str,
        "expected": expected_str,
        "actual": json.dumps(result),
        "passed": passed
    }))
    
except Exception as error:
    import json
    print(json.dumps({
        "testCase": ${testNumber},
        "input": "${safeInput}",
        "expected": "${safeExpected}",
        "actual": "Runtime Error",
        "passed": False,
        "error": str(error)
    }))
          `
        } else {
          // For other languages, create similar wrapper
          wrapperCode = userCode
        }

        // Use Judge0 API to execute the wrapper code
        executeWithJudge0(wrapperCode, testCase, testNumber, resolve)
        
      } catch (error) {
        resolve({
          testCase: testNumber,
          passed: false,
          input: testCase.input,
          expected: testCase.expectedOutput,
          actual: 'Parse Error',
          error: error.message,
          isHidden: testCase.isHidden
        })
      }
    })
  }

  // Generate test execution code - LeetCode style function calls
  const generateTestExecution = (testCase, language, problem) => {
    if (language === 'javascript') {
      const problemTitle = problem.title.toLowerCase()
      
      if (problemTitle.includes('two sum')) {
        return `
          // Parse Two Sum input: nums = [2,7,11,15], target = 9
          const match = inputStr.match(/nums = \\[([^\\]]+)\\], target = (\\d+)/);
          if (match) {
            const nums = match[1].split(',').map(x => parseInt(x.trim()));
            const target = parseInt(match[2]);
            result = twoSum(nums, target);
          } else {
            throw new Error('Could not parse input format');
          }
        `
      } else if (problemTitle.includes('reverse')) {
        return `
          // Parse Reverse String input: s = ["h","e","l","l","o"]
          const match = inputStr.match(/s = \\[([^\\]]+)\\]/);
          if (match) {
            const s = match[1].split(',').map(x => x.trim().replace(/['"]/g, ''));
            const originalS = [...s]; // Keep copy for input display
            reverseString(s);
            result = s; // s is modified in-place
          } else {
            throw new Error('Could not parse input format');
          }
        `
      } else {
        // Generic function call
        return `
          // Try to call the solution function
          result = solution();
        `
      }
    } else if (language === 'python') {
      const problemTitle = problem.title.toLowerCase()
      
      if (problemTitle.includes('two sum')) {
        return `
# Parse Two Sum input
import re
match = re.search(r'nums = \\[([^\\]]+)\\], target = (\\d+)', input_str)
if match:
    nums = [int(x.strip()) for x in match.group(1).split(',')]
    target = int(match.group(2))
    result = twoSum(None, nums, target)  # None for self parameter
else:
    raise Exception('Could not parse input format')
        `
      } else if (problemTitle.includes('reverse')) {
        return `
# Parse Reverse String input
import re
match = re.search(r's = \\[([^\\]]+)\\]', input_str)
if match:
    s = [x.strip().replace('"', '').replace("'", '') for x in match.group(1).split(',')]
    reverseString(None, s)  # None for self parameter
    result = s
else:
    raise Exception('Could not parse input format')
        `
      } else {
        return `
result = solution(None)  # None for self parameter
        `
      }
    }
    return ''
  }

  // Execute code with Judge0 API
  const executeWithJudge0 = async (wrapperCode, testCase, testNumber, resolve) => {
    try {
      const langId = languageMap[selectedLanguage]
      if (!langId) {
        resolve({
          testCase: testNumber,
          passed: false,
          input: testCase.input,
          expected: testCase.expectedOutput,
          actual: 'Language not supported',
          error: 'Language not supported for execution',
          isHidden: testCase.isHidden
        })
        return
      }

      // Submit code for execution
      const { data: tokenData } = await axios.post(
        'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=false',
        {
          source_code: wrapperCode,
          language_id: langId,
          stdin: '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '01d7f3e484msh5c2e08b5f646bc1p1f21a6jsnd572ad2be1bc',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          },
        }
      )

      const token = tokenData.token

      // Poll for result
      let tries = 0
      const maxTries = 10
      
      const checkResult = async () => {
        try {
          const response = await axios.get(
            `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=false`,
            {
              headers: {
                'X-RapidAPI-Key': '01d7f3e484msh5c2e08b5f646bc1p1f21a6jsnd572ad2be1bc',
                'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
              },
            }
          )

          const result = response.data
          
          if (result.status.id <= 2) {
            // Still processing
            tries++
            if (tries < maxTries) {
              setTimeout(checkResult, 1000)
            } else {
              resolve({
                testCase: testNumber,
                passed: false,
                input: testCase.input,
                expected: testCase.expectedOutput,
                actual: 'Timeout',
                error: 'Execution timeout',
                isHidden: testCase.isHidden
              })
            }
          } else {
            // Completed - parse the JSON output
            if (result.stdout) {
              try {
                // Clean up the stdout and parse JSON
                const cleanOutput = result.stdout.trim()
                const testResult = JSON.parse(cleanOutput)
                
                // Format the actual result for display
                let displayActual = testResult.actual
                try {
                  const parsedActual = JSON.parse(testResult.actual)
                  if (Array.isArray(parsedActual)) {
                    displayActual = `[${parsedActual.join(', ')}]`
                  } else {
                    displayActual = testResult.actual
                  }
                } catch {
                  displayActual = testResult.actual
                }
                
                resolve({
                  testCase: testNumber,
                  passed: testResult.passed,
                  input: testResult.input,
                  expected: testResult.expected,
                  actual: displayActual,
                  error: testResult.error || null,
                  isHidden: testCase.isHidden
                })
              } catch (parseError) {
                // If JSON parsing fails, try to extract meaningful info
                const output = result.stdout.trim()
                resolve({
                  testCase: testNumber,
                  passed: false,
                  input: testCase.input,
                  expected: testCase.expectedOutput,
                  actual: output,
                  error: `Parse error: ${parseError.message}`,
                  isHidden: testCase.isHidden
                })
              }
            } else if (result.stderr) {
              resolve({
                testCase: testNumber,
                passed: false,
                input: testCase.input,
                expected: testCase.expectedOutput,
                actual: 'Runtime Error',
                error: result.stderr,
                isHidden: testCase.isHidden
              })
            } else if (result.compile_output) {
              resolve({
                testCase: testNumber,
                passed: false,
                input: testCase.input,
                expected: testCase.expectedOutput,
                actual: 'Compilation Error',
                error: result.compile_output,
                isHidden: testCase.isHidden
              })
            } else {
              resolve({
                testCase: testNumber,
                passed: false,
                input: testCase.input,
                expected: testCase.expectedOutput,
                actual: 'No Output',
                error: 'No output generated',
                isHidden: testCase.isHidden
              })
            }
          }
        } catch (error) {
          resolve({
            testCase: testNumber,
            passed: false,
            input: testCase.input,
            expected: testCase.expectedOutput,
            actual: 'Error',
            error: error.message,
            isHidden: testCase.isHidden
          })
        }
      }

      setTimeout(checkResult, 1000)
      
    } catch (error) {
      resolve({
        testCase: testNumber,
        passed: false,
        input: testCase.input,
        expected: testCase.expectedOutput,
        actual: 'Error',
        error: error.message,
        isHidden: testCase.isHidden
      })
    }
  }

  // Display test results in LeetCode style
  const displayTestResults = (results) => {
    let output = `Test Cases: ${results.passed}/${results.total} passed\n\n`
    
    results.details.forEach((detail, index) => {
      if (!detail.isHidden || detail.passed === false) {
        output += `Test Case ${detail.testCase}: ${detail.passed ? '✅ PASS' : '❌ FAIL'}\n`
        output += `Input: ${detail.input}\n`
        output += `Expected: ${detail.expected}\n`
        output += `Output: ${detail.actual}\n`
        if (detail.error) {
          output += `Error: ${detail.error}\n`
        }
        output += '\n'
      }
    })

    if (results.passed === results.total) {
      output += '🎉 All test cases passed!'
    } else {
      output += '❌ Some test cases failed. Please review your solution.'
    }

    setOutput(output)
  }

  // Submit solution for testing
  const submitSolution = async () => {
    if (!problem) return
    
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

  // Handle language change
  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage)
    if (problem) {
      const template = getProblemTemplate(problem, newLanguage)
      setCode(template)
      
      // Debug: Log preload usage
      const hasPreload = problem.preload && problem.preload.find(
        p => p.language.toLowerCase() === newLanguage.toLowerCase()
      )
      console.log(`Language changed to ${newLanguage}. Using ${hasPreload ? 'preload' : 'fallback'} template.`)
    }
  }

  if (!problem) {
    return (
      <div className="problem-solver">
        <div className="loading-message">Loading problem...</div>
      </div>
    )
  }

  return (
    <div className="problem-solver">
      {/* Header */}
      <div className="solver-header">
        <div className="header-left">
          <button 
            className="back-button"
            onClick={() => navigate('/practice')}
          >
            ← Back to Practice
          </button>
          <h1 className="problem-title">{problem.title}</h1>
          <div className="problem-badges">
            <span className={`difficulty-badge ${problem.difficulty.toLowerCase()}`}>
              {problem.difficulty}
            </span>
            <span className="category-badge">{problem.category}</span>
          </div>
        </div>
        
        <div className="header-right">
          <select 
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="language-select"
          >
            {languages.map(lang => (
              <option key={lang.id} value={lang.id}>{lang.name}</option>
            ))}
          </select>
          
          <button 
            onClick={runCode}
            disabled={isRunning}
            className="run-button"
          >
            {isRunning ? 'Running...' : '▶ Run Code'}
          </button>
          
          <button 
            onClick={submitSolution}
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? 'Submitting...' : '🚀 Submit'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="solver-content">
        {/* Left Side - Problem Description */}
        <div className="problem-panel">
          <div className="problem-section">
            <h2>Problem Statement</h2>
            <div className="problem-description">
              {problem.question.split('\\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>

          <div className="problem-section">
            <h2>Examples</h2>
            <div className="test-cases">
              {problem.testCases.filter(tc => !tc.isHidden).map((testCase, index) => (
                <div key={index} className="test-case">
                  <div className="test-case-header">Example {index + 1}</div>
                  <div className="test-input">
                    <strong>Input:</strong>
                    <code>{testCase.input}</code>
                  </div>
                  <div className="test-output">
                    <strong>Output:</strong>
                    <code>{testCase.expectedOutput}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {problem.preload && problem.preload.length > 0 && (
            <div className="problem-section">
              <h2>🔧 Available Templates</h2>
              <div className="preload-info">
                <p>This problem includes starter code templates for the following languages:</p>
                <div className="available-languages">
                  {problem.preload.map((preload, index) => {
                    const isCurrentLanguage = preload.language.toLowerCase() === selectedLanguage.toLowerCase()
                    return (
                      <div 
                        key={index} 
                        className={`language-chip ${isCurrentLanguage ? 'active' : ''}`}
                        onClick={() => handleLanguageChange(preload.language.toLowerCase())}
                      >
                        {preload.language}
                        {isCurrentLanguage && <span className="current-indicator">• Current</span>}
                      </div>
                    )
                  })}
                </div>
                {(() => {
                  const currentPreload = problem.preload.find(
                    p => p.language.toLowerCase() === selectedLanguage.toLowerCase()
                  )
                  return currentPreload && currentPreload.comments && (
                    <div className="template-info">
                      <strong>Template Info:</strong> {currentPreload.comments}
                    </div>
                  )
                })()}
              </div>
            </div>
          )}

          {problem.hints && problem.hints.length > 0 && (
            <div className="problem-section">
              <h2>💡 Hints</h2>
              <div className="hints-list">
                {problem.hints.map((hint, index) => (
                  <div key={index} className="hint-item">
                    <span className="hint-number">{index + 1}</span>
                    <span className="hint-text">{hint}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {testResults && (
            <div className="problem-section">
              <h2>📊 Test Results</h2>
              <div className={`test-results-summary ${testResults.passed === testResults.total ? 'success' : 'failed'}`}>
                <div className="result-status">
                  {testResults.passed === testResults.total ? '✅ All Tests Passed' : '❌ Some Tests Failed'}
                </div>
                <div className="result-summary">
                  <span className="test-count">{testResults.passed}/{testResults.total} test cases passed</span>
                </div>
              </div>
              
              <div className="test-cases-results">
                {testResults.details.map((testDetail, index) => (
                  !testDetail.isHidden && (
                    <div key={index} className={`test-case-result ${testDetail.passed ? 'passed' : 'failed'}`}>
                      <div className="test-case-header">
                        <span className="test-case-number">Test Case {testDetail.testCase}</span>
                        <span className={`test-status ${testDetail.passed ? 'pass' : 'fail'}`}>
                          {testDetail.passed ? '✅ PASS' : '❌ FAIL'}
                        </span>
                      </div>
                      
                      <div className="test-case-details">
                        <div className="test-input">
                          <strong>Input:</strong>
                          <code>{testDetail.input}</code>
                        </div>
                        
                        <div className="test-expected">
                          <strong>Expected:</strong>
                          <code>{testDetail.expected}</code>
                        </div>
                        
                        <div className="test-actual">
                          <strong>Output:</strong>
                          <code className={testDetail.passed ? 'correct' : 'incorrect'}>
                            {testDetail.actual}
                          </code>
                        </div>
                        
                        {testDetail.error && (
                          <div className="test-error">
                            <strong>Error:</strong>
                            <code className="error">{testDetail.error}</code>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                ))}
                
                {testResults.details.some(d => d.isHidden) && (
                  <div className="hidden-tests-info">
                    <p>💡 Some test cases are hidden and will be used for final evaluation</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Side - Code Editor */}
        <div className="editor-panel">
          <div className="editor-header">
            <span className="editor-title">Solution</span>
            <div className="editor-info">
              <span className="language-indicator">{selectedLanguage}</span>
              {problem && problem.preload && problem.preload.find(p => p.language.toLowerCase() === selectedLanguage.toLowerCase()) && (
                <span className="preload-indicator" title="Using problem-specific template">
                  📝 Template
                </span>
              )}
            </div>
          </div>
          
          <div className="code-editor-container">
            <Editor
              height="60%"
              language={selectedLanguage}
              value={code}
              onChange={(value) => setCode(value || '')}
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
                renderWhitespace: 'selection',
                selectOnLineNumbers: true,
                matchBrackets: 'always',
                autoClosingBrackets: 'always',
                autoClosingQuotes: 'always'
              }}
            />
          </div>

          {/* Output Panel */}
          <div className="output-section">
            <div className="output-header">
              <span className="output-title">Output</span>
              <button 
                onClick={() => setOutput('')}
                className="clear-output-btn"
              >
                Clear
              </button>
            </div>
            <div className="output-content">
              {output ? (
                <pre className="output-text">{output}</pre>
              ) : (
                <div className="output-placeholder">
                  No output yet. Run your code to see results.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemSolver
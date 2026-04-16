// Dummy practice problems for seeding the database - new structure
export const dummyProblems = [
  {
    questionId: "PROB001",
    questionContent: [
      {
        title: "Two Sum",
        question: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume each input has exactly one solution.",
        output: "An array with two indices [i, j]",
        testCases: [
          { input: "nums = [2,7,11,15], target = 9", expectedOutput: "[0,1]", isHidden: false },
          { input: "nums = [3,2,4], target = 6", expectedOutput: "[1,2]", isHidden: false },
          { input: "nums = [3,3], target = 6", expectedOutput: "[0,1]", isHidden: true }
        ],
        defaultCode: {
          language: "JavaScript",
          code: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
}`
        }
      }
    ],
    difficulty: "Easy",
    category: "Arrays",
    language: "JavaScript",
    hints: ["Use a hash map to store seen numbers and their indices"],
    timeLimit: 60,
    memoryLimit: 64,
    tags: ["array", "hash-table", "easy"]
  },

  {
    questionId: "PROB002",
    questionContent: [
      {
        title: "Reverse String",
        question: "Write a function that reverses a string in-place given as an array of characters.",
        output: "The same array mutated to contain the characters in reverse order",
        testCases: [
          { input: "s = ['h','e','l','l','o']", expectedOutput: "['o','l','l','e','h']", isHidden: false },
          { input: "s = ['H','a','n','n','a','h']", expectedOutput: "['h','a','n','n','a','H']", isHidden: false },
          { input: "s = ['a']", expectedOutput: "['a']", isHidden: true }
        ],
        defaultCode: {
          language: "JavaScript",
          code: `function reverseString(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++; right--;
  }
  return s;
}`
        }
      }
    ],
    difficulty: "Easy",
    category: "String",
    language: "JavaScript",
    hints: ["Use two pointers and swap elements"],
    timeLimit: 30,
    memoryLimit: 32,
    tags: ["string", "two-pointers", "easy"]
  },

  {
    questionId: "PROB003",
    questionContent: [
      {
        title: "Valid Parentheses",
        question: "Given a string containing only the characters '()[]{}', determine if it is valid: open brackets must be closed by the same type and in the correct order.",
        output: "Boolean true/false",
        testCases: [
          { input: "s = '()'", expectedOutput: "true", isHidden: false },
          { input: "s = '()[]{}'", expectedOutput: "true", isHidden: false },
          { input: "s = '(]'", expectedOutput: "false", isHidden: false },
          { input: "s = '([)]'", expectedOutput: "false", isHidden: true }
        ],
        defaultCode: {
          language: "JavaScript",
          code: `function isValid(s) {
  const stack = [];
  const map = {')':'(', '}':'{', ']':'['};
  for (let ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') stack.push(ch);
    else {
      if (!stack.length || stack.pop() !== map[ch]) return false;
    }
  }
  return stack.length === 0;
}`
        }
      }
    ],
    difficulty: "Easy",
    category: "Stack",
    language: "JavaScript",
    hints: ["Use a stack to match opening/closing brackets"],
    timeLimit: 90,
    memoryLimit: 64,
    tags: ["stack", "string", "easy"]
  },

  {
    questionId: "PROB004",
    questionContent: [
      {
        title: "Maximum Subarray",
        question: "Given an integer array nums, find the contiguous subarray which has the largest sum and return its sum.",
        output: "An integer representing the maximum subarray sum",
        testCases: [
          { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6", isHidden: false },
          { input: "nums = [1]", expectedOutput: "1", isHidden: false },
          { input: "nums = [5,4,-1,7,8]", expectedOutput: "23", isHidden: false },
          { input: "nums = [-1]", expectedOutput: "-1", isHidden: true }
        ],
        defaultCode: {
          language: "JavaScript",
          code: `function maxSubArray(nums) {
  let maxSoFar = nums[0], maxEndingHere = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}`
        }
      }
    ],
    difficulty: "Medium",
    category: "Dynamic Programming",
    language: "JavaScript",
    hints: ["Kadane's algorithm: maintain current and best sums"],
    timeLimit: 120,
    memoryLimit: 64,
    tags: ["array", "dynamic-programming", "medium"]
  }
];

      {
        language: "Java",
        code: `public class Solution {
    public int maxSubArray(int[] nums) {
        // Your code here - implement Kadane's algorithm
        
    }
}`,
        template: "class",
        imports: [],
        comments: "Find the maximum sum of contiguous subarray using Kadane's algorithm"
      },
      {
        language: "C++",
        code: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Your code here - implement Kadane's algorithm
        
    }
};`,
        template: "class",
        imports: ["<vector>", "<algorithm>"],
        comments: "Find the maximum sum of contiguous subarray using Kadane's algorithm"
      }
    ]
  },

  {
    questionId: "PROB005",
    title: "Binary Search",
    question: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.\n\nYou must write an algorithm with O(log n) runtime complexity.\n\nExample:\nInput: nums = [-1,0,3,5,9,12], target = 9\nOutput: 4\nExplanation: 9 exists in nums and its index is 4",
    difficulty: "Easy",
    category: "Binary Search",
    language: "JavaScript",
    requiredAnswer: `function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}`,
    testCases: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        expectedOutput: "4",
        isHidden: false
      },
      {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        expectedOutput: "-1",
        isHidden: false
      },
      {
        input: "nums = [5], target = 5",
        expectedOutput: "0",
        isHidden: true
      }
    ],
    hints: [
      "Use the divide and conquer approach",
      "Compare the middle element with target to decide which half to search"
    ],
    timeLimit: 60,
    memoryLimit: 32,
    tags: ["array", "binary-search", "easy"],
    preload: [
      {
        language: "JavaScript",
        code: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    // Your code here - implement binary search
    
}`,
        template: "function",
        imports: [],
        comments: "Implement binary search to find target in sorted array"
      },
      {
        language: "Python",
        code: `def search(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    # Your code here - implement binary search
    pass`,
        template: "function",
        imports: [],
        comments: "Implement binary search to find target in sorted array"
      },
      {
        language: "Java",
        code: `public class Solution {
    public int search(int[] nums, int target) {
        // Your code here - implement binary search
        
    }
}`,
        template: "class",
        imports: [],
        comments: "Implement binary search to find target in sorted array"
      },
      {
        language: "C++",
        code: `#include <vector>
using namespace std;

class Solution {
public:
    int search(vector<int>& nums, int target) {
        // Your code here - implement binary search
        
    }
};`,
        template: "class",
        imports: ["<vector>"],
        comments: "Implement binary search to find target in sorted array"
      }
    ]
  },

  {
    questionId: "PROB006",
    title: "Palindrome Number",
    question: "Given an integer x, return true if x is palindrome integer.\n\nAn integer is a palindrome when it reads the same backward as forward.\n\nExample:\nInput: x = 121\nOutput: true\nExplanation: 121 reads as 121 from left to right and from right to left.\n\nInput: x = -121\nOutput: false\nExplanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
    difficulty: "Easy",
    category: "Math",
    language: "JavaScript",
    requiredAnswer: `function isPalindrome(x) {
    if (x < 0) return false;
    
    let original = x;
    let reversed = 0;
    
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    return original === reversed;
}`,
    testCases: [
      {
        input: "x = 121",
        expectedOutput: "true",
        isHidden: false
      },
      {
        input: "x = -121",
        expectedOutput: "false",
        isHidden: false
      },
      {
        input: "x = 10",
        expectedOutput: "false",
        isHidden: false
      },
      {
        input: "x = 0",
        expectedOutput: "true",
        isHidden: true
      }
    ],
    hints: [
      "Negative numbers are not palindromes",
      "Reverse the number and compare with original"
    ],
    timeLimit: 45,
    memoryLimit: 32,
    tags: ["math", "easy"],
    preload: [
      {
        language: "JavaScript",
        code: `/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    // Your code here
    
}`,
        template: "function",
        imports: [],
        comments: "Check if integer is palindrome without converting to string"
      },
      {
        language: "Python",
        code: `def is_palindrome(x):
    """
    :type x: int
    :rtype: bool
    """
    # Your code here
    pass`,
        template: "function",
        imports: [],
        comments: "Check if integer is palindrome without converting to string"
      },
      {
        language: "Java",
        code: `public class Solution {
    public boolean isPalindrome(int x) {
        // Your code here
        
    }
}`,
        template: "class",
        imports: [],
        comments: "Check if integer is palindrome without converting to string"
      },
      {
        language: "C++",
        code: `class Solution {
public:
    bool isPalindrome(int x) {
        // Your code here
        
    }
};`,
        template: "class",
        imports: [],
        comments: "Check if integer is palindrome without converting to string"
      }
    ]
  },

  {
    questionId: "PROB007",
    title: "Fibonacci Number",
    question: "The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.\n\nF(0) = 0, F(1) = 1\nF(n) = F(n - 1) + F(n - 2), for n > 1.\n\nGiven n, calculate F(n).\n\nExample:\nInput: n = 2\nOutput: 1\nExplanation: F(2) = F(1) + F(0) = 1 + 0 = 1.",
    difficulty: "Easy",
    category: "Dynamic Programming",
    language: "JavaScript",
    requiredAnswer: `function fib(n) {
    if (n <= 1) return n;
    
    let prev2 = 0;
    let prev1 = 1;
    
    for (let i = 2; i <= n; i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}`,
    testCases: [
      {
        input: "n = 2",
        expectedOutput: "1",
        isHidden: false
      },
      {
        input: "n = 3",
        expectedOutput: "2",
        isHidden: false
      },
      {
        input: "n = 4",
        expectedOutput: "3",
        isHidden: false
      },
      {
        input: "n = 0",
        expectedOutput: "0",
        isHidden: true
      }
    ],
    hints: [
      "You can solve this iteratively to avoid recursion overhead",
      "Only keep track of the last two numbers"
    ],
    timeLimit: 30,
    memoryLimit: 32,
    tags: ["math", "dynamic-programming", "easy"],
    preload: [
      {
        language: "JavaScript",
        code: `/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
    // Your code here - implement iterative solution
    
}`,
        template: "function",
        imports: [],
        comments: "Calculate nth Fibonacci number iteratively for better performance"
      },
      {
        language: "Python",
        code: `def fib(n):
    """
    :type n: int
    :rtype: int
    """
    # Your code here - implement iterative solution
    pass`,
        template: "function",
        imports: [],
        comments: "Calculate nth Fibonacci number iteratively for better performance"
      },
      {
        language: "Java",
        code: `public class Solution {
    public int fib(int n) {
        // Your code here - implement iterative solution
        
    }
}`,
        template: "class",
        imports: [],
        comments: "Calculate nth Fibonacci number iteratively for better performance"
      },
      {
        language: "C++",
        code: `class Solution {
public:
    int fib(int n) {
        // Your code here - implement iterative solution
        
    }
};`,
        template: "class",
        imports: [],
        comments: "Calculate nth Fibonacci number iteratively for better performance"
      }
    ]
  },

  {
    questionId: "PROB008",
    title: "Merge Two Sorted Lists",
    question: "You are given the heads of two sorted linked lists list1 and list2.\n\nMerge the two lists in a sorted manner and return the head of the merged linked list.\n\nThe list should be made by splicing together the nodes of the first two lists.\n\nExample:\nInput: list1 = [1,2,4], list2 = [1,3,4]\nOutput: [1,1,2,3,4,4]",
    difficulty: "Easy",
    category: "Linked List",
    language: "JavaScript",
    requiredAnswer: `function mergeTwoLists(list1, list2) {
    const dummy = { next: null };
    let current = dummy;
    
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    current.next = list1 || list2;
    
    return dummy.next;
}`,
    testCases: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        expectedOutput: "[1,1,2,3,4,4]",
        isHidden: false
      },
      {
        input: "list1 = [], list2 = []",
        expectedOutput: "[]",
        isHidden: false
      },
      {
        input: "list1 = [], list2 = [0]",
        expectedOutput: "[0]",
        isHidden: true
      }
    ],
    hints: [
      "Use a dummy node to simplify the logic",
      "Compare the values and attach the smaller node to the result"
    ],
    timeLimit: 90,
    memoryLimit: 64,
    tags: ["linked-list", "recursion", "easy"],
    preload: [
      {
        language: "JavaScript",
        code: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
    // Your code here
    
}`,
        template: "function",
        imports: [],
        comments: "Merge two sorted linked lists into one sorted list"
      },
      {
        language: "Python",
        code: `# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

def merge_two_lists(list1, list2):
    """
    :type list1: ListNode
    :type list2: ListNode
    :rtype: ListNode
    """
    # Your code here
    pass`,
        template: "function",
        imports: [],
        comments: "Merge two sorted linked lists into one sorted list"
      },
      {
        language: "Java",
        code: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
public class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Your code here
        
    }
}`,
        template: "class",
        imports: [],
        comments: "Merge two sorted linked lists into one sorted list"
      },
      {
        language: "C++",
        code: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        // Your code here
        
    }
};`,
        template: "class",
        imports: [],
        comments: "Merge two sorted linked lists into one sorted list"
      }
    ]
  }
];

// Console log to see the problems when running directly
console.log('Total problems:', dummyProblems.length);
console.log('\nProblem titles:');
dummyProblems.forEach((problem, index) => {
  console.log(`${index + 1}. ${problem.title} (${problem.difficulty})`);
});

export default dummyProblems;
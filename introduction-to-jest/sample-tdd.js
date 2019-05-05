// My test runner framework

function assert (condition, errMessage) {
  if (condition) {
    console.log(`Test passed`)
  } else {
    console.log(`TEST FAILED!!!!!!! : `, errMessage)
  }
}

// My implementation

function codeInterviewProblem1 (input) {
  // ... Do something
}

assert(codeInterviewProblem1(2) === expectedResult1, '')
assert(codeInterviewProblem1(5) === expectedResult2, '')

// Run by node interview.js

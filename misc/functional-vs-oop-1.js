// Object-oriented approach

class User {
  constructor () {
    this.verificationDate = null
  }

  isVerified () {
    return !!this.verificationDate
  }
}

// Functional approach

function isVerified (user) {
  return !!user.verificationDate
}

/* Benefit */

// 1. No "this" quirk

const user = new User()
const func = user.isVerified

// console.log(func()) <--- Breaks
console.log(isVerified(user))


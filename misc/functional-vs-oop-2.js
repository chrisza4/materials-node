// 2. Free polymorphism

class User {
  constructor () {
    this.verificationDate = null
  }

  getFullName () {
    return`${user.firstName} ${user.lastName}`
  }
}

class Admin {
  constructor () {
    this.firstName = ''
    this.lastName = ''
  }

  getFullName () {
    // ????? Extends user will get so many functions. Jungle-monkey-banana
  }
}

// =============

function getFullName (user) {
  return`${user.firstName} ${user.lastName}`
}

const admin = {
  // ....
  firstName: '',
  lastName: ''
}

const user = {
  // ... user properties
  firstName: '',
  lastName: ''
}

getFullName(user)   // <--- Works
getFullName(admin)  // <--- Also works





// 3. Composition over inheritance, in fine-grained level

class CompactUser {
  constructor (props) {
    this.firstname = ''
    this.lastname = ''
  }
}

class User extends CompactUser {
  constructor () {
    this.username = ''
    this.password = ''
  }
}

// We get all operations from CompactUser

function createUser (compactUser) {
  return {
    // Cherry pick only operation that we want
  }
}

// *** SIMPLE WITH NO MAGIC ***

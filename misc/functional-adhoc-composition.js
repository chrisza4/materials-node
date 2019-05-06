class StringHelper {
  constructor (str) {

  }

  isLowerCase () {

  }
}

class RedisHelper {
  constructor () {

  }

  // Must invoke this
  connect () {

  }

  get () {

  }

  set () {

  }
}

// ======================================

function connectRedis () {
  // Connect to redis
  return {
    get: () => { },
    set: () => { }
  }
}

function isLowerCase (str1, str2) {
  // ====
}

// We know from paradigm that isLowerCase can be use adhoc-ly. No initialization and anything require

// It is unclear for helper, and not idiomatic on which class can be used adhoc-ly and which class require itself.

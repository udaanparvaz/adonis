'use strict'

const TokenMongoose = use('AdonisMongoose/Src/Token')

class Token extends TokenMongoose {

  static expires () {
    return 5
  }
  static get schema () {
    // Edit your schema here
    return super.schema
  }
  static getUserFields (type) {
    return '_id email'
  }
}

module.exports = Token.buildModel('Token')

'use strict'

const BaseModel = use('MongooseModel')

const mongoose = use('Adonis/Addons/Mongoose')
const { Schema } = mongoose

const Hash = use('Hash')

/**
 * @class UserMongo
 */
class UserMongo extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'UserMongoHook.method')
    // Indexes:
    // this.index({}, {background: true})
    this.addHook('beforeSave', 'UserMongoHook.hashPassword')
  }
  /**
   * UserMongo's schema
   */
  static get schema() {
    return {
      email: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      enrolled_courses: [Schema.Types.Object],
    }
  }
}

module.exports = UserMongo.buildModel('UserMongo')

'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('Adonis/Addons/Mongoose')
const { Schema } = mongoose

/**
 * @class courses
 */
class Courses extends BaseModel {
  /**
   * Exclude created_at and updated_at from the model
   */
  static get timestamps () {
    return false
  }
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'coursesHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * courses's schema
   */
  static get schema () {
    return {
        name:{type:String,required:true},
        category_name:{type:String,required:true},
        description:{type:String,required:true},
        lesson_pack:[{_id:false,lesson_id:{type:Schema.Types.ObjectId},metadata:{type:Schema.Types.Object}}],
        enrolled:[Schema.Types.ObjectId],
    }
  }
}

module.exports = Courses.buildModel('Courses')

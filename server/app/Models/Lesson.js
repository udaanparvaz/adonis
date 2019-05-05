'use strict'

const BaseModel = use('MongooseModel')

const mongoose = use('Adonis/Addons/Mongoose')
const { Schema } = mongoose

/**
 * @class Lesson
 */
class Lesson extends BaseModel {
  /**
   * Exclude created_at and updated_at from the model
   */
  static get timestamps () {
    return false
  }
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'LessonHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Lesson's schema
   */
  static get schema () {
    const meta_data = new Schema({title:String,src:String,type:String})
    return {
      name:{type:String,required:true},
      course_id:{type:Schema.Types.ObjectId,ref:'Courses'},
      description:{type:String,required:true},
      modules:[{title:{type:String},metadata:[meta_data]}],
      index:{type:Number}
    }
  }
}

module.exports = Lesson.buildModel('Lesson')

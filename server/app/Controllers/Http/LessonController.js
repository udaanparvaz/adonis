'use strict'

const Lessons = use('App/Models/Lesson')
const Courses = use('App/Models/Courses')
const mongoose = use('Adonis/Addons/Mongoose')
const User = use('App/Models/UserMongo')


class LessonController {

    async getLesson({ request }){
        const {course} = request.all()
        return await Lessons.aggregate([ { $match:{course_id:new mongoose.Types.ObjectId(course) } },{$sort:{index:1}} ])
        
    }

    async createLesson({ request }){
           const {course_id, name} = request.all()
           const lesson_id = await Lessons.create(request.all())
           console.log(lesson_id._id)
           await Courses.findOneAndUpdate({_id:course_id},
            {$addToSet: {lesson_pack :  {lesson_id:lesson_id._id,metadata:{name}} } } )
        return 'Lesson Created' 
    }

    async markProgress({ request,auth }){
        const {metaid,course_id} = request.all()
        const user = await auth.getUser()
        return await User.findByIdAndUpdate({
            _id:user._id,
            "enrolled_courses.course":new mongoose.Types.ObjectId(course_id)
        },{$push:{"enrolled_courses.0.progress":new mongoose.Types.ObjectId(metaid)}})
    }

}

module.exports = LessonController

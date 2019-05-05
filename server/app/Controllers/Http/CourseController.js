'use strict'

const Courses = use('App/Models/Courses')
const User = use('App/Models/UserMongo')
const mongoose = use('Adonis/Addons/Mongoose')

class CourseController {
    async enrolled({ auth }){
        const user = await auth.getUser()
        const result = await User.findOne({_id:user._id}).populate('Courses').exec()
        return result.enrolled_courses;

    }

    async enroll({ request , auth }){
        const {course_id, course_name } = request.all()
        const data = {'course':course_id, 'course_name':course_name }
        const course_data  =  await Courses.findOne({_id:course_id})
        await delete course_data['enrolled']
        const user = await auth.getUser()
        await User.findOneAndUpdate(user._id,
                {$addToSet: {enrolled_courses : course_data }} 
        )
        await Courses.findOneAndUpdate({_id:course_id},
                {$addToSet: {enrolled :  user._id }}
            )
        return 'enrolled'
    }
    
    

    async unenroll({ request , auth}){
        const {course_id} = request.all()
        const user = await auth.getUser()
        await User.findByIdAndUpdate(user._id, 
                {$pull: {enrolled_courses :  {_id:new mongoose.Types.ObjectId(course_id)} }}
        )

        await Courses.findOneAndUpdate({_id:course_id},
            {$pull: {enrolled :  user._id}}
        )

        return 'removed'
    }

    async getPopularCourses({ request }){
        return await Courses.aggregate([ { $project:{ category_name:1,name:1,enrolled:{ $size : '$enrolled'} } },
         { $group : {_id:'$category_name',courses:{$push:'$$ROOT'} } },{$sort : {enrolled:-1}} ])
    }

    async getAllCourses({ request }){
        // return await Courses.aggregate([{ $group : {_id : '$category_name',courses:{$push:'$$ROOT'} } },{ $sort : {name:1} } ])
        return await Courses.find();
    }

    async create({request}){
        return await Courses.create(request.all())
    }
}

module.exports = CourseController

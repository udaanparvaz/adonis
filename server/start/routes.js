'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(()=>{
  Route.post('register','UserController.register')
  Route.post('login','UserController.login')
}).prefix('api/auth')

Route.group(()=>{
  Route.post('enrolled','CourseController.enrolled')
  Route.post('create','CourseController.create')
  Route.post('enroll','CourseController.enroll')
  Route.post('unenroll','CourseController.unenroll')
  Route.post('getPopularCourses','CourseController.getPopularCourses')
  Route.post('getAllCourses','CourseController.getAllCourses')

  Route.post('createLesson','LessonController.createLesson')
  Route.post('getLesson','LessonController.getLesson')
  Route.post('markProgress','LessonController.markProgress')
  
  
  
  
}).prefix('api').middleware('auth')


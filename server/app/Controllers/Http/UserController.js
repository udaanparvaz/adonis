'use strict'

const User = use('App/Models/UserMongo')

class UserController {
    async register({ request }){
        const {email,password} = request.all()
        await User.create({
            email,password
        })
        return this.login(...arguments)
    }

    async login({request,auth}){
        const {email,password} = request.all()
        const token = await auth.attempt(email,password)
        return token
    }
}

module.exports = UserController

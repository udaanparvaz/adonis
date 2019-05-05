'use strict'

const UserMongoHook = exports = module.exports = {}

const Hash = use('Hash')

UserMongoHook.hashPassword = async (user) => {
    user.password = await Hash.make(user.password)
}

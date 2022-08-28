// const moongose = require('mongoose')
const user = require('./users.model.js')

const findByEmailUserService = (email) => user.findOne({
    email: email
})

const userServiceCreate = async (body) => {
    
return await user.create(body)
}

const userServiceFind = async () =>{
    const allUser = await user.find()
    return allUser
}
const findByIdUserService = (idUser) => User.findById(idUser);

module.exports = {
    findByEmailUserService,
    userServiceCreate,
    userServiceFind,
    findByIdUserService,
}
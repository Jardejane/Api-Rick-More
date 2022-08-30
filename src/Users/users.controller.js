const mongoose = require('mongoose')

const userService = require ("./users.service.js")
// const {user} = require ("./users.service.js")
const userControllerCreate = async (req,res)=>{
    const {name , username, email, password, photograph} = req.body

    if(!name || !username || !email || !password || !photograph){
        return res.status(400).send({
         message: "Need to all fields"
        })
    }
    const emailUser = await userService.findByEmailUserService(email)
    if (emailUser){
        return res.status(400).send({
            message: "User already exists"
        })
    }

    const userNew = await userService.userServiceCreate(req.body)
    .catch((err) => console.log(err))

    if(!userNew){
        return res.status(400).send({
            message: "Error creating a user"
        })
    }

    const token = userService.generateToken(user.id);

    res.status(201).send({
      user: {
        id: user.id,
        name,
        username,
        email,
        avatar,
      },
      token,
    });

}

const userControllerFind = async (req, res) => {
   const users = await userService.userServiceFind()
   if(users.length == 0){
    return res.status(404).send({Message: "No to registered users"})
   }
   res.send(users)
}


module.exports = {
    userControllerCreate,
    userControllerFind,
  }
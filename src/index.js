require("dotenv").config();
const express = require('express');
const cors = require("cors");
const connectDataBase= require('./database/database.js')

const userRoute = require('./Users/users.route.js')
const authRoute = require('./Auth/auth.routes.js')
const charactersRoute = require('./Characters/characters.routes')

const port = process.env.PORT || 130 ;
const app = express()

connectDataBase()

app.use(cors());
app.use(express.json())

app.use("/users", userRoute)
app.use("/auth", authRoute)
app.use("/characters", charactersRoute)

app.listen(port, ()=> {
    console.log(`Server running at the door ${port}`)
})
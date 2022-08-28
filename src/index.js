require("dotenv").config();
const express = require('express');
const cors = require("cors");
const conectDataBase= require('./database/database.js')

const port = process.env.PORT || 130 ;
const app = express()

conectDataBase()

app.use(cors());


app.get("/", (req,res) => {
    res.send({message: "Hello Jane"})
})

app.listen(port, ()=> {
    console.log(`Server running at the door ${port}`)
})
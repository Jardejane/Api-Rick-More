const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
   },
   username: {
    type: String,
    required: true,
    unique: true,
   },
   email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
   },
   password: {
    type: String,
    required:true,
    select: false,
   },
   photograph: {
    type: String,
    required: true,
   }
});

const user = mongoose.model("users", userSchema)

module.exports = user
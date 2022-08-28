const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

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

userSchema.pre("save", async function (next) {
   this.password = await bcrypt.hash(this.password, 10);
   next();
 });

const user = mongoose.model("users", userSchema)

module.exports = user
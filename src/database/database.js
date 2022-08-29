const mongoose = require('mongoose')

const connectDataBase = () =>{
    console.log('connecting with the banck')

    mongoose.connect(process.env.URI_DATABASE ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Bank connected"))
    .catch((err) => console.log(`error connectin to bank ${err}`) )
}

module.exports = connectDataBase;
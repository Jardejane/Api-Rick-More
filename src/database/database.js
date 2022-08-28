const mongose = require('mongoose')

const conectDataBase = () =>{
    // console.log('connecting with the banck')

    mongose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Bank connected"))
    .catch((err) => console.log(`error connectin to bank ${err}`) )
}

module.exports = conectDataBase;
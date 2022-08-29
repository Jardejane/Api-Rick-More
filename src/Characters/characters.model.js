const mongooose = require('mongoose');
const charactersSchema = new mongooose.Schema({
        user: { type: String, required:true },
        name: { type: String, required: true },
        imageUrl: { type: String, required: true },
    
});

const characters = mongooose.model('characters', charactersSchema);

module.exports = characters;

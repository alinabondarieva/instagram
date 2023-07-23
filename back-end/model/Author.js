const {Schema, model} = require("mongoose")

const schema = new Schema({
    nickName: {
        type: String,
        required: true,
        
    },
    following: {
        type: Boolean,
        default: false
    },
    imageUrl: {
        type: String,
    }
})

module.exports = model("Author", schema)
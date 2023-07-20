const {Schema, model} = require("mongoose")

const schema = new Schema({
    nickName: {
        type: String,
        required: true
    },
    following: {
        type: Boolean,
        default: false
    },
    posts:{
        type: Array
    }
})

module.exports = model("Author", schema)
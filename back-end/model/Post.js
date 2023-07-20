const {Schema, model} = require("mongoose")

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    }
})

module.exports = model("Post", schema)
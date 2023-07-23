const {Schema, model} = require("mongoose")

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author",
        required: true
    },
})

module.exports = model("Post", schema)
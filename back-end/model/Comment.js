const {Schema, model} = require("mongoose")

const schema = new Schema({
    comment: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author",
        required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
})

module.exports = model("Comment", schema)
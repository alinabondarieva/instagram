const router = require('express').Router();
const Comment = require("../../model/Comment.js")


router.get('/', async (req, res) => {
    const comment = await Comment.find()
    return res.status(200).json(comment)
})

router.post('/', async (req, res) => {
    const comment = await Comment.find()
    return res.status(200).json(author)
})

module.exports = router;
const router = require('express').Router();
const Post = require("../../model/Post.js")

router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    return res.status(200).json(post)
})

router.get('/', async (req, res) => {
    const posts = await Post.find()
    return res.status(200).json(posts)
})

module.exports = router;
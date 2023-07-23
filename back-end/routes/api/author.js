const router = require('express').Router();
const Author = require("../../model/Author.js")


router.get('/', async (req, res) => {
    const author = await Author.find(req.query)
    return res.status(200).json(author)
})

router.put('/:id', async (req, res) => {
    const author = await Author.findById(req.params.id)
    author.following = !author.following
    await author.save()
    return res.status(200).json(author)
})

router.delete('/:id', async (req, res) => {
    const author = await Author.deleteOne(req.params.id)
    return res.status(200).json({"message": "succsessful delete"})
})


module.exports = router;
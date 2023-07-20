const express = require("express")
const router = express.Router()
const Author = require("../../model/Author")
router.get('/author', async (req, res) => {
    console.log(req);
    const author = await Author.find({})
    console.log(author);
    return res.status(200).json(author)
})

router.put('/author/:id', async (req, res) => {
    const author = await Author.findById(req.params.id)
    author.following = !author.following
    await author.save()
    return res.status(200).json(author)
})

router.delete('/author/:id', async (req, res) => {
    const author = await Author.deleteOne(req.params.id)
    return res.status(200).json({"message": "succsessful delete"})
})



module.exports = router
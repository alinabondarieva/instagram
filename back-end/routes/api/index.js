const router = require('express').Router();
const authorRouter = require('./author.js');
const commentRouter = require('./comment.js');
const postRouter = require('./post.js');

router.use('/authors', authorRouter);
router.use('/posts', postRouter);
router.use('/comments', commentRouter);

module.exports = router;
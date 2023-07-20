const router = require('express').Router();
const authorRouter = require('./author');

router.use('/author', authorRouter);

module.exports = router;

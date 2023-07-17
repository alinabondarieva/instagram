const express = require("express")
const router = express.Router()
const apiRouter = require("./api")
router.use("/api", apiRouter)
if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    router.get('/', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../../frontend', 'build', 'index.html')
      );
    });
  
    router.use(express.static(path.resolve("../frontend/build")));
  
    router.get(/^(?!\/?api).*/, (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../../frontend', 'build', 'index.html')
      );
    });
  }
  module.exports = router
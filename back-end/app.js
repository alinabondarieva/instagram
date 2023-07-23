const express = require("express")
const app = express()
const routes = require("./routes")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000
const URI = "mongodb+srv://pavel:Pavlo04051982@cluster0.vt04srz.mongodb.net/twiter"

app.use(routes)
app.use(express.json())

mongoose.connect(URI)
.then(()=>{
    console.log("db connected");
})
.catch((e)=>{
    console.log(e);
})

app.listen(PORT, ()=>{
    console.log(`Server has been started on port ${PORT}`);
})

module.exports = app;
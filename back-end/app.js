const express = require("express")
const app = express()
const routes = require("./routes")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3000
const URI = "mongodb+srv://pavel:Pavlo04051982@cluster0.vt04srz.mongodb.net/instagram"
app.use(express.json())
app.use(routes)

async function start () {
    try{
        await mongoose.connect(URI)
        app.listen(PORT, ()=>{
            console.log(`Server has been started on port ${PORT}`);
        })
    } catch (e){
        console.log(e)
    }
}
start()



module.exports = app;
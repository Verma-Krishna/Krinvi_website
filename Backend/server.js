const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/Krinvi_trends', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Database is connected successfully")
})
.catch((error)=>{
    console.log("Db is not connected",error)
})


app.use('/',require("./Routes/AuthRoute"))



app.listen("8080",()=>{
    console.log("Server is running successfuly http://localhost:8080")
})
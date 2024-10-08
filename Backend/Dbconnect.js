const mongoose = require("mongoose")

const Dbconnect = ()=>{
    mongoose.set('strictQuery', true);
    mongoose.connect(('mongodb://127.0.0.1:27017/Krinvi_trends', { useNewUrlParser: true, useUnifiedTopology: true }))
.then(()=>{
    console.log("Database is connected successfully")
})
.catch((error)=>{
    console.log("Db is not connected",error)
})
}

module.exports = Dbconnect
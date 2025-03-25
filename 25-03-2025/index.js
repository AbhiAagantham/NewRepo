const express=require('express')
const app=express()
const mongourl="mongodb://localhost:27017/student"
mongoose.connect(mongourl).then(()=>console.log("COnnected to DataBase")).catch((err)=>console.log(err))
app.listen(2000,()=>console.log("server started at port 2000"))
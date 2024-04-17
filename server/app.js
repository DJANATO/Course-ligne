const express = require("express")
const app= express()
const path = require('path')
const cors = require("cors")
app.use(cors())


const userRoute =require('./routes/userRoute')
const coursRoute = require('./routes/coursRoute')

app.use(express.json())

app.use("/files",express.static(path.join(__dirname,"files")))
app.use("/student",userRoute)
app.use('/cours',coursRoute)
app.post("/chat",(req,res)=>{
    console.log(req.body)
    res.end("chat route")
})



app.listen(process.env.port || 5000)
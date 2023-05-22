const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const app = express()
const MongoURI = "mongodb://localhost:27017/student"
mongoose.connect(MongoURI)
    .then(()=>{
        console.log("Connected to DB")
    })
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine','ejs')
app.use("/student",require('./routes'));
app.listen(3333,()=>{
    console.log("Listening on Port 3333")
})
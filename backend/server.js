const express = require("express")
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const User = require("./models/userSchema")

//link the routes to the router file outisde
app.use(express.json());
app.use(require('./router/auth'))

//we have to use this middleware
//as we want our incomning to be read in JSON to avoid using strigify everytime

//.dotenv is used to keep the confidential details safe
//gitignore is used to avoid the selected files from being pushed ot repo
dotenv.config()

//while pasting the link in mongo DB be sure to put password and the database name (after 'mongodb.net')
const DB = process.env.DATABASE//database variable is in.env fo;e
/*
connect return a promise which means yaa toh hoga yeh connect yaa nahi
if promise is resolved we use .then
if not we catch the error
*/


//agr dono same route honge toh jo pehle call hua h woh display hoga
//upar hum auth file ko pehle call kar chuke

// app.get('/gett', (req, res)=>{
//     res.cookie("Test ", "FOOOKEE ME")
//     res.send("Home page from Server file ");
// })

mongoose.connect(DB).then(()=>{
    console.log("Database connection succesful")
}).catch((err)=>{
    console.log("Connection failed", err)
})

app.listen(process.env.PORT, ()=>{
    console.log("Server running at ", process.env.PORT)
});
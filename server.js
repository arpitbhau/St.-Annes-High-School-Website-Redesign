// JAI SHREE RAM

const express = require("express")
const fs = require("fs")
const app = express() 
const multer = require("multer")
const upload = require("./config/multerConfig")
const cookieParser = require("cookie-parser")
const crypto = require("crypto")
const bodyParser = require("body-parser")
const path = require("path")
const { initialiseFirebaseApp , uploadProccessedData , getPostsData , deleteDocumentsByCondition} = require("./libs/firebase")
const session = require("express-session")



// cookieParser for accessing cookies
app.use(cookieParser())

// setting bodyParser for multer file upload data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// static files setup
app.use(express.static("./public"))

// setting up express session

app.use(session({
    saveUninitialized: false , 
    resave: false , 
    secret: "wsedrfgthujkfdfghjkljhgfrdtesedfghjkljhgfdxcvbnmkjhgytfrdeszdxfgchjuikohugytfdresdxf"
}))


// set ejs as template engine
app.set("view engine" , "ejs")


// initialise firebase app
initialiseFirebaseApp()




app.get("/"  , function (req , res) {
    res.render("index")
})

app.get("/about"  , function (req , res) {
    res.render("about")
})

app.get("/creator"  , function (req , res) {
    res.render("creator")
})

app.get("/code"  , function (req , res) {
    res.render("code")
})

app.get("/events"  , function (req , res) {
    res.render("events")
})

app.get("/staff-details"  , function (req , res) {
    res.render("staff-details")
})

app.get("/announce"  , function (req , res) {
    res.render("announce")
})

app.get("/contact"  , function (req , res) {
    res.render("contact")
})

app.get("/login" , function (req , res) {

    res.render("login")


})

app.get("/createPost" , (req , res) => {
    res.render("createPost")
    
})

app.post("/createPost" , upload.single("postImg") , (req , res) => {

    let currTime = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}  ${new Date().getHours()}:${new Date().getMinutes() }`
    
    const postData = {subject: `${req.body.subject}` , desc: `${req.body.desc}` , postImg: `${req.file.path}` , uploadTime: currTime , perfectTime: new Date(Date.now()) , visibility: "visible"}

    uploadProccessedData(postData)

    res.redirect("/createPost")


})

app.get("/get-data" , async (req , res) => {
    res.send(await deleteDocumentsByCondition("index" , "==" , "1"))
})


app.listen(3000 , () => {
    console.log("Server Started")
})
// JAI SHREE RAM


const multer = require("multer")
const path = require("path")
const {generateRandomString} = require("../libs/helper")



const storage = multer.diskStorage({
    destination: function (req , file , cb) {
        cb(null , "uploads/")
    } ,
    filename: function (req , file , cb) {
        cb(null , `${generateRandomString(25)}${path.extname(file.originalname)}`)
    }
})


const upload = multer({storage: storage})


// exporting upload variable

module.exports = upload
// Jai Shree Ram


const crypto = require("crypto")


// generating random string function
function generateRandomString(length) {
    return crypto.randomBytes(length).toString("hex").toLowerCase()
}


const errorHandler = (err , message) => {
    console.log(`Error was related to ${message}`)
    console.log(`Specified Error : ${err}`)
}


module.exports = {
    generateRandomString ,
    errorHandler
}
const { default: mongoose } = require("mongoose")

const connection = async () =>{
    try {
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/travel-agency")
    console.log("connection establised")
        
    } catch (error) {
        console.log(error)
        console.log("db connection failed")
    }
}

module.exports = connection
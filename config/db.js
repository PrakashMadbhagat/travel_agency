const mongoose  = require("mongoose")

const connection = async () =>{
    try {
    const db = await mongoose.connect(process.env.MONGO_URI)
    console.log("connection establised")
        
    } catch (error) {
        console.log("db connection failed :>" , error.message)
    }
}

module.exports = connection
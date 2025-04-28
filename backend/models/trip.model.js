const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    adminId : { type : mongoose.Schema.Types.ObjectId , ref : 'User'} ,
    img : { type: String , required: true },
    tripName : { type: String , required: true },
    discription : { type: String , required: true },
    price : { type: Number , required: true },
    personLimitation : { type: Number , required: true },
    createdAt: { type: Date, default: Date.now },
});

const tripModel = mongoose.model("Trip", tripSchema);
module.exports = tripModel;
  
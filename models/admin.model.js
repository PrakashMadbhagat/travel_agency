const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({

});

const adminModel = mongoose.model("User", adminSchema);
module.exports = adminModel;
  
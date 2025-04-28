const mongoose = require("mongoose");

const tripbookingSchema = new mongoose.Schema({
    tripId: { type: mongoose.Schema.Types.ObjectId, ref: "Trip", required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    person: { type: Number, required: true },
    bookedAt: { type: Date, default: Date.now },
});

const TripBooking = mongoose.model("TripBooking", tripbookingSchema);
module.exports = TripBooking;

const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  customerId: String,
  petId: String,
  service: String,
  date: Date,
  status: {
    type: String,
    default: "Pending"
  }
});

module.exports = mongoose.model("Booking", BookingSchema);

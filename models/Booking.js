const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  ownerName: String,
  phone: String,
  email: String,

  petName: String,
  breed: String,
  petAge: String,
  petWeight: String,
  petType: String,

  service: String,
  date: String,
  timeSlot: String,

  address: String,
  notes: String,

  price: {
    type: Number,
    default: 0
  },

  status: {
    type: String,
    default: "Pending"
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("Booking", bookingSchema);

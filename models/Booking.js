const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({

  ownerName: String,
  phone: String,
  email: String,

  petName: String,
  petType: String,
  breed: String,
  petAge: Number,
  petWeight: Number,

  service: String,

  date: String,
  timeSlot: String,

  address: String,
  notes: String,

  status: {
    type: String,
    default: "Pending"
  }

}, {
  timestamps: true
});

module.exports =
  mongoose.model(
    "Booking",
    BookingSchema
  );

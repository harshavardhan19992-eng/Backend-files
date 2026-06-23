const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  ownerId: String,
  petName: String,
  breed: String,
  age: Number,
  size: String,
  notes: String
});

module.exports = mongoose.model("Pet", PetSchema);

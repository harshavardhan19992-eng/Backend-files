const router = require("express").Router();
const Booking = require("../models/Booking");

router.get("/", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

router.post("/", async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json(booking);
});

module.exports = router;

const router = require("express").Router();
const Booking = require("../models/Booking");

router.get("/", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

router.get("/customer/:phone", async (req, res) => {
  try {

    const bookings = await Booking.find({
      phone: req.params.phone
    });

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});
router.put("/:id", async (req, res) => {

  const booking =
    await Booking.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status
      },
      {
        new: true
      }
    );

  res.json(booking);

});
router.post("/", async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json(booking);
});

module.exports = router;

const router = require("express").Router();

router.get("/stats", (req, res) => {
  res.json({
    customers: 0,
    bookings: 0,
    revenue: 0
  });
});

module.exports = router;

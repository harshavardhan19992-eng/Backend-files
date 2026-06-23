const router = require("express").Router();

router.get("/", (req, res) => {
  res.json([
    {
      name: "Basic Bath",
      price: 799
    },
    {
      name: "Premium Bath",
      price: 999
    },
    {
      name: "Luxury Spa Bath",
      price: 1499
    }
  ]);
});

module.exports = router;

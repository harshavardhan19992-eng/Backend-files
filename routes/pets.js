const router = require("express").Router();
const Pet = require("../models/Pet");

router.get("/", async (req, res) => {
  const pets = await Pet.find();
  res.json(pets);
});

router.post("/", async (req, res) => {
  const pet = await Pet.create(req.body);
  res.json(pet);
});

module.exports = router;

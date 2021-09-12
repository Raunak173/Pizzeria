const express = require("express");
const router = express.Router();
const pizza = require("../models/PizzaModel");

router.get("/getallpizzas", async (req, res) => {
  try {
    const pizzas = await pizza.find({});
    res.send(pizzas);
  } catch (error) {
    return res.status(400).json("server error");
  }
});

module.exports = router;

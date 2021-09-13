const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

router.post("/register", async (req, res) => {
  const { name, email, password, address } = req.body;
  const newUser = new User({ name, email, password, address });

  try {
    newUser.save();
    res.send("User Registered Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;

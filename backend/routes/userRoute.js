const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

router.post("/register", async (req, res) => {
  const { name, email, password, address } = req.body;
  const newUser = await new User({ name, email, password, address });

  try {
    newUser.save();
    res.send("User registered successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        address: user[0].address,
        isAdmin: user[0].isAdmin,
        id: user[0].id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "User login failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;

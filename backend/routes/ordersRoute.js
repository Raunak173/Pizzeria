const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51JZVxrSCddxL2LCkokmsUOyyQ6zbcb8YbkKZS9TKk14sRxZV7Y6qkiA76UEWkne3NjACvNnCn2BH55hnKBNJwf6600qaq1u0X7"
);

router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      res.send("Payment done!");
    } else {
      res.send("Payment failed!");
    }
  } catch (error) {
    return res.status(400).json({ message: "something went wrong" });
  }
});

module.exports = router;

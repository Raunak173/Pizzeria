const express = require("express");
const connectDB = require("./db");
const pizza = require("./models/PizzaModel");
const pizzasRoute = require("./routes/pizzasRoute");
const app = express();

connectDB();

app.use(express.json());

app.use("/api/pizzas/", pizzasRoute);

app.get("/", function (req, res) {
  res.send("hello world");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

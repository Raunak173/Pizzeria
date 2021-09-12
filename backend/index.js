const express = require("express");
const connectDB = require("./db");
const pizza = require("./models/PizzaModel");
const app = express();

connectDB();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/getPizzas", function (req, res) {
  pizza.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

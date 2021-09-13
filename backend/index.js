const express = require("express");
const connectDB = require("./db");
const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const app = express();

connectDB();

app.use(express.json());

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);

app.get("/", function (req, res) {
  res.send("hello world");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

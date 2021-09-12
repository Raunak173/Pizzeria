//This file is used to import our data to the database.

require("dotenv").config();

const pizzaData = require("./data/pizzas");
const connectDB = require("./db.js");
const pizzaModel = require("./models/PizzaModel");

connectDB();

const importData = async () => {
  try {
    await pizzaModel.deleteMany({});

    await pizzaModel.insertMany(pizzaData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();

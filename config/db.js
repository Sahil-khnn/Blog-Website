const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  const MONGO_URL =
    "mongodb+srv://thapa:thapa1@cluster0.plgyael.mongodb.net/?retryWrites=true&w=majority";

  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGO_URL);
    console.log(`Connected to Mongodb Database server`.bgMagenta.white);
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;

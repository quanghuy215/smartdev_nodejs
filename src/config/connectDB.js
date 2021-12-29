require("dotenv").config();
const mongoose = require("mongoose");

let connectDB = () => {
  const URL = process.env.MONGODB_URL;
  mongoose.connect(
    URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("Connected to MongoDB");
    }
  );
};

module.exports = connectDB;

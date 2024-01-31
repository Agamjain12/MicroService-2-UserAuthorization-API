const express = require("express");
const mongoose = require("mongoose");

const User = require("./Models/userModel");

const userRoute = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/user", userRoute);

mongoose
  .connect(
    "mongodb+srv://agamj990:agamjain12@cluster0.kdpzrxs.mongodb.net/User_Authentication?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3001, () => {
      console.log(`node API is running on port 3001`);
    });
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

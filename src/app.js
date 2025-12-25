const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require('./models/user');

app.post("/signup", async (req,res) => {
    const user = new User ({
        firstName: "Thenvanthi",
        lastName: "V",
        emailId: "thenvanthi2003@gmail.com",
        password: "vanathi@123"
    });

    try {
        await user.save();
    res.send("User Added successfull!!");
    } catch (err) {
        res.send(400).send("Error saving the user:" + err.message);
    }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });

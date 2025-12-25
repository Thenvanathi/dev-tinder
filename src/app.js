const express = require('express');

const app = express();

app.get('/getUserData', (req,res) => {
    // Logic of DB call and get user data

    throw new Error("dejworj")
    res.send("User Data Send")
});

app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(500).send("Something went wrong");
    }
});

app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777...");
})
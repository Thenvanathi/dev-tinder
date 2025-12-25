const express = require('express');

const app = express();

// Request Handler

// This will only handle GET calls to /user
app.get("/user", (req,res) => {
    res.send({ firstName: "Thenvanthi", lastName: "V" });
});

app.post("/user", (req,res) => {
    res.send("Data successfully saved to the database!");
});

app.delete("/user", (req,res) => {
    res.send("Deleted successfully!")
});

// this will match all the HTTP method API calls to /test
app.use('/test', (req,res) => {
    res.send("Hello from the server!")
});

app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777...");
});
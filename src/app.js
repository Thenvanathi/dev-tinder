const express = require('express');

const app = express();

//app.use("/route", rH, [rH2, rH3], rH4, rH5);

app.use("/user", 
    (req,res, next) => {
    // Route Handler
    console.log("Handling the route user 1!!")
    next();
    // res.send("Route Handler 1");
},
(req,res, next) => {
    console.log("Handling the route user 2!!")
    // res.send("2nd Route Handler 1");
    next();
},
(req,res,next) => {
    console.log("Handling the route user 3!!")
    // res.send("3nd Route Handler 1");
    next();
},
(req,res,next) => {
    console.log("Handling the route user 4!!")
    // res.send("4nd Route Handler 1");
    next();
},
(req,res) => {
    console.log("Handling the route user 5!!")
    res.send("5nd Route Handler 1");
});

app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777...");
})
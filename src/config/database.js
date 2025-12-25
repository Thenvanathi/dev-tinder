const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
    "mongodb+srv://thenvanathidbuser:p2JF5eevm0fOYPto@devtinder.dknjrg9.mongodb.net/devTinder"
)};

module.exports = connectDB;
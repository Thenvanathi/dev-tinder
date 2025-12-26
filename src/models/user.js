const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
      lowercase: true,
      trim: true,
      require: true,
      unique: true,
      minLength: 4,
      maxLength: 50,
    },
    password: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender data is not valid!");
        }
      },
    },
    photoUrl: {
      type: String,
      default:
        "https://media.istockphoto.com/id/1834886052/vector/man-facial-expressions-with-indifferent-mood-simple-flat-black-and-white-icon-silhouette.jpg?s=612x612&w=0&k=20&c=2V5FO6K2uJYV3xdsL-lZxBmhbo5PskYTK5vhQKhUzkk=",
    },
    about: {
      type: String,
      default: "This is a default about of the user...",
    },
    skills: {
      type: [String],
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

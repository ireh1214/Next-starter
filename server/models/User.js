const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email is required"
    },
    name: {
      type: String,
      trim: true,
      unique: true,
      minlength: 4,
      maxlength: 10,
      required: "Name is required"
    },
    MBTI: {
      type: String,
      minlength: 4,
      maxlength: 4,
      required: "MBTI is required"
    },
    grade: {
      type: String,
      trim: true,
      unique: true,
      minlength: 4,
      maxlength: 10,
      required: "Name is required",
      default: "normal"
    },
    about: {
      type: String,
      trim: true
    },
    // Set 'following' and 'followers' in array so that when they are populated as objects, they are put in an array (to more easily iterate over them)
    following: [{ type: ObjectId, ref: "User" }],
    followers: [{ type: ObjectId, ref: "User" }]
  },
  // Set timestamps to make "createdAt" and "updatedAt" fields automatically */
  { timestamps: true }
);

// To use User.register() when inserting a new user
userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: "Post content is required"
    },
    image: {
      type: String
    },
    likes: [{ type: ObjectId, ref: "User" }],
    comments: [
      {
        text: String,
        createdAt: { type: Date, default: Date.now },
        postedUser: { type: ObjectId, ref: "User" },
        postedMBTI: { type: ObjectId, ref: "User" }
      }
    ],
    postedUser: { type: ObjectId, ref: "User" },
    postedMBTI: { type: ObjectId, ref: "User" },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  // Automatically created index is nice for development, but can result in a performance hit.
  { autoIndex: false }
);

module.exports = mongoose.model("Post", postSchema);

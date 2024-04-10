const mongoose = require("mongoose");

const newsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      required: true, 
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("comments", newsSchema);
module.exports = Comment;
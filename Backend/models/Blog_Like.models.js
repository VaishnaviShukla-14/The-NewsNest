const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: String,
    article: String,
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    likedBy: [String],
    dislikedBy: [String],
},{
    timestamps: true,
  });
const Blog_like = mongoose.model('blog_like', newsSchema);
module.exports = Blog_like;
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  }
},{timestamps: true})

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
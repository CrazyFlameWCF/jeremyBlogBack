const mongoose = require('mongoose');
const User = require('./User');

const blogSchema = new mongoose.Schema({
  title: String,
  email: String,
  markdown: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  tag: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag'
    }
  ]
},{timestamps: true})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
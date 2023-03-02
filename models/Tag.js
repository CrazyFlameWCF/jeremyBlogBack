const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  tag:  {
    type: String,
  },
  blog: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog'
    }
  ]
},{timestamps: true})

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
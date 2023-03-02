const Comment = require('../models/Comments');
const Blog = require('../models/Blog');

exports.registerComment = async (req, res) => {
  const {email, message, id } = req.body;

  try {
    // register Comment to DB
    let newComment = await Comment.create({
      email: email,
      message: message,
    })
    // find article corelated to
    let foundArticle = await Blog.findOne({_id: id})
    // push comment to the article
    foundArticle.comments.push(newComment)
    foundArticle.save()
    // res to frontend
    res.json({
      success: true,
      newComment
    })
  } catch (e) {
    console.log(e)
  }
}
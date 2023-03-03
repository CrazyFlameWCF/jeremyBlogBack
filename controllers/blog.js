const Blog = require('../models/Blog');
const Tag = require('../models/Tag');

exports.blog = async (req, res) => {
  console.log(req.body)
  const { title, tag, email, markdown } = req.body; 
  
  let tempTags = [];
  let createdBlog
  let attempt = 0
  let isFinished = false;
  
  try {
    // && !!blogRegister
    
    if (tag.length > 0 ) {
      tag.forEach( async obj => {
        // see if duplicate tag is in DB == validate
        let foundTag = await Tag.findOne({tag: obj.tag})
        if (!!foundTag) {
          // if there is duplicate, add blog to the tag
          await tempTags.push(foundTag)
          attempt += 1
          if(attempt === tag.length) {
            await createBlog()
            // await pushBlog()
          }
        } else {
          let newTag = await Tag.create({
            tag: obj.tag,
          });
          await tempTags.push(newTag)
          attempt += 1
          if(attempt === tag.length) {
            await createBlog()
            // await pushBlog()
          }
        }
      })
    }

    const createBlog = () => {
        createdBlog = Blog.create({
        title: title,
        markdown: markdown,
        email: email,
        tag: tempTags,
      })
    }

    // const pushBlog = () => {
    //   tempTags.forEach(async (tag) => {
    //     let foundTag = await Tag.findOne({tag: tag.tag})
    //     await foundTag.blog.push(createdBlog)
    //   })
    // }

    res.json({
      success: true,
      createdBlog,
    })
  } catch (e) {
    console.log(e)
  }
}

  exports.viewAll = async (req, res) => {

    try {
      let blog = await Blog.find().sort({createdAt: -1}).populate('comments').populate('tag').exec();
      
        res.json({
          success: true,
          blog
        })
    } catch (e) {
      console.log(e)
    }
  
  }

  exports.reply = async (req, res) => {
    console.log(req.body)
    const { email, message } = req.body; 
      
      try {
        const reply = await Blog.create({
          email, message
        })
        res.json({
          success: true,
          reply
        })
      } catch (e) {
        console.log(e)
      }
    }
const sendEmail = require('../utils/sendEmail');

exports.testEmail = async (req, res) => {
  // console.log(req.body)
  let { email, subject, message } = req.body
  
  const preMessage = `
  <h1> Test Email </h1>
  <p>message from : ${email}</p>
  <p>${message}</p>
  `
  
  try {
    await sendEmail({
      from: email,
      to: 'jeremyparkguitar@gmail.com',
      subject: subject,
      text: preMessage,
    })
    res.json({
      success: true,
      message: 'Email has sent'
    })
  } catch (e) {
    console.log(e)
  }
}

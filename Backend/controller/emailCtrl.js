const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');

const sendEmail = asyncHandler(async(data, req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        port: 465,
        secure: true, //it is true for 465, and false for other ports
        auth: {
            user: 'sachin.cs2002p@gmail.com',
            pass: 'lodv hogx iluy pskq',  
        },
    });

      // send mail with defined transport object
    const info = await transporter.sendMail({
    from: '"Hey 👻" <abc@example.com>', // sender address
    to: data.to, // list of receivers
    subject: data.subject, // Subject line
    text: data.text, // plain text body
    html: data.htm, // html body
  });

  console.log("Message sent: %s", info.messageId);
})

module.exports = sendEmail
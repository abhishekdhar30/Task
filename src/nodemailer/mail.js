const nodeMailer = require("nodemailer");

//this code ois used to send email to the email which user entered
module.exports=function sendingMail(email,pageTitle)
{
 
const transporter = nodeMailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_ID,
    pass: process.env.MAIL_PASSWORD,
  },
});

const mailMessage = {
  from: "greencanvas.com",
  to: email,
  subject: `Form Submitted`,
  text: `You have successfully submitted ${pageTitle} form`,
};

transporter.sendMail(mailMessage, function (error, data) {
  if (error) {
    console.log(error.message);
  } else {
    console.log("Email sent to",email);
  }
});
 };
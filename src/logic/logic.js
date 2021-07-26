const User = require("../models/userModel");
const sendingMail = require("../nodemailer/mail");
const { ValidateName, ValidateEmail } =require("../validations/validation") 


//this code is for contact and pricing page

function logic(req, res, pageTitle) {
  const emailvalidator = req.body.email;
  const namevalidator = req.body.name;

  let captcha = req.body["g-recaptcha-response"];

  //function calling in if statement and code is present in src/validations/validation.js
  //for name validation
  if (!ValidateName(namevalidator)) {
    req.flash(
      "error",
      "User has not entered name or Invalid name....It must only contains (a-z, A-Z)"
    );
    res.redirect(`/${pageTitle}`);
    return;
  }

  //function calling in if statement and code is present in src/validations/validation.js
  // for email validation
  if (!ValidateEmail(emailvalidator)) {
    req.flash(
      "error",
      "User has not entered email address or Invalid email....It must contains('@' and '.')"
    );
    res.redirect(`/${pageTitle}`);
    return;
  }

  //for captcha validation
  if (captcha.length === 0) {
    req.flash("error", "Please tick the Captcha");
    res.redirect(`/${pageTitle}`);
    return;
  }

  //saving user to mongodb
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    subject: req.body.subject,
    message: req.body.message,
  });
  newUser
    .save()
    .then(function () {
      //if success it goes in then block
      const arg = req.body.email;
      //calling to function which sends mail to entered email code is present in src/nodemailer/mail.js
      sendingMail(arg, pageTitle);

      req.flash(
        "success",
        `${pageTitle} Form has been successfully submitted and email has been sent to ${req.body.email}`
      );
      res.redirect(`/${pageTitle}`);
    })
    .catch(function (err) {
      // if there is any error it goes in catch block
      req.flash("error", "Please fill all required fields");
      res.redirect(`/${pageTitle}`);
    });
};

module.exports = logic;

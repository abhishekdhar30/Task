
const logic = require("../logic/logic");


//get request fxn for contact page
const getContact = function (req, res) {
  res.render("Contact", {
    success: req.flash("success"),
    danger: req.flash("error"),
  });
};

//post request fxn for contact page
const postContact = function (req, res) {

  //calling logic function whose code is present in src/logic/logic.js
  logic(req,res,"Contact");

};

module.exports = { getContact, postContact };

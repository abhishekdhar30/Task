const logic = require("../logic/logic");

//get request fxn for price page
const getPricing = function (req, res) {
  res.render("Pricing", {
    success: req.flash("success"),
    danger: req.flash("error"),
  });
};

//post request fxn for price page
const postPricing = function (req, res) {
  
  //calling logic function whose code is present in src/logic/logic.js
  logic(req, res, "Pricing");
};

module.exports = { getPricing, postPricing };

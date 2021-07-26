const User = require("../models/userModel");

//this get request is for secret key in which all details should be displayed
const getAllDetails = function (req, res) {
  if(req.params.custom===process.env.SECRET_URL)
  {
       User.find({}, function (err, user) {
         if (err) 
         {
           console.log(err.message);
         } 
         else 
         {
           res.render("Users", {users:user});
         }
       });
  }
};

module.exports = getAllDetails;;
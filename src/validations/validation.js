//this code is for validation of email
function ValidateEmail(inputText) {
  var mailformat =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.match(mailformat)) 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

//this code is for validation of name
function ValidateName(inputText) {

  var nameformat = /^[a-zA-Z]+$/;
  if (inputText.match(nameformat)) {
    return true;
  } else {
    return false;
  }
}



module.exports = { ValidateEmail, ValidateName };
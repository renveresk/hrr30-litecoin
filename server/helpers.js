const bcrypt = require('bcrypt');

const saveCredentials = function(obj){
  var username = obj.username;
  var password = obj.password;

  bcrypt.hash(password, 10, function(err, hash){
    if(err){
      console.log('You received this err: ', err)
    } else {
    //Save username and passsword
    }
  });
}

const checkCredentials = function(obj){
  var username = obj.username;
  var password = obj.password;
  var hash = //Fetch hash from database based on username
  bcrypt.compare(password, hash, function(err, res))
}

module.exports = saveCredentials;
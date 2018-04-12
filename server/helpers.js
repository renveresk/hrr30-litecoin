const bcrypt = require('bcrypt');
const session = require('express-session');
const express = require('express');

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

const checkCredentials = function(obj, req, res){
  var username = obj.username;
  var password = obj.password;
  var hash = //Fetch hash from database based on username
  bcrypt.compare(password, hash, function(err, match){
    if (match){
      req.session.regenerate(function(){
        req.session.user = username;
        response.redirect('/homepage');
      });
    } else {
      res.redirect('/login')
    }
  })
}

const restrict = funciton(req, res, next){
  if(req.session.user){
    next()
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}



module.exports = saveCredentials;
module.exports = checkCredentials;
module.exports = restrict;
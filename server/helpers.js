const bcrypt = require('bcrypt');
const session = require('express-session');
const express = require('express');
const db = require('../database/index.js');

const saveCredentials = function(obj){
  var username = obj.username;
  var password = obj.password;

  bcrypt.hash(password, 10, function(err, hash){
    if(err){
      console.log('You received this err: ', err)
    } else {
    //Save username and passsword
    db.saveUser(obj, function(){
      console.log('User saved!')
      });
    }
  });
}

const checkCredentials = function(obj, req, res){
  var username = obj.username;
  var password = obj.password;
  var hash = db.findUserHash;
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

const restrict = function(req, res, next){
  if(req.session.user){
    next()
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}



module.exports.saveCredentials = saveCredentials;
module.exports.checkCredentials = checkCredentials;
module.exports.restrict = restrict;
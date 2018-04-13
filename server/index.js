const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const bcrypt = require('bcrypt-nodejs');
const auth = require('./helpers.js');
const session = require('express-session');

app.use(bodyParser.json());

//Initializes session module
app.use(session({
  secret: 'mississippi candle',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(express.static(__dirname + '/../client/dist'));
//Accepts a POST request for /login
/*app.post('/login', function(req, res){
  //Should receive username and password
  var username = req.body
  var password = req.body
  //If username and password are found and match
    //Render their home page
    res.redirect('/homepage');
  //If username is found but password does not match
    //Render a message that says username or password are incorrect
    res.redirect('/login/error');
  //If username is not found
    //Render a message that says try again or sign up
    res.redirect('/signup');
});*/

//A user's homepage
app.get('/homepage', restrict, function(req, res){
  res.send('This is the home page!');
});

//When a user signs up
app.post('/signup', function(req, res){
  auth.saveCredentials(req.body);
  res.redirect('/login');
});

//When a user logs in
app.post('/login', function(req, res){
  auth.checkCredentials(req.body, req, res);
  res.redirect('/homepage')
})

app.listen(3000, () => {
  console.log('Now listening on port 3000!')
});

function restrict(req, res, next){
  if(req.session.user){
    next()
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}

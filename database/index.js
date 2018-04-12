var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wydrn');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We connected!')
});

var userSchema = mongoose.Schema({
  username : {
    type: String,
    unique: true
  },
  hash: String,
  email: String
});

var User = mongoose.model('User', userSchema);

const saveUser = (userData, callback) => {
  let userInfo = new User({
    username: userData.username,
    hash: userData.hash,
    email: userData.email
  });

  userInfo.save(err => {
    if (err) {
      console.log(err);
    } else {
      callback();
    }
  });
};

module.exports.saveUser = saveUser;
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
  hPassword: String,
  email: String
});

var User = mongoose.model('User', userSchema);

const saveUser = (userData, callback) => {
  let userInfo = new User({
    username: userData.username,
    hPassword: userData.hPassword,
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

const findUserHash = (userData) => {
  User.findOne({username: userData.username}, function(err, user){
    return user.hPassword;
  });
}

module.exports.saveUser = saveUser;
module.exports.findUser = findUserHash;
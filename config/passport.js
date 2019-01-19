// TODO: FIX MAKE WORK UNDERSTAND ACTUALLY DO

var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var Users = require("../models/user.js");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/username and password
passport.use('local', new LocalStrategy(
 // Our user will sign in using an username, rather than a "username"
 {
   usernameField: "email", 
   passwordField: "password"
 },
 function(username, password, done) {
   console.log(username);
   console.log(password)
   console.log("in passport")
   // When a user tries to sign in this code runs
   Users.findOne({"email": username}).then(function(dbUser) {
     // If there's no user with the given username
     if (!dbUser) {
       console.log("not logged in")
       return done(null, false, {
         message: "Incorrect username."
       });
     }
     // If there is a user with the given username, but the password the user gives us is incorrect
     else if (dbUser.password != password) { // TODO REMOVE BAD SECURITY AND PLAINTEXT PASSWORDS
       return done(null, false, {
         message: "Incorrect password."
       });
     }
     // If none of the above, return the user
     console.log(dbUser);
     return done(null, dbUser);
   });
 }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, done) {
  // console.log(user);
 done(null, user.id)
});

passport.deserializeUser(function(id, done) {
  // console.log(id);

 Users.findById(id,function(err,user){
   done(err,user);
 })
});

// Exporting our configured passport
module.exports = passport;
























// const mongoose = require('mongoose');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');

// const Users = mongoose.model('Users');

// passport.use(new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
// }, (email, password, done) => {
//     console.log(email);
//   Users.findOne({ email })
//     .then((user) => {
//       if(!user || !user.validatePassword(password)) {
//         return done(null, false, { errors: { 'email or password': 'is invalid' } });
//       }

//       return done(null, user);
//     }).catch(done);
// }));


// passport.serializeUser(function(user, done) {
//     done(null, user);
//   });
  
//   passport.deserializeUser(function(user, done) {
//     done(null, user);
//   });
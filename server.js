const express = require("express");
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

const MongoStore = require("connect-mongo")(session)
const passport = require("passport");
const connection = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project-3");


const passportConfig = require('./config/passport')


// middleware for parsing body on post request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: "project-3",
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}))
// DB stuff
const db = require("./models");

// Setup passport
app.use(passport.initialize());
app.use(passport.session());

// var store = new MongoDBStore({
//   uri: 'mongodb://localhost:27017/project-3',
//   collection: 'mySessions'
// });


// store.on('error', function(error) {
//   assert.ifError(error);
//   assert.ok(false);
// });
 
// app.use(require('express-session')({
//   secret: 'This is a secret',
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
//   },
//   store: store,
//   // Boilerplate options, see:
//   // * https://www.npmjs.com/package/express-session#resave
//   // * https://www.npmjs.com/package/express-session#saveuninitialized
//   resave: true,
//   saveUninitialized: true
// }));
 

 
// Define API routes here
app.post('/api/register', (req, res, next) => {
  console.log(req.body)
  
  user = req.body;
  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  // const finalUser = new Users(user);

  // finalUser.setPassword(user.password);

  return db.Users.create(user, function(user){
    res.send(user)
  })

});


app.get("/api/currentUser",  function(req,res,next){
  console.log("current User: " + req.user);
  res.send(req.user)
})


app.post('/api/login', function(req, res, next) {
  passportConfig.authenticate('local', function(err,user, info){
    if (err) { return next(err); }
    if (!user) { return res.send('loginFail') }
    req.logIn(user, function(err){
      if(err){return next(err)};
      console.log("loegged in")
      return res.json({user:user})
    })
  })(req, res, next)
})

  
app.get("/loginFail", 
function(req, res){
  res.send("Logged In FAIL")
}
)
app.get("/",function(req, res){
  // res.send(req.user)
  // console.log(req.user)
  res.send("Logged In TRUUUU")
})


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

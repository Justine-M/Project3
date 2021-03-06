const express = require("express");
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const app = express();
const guestRoutes = require("./routes/api/guest");
const eventRoutes = require('./routes/api/event');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'TheMSJExperience@gmail.com',
    pass: 'Msjlps2019'
  }
});

var mailOptions = {
  from: 'TheMSJExperience@gmail.com',
  to: 'shardayel17@yahoo.co',
  subject: 'You have been invited to attend a weedding for:',
  text: `Martin and Gina
                Invite you to join them in the celebration of their marriage.
                When: Saturday, July 9th 2019 at 2:30 in the Afternoon.
                Where: The Philadelphia Museum of art.
                Dinner and dancing to follow.
                
                Please follow link below to accept or decline invitation:
                             http://localhost:3000/guest`
                
  // html: <h1>Invite you to join them in the celebration of their marriage.</h1>
  // <p>When: Saturday, July 9th 2019 at 2:30 in the Afternoon.</p>
  // <p>Where: The Philadelphia Museum of art.</p>
  // <p>Dinner and dancing to follow.</p>




};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 


// // nodemailer stuff to send emails to guests
// const transporter = nodemailer.createTransport({
//   service: gmail,
//   auth: {
//          user: 'username',
//          pass: 'password'
//      }
//  });


//  const mailOptions = {
//   from: 'TheMSJExperience@gmail.com', 
//   to: 'ellenshaws@yahoo.com', 
//   subject: 'Janet and Mike would like invite you to...', 
//   html: '<p>You have been invited to an event </p>'
// };



// transporter.sendMail(mailOptions, function (err, info) {
//   if(err)
//     console.log(err)
//   else
//     console.log(info);
// });

// const routes = require("./routes");
require("./models");


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

// guest routes
app.use("/api/guest", guestRoutes);
// event router 
// app.use("/events", eventRoutes);

app.use("/api/event", eventRoutes);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}





// app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  }
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

const express = require("express");
const app = express();

const path = require("path");
const PORT = process.env.PORT || 3001;
const guestRoutes = require("./routes/api/guest");
const eventRoutes = require('./routes/api/event');



console.log("1")
// const routes = require("./routes");
require("./models");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// guest routes
app.use("/api/guest", guestRoutes);
// event router 
// app.use("/events", eventRoutes);


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

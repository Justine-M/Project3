
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FullApp from "./pages/fullApp";
import SignUp from "./pages/signUp";
import Guest from "./pages/guests";
import Events from "./pages/events";


function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={FullApp} />
          <Route exact path="/home" component={FullApp} />
          <Route exact path="/login" component={SignUp} />
          <Route exact path="/guest" component={Guest} />
          <Route exact path="/event" component={Events} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;

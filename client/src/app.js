import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FullApp from "./pages/fullApp";
import SignUp from "./pages/signUp";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={FullApp} />
          <Route exact path="/home" component={FullApp} />
          <Route exact path="/login" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

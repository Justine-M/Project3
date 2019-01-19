import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import guests from "./pages/guests";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Guests} />
          {/* {/* <Route exact path="/guests" component={Guests} />
          <Route exact path="/guests/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;

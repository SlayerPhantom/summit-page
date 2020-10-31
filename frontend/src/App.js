import React from "react";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Speakers from "./pages/Speakers";
import Events from "./pages/Events";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/speakers" exact>
          <Speakers />
        </Route>
        <Route path="/events" exact>
          <Events />
        </Route>
      </Switch>
    </Router>
  );
}

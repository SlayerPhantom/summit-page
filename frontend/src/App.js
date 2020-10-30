import React from "react";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./components/Dashboard";
import Speakers from "./pages/Speakers";
import About from "./pages/About";
import Events from "./pages/Events";
import Announcements from "./pages/Announcements";

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/speakers" exact>
          <Speakers />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/announcements" exact>
          <Announcements />
        </Route>
        <Route path="/events" exact>
          <Events />
        </Route>
      </Switch>
    </Router>
  );
}

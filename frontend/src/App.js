import React from "react";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Speakers from "./pages/Speakers";
import Events from "./pages/Events";
import ProtectedRoute from "./auth/ProtectedRoute";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import Video from "./pages/Video";
import Venue from "./pages/Venue";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import Sponsors from "./pages/Sponsors";
import "./style.css";

export default function App() {
  return (
    <Router>
      <CustomNavbar />
      <Switch>
        <Route path="/" exact component={Homepage} />

        {/* Swap back to protectedroutes when done */}
        <Route path="/speakers" exact component={Speakers} />
        <Route path="/events" exact component={Events} />
        <Route path="/video" exact component={Video} />
        <Route path="/venue" exact component={Venue} />
        <Route path="/registerEvents" exact component={Signup} />
        <Route path="/sponsors" exact component={Sponsors} />
        <Route path="/" component={PageNotFound} />
      </Switch>
      <CustomFooter />
    </Router>
  );
}

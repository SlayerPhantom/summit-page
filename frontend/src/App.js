import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Speakers from './pages/Speakers';
import Events from './pages/Events';
import ProtectedRoute from './auth/ProtectedRoute';
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import Venue from './pages/Venue';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import Sponsors from './pages/Sponsors';
import './style.css';

export default function App() {
	return (
		<Router>
			<CustomNavbar />
			<Switch>
				<Route path="/" exact component={Homepage} />

				{/* Swap back to protectedroutes when done */}
				{/* <Route path="/speakers" exact component={Speakers} />
        <Route path="/events" exact component={Events} />
        <Route path="/venue" exact component={Venue} />
        <Route path="/registerEvents" exact component={Signup} />
        <Route path="/sponsors" exact component={Sponsors} />
        <Route path="/" component={PageNotFound} /> */}
				<ProtectedRoute path="/speakers" exact component={Speakers} />
				<ProtectedRoute path="/events" exact component={Events} />
				<ProtectedRoute path="/venue" exact component={Venue} />
				<ProtectedRoute path="/registerevents" exact component={Signup} />
				<ProtectedRoute path="/sponsors" exact component={Sponsors} />
				<ProtectedRoute path="/" component={PageNotFound} />
			</Switch>
			<CustomFooter />
		</Router>
	);
}

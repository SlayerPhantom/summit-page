import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Speakers from './pages/Speakers';
import Events from './pages/Events';
import ProtectedRoute from './auth/ProtectedRoute';
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import Video from './pages/Video';
import Venue from './pages/Venue';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import './style.css';
export default function App() {
	return (
		<Router>
			<CustomNavbar />
			<Switch>
				<Route path="/" exact component={Homepage} />

				<ProtectedRoute path="/speakers" exact component={Speakers} />
				<ProtectedRoute path="/events" exact component={Events} />
				<ProtectedRoute path="/video" exact component={Video} />
				<ProtectedRoute path="/venue" exact component={Venue} />
				<ProtectedRoute path="/registerEvents" exact component={Signup} />
				<Route path="/" component={PageNotFound} />
			</Switch>
			<CustomFooter />
		</Router>
	);
}

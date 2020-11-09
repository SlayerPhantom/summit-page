import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Speakers from './pages/Speakers';
import Events from './pages/Events';
import ProtectedRoute from './auth/ProtectedRoute';
export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Homepage} />
				<ProtectedRoute path="/speakers" exact component={Speakers} />
				<ProtectedRoute path="/events" exact component={Events} />
			</Switch>
		</Router>
	);
}

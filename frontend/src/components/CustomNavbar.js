import React from 'react';
import {
	Navbar,
	NavDropdown,
	Nav,
	Form,
	Container,
	FormControl,
	Button,
} from 'react-bootstrap';
import '../style.css';
import '../css/CustomNavbar.css';

const displayUser = () => {
	const user = localStorage.getItem('user');
	if (user) return user.name;
	else return null;
};
export default function CustomNavbar() {
	return (
		// <Navbar className="header" expand="lg">
		<Navbar style={{ backgroundColor: '#DB3A34', height: '10vh' }} expand="lg">
			<Navbar.Brand className="ml-5" href="/">
				UBreakIFix
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/Events">
						<div className="white">Events</div>
					</Nav.Link>
					<Nav.Link href="/Speakers">
						<div className="white">Speakers</div>
					</Nav.Link>
					<Nav.Link href="/video">
						<div className="white">Video</div>
					</Nav.Link>
					<Nav.Link href="/venue">
						<div className="white">Venue</div>
					</Nav.Link>
					<Nav.Link href="/registerEvents">
						<div className="white">registerEvents</div>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			{displayUser()}
		</Navbar>
	);
}

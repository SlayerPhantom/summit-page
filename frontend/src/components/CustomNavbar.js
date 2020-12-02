<<<<<<< HEAD
import React from 'react';
import '../style.css';
import '../css/CustomNavbar.css';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
	Navbar,
	Nav,
	NavDropdown,
	Container,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';

const displayUser = () => {
	const user = localStorage.getItem('user');
	if (user) return user.name;
	else return null;
};
export default function CustomNavbar() {
	const theme = createMuiTheme({
		overrides: {
			MuiAppBar: {
				root: {},
			},
			MuiToolbar: {
				root: {
					backgroundColor: 'rgb(33,26,30)',
				},
			},
		},
	});

	const linkStyle = {
		textDecoration: 'none',
		color: 'inherit',
		padding: '10px',
	};
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Navbar className="navbarWrapper" variant="dark" expand="lg">
			<Navbar.Brand href="/">
				<Nav.Link href="/" className="navbarImageWrapper">
					<img
						src="https://d1zmiyu61cpipt.cloudfront.net/assets/images/ubif_logo_dark.svg"
						alt="logo"
						className="navbarImage"
					/>
				</Nav.Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/events" className="navbarItem">
						Events
					</Nav.Link>
					<Nav.Link href="/speakers" className="navbarItem">
						Speakers
					</Nav.Link>
					<Nav.Link href="/venue" className="navbarItem">
						Venue
					</Nav.Link>
					<Nav.Link href="/registerevents" className="navbarItem">
						Sign up
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		// <ThemeProvider theme={theme}>
		//   <AppBar position="static">
		//     <Toolbar style={{ display: "flex", justifyContent: "center" }}>
		//       <Link variant="h6" underline="none" style={linkStyle} href="/">
		//         <img
		//           src="https://d1zmiyu61cpipt.cloudfront.net/assets/images/ubif_logo_dark.svg"
		//           alt="logo"
		//           style={{ height: "60px", width: "80px" }}
		//         />
		//       </Link>
		//       <Link variant="h6" underline="none" style={linkStyle} href="/events">
		//         Events
		//       </Link>
		//       <Link
		//         variant="h6"
		//         underline="none"
		//         style={linkStyle}
		//         href="/speakers"
		//       >
		//         Speakers
		//       </Link>
		//       <Link variant="h6" underline="none" style={linkStyle} href="/venue">
		//         Venue
		//       </Link>
		//       <Link
		//         variant="h6"
		//         underline="none"
		//         style={linkStyle}
		//         href="/sponsors"
		//       >
		//         Sponsors
		//       </Link>
		//       <Link
		//         variant="h6"
		//         underline="none"
		//         style={linkStyle}
		//         href="/registerevents"
		//       >
		//         Signup
		//       </Link>
		//     </Toolbar>
		//   </AppBar>
		// </ThemeProvider>
	);
=======
import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import "../css/style.css";
import "../css/CustomNavbar.css";

// const displayUser = () => {
//   const user = localStorage.getItem("user");
//   if (user) return user.name;
//   else return null;
// };

export default function CustomNavbar() {
  return (
    <Navbar className="navbarWrapper" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <Nav.Link href="/" className="navbarImageWrapper">
          <img
            src="https://d1zmiyu61cpipt.cloudfront.net/assets/images/ubif_logo_dark.svg"
            alt="logo"
            className="navbarImage"
          />
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/events" className="navbarItem">
            Events
          </Nav.Link>
          <Nav.Link href="/speakers" className="navbarItem">
            Speakers
          </Nav.Link>
          <Nav.Link href="/venue" className="navbarItem">
            Venue
          </Nav.Link>
          <Nav.Link href="/registerevents" className="navbarItem">
            Sign up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
>>>>>>> e254e578fb6025659d1d2ac6036f1714ea27a8c3
}

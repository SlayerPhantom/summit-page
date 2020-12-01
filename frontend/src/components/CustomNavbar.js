import React from 'react';
import '../style.css';
import '../css/CustomNavbar.css';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
		<ThemeProvider theme={theme}>
			<AppBar position="static">
				<Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
					<Link variant="h6" underline="none" style={linkStyle} href="/">
						<img
							src="https://d1zmiyu61cpipt.cloudfront.net/assets/images/ubif_logo_dark.svg"
							alt="logo"
							style={{ height: '60px', width: '80px' }}
						/>
					</Link>
					<Link variant="h6" underline="none" style={linkStyle} href="/events">
						Events
					</Link>
					<Link
						variant="h6"
						underline="none"
						style={linkStyle}
						href="/speakers"
					>
						Speakers
					</Link>
					<Link variant="h6" underline="none" style={linkStyle} href="/venue">
						Venue
					</Link>
					<Link
						variant="h6"
						underline="none"
						style={linkStyle}
						href="/sponsors"
					>
						Sponsors
					</Link>
					<Link
						variant="h6"
						underline="none"
						style={linkStyle}
						href="/registerevents"
					>
						Signup
					</Link>

					{/* <Button
            aria-controls="simple-menu"
            color="inherit"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Dropdown
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>

          <Button color="inherit" style={linkStyle}>
            Login
          </Button> */}
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

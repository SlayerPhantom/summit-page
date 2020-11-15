import React from "react";
import "../style.css";
import "../css/CustomNavbar.css";
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Link,
  Button,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export default function CustomNavbar() {
  const theme = createMuiTheme({
    overrides: {
      MuiAppBar: {
        root: {},
      },
      MuiToolbar: {
        root: {
          backgroundColor: "rgb(33,26,30)",
        },
      },
    },
  });

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    padding: "10px",
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
        <Toolbar>
          <Link variant="h6" underline="none" style={linkStyle} href="/">
            UBreakIFix
          </Link>
          <Link variant="h6" underline="none" style={linkStyle} href="/Events">
            Events
          </Link>
          <Link
            variant="h6"
            underline="none"
            style={linkStyle}
            href="/Speakers"
          >
            Speakers
          </Link>

          <Button
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
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

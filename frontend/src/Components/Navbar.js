import React from "react";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bar: {
    backgroundColor: "#e71d36",
    height: "10vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    [theme.breakpoints.up("md")]: {
      fontWeight: "bold",
      color: "white",
      fontFamily: "Montserrat",
      fontSize: "35px",
    },
    [theme.breakpoints.down("md")]: {
      fontWeight: "bold",
      color: "white",
      fontFamily: "Montserrat",
      fontSize: "20px",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar variant="dense" className={classes.tool}>
          <Typography variant="h3" color="inherit" className={classes.title}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Pizzeria 🍕
            </Link>
          </Typography>
          {showText && (
            <Typography
              variant="h6"
              color="inherit"
              style={{
                paddingLeft: "65vw",
                color: "white",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              {currentUser && (
                <Dropdown
                  currentUser={currentUser}
                  style={{ color: "white", textDecoration: "none" }}
                />
              )}
              {!currentUser && (
                <Link
                  to="/login"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Log In
                </Link>
              )}
            </Typography>
          )}
          {showText && (
            <Typography
              variant="h6"
              color="inherit"
              style={{
                paddingLeft: "3vw",
                color: "white",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              <Link
                to="/cart"
                style={{ color: "white", textDecoration: "none" }}
              >
                Cart : {cartState.cartItems.length}
              </Link>
            </Typography>
          )}
          {showText && (
            <Typography
              variant="h6"
              color="inherit"
              style={{
                paddingLeft: "3vw",
                color: "white",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              <Link
                to="/about"
                style={{ color: "white", textDecoration: "none" }}
              >
                About
              </Link>
            </Typography>
          )}
          {!showText && (
            <Typography
              variant="h6"
              color="inherit"
              style={{
                paddingLeft: "15vw",
                color: "white",
                fontWeight: "bold",
                fontSize: "10px",
              }}
            >
              {currentUser && (
                <Dropdown
                  currentUser={currentUser}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    paddingLeft: "10vw",
                  }}
                />
              )}
              {!currentUser && (
                <Link
                  to="/login"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Log In
                </Link>
              )}
            </Typography>
          )}
          {!showText && (
            <Typography
              variant="h6"
              color="inherit"
              style={{
                paddingLeft: "3vw",
                color: "white",
                fontWeight: "bold",
                fontSize: "10px",
              }}
            >
              <Link
                to="/cart"
                style={{ color: "white", textDecoration: "none" }}
              >
                Cart : {cartState.cartItems.length}
              </Link>
            </Typography>
          )}
          {!showText && (
            <Typography
              variant="h6"
              color="inherit"
              style={{
                paddingLeft: "3vw",
                color: "white",
                fontWeight: "bold",
                fontSize: "10px",
              }}
            >
              <Link
                to="/about"
                style={{ color: "white", textDecoration: "none" }}
              >
                About
              </Link>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

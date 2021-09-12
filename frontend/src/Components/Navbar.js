import React from "react";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar variant="dense" className={classes.tool}>
          <Typography variant="h3" color="inherit" className={classes.title}>
            Pizzeria 🍕
          </Typography>
          {showText && (
            <Typography
              variant="h6"
              color="inherit"
              style={{
                paddingLeft: "68vw",
                color: "white",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Login
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
              Cart
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
              About
            </Typography>
          )}
          {!showText && (
            <Typography
              variant="h6"
              color="inherit"
              style={{
                paddingLeft: "30vw",
                color: "white",
                fontWeight: "bold",
                fontSize: "10px",
              }}
            >
              Login
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
              Cart
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
              About
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

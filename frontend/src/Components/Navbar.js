import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    backgroundColor: "#0077b6",
    height: "10vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: "#03071e",
    fontFamily: "Montserrat",
    fontSize: "35px",
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar variant="dense" className={classes.tool}>
          <Typography variant="h3" color="inherit" className={classes.title}>
            Pizzeria 🍕
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            style={{
              paddingLeft: "75vw",
              color: "black",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Login
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            style={{
              paddingLeft: "3vw",
              color: "black",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Cart
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

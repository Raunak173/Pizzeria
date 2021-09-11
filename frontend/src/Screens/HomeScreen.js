import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import Pizza from "../Components/Pizza";
import pizzas from "../PizzaData";

const useStyles = makeStyles({
  cont: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

function HomeScreen() {
  const classes = useStyles();
  return (
    <Container className={classes.cont}>
      {pizzas.map((pizza) => (
        <Pizza pizza={pizza} />
      ))}
    </Container>
  );
}

export default HomeScreen;

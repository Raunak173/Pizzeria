import { Container, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../Components/Pizza";
import { getAllPizzas } from "../redux/actions/pizzaActions";

const useStyles = makeStyles((theme) => ({
  cont: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
  },
}));

function HomeScreen() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const pizzasState = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <Container className={classes.cont}>
      {loading ? (
        <h1>Loading... :)</h1>
      ) : error ? (
        <h1>Something went wrong :/</h1>
      ) : (
        pizzas.map((pizza) => <Pizza key={pizza._id} pizza={pizza} />)
      )}
    </Container>
  );
}

export default HomeScreen;

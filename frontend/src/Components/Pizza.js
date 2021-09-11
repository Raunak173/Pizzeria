import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  makeStyles,
  TextField,
  MenuItem,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles({
  card: {
    width: "25%",
    margin: "2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1%",
    backgroundColor: "#edf2f4",
  },
  title: {
    fontWeight: "900",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginTop: "2%",
  },
  field: {
    width: "120px",
  },
  btn: {
    marginLeft: "85px",
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginTop: "5%",
  },
});

function Pizza({ pizza }) {
  const classes = useStyles();
  const [qty, setQty] = useState(1);
  const [varient, setVarient] = useState("small");
  return (
    <Card className={classes.card}>
      <CardHeader title={pizza.name} className={classes.title} />
      <CardMedia>
        <img src={pizza.image} height="250px" width="280px" />
      </CardMedia>
      <div className={classes.container}>
        <TextField
          className={classes.field}
          id="standard-select-currency"
          select
          label="Variants"
          value={varient}
          onChange={(e) => {
            setVarient(e.target.value);
          }}
        >
          {pizza.varients.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className={classes.field}
          id="standard-select-currency"
          select
          label="Quantity"
          value={qty}
          onChange={(e) => {
            setQty(e.target.value);
          }}
        >
          {[...Array(10).keys()].map((x, i) => (
            <MenuItem key={i + 1} value={i + 1}>
              {i + 1}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className={classes.container2}>
        <div>
          <h4>{pizza.prices[0][varient] * qty} Rs/-</h4>
        </div>
        <Button
          variant="contained"
          className={classes.btn}
          style={{ backgroundColor: "#e71d36", color: "white" }}
        >
          Add to cart
        </Button>
      </div>
    </Card>
  );
}

export default Pizza;

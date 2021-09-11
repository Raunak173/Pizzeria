import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  makeStyles,
  TextField,
  MenuItem,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  card: {
    width: "25%",
    margin: "2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "900",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  field: {
    width: "120px",
  },
});

function Pizza({ pizza }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title={pizza.name} className={classes.title} />
      <CardMedia>
        <img src={pizza.image} height="250px" width="280px" />
      </CardMedia>
      <div className={classes.container}>
        <div>
          <TextField
            className={classes.field}
            id="standard-select-currency"
            select
            label="Variants"
          >
            {pizza.varients.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            className={classes.field}
            id="standard-select-currency"
            select
            label="Quantity"
          >
            {[...Array(10).keys()].map((x, i) => (
              <MenuItem key={i + 1} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
    </Card>
  );
}

export default Pizza;

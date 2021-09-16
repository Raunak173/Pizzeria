import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, makeStyles, MenuItem, TextField } from "@material-ui/core";
import { filterPizzas } from "../redux/actions/pizzaActions";

const useStyles = makeStyles((theme) => ({
  box: {
    [theme.breakpoints.up("md")]: {
      width: "80vw",
      backgroundColor: "#e71d36",
      height: "8vh",
      marginTop: "2%",
      margin: "auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    [theme.breakpoints.down("md")]: {
      width: "90vw",
      backgroundColor: "#e71d36",
      height: "5vh",
      marginTop: "3%",
      margin: "auto",
      alignItems: "center",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
  },
  select: {
    width: "20%",
    paddingLeft: "1%",
  },
}));

const Filter = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  return (
    <div className={classes.box}>
      <TextField
        id="outlined-basic"
        label="Search ..."
        variant="outlined"
        size="small"
        style={{ backgroundColor: "white" }}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <TextField
        id="standard-select-currency"
        select
        className={classes.select}
        style={{ backgroundColor: "white" }}
        value={category}
        label="Select"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="veg">Veg</MenuItem>
        <MenuItem value="nonveg">Non-Veg</MenuItem>
      </TextField>
      <Button
        variant="contained"
        style={{ width: "15%" }}
        onClick={() => dispatch(filterPizzas(search, category))}
      >
        Filter
      </Button>
    </div>
  );
};

export default Filter;

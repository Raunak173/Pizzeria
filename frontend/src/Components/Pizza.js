import {
  Card,
  CardMedia,
  CardHeader,
  makeStyles,
  TextField,
  MenuItem,
  Button,
  Modal,
} from "@material-ui/core";
import React, { useState } from "react";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.up("md")]: {
      width: "25%",
      margin: "2%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "1%",
      backgroundColor: "#edf2f4",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
      margin: "5%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "3%",
      backgroundColor: "#edf2f4",
    },
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
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    color: "#40916c",
    fontWeight: "bold",
  },
}));

function Pizza({ pizza }) {
  const classes = useStyles();
  const [qty, setQty] = useState(1);
  const [varient, setVarient] = useState("small");
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img src={pizza.image} height="300px" width="320px" />
      <p id="simple-modal-description">{pizza.description}</p>
    </div>
  );

  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          title={pizza.name}
          className={classes.title}
          onClick={handleOpen}
        />
        <CardMedia>
          <img
            src={pizza.image}
            height="250px"
            width="280px"
            onClick={handleOpen}
          />
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
            <h4 className={classes.price}>
              {pizza.prices[0][varient] * qty} Rs/-
            </h4>
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
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </>
  );
}

export default Pizza;

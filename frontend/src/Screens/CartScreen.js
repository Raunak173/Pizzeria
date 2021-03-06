import React from "react";
import {
  Container,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../redux/actions/cartActions";
import { Checkout } from "../Components/Checkout";

const useStyles = makeStyles((theme) => ({
  left: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "1%",
  },
  right: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    cont: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
    },
  },
  [theme.breakpoints.down("md")]: {
    cont: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

const CartScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  let subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <div className={classes.cont}>
      {subTotal !== 0 && (
        <>
          <div className={classes.left}>
            <Typography variant="h3" style={{ margin: "auto" }}>
              My Cart 😋
            </Typography>
            <TableContainer style={{ marginTop: "3%" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Variant</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.varient}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>
                        <img src={item.image} height="100px" width="120px" />
                      </TableCell>
                      <TableCell>
                        <i
                          className="fa fa-trash"
                          aria-hidden="true"
                          onClick={() => dispatch(deleteFromCart(item))}
                        ></i>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className={classes.right}>
            <Typography variant="h2">Cart Total 💰 </Typography>
            <Typography variant="h3" style={{ color: "green" }}>
              {subTotal} /Rs-
            </Typography>
            <Checkout subTotal={subTotal} />
          </div>
        </>
      )}
      {subTotal === 0 && (
        <Container style={{ margin: "auto" }}>
          <h1>Looks as if the cart is empty :/</h1>
        </Container>
      )}
    </div>
  );
};

export default CartScreen;

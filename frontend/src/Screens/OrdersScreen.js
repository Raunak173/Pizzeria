import React, { useEffect } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../redux/actions/orderActions";

const useStyles = makeStyles({
  container: {
    display: "flex",
    paddingLeft: "20%",
  },
  c: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "4%",
  },
});

const OrdersScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderState;
  useEffect(() => {
    dispatch(getUserOrders());
  });
  return (
    <>
      <Typography variant="h3" style={{ marginTop: "2%" }}>
        My Orders :
      </Typography>
      <Container className={classes.container}>
        {orders &&
          orders.map((order) =>
            order.orderItems.map((item) => (
              <div className={classes.c}>
                <h5>{item.name}</h5>
              </div>
            ))
          )}
        {orders &&
          orders.map((order) => (
            <div className={classes.c}>
              <h5>{order.shippingAddress.street}</h5>
              <h5>{order.shippingAddress.city}</h5>
              <h5>{order.shippingAddress.country}</h5>
              <h5>{order.shippingAddress.pincode}</h5>
            </div>
          ))}
        {orders &&
          orders.map((order) => (
            <div className={classes.c}>
              <h5>{order.orderAmount}</h5>
              <h5>{order.transactionId}</h5>
            </div>
          ))}
      </Container>
    </>
  );
};

export default OrdersScreen;

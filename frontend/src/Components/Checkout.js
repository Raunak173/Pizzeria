import { Button } from "@material-ui/core";
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../redux/actions/orderActions";
import Loader from "./Loader";
import Success from "./Success";
import Error from "./Error";

export const Checkout = ({ subTotal }) => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
  };
  return (
    <div>
      {loading && <Loader />}
      {error && <Error error={"Something went wrong"} />}
      {success && <Success success={"Your order placed successfully :)"} />}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        currency="INR"
        stripeKey="pk_test_51JZVxrSCddxL2LCk2AYEzLqFbIt6T38ATouhpUVakgzoUFcEnln5JNJFguiOKTfLFZrIbHqERZo8yAPqtVhdTtYG00EPaJfBIg"
      >
        <Button
          variant="contained"
          style={{
            marginTop: "2%",
            backgroundColor: "blue",
            color: "white",
            padding: "5%",
          }}
        >
          Checkout
        </Button>
      </StripeCheckout>
    </div>
  );
};

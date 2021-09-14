import { Button } from "@material-ui/core";
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../redux/actions/orderActions";

export const Checkout = ({ subTotal }) => {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    console.log(token);
    console.log(process.env.REACT_APP_STRIPE_KEY);
    dispatch(placeOrder(token, subTotal));
  };
  return (
    <div>
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

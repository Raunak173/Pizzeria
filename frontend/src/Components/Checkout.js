import { Button } from "@material-ui/core";
import React from "react";
import StripeCheckout from "react-stripe-checkout";

export const Checkout = ({ subTotal }) => {
  const tokenHandler = (token) => {
    console.log(token);
  };
  return (
    <div>
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        currency="INR"
        stripeKey={process.env.REACT_STRIPE_KEY}
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

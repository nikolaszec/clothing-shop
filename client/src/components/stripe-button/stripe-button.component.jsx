import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Gsq40K6oIvCzhF3Rg6tt2sBTmLMEguJAHvBYRQVgMbTUMXIgOo1QWHdo7NgTw5SGeTsthPSLaLhmMqhNnhRWKAc00k655pkzs";
  const onToken = (token) => {
    axios({
      url: "/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error:", error);
        alert(
          "There was issue with your payment. Please use provided credit card."
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="Clothing store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      description={`Your total price is $${price}`}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

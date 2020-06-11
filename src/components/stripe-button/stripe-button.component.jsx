import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Gsq40K6oIvCzhF3Rg6tt2sBTmLMEguJAHvBYRQVgMbTUMXIgOo1QWHdo7NgTw5SGeTsthPSLaLhmMqhNnhRWKAc00k655pkzs";
  const onToken = (token) => {
    console.log(token);
    alert("Payment succesful");
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

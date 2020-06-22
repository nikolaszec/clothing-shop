import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItemsTotal,
  selectCartItems,
} from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      {cartItems.length > 0 ? (
        <React.Fragment>
          <span className="total">Total $ {total}</span>
          <StripeCheckoutButton price={total} />
          <div className="test-message">
            <strong>Card number for testing -></strong> 4242424242424242{" "}
            <strong>EXP DATE</strong> -> 12/21 <strong>CVC</strong> 123
          </div>
        </React.Fragment>
      ) : (
        <h3>No products in cart.</h3>
      )}
    </div>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal,
  });

export default connect(mapStateToProps)(CheckoutPage);

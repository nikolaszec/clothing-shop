import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.util";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <NavLink activeClassName="active-link" className="option" to="/shop">
          SHOP
        </NavLink>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <NavLink
            className="option"
            to="/signIn"
            activeClassName="active-link"
          >
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </header>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden,
  });

export default connect(mapStateToProps)(Header);

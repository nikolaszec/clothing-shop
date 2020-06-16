import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

import "./App.scss";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CollectionPage from "./pages/collection/collection.component";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribe = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);
        userRef.onSnapshot((snapshot) => {
          const user = snapshot.data();
          setCurrentUser({
            id: snapshot.id,
            ...user,
          });
        });
      } else {
        setCurrentUser(authUser);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/:collectionId" component={CollectionPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signIn">
            {this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInAndSignUpPage />
            )}
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
  });

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

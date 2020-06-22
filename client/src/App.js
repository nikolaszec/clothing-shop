import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import Spinner from "./components/spinner/spinner.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component")
);
const CollectionPage = lazy(() =>
  import("./pages/collection/collection.component")
);

const ShopPage = lazy(() => import("./pages/shop/shop.component"));

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
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route
              exact
              path="/shop/:collectionId"
              component={CollectionPage}
            />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/signIn">
              {this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )}
            </Route>
          </Suspense>
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

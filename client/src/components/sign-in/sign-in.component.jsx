import React from "react";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.util";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    //to do
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error, "greskaaa");
      this.setState({ error: error.message });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
    if (this.state.error) {
      this.setState({ error: "" });
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <h3 className="subtitle">Sign in with email or password</h3>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
        {this.state.error ? <p>{this.state.error}</p> : null}
      </div>
    );
  }
}

export default SignIn;

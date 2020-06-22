import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";

export default class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords should be equal.");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      this.setState({ error: error.message });
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    if (this.state.error) {
      this.setState({ error: "" });
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">I do not have an account</h1>
        <h3 className="subtitle">Sign up with email or password</h3>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            onChange={this.handleChange}
            name="displayName"
            value={displayName}
            required
          />
          <FormInput
            label="Email"
            type="email"
            onChange={this.handleChange}
            name="email"
            value={email}
            required
          />
          <FormInput
            label="Password"
            type="password"
            onChange={this.handleChange}
            name="password"
            value={password}
            required
          />
          <FormInput
            label="Confirm Password"
            type="password"
            onChange={this.handleChange}
            name="confirmPassword"
            value={confirmPassword}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
        {this.state.error ? <p>{this.state.error}</p> : null}
      </div>
    );
  }
}

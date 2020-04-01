import React, { Component } from "react";
import { connect } from "react-redux";
import UserForm from "./UserForm";
import { signup } from "../store/actions/userActions";

class SignupFormContainer extends Component {
  state = {
    signup: true,
    email: "",
    password: "",
    username: ""
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.signup(this.state);

    this.setState({
      email: "",
      password: "",
      username: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const newUser = this.props.user.createdUser;
    if (this.props.user.username) return null;
    return (
      <div>
        <h1>If you don't have any account, please Sign up</h1>
        <SignupForm
          values={this.state}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        {newUser ? <p>Thank you for signing up {newUser}</p> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  signup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupFormContainer);

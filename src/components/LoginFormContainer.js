import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { login } from "../store/actions/userActions";

class LoginFormContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.login(this.state.email, this.state.password);

    this.setState({
      email: "",
      password: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.user) return <h1> Welcome {this.props.user}</h1>;
    return (
      <div>
        <LoginForm
          values={this.state}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);

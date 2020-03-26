import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

class NavbarContainer extends Component {
  state = {
    name: "Navbar"
  };
  render() {
    return (
      <div>
        <Navbar name={this.state.name} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);

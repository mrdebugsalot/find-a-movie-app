import React, { Component } from "react";
import { connect } from "react-redux";
import Routes from "./Routes/Routes";

export class App extends Component {
  render() {
    return (
      <>
        <h2 className="app-header">Movie Finder</h2>
        <Routes />
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);

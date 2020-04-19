import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import { bindActionCreators } from "redux";
import * as actions from "../store/actions/searchActions";

class SearchBox extends Component {
  state = {
    searchPhrase: "",
  };

  handleSearchClick = () => {
    this.props.actions.searchForMovies(this.state.searchPhrase);
  };

  handleSearchChange = (e) => {
    this.setState({ searchPhrase: e.target.value });
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          onChange={(e) => this.handleSearchChange(e)}
          label="Type in a movie name..."
          margin="normal"
        />
        <div className="btn-primary">
          <Button
            onClick={this.handleSearchClick}
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

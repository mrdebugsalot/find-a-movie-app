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

  componentDidMount() {
    if (this.props.searchPhrase && this.props.searchPhrase.length > 0) {
      this.setState({ searchPhrase: this.props.searchPhrase });
    }
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.props.actions.searchForMovies(this.state.searchPhrase);
    }
  };

  handleSearchClick = () => {
    this.props.actions.searchForMovies(this.state.searchPhrase);
  };

  handleSearchChange = (e) => {
    this.setState({ searchPhrase: e.target.value });
  };

  render() {
    return (
      <div className="srch-box">
        <div className="txt-fld">
          <TextField
            onKeyPress={this.handleKeyPress}
            onChange={(e) => this.handleSearchChange(e)}
            label="Type in a movie name..."
            margin="normal"
            value={this.state.searchPhrase}
          />
        </div>
        <div className="btn-primary">
          <Button
            onClick={this.handleSearchClick}
            variant="contained"
            color="primary"
            disabled={this.state.searchPhrase.length === 0}
          >
            Search
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchPhrase: state.search.currentSearchPhrase,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { Strings } from "../../dataProvider/localize";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/searchActions";

class SearchBox extends Component {
  state = {
    searchPhrase: "",
    loading: false,
  };

  componentDidMount() {
    if (this.props.searchPhrase && this.props.searchPhrase.length > 0) {
      this.setState({ searchPhrase: this.props.searchPhrase });
    }
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.setState({ loading: true });
      this.props.actions
        .searchForMovies(this.state.searchPhrase)
        .then((res) => {
          this.setState({ loading: false });
        })
        .catch((err) => {
          this.setState({ loading: false });
        });
    }
  };

  handleSearchClick = () => {
    this.setState({ loading: true });
    this.props.actions
      .searchForMovies(this.state.searchPhrase)
      .then((res) => {
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
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
            label={Strings.search_label_text}
            margin="normal"
            value={this.state.searchPhrase}
          />
        </div>
        <div className="btn-primary">
          <Button
            onClick={this.handleSearchClick}
            variant="contained"
            color="primary"
            disabled={this.state.searchPhrase.length === 0 || this.state.loading}
          >
            {Strings.search_btn_text}
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

import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import * as searchActions from "../store/actions/searchActions";
import * as movieInfoActions from "../store/actions/movieInfoActions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import defaultIcon from "../assets/movie-icon-png-6.jpg";

export class SearchResults extends Component {

  handlePageChange = (event, pageNumber) => {
    this.props.searchActions.searchForMovies(
      this.props.searchPhrase,
      pageNumber
    );
  };

  handleMovieClick = (item) => {};

  render() {
    const paginationView = (
      <div className="pgn-main">
        <Pagination
          onChange={this.handlePageChange}
          count={this.props.totalPages}
          variant="outlined"
          shape="rounded"
        />
      </div>
    );

    const gridView = (
      <div className="grid-main">
        {this.props.movieList && this.props.movieList.length > 0
          ? this.props.movieList.map((listItem, index) => {
              return (
                <Link
                  key={index}
                  to={{ pathname: "/showMovie", state: listItem.imdbID }}
                >
                  <div className="grid-item-content">
                    {
                      <img
                        className="grid-item-img"
                        src={
                          listItem.Poster === "N/A"
                            ? defaultIcon
                            : listItem.Poster
                        }
                        alt="poster-img"
                        height="100"
                        width="auto"
                      />
                    }
                    <h3>
                      {listItem.Title} ({listItem.Year})
                    </h3>
                  </div>
                </Link>
              );
            })
          : null}
      </div>
    );

    return this.props.movieList && this.props.movieList.length > 0 ? (
      <div className="srch-res">
        {gridView}
        {paginationView}
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  movieList: state.search.movieList,
  totalPages: state.search.totalPages,
  searchPhrase: state.search.currentSearchPhrase,
});

const mapDispatchToProps = (dispatch) => ({
  searchActions: bindActionCreators(searchActions, dispatch),
  movieInfoActions: bindActionCreators(movieInfoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

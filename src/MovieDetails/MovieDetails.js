import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/movieInfoActions";
import { bindActionCreators } from "redux";
import Card from "@material-ui/core/Card";
import defaultMovieIcon from "../assets/movie-icon-png-6.jpg";
import rottenTomatoesIcon from "../assets/1200px-Rotten_Tomatoes.svg.png";
import metaScoreIcon from "../assets/1200px-Metacritic.svg.png";

export class MovieDetails extends Component {
  componentDidMount() {
    this.props.actions.showMovieInformation(this.props.history.location.state);
  }

  handleGoBack = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  };

  componentWillUnmount() {
    this.props.actions.reset();
  }

  render() {
    const movieDetails = this.props.movieInfo;
    const keys = Object.keys(movieDetails);

    return keys && keys.length > 0 ? (
      <Card className="content-card">
        <div>
          <button onClick={this.handleGoBack} className="btn-back">
            <span className="material-icons">keyboard_backspace</span>
          </button>
        </div>
        <div className="content-primary">
          <div className="poster-img">
            <img
              src={
                movieDetails.Poster === "N/A"
                  ? defaultMovieIcon
                  : movieDetails.Poster
              }
              alt="posterImg"
            />
          </div>
          <div className="det-primary">
            <div className="title-header">
              <h1>
                {movieDetails.Title} ({movieDetails.Year})
              </h1>
              <div className="rating">
                <span className="material-icons">grade</span>
                <div className="rating-count">
                  <h2>{movieDetails.imdbRating}</h2>
                  <p>{movieDetails.imdbVotes}</p>
                </div>
              </div>
            </div>
            <div className="title-footer">
              <div>
                <span>{movieDetails.Rated}</span>
              </div>
              <span>|</span>
              <div>
                <span>{movieDetails.Runtime}</span>
              </div>
              <span>|</span>
              <div>
                <span>{movieDetails.Genre}</span>
              </div>
              <span>|</span>
              <div>
                <span>{movieDetails.Released}</span>
              </div>
            </div>
            <div className="description">
              {/* <label>Plot Summary :</label> */}
              <p>{movieDetails.Plot}</p>
            </div>
            <div className="people">
              <div className="people-class">
                <label>Director:</label>
                <p>{movieDetails.Director}</p>
              </div>
              <div className="people-class">
                <label>Writer(s):</label>
                <p>{movieDetails.Writer}</p>
              </div>
              <div className="people-class">
                <label>Actors:</label>
                <p>{movieDetails.Actors}</p>
              </div>
            </div>
            {movieDetails.Ratings &&
            movieDetails.Ratings[1] &&
            movieDetails.Ratings[2] ? (
              <div className="other-ratings">
                <div className="other-ratings-item">
                  <img
                    src={rottenTomatoesIcon}
                    height="50px"
                    width="auto"
                    alt="posterImg"
                  />
                  <p className="ratings-text">{movieDetails.Ratings[1].Value}</p>
                </div>
                <div className="other-ratings-item">
                  <img
                    src={metaScoreIcon}
                    height="50px"
                    width="auto"
                    alt="posterImg"
                  />
                  <p className="ratings-text">{movieDetails.Ratings[2].Value}</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Card>
    ) : (
      <div className="loader">Loading...</div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieInfo: state.movieInfo.movieDetails,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

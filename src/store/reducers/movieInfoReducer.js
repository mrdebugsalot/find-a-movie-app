import {
  VIEW_MOVIE_DETAILS,
  RESET_MOVIE_DETAILS,
} from "../../dataProvider/constants";

const INITIAL_STATE = {
  movieDetails: {},
};

const movieInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VIEW_MOVIE_DETAILS:
      return {
        movieDetails: action.payload,
      };
    case RESET_MOVIE_DETAILS:
      return {
        movieDetails: {},
      };
    default:
      return {
        ...state,
      };
  }
};

export default movieInfoReducer;

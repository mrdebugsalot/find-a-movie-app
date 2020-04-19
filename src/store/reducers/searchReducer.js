import { SEARCH_MOVIES } from "../../dataProvider/constants";
import { defaultPageSize } from "../../config/apiConfig";

const INITIAL_STATE = {
  currentSearchPhrase: "",
  movieList: [],
  totalPages: 0,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movieList: action.payload,
        currentSearchPhrase: action.currentSearchPhrase,
        totalPages: Math.ceil(action.totalResults / defaultPageSize),
      };
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;

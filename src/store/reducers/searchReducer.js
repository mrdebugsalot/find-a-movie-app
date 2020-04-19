import { SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAIL } from "../../dataProvider/constants";
import { defaultPageSize } from "../../config/apiConfig";

const INITIAL_STATE = {
  currentSearchPhrase: "",
  movieList: [],
  totalPages: 0,
  searchFailed: false
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        searchFailed: false,
        movieList: action.payload,
        currentSearchPhrase: action.currentSearchPhrase,
        totalPages: Math.ceil(action.totalResults / defaultPageSize),
      };
    case SEARCH_MOVIES_FAIL:
      return {
        ...state,
        searchFailed: true
      }
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;

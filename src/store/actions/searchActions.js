import axios from "axios";
import { API_KEY, BASE_URL } from "../../config/apiConfig";
import { SEARCH_MOVIES } from "../../dataProvider/constants";

export const searchForMovies = (searchPhrase, pageNumber = 1) => (dispatch) => {
  const url = `${BASE_URL}${API_KEY}&s=${searchPhrase}&page=${pageNumber}`;
  axios
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        dispatch({
          type: SEARCH_MOVIES,
          payload: res.data.Search,
          currentSearchPhrase: searchPhrase,
          totalResults: parseInt(res.data.totalResults),
        })
      }
      // return Promise.resolve(true)
    })
    .catch((err) => {
      console.log(err);
    });
};

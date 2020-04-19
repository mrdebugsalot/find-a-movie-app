import axios from "axios";
import { API_KEY, BASE_URL } from "../../config/apiConfig";
import {
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAIL,
} from "../../dataProvider/constants";

export const searchForMovies = (searchPhrase, pageNumber = 1) => (dispatch) => {
  const url = `${BASE_URL}${API_KEY}&s=${searchPhrase}&page=${pageNumber}`;
  return axios
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        if (res.data.Response === "True") {
          dispatch({
            type: SEARCH_MOVIES_SUCCESS,
            payload: res.data.Search,
            currentSearchPhrase: searchPhrase,
            totalResults: parseInt(res.data.totalResults),
          });
        } else {
          dispatch({
            type: SEARCH_MOVIES_FAIL,
          });
        }
        return Promise.resolve(true)
      }
    })
    .catch((err) => {
      return Promise.reject(err)
    });
};

import axios from "axios";
import { API_KEY, BASE_URL } from "../../config/apiConfig";
import { VIEW_MOVIE_DETAILS, RESET_MOVIE_DETAILS } from "../../dataProvider/constants";

export const reset = () => (dispatch) => {
  dispatch({
    type: RESET_MOVIE_DETAILS
  })
}

export const showMovieInformation = (id) => (dispatch) => {
  const url = `${BASE_URL}${API_KEY}&i=${id}`;
  axios
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        dispatch({
          type: VIEW_MOVIE_DETAILS,
          payload: res.data
        })
      }
      // return Promise.resolve(true)
    })
    .catch((err) => {
      console.log(err);
    });
};
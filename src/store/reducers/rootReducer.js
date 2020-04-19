import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import movieInfoReducer from './movieInfoReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  movieInfo: movieInfoReducer
})

export default (state, action) => {
  return rootReducer(state, action)
}
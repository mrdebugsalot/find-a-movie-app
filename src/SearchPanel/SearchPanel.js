import React, { Component } from 'react'
import SearchBox from "../SearchBox/SearchBox";
import MoviesList from "./MoviesList/MoviesList";

export class SearchPanel extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <MoviesList />
      </div>
    )
  }
}

export default SearchPanel

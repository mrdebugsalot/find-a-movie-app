import React, { Component } from 'react'
import MoviesListItem from '../MoviesList/MoviesListItem/MoviesListItem'


export class SearchPanel extends Component {
  render() {
    return (
      <div>
        <MoviesListItem />
        <MoviesListItem />
        <MoviesListItem />
        <MoviesListItem />
      </div>
    )
  }
}

export default SearchPanel

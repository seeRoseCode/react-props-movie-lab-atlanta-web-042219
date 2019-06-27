import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    return movieData.map((movie) => {
    return  <MovieCard IMDBRating={movie.IMDBRating} title={movie.title} genres={movie.genres} poster={movie.poster}/>
    })
  }


  render() {
    console.log(this.generateMovieCards())
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

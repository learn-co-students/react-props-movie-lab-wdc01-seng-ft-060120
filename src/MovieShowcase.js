import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {

    // console.log(movieData)
    // map over your movieData array and return an array of the correct JSX
    return (
      movieData.map((movie, index) => <MovieCard 
      key = {index}
      title ={movie.title}
      IMDBRating ={movie.IMDBRating}
      genres ={movie.genres}
      poster ={movie.poster}
      />
    ))
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
      
    )
  }
}


// MoviesShowCase is parent Component of MovieCard
//===> props will be passed in from MoviesShoCase => MovieCard
// MovieCard is parent Component of FrontCard and BackCard
// ==> props will be passed in from MovieCard to Front or BackCard
// default props will hosted inside MoviedCard
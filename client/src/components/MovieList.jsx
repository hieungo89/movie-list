import React from 'react';
import MovieListEntries from './MovieListEntries.jsx';

let MovieList = ({ movies, toggle }) => (
  <div>
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieListEntries key={movie.title} movie={movie} toggle={toggle}/>
      ))}
    </div>
  </div>
)

export default MovieList;
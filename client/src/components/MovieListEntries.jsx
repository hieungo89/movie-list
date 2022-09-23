import React from 'react';

let MovieListEntries = ({ movie, toggle }) => {
  // console.log("movie", movie);


  return (
    <div className="single-movie">
      <div className="movie-title">{movie.title}</div>
      <button className="movie-watch" value={movie.title} onClick={(e) => toggle(movie, e)}>watch</button>
    </div>
  )
}

export default MovieListEntries;
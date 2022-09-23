import React from 'react';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import MovieList from './MovieList.jsx';
import moviesExample from '../moviesExample.js';
import ToggleWatched from './ToggleWatched.jsx';

const App = (props) => {
  const [allMoviesList, setAllMoviesList] = React.useState(moviesExample);
  const [movieList, setMovieList] = React.useState(moviesExample);
  const [entry, setEntry] = React.useState('');

  let timeout = null;
  const handleSearch = (e) => {
    let filteredList = [];
    for (let i = 0; i < allMoviesList.length; i++) {
      if (allMoviesList[i].title.includes(e) || allMoviesList[i].title.toLowerCase().includes(e)) {
        filteredList.push(allMoviesList[i]);
      }
    }

    if (filteredList.length === 0) {
      filteredList.push({ title: 'No movie by that name found. Try again!' })
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setMovieList(filteredList);
    }, 500);
  }

  let addMovieToList = (movie) => {
    let wholeMovie = {};
    wholeMovie.title = movie;
    wholeMovie.watch = false;
    setAllMoviesList(allMoviesList.concat([wholeMovie]));
    setMovieList(allMoviesList.concat([wholeMovie]));
  }

  let handleWatched = (e) => {
    let clicked = e.target.className;
    let watchedList = [];
    for (let i = 0; i < allMoviesList.length; i++) {
      if (clicked === 'list') {
        watchedList.push(allMoviesList[i]);
      } else if (allMoviesList[i].watch && clicked === 'watched') {
        watchedList.push(allMoviesList[i]);
      } else if (!allMoviesList[i].watch && clicked === 'to-watched') {
        watchedList.push(allMoviesList[i])
      }
    }
    setMovieList(watchedList);
  }

  let handleToggle = (movie, e) => {
    console.log('movie: ', movie, 'event: ', e.target);
    movie.watch = !movie.watch;

    let watchedList = [];
    for (let i = 0; i < allMoviesList.length; i++) {
      if (allMoviesList[i].watch) {
        watchedList.push(allMoviesList[i]);
      } else if (!allMoviesList[i].watch) {
        watchedList.push(allMoviesList[i])
      }
    }
    setMovieList(allMoviesList);
  }

  return (
    <div>
      <div>
        <header>MovieList</header>
        <br></br>
      </div>

      <div>
        <AddMovie add={addMovieToList} entry={entry} addEntry={setEntry} />
        <br></br>
      </div>

      <div>
        <Search handleSearch={(e) => handleSearch(e)} />
        <br></br>
      </div>

      <div>
        <ToggleWatched handleWatched={(e) => handleWatched(e)} />
        <br></br>
      </div>

      <div>
        <MovieList movies={movieList} toggle={handleToggle} />
      </div>

    </div>
  );
};

export default App;
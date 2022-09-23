import React from 'react';

const Search = (props) => {
  // console.log('search handler: ', handleSearch);

  return (
    <div className="search">
      <input className="search-input" text="text"
        placeholder="Search..."
        // value={props.entry}
        onChange={(e) => props.handleSearch(e.target.value)}
        >
      </input>
      <button className="search-button" color="green">Go!</button>
    </div>
  );
};

export default Search;
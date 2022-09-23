import React from 'react';

const AddMovie = ({ add, entry, addEntry }) => (
  <div className="add-movie">
    <input className="add-movie-input"
      text="text"
      placeholder="Add Movie Title Here"
      value={entry}
      onChange={(e) => addEntry(e.target.value)}>
    </input>
    <button className="add-movie-button" onClick={() => { add(entry) }}>Add</button>
  </div>
);

export default AddMovie;
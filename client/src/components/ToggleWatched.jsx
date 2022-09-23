import React from 'react';

const ToggleWatched = ({ handleWatched }) => (
  <div className="toggle-watched">
    <button className="list" onClick={handleWatched}>List ALL</button>
    <button className="watched" onClick={handleWatched}>Watched</button>
    <button className="to-watched" onClick={handleWatched}>To Watch</button>
  </div>
);

export default ToggleWatched;
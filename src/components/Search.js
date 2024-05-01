import React from "react";

function Search({searchPlants, setSearch}) {
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPlants}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;

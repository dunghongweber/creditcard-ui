import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="searchbar row">
      <div className="input-field col s12">
        <i className="material-icons prefix">search</i>
        <input
          id="searchInput"
          type="text"
          className="validate"
          onChange={handleSearch}
        />
        <label htmlFor="searchInput">Search Card by Name</label>
      </div>
    </div>
  );
};

export default SearchBar;

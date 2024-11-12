import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => onSearch(e.target.value)}
      className=" mt-5 ml-3"
    />
  );
}

export default SearchBar;

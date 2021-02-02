import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="Search..."
      onChange={onChange}
    />
  );
};
export default SearchBar;

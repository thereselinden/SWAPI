import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={value}
        placeholder="Search character here..."
        onChange={onChange}
      />
    </div>
  );
};
export default SearchBar;

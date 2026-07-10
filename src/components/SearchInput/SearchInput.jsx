import React from 'react';
import './SearchInput.css';
import { RiSearchLine } from 'react-icons/ri';

const SearchInput = ({ className = '', icon = false, ...props }) => {
  return (
    <div className={`filter-input-wrapper ${className}`}>
      {icon && <RiSearchLine className="search-icon" />}
      <input className={`filter-input ${icon ? 'with-icon' : ''}`} {...props} />
    </div>
  );
};

export default SearchInput;

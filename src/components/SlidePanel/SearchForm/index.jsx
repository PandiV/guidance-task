import React from "react";
import SearchIcon from "assets/icons/search.svg";
import FilterIcon from "assets/icons/filter.svg";

const SearchForm = () => {
  return (
    <div className="main-slide-panel-search-form">
      <div className="search-input">
        <img className="search-input-icon" src={SearchIcon} alt="search icon" />
        <input type="text" placeholder="Search icons and shapes" />
        <img className="search-input-icon" src={FilterIcon} alt="filter icon" />
      </div>
    </div>
  );
};

export default SearchForm;

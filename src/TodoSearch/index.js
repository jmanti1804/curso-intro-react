import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="SearchContainer">
        <span> &#127859;</span>
        <input
          placeholder="Search"
          className="SearchInput"
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </div>
    </React.Fragment>
  );
}

export { TodoSearch };

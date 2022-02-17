import React, { useState } from "react";
import "./AutoCompleteSearchBar.scss";

function AutoCompleteSearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");

  console.log("setSelectedTitle : ", selectedTitle);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log("searchWord : ", searchWord);

    if (searchWord.length >= 2) {
      console.log("searchWord.length : ", searchWord.length);

      var search_result = data.filter((v) => v.title.includes(searchWord));
      console.log(search_result);
      setFilteredData(search_result);
    }
    setSelectedTitle(searchWord);
  };

  const selectSuggestion = (selectedTitleByUser) => {
    console.log("검색어 클릭 : ", selectedTitleByUser);
    setSelectedTitle(selectedTitleByUser);
  };

  return (
    <div className="AutoCompleteSearchInputContainer">
      <h2>AutoComplete Search</h2>
      <div className="AutoCompleteSearchInput">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          value={selectedTitle}
        />
        <div className="searchIcon"></div>
      </div>
      <div className="dataResult">
        {filteredData.length !== 0 &&
          filteredData.map((value, key) => {
            return (
              <p key={key} onClick={() => selectSuggestion(value.title)}>
                {value.title}
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default AutoCompleteSearchBar;

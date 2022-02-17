import React from "react";
import AutoCompleteSearchBar from "../components/AutoCompleteSearchBar";
import BookData from "../Data.json"

function AutoCompleteSearchPage() {
  return (
    <>
      <AutoCompleteSearchBar placeholder="enter a Book Name.." data={BookData} />
    </>
  );
}

export default AutoCompleteSearchPage;
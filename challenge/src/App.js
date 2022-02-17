import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import TogglePage from "./pages/TogglePage";
import ModalPage from "./pages/ModalPage";
import MainPamge from "./pages/MainPage";
import TabsPage from "./pages/TabsPage";
import TagsInputPage from "./pages/TagsInputPage";
import AutoCompleteSearchPage from "./pages/AutoCompleteSearchPage";


function App() {
  return (
    <>
      <Link to="/toggle">
        <span>toggle</span> 
      </Link>
      &nbsp;&nbsp;
      <Link to="/modal">
        <span>modal</span>
      </Link>

      &nbsp;&nbsp;
      <Link to="/tabs">
        <span>tabs</span>
      </Link>

      &nbsp;&nbsp;
      <Link to="/search">
        <span>tagsInput</span>
      </Link>      

      &nbsp;&nbsp;
      <Link to="/auto-search">
        <span>auto-search</span>
      </Link>      

      <br />

      <Routes>
        <Route path="/toggle" exact element={<TogglePage />} />
        <Route path="/modal" exact element={<ModalPage />} />
        <Route path="/tabs" exact element={<TabsPage />} />
        <Route path="/search" exact element={<TagsInputPage />} />
        <Route path="/auto-search" exact element={<AutoCompleteSearchPage />} />
        <Route path="/" element={<MainPamge />} />
      </Routes>
    </>
  );
}


export default App;
import React, { useState } from "react";
import "./Tabs.scss";

function Tabs() {
  const [index, setIndex] = useState(0);

  return (
    <div className="Tabs">
      <div className="tabsList">
        <div
          className={`tabHead ${index === 0 ? "active" : null}`}
          onClick={() => setIndex(0)}
        >
          Tab1
        </div>
        <div
          className={`tabHead ${index === 1 ? "active" : null}`}
          onClick={() => setIndex(1)}
        >
          Tab2
        </div>
        <div
          className={`tabHead ${index === 2 ? "active" : null}`}
          onClick={() => setIndex(2)}
        >
          Tab3
        </div>
      </div>

      <div className="tabContent" hidden={index !== 0}>
        this is First tab content
      </div>
      <div className="tabContent" hidden={index !== 1}>
        this is Second tab content
      </div>
      <div className="tabContent" hidden={index !== 2}>
        this is third tab content
      </div>
    </div>
  );
}

export default Tabs;

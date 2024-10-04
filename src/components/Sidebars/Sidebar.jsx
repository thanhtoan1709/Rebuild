import React, { useState } from "react";
import "./Sidebar.css";
import FilterSection from "./filterSection";
import ComponentGowhere from "./ComponentGowhere";
import ComponentStyle from "./ComponentStyle";
import ComponentEvent from "./ComponentEvent";
const Sidebar = () => {
  const handleReset = () => {
    // setSelectedStyle([]);
    // setSelectedEvent([]);
    // setSelectedColor([]);
  };

  const handleApplyFilters = () => {
    console.log({
      // selectedStyle,
      // selectedEvent,
      // selectedColor,
    });
    // Add your logic to apply the filters here
  };

  return (
    <div className="sidebar">
      <div className="search-box">
        <input type="text" placeholder="Gợi ý..." />
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleApplyFilters}>Apply</button>
      </div>
      <ComponentGowhere />
      <ComponentStyle />
      <ComponentEvent />
    </div>
  );
};

export default Sidebar;

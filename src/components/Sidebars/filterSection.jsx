import React from "react";

const filterSection = ({ title, children, isActive, onClick }) => (
  <div className={`filter-section ${isActive ? "active" : ""}`}>
    <h3 onClick={onClick}>
      {title}
      <span className="accordion-header-icon">▼</span>
    </h3>
    <div className="filter-content">{children}</div>
  </div>
);
export default filterSection;

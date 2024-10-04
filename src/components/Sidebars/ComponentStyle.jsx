import React, { useState } from "react";
import FilterSection from "./filterSection";
const ComponentStyle = () => {
  const [activeSections, setActiveSections] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState([]);
  const handleCheckboxChange = (setSelected) => (e) => {
    const { value, checked } = e.target;
    setSelected((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((item) => item !== value);
      }
    });
  };
  const toggleAccordion = (index) => {
    if (activeSections.includes(index)) {
      setActiveSections(activeSections.filter((i) => i !== index));
    } else {
      setActiveSections([...activeSections, index]);
    }
  };
  return (
    <div>
      {" "}
      <FilterSection
        title="- Style"
        isActive={activeSections.includes(1)}
        onClick={() => toggleAccordion(1)}
      >
        <label>
          <input
            type="checkbox"
            value="Năng động"
            checked={selectedStyle.includes("Năng động")}
            onChange={handleCheckboxChange(setSelectedStyle)}
          />
          Năng động
        </label>
        <label>
          <input
            type="checkbox"
            value="Vintage"
            checked={selectedStyle.includes("Vintage")}
            onChange={handleCheckboxChange(setSelectedStyle)}
          />
          Vintage
        </label>
        <label>
          <input
            type="checkbox"
            value="Thanh lịch"
            checked={selectedStyle.includes("Thanh lịch")}
            onChange={handleCheckboxChange(setSelectedStyle)}
          />
          Thanh lịch
        </label>
        <label>
          <input
            type="checkbox"
            value="Cổ điển"
            checked={selectedStyle.includes("Cổ điển")}
            onChange={handleCheckboxChange(setSelectedStyle)}
          />
          Cổ điển
        </label>
        <label>
          <input
            type="checkbox"
            value="Boho"
            checked={selectedStyle.includes("Boho")}
            onChange={handleCheckboxChange(setSelectedStyle)}
          />
          Boho
        </label>
        <label>
          <input
            type="checkbox"
            value="Streetwear"
            checked={selectedStyle.includes("Streetwear")}
            onChange={handleCheckboxChange(setSelectedStyle)}
          />
          Streetwear
        </label>
        <label>
          <input
            type="checkbox"
            value="Romantic"
            checked={selectedStyle.includes("Romantic")}
            onChange={handleCheckboxChange(setSelectedStyle)}
          />
          Romantic
        </label>
      </FilterSection>
    </div>
  );
};

export default ComponentStyle;

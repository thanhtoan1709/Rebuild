import React, { useState } from "react";
import FilterSection from "./filterSection";
const ComponentGowhere = () => {
  const [activeSections, setActiveSections] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
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
        title="- Đi đâu"
        isActive={activeSections.includes(0)}
        onClick={() => toggleAccordion(0)}
      >
        <label>
          <input
            type="checkbox"
            value="Công việc"
            checked={selectedCategory.includes("Công việc")}
            onChange={handleCheckboxChange(setSelectedCategory)}
          />
          Công việc
        </label>
        <label>
          <input
            type="checkbox"
            value="Thể thao"
            checked={selectedCategory.includes("Thể thao")}
            onChange={handleCheckboxChange(setSelectedCategory)}
          />
          Thể thao
        </label>
        <label>
          <input
            type="checkbox"
            value="Hẹn hò"
            checked={selectedCategory.includes("Hẹn hò")}
            onChange={handleCheckboxChange(setSelectedCategory)}
          />
          Hẹn hò
        </label>
        <label>
          <input
            type="checkbox"
            value="Du lịch"
            checked={selectedCategory.includes("Du lịch")}
            onChange={handleCheckboxChange(setSelectedCategory)}
          />
          Du lịch
        </label>
        <label>
          <input
            type="checkbox"
            value="Sự kiện đặc biệt"
            checked={selectedCategory.includes("Sự kiện đặc biệt")}
            onChange={handleCheckboxChange(setSelectedCategory)}
          />
          Sự kiện đặc biệt
        </label>
      </FilterSection>
    </div>
  );
};

export default ComponentGowhere;

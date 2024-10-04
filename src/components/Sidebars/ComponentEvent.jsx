import React, { useState } from "react";
import FilterSection from "./filterSection";
const ComponentEvent = () => {
  const [activeSections, setActiveSections] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState([]);
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
        title="- Sự kiện đặc biệt"
        isActive={activeSections.includes(2)}
        onClick={() => toggleAccordion(2)}
      >
        <label>
          <input
            type="checkbox"
            value="Tết"
            checked={selectedEvent.includes("Tết")}
            onChange={handleCheckboxChange(setSelectedEvent)}
          />
          Tết
        </label>
        <label>
          <input
            type="checkbox"
            value="Valentine"
            checked={selectedEvent.includes("Valentine")}
            onChange={handleCheckboxChange(setSelectedEvent)}
          />
          Valentine
        </label>
        <label>
          <input
            type="checkbox"
            value="Halloween"
            checked={selectedEvent.includes("Halloween")}
            onChange={handleCheckboxChange(setSelectedEvent)}
          />
          Halloween
        </label>
        <label>
          <input
            type="checkbox"
            value="Lễ hội"
            checked={selectedEvent.includes("Lễ hội")}
            onChange={handleCheckboxChange(setSelectedEvent)}
          />
          Lễ hội
        </label>
      </FilterSection>
    </div>
  );
};

export default ComponentEvent;

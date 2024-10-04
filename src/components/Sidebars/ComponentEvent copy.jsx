import React, { useState } from "react";
import FilterSection from "./filterSection";
const ComponentEvent = () => {
  const [activeSections, setActiveSections] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
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
        title="- Tone màu"
        isActive={activeSections.includes(3)}
        onClick={() => toggleAccordion(3)}
      >
        <label>
          <input
            type="checkbox"
            value="Trắng"
            checked={selectedColor.includes("Trắng")}
            onChange={handleCheckboxChange(setSelectedColor)}
            className={`color-option white`}
          />
          Trắng
        </label>
        <label>
          <input
            type="checkbox"
            value="Đỏ"
            checked={selectedColor.includes("Đỏ")}
            onChange={handleCheckboxChange(setSelectedColor)}
            className={`color-option red`}
          />
          Đỏ
        </label>
        <label>
          <input
            type="checkbox"
            value="Tím"
            checked={selectedColor.includes("Tím")}
            onChange={handleCheckboxChange(setSelectedColor)}
            className={`color-option purple`}
          />
          Tím
        </label>
        <label>
          <input
            type="checkbox"
            value="Vàng"
            checked={selectedColor.includes("Vàng")}
            onChange={handleCheckboxChange(setSelectedColor)}
            className={`color-option yellow`}
          />
          Vàng
        </label>
        <label>
          <input
            type="checkbox"
            value="Đen"
            checked={selectedColor.includes("Đen")}
            onChange={handleCheckboxChange(setSelectedColor)}
            className={`color-option black`}
          />
          Đen
        </label>
        <label>
          <input
            type="checkbox"
            value="Xám"
            checked={selectedColor.includes("Xám")}
            onChange={handleCheckboxChange(setSelectedColor)}
            className={`color-option gray`}
          />
          Xám
        </label>
        <label>
          <input
            type="checkbox"
            value="Xanh"
            checked={selectedColor.includes("Xanh")}
            onChange={handleCheckboxChange(setSelectedColor)}
            className={`color-option blue`}
          />
          Xanh
        </label>
      </FilterSection>
    </div>
  );
};

export default ComponentEvent;

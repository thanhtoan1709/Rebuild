import React, { useState } from "react";
import "./Sidebar.css";
import FilterSection from "./filterSection";

const Sidebar = () => {
  const [activeSections, setActiveSections] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);

  const toggleAccordion = (index) => {
    if (activeSections.includes(index)) {
      setActiveSections(activeSections.filter((i) => i !== index));
    } else {
      setActiveSections([...activeSections, index]);
    }
  };

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

  const handleReset = () => {
    setSelectedCategory([]);
    setSelectedStyle([]);
    setSelectedEvent([]);
    setSelectedColor([]);
  };

  const handleApplyFilters = () => {
    console.log({
      selectedCategory,
      selectedStyle,
      selectedEvent,
      selectedColor,
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

export default Sidebar;

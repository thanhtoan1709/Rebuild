import React from "react";
import "./mobileNavbar.css";
import logo from "../../../assets/bg-web.png";
const mobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="menu-header">
            <li>
              <a href="#qweqweqsa">Collections</a>{" "}
            </li>
            <li>
              <a href="#qweqweq">Top</a>
            </li>
            <li>
              <a href="#qweqweq">Bottom</a>
            </li>
            <li>
              <a href="#qweqweq">Accessories</a>
            </li>
            <li>
              <a href="#qweqweq">Outerwear</a>{" "}
            </li>
            <li>
              <a href="#qweqweq">Handbag</a>
            </li>
            <li>
              <a href="#qweqweq">Sale</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default mobileNavbar;

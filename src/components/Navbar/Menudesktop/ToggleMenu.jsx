import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/bg-web.png";
import "./HomeMenu.css";
const ToggleMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div>
      <div
        className={`desktop-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="desktop-menu-container">
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="menu-header">
            <li>
              <NavLink to="/Collections">Collections</NavLink>
            </li>
            <li>
              <NavLink to="/Top">Top</NavLink>
            </li>
            <li>
              <NavLink to="/Bottom">Bottom</NavLink>
            </li>
            <li>
              <NavLink to="/Acs">Accessories</NavLink>
            </li>
            <li>
              <NavLink to="/Outerwear">Outerwear</NavLink>
            </li>
            <li>
              <NavLink to="/Handbag">Handbag</NavLink>
            </li>
            <li>
              <NavLink to="/Sale">Sale</NavLink>
            </li>
          </ul>
          <div className="login-signup-member">
            <div>
              <NavLink to="/Login">Login</NavLink>
              <NavLink to="/Signup">SignUp</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleMenu;

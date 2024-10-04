import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/bg-web.png";
import "./HomeMenu.css";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

import UserComponent from "../../User/UserComponent";
import { cartItemsCountSelector } from "../../cart/selector";
import { useSelector } from "react-redux";

const ToggleMenu = ({ isOpen, toggleMenu, isLoggedIn }) => {
  const cartItemsCount = useSelector(cartItemsCountSelector);
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
              <UserComponent />
              {!isLoggedIn && ( // Hiển thị Register chỉ khi người dùng chưa đăng nhập
                <NavLink to="/register">Register</NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleMenu;

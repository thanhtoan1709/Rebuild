import React from "react";
import "./mobileNavbar.css";
import logo from "../../../assets/bg-web.png";
import { NavLink } from "react-router-dom";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";

import UserComponent from "../../User/UserComponent";
import { cartItemsCountSelector } from "../../cart/selector";
const mobileNavbar = ({ isOpen, toggleMenu, cartItemsCount }) => {
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
              <IconButton
                size="large"
                aria-label="show 4 new product"
                color="inherit"
              >
                <Badge badgeContent={cartItemsCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </li>
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
    </>
  );
};

export default mobileNavbar;

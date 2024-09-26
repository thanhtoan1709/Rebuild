import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/bg-web.png";
import MobileNav from "./mobileNav/mobileNavbar";
import { NavLink, useNavigate } from "react-router-dom";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ToggleMenu from "./Menudesktop/ToggleMenu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { cartItemsCountSelector } from "../cart/selector";
const Navbar = () => {
  // const [openMenu, setOpenmenu] = useState(false);
  // const toggleMenu = () => {
  //   setOpenmenu(!openMenu);
  // };
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const navigate = useNavigate();
  const buttonCheckCart = () => {
    return navigate("/cart");
  };
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <div>
      <MobileNav
        isOpen={openMenu}
        toggleMenu={toggleMenu}
        cartItemsCount={cartItemsCount}
      />
      <ToggleMenu isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="logo-menu">
            <div className="nav-logo">
              <NavLink to="/">
                <img src={logo} alt="Logo" />
              </NavLink>
            </div>
            <div className="nav-menu">
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
            </div>
          </div>
          <div className="search-cart">
            <IconButton size="large" aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              onClick={buttonCheckCart}
              size="large"
              aria-label="show 4 new product"
              color="inherit"
            >
              <Badge badgeContent={cartItemsCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              className="menu-home"
              onClick={toggleMenu}
              size="large"
              aria-label="show 4 new product"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* <button className="menu-home" href="#menu" onClick={toggleMenu}>
              <i className="material-symbols-outlined">
                {openMenu ? "close" : "menu"}
              </i>
            </button> */}
          </div>

          {/* nav-mobile */}
          <button className="btn-menu" onClick={toggleMenu}>
            <i className="material-symbols-outlined">
              {openMenu ? "close" : "menu"}
            </i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

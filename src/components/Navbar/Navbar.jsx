import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/bg-web.png";
import MobileNav from "./mobileNav/mobileNavbar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const [openMenu, setOpenmenu] = useState(false);
  // const toggleMenu = () => {
  //   setOpenmenu(!openMenu);
  // };

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <div>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
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
            <button href="#search">
              <i className="bx bx-search"></i>
            </button>
            <button href="#cart">
              <i className="bx bx-cart"></i>
            </button>
            <button href="#menu" onClick={toggleMenu}>
              <i className="material-symbols-outlined">
                {openMenu ? "close" : "menu"}
              </i>
            </button>
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

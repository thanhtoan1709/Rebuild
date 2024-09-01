import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/bg-web.png";
import MobileNav from "./mobileNav/mobileNavbar";

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
              <img src={logo} alt="Logo" />
            </div>
            <div className="nav-menu">
              <ul className="menu-header">
                <li>
                  <a href="#qweqweqsa">Collections</a>
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
                  <a href="#qweqweq">Outerwear</a>
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

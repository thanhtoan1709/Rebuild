import React from "react";
import "./Navbar.css";
import logo from "../../assets/bg-web.png";
const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="logo-menu">
            <div className="nav-logo">
              <img src={logo} alt="" />
            </div>
            <div className="nav-menu">
              <ul className="menu-header">
                <li>
                  <a href="http://">Collections</a>
                </li>
                <li>
                  <a href="http://">Top</a>
                </li>
                <li>
                  <a href="http://">Bottom</a>
                </li>
                <li>
                  <a href="http://">Accessories</a>
                </li>
                <li>
                  <a href="http://">Outewear</a>
                </li>
                <li>
                  <a href="http://">Handbag</a>
                </li>
                <li>
                  <a href="http://">Sale</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="search-cart">
            <a href="">
              <i class="bx bx-search"></i>
            </a>
            <a href="">
              <i class="bx bx-cart"></i>
            </a>
            <a href="">
              <i class="bx bx-menu"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

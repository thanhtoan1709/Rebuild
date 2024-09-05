import React from "react";
import { NavLink } from "react-router-dom";

const Handbag = () => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <NavLink to="#">Home</NavLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Handbag
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Handbag;

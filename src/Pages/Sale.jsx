import React from "react";
import { NavLink } from "react-router-dom";

const Sale = () => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <NavLink to="#">Home</NavLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Sale
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Sale;

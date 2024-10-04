import React from "react";
import { NavLink } from "react-router-dom";
const Bottom = () => {
  return (
    <div>
      {" "}
      {/* breadcumb*/}
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Bottom
          </li>
        </ol>
      </nav>
      {/* breadcrumb end */}
    </div>
  );
};

export default Bottom;

import React from "react";
import Sidebar from "../components/Sidebars/Sidebar";
import Products from "./Products";
const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Sidebar from "../components/Sidebars/Sidebar";
import Products from "./../components/Product/Products";
const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./Home.css";
import Products from "./../Product/Products";
import img2 from "../../assets/YCA-0022.webp";
import Footer from "../Footer/Footer";
import saleHome from "../Sale/homeSale";
const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="main-banner row">
          <img src={img2} alt="" />
        </div>
        <div className="row">
          <Products />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;

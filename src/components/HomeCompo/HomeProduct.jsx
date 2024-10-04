import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
const HomeProduct = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async (page) => {
    try {
      // Gọi API với Axios
      const res = await axios.get(
        `http://localhost:5000/api/v1/product?limit=4`
      );

      // Truy xuất dữ liệu trả về từ API (res.data.response)
      const data = res.data.response;

      // Kiểm tra nếu data.data là mảng
      if (Array.isArray(data.data)) {
        setProducts(data.data); // Cập nhật danh sách sản phẩm
      } else {
        throw new Error("Expected an array of products");
      }
    } catch (error) {
      console.error("Error fetching products:", error); // Bắt và log lỗi
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {" "}
      <div className="ContentProducts">
        <div className="ProductMain">
          <h2>
            {" "}
            <Link
              to={`/Collections`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Danh sách sản phẩm
            </Link>
          </h2>
          <div className="Product-all">
            {products.map((product) => (
              <div className="product-item" key={product.id_pr}>
                <div className="img-pro">
                  <Link to={`/product/${product.id_pr}`}>
                    <img
                      src={product.imageProduct}
                      alt={product.productName}
                      className="image-pro"
                      width="200"
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h3>{product.productName}</h3>
                  <div className="price-box">
                    <span> Giá: {product.priceProduct} VND</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDisplay from "./ProductDisplay";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [error, setError] = useState(null);
  const fetchProducts = async (page) => {
    try {
      // setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/v1/product?page=${page}`
      );
      const data = response.data;
      if (Array.isArray(data.products)) {
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } else {
        throw new Error("Expected an array of products");
      }
      // setLoading(false);
    } catch (error) {
      setError(error);
      console.error("Error fetching products:", error);
      // setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ProductDisplay products={products} />

      <div className="pag1nat1on">
        <button onClick={prevPage} disabled={currentPage === 1}>
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Products;

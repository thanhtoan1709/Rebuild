import axios from "axios";

// productServices.js
export const apiFetchOneProduct = async (id_pr) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/product/${id_pr}`
    );
    return response.data; // Trả về data của sản phẩm
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const apiFetchProducts = async (page) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/product?page=${page}`
    );
    return response.response; // Chỉ trả về data
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

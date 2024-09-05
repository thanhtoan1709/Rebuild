import axios from "axios";

export const apiGetProduct = async ({ skip, limit }) => {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/api/v1/product",
      data: { skip, limit },
    });
    console.log(response);
    return response; // Giải quyết Promise và trả về response
  } catch (error) {
    throw error; // Ném lỗi để bắt ở nơi gọi hàm
  }
};

import axios from "axios";

export const apiGetOne = (token) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/user/",
        headers: {
          Authorization: token ? `${token}` : null, // Sử dụng Authorization
        },
      });
      resolve(response.data); // Trả về dữ liệu người dùng
    } catch (error) {
      reject(error);
    }
  });

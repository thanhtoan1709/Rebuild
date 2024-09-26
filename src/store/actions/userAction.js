// // actions/userActions.js
// import axios from "axios";

// export const fetchUserData = (token) => async (dispatch) => {
//   try {
//     // Gửi yêu cầu API tới URL để lấy dữ liệu người dùng
//     const response = await axios.get("http://localhost:5000/api/v1/user", {
//       headers: {
//         Authorization: `Bearer ${token}`, // Sử dụng token để xác thực
//       },
//     });

//     // Nếu thành công, dispatch action để lưu dữ liệu người dùng vào Redux store
//     dispatch({
//       type: "USER_DATA_SUCCESS",
//       payload: response.data, // Dữ liệu người dùng nhận được từ API
//     });
//   } catch (error) {
//     // Nếu có lỗi, dispatch action để lưu lỗi vào Redux store
//     dispatch({
//       type: "USER_DATA_FAIL",
//       payload: error.message,
//     });
//   }
// };

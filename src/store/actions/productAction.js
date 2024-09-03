import { apiGetProduct } from "../../components/api/productsServices";

import actionTypes from "./actionType";
export const getProduct = (skip, limit) => async (dispatch) => {
  try {
    const response = await apiGetProduct({ skip, limit });

    if (response?.data.err === 0) {
      // Nếu đăng nhập thành công, dispatch action LOGIN_SUBMIT để cập nhật trạng thái trong Redux store
      dispatch({
        type: actionTypes.GET_PRODUCT,
        data: response?.data.token,
      });
    } else {
      // Đăng nhập thất bại, có thể xử lý thông báo lỗi ở đây
      console.error("Lấy dữ liệuu không thành công");
    }
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Đã xảy ra lỗi khi gọi API GET_PRODUCT:", error);
  }
};

import {
  apiLogginSuccess,
  apiloginSubmit,
} from "../../components/api/authServices";
import actionTypes from "./actionType";

export const loginSuccess = (id) => async (dispath) => {
  try {
    const response = await apiLogginSuccess(id);
    if (response?.data.err === 0) {
      dispath({
        type: actionTypes.LOGIN_SUCESS,
        data: response.data["access token"], // Lưu token vào Redux
        username: response.data.username || null, // Nếu có, không có thì để null
        avatar: response.data.avatar || null, // Nếu có, không có thì để null
      });
    } else {
      dispath({
        type: actionTypes.LOGIN_SUCESS,
        data: null,
      });
    }
  } catch (error) {
    dispath({
      type: actionTypes.LOGIN_SUCESS,
      data: null,
    });
  }
};
export const loginSubmit = (email, password) => async (dispatch) => {
  try {
    const response = await apiloginSubmit(email, password);

    // Kiểm tra nếu response.data tồn tại và có thuộc tính err
    if (response?.data?.err === 0) {
      // Nếu đăng nhập thành công, dispatch action LOGIN_SUBMIT để cập nhật trạng thái trong Redux store
      dispatch({
        type: actionTypes.LOGIN_SUBMIT,
        data: response.data["access token"], // Lưu token vào Redux
        username: response.data.username || null, // Nếu có, không có thì để null
        avatar: response.data.avatar || null, // Nếu có, không có thì để null
      });
      return response;
    } else {
      // Đăng nhập thất bại, xử lý thông báo lỗi
      console.error("Đăng nhập không thành công:", response?.data?.mess);
    }
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Đã xảy ra lỗi khi gọi API đăng nhập:", error);
  }
};
export const logOut = () => ({
  type: actionTypes.LOGOUT,
});

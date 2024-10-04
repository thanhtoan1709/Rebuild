// userReducer.js
import actionTypes from "../actions/actionType";

const initialState = {
  username: null,
  avatar: null,
  token: null,
  errorMessage: null,
  isLoggedIn: false, // Thêm trạng thái đăng nhập
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCESS: // Đảm bảo tên chính xác
      return {
        ...state,
        username: action.username, // Sửa từ action.name thành action.username
        avatar: action.avatar,
        token: action.data,
        isLoggedIn: true, // Đánh dấu người dùng đã đăng nhập
        errorMessage: null,
      };
    case actionTypes.LOGIN_SUBMIT:
      return {
        ...state,
        // Bạn có thể không cần cập nhật ở đây nếu chỉ cần lưu token
        token: action.data,
        isLoggedIn: true,
        avatar: action.avatar,
        errorMessage: null,
      };
    case actionTypes.LOGOUT: // Xử lý đăng xuất
      return initialState; // Reset trạng thái về ban đầu
    default:
      return state;
  }
};

export default userReducer;

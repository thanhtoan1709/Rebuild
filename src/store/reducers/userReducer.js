// reducers/userReducer.js
const initialState = {
  userInfo: null, // Ban đầu chưa có thông tin người dùng
  loading: false,
  error: null,
};
// reducers/userReducer.js
// reducers/userReducer.js
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_DATA_SUCCESS":
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    case "USER_DATA_FAIL":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer; // Export mặc định

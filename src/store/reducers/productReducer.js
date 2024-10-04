// productReducer.js
import actionTypes from "../actions/actionType";

const initialState = {
  products: [],
  product: null, // Thêm state để lưu sản phẩm theo id
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT:
      return {
        ...state,
        products: action.data,
      };
    case actionTypes.GET_ONE_PRODUCT:
      return {
        ...state,
        product: action.data, // Lưu sản phẩm vào state
      };
    default:
      return state;
  }
};

export default productReducer;

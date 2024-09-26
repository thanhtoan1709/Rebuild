import {
  apiFetchProducts,
  apiFetchOneProduct,
} from "../../components/api/productsServices";

import actionTypes from "./actionType";

export const fetchProducts = (page) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCTS_REQUEST });

  try {
    const data = await apiFetchProducts(page);
    dispatch({
      type: actionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: { products: data.products, totalPages: data.totalPages },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};
export const fetchOneProduct = (id_pr) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ONE_PRODUCT_REQUEST });

  try {
    const data = await apiFetchOneProduct(id_pr);
    dispatch({
      type: actionTypes.FETCH_ONE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_ONE_PRODUCT_FAILURE,
      payload: error.message,
    });
  }
};

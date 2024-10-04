import { apiFetchOneProduct } from "../../components/api/productsServices";

import actionTypes from "./actionType";

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

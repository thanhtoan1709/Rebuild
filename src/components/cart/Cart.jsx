import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { totalCountSelector } from "./selector";
const CartPage = (props) => {
  const TotalCount = useSelector(totalCountSelector);
  return <div>CartPage{TotalCount}</div>;
};

CartPage.propTypes = {};

export default CartPage;

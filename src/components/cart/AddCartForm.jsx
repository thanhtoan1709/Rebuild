import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import QuantityField from "./QuantityField";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
const AddToCartForm = ({ onSubmit = null }) => {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, "Please enter at least 1")
      .required("Please enter Quantity"),
  });
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      quantity: 1, // Giá trị mặc định cho quantity
    },
  });

  const navigate = useNavigate();
  const HandelonSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const handelOnclick = () => {
    return navigate("/cart");
  };
  return (
    <form onSubmit={handleSubmit(HandelonSubmit)}>
      <div className="quantityfield-component">
        <QuantityField control={control} />
      </div>
      <div className="button-cart">
        <Button
          type="submit"
          variant="contained"
          className="btn btn-outline-dark px-3 py-2 mt-3"
        >
          Add to Cart
        </Button>
        <Button
          type="button"
          onClick={handelOnclick}
          variant="contained"
          className="btn btn-outline-dark ms-4 px-3 py-2 mt-3"
        >
          Go to Cart
        </Button>
      </div>
    </form>
  );
};
AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default AddToCartForm;

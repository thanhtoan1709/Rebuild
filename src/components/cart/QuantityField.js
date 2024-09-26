import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
const Quantity = ({ control, form }) => {
  return (
    <Controller
      name="quantity"
      control={control}
      defaultValue={form} // Giá trị mặc định
      render={({ field }) => (
        <TextField
          {...field}
          type="number"
          label="Quantity"
          variant="outlined"
          inputProps={{ min: 1, max: 10 }} // Giá trị tối thiểu
        />
      )}
    />
  );
};

export default Quantity;

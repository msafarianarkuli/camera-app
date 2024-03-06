import React from "react";
import { useField } from "formik";

import { MenuItem, TextField, TextFieldProps } from "@mui/material";

type InputProps = {
  name: string;
  data?: { value: string; label: string }[];
} & TextFieldProps;

const CustomInput: React.FC<InputProps> = ({ name, data, ...rest }) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error;
  if (data) {
    return (
      <TextField {...rest} {...field} error={!!error}>
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }
  return <TextField {...rest} {...field} error={!!error} />;
};

export default CustomInput;

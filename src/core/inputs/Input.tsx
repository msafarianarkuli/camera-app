import React from "react";
import { useField } from "formik";

import { TextField, TextFieldProps } from "@mui/material";

type InputProps = { name: string } & TextFieldProps;

const CustomInput: React.FC<InputProps> = ({ name, ...rest }) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error;
  return <TextField {...rest} {...field} error={!!error} />;
};

export default CustomInput;

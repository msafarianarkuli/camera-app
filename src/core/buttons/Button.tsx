import React from "react";
import { Button, ButtonProps } from "@mui/material";

type CustomButtonProps = { label: string } & ButtonProps;

const CustomButton: React.FC<CustomButtonProps> = ({ label, ...rest }) => {
  return <Button {...rest}>{label}</Button>;
};

export default CustomButton;

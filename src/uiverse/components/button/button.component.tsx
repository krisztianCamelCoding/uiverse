import React, { FC, ReactNode } from "react";
import { ButtonProps } from "@mui/material";
import StyledWrapper from "./button.style";

export type Props = {
  buttonProps?: ButtonProps;
  children?: ReactNode;
};

const Button: FC<Props> = ({ buttonProps, children }) => {
  return <StyledWrapper {...buttonProps}>{children}</StyledWrapper>;
};

export default Button;

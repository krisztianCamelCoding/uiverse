import React, { FC, ReactNode } from "react";
import { ButtonProps } from "@mui/material";
import { useProviderValidator } from "../../hooks/provider-validator.hook";
import StyledWrapper from "./button.style";

export type Props = {
  buttonProps?: ButtonProps;
  children?: ReactNode;
};

export const Button: FC<Props> = ({ buttonProps, children }) => {
  useProviderValidator();
  return <StyledWrapper {...buttonProps}>{children}</StyledWrapper>;
};

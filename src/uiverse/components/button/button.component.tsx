import React, { FC, ReactNode } from "react";
import { ButtonProps } from "@mui/material";
import StyledWrapper from "./button.style";
import { useProviderValidator } from "../../hooks/provider-validator.hook";

export type Props = {
  buttonProps?: ButtonProps;
  children?: ReactNode;
};

export const Button: FC<Props> = ({ buttonProps, children }) => {
  useProviderValidator();
  return <StyledWrapper {...buttonProps}>{children}</StyledWrapper>;
};

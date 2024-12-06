import React, { FC, ReactNode } from "react";
import { ButtonProps } from "@mui/material";
import StyledWrapper from "./button.style";
import Providers from "../../utils/provider.util";

export type Props = {
  buttonProps?: ButtonProps;
  children?: ReactNode;
};

const Button: FC<Props> = ({ buttonProps, children }) => {
  return (
    <Providers>
      <StyledWrapper {...buttonProps}>{children}</StyledWrapper>
    </Providers>
  );
};

export default Button;

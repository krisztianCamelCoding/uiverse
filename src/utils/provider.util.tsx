import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import { getActiveTheme } from "./theme.util";

type Props = {
  children: ReactNode;
};

const Providers: FC<Props> = ({ children }) => {
  return <ThemeProvider theme={getActiveTheme("light")}>{children}</ThemeProvider>;
};

export default Providers;

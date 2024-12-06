import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import { getActiveTheme } from "../uiverse/utils/theme.util";

type Props = {
  children: ReactNode;
};

const Providers: FC<Props> = ({ children }) => {
  return <ThemeProvider theme={getActiveTheme("dark")}>{children}</ThemeProvider>;
};

export default Providers;

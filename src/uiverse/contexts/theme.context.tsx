import CssBaseline from "@mui/material/CssBaseline";
import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { Theme, ThemeProvider } from "@mui/material";
import { getActiveTheme } from "../utils/theme.util";

export interface ThemeContextType {
  activeTheme: Theme;
  setActiveTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  activeTheme: getActiveTheme("dark"),
  setActiveTheme: () => {
    throw new Error("setActiveTheme function must be overridden");
  },
});

type Props = {
  children: ReactNode;
  currentTheme?: "dark" | "light";
};

const CustomThemeProvider: FC<Props> = ({ currentTheme, children }) => {
  const [activeTheme, setActiveTheme] = useState<Theme>(getActiveTheme(currentTheme ?? "dark"));

  const themeContextValue: ThemeContextType = {
    activeTheme,
    setActiveTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;

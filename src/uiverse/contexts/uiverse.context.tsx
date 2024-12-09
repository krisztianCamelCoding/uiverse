import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { Theme } from "@mui/material";
import { getActiveTheme } from "../utils/theme.util";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { UiverseConfigModel } from "../models/uiverse-config.model";

export interface UiverseContextType {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  initialized: boolean;
}

export const UiverseContext = createContext<UiverseContextType>({
  theme: getActiveTheme("dark"),
  setTheme: () => {
    throw new Error("setUiverseTheme function must be overridden");
  },
  initialized: false,
});

type Props = UiverseConfigModel & {
  children?: ReactNode;
};

const UiverseProvider: FC<Props> = ({ uiverseTheme, children }) => {
  const [activeTheme, setActiveTheme] = useState<Theme>(getActiveTheme(uiverseTheme ?? "dark"));

  const uiverseContextValue: UiverseContextType = {
    theme: activeTheme,
    setTheme: setActiveTheme,
    initialized: true,
  };

  return (
    <UiverseContext.Provider value={uiverseContextValue}>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </UiverseContext.Provider>
  );
};

export default UiverseProvider;

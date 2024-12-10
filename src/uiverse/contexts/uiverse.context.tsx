import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { Theme } from "@mui/material";
import { getActiveTheme } from "../utils/theme.util";
import { ThemeProvider } from "@mui/material/styles";
import { UiverseConfigModel } from "../models/uiverse-config.model";
import CssBaseline from "@mui/material/CssBaseline";

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

/**
 * The UiverseProvider component provides the Uiverse context to its children.
 * It initializes the theme based on the provided configuration.
 *
 * @param {Props} props - The props for the UiverseProvider component.
 * @returns {JSX.Element} The UiverseProvider component.
 */
export const UiverseProvider: FC<Props> = ({ theme, children }: Props): JSX.Element => {
  const [activeTheme, setActiveTheme] = useState<Theme>(getActiveTheme(theme ?? "dark"));

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

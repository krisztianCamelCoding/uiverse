import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../contexts/theme.context";

export const useThemeContext = (): ThemeContextType => {
  return useContext(ThemeContext);
};

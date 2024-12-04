import { createTheme, PaletteOptions, Theme, ThemeOptions } from "@mui/material";

const generalThemeConfig: ThemeOptions = {
  palette: {},
};
const lightTheme = createTheme({
  ...generalThemeConfig,
});

const darkTheme = createTheme({
  ...generalThemeConfig,
  palette: {
    ...generalThemeConfig.palette,
    mode: "dark",
  } as PaletteOptions,
});

const getActiveTheme = (themeMode: "light" | "dark" = "dark"): Theme => {
  return themeMode === "light" ? lightTheme : darkTheme;
};

export { lightTheme, darkTheme, getActiveTheme };

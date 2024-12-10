import { createTheme, PaletteOptions, Theme, ThemeOptions } from "@mui/material";
import { createSpacingFunction, createRoundingFunction } from "./helpers.util";
import { colors } from "./palette.util";
import "@fontsource/poppins";

const generalThemeConfig: ThemeOptions = {
  palette: {
    colors: colors,
    "colors.utility.primary": {
      main: colors.utility.primary,
    },
    "colors.utility.accent": {
      main: colors.utility.accent,
    },
    "colors.utility.text-default": {
      main: colors.utility["text-default"],
    },
    "colors.utility.text-primary": {
      main: colors.utility["text-primary"],
    },
    "colors.utility.text-secondary": {
      main: colors.utility["text-secondary"],
    },
    "colors.utility.text-disabled": {
      main: colors.utility["text-disabled"],
    },
    "colors.utility.bg-dark": {
      main: colors.utility["bg-dark"],
    },
    "colors.utility.bg-dark-a70": {
      main: colors.utility["bg-dark-a70"],
    },
    "colors.utility.bg-dark-blue": {
      main: colors.utility["bg-dark-blue"],
    },
    "colors.utility.bg-dark-green": {
      main: colors.utility["bg-dark-green"],
    },
    "colors.utility.bg-dark-pink": {
      main: colors.utility["bg-dark-pink"],
    },
    "colors.utility.surface-dark": {
      main: colors.utility["surface-dark"],
    },
    "colors.utility.status-error": {
      main: colors.utility["status-error"],
    },
    "colors.utility.status-success": {
      main: colors.utility["status-success"],
    },
    "colors.utility.decor-gold": {
      main: colors.utility["decor-gold"],
    },
    "colors.utility.decor-copper": {
      main: colors.utility["decor-copper"],
    },
    "colors.utility.decor-teal": {
      main: colors.utility["decor-teal"],
    },
    "colors.utility.decor-blue": {
      main: colors.utility["decor-blue"],
    },
    "colors.utility.utility-white": {
      main: colors.utility["utility-white"],
    },
    "colors.utility.utility-black": {
      main: colors.utility["utility-black"],
    },
    "colors.utility.divider": {
      main: colors.utility.divider,
    },
    "colors.utility.border": {
      main: colors.utility.border,
    },
    "colors.utility.icon-default": {
      main: colors.utility["icon-default"],
    },
  },
  spacing: createSpacingFunction,
  rounding: createRoundingFunction,
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h1: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "36px",
    },
  },
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

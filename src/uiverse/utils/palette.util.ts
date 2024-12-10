import { ColorModel } from "../models/color.model";

export const colors: ColorModel = {
  utility: {
    primary: "#fe2c85",
    accent: "#2cfecc",
    "text-default": "#ffffff",
    "text-primary": "#fff2fb",
    "text-secondary": "#b5b5be",
    "text-disabled": "#434343",
    "bg-dark": "#050d15",
    "bg-dark-a70": "rgba(5, 13, 21, 70)",
    "bg-dark-blue": "#080a25",
    "bg-dark-green": "#12261b",
    "bg-dark-pink": "#2a1525",
    "surface-dark": "#151e2a",
    "status-error": "#cb0000",
    "status-success": "#00cb5d",
    "decor-gold": "#cb8d14",
    "decor-copper": "#a46f09",
    "decor-teal": "#09a496",
    "decor-blue": "#3b79d7",
    "utility-white": "#ffffff",
    "utility-black": "#000000",
    divider: "#434343",
    border: "#434343",
    "icon-default": "#b5b5be",
  },
};

declare module "@mui/material/styles" {
  interface Palette {
    colors: ColorModel;
    "colors.utility.primary": Palette["primary"];
    "colors.utility.accent": Palette["primary"];
    "colors.utility.text-default": Palette["primary"];
    "colors.utility.text-primary": Palette["primary"];
    "colors.utility.text-secondary": Palette["primary"];
    "colors.utility.text-disabled": Palette["primary"];
    "colors.utility.bg-dark": Palette["primary"];
    "colors.utility.bg-dark-a70": Palette["primary"];
    "colors.utility.bg-dark-blue": Palette["primary"];
    "colors.utility.bg-dark-green": Palette["primary"];
    "colors.utility.bg-dark-pink": Palette["primary"];
    "colors.utility.surface-dark": Palette["primary"];
    "colors.utility.status-error": Palette["primary"];
    "colors.utility.status-success": Palette["primary"];
    "colors.utility.decor-gold": Palette["primary"];
    "colors.utility.decor-copper": Palette["primary"];
    "colors.utility.decor-teal": Palette["primary"];
    "colors.utility.decor-blue": Palette["primary"];
    "colors.utility.utility-white": Palette["primary"];
    "colors.utility.utility-black": Palette["primary"];
    "colors.utility.divider": Palette["primary"];
    "colors.utility.border": Palette["primary"];
    "colors.utility.icon-default": Palette["primary"];
  }

  interface PaletteOptions {
    colors: ColorModel;
    "colors.utility.primary": PaletteOptions["primary"];
    "colors.utility.accent": PaletteOptions["primary"];
    "colors.utility.text-default": PaletteOptions["primary"];
    "colors.utility.text-primary": PaletteOptions["primary"];
    "colors.utility.text-secondary": PaletteOptions["primary"];
    "colors.utility.text-disabled": PaletteOptions["primary"];
    "colors.utility.bg-dark": PaletteOptions["primary"];
    "colors.utility.bg-dark-a70": PaletteOptions["primary"];
    "colors.utility.bg-dark-blue": PaletteOptions["primary"];
    "colors.utility.bg-dark-green": PaletteOptions["primary"];
    "colors.utility.bg-dark-pink": PaletteOptions["primary"];
    "colors.utility.surface-dark": PaletteOptions["primary"];
    "colors.utility.status-error": PaletteOptions["primary"];
    "colors.utility.status-success": PaletteOptions["primary"];
    "colors.utility.decor-gold": PaletteOptions["primary"];
    "colors.utility.decor-copper": PaletteOptions["primary"];
    "colors.utility.decor-teal": PaletteOptions["primary"];
    "colors.utility.decor-blue": PaletteOptions["primary"];
    "colors.utility.utility-white": PaletteOptions["primary"];
    "colors.utility.utility-black": PaletteOptions["primary"];
    "colors.utility.divider": PaletteOptions["primary"];
    "colors.utility.border": PaletteOptions["primary"];
    "colors.utility.icon-default": PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    "colors.utility.primary": true;
    "colors.utility.accent": true;
    "colors.utility.text-default": true;
    "colors.utility.text-primary": true;
    "colors.utility.text-secondary": true;
    "colors.utility.text-disabled": true;
    "colors.utility.bg-dark": true;
    "colors.utility.bg-dark-a70": true;
    "colors.utility.bg-dark-blue": true;
    "colors.utility.bg-dark-green": true;
    "colors.utility.bg-dark-pink": true;
    "colors.utility.surface-dark": true;
    "colors.utility.status-error": true;
    "colors.utility.status-success": true;
    "colors.utility.decor-gold": true;
    "colors.utility.decor-copper": true;
    "colors.utility.decor-teal": true;
    "colors.utility.decor-blue": true;
    "colors.utility.utility-white": true;
    "colors.utility.utility-black": true;
    "colors.utility.divider": true;
    "colors.utility.border": true;
    "colors.utility.icon-default": true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides {
    "colors.utility.primary": true;
    "colors.utility.accent": true;
    "colors.utility.text-default": true;
    "colors.utility.text-primary": true;
    "colors.utility.text-secondary": true;
    "colors.utility.text-disabled": true;
    "colors.utility.bg-dark": true;
    "colors.utility.bg-dark-a70": true;
    "colors.utility.bg-dark-blue": true;
    "colors.utility.bg-dark-green": true;
    "colors.utility.bg-dark-pink": true;
    "colors.utility.surface-dark": true;
    "colors.utility.status-error": true;
    "colors.utility.status-success": true;
    "colors.utility.decor-gold": true;
    "colors.utility.decor-copper": true;
    "colors.utility.decor-teal": true;
    "colors.utility.decor-blue": true;
    "colors.utility.utility-white": true;
    "colors.utility.utility-black": true;
    "colors.utility.divider": true;
    "colors.utility.border": true;
    "colors.utility.icon-default": true;
  }
}

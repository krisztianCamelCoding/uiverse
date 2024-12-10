// #region Custom Spacing Configuration and Spacing Function
const customSpacing = {
  "1": 8,
  "2": 16,
  "3": 24,
  "4": 32,
  "5": 40,
  "6": 48,
  "05": 4,
};

export const createSpacingFunction = (key: keyof typeof customSpacing | number): string => {
  const value = customSpacing[key as keyof typeof customSpacing];
  if (value === undefined) {
    throw new Error(`Spacing key "${key}" is not defined in the custom spacing configuration.`);
  }
  return `${value}px`;
};
// #endregion

// #region Custom Rounding Configuration and Rounding Function
const customRounding = {
  "rounding-sm": 4,
  "rounding-default": 8,
  "rounding-lg": 16,
  "rounding-xl": 32,
};

export const createRoundingFunction = (key: keyof typeof customRounding): string => {
  const value = customRounding[key];
  if (value === undefined) {
    throw new Error(`Rounding key "${key}" is not defined in the custom rounding configuration.`);
  }
  return `${value}px`;
};

declare module "@mui/material/styles" {
  interface Theme {
    rounding: (key: keyof typeof customRounding) => string;
  }
  interface ThemeOptions {
    rounding?: (key: keyof typeof customRounding) => string;
  }
}
// #endregion

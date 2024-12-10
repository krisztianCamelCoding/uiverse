import { Theme, useTheme } from "@mui/material";

/**
 * Custom hook to access the Uiverse theme.
 * Provides access to the current MUI theme.
 *
 * @returns {Theme} The current MUI theme.
 *
 * @example
 * // Usage in a component
 * const MyComponent = () => {
 *   const uiverseTheme = useUiverseTheme();
 *   // Component logic here
 * };
 */
export const useUiverseTheme = (): Theme => useTheme();

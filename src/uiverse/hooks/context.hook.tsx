import { useContext } from "react";
import { UiverseContext, UiverseContextType } from "../contexts/uiverse.context";

/**
 * Custom hook to access the Uiverse context.
 * Provides access to the current theme and a function to set the theme.
 *
 * @returns {UiverseContextType} The Uiverse context value.
 *
 * @example
 * // Usage in a component
 * const MyComponent = () => {
 *   const { theme, setTheme } = useUiverseContext();
 *   // Component logic here
 * };
 */
export const useUiverseContext = (): UiverseContextType => useContext(UiverseContext);

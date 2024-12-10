/**
 * Interface representing the configuration model for Uiverse.
 */
export interface UiverseConfigModel {
  /**
   * The theme to be used in the package.
   * It can be either "dark" or "light".
   * If not specified, the default theme is "dark".
   *
   * @example
   * // Setting the theme to dark
   * const config: UiverseConfigModel = {
   *   theme: "dark"
   * };
   *
   * @example
   * // Setting the theme to light
   * const config: UiverseConfigModel = {
   *   theme: "light"
   * };
   */
  theme?: "dark" | "light";
}

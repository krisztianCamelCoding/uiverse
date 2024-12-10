import React, { FC, ReactNode } from "react";
import { UiverseConfigModel } from "../models/uiverse-config.model";
import { UiverseProvider } from "../contexts/uiverse.context";

/**
 * Props for the Uiverse component.
 */
type UiverseProps = {
  /**
   * The children components to be wrapped by the UiverseProvider.
   */
  children: ReactNode;

  /**
   * The configuration for the UiverseProvider.
   */
  config?: UiverseConfigModel;
};

/**
 * The Uiverse component wraps its children with the UiverseProvider,
 * providing the Uiverse context to its children.
 *
 * @param {UiverseProps} props - The props for the Uiverse component.
 * @returns {JSX.Element} The Uiverse component.
 */
export const Uiverse: FC<UiverseProps> = ({ config, children }: UiverseProps): JSX.Element => {
  return <UiverseProvider theme={config?.theme}>{children}</UiverseProvider>;
};

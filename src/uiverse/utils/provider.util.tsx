import React, { FC, ReactNode } from "react";
import UiverseProvider from "../contexts/uiverse.context";
import { UiverseConfigModel } from "../models/uiverse-config.model";

type UiverseProps = {
  children: ReactNode;
  config?: UiverseConfigModel;
};

export const Uiverse: FC<UiverseProps> = ({ config, children }) => {
  return <UiverseProvider uiverseTheme={config?.uiverseTheme}>{children}</UiverseProvider>;
};

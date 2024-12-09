import { useContext } from "react";
import { UiverseContext, UiverseContextType } from "../contexts/uiverse.context";

export const useUiverseContext = (): UiverseContextType => useContext(UiverseContext);

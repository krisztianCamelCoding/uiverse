import { useUiverseContext } from "./context.hook";

export const useProviderValidator = () => {
  const { initialized } = useUiverseContext();
  if (!initialized) throw new Error("Uiverse provider does not exist!");
};

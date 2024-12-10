import { useUiverseContext } from "./context.hook";

/**
 * Custom hook to validate the presence of the Uiverse provider.
 * Throws an error if the Uiverse provider is not initialized.
 *
 * @throws {Error} If the Uiverse provider is not initialized.
 */
export const useProviderValidator = () => {
  const { initialized } = useUiverseContext();
  if (!initialized) throw new Error("Uiverse provider does not exist!");
};

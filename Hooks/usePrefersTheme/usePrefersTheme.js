/*
  The usePrefersTheme() hook allows the detection of the user's preferred system theme
  Example:
    <button>
      {
          `You prefer the ${theme} theme,
          ${theme === 'light' ? 'ew!' : 'great!'}`
      }
    </button>
*/
import { useMediaQuery } from "../useMediaQuery/useMediaQuery";

export function usePrefersTheme(initialValue) {
  return useMediaQuery("(prefers-color-scheme: dark)", initialValue === "dark")
    ? "dark"
    : "light";
}

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lighTheme: () => {},
});

//we use the provider here instead of making them separatly
export const ThemeProvider = ThemeContext.Provider;

//here we create the custom theme seperatly

export default function useTheme() {
  return useContext(ThemeContext);
}

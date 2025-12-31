import { ReactNode, useContext, useState } from "react";
import { globalThemeContext } from "./theme.comtext";

interface themesProps {
  children: ReactNode;
}
export function ThemeContextProvide({ children }: themesProps) {
  const [themeValue, setThemeValue] = useState<string | null>("light");

  const value: any = {
    themeValue,
    setThemeValue,
  };
  return (
    <globalThemeContext.Provider value={value}>
      {children}
    </globalThemeContext.Provider>
  );
}

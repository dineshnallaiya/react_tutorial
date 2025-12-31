import { createContext, Dispatch, SetStateAction } from "react";
import { themeProps } from "../darkLight/DarkLight";
export interface ThemeContextType {
  themeValue: string | null;
  setThemeValue: Dispatch<SetStateAction<string | null>>;
}
export const globalThemeContext = createContext<ThemeContextType | null>(null);

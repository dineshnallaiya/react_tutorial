import { useContext, useState } from "react";
import { globalThemeContext } from "../context/theme.comtext";
export interface themeProps {
  themeValue: string | null;
  setThemeValue: () => void;
}
const DarkLight = () => {
  const themeContext = useContext(globalThemeContext);
  if (!themeContext) {
    throw new Error("DarkLight must be used inside ThemeContextProvider");
  }
  const { themeValue, setThemeValue } = themeContext;

  function setColor() {
    const mode = themeValue == "light" ? "dark" : "light";
    setThemeValue(mode);
  }
  return (
    <>
      <button onClick={() => setColor()}>{themeValue}</button>
    </>
  );
};
export default DarkLight;

import { createContext, useContext } from "react";

interface IThemeCustomContextData {
    themeName: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeCustomContext = createContext({} as IThemeCustomContextData);
export const useAppThemeContext = ()=> useContext(ThemeCustomContext);
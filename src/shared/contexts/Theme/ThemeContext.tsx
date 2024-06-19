import { createContext, useContext } from "react";

interface IThemeCustomContextDataProps {
    themeName: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeCustomContext = createContext({} as IThemeCustomContextDataProps);
export const useAppThemeContext = ()=> useContext(ThemeCustomContext);
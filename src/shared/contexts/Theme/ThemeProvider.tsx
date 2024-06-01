import { ThemeProvider } from "@emotion/react";
import { ThemeCustomContext } from "./ThemeContext";
import { useCallback, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "../../themes";
import { Box } from "@mui/material";

export interface IThemeCustomProviderProps {
    children: React.ReactNode;
}

export const ThemeCustomProvider = ({ children }: IThemeCustomProviderProps)=>{
    const [themeName, setThemeName] = useState<"light" | "dark">("light");

    const toggleTheme = useCallback(()=>{
        setThemeName(oldThemeName => oldThemeName === "light" ?"dark" : "light");
    }, []);

    const theme = useMemo(()=>{
        if(themeName === "light") return lightTheme;
        
        return darkTheme;
    }, [themeName]);

    return(
        <ThemeCustomContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    { children }
                </Box>
            </ThemeProvider>
        </ThemeCustomContext.Provider>
    );
}
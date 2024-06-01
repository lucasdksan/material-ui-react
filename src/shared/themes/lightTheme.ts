import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[700],
            light: yellow[700],
            contrastText: "#fff",
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: "#ffffff",
        },
        background: {
            default: "#f7f6f3",
            paper: "#ffffff"
        }
    }
});
import { Button } from "@mui/material";
import { useAppDrawerContext, useAppThemeContext } from "../shared/contexts";
import { LayoutDashBoard } from "../shared/layouts";

export const HomePage = ()=> {
    const { toggleTheme } = useAppThemeContext();
    const { toggleDrawerState } = useAppDrawerContext();

    return(
        <LayoutDashBoard>
            <Button variant="contained" color="primary" onClick={toggleTheme}>Trocar Tema</Button>
            <Button variant="contained" color="primary" onClick={toggleDrawerState}>Open/Close Menu</Button>
        </LayoutDashBoard>
    );
}
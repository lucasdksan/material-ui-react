import { Button } from "@mui/material";
import { useAppThemeContext } from "../shared/contexts";

export const HomePage = ()=> {
    const { toggleTheme } = useAppThemeContext();

    return(
        <div>
            <Button variant="contained" color="primary" onClick={toggleTheme}>Apenas um teste</Button>
        </div>
    );
}
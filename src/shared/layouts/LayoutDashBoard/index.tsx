import { Box, useMediaQuery, useTheme } from "@mui/material";
import { SideMenu } from "../../components";

interface ILayoutDashBoard {
    children: React.ReactNode;
}

export const LayoutDashBoard = ({ children }: ILayoutDashBoard)=>{
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    
    return(
        <div id="layout-dash-board">
            <SideMenu />
            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                { children }
            </Box> 
        </div>
    );
}
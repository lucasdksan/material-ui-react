import { Avatar, Box, Divider, Drawer, List, useMediaQuery, useTheme } from "@mui/material";
import { useAppDrawerContext } from "../../contexts";
import { ListItemLink } from "./tools";

export const SideMenu = ()=>{
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const { isDrawerState, toggleDrawerState, drawerOptions } = useAppDrawerContext();

    return(
        <Drawer onClose={toggleDrawerState} open={isDrawerState} variant={smDown ? "temporary" :"permanent"}>
            <Box width={theme.spacing(28)} display="flex" flexDirection="column" height="100%">
                <Box height={theme.spacing(16)} display="flex" alignItems="center" justifyContent="center" width="100%">
                    <Avatar
                        sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                        src="https://avatars.githubusercontent.com/u/47578616?v=4" 
                    />
                </Box>
                <Divider />
                <Box display="flex" flexDirection="column" flex={1} width="100%">
                    <List component="nav">
                        { drawerOptions.map(({ label, to, icon }, index )=>{
                            return(
                                <ListItemLink key={index} icon={icon} onClick={smDown ? toggleDrawerState : undefined} label={label} to={to} />
                            );
                        }) }
                    </List>
                </Box>
            </Box>
        </Drawer>
    );
}
import { Avatar, Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { useAppDrawerContext } from "../../contexts";

export const SideMenu = ()=>{
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const { isDrawerState, toggleDrawerState } = useAppDrawerContext();

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
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Página Inicial" />
                        </ListItemButton>
                    </List>
                </Box>
            </Box>
        </Drawer>
    );
}
import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { SideMenu } from "../../components";
import { useAppDrawerContext, useAppThemeContext } from "../../contexts";

interface ILayoutDashBoard {
    title: string;
    children: React.ReactNode;
    listingTools?: React.ReactNode;
}

export const LayoutDashBoard = ({ children, title, listingTools }: ILayoutDashBoard) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const { toggleTheme, themeName } = useAppThemeContext();
    const { toggleDrawerState } = useAppDrawerContext();

    return (
        <>
            <SideMenu />
            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)} display="flex" flexDirection="column" gap={1}>
                <header>
                    <Box display="flex" justifyContent="space-between" alignItems="center" height={theme.spacing(6)} padding={1} paddingX={smDown ? 1 : 2} gap={1}>
                        <Box gap={1} display="flex" alignItems="center">
                            {smDown && (
                                <IconButton onClick={toggleDrawerState}>
                                    <MenuIcon />
                                </IconButton>
                            )}
                            <Typography
                                whiteSpace="nowrap"
                                variant="h5"
                                overflow="hidden"
                                textOverflow="ellipsis"
                            >{title}</Typography>
                        </Box>
                        <Box>
                            <Button color="secondary" onClick={toggleTheme}>
                                {(themeName === "dark") ? (
                                    <LightModeIcon />
                                ) : (
                                    <DarkModeIcon />
                                )}
                            </Button>
                        </Box>
                    </Box>
                    {listingTools && (
                        <Box>{listingTools}</Box>
                    )}
                </header>
                <Box flex={1} overflow="auto" paddingY={1} paddingX={2}>
                    {children}
                </Box>
            </Box>
        </>
    );
}
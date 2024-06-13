import { IDrawerOption } from "./../../contexts/Drawer/DrawerCustomContext";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from '@mui/icons-material/LocationCity';

export const listDrawerOption: IDrawerOption[] = [
    {
        label: "Página Inicial",
        to: "/",
        icon: HomeIcon,
    },
    {
        label: "Cidades",
        to: "/cities",
        icon: LocationCityIcon
    }
];
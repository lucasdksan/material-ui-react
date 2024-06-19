import { IDrawerOptionProps } from "./../../contexts/Drawer/DrawerCustomContext";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PersonIcon from "@mui/icons-material/Person";

export const listDrawerOption: IDrawerOptionProps[] = [
    {
        label: "Página Inicial",
        to: "/",
        icon: HomeIcon,
    },
    {
        label: "Cidades",
        to: "/cities",
        icon: LocationCityIcon
    },
    {
        label: "Usuários",
        to: "/users",
        icon: PersonIcon
    }
];
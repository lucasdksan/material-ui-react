import { createContext, useContext } from "react";
import { SvgIconComponent } from "@mui/icons-material"; 

export interface IDrawerOption {
    label: string;
    icon: SvgIconComponent;
    to: string;
}

interface IDrawerCustomContext {
    drawerOptions: IDrawerOption[];
    isDrawerState: boolean;
    toggleDrawerState: ()=> void;
    setDrawerOption: (drawerOptions: IDrawerOption[])=> void;
}

export const DrawerCustomContext = createContext({  } as IDrawerCustomContext);
export const useAppDrawerContext = ()=> useContext(DrawerCustomContext);
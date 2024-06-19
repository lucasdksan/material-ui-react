import { createContext, useContext } from "react";
import { SvgIconComponent } from "@mui/icons-material"; 

export interface IDrawerOptionProps {
    label: string;
    icon: SvgIconComponent;
    to: string;
}

interface IDrawerCustomContextProps {
    drawerOptions: IDrawerOptionProps[];
    isDrawerState: boolean;
    toggleDrawerState: ()=> void;
    setDrawerOption: (drawerOptions: IDrawerOptionProps[])=> void;
}

export const DrawerCustomContext = createContext({  } as IDrawerCustomContextProps);
export const useAppDrawerContext = ()=> useContext(DrawerCustomContext);
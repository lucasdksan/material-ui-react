import { createContext, useContext } from "react";

interface IDrawerCustomContext {
    isDrawerState: boolean;
    toggleDrawerState: ()=> void;
}

export const DrawerCustomContext = createContext({  } as IDrawerCustomContext);
export const useAppDrawerContext = ()=> useContext(DrawerCustomContext);
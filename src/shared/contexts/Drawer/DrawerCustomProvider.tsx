import { useCallback, useState } from "react";
import { DrawerCustomContext, IDrawerOption } from "./DrawerCustomContext";

interface IDrawerCustomProviderProps {
    children: React.ReactNode;
}

export const DrawerCustomProvider = ({ children }: IDrawerCustomProviderProps)=>{
    const [isDrawerState, setIsDrawerState] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);
    
    const toggleDrawerState = useCallback(()=> {
        setIsDrawerState(state => !state);
    }, []);
    const handlSetDrawerOption = useCallback((drawerOptions: IDrawerOption[])=>{
        setDrawerOptions(drawerOptions)
    }, []);

    return(
        <DrawerCustomContext.Provider value={{ isDrawerState, drawerOptions, toggleDrawerState, setDrawerOption:handlSetDrawerOption }}>
            { children }
        </DrawerCustomContext.Provider>
    );
}
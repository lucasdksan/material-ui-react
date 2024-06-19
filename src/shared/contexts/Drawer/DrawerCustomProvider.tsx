import { useCallback, useState } from "react";
import { DrawerCustomContext, IDrawerOptionProps } from "./DrawerCustomContext";

interface IDrawerCustomProviderProps {
    children: React.ReactNode;
}

export const DrawerCustomProvider = ({ children }: IDrawerCustomProviderProps)=>{
    const [isDrawerState, setIsDrawerState] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptionProps[]>([]);
    
    const toggleDrawerState = useCallback(()=> {
        setIsDrawerState(state => !state);
    }, []);
    const handlSetDrawerOption = useCallback((drawerOptions: IDrawerOptionProps[])=>{
        setDrawerOptions(drawerOptions)
    }, []);

    return(
        <DrawerCustomContext.Provider value={{ isDrawerState, drawerOptions, toggleDrawerState, setDrawerOption:handlSetDrawerOption }}>
            { children }
        </DrawerCustomContext.Provider>
    );
}
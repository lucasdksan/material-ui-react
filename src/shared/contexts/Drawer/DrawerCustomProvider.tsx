import { useCallback, useState } from "react";
import { DrawerCustomContext } from "./DrawerCustomContext";

interface IDrawerCustomProviderProps {
    children: React.ReactNode;
}

export const DrawerCustomProvider = ({ children }: IDrawerCustomProviderProps)=>{
    const [isDrawerState, setIsDrawerState] = useState(false);
    const toggleDrawerState = useCallback(()=> {
        setIsDrawerState(state => !state);
    }, []);

    return(
        <DrawerCustomContext.Provider value={{ isDrawerState, toggleDrawerState }}>
            { children }
        </DrawerCustomContext.Provider>
    );
}
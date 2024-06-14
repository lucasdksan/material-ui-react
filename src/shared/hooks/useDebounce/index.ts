import { useCallback, useRef } from "react";

export const useDebounce = (delay:number = 1000, notDelayInFirstTime: boolean = true)=>{
    const debouncing = useRef<number>();
    const isFirstTime = useRef<boolean>(notDelayInFirstTime);

    const debounce = useCallback((func: ()=> void)=>{
        if(isFirstTime.current) {
            isFirstTime.current = false;

            func();
        } else {
            if(debouncing.current) {
                clearTimeout(debouncing.current);
            }
    
            debouncing.current = setTimeout(()=> func(), delay);
        }
    }, [delay]);
    
    return { debounce };
}
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDrawerContext } from "../shared/contexts";
import { listDrawerOption } from "../shared/utils";
import { Home } from "../pages";

export const AppRoutes = ()=>{
    const { setDrawerOption } = useAppDrawerContext();

    useEffect(()=>{
        setDrawerOption(listDrawerOption);
    }, []);

    return(
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/hello" element={<div>Oi Lucas</div>}  />
        </Routes>
    );
}
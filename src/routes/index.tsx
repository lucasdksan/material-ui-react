import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { useAppDrawerContext } from "../shared/contexts";
import { listDrawerOption } from "../shared/utils";

export const AppRoutes = ()=>{
    const { setDrawerOption } = useAppDrawerContext();

    useEffect(()=>{
        setDrawerOption(listDrawerOption);
    }, []);

    return(
        <Routes>
            <Route path="/" element={<HomePage />}  />
            <Route path="/hello" element={<div>Oi Lucas</div>}  />
        </Routes>
    );
}
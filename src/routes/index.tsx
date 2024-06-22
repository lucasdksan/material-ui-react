import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDrawerContext } from "../shared/contexts";
import { listDrawerOption } from "../shared/utils";
import { Cities, Home, UserDetails, Users } from "../pages";

export const AppRoutes = ()=>{
    const { setDrawerOption } = useAppDrawerContext();

    useEffect(()=>{
        setDrawerOption(listDrawerOption);
    }, []);

    return(
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/cities" element={<Cities />}  />
            <Route path="/users" element={<Users />}  />
            <Route path="/users/details/:id" element={<UserDetails />} />
        </Routes>
    );
}
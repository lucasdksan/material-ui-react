import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";

export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<HomePage />}  />
        </Routes>
    );
}
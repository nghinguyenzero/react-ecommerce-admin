import { Route, Routes } from "react-router-dom";
import { Settings } from "@mui/icons-material";

import Dashboard from "./components/Dashboard";
import Products from "./components/Products";

function AppRouters() {
    return ( 
    <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/settings" element={<Settings/>}/>
    </Routes> );
}

export default AppRouters;
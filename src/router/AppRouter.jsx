import { Routes, Route } from "react-router-dom"

import { LoginPage } from "../auth/pages/LoginPage"
import { HeroRoutes } from "../Heroes/routes/HeroRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
    return(
        <>
            <Routes>

                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage/>
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroRoutes />
                    </PrivateRoute>
                } />

                <Route path="/*" element={<HeroRoutes/>} />
                
            </Routes>
        </>
    )
}
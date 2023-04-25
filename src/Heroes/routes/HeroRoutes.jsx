import { Routes, Route, Navigate } from "react-router-dom"

import { Navbar } from "../../ui/components/NavBar"
import { DC, HeroPage, SearchPage, Marvel } from "../pages";
import { HeroMovies } from "../pages/HeroMovies";

export const HeroRoutes = () => {

    return (
        <>
            <Navbar />
            <div className="container">
               <Routes>
               <Route path="DC" element={<DC />} />
                <Route path="marvel" element={<Marvel/>} />

                <Route path="hero/:id" element={<HeroPage/>} />

                <Route path="movies" element={<HeroMovies/>} />
                
                <Route path="search" element={<SearchPage />} />
                

                <Route path="/" element={<Navigate to="/hero"/>}/>
                
                </Routes> 
            </div> 
        </>
    )
}
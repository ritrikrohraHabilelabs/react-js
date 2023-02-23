import React from "react";
import Home from "./Pages/Home";
import {Routes, Route} from "react-router-dom"
import CardFullPage from "./Pages/CardFullPage";

export default function App(props){


    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:idx" element={<CardFullPage />} />
        </Routes>
        </>
    )
}
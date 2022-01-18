import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Analysis from "./components/Analysis/Analysis";
import AppLayout from "./components/AppLayout/AppLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/analysis/:screenName" element={<Analysis/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

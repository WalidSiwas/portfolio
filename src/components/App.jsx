import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Contact from "./Contact";
import Projects from "./Projects";  
import BiredButton from "./BiredButton"; 
import About from "./About"; 
import MySkills from "./MySkills";

function App() {
    
    return (
        <div>
            <Header />
            <Home  />
            <About />
            <Projects />
            <MySkills />
            <Contact />
            <BiredButton />
            <Footer />
        </div>
    );
}





export default App;
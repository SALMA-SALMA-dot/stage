import React from "react";
import { Routes, Route } from "react-router-dom";
import Acceuil from "./Acceuil"; 
import Menu from "./Menu";
import About from "./About";  
import Services from "./Services";  
import Packs from "./Packs";  
import News from "./News";  
import Contact from "./Contact";  
import Footer from "./Footer";

function App() {
  return (
    <>
      {/* Ton menu de navigation est là */}
      <Menu />

      {/* Les routes de ton site */}
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packs" element={<Packs />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Ton footer en bas de page, toujours visible */}
      <Footer />
    </>
  );
}

export default App;


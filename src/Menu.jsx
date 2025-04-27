import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import './Menu.css';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="top-bar">
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
            <a href="#"><i className="fab fa-google-plus-g"></i></a>
          </div>
          <span className="phone">
            Des QUESTIONS? Appelez Nous: <strong>+ (212) 5 37 60 16 62</strong>
          </span>
        </div>

        <div className="bottom-bar">
          <div className="logo">SERVITIUM</div>

          {/* الزر لفتح/إغلاق القائمة */}
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* إضافة/إزالة class 'open' حسب isOpen */}
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>A Propos de Servitium</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)}>Nos Services</Link></li>
            <li><Link to="/packs" onClick={() => setIsOpen(false)}>Nos Packs</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}



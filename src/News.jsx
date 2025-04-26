import React from 'react';
import "./News.css"
import { Link } from 'react-router-dom';

export default function News() {
  return (
    <header className="hero-section">
      <div className="breadcrumb-container">
      <div className="breadcrumb">
  <Link to="/Acceuil" className="breadcrumb-btn">Accueil</Link>
  <span className="separator">▸</span>
  <span>ACTUALITÉS</span>
</div>

        <div className="date">14 avril 2025</div>
      </div>
      <div className="hero-content">
        <h1>THE PASSION FOR WRITING</h1>
        <p>ALTERNATIVELY</p>
      </div>
      <div className="News">
      <h1></h1>
      </div>
    </header>
  );
}


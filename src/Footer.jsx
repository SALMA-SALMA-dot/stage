import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <img src="/assets/Servitium (1).png" alt="Servitium Logo" className="logo" />
          <p>APPT N°7 IMM N°206 AVENUE MLY ALI CHERIF</p>
          <p>MASSIRA 1 - TEMARA</p>
          <p>(+212) 5 37 60 16 62</p>
          <p>(+212) 6 62 87 33 52</p>
          <p><a href="mailto:contact@servitium.ma">contact@servitium.ma</a></p>
          <p><a href="https://servitium.ma" target="_blank" rel="noopener noreferrer">www.servitium.ma</a></p>
        </div>

        <div className="footer-column">
          <h4>Liens Utiles</h4>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Nos Services</a></li>
            <li><a href="#">Actualités</a></li>
            <li><a href="#">Conditions d’utilisation</a></li>
            <li><a href="#">Site Map</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>À propos de Servitium</h4>
          <ul>
            <li><a href="#">Nos Packs</a></li>
            <li><a href="#">Nous Contacter</a></li>
            <li><a href="#">Conditions Générales</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Newsletter</h4>
          <p>Nous ferons de notre mieux pour fournir de précieuses mises à jour et beaucoup de bonnes ressources sans envahir votre boîte aux lettres.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="votre.address@email.com" />
            <button type="submit">Je m’inscris !</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2015–2018 Servitium. All rights reserved. Developed by LAMA Conseil.</p>
        <div className="social-icons">
          <span>Suivez-nous</span>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-pinterest-p"></i></a>
          <a href="#"><i className="fab fa-google-plus-g"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
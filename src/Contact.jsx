import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import ReCAPTCHA from 'react-google-recaptcha';
import './ContactFrom.css';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 33.9716,
  lng: -6.8498,
};

function App() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    objet: '',
    message: '',
    copy: false,
  });

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Veuillez confirmer que vous n'êtes pas un robot.");
      return;
    }
    console.log('Formulaire soumis:', formData);
    // envoyer les données vers un backend ici
  };

  return (
    <div>
      {/* 🗺️ Carte Google */}
      
      <LoadScript googleMapsApiKey="">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        />
      </LoadScript>


      {/* 📨 Formulaire + infos */}
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom"
            placeholder="Saisissez votre nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="contact@servitium.ma"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="objet"
            placeholder="Entrez l'objet de votre message"
            value={formData.objet}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Saisissez votre message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <label className="checkbox">
            <input
              type="checkbox"
              name="copy"
              checked={formData.copy}
              onChange={handleChange}
            />
            Send me a copy
          </label>

          <div className="captcha">
            <ReCAPTCHA
              sitekey="VOTRE_CLÉ_SITE_PUBLIC" // Remplace avec ta vraie clé
              onChange={handleCaptchaChange}
            />
          
          </div>

          <button type="submit">Envoyer</button>
        </form>

        <div className="contact-info">
          <h3>Nous Contacter</h3>
          <p>
            APPT N° 7 IMM N° 206<br />
            AVENUE MLY ALI CHERIF<br />
            MASSIRA 1 TEMARA
          </p>
          <p>
            (+212) 5 37 60 16 62<br />
            (+212) 6 62 87 33 52
          </p>
          <p><a href="mailto:contact@servitium.ma">contact@servitium.ma</a></p>
          <p><a href="https://servitium.ma" target="_blank" rel="noopener noreferrer">www.servitium.ma</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;




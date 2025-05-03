import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './ContactFrom.css';

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
      {/* 🗺️ Carte Google sans API key */}
      <div style={{ width: '100%', height: '400px', marginBottom: '20px' }}>
        <iframe
          title="Google Map Servitium"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105884.89453126324!2d-6.939665370299462!3d33.969333765464505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b871f50c5c1%3A0x7ac946ed7408076b!2sRabat!5e0!3m2!1sfr!2sma!4v1746231589727!5m2!1sfr!2sma"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

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
              sitekey="6LcabywrAAAAAI9GHFoDaqW2_yJ_0Mp6hxEBms11" // Remplace avec ta vraie clé
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







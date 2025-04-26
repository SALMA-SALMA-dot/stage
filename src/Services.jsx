import React, { useState } from 'react';
import './Services.css';
import { FaDesktop, FaTools } from 'react-icons/fa';

// === SERVICES PRINCIPAUX ===
const services = [
  {
    icon: '🚀',
    title: "Création d'entreprise",
    description: `Vous avez un projet de création d’entreprise au Maroc et vous recherchez : 
- une information fiable, complète et efficace 
- Vous voulez connaître la forme sociale qui correspondra le mieux à votre activité.
Nous nous chargeons de toutes les formalités de création de votre société Annonce légale.`,
    items: []
  },
  {
    icon: '🧭',
    title: "Domiciliation",
    description: `Suite à nos conventions avec des centres d’affaires, nous vous proposons une
domiciliation juridique avec des adresses prestigieuses situées sur des grands
boulevards des grandes villes du MAROC (ex. Casablanca, Rabat).`,
    items: [
      "Une attestation de domiciliation",
      "L’immatriculation juridique de l’entreprise",
      "L’utilisation de l’adresse",
      "Réception et mise à disposition du courrier normal et rapide.",
      "Avertissement du domicilié, sur son téléphone portable, de l’arrivée d’un colis ou courrier rapide. Possibilité de réexpédition du courrier à l’adresse désignée par le domicilié."
    ]
  },
  {
    icon: '🧾',
    title: "Travaux juridique",
    description: `Nos conseillers juridiques sont à votre disposition pour vous renseigner,
vous conseiller, vous assister et vous défendre dans tous les domaines
d’intervention du droit commercial.`,
    items: [
      "Extension d’objet social",
      "Transfert de siège social",
      "Augmentation de capital",
      "Cession des parts",
      "Nomination ou démission de gérant",
      "Liquidation",
      "Modification des statuts",
      "Changement de forme juridique",
      "Représentation juridique",
      "Rédaction de contrat",
      "Consultations juridiques"
    ]
  }
];

// === COMPTABILITÉ ===
const TravauxComptabilite = () => {
  return (
    <div className="travaux-container">
      <h1 className="travaux-title">Travaux de comptabilité</h1>
      <div className="travaux-content">
        <p>
        Le Maroc a adopté à partir de janvier 2017 la télé-déclaration et le télépaiement obligatoires pour toutes les entreprises. Notre cabinet s’est préparé à cette transition en mettant en place une gestion online de la comptabilité. Concrètement, chaque client dispose d’un accès privé à son espace pour y déposer ses pièces comptables scannées et pour dialoguer avec son chargé(e) de compte. La validation de la télé-déclaration préalablement confirmée en ligne par le client est validée dès lors par le cabinet auprès de l’administration fiscale. Au cas où le client doit payer un impôt, il recevra une alerte du cabinet pour qu’il s’acquitte du télépaiement.
        </p>
        <p>
        Toutes les obligations comptables et fiscales sont assurées selon ce mode opératoire : TVA, Bilan et comptes de résultats, Etat 9421, Déclaration TP, PV AGO.
Ce traitement sécurisé de la comptabilité permet aux jeunes entreprises de se concentrer sur leur cœur de métier en confiant leur comptabilité à des professionnels en phase avec cette nouvelle ère du tout numérique.
        </p>
      </div>
    </div>
  );
};

// === CALL TO ACTION ===
function CallToAction() {
  return (
    <div className="cta-section">
      <h2>
        <span className="cta-highlight">Demandez Votre Devis 100% Gratuit !</span>
      </h2>
      <p className="cta-subtext">Nous vous répondons dans les 24 Heures !</p>
    </div>
  );
}

// === CARTES COMMUNICATION & SERVICES DIVERS ===
function Cards() {
  const [visibleIndex, setVisibleIndex] = useState(null); 

  const toggleList = (index) => {
    setVisibleIndex(prev => (prev === index ? null : index)); 
  };

  return (
    <div className="cards-container">
      <div
        className="card-1"
        onClick={() => toggleList(0)} 
      >
        <FaDesktop className="icon-1" />
        <h3>Communication</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus sollicitudin odio...
        </p>
        {visibleIndex === 0 && (
          <ul className="services-list">
            <li>√- Content management systems</li>
            <li>√- Virtual shops and ecommerce</li>
            <li>√- Presentation websites</li>
            <li>√- Online catalogues</li>
            <li>√- Portal systems</li>
            <li>√- & any other dynamic website</li>
          </ul>
        )}
      </div>

      <div
        className="card-1"
        onClick={() => toggleList(1)} 
      >
        <FaTools className="icon-1" />
        <h3>Services divers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus sollicitudin odio...
        </p>
        {visibleIndex === 1 && ( // إذا كانت البطاقة هي 1 فقط، يتم عرض القائمة
          <ul className="services-list">
            <li>√- La formation dans les métiers de la comptabilité</li>
            <li>√- Dépôt de marque</li>
            <li>√- Représentation fiscale des sociétés étrangères</li>
            <li>√- Etc ......</li>
          </ul>
        )}
      </div>
    </div>
  );
}

// === COMPOSANT PRINCIPAL ===
export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePress = (index) => {
    setActiveIndex(index);
  };

  const handleRelease = () => {
    setActiveIndex(null);
  };

  return (
    <div>
      <div className="Services">
        <h1>Nos Services</h1>
      </div>

      <section className="services-section">
        <h2 className="services-title">NOS SERVICES</h2>
        <p className="subtitle">
          Nous offrons une gamme complète de services pour tous les types d'entreprises.
        </p>

        <div className="services-Sections">
          {services.map((service, index) => (
            <div className="service" key={index}>
              <div
                className={`icon-wrapper ${activeIndex === index ? "clicked" : ""}`}
                onMouseDown={() => handlePress(index)}
                onMouseUp={handleRelease}
                onMouseLeave={handleRelease}
                onTouchStart={() => handlePress(index)}
                onTouchEnd={handleRelease}
              >
                <span className="icon">{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p className="description">{service.description}</p>
              {service.items.length > 0 && (
                <ul className="list">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

 

      <TravauxComptabilite />
      <Cards />    
      <CallToAction />
    </div>
  );
}

















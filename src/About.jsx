import React from 'react';
import "./About.css";

export default function About() {
  const stats = [
    {
      icon: '💻',
      value: '25000+',
      label: 'LIGNES DE CODE CE MOIS',
    },
    {
      icon: '🚀',
      value: '150+',
      label: 'PROJETS LANCÉS',
    },
    {
      icon: '☕',
      value: '9900+',
      label: 'TASSES DE CAFÉ CETTE ANNÉE',
    },
    {
      icon: '⭐',
      value: '180+',
      label: 'AVIS & NOTATIONS',
    },
  ];

  return (
    <div>
      <div className="banner">
        <video autoPlay loop muted className="background-video">
          <source src="/assets/" type="video/mp4" />
        </video>
        <div className="content">
          <h1>Servitium</h1>
          <h2>Votre Confiance, Notre Capital</h2>
        </div>
      </div>

      <div className="text">
        <h1>Qui Sommes-Nous ?</h1>
        <p>
          Créé en 2014, le cabinet SERVITIUM a pour objectif d'offrir en permanence un service de qualité,
          une organisation polyvalente qui correspond aux besoins de nos clients nationaux ainsi que des investisseurs étrangers.
          SERVITIUM est le meilleur partenaire des entrepreneurs, des investisseurs étrangers et marocains.
          Pour la réussite de votre projet, nous mettons à votre disposition notre expertise et notre savoir-faire
          pour vous assurer un conseil opportun. SERVITIUM répond à vos attentes de chefs d'entreprise
          en vous apportant une offre globale de services personnalisés.
        </p>
      </div>

      <div className="why-morocco-section">
  <div className="why-morocco-image">
    <img src="/assets/economicgrowth-768x637 (1).jpg" alt="Servitium" />
  </div>
  <div className="why-morocco-text">
    <h1>POURQUOI LE <span>MAROC ?</span></h1>
    <p>
      Une position géopolitique et géoéconomique de premier plan, une infrastructure de qualité et un écosystème idéal pour y vivre et/ou pour utiliser comme hub à la conquête de l’immense marché africain fort de plus de 1 milliard de consommateurs.
      Une fiscalité extrêmement avantageuse pour les activités exportatrices de produits et services, l’offshoring et l’industrie.
      Le Maroc si proche géographiquement offre une qualité de vie et un environnement idéal pour développer votre business.
      Ce n’est pas un hasard si les IDE sont en hausse permanente depuis une dizaine d’année et que des groupes internationaux s’installent et développent leur business à partir du Maroc que ce soit dans l’industrie (Renault, Peugeot, Altran …),
      les énergies renouvelables (Engie, ACWA,..) mais encore des centaines d’entrepreneurs en services divers qui se dirigent vers le Maroc pour optimiser leurs revenus d’une manière substantielle.
    </p>
  </div>
</div>

<div className="business-setup-section">
  <div className="business-setup-image">
    <img src="/assets/About.jpg" alt="Création entreprise Maroc" />
  </div>
  <div className="business-setup-text">
    <h2>Création Entreprise Au Maroc</h2>
    <p>Vous avez un projet et vous souhaitez le concrétiser ?</p>
    <p><strong>SERVITIUM</strong> vous apporte la solution idéale.</p>
    <p>
      <strong>SERVITIUM</strong> se charge de toutes les formalités de constitution de votre société,
      vous permettant une optimisation de votre temps ainsi que le concours d’une équipe d’experts.
    </p>
  </div>
</div>


      <div className="container">
        <div className="overlay">
          <button className="servitium-button">Servitium</button>
        </div>
      </div>

      <div className="key-figures-container">
        <h2>Chiffres Clés</h2>
        <div className="underline"></div>
        <div className="figures">
          {stats.map((item, index) => (
            <div key={index} className="figure-card">
              <div className="icon">{item.icon}</div>
              <div className="number">{item.value}</div>
              <div className="label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="cta-section">
      <h2>Demandez Votre Devis 100% Gratuit !</h2>
      <p>Nous vous répondons dans les 24 Heures !</p>
      <a href="/About" className="cta-button">Votre Devis ICI !</a>
      </div>
    </div>
  );
}








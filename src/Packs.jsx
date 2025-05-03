import React from 'react';
import './packs.css';

const offresData = [
  {
    title: 'Démarrage',
    price: '3500',
    unit: 'par Création',
    features: [
      'Création de société',
      'Domiciliation 6 mois',
    ],
    buttonText: 'Commander'
  },
  {
    title: 'Premium',
    price: '4500',
    unit: 'par Création',
    features: [
      'Création de société',
      'Domiciliation 6 mois',
      'Gestion comptable et fiscale (2 trimestres)',
      'Conception de logo',
      'Conception de carte visite et papier à en-tête',
    ],
    buttonText: 'Commander',
    popular: true,
  },
  {
    title: 'Gold',
    price: '7500',
    unit: 'par Création',
    features: [
      'Création de société',
      'Domiciliation 6 mois',
      'Gestion comptable et fiscale (2 trimestres)',
      'Conception de logo',
      'Conception carte visite, papier à en-tête',
      'Création de site web',
    ],
    buttonText: 'Commander'
  },
  {
    title: 'Gestion',
    price: '500',
    unit: 'par mois',
    features: [
      'Gestion comptable',
      'Gestion fiscale',
      'Gestion sociale',
      'Gestion du personnel',
    ],
    buttonText: 'Commander'
  },
  {
    title: 'Sur mesure',
    price: '',
    unit: 'par Devis',
    features: [
      'Toutes les modifications statutaires',
      'Business plan',
      'Demande de remboursement de TVA',
      'Représentation fiscale',
      'Contrat de travail étranger',
    ],
    buttonText: 'Commander'
  }
];

const frais = [
  { description: 'Certificat négatif', montant: '300Dh' },
  { description: 'Enregistrement des contrats de bail', montant: '300Dh' },
  { description: 'Registre du commerce', montant: '350Dh' },
  { description: 'Modèle J', montant: '200Dh' },
  { description: 'Annonce au journal légal', montant: '300Dh' },
  { description: 'Annonce au bulletin officiel', montant: '600Dh' },
];

export default function Packs() {
  return (
    <>
<div className="section-banner-wrapper">
  <div className="section-diagonal">
    Nos Packs
  </div>
  <div className="section-blue"></div>
</div>

      <section className="offres">
        <h2 className="offres-title">Nos Offres</h2>

        <div id="pricing-table" className="clear">
          {offresData.map((offre, index) => (
            <div
              key={index}
              className={`plan ${offre.popular ? 'popular' : ''}`}
              id={offre.popular ? 'most-popular' : ''}
            >
              {offre.popular && <div className="badge-populaire">Populaire</div>}

              <h3>
                {offre.title}
                <span>
                  {offre.price ? `Dh ${offre.price}` : ''}
                  <small>{offre.unit}</small>
                </span>
              </h3>

              <a className="signup" href="">{offre.buttonText}</a>

              <ul>
                {offre.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="frais-administratifs-container">Hors frais de création</div>

        <section className="frais-container">
          <h2 className="frais-title">Frais Administratifs</h2>
          <ul className="frais-liste">
            {frais.map((item, index) => (
              <li key={index} className="frais-item">
                <span className="description">{item.description}</span>
                <span className="montant">{item.montant}</span>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}









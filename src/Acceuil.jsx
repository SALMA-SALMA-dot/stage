import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Acceuil.css";

// Composant Slider
const Slider = () => {
  const slides = [
    {
      image: "/assets/formation.jpg",
      title: "VOTRE ENTREPRISE",
      subtitle: "CLÉ EN MAIN",
      paragraph: "Concrétisez vos projets",
      paragraphSpan: "au Maroc",
      buttonText: "NOS DERNIÈRES OFFRES",
      buttonColor: "#0091D4",
      buttonLink: "/Packs",
    },
    {
      image: "/assets/comptabilite.jpg",
      title: "NOS SERVICES",
      subtitle: "DE QUALITÉ",
      paragraph: "Nous vous accompagnons",
      paragraphSpan: "partout au Maroc",
      buttonText: "Nos services",
      buttonColor: "#0091D4",
      buttonLink: "/Services",
    },
    {
      image: "/assets/pexels-thebstudio-947845.jpg",
      title: "Découvrez Nos",
      subtitle: "Meilleures Offres",
      paragraph: "Créez votre entreprise à partir de",
      paragraphSpan: "3500 Dh*",
      buttonText: "NOS PACKS",
      buttonColor: "#0091D4",
      buttonLink: "/Packs",
      type: "custom",
    },
  ];

  return (
    <div className="Acceuil">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="background-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.type === "custom" ? (
              <div
                className="custom-slide"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="custom-overlay">
                  <div className="custom-left-text">
                    <h2>
                      {slide.title} <strong>{slide.subtitle}</strong>
                    </h2>
                    <p>
                      {slide.paragraph} <strong>{slide.paragraphSpan}</strong>
                    </p>
                  </div>
                  <Link to={slide.buttonLink}>
                    <button className="custom-button">
                      <span>{slide.buttonText}</span>
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div
                className="background-slide"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="Acceuil-overlay">
                  <h1>
                    {slide.title} <br />
                    <span className="Acceuil-sp">{slide.subtitle}</span>
                  </h1>
                  <p>
                    {slide.paragraph} <br />
                    <span className="Acceuil-span">{slide.paragraphSpan}</span>
                  </p>
                  <Link to={slide.buttonLink}>
                    <button
                      className="main-btn"
                      style={{ backgroundColor: slide.buttonColor }}
                    >
                      {slide.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// Cards Component
export function Cards() {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-icon">
          <img src="/assets/rappel-icon.svg" alt="Devis Icon" />
        </div>
        <Link to="/Contact">
        <div className="card-content">
          <h3>Demander un Devis</h3>
          <p>Demandez Votre Devis 100% Gratuit !</p>
        </div>
        </Link>
      </div>
      <div className="card">
        <div className="card-icon">
          <img src="/assets/rappel-icon.svg" alt="Rappel Icon" />
        </div>
        <Link to="/Contact">
        <div className="card-content">
          <h3>Demander un Rappel</h3>
          <p>Un de nos agents prendra contact avec vous dans les 24h</p>
        </div>
        </Link>  
      </div>
     
     
      <div className="card">
      <Link to="/Packs">
        <div className="card-icon">
          <img src="/assets/packs-icon.svg" alt="Packs Icon" />
        </div>
        <div className="card-content">
          <h3>Télécharger Nos Packs</h3>
          <p>Téléchargez nos Packs & dernières offres de service</p>
        </div>
        </Link>
      </div>
    </div>
  );
}



// Composant Testimonials
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Jimmy Ferrara",
      title: "General Manager",
      text: "Credibly innovate granular internal or 'organic' sources whereas high standards in web readiness.",
      stars: 5,
      image: "/assets/images (21).jpg",
    },
    {
      name: "Perry Andrews",
      title: "SWIFT Inc.",
      text: "Credibly innovate granular internal or 'organic' sources whereas high standards in web readiness.",
      stars: 5,
      image: "/assets/images5.jpg",
    },
    {
      name: "Sammy Browns",
      title: "CFO, Perfect Inc.",
      text: "Credibly innovate granular internal or 'organic' sources whereas high standards in web readiness.",
      stars: 5,
      image: "/assets/images (17).jpeg",
    },
  ];

  return (
    <section className="testimonials-section">
      <h2>REVUES & TÉMOIGNAGES</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p className="testimonial-text">“{t.text}”</p>
              <div className="testimonial-user">
                <img src={t.image} alt={t.name} className="user-img" />
                <div>
                  <h4>{t.name.toUpperCase()}</h4>
                  <p>{t.title}</p>
                  <div className="testimonial-stars">
                    {Array.from({ length: t.stars }).map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

// Composant principal
export default function Acceuil() {
  const [searchTerm, setSearchTerm] = useState("");

  const services = [
    {
      title: "Création d’entreprise",
      description:
        "Vous avez un projet de création d’entreprise au Maroc et vous recherchez une information fiable et efficace.",
      icon: "🚀",
    },
    {
      title: "Domiciliation",
      description:
        "Nous vous proposons une domiciliation juridique avec des adresses prestigieuses situées sur de grands boulevards.",
      icon: "📍",
    },
    {
      title: "Travaux juridiques",
      description:
        "Nos conseillers juridiques sont à votre disposition pour vous renseigner, vous conseiller et vous défendre.",
      icon: "⚖️",
    },
  ];

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Slider />

      <div className="Acceuil-1">
        <div className="Acceuil-1-content">
          <h2>
            Découvrez le pack <span className="span">Premium</span> à 4500 DH TTC
          </h2>
          <p>
            Création et domiciliation de votre société pour 24 mois à 4500 DH TTC, hors charges de création.
          </p>
          <div className="buttons">
            <button
              className="button-1"
              onClick={() => (window.location.href = "/newsletter")}
            >
              REJOIGNEZ NOTRE NEWSLETTER
            </button>
            <Link to="/Packs">
              <button className="button-2">COMMANDER</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="services-container">
        <h2>Nos Offres de Services</h2>
        <p>Servitium propose une panoplie de services, notamment :</p>
      </div>

      <div className="search-section">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <SwiperSlide key={index} className="service-slide">
                <div className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="no-results">Aucun service trouvé.</p>
          )}
        </Swiper>
      </div>

      <div className="services-container-cl">
        <div className="services-container-1">
          <p>
            Nous offrons une gamme complète de services pour <span className="highlight">tous les types d'entreprises.</span>
          </p>
          <ul className="services-list-1">
            <li>✔ TRAVAUX DE COMPTABILITÉ</li>
            <li>✔ COMMUNICATION</li>
            <li>✔ FORMATION & SERVICES DIVERS</li>
          </ul>
          <Link to="/Services">
            <button className="services-btn">Nos Services</button>
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="services-slider"
        >
          <SwiperSlide>
            <img src="/assets/formation.jpg" alt="Formation" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/comptabilite.jpg" alt="Comptabilité" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/comunication.jpg" alt="Communication" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="service-container">
        <div className="service-image">
          <img src="/assets/image.jpg" alt="Servitium" />
          <h2 className="title">Pourquoi Nous ?</h2>
        </div>
        <div className="service-text">
          <h1>
            Pourquoi Créer Votre Entreprise Avec <span>Servitium</span> ?
          </h1>
          <p>
            Créer une société au Maroc n’est plus l’apanage des grands, peu
            importe l’envergure de votre idée, il suffit de savoir à qui la
            confier pour lui donner de la vie!
          </p>
          <p>
            Servitium se veut un partenaire privilégié des entrepreneurs, des
            investisseurs étrangers et marocains. Pour la réussite de votre
            projet, nous mettons à votre disposition notre expertise et notre
            savoir-faire pour vous assurer un conseil opportun, prompt et
            permanent afin de vous garantir une meilleure protection contre les
            aléas juridiques et fiscaux qui peuvent entraver vos démarches et
            votre activité.
          </p>
        </div>
        </div>


      <Cards />
      <Testimonials />

      <div className="cta-wrapper">
        <h2>Demandez Votre Devis 100% Gratuit !</h2>
        <p>Nous vous répondons dans les 24 Heures !</p>
        <a href="#" className="cta-button">Votre Devis ICI !</a>
      </div>
    </>
  );
}





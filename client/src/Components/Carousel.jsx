import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  const categories = [
    {
        name: "TOURISTE",
        image: "touriste.jpg",
        paragraphe: "Voyagez sereinement, MayHelp gère vos démarches administratives pour un séjour sans tracas.",
        description: "Si vous êtes en vacances ou en visite en Israël, nous facilitons vos démarches administratives. Que ce soit pour des formalités d’entrée, des réservations ou des demandes spécifiques, nous prenons en charge toutes vos obligations pour que vous puissiez profiter pleinement de votre séjour sans complications."
    },
    {
        name: "SOLDAT",
        image: "soldatsimg.jpg",
        paragraphe: "MayHelp s’occupe de vos démarches administratives pour que vous puissiez vous concentrer sur l’essentiel.",
        description: "En tant que soldat, il peut être difficile de jongler entre vos missions et les tâches administratives. MayHelp vous accompagne en gérant vos formalités, qu'il s'agisse de documents personnels, de soutien aux familles ou de logistique, afin que vous puissiez vous concentrer sur vos priorités et vos engagements militaires."
    },
    {
        name: "ALYAH",
        image: "israel.jpg",
        paragraphe: "MayHelp simplifie votre Alyah en vous guidant à chaque étape pour une installation réussie en Israël.",
        description: "Faire son Alyah est une étape importante, et MayHelp est là pour rendre cette transition plus fluide. Nous vous aidons dans toutes vos démarches administratives et logistiques, de l’obtention de votre visa à la gestion de vos installations, afin que vous puissiez vous intégrer rapidement et sereinement en Israël."
    },
    {
        name: "ADMINISTRATIF",
        image: "admin.jpg",
        paragraphe: "MayHelp gère vos formalités administratives pour que vous puissiez vous concentrer sur l’essentiel.",
        description: "Les formalités administratives peuvent être complexes et chronophages. Nous vous assistons dans vos démarches avec les autorités locales, la gestion des documents officiels, des amendes ou des demandes spéciales. Vous bénéficiez d'un accompagnement personnalisé pour vous libérer des tracas administratifs et vous concentrer sur vos projets."
    }
];


  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % categories.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className="categories">
      <div className="categories-p">
        <button onClick={handlePrevious}>
          <p className="previous-p">{categories[prevIndex].name}</p>
        </button>
        <p className="current-p">{categories[currentIndex].name}</p>
        <button onClick={handleNext}>
          <p className="next-p">{categories[nextIndex].name}</p>
        </button>
      </div>
      <div
        className="previous-category"
      >
        <img src={categories[prevIndex].image} alt="" />
      </div>
      <div
        className="category"
      >
        <img src={categories[currentIndex].image} alt="" />
        <div className="sub-category">
          <p>{categories[currentIndex].paragraphe}</p>
          <Link to='/prices'><button className="call-to-action">Découvrir</button></Link>
        </div>
        <button className="previous-btn" onClick={handlePrevious}>
          &lt;
        </button>
        <button className="next-btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div
        className="next-category"
      >
        <img src={categories[nextIndex].image} alt="" />
      </div>
    </div>
    
    <div className="text-categories">
        <p>{categories[currentIndex].description}</p>
    </div>
    <hr />
    </>
  );
};

export default Carousel;
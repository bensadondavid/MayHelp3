import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  const categories = [
    { name: "TOURISTE", image: "touriste.jpg", paragraphe : 'Voyagez sereinement, MayHelp gère vos démarches administratives pour un séjour sans tracas.' },
    { name: "SOLDAT", image: "soldatsimg.jpg", paragraphe :'MayHelp s’occupe de vos démarches administratives pour que vous puissiez vous concentrer sur l’essentiel'},
    { name: "ALYAH", image: "israel.jpg", paragraphe : 'MayHelp simplifie votre Alyah en vous guidant à chaque étape pour une installation réussie en Israël.' },
    { name: "ADMINISTRATIF", image: "admin.jpg", paragraphe : 'MayHelp gère vos formalités administratives pour que vous puissiez vous concentrer sur l’essentiel.' },
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
  );
};

export default Carousel;
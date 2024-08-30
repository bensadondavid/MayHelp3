import React, { useEffect, useState } from "react";

const Carousel = () => {
  const categories = [
    { name: "TOURISTE", image: "url(touriste.jpg)", paragraphe : 'Voyager l’esprit tranquille ! MayHelp s’occupe de toutes vos démarches administratives pendant votre séjour. De la réservation de vos activités à l’organisation de vos formalités, profitez pleinement de votre voyage sans tracas administratifs.' },
    { name: "SOLDAT", image: "url(soldatsimg.jpg)", paragraphe :'En tant que soldat, votre temps est précieux. MayHelp est là pour vous épauler dans vos démarches administratives, afin que vous puissiez vous concentrer sur l’essentiel. Qu’il s’agisse de documents officiels ou de services personnalisés, nous sommes à vos côtés.'},
    { name: "ALYAH", image: "url(telaviv.jpg)", paragraphe : 'Faites de votre Alyah une expérience sereine et réussie. MayHelp vous guide à chaque étape, du visa aux démarches d’intégration. Nous simplifions votre installation en Israël pour que vous puissiez commencer cette nouvelle aventure en toute sérénité.' },
    { name: "ADMINISTRATIF", image: "url(administratif.jpg)", paragraphe : 'Simplifiez votre quotidien avec MayHelp ! Que vous soyez résident ou expatrié, nous prenons en charge toutes vos formalités administratives, des documents officiels aux tâches courantes. Concentrez-vous sur l’essentiel, nous nous occupons du reste.' },
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
        style={{ backgroundImage: categories[prevIndex].image }}
      ></div>
      <div
        className="category"
        style={{ backgroundImage: categories[currentIndex].image }}
      >
        <div className="sub-category">
          <p>{categories[currentIndex].paragraphe}</p>
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
        style={{ backgroundImage: categories[nextIndex].image }}
      ></div>
    </div>
  );
};

export default Carousel;
import React, { useState } from "react";

const Carousel = () => {
  const categories = [
    { name: "TOURISTE", image: "url(touriste.jpg)" },
    { name: "SOLDAT", image: "url(soldatsimg.jpg)" },
    { name: "ALYAH", image: "url(telaviv.jpg)" },
    { name: "ADMINISTRATIF", image: "url(administratif.jpg)" },
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
        <p className="previous-p">{categories[prevIndex].name}</p>
        <p className="current-p">{categories[currentIndex].name}</p>
        <p className="next-p">{categories[nextIndex].name}</p>
      </div>
      <div className="previous-category"
      style={{ backgroundImage: categories[prevIndex].image }}
      >
      </div>
      <div
        className="category"
        style={{ backgroundImage: categories[currentIndex].image }}
      >
        <button className="previous-btn" onClick={handlePrevious}>
          &lt;
        </button>
        <button className="next-btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className="next-category"
      style={{ backgroundImage: categories[nextIndex].image }}
      >
      </div>
    </div>
  );
};

export default Carousel;
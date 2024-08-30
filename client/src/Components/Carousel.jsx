import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (touchStartX - touchEndX > 50) {
        // Swipe gauche
        handleNext();
      } else if (touchEndX - touchStartX > 50) {
        // Swipe droite
        handlePrevious();
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex]);

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
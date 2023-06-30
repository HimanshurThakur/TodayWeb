import React, { useState } from "react";
import "./HexagonShape.css";

const HexagonShape = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    "agriindia.jpg",
    "agriindia4.jpg",
    "agriindia5.jpg",
    "agriindia.jpg",
    "agriindia.jpg",
    "agriindia4.jpg",
    "agriindia5.jpg",
    "agriindia.jpg",
    "agriindia4.jpg",
    "agriindia5.jpg",
    "agriindia3.jpg",
    "agriindia4.jpg",
    "agriindia5.jpg",
    "agriindia4.jpg",
    "agriindia5.jpg",
    "agriindia3.jpg",
    "agriindia4.jpg",
    "agriindia5.jpg",
    "agriindia3.jpg",
    "agriindia5.jpg",
    "agriindia3.jpg",
    "agriindia5.jpg",
    "agriindia3.jpg",
    "agriindia5.jpg",
    "agriindia3.jpg",

    // Add more image paths here
  ];

  const handlePrev = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 10
    );
  };

  const handleNext = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="container7">
      <div className="banner7">
        {images &&
          images.map((image, index) => (
            <div
              key={index}
              className={`hexa ${index === slideIndex ? "active" : ""}`}
              style={{
                transform: `translateX(-${
                  slideIndex * (100 /10)
                }%)`,
              }}
            >
              <div className="hexagon">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          ))}
      </div>
      <button className="slider-arrow left-arrow" onClick={handlePrev}>
        &lt;
      </button>

      <button className="slider-arrow right-arrow" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default HexagonShape;

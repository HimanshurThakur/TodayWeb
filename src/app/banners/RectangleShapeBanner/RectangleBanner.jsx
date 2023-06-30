import React, { useState } from "react";
import "./RectangleBanner.css";

const RectangleBanner = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    "agrifield3.jpg",
    "agri2.jpg",
    "agri2.jpg",
    "agrifield3.jpg",
    "agrifield3.jpg",
    "agrifield3.jpg",
    "agrifield3.jpg",
    "agrifield3.jpg",
    "agrifield3.jpg",
    "agrifield3.jpg",
    "agrifield3.jpg",
    "agrifield3.jpg",
    "agrifield3.jpg",
    "agrifield3.jpg",
    "agrifield3.jpg",
    "agrifield3.jpg",
    "agrifield3.jpg",

    // Add more image paths here
  ];

  const handlePrev = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 10
    );
  };

  const handleNext = () => {
    setSlideIndex((prevIndex) =>
    (prevIndex + 1) % images.length
    );
  };

  return (
    <div className="container3">
      <div className="banner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slum ${index === slideIndex ? "active" : ""}`}
            style={{
              transform: `translateX(-${slideIndex * (100 / images.length)}%)`,
            }}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
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

export default RectangleBanner;

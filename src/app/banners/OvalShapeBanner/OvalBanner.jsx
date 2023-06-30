import React, { useState } from "react";
import "./OvalBanner.css";

const CircleBanner = () => {
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
  ];

  const handlePrev = () => {
setSlideIndex((prevIndex) =>{
      // prevIndex === 0 ? images.length - 1 : prevIndex - 10
      if(prevIndex===0){
        return images.length-1;
      }else{
        return prevIndex+1;
      }
  });
  };

  const handleNext = () => {
    // setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSlideIndex((prevIndex)=>{
      if(prevIndex===images.length-1){
        return 0;
      }else{
        return prevIndex+1;
      }
    });
  };

  return (
    <div className="oval">
      <div className="banner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`solve ${index === slideIndex ? "active" : ""}`}
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

export default CircleBanner;

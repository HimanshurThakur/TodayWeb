import React from "react";
import "./ImageContainer.css"; // CSS file for styling

const ImageContainer = () => {
  return (
    <div className="image-container">
      <img className="image" src="agri2.jpg" alt="First Image" />
      <img className="image" src="agri2.jpg" alt="Second Image" />
    </div>
  );
};

export default ImageContainer;

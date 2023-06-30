import React from "react";
import "./BigTwoBanner.css";

function BigTwoBanner() {
  return (
    <div className="conatiner_Banner">
      <div className="First_Half">
        <img
          className="banner_ImgHalf"
          src="https://media.istockphoto.com/id/1092520698/photo/indian-farmer-at-onion-field.jpg?s=612x612&w=0&k=20&c=gvu-DzA17EyVSNzvdf7L3R8q0iIvLapG15ktOimqXqU="
          alt="farmer1"
        />
      </div>
      <div className="Second_Half">
        <img
          className="banner_ImgHalf"
          src="https://media.istockphoto.com/id/1029301814/photo/farmer-ploughing-field.jpg?s=612x612&w=0&k=20&c=DUfDbLJ_gpkdPJZu3Nu3_Y_wdB64MP1lAoNtus1ewXQ="
          alt="farmer1"
        />
      </div>
    </div>
  );
}

export default BigTwoBanner;

"use client";
import React from "react";
import "./Animation.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";

function Animation(props) {

  return (

    <div class="cardds">
      <div class="content">
        <div class="contentBx">
          <h3 style={{ color: "black", textAlign: "center" }}>
            {props.data.name}
          </h3>
          <p style={{ color: "black", textAlign: "center" }}>
            {props.data.username}
          </p>
          <p style={{ color: "black", textAlign: "center" }}>
            {props.data.email}
          </p>
        </div>
      </div>
    </div>

  );
}

export default Animation;

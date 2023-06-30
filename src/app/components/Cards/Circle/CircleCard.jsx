"use client";
import React from "react";
import "./circlecard.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";

function page(props) {
  return (
    <div>
      <div class="card">
        <div class="content">
          <div class="imgBx">
            <img src={props.data.image} />
          </div>
          <div class="contentBx">
            <h3 style={{ color: "black", textAlign: "center" }}>
              {props.data.name}
            </h3>
            <p style={{ color: "black", textAlign: "center" }}>
              {props.data.cost}
            </p>
            <p style={{ color: "black", textAlign: "center" }}>
              {props.data.specification}
            </p>
          </div>
        </div>
        <ul class="sci">
          <li>
            <VisibilityIcon style={{ color: "black" }} />
          </li>
          <li>
            <ShoppingCartIcon style={{ color: "black" }} />
          </li>
          <li>
            <FavoriteIcon style={{ color: "black" }} />
          </li>
       
       
          <li>
            <ThumbUpIcon style={{ color: "black" }} />
          </li>
          <li>
            <ShareIcon style={{ color: "black" }} />
          </li>
          </ul>
   
      </div>
    </div>
  );
}

export default page;

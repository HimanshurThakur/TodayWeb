"use client";
import React from "react";
import Link from "next/link";
import "./squarecard.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";

export default function Home(props) {
  return (
    <>
      <div>
        <div className="cards">
          <div className="content">
            <div className="imgBx">
              <img src={props.data.image} alt="Product Image" />
            </div>
            <div className="contentBx">
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
          <ul className="scis">
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
    </>
  );
}

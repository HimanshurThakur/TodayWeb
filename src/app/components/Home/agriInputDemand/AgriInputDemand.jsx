import React from "react";
import "./AgriInputDemand.css";
import SquareCard from "../../../components/Cards/SquareCard/SquareCard";

function AgriInputDemand() {
  const dataa = [
    {
      image:
        "https://www.shutterstock.com/image-photo/assorted-organic-vegetables-fruits-wicker-260nw-1720876849.jpg",
      name: "Vegitables",
      cost: "₹ 5000/-",
      specification: "Natural/Beauty",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/assorted-organic-vegetables-fruits-wicker-260nw-1720876849.jpg",
      name: "Vegitables",
      cost: "₹ 5000/-",
      specification: "Natural/Beauty",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/assorted-organic-vegetables-fruits-wicker-260nw-1720876849.jpg",
      name: "Vegitables",
      cost: "₹ 5000/-",
      specification: "Natural/Beauty",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/assorted-organic-vegetables-fruits-wicker-260nw-1720876849.jpg",
      name: "Vegitables",
      cost: "₹ 5000/-",
      specification: "Natural/Beauty",
    },
  ];

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "30px",
          marginTop: "1rem",
        }}
      >
        Agri Input Demand
      </h1>
      <div className="container">
        {dataa.map((items) => (
          <SquareCard data={items} />
        ))}
      </div>
      <div className="btn_div">
        <button className="btn-1">
          <a
            href="https://geecomindia.in/franchise/explore-supply/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All
          </a>

        </button>
      </div>
    </div>
  );
}

export default AgriInputDemand;

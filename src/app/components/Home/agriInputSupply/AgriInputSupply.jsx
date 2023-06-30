import React from "react";
import SquareCard from "../../../components/Cards/SquareCard/SquareCard";
import "./AgriInputSupply.css";

function AgriInputSupply() {
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
          fontSize: "30px",
          fontWeight: "bold",
          marginTop: "1rem",
        }}
      >
        Agri Input Supplies
      </h1>
      <div className="container">
        {dataa.map((items) => (
          <SquareCard data={items} />
        ))}
      </div>
      <div className="btn_div">
        <button className="btn-1">View All</button>
      </div>
    </div>
  );
}

export default AgriInputSupply;

import React from "react";
import "./AgriOutputDemand.css";
import Animation from "../../../components/Cards/AnimationCard/Animation";

function AgriOutputSupply() {
  const dataa = [
    {
      image:
        "https://www.shutterstock.com/image-photo/assorted-organic-vegetables-fruits-wicker-260nw-1720876849.jpg",
      name: "Vegetables",
      cost: "₹ 5000/-",
      specification: "Natural/Beauty",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/assorted-organic-vegetables-fruits-wicker-260nw-1720876849.jpg",
      name: "Vegetables",
      cost: "₹ 5000/-",
      specification: "Natural/Beauty",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/assorted-organic-vegetables-fruits-wicker-260nw-1720876849.jpg",
      name: "Vegetables",
      cost: "₹ 5000/-",
      specification: "Natural/Beauty",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/assorted-organic-vegetables-fruits-wicker-260nw-1720876849.jpg",
      name: "Vegetables",
      cost: "₹ 5000/-",
      specification: "Natural/Beauty",
    },
  ];

  return (
    <>
      <h1 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "1rem" }}>
        Agri Output Demand
      </h1>
      <div className="container">
        {dataa.map((items) => (
          <>
            <Animation data={items} />
          </>
        ))}
      </div>
      <div className="btn_div">
        <button className="btn-1">View All</button>
      </div>
    </>
  );
}

export default AgriOutputSupply;

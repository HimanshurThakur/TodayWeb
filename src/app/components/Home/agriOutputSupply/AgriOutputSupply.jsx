import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import "./AgriOutputSupply.css";
import Animation from '../../../components/Cards/AnimationCard/Animation'

function AgriOutputSupply() {
  const [product, setProduct] = useState([]);

  const router = useRouter();


  const getApiData = async () => {
    try {
      const rawResult = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await rawResult.json();
      setProduct(result);
    } catch (error) {
      console.log("Error fetching API data:", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);


  const handleRedirect = () => {
    router.push('/agriOutputSupplyDetails');
  };



  return (
    <>
      <h1 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "1rem" }}>
        Agri Output Supplies
      </h1>
      <div className="container">
        {product.slice(0, product.length > 0 && 4).map((items) => (
          <Animation data={items} key={items.id} />
        ))}
      </div>
      <div className="btn_div">

        <button onClick={handleRedirect} className="btn-1">
          showAll
        </button>
      </div>
    </>
  );
}

export default AgriOutputSupply;

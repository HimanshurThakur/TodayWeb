"use client"
import React, { useState, useEffect } from 'react';
import "../components/Home/agriOutputSupply/AgriOutputSupply.css";
import Animation from "../components/Cards/AnimationCard/Animation";
import getUser from '../utils/api';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
const Page = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  console.log(userData);

  const fetchData = async () => {
    try {
      await getUser((flag, res) => setUserData(res));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Logic for displaying products based on pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = userData.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h1 style={{ fontSize: "30px", marginTop: "5rem", textAlign: "center" }}>
        Agri Output Supplies
      </h1>



      <div style={{ textAlign: "center", }}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="By Recent" control={<Radio />} label="By Recent" />
            <FormControlLabel value="By Product" control={<Radio />} label="By Product" />
            <FormControlLabel value="By User" control={<Radio />} label="By User" />

          </RadioGroup>
        </FormControl>
      </div>

      <div style={{ textAlign: "center", marginBottom: "3rem" }} >
        <Button variant="outlined" size="small">
          Filter
        </Button>
      </div>
      
      <div className="container">
        {currentProducts.map((item) => (
          <Animation data={item} key={item.id} />
        ))}
      </div>

      {/* Pagination */}
      <div style={{ textAlign: "center", }}>
        {Array.from({ length: Math.ceil(userData.length / productsPerPage) }).map((_, index) => (
          <button
            style={{ padding: "10px", border: '1px solid green', marginBottom: "10px", color: 'blue' }}
            key={index}
            className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Page;

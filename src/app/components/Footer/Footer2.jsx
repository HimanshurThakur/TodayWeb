import React from "react";
import "../../styles/Footer2.css";

function Searches() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="footer-links-div footer-padding bg-gray-100  w-full flex md:flex-row flex-col justify-around items-start mb-3 h-23" style={{padding:'2rem'}}>
        <div className="">
          <ul>
            <p className=" animatedP footer-p text-gray-800 font-bold text-2xl pb-4">
              Popular searches
            </p>

            <li className="text-gray-500 footer-li text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Avacado || Apple || Kiwi || Mango
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <p className="animatedP footer-p text-gray-800 font-bold text-2xl pb-4">
              Functions
            </p>
            <li className="text-gray-500 footer-li text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <span className="span-footer">Agri Output</span> : Add Supply
              (Sell) || Add Demand (Buy) || Search Supply (Sell) || Search
              Demand (Buy)
            </li>
            <li className="text-gray-500 footer-li text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <span className="span-footer">Agri input</span> : Add Supply
              (sell) || Add Demand (Buy) || Search Supply (Sell) || Search
              Demand (Buy)
            </li>
            <li className="text-gray-500 footer-li text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <span className="span-footer">Rural Product</span> : Add Supply
              (sell) || Add Demand (Buy) || Search Supply (Sell) || Search
              Demand (Buy)
            </li>
          </ul>
        </div>

        <div className="">
          <ul>
            <p className="animatedP footer-p text-gray-800 font-bold text-2xl pb-4">
              Category
            </p>
            <li className="text-gray-500 footer-li text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <span className="span-footer">Agri Output</span> : Vegetables ||
              Fruits || Organic || Natural
            </li>
            <li className="text-gray-500 footer-li text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <span className="span-footer">Agri Input</span> : Fertilizer ||
              Seed ||
            </li>
            <li className="text-gray-500 footer-li text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <span className="span-footer">Rural Product</span> : Cow Dung Cake
              || Leaf Pattal || Bamboo Product || Egg || Milk
            </li>
          </ul>
        </div>

        <div className="">
          <ul>
            <p className="animatedP footer-p text-gray-800 font-bold text-2xl pb-4">
              States & UT
            </p>
            <div className="d-flex">
              <li className="text-gray-500 footer-li text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <span className="span-footer">Madhya Pradesh</span> ||{" "}
                <span className="span-footer">Uttar Pradesh</span> ||{" "}
                <span className="span-footer">Rajasthan</span>
                <span className="span-footer">Gujarat</span> ||{" "}
                <span className="span-footer">Bihar</span> ||{" "}
                <span className="span-footer">Maharashtra</span> ||{" "}
                <span className="span-footer">Haryana</span> ||{" "}
                <span className="span-footer">Delhi</span>
              </li>

            </div>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50 p-2  ">
        <h1
          style={{ padding: "0.2rem" }}
          className="text-gray-800 font-semibold"
        >
          © {currentYear} GeeCom India Service Private Limited | All Rights Reserved
          <span className="hover:text-blue-600 font-semibold cursor-pointer">

          </span>
        </h1>
      </div>
    </div>
  );
}

export default Searches;

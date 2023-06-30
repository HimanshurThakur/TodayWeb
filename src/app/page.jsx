"use client";
import React from "react";
import Herosection from "./components/Home/herosection/Herosection";
import BannerTop from "./banners/BannerTop/BannerTop";
import Sponsored from "./components/Home/sponsored/Sponsored";
import AgriOutputSupply from "./components/Home/agriOutputSupply/AgriOutputSupply";
import HexagonShape from './banners/HexagonShapeBanner/HexagonShape';
import AgriOutputDemand from "./components/Home/agriOutputDemand/AgriOutputDemand";
import CircleBanner from "./banners/CircleShapeBanner/CircleBanner";
import AgriInputSupply from "./components/Home/agriInputSupply/AgriInputSupply";
import OvalBanner from "./banners/OvalShapeBanner/OvalBanner";
import AgriInputDemand from "./components/Home/agriInputDemand/AgriInputDemand";
import RectangleBanner from "./banners/RectangleShapeBanner/RectangleBanner";
import RuralProdSupplies from "./components/Home/ruralProdSupplies/RuralProdSupplies";
import SquareBanner from "./banners/SquareShapeBanner/SquareBanner";
import RuralProdDemand from "./components/Home/ruralProdDemand/RuralProdDemand";
import BigTwoBanner from "./banners/BigTwoBanner/BigTwoBanner";
import Offer from "./components/Home/offer/Offer";


const Page = () => {
  return (
    <>
      <Herosection />
      <BannerTop />
      <Sponsored />
      <AgriOutputSupply />
      <HexagonShape />
      <AgriOutputDemand />
      <CircleBanner />
      <AgriInputSupply />
      <RectangleBanner />
      <AgriInputDemand />
      <OvalBanner />
      <RuralProdSupplies />
      <SquareBanner />
      <RuralProdDemand />
      <BigTwoBanner />
      <Offer />

    </>
  );
};

export default Page;

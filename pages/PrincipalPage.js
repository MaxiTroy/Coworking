import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Cards from "../components/cards";
import { Routes, Route } from "react-dom";

const PrincipalPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
    </>
  );
};
//https://www.realestatemarket.com.mx/images/2021/09-septiembre/1609/Grande_coworking.jpg
export default PrincipalPage;

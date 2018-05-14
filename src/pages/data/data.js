import React from "react";
import NavBar from "components/navbar";
import Header from "components/header";
import MapUsa from "components/map-usa";
import Newsletter from "components/newsletter";
import Footer from "components/footer";

const Data = () => (
  <div>
    <NavBar />
    <Header
      title="Data"
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit accusamus ullam itaque sed eveniet earum aut nobis, tempora possimus?"
    />
    <MapUsa />
    <Newsletter />
    <Footer />
  </div>
);

export default Data;

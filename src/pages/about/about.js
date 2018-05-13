import React from "react";
import NavBar from "components/navbar";
import Header from "components/header";
import Statements from "components/statements";
import Newsletter from "components/newsletter";
import Footer from "components/footer";

import "./about.css";

const About = () => (
  <div>
    <NavBar />
    <Header
      title="About"
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit accusamus ullam itaque sed eveniet earum aut nobis, tempora possimus?"
    />
    <Statements />
    <Newsletter />
    <Footer />
  </div>
);

export default About;

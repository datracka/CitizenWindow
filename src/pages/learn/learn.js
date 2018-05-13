import React from "react";
import NavBar from "components/navBar";
import Header from "components/header";
import Articles from "components/articles";
import Videos from "components/videos";
import Podcasts from "components/podcasts";
import Footer from "components/footer";

const Learn = () => (
  <div>
    <NavBar />
    <Header
      title="Learn"
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit accusamus ullam itaque sed eveniet earum aut nobis, tempora possimus?"
    />
    <Articles />
    <Videos />
    <Podcasts />
    <Footer />
  </div>
);

export default Learn;

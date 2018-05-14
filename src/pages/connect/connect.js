import React from "react";
import NavBar from "components/navbar";
import Header from "components/header";
import ContactForm from "components/contact-form";
import Tweets from "components/tweets";
import Newsletter from "components/newsletter";
import Footer from "components/footer";

const Connect = () => (
  <div>
    <NavBar />
    <Header
      title="Connect"
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit accusamus ullam itaque sed eveniet earum aut nobis, tempora possimus?"
    />
    <ContactForm />
    <Tweets />
    <Newsletter />
    <Footer />
  </div>
);

export default Connect;

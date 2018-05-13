import React from "react";
import "./header.css";

const Header = ({ title, text }) => (
  <section className="w-full flex justify-center bg-primary-blue h-96 md:h-96">
    <div className="container flex justify-center flex-col">
      <h1 className="hero-title flex justify-center direction-col mb-4 text-center">
        {title}
      </h1>
      <p className="hero-text text-center">{text}</p>
    </div>
  </section>
);

export default Header;

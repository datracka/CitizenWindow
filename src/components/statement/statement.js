import React from "react";
import "./statement.css";

const Statement = ({ title, text, image, link, reversed }) => (
  <div className="flex flex-wrap direction-row justify-between w-full mt-6">
    <img src={image} alt="" />
    <div>
      <h1 clasName="heading1">{title}</h1>
      <p className="main-text text-primary-grey">{text}</p>
      <a href={link}>Read More</a>
    </div>
  </div>
);

export default Statement;

import React from "react";
import "./featured-product.css";
import haystackLogo from "../../../imgs/haystack_logo.png";

const FeaturedProduct = props => (
  <section className="flex justify-center align-center w-full h-auto bg-white mt-16">
    <div className="container flex flex-wrap direction-row justify-between w-full mt-6">
      <div className="h-48 w-full md:w-2/5 bg-secondary-red flex align-center justify-center">
        <img src={haystackLogo} alt="PA Donor Haystack" />
      </div>
      <div className="w-full md:w-2/5 mt-6 md:mt-0">
        <p className="mb-1">FEATURED PRODUCT</p>
        <p className="heading2 mb-1">Donor Haystack</p>
        <p className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio
          perferendis earum minus nisi suscipit voluptate voluptatum, tempore
          amet magni!
        </p>
        <p className="link">Read More</p>
      </div>
    </div>
  </section>
);

export default FeaturedProduct;

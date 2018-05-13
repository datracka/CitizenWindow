import React from "react";
import NavBar from "components/navBar";
import Header from "components/header";
import ProductBanner from "components/product-banner";
import ProductVideo from "components/product-video";
import Newsletter from "components/newsletter";
import Footer from "components/footer";

const Products = () => (
  <div>
    <NavBar />
    <Header
      title="Products"
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit accusamus ullam itaque sed eveniet earum aut nobis, tempora possimus?"
    />
    <ProductBanner />
    <ProductVideo />
    <Newsletter />
    <Footer />
  </div>
);

export default Products;

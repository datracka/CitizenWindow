import React from "react";
import NavBar from "components/navbar";
import Hero from "components/hero";
import FeaturedProduct from "components/featured-product";
import Newsletter from "components/newsletter";
import RecentPosts from "components/recent-posts";
import Footer from "components/footer";
import "./home.css";

const Home = () => (
  <div className="w-full h-auto flex flex-wrap">
    <Hero title="Seeing for Ourselves" text="lorem ipsum" />
    <NavBar />
    <FeaturedProduct topHeadline="" title="" text="" />
    <Newsletter />
    <RecentPosts />
    <Footer />
  </div>
);

export default Home;

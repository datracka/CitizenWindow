import React from "react";
import MediaItem from "components/media-item";
import "./articles.css";

const Articles = () => (
  <section className="flex justify-center align-center w-full h-auto bg-white mt-16">
    <div className="container flex justify-center align-center flex-col w-full">
      <h1 className="text-left heading2">Articles</h1>
      <div className="flex flex-wrap direction-row justify-between w-full mt-6">
        <div className="w-full md:w-3/10 flex align-center justify-center mb-8 md:mb-0">
          <MediaItem type="article" />
        </div>
        <div className="w-full md:w-3/10 flex align-center justify-center mb-8 md:mb-0">
          <MediaItem type="article" />
        </div>
        <div className="w-full md:w-3/10 flex align-center justify-center mb-8 md:mb-0">
          <MediaItem type="article" />
        </div>
      </div>
    </div>
  </section>
);

export default Articles;

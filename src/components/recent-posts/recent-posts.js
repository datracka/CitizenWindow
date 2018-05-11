import React from "react";
import "./recent-posts.css";

const RecentPosts = () => (
  <section className="flex justify-center align-center w-full h-auto bg-white mt-16">
    <div className="container flex justify-center align-center flex-col w-full">
      <p className="text-center">BLOG</p>
      <h1 className="text-center heading2">Recent Posts</h1>
      <div className="flex flex-wrap direction-row justify-between w-full mt-6">
        <div className="w-full md:w-3/10 flex align-center justify-center">
          {/* card */}
          <div className="overflow-hidden flex flex-col max-w-md">
            <div className="image bg-cover bg-center h-48 w-auto" />
            <h2 className="heading3 text-secondary-black">Lorem ipsum</h2>
            <p className="main-text text-primary-grey">
              23 March 2017 by <strong>Author</strong>
            </p>
            <p className="main-text text-primary-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident ipsum debitis cum maiores, laboriosam doloribus deleniti
              quas voluptates labore eum.
            </p>
            <p className="link">Read more</p>
          </div>
        </div>
        <div className="w-full md:w-3/10 flex align-center justify-center">
          post2
        </div>
        <div className="w-full md:w-3/10 flex align-center justify-center">
          post3
        </div>
      </div>
    </div>
  </section>
);

export default RecentPosts;

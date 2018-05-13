import React from "react";
import Post from "components/post";
import "./recent-posts.css";

const RecentPosts = () => (
  <section className="flex justify-center align-center w-full h-auto bg-white mt-16">
    <div className="container flex justify-center align-center flex-col w-full">
      <p className="text-center">BLOG</p>
      <h1 className="text-center heading2">Recent Posts</h1>
      <div className="flex flex-wrap direction-row justify-between w-full mt-6">
        <div className="w-full md:w-3/10 flex align-center justify-center mb-8 md:mb-0">
          <Post />
        </div>
        <div className="w-full md:w-3/10 flex align-center justify-center mb-8 md:mb-0">
          <Post />
        </div>
        <div className="w-full md:w-3/10 flex align-center justify-center mb-8 md:mb-0">
          <Post />
        </div>
      </div>
    </div>
  </section>
);

export default RecentPosts;

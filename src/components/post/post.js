import React from "react";
import "./post.css";

const Post = () => (
  <div className="overflow-hidden flex flex-col max-w-md">
    <div className="post-image bg-cover bg-center h-48 w-auto" />
    <h2 className="heading3 text-secondary-black mt-6">Lorem ipsum</h2>
    <p className="main-text text-primary-grey mt-2">
      23 March 2017 by <strong>Author</strong>
    </p>
    <p className="main-text text-primary-black mt-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ipsum
      debitis cum maiores, laboriosam doloribus deleniti quas voluptates labore
      eum.
    </p>
    <p className="link mt-2">Read more</p>
  </div>
);

export default Post;

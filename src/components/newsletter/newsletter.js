import React from "react";
import Input from "components/input";

import "./newsletter.css";

const Newsletter = () => (
  <section className="flex justify-center align-center w-full h-auto bg-primary-blue mt-16 md:mt-24">
    <div className="container mt-8 mb-8">
      <h2 className="heading2 text-white">Our newsletter</h2>
      <p className="main-text text-tertiary-blue">
        See for yourself. Sign up to receive news and updates from Citizen
        window.
      </p>
      <form
        action="#"
        className="w-full flex justify-center aligin-center justify-around flex-wrap"
      >
        <div className="flex items-center w-full md:w-1/5 mt-4">
          <div className="border-b border-b-2 border-white w-full mr-2 pb-1">
            <Input placeHolder="First Name" ariaLabel="First Name" />
          </div>
        </div>
        <div className="flex items-center w-full md:w-1/5 mt-4">
          <div className="border-b border-b-2 border-white w-full mr-2 pb-1">
            <Input placeHolder="Last Name" ariaLabel="Last Name" />
          </div>
        </div>
        <div className="flex items-center  w-full md:w-1/10 mt-4">
          <div className="border-b border-b-2 border-white mr-2 w-full pb-1">
            <Input placeHolder="Zip" ariaLabel="Zip" />
          </div>
        </div>
        <div className="flex items-center w-full md:w-3/10 mt-4">
          <div className="border-b border-b-2 border-white pb-1 w-full mr-2">
            <Input placeHolder="Email Address" ariaLabel="Email Address" />
          </div>
        </div>
        <button className=" btn-medium-blue main-text w-full md:w-1/5 mt-4">
          Button
        </button>
      </form>
    </div>
  </section>
);

export default Newsletter;

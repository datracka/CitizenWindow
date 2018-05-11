import React from "react";
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
        className="w-full flex justify-center aligin-center justify-around  flex-wrap"
      >
        <div class="flex items-center border-b border-b-2 border-white py-2 w-full md:w-1/5 mt-4">
          <input
            class=" appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 form-text"
            type="text"
            placeholder="First Name"
            aria-label="First Name"
          />
        </div>
        <div class="flex items-center border-b border-b-2 border-white py-2 w-full md:w-1/5 mt-4">
          <input
            class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 form-text"
            type="text"
            placeholder="Last Name"
            aria-label="Last Name"
          />
        </div>
        <div class="flex items-center border-b border-b-2 border-white py-2 w-full md:w-1/10 mt-4">
          <input
            class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 form-text"
            type="text"
            placeholder="Zip"
            aria-label="Zip"
          />
        </div>
        <div class="flex items-center border-b border-b-2 border-white py-2 w-full md:w-3/10 mt-4">
          <input
            class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 form-text"
            type="text"
            placeholder="Email Address"
            aria-label="Email Address"
          />
        </div>
        <button class=" btn-medium-blue main-text w-full md:w-1/5 mt-4">
          Button
        </button>
      </form>
    </div>
  </section>
);

export default Newsletter;

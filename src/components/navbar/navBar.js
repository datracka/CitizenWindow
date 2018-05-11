import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logoImage from "../../../imgs/logo.png";

const Navbar = props => {
  return (
    <header className="flex flex-col w-full absolute h-16 p-4 md:flex-row md:justify-between">
      <div className="text-white"> Citizen Window </div>
      <div className="icon-menu block absolute self-end text-white text-xl md:hidden" />
      <nav className="hidden md:flex">
        <Link className="no-underline text-white hover:underline mr-2" to="/">
          Home
        </Link>
        <Link
          className="no-underline text-white hover:underline mr-2"
          to="/about"
        >
          About
        </Link>
        <Link
          className="no-underline text-white hover:underline mr-2"
          to="/products"
        >
          Products
        </Link>
        <Link
          className="no-underline text-white hover:underline  mr-2"
          to="/learn"
        >
          Learn
        </Link>
        <Link
          className="no-underline text-white hover:underline mr-2"
          to="/data"
        >
          Data
        </Link>
        <Link className="no-underline text-white hover:underline" to="/connect">
          Connect
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

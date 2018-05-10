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
        <Link to="/">
          <span className="text-white mr-2">Home</span>
        </Link>
        <Link to="/about">
          <span className="text-white mr-2">About</span>
        </Link>
        <Link to="/products">
          <span className="text-white mr-2">Products</span>
        </Link>
        <Link to="/learn">
          <span className="text-white mr-2" to="/learn">
            Learn
          </span>
        </Link>
        <Link to="/data">
          <span className="text-white mr-2">Data</span>
        </Link>
        <Link to="/connect">
          <span className="text-white">Connect</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

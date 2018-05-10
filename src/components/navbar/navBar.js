import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logoImage from "../../../imgs/logo.png";

const Navbar = props => {
  return (
    <header className="flex flex-col w-full absolute h-16 p-4">
      <img src={logoImage} width="95" height="21" />
      <div className="icon-menu block absolute self-end text-white text-xl md:hidden" />
      <nav className="navBar w-full hidden md:flex md:justify-center md:align-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/data">Data</Link>
        <Link to="/connect">Connect</Link>
      </nav>
    </header>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/friends">Friends</Link>
      </nav>
      <h3>Common Header</h3>
    </div>
  );
};

export default Header;

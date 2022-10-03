import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <NavLink className={({isActive})=>isActive?"active":undefined} to="/home"  >Home</NavLink>
        <NavLink className={({isActive})=>isActive?"active":undefined}  to="/About">About</NavLink>
        <NavLink className={({isActive})=>isActive?"active":undefined} to="/product">Product</NavLink>
        <NavLink className={({isActive})=>isActive?"active":undefined} to="/friends">Friends</NavLink>
        <NavLink className={({isActive})=>isActive?"active":undefined} to ="/posts">Posts</NavLink>
      </nav>
      <h3>Common Header</h3>
    </div>
  );
};

export default Header;

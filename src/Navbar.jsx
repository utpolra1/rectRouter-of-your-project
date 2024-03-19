import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav-Container">
        <Link to="/">Home</Link>
        <Link to="/contacts">contract</Link>
        <Link to="/footer">Footer</Link>
        <Link to="/about">about</Link>
        <Link to="/user">User</Link>
      </div>
    </div>
  );
};

export default Navbar;

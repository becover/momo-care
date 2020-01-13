import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <div class="header clfx">
      <div class="logo">
        <Link to="/">MOMO CARE</Link>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;

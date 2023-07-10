import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return <nav>
  <Link to={"/"}><img src="../src/assets/pokeball-logo.png" alt="main-logo"/></Link>
  <div className="navigation-links">
    <Link to={"/search"}>Search</Link>
    <Link to={"/"}>Home</Link>
  </div>
</nav>
};

export default NavBar;

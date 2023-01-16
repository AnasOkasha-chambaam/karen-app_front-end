import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

function Logo() {
  return (
    <Link to="/">
      <div className="logo-container">
        <img src={logo} alt="Logo" width={135} />
      </div>
    </Link>
  );
}

export default Logo;

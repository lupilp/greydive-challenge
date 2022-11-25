import React from "react";
import simulacr from "../images/simulacr.png";
import style from "../style/Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={style.contNavbar}>
      <Link to="/">
        <img
          src={simulacr}
          alt="simulacr-logo"
          className={style.simulacrLogo}
        />
      </Link>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import style from "../style/Card.module.css";

export default function Card({ cliente, escenario, idVideo }) {
  return (
    <div className={style.card}>
      {cliente}
      <div className={style.escenario}>{escenario}</div>
      <Link to={`/test/${idVideo}`}>
        <div className={style.buttonIr}>Ir al test</div>
      </Link>
    </div>
  );
}

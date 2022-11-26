import React from "react";
import { Link } from "react-router-dom";
import style from "../style/Card.module.css";
import img from "../images/web.png";
import arrow from "../images/arrow.png";

export default function Card({ cliente, escenario, idVideo }) {
  return (
    <div className={style.contTodo}>
      <div className={style.tag}>
        <div className={style.cliente}>
          {cliente[0].toUpperCase() + cliente.slice(1)}
        </div>
        <div>Test de usabilidad</div>
      </div>
      <div className={style.card}>
        <img src={img} alt="img" className={style.imagen} />
        <div className={style.escenario}>{escenario}</div>
        <Link to={`/test/${idVideo}`}>
          <div className={style.buttonIr}>
            Ir al test
            <img src={arrow} alt="arrow" className={style.arrow} />
          </div>
        </Link>
      </div>
    </div>
  );
}

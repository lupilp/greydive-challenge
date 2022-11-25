import React from "react";
import db from "../db/db.json";
import style from "../style/Home.module.css";
import Card from "./Card";

export default function Home() {
  return (
    <div className={style.contenedor}>
      <div className={style.contCards}>
        {db.map((card) => {
          return (
            <Card
              cliente={card.cliente}
              escenario={card.escenario}
              idVideo={card.idVideo}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

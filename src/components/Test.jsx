import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../db/db.json";
import style from "../style/Test.module.css";
import time from "../images/time.png";

export default function Test() {
  const { idVideo } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const info = db.find((e) => e.idVideo === idVideo);
    setDetail(info);
  }, [idVideo]);

  if (!Object.entries(detail).length) {
    return <div>Loading...</div>;
  }

  let num = 1;

  return (
    <div className={style.contDetail}>
      <div className={style.cliente}>
        {detail.cliente}
        <div className={style.test}>Test de usabilidad en el sitio web</div>
      </div>

      <div className={style.contVideo}>
        <video controls className={style.video}>
          <source src={detail.linkVideo} type="video/mp4" />
        </video>
      </div>

      <div className={style.titleTranscripcion}>Transcripción</div>
      <div className={style.transcripcion}>
        {detail.transcripcion.replaceAll("<br>", "")}
      </div>

      <div className={style.contTareas}>
        {detail.preguntas.map((tarea) => {
          return (
            <div className={style.tareas}>
              <hr className={style.hr} />
              <div className={style.tareaTitulo}>Tarea {num++}</div>
              <div className={style.tareaTexto}>
                {tarea.texto.replaceAll("\\n", " ")}
              </div>
              <div className={style.tiempo}>
                <img src={time} alt="time" className={style.tiempoLogo} />
                Duración de la tarea: {tarea.tiempo}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

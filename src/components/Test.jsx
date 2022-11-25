import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../db/db.json";
import style from "../style/Test.module.css";

export default function Test() {
  const { idVideo } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const info = db.find((e) => e.idVideo === idVideo);
    setDetail(info);
  }, []);

  return <div></div>;
}

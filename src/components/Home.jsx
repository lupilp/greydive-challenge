import React from "react";
import db from "../db/db.json";
import style from "../style/Home.module.css";

export default function Home() {
  return <div>{db[0].cliente}</div>;
}

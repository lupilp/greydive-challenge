import React from "react";
import db from "../db/db.json";

export default function Home() {
  return <div>{db[0].cliente}</div>;
}

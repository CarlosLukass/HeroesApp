import React from "react";
import { HeroesList } from "../components/Heroes/HeroesList";

export const MarvelPage = () => {
  return (
    <div>
      <h2>Marvel Page</h2>
      <hr />
      <HeroesList publisher="Marvel Comics" />
    </div>
  );
};

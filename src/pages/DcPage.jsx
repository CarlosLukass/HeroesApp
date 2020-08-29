import React from "react";
import { HeroesList } from "../components/Heroes/HeroesList";

export const DcPage = () => {
  return (
    <div>
      <h2>DC Page</h2>
      <hr />
      <HeroesList publisher="DC Comics" />
    </div>
  );
};

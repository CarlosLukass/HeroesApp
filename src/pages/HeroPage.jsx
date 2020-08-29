import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";

// Selectors
import { getHeroById } from "../selectors/getHeroById";

export const HeroPage = ({ history }) => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const {
    id,
    superhero: name,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className="row">
      <div className="column-md-6">
        <img src={`/assets/heroes/${id}.jpg`} alt={name} />
      </div>

      <div className="column-md-6 ml-5">
        <h1> {name} </h1>
        <p> Editorial: {publisher} </p>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">Real Name: {alter_ego} </li>
          <li className="list-group-item">
            First Appearance: {first_appearance}{" "}
          </li>
          <li className="list-group-item">Character: {characters} </li>
        </ul>

        <button
          className="btn btn-primary mt-5"
          onClick={() => history.goBack()}
        >
          {" "}
          volver{" "}
        </button>
      </div>
    </div>
  );
};

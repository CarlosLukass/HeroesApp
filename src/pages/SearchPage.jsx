import React, { useMemo } from "react";
import queryString from "query-string";
import { useForm } from "../hooks/useForm";
import { HeroCard } from "../components/Heroes/HeroCard";
import { SearchHeroForm } from "../components/search/SearchHeroForm";
import { getHeroesByName } from "../selectors/getHeroesbyName";

export const SearchPage = ({ location, history }) => {
  const { q = "" } = queryString.parse(location.search);

  const [{ hero }, handleInputChange] = useForm({ hero: q });

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />

          <SearchHeroForm
            hero={hero}
            handleInputChange={handleInputChange}
            history={history}
          />
        </div>

        <div className="col-7">
          {heroesFiltered.map((Hero) => (
            <HeroCard key={Hero.id} {...Hero} />
          ))}
        </div>
      </div>
    </>
  );
};

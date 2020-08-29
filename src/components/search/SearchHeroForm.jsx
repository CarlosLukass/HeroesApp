import React from "react";

export const SearchHeroForm = ({ handleInputChange, hero, history }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar si se ha escrito algo en el input
    if (hero.length >= 1) {
      history.push(`?q=${hero}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Batman..."
          name="hero"
          value={hero}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-primary btn-block mt-2"
          onSubmit={handleSubmit}
        >
          Buscar
        </button>
      </form>
    </>
  );
};

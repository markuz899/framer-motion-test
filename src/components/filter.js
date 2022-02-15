import React, { useState, useEffect } from "react";

const Filter = ({
  popular,
  setFiltered,
  activeGenre,
  setActiveGenre,
  list,
  setList,
}) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="filter">
      <div className="filter-container">
        <button
          className={list === "popular" ? "active" : ""}
          onClick={() => setList("popular")}
        >
          Popular
        </button>
        <button
          className={list === "upcoming" ? "active" : ""}
          onClick={() => setList("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={list === "top_rated" ? "active" : ""}
          onClick={() => setList("top_rated")}
        >
          Top rated
        </button>
      </div>
      <div className="filter-container">
        <button
          className={activeGenre === 0 ? "active" : ""}
          onClick={() => setActiveGenre(0)}
        >
          All
        </button>
        <button
          className={activeGenre === 35 ? "active" : ""}
          onClick={() => setActiveGenre(35)}
        >
          Comedy
        </button>
        <button
          className={activeGenre === 28 ? "active" : ""}
          onClick={() => setActiveGenre(28)}
        >
          Action
        </button>
        <button
          className={activeGenre === 18 ? "active" : ""}
          onClick={() => setActiveGenre(18)}
        >
          Romantic
        </button>
      </div>
    </div>
  );
};

export default Filter;

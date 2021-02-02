import React from 'react';

const PlanetThumb = ({ className, name, population, climate, gravity }) => {
  return (
    <article className={className}>
      <h3>{name}</h3>
      <div className="character-detail">
        <p>Population: {population}</p>
        <p>Climat: {climate}</p>
        <p>Gravity: {gravity} </p>
      </div>
    </article>
  );
};
export default PlanetThumb;

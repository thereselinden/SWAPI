import React from 'react';

const CharacterThumb = ({ className, name, gender, birth, height }) => {
  return (
    <article className={className}>
      <h2>{name}</h2>
      <div className="character-detail">
        <p>Gender: {gender}</p>
        <p>Birth: {birth}</p>
        <p>Height: {height} </p>
      </div>
    </article>
  );
};
export default CharacterThumb;

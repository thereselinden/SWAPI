import React from 'react';

const CharacterThumb = ({ className, id, name, gender, birth, height }) => {
  return (
    <article className={className}>
      <h3>{name}</h3>
      <div className="character-detail">
        <p>Gender: {gender}</p>
        <p>Birth: {birth}</p>
        <p>Height: {height} </p>
      </div>
    </article>
  );
};
export default CharacterThumb;

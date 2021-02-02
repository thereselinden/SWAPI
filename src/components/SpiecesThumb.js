import React from 'react';

const SpiecesThumb = ({
  className,
  name,
  averageHeight,
  averageLifespan,
  language,
}) => {
  return (
    <article className={className}>
      <h3>{name}</h3>
      <div className="character-detail">
        <p>Average height: {averageHeight}</p>
        <p>Lifespan: {averageLifespan}</p>
        <p>Language: {language} </p>
      </div>
    </article>
  );
};
export default SpiecesThumb;

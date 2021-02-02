import React from 'react';
import { Link } from 'react-router-dom';

const FilmThumb = ({ id, className, title }) => {
  return (
    <Link to={`films/${id}`}>
      <article className={className}>
        <h3>{title}</h3>
        <div className="character-detail"></div>
      </article>
    </Link>
  );
};
export default FilmThumb;

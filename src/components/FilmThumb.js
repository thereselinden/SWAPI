import React from 'react';
import { Link } from 'react-router-dom';

const FilmThumb = ({ id, className, title }) => {
  return (
    <Link to={`films/${id}`}>
      <article className={className}>
        <h2>{title}</h2>
      </article>
    </Link>
  );
};
export default FilmThumb;

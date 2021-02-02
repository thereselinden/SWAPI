import React, { useState, useEffect } from 'react';

import FilmThumb from '../components/FilmThumb';
import Error from '../components/Error';
import Loader from '../components/Loader';
import BackButton from '../components/BackButton';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = 'https://swapi.dev/api/films/?page=1';

  useEffect(() => {
    fetchFilms(apiUrl);
    // eslint-disable-next-line
  }, [apiUrl]);

  const fetchFilms = () => {
    fetch(apiUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('404');
        }
      })
      .then(json => {
        setFilms(json.results);
        setLoading(false);
      })
      .catch(() => {
        window.location.assign('/error');
      });
  };

  return (
    <>
      <BackButton />
      <h1>Films</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-container">
          {films.map((item, index) => (
            <FilmThumb
              key={item.title}
              id={index + 1}
              title={item.title}
              className="card"
            />
          ))}
        </div>
      )}
    </>
  );
};
export default Films;

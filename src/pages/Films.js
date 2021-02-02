import React, { useState, useEffect } from 'react';

import FilmThumb from '../components/FilmThumb';
import Error from '../components/Error';
import Loader from '../components/Loader';
import BackButton from '../components/BackButton';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiUrl, setApiUrl] = useState('https://swapi.dev/api/films/?page=1');

  console.log(films);

  useEffect(() => {
    fetchFilms(apiUrl);
    // eslint-disable-next-line
  }, [apiUrl]);

  const fetchFilms = () => {
    fetch(apiUrl)
      .then(res => {
        console.log(res.ok);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('404');
        }
      })
      .then(json => {
        console.log(json.results);
        setFilms(films.concat(json.results));
        setLoading(false);
        const nextPage = json.next;
        if (nextPage) {
          setApiUrl(nextPage);
        }
      })
      .catch(() => {
        window.location.assign('/error');
      });
  };

  return (
    <>
      <BackButton />
      <h2>Films</h2>
      {loading && <Loader />}
      {!loading && (
        <div className="character-container">
          {films.map((item, index) => (
            <FilmThumb
              key={item.title}
              id={index + 1}
              title={item.title}
              className="character-card"
            />
          ))}
        </div>
      )}
    </>
  );
};
export default Films;

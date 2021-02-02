import React, { useState, useEffect } from 'react';

import PlanetThumb from '../components/PlanetThumb';
import Error from '../components/Error';
import Loader from '../components/Loader';
import BackButton from '../components/BackButton';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiUrl, setApiUrl] = useState('https://swapi.dev/api/planets/?page=1');

  useEffect(() => {
    fetchPlanets(apiUrl);
    // eslint-disable-next-line
  }, [apiUrl]);

  const fetchPlanets = () => {
    fetch(apiUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('404');
        }
      })
      .then(json => {
        setPlanets(planets.concat(json.results));
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
      <h2>Planets</h2>
      {loading && <Loader />}
      {!loading && (
        <div className="character-container">
          {planets.map((item, index) => (
            <PlanetThumb
              key={item.name}
              id={index + 1}
              name={item.name}
              className="character-card"
              population={item.population}
              climate={item.climate}
              gravity={item.gravity}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default Planets;

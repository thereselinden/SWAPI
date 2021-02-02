import React, { useState, useEffect } from 'react';

import SpiecesThumb from '../components/SpiecesThumb';
import Error from '../components/Error';
import Loader from '../components/Loader';
import BackButton from '../components/BackButton';

const Spieces = () => {
  const [spieces, setSpieces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiUrl, setApiUrl] = useState('https://swapi.dev/api/species/?page=1');

  console.log(spieces);

  useEffect(() => {
    fetchSpieces(apiUrl);
    // eslint-disable-next-line
  }, [apiUrl]);

  const fetchSpieces = () => {
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
        setSpieces(spieces.concat(json.results));
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
      <h2>Spieces</h2>
      {loading && <Loader />}
      {!loading && (
        <div className="character-container">
          {spieces.map((item, index) => (
            <SpiecesThumb
              key={item.name}
              id={index + 1}
              name={item.name}
              className="character-card"
              averageHeight={item.average_height}
              averageLifespan={item.average_lifespan}
              language={item.language}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default Spieces;

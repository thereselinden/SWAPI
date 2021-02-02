import React, { useState, useEffect } from 'react';

import CharactherThumb from '../components/CharacterThumb';
import Error from '../components/Error';
import Loader from '../components/Loader';
import BackButton from '../components/BackButton';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiUrl, setApiUrl] = useState('https://swapi.dev/api/people/?page=1');

  useEffect(() => {
    fetchCharacters(apiUrl);
    // eslint-disable-next-line
  }, [apiUrl]);

  const fetchCharacters = () => {
    fetch(apiUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('404');
        }
      })
      .then(json => {
        setCharacters(characters.concat(json.results));
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
      {/* <section className="content-wrapper"> */}
      <BackButton />

      <h2>Characters</h2>
      {loading && <Loader />}
      {!loading && (
        <div className="character-container">
          {characters.map((item, index) => (
            <CharactherThumb
              key={item.name}
              id={index + 1}
              name={item.name}
              className="character-card"
              birth={item.birth_year}
              gender={item.gender}
              height={item.height}
            />
          ))}
        </div>
      )}
      {/* </section> */}
    </>
  );
};
export default Characters;

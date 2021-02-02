import React, { useState, useEffect } from 'react';

import CharactherThumb from '../components/CharacterThumb';
import Error from '../components/Error';
import Loader from '../components/Loader';
import BackButton from '../components/BackButton';
import SearchBar from '../components/SearchBar';
import ScrollToTop from '../components/ScrollToTop';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiUrl, setApiUrl] = useState('https://swapi.dev/api/people/?page=1');
  const [input, setInput] = useState('');

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
        const nextPage = json.next;
        if (nextPage) {
          setApiUrl(nextPage);
        }
        setLoading(false);
      })
      .catch(() => {
        window.location.assign('/error');
      });
  };

  return (
    <>
      <BackButton />
      <h1>Characters</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SearchBar
            value={input}
            onChange={event => setInput(event.target.value)}
          />
          <ScrollToTop showBelow={400} />
          <div className="card-container">
            {characters
              .filter(item => {
                if (input === '') {
                  return item;
                }
                return item.name.toLowerCase().includes(input.toLowerCase());
              })
              .map((item, index) => (
                <CharactherThumb
                  key={item.name}
                  id={index + 1}
                  name={item.name}
                  className="card"
                  birth={item.birth_year}
                  gender={item.gender}
                  height={item.height}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
};
export default Characters;

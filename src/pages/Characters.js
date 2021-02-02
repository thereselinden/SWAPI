import React, { useState, useEffect } from 'react';

import CharactherThumb from '../components/CharacterThumb';
import Error from '../components/Error';
import Loader from '../components/Loader';
import BackButton from '../components/BackButton';
import SearchBar from '../components/SearchBar';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiUrl, setApiUrl] = useState('https://swapi.dev/api/people/?page=1');
  const [input, setInput] = useState('');
  console.log('input', input);

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
        console.log({ json });
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

  // const searchInput = input => {
  //   // console.log('input', input);
  //   const filtered = characters.filter(item => {
  //     if (input === '') {
  //       return item;
  //     }
  //     //console.log('item', item);
  //     return item.name.toLowerCase().includes(input.toLowerCase());
  //   });
  //   setInput(input);
  //   setCharacters(filtered);
  // };

  return (
    <>
      <BackButton />
      <h2>Characters</h2>
      {loading && <Loader />}
      {!loading && (
        <>
          <SearchBar
            value={input}
            onChange={event => setInput(event.target.value)}
          />
          <div className="character-container">
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
                  className="character-card"
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

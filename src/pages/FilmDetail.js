import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';
import BackButton from '../components/BackButton';

const FilmDetail = () => {
  const [filmDetail, setFilmDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const singleFilmUrl = `https://swapi.dev/api/films/${id}`;

  useEffect(() => {
    fetch(singleFilmUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('404');
        }
      })
      .then(json => {
        console.log(json);
        setFilmDetail(json);
        setLoading(false);
      })
      .catch(() => {
        window.location.assign('/error');
      });
  }, [id, singleFilmUrl]);

  return (
    <section>
      <BackButton />

      <h2>{filmDetail.title}</h2>
      {loading && <Loader />}
      {!loading && (
        <div>
          <p>Gender: {filmDetail.opening_crawl} </p>
        </div>
      )}
    </section>
  );
};
export default FilmDetail;

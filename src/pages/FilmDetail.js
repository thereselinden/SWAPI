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
        setFilmDetail(json);
        setLoading(false);
      })
      .catch(() => {
        window.location.assign('/error');
      });
  }, [id, singleFilmUrl]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <BackButton />
          <section className="film-content">
            <div className="film-card">
              <h2>{filmDetail.title}</h2>
              <p>Released: {filmDetail.release_date}</p>
              <p>Producer: {filmDetail.producer}</p>
              <p>
                <span>{filmDetail.opening_crawl} </span>
              </p>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default FilmDetail;

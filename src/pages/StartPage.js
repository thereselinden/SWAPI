import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

const StartPage = () => {
  return (
    <section className="content-wrapper">
      <img src="../starwars-logo.png" alt="Star wars logo" className="logo" />
      <div className="button-wrapper">
        <Link to="/character">
          <Button type="button" text="Characters" className="category-button" />
        </Link>

        <Link to="/films">
          <Button type="button" text="Films" className="category-button" />
        </Link>
      </div>
    </section>
  );
};
export default StartPage;

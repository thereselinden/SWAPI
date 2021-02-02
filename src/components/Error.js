import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from './Button';

const Error = () => {
  let history = useHistory();

  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <section className="error">
      <h2 className="error-heading">Something went wrong, try again later.</h2>
      <Button
        type="button"
        text="Go back home"
        onClick={handleGoBack}
        className="category-button"
      />
    </section>
  );
};
export default Error;

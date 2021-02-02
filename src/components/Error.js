import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from './Button';

const Error = () => {
  let history = useHistory();

  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <>
      <p>Something went wrong, try again later.</p>
      <Button type="button" text="Go back home" onClick={handleGoBack} />
    </>
  );
};
export default Error;

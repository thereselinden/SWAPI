import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  return (
    <img
      src="../left-arrow.svg"
      alt="go back arrow"
      onClick={() => history.goBack()}
      className="back-arrow"
    />
  );
};
export default BackButton;

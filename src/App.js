import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import StartPage from './pages/StartPage';
import Characters from './pages/Characters';
import Films from './pages/Films';
import FilmDetail from './pages/FilmDetail';
import Error from './components/Error';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route exact path="/character">
          <Characters />
        </Route>
        <Route exact path="/films">
          <Films />
        </Route>
        <Route exact path="/films/:id">
          <FilmDetail />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  );
};

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/main/Main';

const App = () => (
  <Switch>
    <Route path={['/', '/:id']} component={Main} />
  </Switch>
);

export default App;

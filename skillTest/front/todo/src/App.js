import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/main/Main'
import Detail from './components/detail/Detail'


const App = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/:id" component={Detail} />

  </Switch>
);

export default App;
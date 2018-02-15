import React from 'react';
import { Switch, Route } from 'react-router-dom'
import CounterPage from './CounterPage'
import AboutPage from './AboutePage'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={CounterPage}/>
      <Route path='/about' component={AboutPage}/>
    </Switch>
  </main>
);

export default Routes;

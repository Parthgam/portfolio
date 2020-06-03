import React from 'react';
import './App.css';
import Home from './components/Home';
import Work from './components/Work';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/work' component={Work} />
      <Route exact path='/resume' component={Home} />
      <Route exact path='/contact' component={Home} />
    </Switch>
  );
}

export default App;

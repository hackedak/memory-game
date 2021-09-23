import './App.css';
import React from 'react';
import StartPage from './StartPage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Arena from '../arena/Arena';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <StartPage />
          </Route>
          <Route exact path='/winter-is-coming'>
            <Arena />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

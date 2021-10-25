import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './pages/client/MainPage';
import ErrorPage from './pages/client/ErrorPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;

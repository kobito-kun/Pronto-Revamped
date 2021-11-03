import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './pages/client/MainPage';
import ErrorPage from './pages/client/ErrorPage';
import ProductsPage from './pages/client/ProductsPage';
import LoginPage from './pages/client/LoginPage';
import Logout from './pages/client/Logout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/login" component={LoginPage} />

        <Route exact path="/logout" component={Logout} />

        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;

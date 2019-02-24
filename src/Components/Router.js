import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';
import Header from 'Components/Header';

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route
          path="https://philastrio.github.io/hkflix/"
          exact
          component={Home}
        />
        <Route
          path="https://philastrio.github.io/hkflix/tv"
          exact
          component={TV}
        />
        <Route
          path="https://philastrio.github.io/hkflix/search"
          exact
          component={Search}
        />
        <Route
          path="https://philastrio.github.io/hkflix/movie/:id"
          component={Detail}
        />
        <Route
          path="https://philastrio.github.io/hkflix/show/:id"
          component={Detail}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);

import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Main from '../pages/Main';
import Login from '../pages/Login';
import CategoryList from '../pages/Category/List';
import CategoryCreate from '../pages/Category/Create';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />

      <Route path="/" exact component={Main} isPrivate />
      <Route path="/categories" exact component={CategoryList} isPrivate />
      <Route
        path="/categories/create"
        exact
        component={CategoryCreate}
        isPrivate
      />
    </Switch>
  );
}

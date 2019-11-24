import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Main from '../pages/Main';
import Login from '../pages/Login';
import CategoryList from '../pages/Category/List';
import CategoryCreate from '../pages/Category/Create';
import CategoryEdit from '../pages/Category/Edit';

import ProviderList from '../pages/Providers/List';
import ProviderCreate from '../pages/Providers/Create';

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
      <Route path="/categories/edit" exact component={CategoryEdit} isPrivate />

      <Route path="/providers" exact component={ProviderList} isPrivate />
      <Route
        path="/providers/create"
        exact
        component={ProviderCreate}
        isPrivate
      />
    </Switch>
  );
}

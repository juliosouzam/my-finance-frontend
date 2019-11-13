import React from 'react';
import { Switch } from 'react-router-dom';
import PropType from 'prop-types';

import Route from './Route';

import Main from '../pages/Main';
import Login from '../pages/Login';
import Category from '../pages/Category';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} isPrivate />
      <Route path="/categories" exact component={Category} isPrivate />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

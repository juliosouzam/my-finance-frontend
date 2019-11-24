import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { PersistGate } from 'redux-persist/integration/react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import history from './services/history';
import './config/ReactotronConfig';
import Routes from './routes';
import { store, persistor } from './store';
import GlobalStyles from './styles/global';

const client = new ApolloClient({
  uri: process.env.REACT_APP_HASURA_GRAPHQL_URL,
  headers: {
    Accept: 'application/json',
    'x-hasura-admin-secret': process.env.REACT_APP_HASURA_GRAPHQL_SECRET,
  },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApolloProvider client={client}>
          <Router history={history}>
            <ToastContainer autoClose={4000} />
            <GlobalStyles />
            <Routes client={client} />
          </Router>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}

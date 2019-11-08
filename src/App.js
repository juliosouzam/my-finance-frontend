import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloConsumer } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './services/history';
import './config/ReactotronConfig';
import Routes from './routes';
import { store, persistor } from './store';
import GlobalStyles from './styles/global';

const client = new ApolloClient({
  uri: '',
  headers: {
    Accept: 'application/json',
    'x-hasura-admin-secret': '',
  },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApolloProvider client={client}>
          <ApolloConsumer>
            {client => (
              <Router history={history}>
                <GlobalStyles />
                <Routes client={client} />
              </Router>
            )}
          </ApolloConsumer>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}

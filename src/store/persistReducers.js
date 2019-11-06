import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  return persistReducer(
    {
      key: 'my_finance',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );
};

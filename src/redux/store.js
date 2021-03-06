import contactReducer from './reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    // auth: authReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

// export default store;
// const persistor = persistStore(store);
// export default { persistor, store };
export const persistor = persistStore(store);

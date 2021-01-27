// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

///=====ШАГ №1 - ванильный Redux
// const reducer = combineReducers({
//   contacts: contactReducer,
// });
// const store = createStore(reducer, composeWithDevTools());
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const store = configureStore({
  reducer: { contacts: contactReducer },
  middleware,
});

export default store;

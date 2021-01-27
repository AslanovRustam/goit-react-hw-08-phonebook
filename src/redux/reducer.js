import { useRef } from 'react';
import { combineReducers } from 'redux';
import types from './types';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  changeFilter,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './actions';

const contactsFirstRender = [
  { id: 'id-1', name: 'Barak Obama', number: '459-12-56' },
  { id: 'id-2', name: 'Donald Trump', number: '443-89-12' },
  { id: 'id-3', name: 'George Washington', number: '645-17-79' },
  { id: 'id-4', name: 'Thomas Jefferson', number: '227-91-26' },
];
const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, action) => [...state, action.payload],

  [deleteContactSuccess]: (state, { payload }) =>
    // ['contact/delete']: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;
    default:
      return state;
  }
};

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({ contacts, filter, loading });

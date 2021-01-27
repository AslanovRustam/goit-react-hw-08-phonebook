import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = (name, number) => dispatch => {
  const contact = { name, number };
  dispatch(addContactRequest());
  axios
    .post(`/contacts`, contact)
    // .post('/contacts/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());
  axios
    .get(`/contacts`)
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

export default {
  addContact,
  deleteContact,
  fetchContacts,
};

import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './form.module.css';
import shortid from 'shortid';
import { connect } from 'react-redux';
import contactOperations from '../redux/contacts-operations';
import { store } from '../redux/store';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    // onSubmit(name, number);
    const getState = store.getState();
    // console.log(getState.contacts.contacts);
    const getContacts = getState.contacts.contacts.map(contact =>
      contact.name.toLocaleLowerCase(),
    );
    const isGetContactAlready = getContacts.includes(name.toLocaleLowerCase());
    if (isGetContactAlready) {
      alert(`${name} is already in contacts!`);
      reset();
      return;
    } else {
      reset();
      return onSubmit(name, number);
    }
  };

  const contactInputId = shortid.generate();

  return (
    <>
      <form className={s.form} onSubmit={handleSubmitForm}>
        <label>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
            id={contactInputId}
          ></input>
        </label>
        <label>
          Number
          <input
            className={s.input}
            type="number"
            name="number"
            value={number}
            onChange={e => setNumber(e.currentTarget.value)}
          ></input>
        </label>
        <button className={s.buttonAdd} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactOperations.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);

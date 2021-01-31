import { useState } from 'react';
import s from '../Registration/registration.module.css';
import shortid from 'shortid';
import { connect } from 'react-redux';
import contactOperations from '../../redux/contacts-operations';
import store from '../../redux/store';

function Login({ onSubmit }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    // onSubmit(name, number);
    const getState = store.getState();
    // const getContacts = getState.contacts.contacts.map(contact =>
    //   contact.name.toLocaleLowerCase(),
    // );
    // const isGetContactAlready = getContacts.includes(name.toLocaleLowerCase());
    // if (isGetContactAlready) {
    //   alert(`${name} is already in contacts!`);
    //   reset();
    //   return;
    // } else {
    reset();
    return onSubmit(email, password);
    // }
  };

  const contactInputId = shortid.generate();

  return (
    <div className={s.registrationContainer}>
      <form className={s.form} onSubmit={handleSubmitForm}>
        <label>
          E-mail
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          ></input>
        </label>
        <label>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          ></input>
        </label>
        <button className={s.buttonAdd} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password) =>
    dispatch(contactOperations.addContact(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);

import { useState } from 'react';
import s from './registration.module.css';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import contactOperations from '../../redux/contacts-operations';
import store from '../../redux/store';

export default function Registration({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const handleSubmitForm = event => {
    dispatch(contactOperations.register({ name, email, password }));
    event.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
  };

  const contactInputId = shortid.generate();

  return (
    <div className={s.registrationContainer}>
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
          Register
        </button>
      </form>
    </div>
  );
}

import { useState } from 'react';
import s from '../Registration/registration.module.css';
import shortid from 'shortid';
import { connect } from 'react-redux';
import contactOperations from '../../redux/contacts-operations';
import { useDispatch } from 'react-redux';

function Login({ onSubmit }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const handleSubmitForm = event => {
    dispatch(contactOperations.logIn({ email, password }));
    event.preventDefault();

    setEmail('');
    setPassword('');
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
    dispatch(contactOperations.logIn(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);

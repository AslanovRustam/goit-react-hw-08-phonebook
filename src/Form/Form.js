import { useState } from 'react';
import s from './form.module.css';
import shortid from 'shortid';
import { connect } from 'react-redux';
import contactOperations from '../redux/contacts-operations';
import { store } from '../redux/store';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const classes = useStyles();

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
    <div>
      <form className={classes.root} onSubmit={handleSubmitForm}>
        <TextField
          id="standard-basic"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          id={contactInputId}
          label="Name"
        />
        <TextField
          id="standard-basic"
          type="number"
          name="number"
          value={number}
          onChange={e => setNumber(e.currentTarget.value)}
          label="Number"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Add contact
        </Button>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactOperations.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);

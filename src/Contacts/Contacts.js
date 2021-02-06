import s from './contacs.module.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import deleteContact from '../redux/contacts-operations';
import contactsSelectors from '../redux/contacts-selectors';
import contactsOperations from '../redux/contacts-operations';
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const Contactlist = ({ contacts }) => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, []);
  // console.log(contacts);

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  return (
    <div className={s.contactsList}>
      <h2 className={s.contactsTitle}>Contacts</h2>
      <span>Total number of contacts - {contacts.contacts.length}</span>
      <ul className={s.list}>
        {/* {contacts.map(({ id, name, number }) => ( */}
        {contacts.contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            {name} {number}
            {/* <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={s.button}
            >
              <span>Delete</span>
            </button> */}
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContactsAfterFilter(state),
  };
};

const mapDispatchToProps = dispatch => ({
  // onDeleteContact: id => dispatch(deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contactlist);

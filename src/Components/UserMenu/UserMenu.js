import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
import authSelectors from '../../redux/auth-selectors';
// import defaultAvatar from './default-avatar.png';
import { VscAccount } from 'react-icons/vsc';
import contactsOperations from '../../redux/contacts-operations';
import styles from './usermenu.module.css';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// const styles = {};
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  //   const avatar = defaultAvatar;
  const classes = useStyles();

  return (
    <div className={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span className={styles.name}>You logged in as {name}</span>
      <VscAccount size="24" />
      <Button
        size="small"
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<LockOpenIcon />}
        onClick={() => dispatch(contactsOperations.logOut())}
      >
        Log Out
      </Button>
      {/* <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(contactsOperations.logOut())}
      >
        Log Out
      </button> */}
    </div>
  );
}

import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
import authSelectors from '../../redux/auth-selectors';
// import defaultAvatar from './default-avatar.png';
import { VscAccount } from 'react-icons/vsc';
import contactsOperations from '../../redux/contacts-operations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  //   const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <VscAccount width="350" />
      <button
        type="button"
        onClick={() => dispatch(contactsOperations.logOut())}
      >
        Log Out
      </button>
    </div>
  );
}

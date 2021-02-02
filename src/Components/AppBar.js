import { useSelector } from 'react-redux';
import Navigation from './Navigation';
// import UserMenu from './UserMenu/UserMenu';
import AuthNav from './Authorization';
import { getIsLoggedIn } from '../redux/contacts-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      <AuthNav />
      {/* <UserMenu /> */}
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
}

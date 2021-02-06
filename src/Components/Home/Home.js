import { NavLink } from 'react-router-dom';
import styles from './home.module.css';
import Matrix from '../../welcome.png';

export default function HomeView() {
  return (
    <div className={styles.greatings}>
      <h1>
        Hello dear user, to access your contacts you need to{' '}
        <NavLink to="/login" exact className={styles.link}>
          log in
        </NavLink>{' '}
        or{' '}
        <NavLink to="/register" exact className={styles.link}>
          sign up
        </NavLink>{' '}
      </h1>
      <img src={Matrix} width="30%" />
    </div>
  );
}

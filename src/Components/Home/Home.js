import { NavLink } from 'react-router-dom';
import styles from './home.module.css';

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
          register
        </NavLink>{' '}
        👀🐱‍🏍
      </h1>
    </div>
  );
}

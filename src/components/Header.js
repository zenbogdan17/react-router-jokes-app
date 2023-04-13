import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/articles">
            Articles
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;

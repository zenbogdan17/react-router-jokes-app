import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/jokes" activeClassName={styles.active}>
              Jokes
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-joke" activeClassName={styles.active}>
              Add a Joke
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

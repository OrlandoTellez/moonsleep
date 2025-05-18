import logo from '../assets/logo.svg';
import user from '../assets/user.svg';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.logo}>
                  <img src={logo} alt="MoonSleep Logo" />
                  <h1>MoonSleep</h1>
            </div>
            <div className={styles.user}>
                <Link to="/profile">
                  <img src={user} alt="profile user icon" />
                </Link>
            </div>
        </header>
    </>
  )
}

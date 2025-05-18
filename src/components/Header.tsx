import logo from '../assets/logo.svg';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="MoonSleep Logo" />
                <h1>MoonSleep</h1>
            </div>
            <button>Perfil</button>
        </header>
    </>
  )
}

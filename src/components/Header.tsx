import styles from './Header.module.css';

export const Header = () => {
  return (
    <>
        <header className={styles.header}>
            <h1>MoonSleep</h1>
            <button>Perfil</button>
        </header>
    </>
  )
}

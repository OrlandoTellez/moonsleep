import styles from './InfoProfile.module.css';
import user from '../../assets/user.svg';


export const InfoProfile = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.user}>
                <img src={user} alt="profile user icon" />
            </div>
            <article>
              <h1>Tu perfil</h1>
            </article>
        </div>
    </>
  )
}

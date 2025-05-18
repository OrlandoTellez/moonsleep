import styles from './InfoProfile.module.css';
import { Icon } from '../../components/Icon';
import user from '../../assets/user.svg';

export const InfoProfile = () => {
  return (
    <>
        <div className={styles.container}>
            <Icon 
            icon={user} 
            alt='user icon'
            />      
            <article>
              <h1>Tu perfil</h1>
            </article>
        </div>
    </>
  )
}

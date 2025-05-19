import { Icon } from '../../components/Icon';
import { Button } from '../../components/Button';
import { useAuth0 } from '@auth0/auth0-react';
import user from '../../assets/user.svg';
import styles from './InfoProfile.module.css';

export const InfoProfile = () => {
  const { loginWithRedirect } = useAuth0();
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

            <div>
              <Button 
              text='Iniciar sesión'
              onClick={() => loginWithRedirect()}
              />
            </div>
        </div>
    </>
  )
}

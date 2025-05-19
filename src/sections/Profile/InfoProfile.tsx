import { Icon } from '../../components/Icon'
import { Button } from '../../components/Button'
import { useAuth0 } from '@auth0/auth0-react'
import userSvg from '../../assets/user.svg'
import styles from './InfoProfile.module.css'

export const InfoProfile = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()
  return (
    <>
        <div className={styles.container}>
            <Icon 
            icon={userSvg} 
            alt='user icon'
            />      
            {
              isAuthenticated ? (
                <article>
                  <h1>{user?.name}</h1>
                </article>
              ) : (
                <article>
                  <h1>Tu perfil</h1>
                </article>
              )
            }
            

            <div>
              {
                isAuthenticated ? (
                  <Button
                  text='Cerrar sesión'
                  onClick={() => logout()}
                  />
                ) : (
                  <Button 
                  text='Iniciar sesión'
                  onClick={() => loginWithRedirect()}
                  />
                )
              }
            </div>
        </div>
    </>
  )
}

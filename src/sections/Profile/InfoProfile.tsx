import { Icon } from '../../components/Icon'
import { useAuth0 } from '@auth0/auth0-react'
import userSvg from '../../assets/user.svg'
import styles from './InfoProfile.module.css'


export const InfoProfile = () => {
  const { isAuthenticated, user } = useAuth0()
  return (
    <>
        <div className={styles.container}>
            {
              isAuthenticated ? (
                <Icon 
                icon={user?.picture ?? userSvg} 
                alt='user icon'
                showUserImage={true}
                /> 
              ) : (
                <Icon
                  icon={userSvg}
                  alt='user'
                />
              )
            }
                 
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
            
            
        </div>
    </>
  )
}

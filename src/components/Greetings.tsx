import { useAuth0 } from "@auth0/auth0-react"
import styles from './Greetings.module.css'

export const Greetings = () => {
    const {user, isAuthenticated} = useAuth0()
  return (
    <>
        {
            isAuthenticated && (
              <div className={styles.container}>
                <h1>Bienvenido, {user?.name} </h1>
              </div>
            ) 
        }
    </>
  )
}

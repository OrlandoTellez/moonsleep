import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './Button';
export const ButtonsAutentication = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  return (
    <>
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
    </>
  )
}

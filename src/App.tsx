import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { AppRoutes } from './routes/AppRoutes'

const DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN
const CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID

function App() {
  return (
    <>
      <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
        <Router>
          <AppRoutes />
        </Router>
      </Auth0Provider>
    </>
  )
}

export default App

import styles from './Icon.module.css'
import { useAuth0 } from '@auth0/auth0-react'

interface IconProps {
  icon: string
  alt?: string
  showUserImage?: boolean  
}

export const Icon = ({ icon, alt, showUserImage = false }: IconProps) => {
  const { isAuthenticated, user } = useAuth0()

  const isUserIcon = isAuthenticated && showUserImage
  const imageSrc = isUserIcon ? user?.picture ?? icon : icon

  return (
    <div
      className={styles.icon}
      style={{ padding: isUserIcon ? '0' : '25px' }}
    >
      <img src={imageSrc} alt={alt} />
    </div>
  )
}
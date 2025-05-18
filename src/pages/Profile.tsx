import { InfoProfile } from "../sections/Profile/InfoProfile"
import arroyLeft from "../assets/arrowLeft.svg"
import { Link } from "react-router-dom"
import styles from "./Profile.module.css"
import "../index.css"

export const Profile = () => {
  return (
    <>
        <main>
          <nav className={styles.nav}>
            <Link to="/">
              <img src={arroyLeft} alt="arrow left" />
            </Link>
            <h2>Perfil</h2>
          </nav>
          <div>
            <InfoProfile />
          </div>
        </main>
    </>
  )
}

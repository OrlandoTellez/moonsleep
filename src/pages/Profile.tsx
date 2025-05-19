import { InfoProfile } from "../sections/Profile/InfoProfile"
import { Link } from "react-router-dom"
import styles from "./Profile.module.css"
import arroyLeft from "../assets/arrowLeft.svg"
import "../index.css"
import { OptionsConfiguration } from "../sections/Profile/OptionsConfiguration"
import { ButtonsAutentication } from "../components/ButtonsAutentication"

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
          <OptionsConfiguration />
          <div className={styles.buttons}>
            <ButtonsAutentication />
          </div>
        </main>
    </>
  )
}

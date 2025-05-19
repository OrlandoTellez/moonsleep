import { ButtonOptions } from "../../components/ButtonOptions"
import moon from "../../assets/moon.svg"
import clock from "../../assets/clock.svg"
import styles from "./OptionsConfiguration.module.css"

export const OptionsConfiguration = () => {
    const options = [
    {
      icon: moon,
      alt: "icon moon",
      title: "Objetivos de sueño",
      description: "Configura tu objetivo ideal de horas de sueño",
    },
    {
      icon: clock,
      alt: "icon clock",
      title: "Recordatorios",
      description: "Configura alarmas para mejorar tus hábitos",
    }
  ]
  return (
    <>
        <div className={styles.container}>
            {
                options.map((option, index) => (
                    <ButtonOptions 
                    key={index} {...option} />
                ))
            }
        </div>
    </>
  )
}

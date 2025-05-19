import styles from './ButtonOptions.module.css'
import { Glass } from './Glass'

interface ButtonOptionsProps {
    icon: string
    alt?: string
    title: string
    description: string
}

export const ButtonOptions = ({icon, alt, title, description}: ButtonOptionsProps) => {
  return (
    <>
        <Glass>
            <div className={styles.container}>
                <img src={icon} alt={alt} />
                <article>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </article>
            </div>
        </Glass>
    </>
  )
}

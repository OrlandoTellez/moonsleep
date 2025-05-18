import styles from './CardRecentSleep.module.css'

interface CardRecentSleepProps {
    date: string
    sleepDuration: string
    sleepQuality: string
}

export const CardRecentSleep = ({date, sleepDuration, sleepQuality}: CardRecentSleepProps) => {
  return (
    <>
        <div className={styles.card}>
            <div>
                <h3>{date}</h3>
                <p>{sleepDuration}</p>
            </div>
            <p>{sleepQuality}</p>
        </div>
    </>
  )
}

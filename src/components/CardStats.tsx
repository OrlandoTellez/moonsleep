import styles from './CardStats.module.css'

interface CardStatsProps {
    title: string;
    value: string;
    icon: string;
}

export const CardStats = ({title, value, icon}: CardStatsProps) => {
  return (
    <>
        <div className={styles.card}>
            <div>
                <img src={icon} alt="icon stats" />
            </div>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    </>
  )
}

import { CardStats } from "../../components/CardStats"
import { Glass } from "../../components/Glass"
import time from "../../assets/time.svg"
import quality from "../../assets/quality.svg"
import styles from "./Stats.module.css"
import { CardRecentSleep } from "../../components/CardRecentSleep"

export const Stats = () => {
    const stats = [
        {
            title: "Total Sleep",
            value: "8h 30m",
            icon: time
        },
        {
            title: "Sleep Quality",
            value: "85%",
            icon: quality
        }
    ]

    const recentSleep = [
        {
            date: "sáb, 17 may",
            sleepDuration: "8h 30m",
            sleepQuality: "85%"
        },
        {
            date: "sáb, 17 may",
            sleepDuration: "7h 45m",
            sleepQuality: "80%"
        },
        {
            date: "sáb, 17 may",
            sleepDuration: "6h 50m",
            sleepQuality: "75%"
        }
    ]
  return (
    <>
        <Glass>
            <div className={styles.container}>
                <div>
                    <h2>Sleep Stats</h2>
                    <div className={styles.stats}>
                        {
                            stats.map((stat, index) => (
                                <CardStats key={index} {...stat} />
                            ))
                        }
                    </div>
                </div>

                <div>
                    <h2>Recent sleep</h2>
                    <div className={styles.recent}>
                        {
                            recentSleep.map((sleep, index) => (
                                <CardRecentSleep key={index} {...sleep} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Glass>
    </>
  )
}

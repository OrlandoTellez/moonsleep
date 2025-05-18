import { CardStats } from "../components/CardStats"
import { Glass } from "../components/Glass"
import time from "../assets/time.svg"
import quality from "../assets/quality.svg"
import styles from "./Stats.module.css"

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
  return (
    <>
        <Glass>
            <div>
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
            </div>
        </Glass>
    </>
  )
}

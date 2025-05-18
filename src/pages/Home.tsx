import { Header } from '../components/Header'
import { SleepTracker } from '../sections/SleepTracker'
import styles from '../App.module.css'
import { Stats } from '../sections/Stats'

export const Home = () => {
  return (
    <>
        <main className={styles.main}>
          <Header />
          <SleepTracker />
          <Stats />
        </main>
    </>
  )
}

import { Header } from './components/Header'
import { SleepTracker } from './sections/SleepTracker'
import styles from './App.module.css'
import { Stats } from './sections/Stats'

function App() {
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

export default App

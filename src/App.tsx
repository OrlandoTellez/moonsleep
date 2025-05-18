import { Header } from './components/Header'
import { SleepTracker } from './sections/SleepTracker'
import styles from './App.module.css'

function App() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <SleepTracker />

      </main>
    </>
  )
}

export default App

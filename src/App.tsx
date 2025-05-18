import { Header } from './components/Header'
import styles from './App.module.css'
import { Glass } from './components/Glass'

function App() {
  

  return (
    <>
      <main className={styles.main}>
        <Header />

        <Glass>
          <h1>MoonSleep</h1>
          <p>Sleep better, live better.</p>
          <p>Find your perfect sleep solution.</p>
        </Glass>
        
      </main>
    </>
  )
}

export default App

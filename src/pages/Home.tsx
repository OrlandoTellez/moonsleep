import { Header } from '../components/Header'
import { SleepTracker } from '../sections/SleepTracker'
import { Stats } from '../sections/Stats'
import '../index.css'

export const Home = () => {
  return (
    <>
        <main>
          <Header />
          <SleepTracker />
          <Stats />
        </main>
    </>
  )
}

import { Header } from '../components/Header'
import { SleepTracker } from '../sections/Home/SleepTracker'
import { Stats } from '../sections/Home/Stats'
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

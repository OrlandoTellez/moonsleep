import { Header } from '../components/Header'
import { SleepTracker } from '../sections/Home/SleepTracker'
import { Stats } from '../sections/Home/Stats'
import { Greetings } from '../components/Greetings'
import '../index.css'

export const Home = () => {
  return (
    <>
        <main>
          <Header />
          <Greetings />
          <SleepTracker />
          <Stats />
        </main>
    </>
  )
}

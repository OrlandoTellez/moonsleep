import { Glass } from '../components/Glass';
import logo from '../assets/logo.svg';
import styles from './SleepTracker.module.css';

export const SleepTracker = () => {
  return (
    <>
        <Glass>
            <div className={styles.container}>    
                <div className={styles.user}>
                    <img src={logo} alt="profile user icon" />
                </div>
                <article className={styles.article}>
                    <h2>Track your sleep</h2>
                    <button>Start Tracking</button>
                </article>
            </div>
        </Glass>
    </>
  )
}

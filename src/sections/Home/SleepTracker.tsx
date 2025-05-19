import { Glass } from '../../components/Glass';
import logo from '../../assets/logo.svg';
import styles from './SleepTracker.module.css';
import { Icon } from '../../components/Icon';
import { Button } from '../../components/Button';

export const SleepTracker = () => {
  return (
    <>
        <Glass>
            <div className={styles.container}>    
                <Icon
                icon={logo} 
                alt='logo'
                />
                <article className={styles.article}>
                    <h2>Track your sleep</h2>
                    <Button
                    text='Start Tracking'
                    onClick={() => console.log('Start Tracking')}
                    />
                </article>
            </div>
        </Glass>
    </>
  )
}

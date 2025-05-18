import styles from './Icon.module.css';

interface IconProps {
    icon: string
    alt?: string
}

export const Icon = ({icon, alt}: IconProps) => {
  return (
    <>
        <div className={styles.icon}>
            <img src={icon} alt={alt} />
        </div>
    </>
  )
}

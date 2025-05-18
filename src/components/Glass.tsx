import styles from './Glass.module.css';

interface GlassProps {
    children: React.ReactNode;
}

export const Glass = ({ children }: GlassProps) => {
  return (
    <>
        <article className={styles.glass}>
            {children}
        </article>
    </>
  )
}

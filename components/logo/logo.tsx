import styles from './logo.module.css';

export default function Logo(): JSX.Element {
  return (
    <div className="d-flex align-items-center">
      <div className={styles.logo}></div>
      <div className={`${styles.logoTitle}`}>TheBox</div>
    </div>
  )
}

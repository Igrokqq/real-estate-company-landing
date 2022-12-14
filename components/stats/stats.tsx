import styles from './stats.module.css';

export default function Stats(): JSX.Element {
  return (
    <section className={`${styles.container} d-flex align-items-center justify-content-center`}>
      <div className="d-flex flex-column">
        <div className={`${styles.illustrations}`}>
          <div className={`${styles.illustrationBlock}`}>
            <div className={styles.statTitle}>123</div>
            <div className={styles.statShortDescription}>Projects Completed</div>
            <div className={`${styles.projectsCompletedIcon} ${styles.icon}`}></div>
          </div>
          <div className={`${styles.illustrationBlock}`}>
            <div className={styles.statTitle}>84</div>
            <div className={styles.statShortDescription}>Happy Clients</div>
            <div className={`${styles.happyClientsIcon} ${styles.icon}`}></div>
          </div>
        </div>
        <div className={`${styles.illustrations}`}>
          <div className={`${styles.illustrationBlock}`}>
            <div className={styles.statTitle}>30</div>
            <div className={styles.statShortDescription}>Years in Business</div>
            <div className={`${styles.yearsInBusinessIcon} ${styles.icon}`}></div>
          </div>
          <div className={`${styles.illustrationBlock}`}>
            <div className={styles.statTitle}>37</div>
            <div className={styles.statShortDescription}>Awards Win</div>
            <div className={`${styles.awardsWinIcon} ${styles.icon}`}></div>
          </div>
        </div>
      </div>

      <div className={styles.contentBlock}>
        <div className={styles.contentBlockHeading}>30 Years Experience</div>
        <div className={styles.contentBlockDescription}>Our company has been the leading provided construction services to clients throughout the USA since 1988.</div>
        <button className={styles.contactUsBtn} type="button">Contact Us</button>
      </div>
    </section>
  )
}

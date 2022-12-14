import styles from './projects.module.css';

export default function ProjectsList(): JSX.Element {
  return (
    <div className="container">
      <div className={`row ${styles.row}`}>
        <div className={`${styles.projectCard} col`}>
          <div className={styles.projectCardInfo}>
            <div className={styles.projectCardHeading}>Wildstone Infra Hotel</div>
            <div className={styles.projectCardSubHeading}>2715 Ash Dr. San Jose, South Dakota</div>
          </div>
        </div>

        <div className={`${styles.projectCard} col`}>
          <div className={styles.projectCardInfo}>
            <div className={styles.projectCardHeading}>Wish Stone Building</div>
            <div className={styles.projectCardSubHeading}>2972 Westheimer Rd. Santa Ana, Illinois </div>
          </div>
        </div>
      </div>

      <div className={`row ${styles.row}`}>
        <div className={`${styles.projectCard} col`}>
          <div className={styles.projectCardInfo}>
            <div className={styles.projectCardHeading}>Mr. Parkinston’s House</div>
            <div className={styles.projectCardSubHeading}>3517 W. Gray St. Utica, Pennsylvania</div>
          </div>
        </div>

        <div className={`${styles.projectCard} col`}>
          <div className={styles.projectCardInfo}>
            <div className={styles.projectCardHeading}>Oregano Height</div>
            <div className={styles.projectCardSubHeading}>2464 Royal Ln. Mesa, New Jersey </div>
          </div>
        </div>
      </div>
    </div>
  )
}

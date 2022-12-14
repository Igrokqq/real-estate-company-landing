import styles from './services.module.css';

export default function Services(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={`row ${styles.row1}`}>
        <div className={`col-sm ${styles.serviceCard}`}>
          <div className={`${styles.icon} ${styles.constructionIcon}`}></div>

          <div className={`${styles.cardTitle}`}>
            Construction
          </div>
        </div>

        <div className={`col-sm ${styles.serviceCard}`}>
          <div className={`${styles.icon} ${styles.renovationIcon}`}></div>

          <div className={`${styles.cardTitle}`}>
            Renovation
          </div>
        </div>

        <div className={`col-sm ${styles.serviceCard}`}>
          <div className={`${styles.icon} ${styles.consultationIcon}`}></div>

          <div className={`${styles.cardTitle}`}>
            Consultation
          </div>
        </div>
      </div>

      <div className={`row ${styles.row2}`}>
        <div className={`col-sm ${styles.serviceCard}`}>
          <div className={`${styles.icon} ${styles.repairServicesIcon}`}></div>

          <div className={`${styles.cardTitle}`}>
            Repair Services
          </div>
        </div>

        <div className={`col-sm ${styles.serviceCard}`}>
          <div className={`${styles.icon} ${styles.architectureIcon}`}></div>

          <div className={`${styles.cardTitle}`}>
            Architecture
          </div>
        </div>

        <div className={`col-sm ${styles.serviceCard}`}>
          <div className={`${styles.icon} ${styles.electricIcon}`}></div>

          <div className={`${styles.cardTitle}`}>
            Electric
          </div>
        </div>
      </div>
    </section >
  )
}

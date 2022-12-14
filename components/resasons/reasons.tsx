import styles from './reasons.module.css';

export default function Reasons(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>Our Reputation</div>

      <div className={`row ${styles.cardsGrid}`}>
        <div className={`col-sm ${styles.reasonCard}`}>
          <div className={`${styles.reasonIcon}`}></div>
          <div className={`${styles.reasonHeadingText}`}>Best Services</div>

          <div className={`${styles.reasonSubHeadingText}`}>
            Nullam senectus porttitor in eget. Eget rutrum leo interdum.
          </div>
        </div>

        <div className={`col-sm ${styles.reasonCard}`}>
          <div className={`${styles.reasonIcon}`}></div>
          <div className={`${styles.reasonHeadingText}`}>Best Teams</div>
          <div className={`${styles.reasonSubHeadingText}`}>
            Cursus semper tellus volutpat aliquet lacus.
          </div>
        </div>

        <div className={`col-sm ${styles.reasonCard}`}>
          <div className={`${styles.reasonIcon}`}></div>
          <div className={`${styles.reasonHeadingText}`}>Best Designs</div>
          <div className={`${styles.reasonSubHeadingText}`}>
            Ultricies at ipsum nunc, tristique nam lectus.
          </div>
        </div>
      </div>
    </section>
  )
}

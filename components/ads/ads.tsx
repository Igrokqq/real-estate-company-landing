import styles from './ads.module.css';

export default function Ads(): JSX.Element {
  return (
    <section className={`${styles.container} d-flex justify-content-around align-items-center`}>
      <div className="d-flex flex-column">
        <div className={styles.heading}>Free consultation with exceptional quality</div>
        <div className={styles.subHeading}>Just one call away: <span className={styles.underlined}>+84 1102 2703</span></div>
      </div>
      <button className={styles.getYourConsultationBtn} type="button">
        <span className={styles.text}>Get your consultation</span>
      </button>
    </section>
  )
}

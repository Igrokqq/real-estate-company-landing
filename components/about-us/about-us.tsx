import styles from './about-us.module.css';

export default function AboutUs(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.aboutUsImg}></div>
      <div className={styles.aboutUsContentBlock}>
        <div className={styles.heading}>About us</div>
        <div className={styles.text}>
          <p>
            For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.
          </p>

          <p>We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
        </div>
      </div>
    </section>
  )
}

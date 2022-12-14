import Logo from '../logo/logo';
import styles from './footer.module.css';

export default function Footer(): JSX.Element {
  return (
    <section className={`${styles.container} container d-flex align-items-center justify-content-between`}>
      <div className="d-flex flex-column">
        <div className={styles.contactInfoList}>
          <div>
            <span className={styles.contactInfoTitle}>ADDRESS: </span>
            <span>6391 Elgin St. Celina, Delaware 10299</span>
          </div>

          <div>
            <span className={styles.contactInfoTitle}>PHONE: </span>
            <span>+84 1102 2703</span>
          </div>

          <div>
            <span className={styles.contactInfoTitle}>EMAIL: </span>
            <span>hello@thebox.com</span>
          </div>
        </div>

        <div className={styles.logo}></div>
      </div>

      <div className="d-flex flex-column">
        <div>
          <label id="newsletter" className={styles.subscribeLabel}>NEWSLETTER:</label>
          <div className={`${styles.subscribeBtnWrapper} d-flex`}>
            <input className={styles.subscribeInput} placeholder="Your email here" type="text" />
            <button className={styles.subscribeBtn} type="button">Subscribe</button>
          </div>
        </div>

        <div>
          <div className={styles.socialNetworksHeading}>SOCIAL:</div>
          <div className={`d-flex ${styles.socialNetworksIcons}`}>
            <div className={`${styles.icon} ${styles.facebookIcon}`}></div>
            <div className={`${styles.icon} ${styles.linkedinIcon}`}></div>
            <div className={`${styles.icon} ${styles.twitterIcon}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

import styles from './hero-section.module.css'

// pages/_app.js
import { Work_Sans } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const workSans = Work_Sans({ subsets: ['latin'] })

export default function HeroSection(): JSX.Element {
  return (
    <section className={`${styles.container} ${workSans.className} d-flex`}>
      <h1 className={`${styles.headingText} d-flex h-100 flex-column justify-content-center`}>Building things is our mission.</h1>

      <div className={`${styles.navigationPanel} ${workSans.className} d-flex flex-column mt-auto ms-auto`}>
        <div className={styles.navigationPanelHeading}>Feature Projects</div>
        <div className={styles.navigationPanelSubHeading}>The National University of Architecture</div>

        <div className="d-flex mt-auto">
          <div className={`d-flex ${styles.paginationBtn}`}>
            <div className={styles.arrowBack}></div>
            <div className={styles.paginationBtnText}>Back</div>
          </div>

          <div className={`d-flex ${styles.paginationBtn}`}>
            <div className={styles.paginationBtnText}>Next</div>
            <div className={styles.arrowNext}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

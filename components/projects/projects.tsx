import ProjectsList from './projects-list';
import styles from './projects.module.css';

export default function Projects(): JSX.Element {
  return (
    <section className={`${styles.container} d-flex justify-content-around`}>
      <div className={styles.navPanel}>
        <ul className={styles.navPanelList}>
          <div className={styles.navPanelHeading}>Projects</div>

          <li className={`${styles.activeCategory} ${styles.category}`}>All</li>
          <li className={`${styles.category}`}>Commercial</li>
          <li className={`${styles.category}`}>Residential</li>
          <li className={`${styles.category}`}>Other</li>
        </ul>
      </div>

      <div className="d-flex flex-column">
        <ProjectsList />

        <div className={`d-flex justify-content-between align-items-center`}>
          <button type="button" className={styles.paginationBtn}>
            <div className={styles.arrowBack}></div>
            <div className={styles.paginationBtnText}>Back</div>
          </button>
          <div className={`d-flex align-items-center ${styles.pagination}`}>
            <div className={`${styles.paginationItem} ${styles.active}`}></div>
            <div className={styles.paginationItem}></div>
            <div className={styles.paginationItem}></div>
            <div className={styles.paginationItem}></div>
            <div className={styles.paginationItem}></div>
          </div>
          <button type="button" className={styles.paginationBtn}>
            <div className={styles.arrowNext}></div>
            <div className={styles.paginationBtnText}>Next</div>
          </button>
        </div>
      </div >
    </section>
  );
}

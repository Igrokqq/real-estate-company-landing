import Logo from '../logo/logo';
import styles from './header.module.css';


export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className="d-flex align-items-center justify-content-around">
        <Logo />
        <nav className={`${styles.nav} d-flex align-items-center`}>
          <div className={styles.navItem}>
            <a className={`nav-link`} href="#">Home</a>
          </div>

          <div className={styles.navItem}>
            <a className={`nav-link`} href="#">About Us</a>
          </div>

          <div className={styles.navItem}>
            <a className={`nav-link`} href="#">Projects</a>
          </div>

          <div className={styles.navItem}>
            <a className={`nav-link`} href="#">Services</a>
          </div>

          <div className={styles.navItem}>
            <a className={`nav-link ${styles.active}`} href="#" aria-current="page">Contact Us</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

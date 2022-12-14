import styles from './bottom.module.css';

export default function Bottom(): JSX.Element {
  return (
    <section className={`${styles.container} d-flex align-items-center`}>
      <div className={styles.text}>TheBox Company © 2022. All Rights Reserved</div>
    </section>
  )
}

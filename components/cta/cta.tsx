import styles from './cta.module.css';

export default function Cta(): JSX.Element {
  return (
    <section className={`${styles.container} d-flex flex-column  align-items-center`}>
      <div className={styles.heading}>
        What can us do for you?
      </div>
      <div className={styles.subHeading}>
        We are ready to work on a project of any complexity, whether it’s commercial or residential.
      </div>

      <form className={styles.form}>
        <div className="row">
          <div className="col">
            <input type="text" placeholder="Your Name*" className={styles.input}></input>
          </div>

          <div className="col">
            <input type="text" placeholder="Email*" className={styles.input}></input>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <select className={styles.input}>
              <option disabled selected>Reason for Contacting*</option>
            </select>
          </div>

          <div className="col">
            <input type="text" placeholder="Phone*" className={styles.input}></input>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <textarea name="message" id="message" placeholder="Message" className={styles.textarea}></textarea>
          </div>
          <div className={styles.formPlaceholder}><span className={styles.formStar}>*</span> indicates a required field</div>
        </div>

        <div className={`d-flex justify-content-center align-items-center ${styles.formSubmitBtnWrapper}`}>
          <button className={styles.formSubmitBtn}>Submit</button>
        </div>
      </form>
    </section>
  );
}

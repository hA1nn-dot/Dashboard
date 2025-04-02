import styles from "./page.module.css";




export default function Home() {
  return (
    <div className={`${styles.page}`}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h2>Created Tickets</h2>
        </div>
        <div className={styles.measure}>
          <h3>24,208</h3>
          <div className={styles.tendency}>
            -5%<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icon}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
              </svg>
          </div>
        </div>
        <div className={styles.description}>
          Compare to last month
        </div>

      </div>
    </div>
  );
}
